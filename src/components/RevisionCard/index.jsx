import React, { useState, useMemo, useCallback } from "react";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import './index.css'

export default function RevisionCard({ question, answer }) {
  const [editorFront] = useState(() => withReact(createEditor()));
  const [editorBack] = useState(() => withReact(createEditor()));
  const [isFrontDisplayed, setIsFrontDisplayed] = useState(true);

  const toggleFlip = () => {
    setIsFrontDisplayed(!isFrontDisplayed);
  };

  const frontStyle = {
    display: isFrontDisplayed ? 'block' : 'none'
  };

  const backStyle = {
    display: isFrontDisplayed ? 'none' : 'block'
  };

  const initialValueFront = useMemo(
      () =>
        JSON.parse(localStorage.getItem('contentFront')) || [
          {
            type: 'paragraph',
            children: question,
          },
        ],
      []
  )

  const initialValueBack = useMemo(
    () =>
      JSON.parse(localStorage.getItem('contentBack')) || [
        {
          type: 'paragraph',
          children: answer,
        },
      ],
    []
  )

  const Leaf = props => {
    return (
        <span
        {...props.attributes}
        style={{
            fontSize: props.leaf.xsmall ? '8px' : props.leaf.small ? '12px' : props.leaf.large ? '20px' : props.leaf.xlarge ? '24px' : '24px',
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
          <Slate editor={editorFront} initialValue={initialValueFront}>
            <div className="card">
              <Editable
                readOnly
                renderLeaf={renderLeaf}
                style={{ top: '3.65px', lineHeight: '1.4385' }}
              />
            </div>
          </Slate>
        </div>
        <div id='back' style={backStyle}>
          <h2 style={{ textAlign:'center' }}>Answer</h2>
          <Slate editor={editorBack} initialValue={initialValueBack}>
            <div className="card">
              <Editable
                readOnly
                renderLeaf={renderLeaf}
                placeholder='Type here'
                style={{ top: '3.65px', lineHeight: '1.4385' }}
                  />
            </div>
          </Slate>
        </div>
      <button className='buttons' onClick={toggleFlip}>Flip card</button>
    </>
  );
}
