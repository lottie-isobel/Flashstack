import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { createEditor, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import ReactLatex from 'react-latex';
import { useEditor } from '../../contexts';
import SaveCardBtn from '../SaveCardBtn';
import UpdateCardBtn from '../UpdateCardBtn';
import StylingControls from '../StylingControls';

export default function Card( note, frontFlashcard, backFlashcard ) {
    const [editor] = useState(() => withReact(createEditor()))

    // console.log(note.note)
    // console.log(note.frontFlashcard)
    // console.log(note.backFlashcard)

    // const obj = note
      
    // function getDefinedValues(obj) {
    //     const values = [];
        
    //     for (const key in obj) {
    //       if (obj[key] !== undefined) {
    //         values.push(obj[key]);
    //       }
    //     }
      
    //     return values;
    //   }
      
    //   const result = getDefinedValues(obj);
    //   console.log('Result 1:', result[0]);
    //   console.log('Result 2:', result[1]);

    
      

    
      

    const initialValue = useMemo(
        () =>
          JSON.parse(localStorage.getItem('content')) || [
            {
              type: 'paragraph',
              children: [{ text: '' }],
            },
          ],
        []
    )
    
    const clearContents = () => {
        const newValue = [
            {
                type: 'paragraph',
                children: [{ text: '' }],
            },
        ];

        localStorage.setItem('content', JSON.stringify(newValue));

        alert('Your notes have been cleared.')       
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
        <Slate editor={editor} initialValue={initialValue}
        onChange={value => {
            const isAstChange = editor.operations.some(
              op => 'set_selection' !== op.type
            )
            if (isAstChange) {
              // Save the value to Local Storage.
              const content = JSON.stringify(value)
              localStorage.setItem('content', content)
            }
        }}
        >
            <StylingControls />
            <div className="card">
            <Editable
                editor={editor}
                renderLeaf={renderLeaf}
                placeholder='Type here'
                style={{ top: '3.65px', lineHeight: '1.4385' }}
                />
            </div>
            <button onClick={clearContents}>Clear</button>
        </Slate>
        <SaveCardBtn />
        <UpdateCardBtn />
    </>
    )
}