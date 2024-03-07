import React from 'react';

export default function DeleteCardBtn() {

    const handleDelete = async () => {

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

        const oldCategory = 'test'

        console.log(oldCategory)

        const cateOptions = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }

        const cateResponse = await fetch(`https://flashstack-backend.onrender.com/note/${oldCategory}/${data.id}`, cateOptions);
        const cateData = await cateResponse.json();

        if (cateResponse.status == 200) {
            alert(`The note id is ${cateData.id}.`)
        } else {
            alert(cateData.error);
        }

    const noteOptions = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    const noteResponse = await fetch(`https://flashstack-backend.onrender.com/note/${cateData.id}`, noteOptions);
    const noteData = await noteResponse.json();

    if (noteResponse.status == 204) {
        alert(`Note ${cateData.id} has been deleted.`)
        console.log('Data deleted successfully:', noteData);
    } else {
        alert(noteData.error);
    }
    };

  return (
        <button id='deleteButton' onClick={handleDelete}>Delete</button>
  )
}