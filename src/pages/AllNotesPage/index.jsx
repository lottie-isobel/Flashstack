import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import NoteModal from "../../components/NoteModal";
import "./index.css";

export default function AllNotesPage() {
  const { userid } = useAuth();
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `https://flashstack-backend.onrender.com/note/all/${userid}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        console.log(data);
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, []);

  const getContentText = content => {
    try {
      const parsedContent = JSON.parse(content);
      if (Array.isArray(parsedContent)) {
        const firstChild = parsedContent[0].children[0];
        if (firstChild && firstChild.text) {
          return firstChild.text;
        }
      }
    } catch (error) {
      console.log("Error parsing content:", error);
    }
    return "";
  };

  const openNoteModal = content => {
    setSelectedNote(content);
  };

  const closeNoteModal = () => {
    setSelectedNote(null);
  };

  const handleNoteClick = content => {
    openNoteModal(content);
  };

  const handleOutsideClick = e => {
    const modalContent = document.getElementById("note-modal-content");

    if (modalContent && !modalContent.contains(e.target)) {
      closeNoteModal();
    }
  };

  return (
    <div className="allNotes">
      <div onClick={handleOutsideClick}>
        {notes.map(note => (
          <div
            className="note"
            key={note.id}
            onClick={() => handleNoteClick(getContentText(note.content))}
          >
            <p>{note.category}</p>
          </div>
        ))}
      </div>

      {selectedNote && (
        <NoteModal content={selectedNote} onClose={closeNoteModal} />
      )}
      {console.log(selectedNote)}

      <div
        style={{
          display: "block",
          alignItems: "center",
        }}
      >
        <Link to="/newnote" style={{ textDecoration: "none", color: "black" }}>
          <button id="new-note-button" style={{ fontSize: "1.5em" }}>
            + New Note
          </button>
        </Link>
      </div>
    </div>
  );
}
