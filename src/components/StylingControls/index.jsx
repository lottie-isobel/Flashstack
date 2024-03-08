import React, { useState } from 'react';
import { Editor } from 'slate';
import { useSlate } from 'slate-react';

export default function StylingControls () {
    const editor = useSlate()
    const [isCPopupOpen, setIsCPopupOpen] = useState(false);
    const [isHLPopupOpen, setIsHLPopupOpen] = useState(false);

    const toggleCPopup = () => {
        setIsCPopupOpen(!isCPopupOpen);
    };

    const toggleHLPopup = () => {
        setIsHLPopupOpen(!isHLPopupOpen);
    };

    const CustomEditor = {
        isBlackMarkActive(editor) {
        const marks = Editor.marks(editor)
        return marks ? marks.black === true : false
        },

        isBlueMarkActive(editor) {
        const marks = Editor.marks(editor)
        return marks ? marks.blue === true : false
        },

        isRedMarkActive(editor) {
        const marks = Editor.marks(editor)
        return marks ? marks.red === true : false
        },

        isGreenMarkActive(editor) {
        const marks = Editor.marks(editor)
        return marks ? marks.green === true : false
        },

        isYellowHLMarkActive(editor) {
        const marks = Editor.marks(editor)
        return marks ? marks.yellowHL === true : false
        },

        isCyanHLMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.cyanHL === true : false
        },

        isGreyHLMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.greyHL === true : false
        },

        isMagentaHLMarkActive(editor) {
            const marks = Editor.marks(editor)
            return marks ? marks.magentaHL === true : false
        },

        isBoldMarkActive(editor) {
        const marks = Editor.marks(editor)
        return marks ? marks.bold === true : false
        },

        isItlaicMarkActive(editor) {
        const marks = Editor.marks(editor) 
        return marks ? marks.italic === true : false
        },

        isUnderlineMarkActive(editor) {
        const marks = Editor.marks(editor) 
        return marks ? marks.underline === true : false
        },

        isStrikethroughMarkActive(editor) {
        const marks = Editor.marks(editor) 
        return marks ? marks.strikethrough === true : false
        },
    
        isSuperMarkActive(editor) {
        const marks = Editor.marks(editor) 
        return marks ? marks.super && marks.small === true : false
        },
    
        isSubMarkActive(editor) {
        const marks = Editor.marks(editor) 
        return marks ? marks.sub && marks.small === true : false
        },

        toggleXSmallMark(editor) {
            const isActive = CustomEditor.isXSmallMarkActive(editor)
            const isSmall = CustomEditor.isSmallMarkActive(editor)
            const isLarge = CustomEditor.isLargeMarkActive(editor)
            const isXLarge = CustomEditor.isXLargeMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'xsmall')
            } else if (isSmall) {
                Editor.removeMark(editor, 'small')
                Editor.addMark(editor, 'xsmall', true)
            } else if (isLarge) {
                Editor.removeMark(editor, 'large')
                Editor.addMark(editor, 'xsmall', true)
            } else if (isXLarge) {
                Editor.removeMark(editor, 'xlarge')
                Editor.addMark(editor, 'xsmall', true)
            } else {
                Editor.addMark(editor, 'xsmall', true)
            }
        },

        toggleSmallMark(editor) {
        const isActive = CustomEditor.isSmallMarkActive(editor)
        const isXSmall = CustomEditor.isXSmallMarkActive(editor)
        const isLarge = CustomEditor.isLargeMarkActive(editor)
        const isXLarge = CustomEditor.isXLargeMarkActive(editor)

        if (isActive) {
            Editor.removeMark(editor, 'small')
        } else if (isXSmall) {
            Editor.removeMark(editor, 'xsmall')
            Editor.addMark(editor, 'small', true)
        } else if (isLarge) {
            Editor.removeMark(editor, 'large')
            Editor.addMark(editor, 'small', true)
        } else if (isXLarge) {
            Editor.removeMark(editor, 'xlarge')
            Editor.addMark(editor, 'small', true)
        } else {
            Editor.addMark(editor, 'small', true)
        }
        },

        toggleLargeMark(editor) {
            const isActive = CustomEditor.isLargeMarkActive(editor)
            const isXSmall = CustomEditor.isXSmallMarkActive(editor)
            const isSmall = CustomEditor.isSmallMarkActive(editor)
            const isXLarge = CustomEditor.isXLargeMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'large')
            } else if (isXSmall) {
                Editor.removeMark(editor, 'xsmall')
                Editor.addMark(editor, 'large', true)
            } else if (isSmall) {
                Editor.removeMark(editor, 'small')
                Editor.addMark(editor, 'large', true)
            } else if (isXLarge) {
                Editor.removeMark(editor, 'xlarge')
                Editor.addMark(editor, 'large', true)
            } else {
                Editor.addMark(editor, 'large', true)
            }
        },

        toggleXLargeMark(editor) {
            const isActive = CustomEditor.isXLargeMarkActive(editor)
            const isXSmall = CustomEditor.isXSmallMarkActive(editor)
            const isSmall = CustomEditor.isSmallMarkActive(editor)
            const isLarge = CustomEditor.isLargeMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'xlarge')
            } else if (isXSmall) {
                Editor.removeMark(editor, 'xsmall')
                Editor.addMark(editor, 'xlarge', true)
            } else if (isSmall) {
                Editor.removeMark(editor, 'small')
                Editor.addMark(editor, 'xlarge', true)
            } else if (isLarge) {
                Editor.removeMark(editor, 'large')
                Editor.addMark(editor, 'xlarge', true)
            } else {
                Editor.addMark(editor, 'xlarge', true)
            }
        },

        toggleBlackMark(editor) {
            const isActive = CustomEditor.isBlackMarkActive(editor)
            const isBlue = CustomEditor.isBlueMarkActive(editor)
            const isRed = CustomEditor.isRedMarkActive(editor)
            const isGreen = CustomEditor.isGreenMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'black')
            } else if (isBlue) {
                Editor.removeMark(editor, 'blue')
                Editor.addMark(editor, 'black', true)
            } else if (isRed) {
                Editor.removeMark(editor, 'red')
                Editor.addMark(editor, 'black', true)
            } else if (isGreen) {
                Editor.removeMark(editor, 'green')
                Editor.addMark(editor, 'black', true)
            } else {
                Editor.addMark(editor, 'black', true)
            }
        },

        toggleBlueMark(editor) {
            const isActive = CustomEditor.isBlueMarkActive(editor)
            const isBlack = CustomEditor.isBlackMarkActive(editor)
            const isRed = CustomEditor.isRedMarkActive(editor)
            const isGreen = CustomEditor.isGreenMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'blue')
            } else if (isBlack) {
                Editor.removeMark(editor, 'black')
                Editor.addMark(editor, 'blue', true)
            } else if (isRed) {
                Editor.removeMark(editor, 'red')
                Editor.addMark(editor, 'blue', true)
            } else if (isGreen) {
                Editor.removeMark(editor, 'green')
                Editor.addMark(editor, 'blue', true)
            } else {
                Editor.addMark(editor, 'blue', true)
            }
        },

        toggleRedMark(editor) {
            const isActive = CustomEditor.isRedMarkActive(editor)
            const isBlue = CustomEditor.isBlueMarkActive(editor)
            const isBlack = CustomEditor.isBlackMarkActive(editor)
            const isGreen = CustomEditor.isGreenMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'red')
            } else if (isBlue) {
                Editor.removeMark(editor, 'blue')
                Editor.addMark(editor, 'red', true)
            } else if (isBlack) {
                Editor.removeMark(editor, 'black')
                Editor.addMark(editor, 'red', true)
            } else if (isGreen) {
                Editor.removeMark(editor, 'green')
                Editor.addMark(editor, 'red', true)
            } else {
                Editor.addMark(editor, 'red', true)
            }
        },

        toggleGreenMark(editor) {
            const isActive = CustomEditor.isGreenMarkActive(editor)
            const isBlue = CustomEditor.isBlueMarkActive(editor)
            const isRed = CustomEditor.isRedMarkActive(editor)
            const isBlack = CustomEditor.isBlackMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'green')
            } else if (isBlue) {
                Editor.removeMark(editor, 'blue')
                Editor.addMark(editor, 'green', true)
            } else if (isRed) {
                Editor.removeMark(editor, 'red')
                Editor.addMark(editor, 'green', true)
            } else if (isBlack) {
                Editor.removeMark(editor, 'black')
                Editor.addMark(editor, 'green', true)
            } else {
                Editor.addMark(editor, 'green', true)
            }
        },

        toggleYellowHLMark(editor) {
            const isActive = CustomEditor.isYellowHLMarkActive(editor)
            const isCyan = CustomEditor.isCyanHLMarkActive(editor)
            const isGrey = CustomEditor.isGreyHLMarkActive(editor)
            const isMagenta = CustomEditor.isMagentaHLMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'yellowHL')
            } else if (isCyan) {
                Editor.removeMark(editor, 'cyanHL')
                Editor.addMark(editor, 'yellowHL', true)
            } else if (isGrey) {
                Editor.removeMark(editor, 'greyHL')
                Editor.addMark(editor, 'yellowHL', true)
            } else if (isMagenta) {
                Editor.removeMark(editor, 'magentaHL')
                Editor.addMark(editor, 'yellowHL', true)
            } else {
                Editor.addMark(editor, 'yellowHL', true)
            }
        },

        toggleCyanHLMark(editor) {
            const isActive = CustomEditor.isCyanHLMarkActive(editor)
            const isYellow = CustomEditor.isYellowHLMarkActive(editor)
            const isGrey = CustomEditor.isGreyHLMarkActive(editor)
            const isMagenta = CustomEditor.isMagentaHLMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'cyanHL')
            } else if (isYellow) {
                Editor.removeMark(editor, 'yellowHL')
                Editor.addMark(editor, 'cyanHL', true)
            } else if (isGrey) {
                Editor.removeMark(editor, 'greyHL')
                Editor.addMark(editor, 'cyanHL', true)
            } else if (isMagenta) {
                Editor.removeMark(editor, 'magentaHL')
                Editor.addMark(editor, 'cyanHL', true)
            } else {
                Editor.addMark(editor, 'cyanHL', true)
            }
        },

        toggleGreyHLMark(editor) {
            const isActive = CustomEditor.isGreyHLMarkActive(editor)
            const isCyan = CustomEditor.isCyanHLMarkActive(editor)
            const isYellow = CustomEditor.isYellowHLMarkActive(editor)
            const isMagenta = CustomEditor.isMagentaHLMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'greyHL')
            } else if (isCyan) {
                Editor.removeMark(editor, 'cyanHL')
                Editor.addMark(editor, 'greyHL', true)
            } else if (isYellow) {
                Editor.removeMark(editor, 'yellowHL')
                Editor.addMark(editor, 'greyHL', true)
            } else if (isMagenta) {
                Editor.removeMark(editor, 'magentaHL')
                Editor.addMark(editor, 'greyHL', true)
            } else {
                Editor.addMark(editor, 'greyHL', true)
            }
        },

        toggleMagentaHLMark(editor) {
            const isActive = CustomEditor.isMagentaHLMarkActive(editor)
            const isCyan = CustomEditor.isCyanHLMarkActive(editor)
            const isGrey = CustomEditor.isGreyHLMarkActive(editor)
            const isYellow = CustomEditor.isYellowHLMarkActive(editor)
    
            if (isActive) {
                Editor.removeMark(editor, 'magentaHL')
            } else if (isCyan) {
                Editor.removeMark(editor, 'cyanHL')
                Editor.addMark(editor, 'magentaHL', true)
            } else if (isGrey) {
                Editor.removeMark(editor, 'greyHL')
                Editor.addMark(editor, 'magentaHL', true)
            } else if (isYellow) {
                Editor.removeMark(editor, 'yellowHL')
                Editor.addMark(editor, 'magentaHL', true)
            } else {
                Editor.addMark(editor, 'magentaHL', true)
            }
        },
    
        toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'bold')
        } else {
            Editor.addMark(editor, 'bold', true)
        }
        },

        toggleUnderlineMark(editor) {
        const isActive = CustomEditor.isUnderlineMarkActive(editor)
        const isCrossed = CustomEditor.isStrikethroughMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'underline')
        } else if (isCrossed) {
            Editor.removeMark(editor, 'strikethrough')
            Editor.addMark(editor, 'underline', true)
        } else {
            Editor.addMark(editor, 'underline', true)
        }
        },

        toggleStrikethroughMark(editor) {
        const isActive = CustomEditor.isStrikethroughMarkActive(editor)
        const isUnderlined = CustomEditor.isUnderlineMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'strikethrough')
        } else if (isUnderlined) {
            Editor.removeMark(editor, 'underline')
            Editor.addMark(editor, 'strikethrough', true)
        } else {
            Editor.addMark(editor, 'strikethrough', true)
        }
        },
    
        toggleSuperMark(editor) {
        const isActive = CustomEditor.isSuperMarkActive(editor)
        const isSub = CustomEditor.isSubMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'super')
            Editor.removeMark(editor, 'small')
        } else if (isSub) {
            Editor.removeMark(editor, 'sub')
            Editor.removeMark(editor, 'small')
            Editor.addMark(editor, 'super', true)
            Editor.addMark(editor, 'small', true)
        } else {
            Editor.addMark(editor, 'super', true)
            Editor.addMark(editor, 'small', true)
        }
        },
    
        toggleSubMark(editor) {
        const isActive = CustomEditor.isSubMarkActive(editor)
        const isSuper = CustomEditor.isSuperMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'sub')
            Editor.removeMark(editor, 'small')
        } else if (isSuper) {
            Editor.removeMark(editor, 'super')
            Editor.removeMark(editor, 'small')
            Editor.addMark(editor, 'sub', true)
            Editor.addMark(editor, 'small', true)
        } else {
            Editor.addMark(editor, 'sub', true)
            Editor.addMark(editor, 'small', true)
        }
        },
    }

    return (
        <>
            <div className='controls'>
            <div className="dropdown">
                <button onClick={toggleCPopup}>Select Font Colour</button>
                {isCPopupOpen && (
                    <div className="dropdownPopup" id='cPopup'>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleBlackMark(editor)}}>Black</button>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleBlueMark(editor)}}>Blue</button>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleRedMark(editor)}}>Red</button>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleGreenMark(editor)}}>Green</button>
                    </div>
                )}
            </div>
            <div className="dropdown">
                <button onClick={toggleHLPopup}>Select Highlight</button>
                {isHLPopupOpen && (
                    <div className="dropdownPopup" id='hlPopup'>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleYellowHLMark(editor)}}>Yellow</button>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleCyanHLMark(editor)}}>Cyan</button>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleGreyHLMark(editor)}}>Grey</button>
                        <button onMouseDown={event => {
                            event.preventDefault()
                            CustomEditor.toggleMagentaHLMark(editor)}}>Magenta</button>
                    </div>
                )}
            </div>
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
                CustomEditor.toggleItalicMark(editor)
                }}
            >
                <i>I</i>
            </button>
            <button
                onMouseDown={event => {
                event.preventDefault()
                CustomEditor.toggleUnderlineMark(editor)
                }}
            >
                <u>U</u>
            </button>
            <button
                onMouseDown={event => {
                event.preventDefault()
                CustomEditor.toggleStrikethroughMark(editor)
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
                a<span style={{ fontSize: '10px', verticalAlign: '4px'}}>x</span>
            </button>
            <button
                onMouseDown={event => {
                event.preventDefault()
                CustomEditor.toggleSubMark(editor)
                }}
            >
                a<span style={{ fontSize: '10px', verticalAlign: '-1px'}}>x</span>
            </button>
            </div>
        </>
        )

}