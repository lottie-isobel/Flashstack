import React, { useRef, useContext, createContext } from "react";
//Good template for createContext
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
