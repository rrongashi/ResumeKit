'use client';

import Link from 'next/link';
import { resumeTemplates } from '../data/templates';
import { Button } from '@/components/ui/button';

export default function HtmlPage() {
  return (
    <div className='flex flex-col gap-8 p-6'>
      <div className='flex flex-col gap-10'>
        {resumeTemplates.map((template) => (
          <section key={template.id} className='flex flex-col gap-3'>
            <div className='flex justify-center'>
              {/* A4 proportions so the preview has full page height */}
              <div
                className='border-border mx-auto min-h-[297mm] w-[210mm] rounded-lg border bg-white shadow-sm'
                // We control the HTML content in code, not user input.
                dangerouslySetInnerHTML={{ __html: template.html }}
                id={`template-${template.id}`}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
