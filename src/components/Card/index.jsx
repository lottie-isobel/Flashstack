import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

import React, { useState, useEffect } from 'react';
import ReactLatex from 'react-latex';
import { useEditor } from '../../contexts';

export default function Card() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [initialTitle, setInitialTitle] = useState('');
  const [initialText, setInitialText] = useState('');
  const { titleRef, textRef } = useEditor();

  useEffect(() => {
    setInitialTitle(titleRef.current.innerText);
    setInitialText(textRef.current.innerText);
    console.log("Initial Text:", initialText);
  }, []);

  console.log(textRef.current?.innerHTML);

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
          <span
            className="card-title"
            ref={titleRef}
            contentEditable
            onInput={handleTitleChange}
            suppressContentEditableWarning={true}
          >
            {initialTitle}
          </span>
        </header>
        <div className="latex-wrapper">
          <p
            className="card-text"
            ref={textRef}
            contentEditable
            onInput={handleTextChange}
            suppressContentEditableWarning={true}
          >
            <ReactLatex>{initialText}</ReactLatex>
          </p>
        </div>
      </div>
    </>
  );
}