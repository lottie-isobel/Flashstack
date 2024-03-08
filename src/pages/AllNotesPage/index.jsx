import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import NoteModal from "../../components/NoteModal";
import "./index.css";

export default function AllNotesPage() {
  const { userid } = useAuth();
  const [notes, setNotes] = useState([]);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [child, setChild] = useState([])
  const [noteId, setNoteId] = useState(null)

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

  notes.map(({ id, content }) => ({ id, content }));

  const getContentById = (id) => {
    const note = notes.find(note => note.id === id);
    setNoteId(id)
    return note ? note.content : null;
  };

  const openNoteModal = (id) => {
    setIsNoteModalOpen(true);
    const content = getContentById(id);
    const parsedContent = JSON.parse(content);
    const children = parsedContent[0].children;
    console.log(children)

    setChild(children)
  };

  console.log(child)

  const closeNoteModal = () => {
    setIsNoteModalOpen(false);
  };

  return (
      <div className="allNotes">
        {notes.map(note => (
          <div className="note" key={note.id} onClick={() => openNoteModal(note.id)}>
            <div >
              <p>{note.category}</p>
            </div>

          </div>
        ))}


    {isNoteModalOpen && (
      <NoteModal id={noteId}  child={child} onClose={closeNoteModal} />
    )}

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
