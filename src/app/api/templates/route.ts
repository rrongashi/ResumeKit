import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

import { prisma } from '@/lib/db';

// Ensure this route runs in a Node.js runtime so we can use the filesystem.
export const runtime = 'nodejs';

export async function GET() {
  try {
    const templates = await prisma.template.findMany({
      orderBy: { createdAt: 'desc' }
    });

    for (const template of templates) {
      template.imageUrl = `${process.env.NEXT_PUBLIC_URL}${template.imageUrl}`;
    }

    return NextResponse.json(templates);
  } catch (error) {
    console.error('[TEMPLATES_GET_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get('name');
    const type = formData.get('type');
    const description = formData.get('description');
    const image = formData.get('image');

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }

    if (!type || typeof type !== 'string') {
      return NextResponse.json({ error: 'type is required' }, { status: 400 });
    }

    if (!image || !(image instanceof File)) {
      return NextResponse.json(
        { error: 'image file is required' },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'templates');
    await fs.mkdir(uploadsDir, { recursive: true });

    const ext = path.extname(image.name) || '.png';
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}${ext}`;
    const filePath = path.join(uploadsDir, fileName);

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filePath, buffer);

    const imageUrl = `${process.env.NEXT_PUBLIC_URL}/templates/${fileName}`;

    const template = await prisma.template.create({
      data: {
        name,
        type,
        imageUrl,
        description:
          description && typeof description === 'string' ? description : null
      }
    });

    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    console.error('[TEMPLATES_POST_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to create template' },
      { status: 500 }
    );
  }
}
