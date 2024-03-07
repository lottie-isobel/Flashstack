import React, { useState } from "react";
import './index.css'

export default function RevisionCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false)

  const toggleFlip = () => {
    setFlipped(prevFlipped => !prevFlipped)
  }

  return (
    <>
      {flipped ? <h2>Answer:</h2> : <h2>Question:</h2>}
      <div className="card">
      <p className="card-content">{flipped ? answer : question}</p>
      </div>
      <div className="buttons">
        <button onClick={toggleFlip}>Flip card</button>
      </div>
    </>
  );
}
