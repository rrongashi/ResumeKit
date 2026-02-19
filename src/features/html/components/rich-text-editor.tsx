'use client';

import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo2,
  SquareCode,
  Strikethrough,
  Type,
  Undo2,
  Underline
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: string;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = '',
  className,
  minHeight = '8rem'
}: RichTextEditorProps) {
  const [, setTick] = useState(0);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Placeholder.configure({ placeholder })],
    content: value || '',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[6rem] px-3 py-2'
      }
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onSelectionUpdate: () => {
      setTick((t) => t + 1);
    }
  });

  const setContent = useCallback(
    (html: string) => {
      if (editor && editor.getHTML() !== html) {
        editor.commands.setContent(html ?? '', { emitUpdate: false });
      }
    },
    [editor]
  );

  useEffect(() => {
    if (value !== editor?.getHTML()) {
      setContent(value || '');
    }
  }, [value, editor, setContent]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl ?? 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  // Stored marks apply to the next typed character when selection is collapsed; isActive only sees current selection
  const isMarkActive = (name: string) =>
    editor.isActive(name) ||
    (editor.state.storedMarks?.some((m) => m.type.name === name) ?? false);

  const runAndRerender = (fn: () => void) => {
    fn();
    setTick((t) => t + 1);
  };

  return (
    <div
      className={cn(
        'bg-background focus-within:ring-ring rounded-md border focus-within:ring-2 focus-within:ring-offset-2',
        className
      )}
    >
      <div
        className='flex flex-wrap items-center gap-0.5 border-b px-1 py-1'
        onMouseDown={(e) => e.preventDefault()}
      >
        {/* Marks */}
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={isMarkActive('bold')}
          onPressedChange={() =>
            runAndRerender(() => editor.chain().focus().toggleBold().run())
          }
          aria-label='Bold'
        >
          <Bold className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={isMarkActive('italic')}
          onPressedChange={() =>
            runAndRerender(() => editor.chain().focus().toggleItalic().run())
          }
          aria-label='Italic'
        >
          <Italic className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={isMarkActive('underline')}
          onPressedChange={() =>
            runAndRerender(() => editor.chain().focus().toggleUnderline().run())
          }
          aria-label='Underline'
        >
          <Underline className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={isMarkActive('strike')}
          onPressedChange={() =>
            runAndRerender(() => editor.chain().focus().toggleStrike().run())
          }
          aria-label='Strikethrough'
        >
          <Strikethrough className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={isMarkActive('code')}
          onPressedChange={() =>
            runAndRerender(() => editor.chain().focus().toggleCode().run())
          }
          aria-label='Inline code'
        >
          <Code className='size-4' />
        </Toggle>
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className={cn('size-8', editor.isActive('link') && 'bg-accent')}
          onClick={setLink}
          aria-label='Link'
        >
          <LinkIcon className='size-4' />
        </Button>

        <Separator orientation='vertical' className='mx-0.5 h-5' />

        {/* Undo / Redo */}
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='size-8'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          aria-label='Undo'
        >
          <Undo2 className='size-4' />
        </Button>
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='size-8'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          aria-label='Redo'
        >
          <Redo2 className='size-4' />
        </Button>

        <Separator orientation='vertical' className='mx-0.5 h-5' />

        <Separator orientation='vertical' className='mx-0.5 h-5' />

        {/* Lists - onMouseDown preventDefault keeps editor focus so list commands run with correct selection */}
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={editor.isActive('bulletList')}
          onMouseDown={(e) => e.preventDefault()}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          aria-label='Bullet list'
        >
          <List className='size-4' />
        </Toggle>
        <Toggle
          size='sm'
          className='size-8 p-0'
          pressed={editor.isActive('orderedList')}
          onMouseDown={(e) => e.preventDefault()}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          aria-label='Numbered list'
        >
          <ListOrdered className='size-4' />
        </Toggle>
      </div>
      <EditorContent
        editor={editor}
        style={{ minHeight }}
        className='[&_.ProseMirror]:[&_.is-editor-empty]:before:text-muted-foreground [&_.ProseMirror]:min-h-[6rem] [&_.ProseMirror]:px-3 [&_.ProseMirror]:py-2 [&_.ProseMirror]:focus:outline-none [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-6 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-6 [&_.ProseMirror]:[&_.is-editor-empty]:before:pointer-events-none [&_.ProseMirror]:[&_.is-editor-empty]:before:float-left [&_.ProseMirror]:[&_.is-editor-empty]:before:content-[attr(data-placeholder)]'
      />
    </div>
  );
}
