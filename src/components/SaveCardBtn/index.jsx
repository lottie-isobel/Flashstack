import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useParams } from 'react-router-dom'

export default function SaveCardBtn({ type, title }) {

    const { userid } = useAuth()
    const { id } = useParams()

    const handleSave = async () => {
        switch (type) {
            case "note":
                const newNote = {
                    userid: userid,
                    content: localStorage.getItem('contentNote'),
                    category: title
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
                    alert(`Your note has been created.`)
                    console.log('Data saved successfully:', noteData);
                } else {
                    alert(noteData.error);
                }
                return

            case "flashcard":
                const newCard = {
                    question: localStorage.getItem('contentFront'),
                    answer: localStorage.getItem('contentBack')
                }

                const cardOptions = {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newCard)
                }

                const cardResponse = await fetch(`https://flashstack-backend.onrender.com/card/deck/${id}`, cardOptions);
                const cardData = await cardResponse.json();
                if (cardResponse.status == 201) {
                    alert(`Your card has been created.`)
                    console.log('Data saved successfully:', cardData);
                } else {
                    alert(cardData.error);
                }
                return
            default:
                alert("Post type not recognised")
                return
        }
    };

    return (
        <button id='saveButton' onClick={handleSave}>Save</button>
    )
}