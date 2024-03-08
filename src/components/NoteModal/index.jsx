import React, { useState, useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { DeleteCardBtn } from "../"

const NoteModal = ({id, child, onClose }) => {
  const [editorNote] = useState(() => withReact(createEditor()));
  
  const initialValueNote = [
    {
      type: 'paragraph',
      children: child,
    },
  ];

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
      <div className="note-modal-overlay" onClick={onClose}>
        <div id="note-modal-content" className="note-modal" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ textAlign:'center' }}>Note Content</h2>
        <Slate editor={editorNote} initialValue={initialValueNote}>
          <div className="card">
            <Editable
              readOnly
              renderLeaf={renderLeaf}
              style={{ top: '3.65px', lineHeight: '1.21' }}
            />
          </div>
        </Slate>
        <DeleteCardBtn id = {id} />
        </div>
      </div>
  );
};

export default NoteModal;