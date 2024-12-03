import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useEffect, useState } from "react";
import { Editor as Editors } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface Prop {
  setText: any;
  placeholder: string;
}

// // Utility function to sanitize text
// const sanitizeText = (text: string): string => {
//   // Remove problematic characters or sanitize them
//   return text.replace(/[^\x20-\x7E]/g, ""); // Removes non-ASCII characters
// };

export default function Editor2({ setText, placeholder }: Prop) {
  const [editorState, setEditorState] = useState(() => {
    const initialContent = { blocks: [], entityMap: {} }; // Basic empty content
    return EditorState.createWithContent(convertFromRaw(initialContent));
  });

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    const plainText = editorState.getCurrentContent().getPlainText("\u0001");
    // const sanitizedText = sanitizeText(plainText); // Sanitize the text
    console.log("Editor State:", plainText);
    setText(plainText);
  };

  useEffect(() => {
    // console.log("Editor State:", editorState);
  }, [editorState]);

  return (
    <>
      <Editors
        editorStyle={{}}
        toolbarStyle={{
          background: "transparent",
          color: "white",
          border: "1px solid gray",
        }}
        wrapperStyle={{
          border: "1px solid gray",
          padding: 2,
        }}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder={placeholder}
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: [
            { text: "APPLE", value: "apple" },
            { text: "BANANA", value: "banana", url: "banana" },
            { text: "CHERRY", value: "cherry", url: "cherry" },
            { text: "DURIAN", value: "durian", url: "durian" },
            { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
            { text: "FIG", value: "fig", url: "fig" },
            { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
            { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
          ],
        }}
      />
    </>
  );
}
