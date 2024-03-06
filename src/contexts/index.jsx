import React, { useRef, useState, useContext, createContext } from "react";

const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
    const titleRef = useRef(null);
    const textRef = useRef(null);  
  return (
    <EditorContext.Provider value={{ titleRef, textRef }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
