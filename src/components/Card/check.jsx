import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useEditor } from '../../contexts';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

export default function Card() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [initialTitle, setInitialTitle] = useState('');
    const [initialText, setInitialText] = useState('');
    const { titleRef, textRef } = useEditor()
  
    /* To prevent the input text from changing when applying styling or modifying the content */
    useEffect(() => {
      setInitialTitle(titleRef.current.innerText);
      setInitialText(textRef.current.innerText);
    }, []);

    console.log(textRef.current?.innerHTML)
  
    /* To handle changes in the inputs */
    const handleTitleChange = () => {
      setTitle(titleRef.current.innerText);
    };
  
    const handleTextChange = () => {
      setText(textRef.current.innerText);
    };

  return (
    <>
      <div className="card">
        <header>
          <span className="card-title" ref={titleRef} contentEditable onInput={handleTitleChange} suppressContentEditableWarning={true}>
            {initialTitle}
          </span>
        </header>
        <p className="card-text" ref={textRef} contentEditable onInput={handleTextChange} suppressContentEditableWarning={true}>
          {initialText}
        </p>
      </div>
    </>
  )
}