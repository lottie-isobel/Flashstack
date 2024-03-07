import React from 'react';

const NoteModal = ({ content, onClose }) => {
  return (
    <div className="note-modal-overlay" onClick={onClose}>
      <div id="note-modal-content" className="note-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Note Content</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NoteModal;