import React, { useRef, useState, useContext, createContext } from "react";

const EditorContext = createContext();
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const authenticated = useState(false)
  return (
    <AuthContext.Provider value={{authenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export const EditorProvider = ({ children }) => {
    const titleRef = useRef(null);
    const textRef = useRef(null);  
  return (
    <EditorContext.Provider value={{ titleRef, textRef }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
export const useEditor = () => useContext(EditorContext);
