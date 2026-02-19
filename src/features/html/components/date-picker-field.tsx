'use client';

import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { formatDate } from '@/lib/format';
import { cn } from '@/lib/utils';

interface DatePickerFieldProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  className?: string;
}

function parseDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

function toISODateString(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function DatePickerField({
  value,
  onChange,
  placeholder = 'Pick a date',
  className
}: DatePickerFieldProps) {
  const date = parseDate(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type='button'
          variant='outline'
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className='mr-2 size-4' />
          {date ? formatDate(date) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(d) => onChange(d ? toISODateString(d) : undefined)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
