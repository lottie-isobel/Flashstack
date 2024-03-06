import React, { useRef, useMemo, useContext, createContext } from "react";
import { createEditor, Transforms } from 'slate';
import { withReact } from 'slate-react';

const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const titleRef = useRef(null);
  const textRef = useRef(document.createElement("div"));
  const slateEditor = useMemo(() => withReact(createEditor()), []);

  const insertEquation = (equation) => {
    if (!slateEditor || !textRef.current) {
      return;
    }
  
    const currentContent = textRef.current.innerHTML;
    const updatedContent = `${currentContent} ${equation}`;
  
    // Update Slate editor value based on the modified content
    Transforms.insertText(slateEditor, updatedContent);
  };
  // const insertEquation = (equation) => {
  //   if (!slateEditor || !textRef.current) {
  //     return;
  //   }
  
  //   const currentContent = textRef.current.innerHTML;
  //   const updatedContent = `${currentContent} ${equation}`;
  
  //   // Update Slate editor value based on the modified content
  //   Transforms.insertText(slateEditor, updatedContent);
  // };

  return (
    <EditorContext.Provider value={{ titleRef, textRef, insertEquation, slateEditor }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);


