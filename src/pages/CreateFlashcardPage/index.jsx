import React, { useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom'
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import ReactLatex from 'react-latex';
import SaveCardBtn from '../../components/SaveCardBtn';
import StylingControls from '../../components/StylingControls';
import AddEquationBtn from '../../components/AddEquationBtn';

export default function CreateFlashcardPage() {
  const { deckid } = useParams()
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
            children: [{ text: '' }],
          },
        ],
      []
  )

  const initialValueBack = useMemo(
    () =>
      JSON.parse(localStorage.getItem('contentBack')) || [
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
      ],
    []
  )
  
  const clearContentsFront = () => {
      const newValue = [
          {
              type: 'paragraph',
              children: [{ text: '' }],
          },
      ];

      localStorage.setItem('contentFront', JSON.stringify(newValue));

      alert('The front of the flashcard has been cleared.')       
  };

  const clearContentsBack = () => {
    const newValue = [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ];

    localStorage.setItem('contentBack', JSON.stringify(newValue));

    alert('The back of the flashcard has been cleared.')       
  };

  const Leaf = props => {
  return (
      <span
      {...props.attributes}
      style={{
          fontSize: props.leaf.xsmall ? '8px' : props.leaf.small ? '12px' : props.leaf.large ? '20px' : props.leaf.xlarge ? '24px' : '16px',
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
          <h2 style={{ textAlign:'center' }}>Front</h2>
          <Slate editor={editorFront} initialValue={initialValueFront}
            onChange={value => {
              const isAstChange = editorFront.operations.some(
                op => 'set_selection' !== op.type
              )
              if (isAstChange) {
                const contentFront = JSON.stringify(value)
                localStorage.setItem('contentFront', contentFront)
              }
            }}
          >
            <StylingControls />
            <div className="card">
              <Editable
                  editor={editorFront}
                  renderLeaf={renderLeaf}
                  placeholder='Type here'
                  style={{ top: '3.65px', lineHeight: '1.4385' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent:'center'}}>
              <button onClick={clearContentsFront}>Clear</button>
              <AddEquationBtn />
              <SaveCardBtn />
            </div>
          </Slate>
        </div>
        <div id='back' style={backStyle}>
          <h2 style={{ textAlign:'center' }}>Back</h2>
          <Slate editor={editorBack} initialValue={initialValueBack}
            onChange={value => {
              const isAstChange = editorBack.operations.some(
                op => 'set_selection' !== op.type
              )
              if (isAstChange) {
                const contentBack = JSON.stringify(value)
                localStorage.setItem('contentBack', contentBack)
              }
            }}
          >
            <StylingControls />
            <div className="card">
              <Editable
                  editor={editorBack}
                  renderLeaf={renderLeaf}
                  placeholder='Type here'
                  style={{ top: '3.65px', lineHeight: '1.4385' }}
                  />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent:'center'}}>
              <button onClick={clearContentsBack}>Clear</button>
              <AddEquationBtn />
              <SaveCardBtn />
            </div>
          </Slate>
        </div>
      <button className='buttons' onClick={toggleFlip}>Flip card</button>
    </>
  )
}