import React, { useState } from 'react';
import ReactLatex from 'react-latex';
import { useEditor } from '../../contexts';

export default function AddEquationBtn() {
  const [showPopup, setShowPopup] = useState(false);
  const [equation, setEquation] = useState('');
  const { textRef } = useEditor();

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleSymbolClick = (symbol) => {
    setEquation((prevEquation) => `${prevEquation}$${symbol}$`);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setEquation('');
  };

  const handleSubmit = () => {
    // Apply the LaTeX equation to the textRef content
    textRef.current.innerHTML += ` ${equation} `;
    handlePopupClose();
  };

  return (
    <div>
      <button onClick={handleClick}>Add Equation</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Enter Equation</h3>
            <ReactLatex>{equation}</ReactLatex>
            <div className="symbol-buttons">
              <button onClick={() => handleSymbolClick('\\sqrt{}')}>&radic;</button>
              <button onClick={() => handleSymbolClick('^2')}>^2</button>
              {/* Add more buttons for other mathematical symbols */}
            </div>
            <div className="popup-actions">
              <button onClick={handlePopupClose}>Cancel</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}