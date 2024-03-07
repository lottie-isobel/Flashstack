import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom';
import "./index.css"

export default function AllNotesPage() {
  const { userid } = useAuth()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `https://flashstack-backend.onrender.com/note/all/${userid}`
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();
        console.log(data);
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNotes();
  }, [])

  const getContentText = (content) => {
    try {
      const parsedContent = JSON.parse(content);
      if (Array.isArray(parsedContent)) {
        const firstChild = parsedContent[0].children[0];
        if (firstChild && firstChild.text) {
          return firstChild.text;
        }
      }
    } catch (error) {
      console.log('Error parsing content:', error);
    }
    return '';
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>All Notes</h1>
        <Link to="/newnote" style={{ textDecoration: 'none', color: 'black' }}>
          <button id="new-note-button" style={{ fontSize: '1.5em' }}>+ New Note</button>
        </Link>
      </div>
      <div>
        {"" ||
          notes.map((note) => (
            <div className='note' key={note._id}>
              <h2>{getContentText(note.content)}</h2>
              <p>{note.category}</p>
            </div>
          ))}
      </div>
    </>
  )
}
