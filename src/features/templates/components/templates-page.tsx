'use client';

import { useState } from 'react';
import { resumeTemplates, type ResumeTemplate } from '../data/templates';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<ResumeTemplate | null>(null);

  return (
    <div className='flex flex-col gap-6 p-6'>
      <header className='flex flex-col gap-1'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Resume templates
        </h1>
        <p className='text-muted-foreground text-sm'>
          Pick a template to preview it. You'll be able to use these HTML
          layouts when generating resumes.
        </p>
      </header>

      <div className='grid gap-4 md:grid-cols-3'>
        {resumeTemplates.map((template) => (
          <button
            key={template.id}
            type='button'
            onClick={() => setSelectedTemplate(template)}
            className={cn(
              'bg-card hover:border-primary/60 flex flex-col items-start gap-2 rounded-lg border p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md'
            )}
          >
            <span className='text-sm font-medium'>{template.name}</span>
            <span className='text-muted-foreground text-xs'>
              {template.description}
            </span>
          </button>
        ))}
      </div>

      <Dialog
        open={!!selectedTemplate}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedTemplate(null);
          }
        }}
      >
        <DialogContent className='flex h-[90vh] max-h-[90vh] max-w-5xl flex-col p-0'>
          <DialogHeader className='border-b px-6 py-4'>
            <DialogTitle>
              {selectedTemplate ? selectedTemplate.name : 'Preview'}
            </DialogTitle>
          </DialogHeader>
          <div className='flex flex-1 items-center justify-center px-4 py-4'>
            <div className='origin-top scale-[0.7] transform md:scale-[0.8]'>
              <div
                className='mx-auto max-w-4xl rounded-lg border bg-white'
                // We control the HTML content in code, not user input.
                dangerouslySetInnerHTML={{
                  __html: selectedTemplate?.html ?? ''
                }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
