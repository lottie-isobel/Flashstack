import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function SaveCardBtn({ type, id }) {

    const { userid } = useAuth()

    const handleSave = async () => {
        switch (type) {
            case "note":
                const newNote = {
                    userid: userid,
                    content: localStorage.getItem('content'),
                    category: 'test'
                };

                const noteOptions = {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newNote)
                }
                const noteResponse = await fetch('https://flashstack-backend.onrender.com/note', noteOptions);
                const noteData = await noteResponse.json();
                if (noteResponse.status == 201) {
                    alert(`Your note has been saved to ${noteData.category}!`)
                    console.log('Data saved successfully:', noteData);
                } else {
                    alert(noteData.error);
                }
                return

            case "frontFlashcard", "backFlashcard":
                return
            default:
                alert("Card type not recognised")
                return
        }
    };

    return (
        <button id='saveButton' onClick={handleSave}>Save</button>
    )
}