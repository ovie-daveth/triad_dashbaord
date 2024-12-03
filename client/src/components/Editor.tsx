import React, { useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser as PMDOMParser } from "prosemirror-model";
import { baseKeymap, toggleMark } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import "prosemirror-view/style/prosemirror.css";

// Define the schema
const schema = new Schema({
  nodes: {
    doc: {
      content: "block+",
    },
    text: {
      group: "inline",
    },
    paragraph: {
      group: "block",
      content: "inline*",
      parseDOM: [{ tag: "p" }],
      toDOM: () => ["p", 0],
    },
    superscript: {
      group: "inline",
      content: "text*",
      inline: true,
      parseDOM: [{ tag: "sup" }],
      toDOM: () => ["sup", 0],
    },
    subscript: {
      group: "inline",
      content: "text*",
      inline: true,
      parseDOM: [{ tag: "sub" }],
      toDOM: () => ["sub", 0],
    },
  },
  marks: {
    bold: {
      parseDOM: [{ tag: "strong" }],
      toDOM: () => ["strong", 0],
    },
    italic: {
      parseDOM: [{ tag: "em" }],
      toDOM: () => ["em", 0],
    },
  },
});

export default function Editor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const state = EditorState.create({
        schema,
        plugins: [
          keymap(baseKeymap), // Add default keyboard shortcuts
        ],
      });

      const view = new EditorView(editorRef.current, {
        state,
        dispatchTransaction(transaction) {
          const newState = view.state.apply(transaction);
          view.updateState(newState);
        },
      });

      editorViewRef.current = view;
    }

    return () => {
      editorViewRef.current?.destroy();
    };
  }, []);

  return (
    <div>
      <div className="toolbar">
        {/* Add toolbar buttons and commands here */}
        <button
          onClick={() => {
            if (editorViewRef.current) {
              const { state, dispatch } = editorViewRef.current;
              toggleMark(schema.marks.bold)(state, dispatch);
            }
          }}
        >
          Bold
        </button>
      </div>
      <div ref={editorRef} className="editor" />
    </div>
  );
}
