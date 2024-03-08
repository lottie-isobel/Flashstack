import React, { useState, useMemo, useCallback } from "react";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import './index.css'

export default function RevisionCard({ question, answer }) {
  const [editorFront] = useState(() => withReact(createEditor()));
  const [editorBack] = useState(() => withReact(createEditor()));
  const [isFrontDisplayed, setIsFrontDisplayed] = useState(true);

  const parsedQuestion = isValidJSON(question) ? JSON.parse(question) : null;
  const parsedAnswer = isValidJSON(answer) ? JSON.parse(answer) : null;

  const toggleFlip = () => {
    setIsFrontDisplayed(!isFrontDisplayed);
  };

  const frontStyle = {
    display: isFrontDisplayed ? 'block' : 'none'
  };

  const backStyle = {
    display: isFrontDisplayed ? 'none' : 'block'
  };

  const Leaf = props => {
    return (
        <span
        {...props.attributes}
        style={{
            color: props.leaf.black ? 'black' : props.leaf.blue ? 'blue' : props.leaf.red ? 'red' : props.leaf.green ? 'green' : 'black',
            background: props.leaf.yellowHL ? 'yellow' : props.leaf.cyanHL ? 'cyan' : props.leaf.greyHL ? 'grey' : props.leaf.magentaHL ? 'magenta' : 'none',
            fontWeight: props.leaf.bold ? 'bold' : 'normal',
            fontStyle: props.leaf.italic ? 'italic' : 'normal',
            textDecoration: props.leaf.underline ? 'underline' : props.leaf.strikethrough ? 'line-through' : 'none',
            verticalAlign: props.leaf.sub ? '-1px' : props.leaf.super ? '4px' : 'baseline',
        }}
        >
        {props.children}
        </span>
    )
  }
  
  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <>
      <div id='front' style={frontStyle}>
        <h2 style={{ textAlign:'center' }}>Question</h2>
        {parsedQuestion && (
          <Slate editor={editorFront} initialValue={parsedQuestion}>
            <div className="card">
              <Editable
                readOnly
                renderLeaf={renderLeaf}
                style={{ top: '3.65px', lineHeight: '1.4385' }}
              />
            </div>
          </Slate>
        )}
      </div>
      <div id='back' style={backStyle}>
        <h2 style={{ textAlign:'center' }}>Answer</h2>
        {parsedAnswer && (
          <Slate editor={editorBack} initialValue={parsedAnswer}>
            <div className="card">
              <Editable
                readOnly
                renderLeaf={renderLeaf}
                placeholder='Type here'
                style={{ top: '3.65px', lineHeight: '1.4385' }}
              />
            </div>
          </Slate>
        )}
      </div>
      <button className='buttons' onClick={toggleFlip}>Flip card</button>
    </>
  );
}

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}