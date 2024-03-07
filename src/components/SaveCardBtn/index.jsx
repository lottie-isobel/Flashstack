import React from 'react';

export default function SaveCardBtn() {

    const handleSave = async () => {

        const tokenStr = localStorage.getItem('token')

        console.log(tokenStr)

        const token = tokenStr.replace(/^"(.*)"$/, '$1')

        console.log(token)

        const options = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(`https://flashstack-backend.onrender.com/user/${token}`, options);
        const data = await response.json();

        if (response.status == 200) {
            alert(`The user id is ${data.id}.`)
        } else {
            alert(data.error);
        }


    const newNote = {
        userid: data.id,
        content: localStorage.getItem('content'),
        category: 'test'
    };

    console.log(newNote)

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
        e.target.reset();
        alert(`You're note has been saved to ${noteData.category}!`)
        console.log('Data saved successfully:', noteData);
    } else {
        alert(noteData.error);
    }
    };

  return (
        <button id='saveButton' onClick={handleSave}>Save</button>
  )
}