import React, { useState, useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import ReactLatex from 'react-latex';
import SaveCardBtn from '../../components/SaveCardBtn';
import StylingControls from '../../components/StylingControls';
import AddEquationBtn from '../../components/AddEquationBtn';

export default function CreateNotePage() {
  const [editorNote] = useState(() => withReact(createEditor()));

  const initialValueNote = useMemo(
      () =>
        JSON.parse(localStorage.getItem('contentNote')) || [
          {
            type: 'paragraph',
            children: [{ text: '' }],
          },
        ],
      []
  )
  
  const clearContentsNote = () => {
      const newValue = [
          {
              type: 'paragraph',
              children: [{ text: '' }],
          },
      ];

      localStorage.setItem('contentNote', JSON.stringify(newValue));

      alert('The note has been cleared.')       
  };

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
        <div id='note'>
          <h2 style={{ textAlign:'center' }}>Note</h2>
          <Slate editor={editorNote} initialValue={initialValueNote}
            onChange={value => {
              const isAstChange = editorNote.operations.some(
                op => 'set_selection' !== op.type
              )
              if (isAstChange) {
                const contentNote = JSON.stringify(value)
                localStorage.setItem('contentNote', contentNote)
              }
            }}
          >
            <StylingControls />
            <div className="card">
              <Editable
                  editor={editorNote}
                  renderLeaf={renderLeaf}
                  placeholder='Type here'
                  style={{ top: '6px', lineHeight: '1.21' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent:'center'}}>
              <button onClick={clearContentsNote}>Clear</button>
              <AddEquationBtn />
              <SaveCardBtn type="note"/>
            </div>
          </Slate>
        </div>
    </>
  )
}