import React, { useState } from 'react';

export default function StylingControls() {

    const [isSuper, setIsSuper] = useState(false);
    const [isSub, setIsSub] = useState(false);

      /* The style controls */
  const handleFontSizeChange = (e) => {
    const fontSize = e.target.value;
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, fontSize);
  };

  const handleFontColorChange = (e) => {
    const color = e.target.value;
    document.execCommand('foreColor', false, color);
  };

  const handlehighlightChange = (e) => {
    const highlight = e.target.value;
    document.execCommand('hiliteColor', false, highlight);
  };

  const toggleBold = () => {
    document.execCommand('bold', false, null);
  };

  const toggleItalic = () => {
    document.execCommand('italic', false, null);
  };

  const toggleUnderline = () => {
    document.execCommand('underline', false, null);
  };

  const toggleStrikethrough = () => {
    document.execCommand('strikeThrough', false, null);
  };

  const toggleSuperscript = () => {
    console.log("button:" + isSuper)
    console.log("triggered")
    const selection = window.getSelection();
    console.log("if statement not covered yet")
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
 
      if (isSuper === true) {
        removeSuperscript();
      } else {
        applySuperscript();
      }
    }
  };

  const applySuperscript = () => {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      
      const span = document.createElement('span');
      span.style.fontSize = '13px';
      span.style.verticalAlign = 'super';
      
      range.surroundContents(span);
  
      selection.removeAllRanges();
  
      let commonAncestor = range.commonAncestorContainer;
      while (commonAncestor && commonAncestor.nodeType !== 1) {
        commonAncestor = commonAncestor.parentNode;
      }
      
      if (commonAncestor) {
        commonAncestor.style.top = '26px';
      }
    }
    setIsSuper(!isSuper);
    console.log("applied:" + isSuper);
  };
  
  const removeSuperscript = () => {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
  
      const supSpan = range.commonAncestorContainer.parentNode;
      if (supSpan.tagName === 'SPAN' && supSpan.style.verticalAlign === 'super') {
        const parentNode = supSpan.parentNode;
  
        while (supSpan.firstChild) {
          parentNode.insertBefore(supSpan.firstChild, supSpan);
        }
  
        parentNode.removeChild(supSpan);
  
        const superscripts = parentNode.querySelectorAll('span[style*="vertical-align: super"]');
  
        if (superscripts.length === 0 && parentNode.style.top) {
          parentNode.style.top = '30px';
        }
      }
    }
    setIsSuper(!isSuper);
    console.log("removed:" + isSuper);
  };

  const toggleSubscript = () => {
    console.log("button:" + isSub)
    console.log("triggered")
    const selection = window.getSelection();
    console.log("if statement not covered yet")
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
  
      if (isSub === true) {
        removeSubscript();
      } else {
        applySubscript();
      }
    }
  };

  const applySubscript = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
  
    const span = document.createElement('span');
    span.style.fontSize = '13px';
    span.style.verticalAlign = 'sub';
  
    range.surroundContents(span);
    selection.removeAllRanges();

    setIsSub(!isSub);
    console.log("applied:" + isSub);
  };

  const removeSubscript = () => {
    const selection = window.getSelection();
  if (!selection.isCollapsed) {
    const range = selection.getRangeAt(0);

    const subSpan = range.commonAncestorContainer.parentNode;
    if (subSpan.tagName === 'SPAN' && subSpan.style.verticalAlign === 'sub') {
      const parentNode = subSpan.parentNode;

      while (subSpan.firstChild) {
        parentNode.insertBefore(subSpan.firstChild, subSpan);
      }

      parentNode.removeChild(subSpan);
    }
  }
  setIsSub(!isSub);
  console.log("removed:" + isSub);
  };

  return (
    <>
      <div className="textStyles" style={{ marginTop: '10px' }}>
        <div className="dropdown">
          <select id="fontSizeDropdown" onChange={handleFontSizeChange}>
            <option value="" disabled>Select Font Size</option>
            <option value="1">Extra Small</option>
            <option value="3">Small</option>
            <option value="4">Medium</option>
            <option value="5">Large</option>
            <option value="6">Extra Large</option>
          </select>
        </div>
        <div className="dropdown">
          <select id="fontColorDropdown" onChange={handleFontColorChange}>
            <option value="" disabled>Select Font Color</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div className="dropdown">
          <select id="highlighterDropdown" onChange={handlehighlightChange}>
            <option value="" disabled>Select Highlight</option>
            <option value="yellow">Yellow</option>
            <option value="cyan">Cyan</option>
            <option value="gray">Gray</option>
            <option value="magenta">Magenta</option>
            <option value="transparent">No Highlight</option>
          </select>
        </div>
        <button className="btn" onClick={toggleBold} style={{ fontWeight: 'bold'}}>B</button>
        <button className="btn" id="italicBtn" onClick={toggleItalic} style={{ fontStyle: 'italic' }}>I</button>
        <button className="btn" onClick={toggleUnderline} style={{ textDecorationLine: 'underline'}}>U</button>
        <button className="btn" onClick={toggleStrikethrough} style={{ textDecorationLine: 'line-through'}}>a</button>
        <button className="btn" id="superBtn" onClick={toggleSuperscript}>a<sup><sup>x</sup></sup></button>
        <button className="btn" id="subBtn" onClick={toggleSubscript}>a<sub>x</sub></button>
      </div>
    </>
  )
}