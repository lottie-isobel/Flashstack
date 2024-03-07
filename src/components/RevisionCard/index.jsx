import React, {useState} from "react";

export default function RevisionCard({ question, answer }) {
const [flipped, setFlipped] = useState(false)

  return (
    <>
      <div className="revision-card">
        <p>{question}</p>
      </div>
      <button>Flip card!</button>
    </>
  );
}
