import  Color  from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import { Superscript } from "@tiptap/extension-superscript";
import {Subscript} from "@tiptap/extension-subscript"
import StarterKit from '@tiptap/starter-kit'
//import "./tiptap.scss"
import { Dispatch, SetStateAction, useState } from 'react';
import { Code, ListOrdered, Redo2Icon, Strikethrough, Text, Undo2Icon } from 'lucide-react';
import { DotsHorizontalIcon, FontFamilyIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { IconPageBreak } from '@tabler/icons-react';
import "./tiptap.scss"

type Level = 1 | 2 | 3 | 4 | 5 | 6 

const fonts : {name: string, level: Level}[] = [
  {
    name: "H1",
    level: 1,
  },
  {
    name: "H2",
    level: 2,
  },
  {
    name: "H3",
    level: 3,
  },
  {
    name: "H4",
    level: 4,
  },
  {
    name: "H5",
    level: 5,
  },
  {
    name: "H6",
    level: 6,
  },
  
]

const MenuBar = () => {
  const { editor } = useCurrentEditor()
  const [openFont, setOpenFont] = useState(false)
  const [selectedFont, setSelectedFont] = useState<string>('FontFamilyIcon')

  if (!editor) {
    return null
  }

  return (
    <div className="w-full px-5 dark:bg-gray-900 bg-gray-100 p-5 rounded-xl">
      <div className="flex items-center gap-12 flex-wrap">
        <button type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          B
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().toggleMark('superscript').run()}
          disabled={!editor.can().chain().focus().toggleMark('superscript').run()}
          className={editor.isActive('superscript') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          X<sup>2</sup>
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().toggleMark('subscript').run()}
          disabled={!editor.can().chain().focus().toggleMark('subscript').run()}
          className={editor.isActive('subscript') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          X<sub>2</sub>
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          <i>i</i>
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          <Strikethrough />
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
         <Code />
        </button>
        <button type='button' onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          M
        </button>
        <button type='button' onClick={() => editor.chain().focus().clearNodes().run()}>
          N
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          <Text />
        </button>
       <div onClick={() => setOpenFont(!openFont)} className='relative cursor-pointer z-50'>
       {selectedFont === 'FontFamilyIcon' ? (
          <FontFamilyIcon />
        ) : (
          <span className="font-bold">{selectedFont}</span>
        )}
          <div className={`flex flex-col gap-3 absolute bg-white dark:bg-gray-900 w-16 rounded-lg py-2 px-2 z-50 transition-all ease-in-out duration-500 ${openFont ? "h-[200px] opacity-100" : "h-0 overflow-hidden opacity-0 "}`}>
          {
            fonts.map((item, index) => (
              <button key={index} type='button'
              onClick={() => {
                setSelectedFont(item.name);
                editor.chain().focus().toggleHeading({ level: item.level }).run();
              }}
                className={editor.isActive('heading', { level: item.level }) ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
              >
                {item.name}
              </button>
            ))
          }
          </div>
       </div>
        <button type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          <ListBulletIcon />
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          <ListOrdered />
        </button>
        <button type='button' onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <DotsHorizontalIcon />
        </button>
        <button type='button' onClick={() => editor.chain().focus().setHardBreak().run()}>
          <IconPageBreak />
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <Undo2Icon />
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <Redo2Icon />
        </button>
        <button type='button'
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'w-fit bg-gray-600 p-2 rounded-full' : ''}
        >
          Purple
        </button>
      </div>
    </div>
  )
}

interface Prop {
    editorContent?: string;
    setEditorContent: Dispatch<SetStateAction<string>>
    placeholder?: string
}
const EditorComponent = ({editorContent, setEditorContent, placeholder} :Prop) => {
  
    const handleEditorUpdate = ({ editor }: {editor: any}) => {
      // Get the editor content as JSON and update the state
      const content = editor.getHTML()  // Get HTML content
      setEditorContent(content) 
      console.log("contet", content)
    }
    const extensions = [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle,
        Superscript,
        Subscript,
        StarterKit.configure({
          bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          },
          orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          },
        }),
      ]
      

    return (
        <EditorProvider 
          editorContainerProps={{ className: 'editor-container' }}
          slotBefore={<MenuBar />} 
          extensions={extensions} 
          content={editorContent}
          onUpdate={handleEditorUpdate}
          />
        )

}

export default EditorComponent
