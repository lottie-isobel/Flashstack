import React, { useRef, useState, useContext, createContext } from "react";

const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const insertEquation = (equation) => {
    // Implement the logic to insert the equation into the textRef content
    textRef.current.innerHTML += ` ${equation} `;
  };

  return (
    <EditorContext.Provider value={{ titleRef, textRef, insertEquation }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);