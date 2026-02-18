import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { prisma } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const screenshotsDir = path.join(process.cwd(), 'public', 'templates');
    await fs.mkdir(screenshotsDir, { recursive: true });

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // 🔐 send internal secret header to bypass auth
    await page.setExtraHTTPHeaders({
      'x-internal-secret': process.env.INTERNAL_BYPASS_SECRET || ''
    });

    await page.setViewport({
      width: 1400,
      height: 1800,
      deviceScaleFactor: 2
    });

    // 👉 open REAL page
    await page.goto('http://localhost:3000/dashboard/html', {
      waitUntil: 'networkidle0'
    });

    // wait for templates to render
    await page.waitForSelector('[id^="template-"]');

    // ensure fonts loaded
    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    // 🔎 get all template DOM ids dynamically
    const templateIds = await page.$$eval('[id^="template-"]', (els) =>
      els.map((el) => el.id)
    );

    const screenshots: Array<{ id: string; name: string; path: string }> = [];

    for (const domId of templateIds) {
      const element = await page.$(`#${domId}`);
      if (!element) continue;

      const box = await element.boundingBox();
      if (!box) continue;

      const cleanId = domId.replace('template-', '');
      const fileName = `${cleanId}-screenshot.png`;
      const filePath = path.join(screenshotsDir, fileName);

      await page.evaluate((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const clearBorder = (elem: HTMLElement) => {
          elem.style.border = 'none';
          elem.style.borderWidth = '0';
          elem.style.borderLeftWidth = '0';
          elem.style.boxShadow = 'none';
          elem.style.outline = 'none';
        };
        clearBorder(el as HTMLElement);
        el.querySelectorAll('*').forEach((child) =>
          clearBorder(child as HTMLElement)
        );
      }, domId);

      const inset = 2;
      await page.screenshot({
        path: filePath,
        clip: {
          x: Math.round(box.x) + inset,
          y: Math.round(box.y) + inset,
          width: Math.max(1, Math.round(box.width) - inset * 2),
          height: Math.max(1, Math.round(box.height) - inset * 2)
        }
      });

      const imageUrl = `/templates/${fileName}`;

      // upsert template preview in DB
      const existing = await prisma.template.findFirst({
        where: { name: cleanId, type: 'resume' }
      });

      const dbTemplate = existing
        ? await prisma.template.update({
            where: { id: existing.id },
            data: { imageUrl }
          })
        : await prisma.template.create({
            data: {
              name: cleanId,
              imageUrl,
              type: 'resume'
            }
          });

      screenshots.push({
        id: dbTemplate.id,
        name: dbTemplate.name,
        path: imageUrl
      });
    }

    await browser.close();

    return NextResponse.json({
      message: `Generated ${screenshots.length} template previews`,
      screenshots
    });
  } catch (error) {
    console.error('[TEMPLATES_SCREENSHOTS_ERROR]', error);

    return NextResponse.json(
      {
        error: 'Failed to generate screenshots',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
