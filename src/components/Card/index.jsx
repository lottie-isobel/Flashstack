import React, { useState, useCallback, useEffect } from 'react';
import { createEditor, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import ReactLatex from 'react-latex';
import { useEditor } from '../../contexts';

export default function Card() {
    const [editor] = useState(() => withReact(createEditor()));
    const { textRef } = useEditor();
    console.log(textRef);

    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ];

    const Leaf = props => {
        return (
            <span
                {...props.attributes}
                style={{
                    fontWeight: props.leaf.bold ? 'bold' : 'normal',
                    fontStyle: props.leaf.italic ? 'italic' : 'normal',
                    textDecoration: props.leaf.underline ? 'underline' : props.leaf.crossout ? 'line-through' : 'normal',
                    verticalAlign: props.leaf.sub ? '-1px' : props.leaf.super ? '4px' : 'baseline',
                    fontSize: props.leaf.tenpx ? '12px' : 'medium',
                }}
            >
                {props.children}
            </span>
        )
    }

    const CustomEditor = {
        isBoldMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.bold === true : false
        },

        isItlaicMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.italic === true : false
        },

        isSuperMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.super && marks.tenpx === true : false
        },

        isSubMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.sub && marks.tenpx === true : false
        },

        toggleBoldMark(editor) {
            const isActive = CustomEditor.isBoldMarkActive(editor)
            if (isActive) {
                Editor.removeMark(editor, 'bold')
            } else {
                Editor.addMark(editor, 'bold', true)
            }
        },

        toggleSuperMark(editor) {
            const isActive = CustomEditor.isSuperMarkActive(editor)
            const isSub = CustomEditor.isSubMarkActive(editor)
            if (isActive) {
                Editor.removeMark(editor, 'super')
                Editor.removeMark(editor, 'tenpx')
            } else if (isSub) {
                Editor.removeMark(editor, 'sub')
                Editor.removeMark(editor, 'tenpx')
                Editor.addMark(editor, 'super', true)
                Editor.addMark(editor, 'tenpx', true)
            } else {
                Editor.addMark(editor, 'super', true)
                Editor.addMark(editor, 'tenpx', true)
            }
        },

        toggleSubMark(editor) {
            const isActive = CustomEditor.isSubMarkActive(editor)
            const isSuper = CustomEditor.isSuperMarkActive(editor)
            if (isActive) {
                Editor.removeMark(editor, 'sub')
                Editor.removeMark(editor, 'tenpx')
            } else if (isSuper) {
                Editor.removeMark(editor, 'super')
                Editor.removeMark(editor, 'tenpx')
                Editor.addMark(editor, 'sub', true)
                Editor.addMark(editor, 'tenpx', true)
            } else {
                Editor.addMark(editor, 'sub', true)
                Editor.addMark(editor, 'tenpx', true)
            }
        },
    }

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />;
    }, []);

    return (
        <Slate editor={editor} initialValue={initialValue}>
            <div>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }}
                >
                    <b>B</b>
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }}
                >
                    <i>I</i>
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }}
                >
                    <u>U</u>
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }}
                >
                    <s>a</s>
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleSuperMark(editor)
                    }}
                >
                    a<span style={{ fontSize: '10px', verticalAlign: '4px' }}>x</span>
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleSubMark(editor)
                    }}
                >
                    a<span style={{ fontSize: '10px', verticalAlign: '-1px' }}>x</span>
                </button>
            </div>
            <div className="card">
                <Editable
                    editor={editor}
                    renderLeaf={renderLeaf}
                    placeholder='Type here'
                    style={{ top: '2px', lineHeight: '1.445' }}
                    onChange={(value) => {
                        // Use Editor.string to get the plain text content
                        textRef.current.innerHTML = Editor.string(editor, value);
                    }}
                    value={initialValue} 
                />
                <ReactLatex>{textRef.current && textRef.current.innerHTML}</ReactLatex>
            </div>
        </Slate>
    )
}