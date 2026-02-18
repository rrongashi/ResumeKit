'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export interface TemplateItem {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export default function ScreenshotsPage() {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState<TemplateItem | null>(null);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/templates');
        if (!res.ok) throw new Error('Failed to load templates');
        const data = await res.json();
        setTemplates(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-col gap-6 p-6'>
        <header className='flex flex-col gap-1'>
          <h1 className='text-2xl font-semibold tracking-tight'>Screenshots</h1>
          <p className='text-muted-foreground text-sm'>
            Template previews from the database.
          </p>
        </header>
        <p className='text-muted-foreground text-sm'>Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col gap-6 p-6'>
        <header className='flex flex-col gap-1'>
          <h1 className='text-2xl font-semibold tracking-tight'>Screenshots</h1>
          <p className='text-muted-foreground text-sm'>
            Template previews from the database.
          </p>
        </header>
        <p className='text-destructive text-sm' role='alert'>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-6 p-6'>
      <header className='flex flex-col gap-1'>
        <h1 className='text-2xl font-semibold tracking-tight'>Screenshots</h1>
        <p className='text-muted-foreground text-sm'>
          Template previews from the database.
        </p>
      </header>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {templates.map((template) => (
          <figure
            key={template.id}
            className='flex cursor-pointer flex-col gap-2'
            onClick={() => setZoomed(template)}
          >
            <div className='relative aspect-[210/297] w-full overflow-hidden rounded-lg'>
              <Image
                src={template.imageUrl}
                alt={template.name}
                fill
                className='rounded-lg object-contain'
                sizes='(max-width: 768px) 100vw, 33vw'
                unoptimized={template.imageUrl.startsWith('http')}
              />
            </div>
            <figcaption className='text-muted-foreground text-center text-sm'>
              {template.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <Dialog open={!!zoomed} onOpenChange={(open) => !open && setZoomed(null)}>
        <DialogContent className='flex max-h-[90vh] max-w-4xl flex-col border-0 bg-transparent p-0 shadow-none'>
          <DialogTitle className='sr-only'>{zoomed?.name}</DialogTitle>
          {zoomed && (
            <div className='relative flex max-h-[90vh] w-full items-center justify-center'>
              <Image
                src={zoomed.imageUrl}
                alt={zoomed.name}
                width={1400}
                height={1600}
                className='max-h-[85vh] w-auto max-w-full rounded-lg object-contain'
                unoptimized={zoomed.imageUrl.startsWith('http')}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {templates.length === 0 && (
        <p className='text-muted-foreground text-sm'>
          No templates yet. Generate screenshots via GET
          /api/templates/screenshots or add templates from the Templates page.
        </p>
      )}
    </div>
  );
}
