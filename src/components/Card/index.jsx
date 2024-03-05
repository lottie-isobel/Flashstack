import React, { useState, useRef, useEffect } from 'react';

export default function Card() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [initialTitle, setInitialTitle] = useState('');
    const [initialText, setInitialText] = useState('');
    const titleRef = useRef(null);
    const textRef = useRef(null);
  
    /* To prevent the input text from changing when applying styling or modifying the content */
    useEffect(() => {
      setInitialTitle(titleRef.current.innerText);
      setInitialText(textRef.current.innerText);
    }, []);
  
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