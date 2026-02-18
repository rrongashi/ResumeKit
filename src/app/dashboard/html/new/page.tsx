'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NewTemplatePage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [type, setType] = useState('resume');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!image) {
      setError('Please select an image for the template.');
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('type', type);
      if (description) {
        formData.append('description', description);
      }
      formData.append('image', image);

      const response = await fetch('/api/templates', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? 'Failed to create template');
      }

      router.push('/dashboard/templates');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col gap-6 p-6'>
      <header className='flex flex-col gap-1'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Create template
        </h1>
        <p className='text-muted-foreground text-sm'>
          Define a new resume template by providing a name, type, description,
          and preview image.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className='bg-card flex max-w-xl flex-col gap-4 rounded-lg border p-6 shadow-sm'
      >
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium'>
            Name <span className='text-destructive'>*</span>
          </label>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder='Modern Professional'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium'>
            Type <span className='text-destructive'>*</span>
          </label>
          <Input
            value={type}
            onChange={(event) => setType(event.target.value)}
            placeholder='resume'
            required
          />
          <p className='text-muted-foreground text-xs'>
            You can use this to group templates, for example &quot;resume&quot;
            or &quot;cover-letter&quot;.
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium'>Description</label>
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder='Short description of the layout or style.'
            rows={3}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium'>
            Preview image <span className='text-destructive'>*</span>
          </label>
          <Input
            type='file'
            accept='image/*'
            onChange={(event) => {
              const file = event.target.files?.[0] ?? null;
              setImage(file);
            }}
            required
          />
          <p className='text-muted-foreground text-xs'>
            Upload a small screenshot of the resume template (PNG or JPG).
          </p>
        </div>

        {error && (
          <p className='text-destructive text-sm' role='alert'>
            {error}
          </p>
        )}

        <div className='flex items-center justify-end gap-2 pt-2'>
          <Button
            type='button'
            variant='outline'
            onClick={() => router.push('/dashboard/templates')}
            disabled={submitting}
          >
            Cancel
          </Button>
          <Button type='submit' disabled={submitting}>
            {submitting ? 'Creating...' : 'Create template'}
          </Button>
        </div>
      </form>
    </div>
  );
}
