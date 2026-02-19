'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { DatePickerField } from '@/features/html/components/date-picker-field';
import { RichTextEditor } from '@/features/html/components/rich-text-editor';
import { Plus, Trash2 } from 'lucide-react';

const SECTION_TYPES = [
  'Work experience',
  'Education',
  'Skills',
  'Projects',
  'Certifications',
  'Languages',
  'Summary'
] as const;

type SectionType = (typeof SECTION_TYPES)[number];

interface WorkExperienceData {
  company: string;
  role: string;
  from: string | undefined;
  until: string | undefined;
  content: string;
}

interface DynamicSection {
  id: string;
  type: SectionType;
  workExperience?: WorkExperienceData;
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 11);
}

export default function NewTemplatePage() {
  const router = useRouter();
  const [sections, setSections] = useState<DynamicSection[]>([]);

  const addSection = (type: SectionType) => {
    const id = generateId();
    if (type === 'Work experience') {
      setSections((prev) => [
        ...prev,
        {
          id,
          type,
          workExperience: {
            company: '',
            role: '',
            from: undefined,
            until: undefined,
            content: ''
          }
        }
      ]);
    } else {
      setSections((prev) => [...prev, { id, type }]);
    }
  };

  const removeSection = (id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  };

  const updateWorkExperience = (
    id: string,
    updates: Partial<WorkExperienceData>
  ) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === id && s.workExperience
          ? { ...s, workExperience: { ...s.workExperience, ...updates } }
          : s
      )
    );
  };

  return (
    <div className='flex min-h-[60vh] flex-col items-center px-6 py-10'>
      <div className='flex w-full max-w-2xl flex-col gap-8'>
        <header className='flex flex-col gap-1 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Create template
          </h1>
          <p className='text-muted-foreground text-sm'>
            Build your resume by adding a profile and any sections you need.
          </p>
        </header>

        <div className='flex flex-col gap-4'>
          {/* Profile section (fixed) */}
          <section className='bg-card flex flex-col gap-4 rounded-lg border p-6 shadow-sm'>
            <h2 className='text-muted-foreground text-sm font-medium'>
              Profile
            </h2>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-medium'>Name</label>
              <Input placeholder='Your name' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-medium'>Title</label>
              <Input placeholder='e.g. Senior Software Engineer' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-medium'>Contact</label>
              <Textarea
                placeholder='Email, phone, location, links...'
                rows={2}
              />
            </div>
          </section>

          {/* Add section button */}
          <div className='flex justify-center'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type='button'
                  variant='outline'
                  size='icon'
                  className='h-12 w-12 rounded-full border-dashed'
                  aria-label='Add section'
                >
                  <Plus className='size-6' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='center' className='min-w-[12rem]'>
                {SECTION_TYPES.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onSelect={() => addSection(type)}
                  >
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Dynamic sections */}
          {sections.map((section) => (
            <section
              key={section.id}
              className='bg-card flex flex-col gap-4 rounded-lg border p-6 shadow-sm'
            >
              <div className='flex items-start justify-between gap-4'>
                <h2 className='text-muted-foreground text-sm font-medium'>
                  {section.type}
                </h2>
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-destructive shrink-0'
                  onClick={() => removeSection(section.id)}
                  aria-label={`Remove ${section.type}`}
                >
                  <Trash2 className='size-4' />
                </Button>
              </div>
              {section.type === 'Work experience' && section.workExperience && (
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Company</label>
                    <Input
                      placeholder='Company name'
                      value={section.workExperience.company}
                      onChange={(e) =>
                        updateWorkExperience(section.id, {
                          company: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Role</label>
                    <Input
                      placeholder='Job title'
                      value={section.workExperience.role}
                      onChange={(e) =>
                        updateWorkExperience(section.id, {
                          role: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-medium'>From</label>
                      <DatePickerField
                        value={section.workExperience.from}
                        onChange={(from) =>
                          updateWorkExperience(section.id, { from })
                        }
                        placeholder='Start date'
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-medium'>Until</label>
                      <DatePickerField
                        value={section.workExperience.until}
                        onChange={(until) =>
                          updateWorkExperience(section.id, { until })
                        }
                        placeholder='End date'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>
                      Description / bullet points
                    </label>
                    <RichTextEditor
                      value={section.workExperience.content}
                      onChange={(content) =>
                        updateWorkExperience(section.id, { content })
                      }
                    />
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Empty state when no dynamic sections */}
          {sections.length === 0 && (
            <p className='text-muted-foreground text-center text-sm'>
              Click the + to add a section (work experience, education, etc.)
            </p>
          )}
        </div>

        <div className='flex items-center justify-center gap-2 pt-4'>
          <Button type='button' variant='outline'>
            Cancel
          </Button>
          <Button type='button' disabled>
            Save (coming soon)
          </Button>
        </div>
      </div>
    </div>
  );
}
