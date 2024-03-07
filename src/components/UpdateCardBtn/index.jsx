import React from 'react';
import { AuthProvider, useAuth } from '../../hooks/useAuth';

export default function UpdateCardBtn() {

    const { userid } = useAuth();

    const handleUpdate = async () => {


       const oldCategory = 'test'

        console.log(oldCategory)

        const cateOptions = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: oldCategory,
                userid: userid
            })
        }

        const cateResponse = await fetch(`https://flashstack-backend.onrender.com/note/category/`, cateOptions);
        const cateData = await cateResponse.json();

        if (cateResponse.status == 200) {
            alert(cateData)
        } else {
            alert(cateData.error);
        }


    // const updatedNote = {
    //     content: localStorage.getItem('content'),
    //     category: 'testing'
    // };

    // console.log(updatedNote)

    // const noteOptions = {
    //     method: "PATCH",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(updatedNote)
    // }

    // const noteResponse = await fetch(`https://flashstack-backend.onrender.com/note/${cateData.id}`, noteOptions);
    // const noteData = await noteResponse.json();

    // if (noteResponse.status == 200) {
    //     e.target.reset();
    //     alert(`You're note content has been updated to ${noteData.content} and you're note category has been updated to${noteData.category}!`)
    //     console.log('Data updated successfully:', noteData);
    // } else {
    //     alert(noteData.error);
    // }
    };

  return (
        <button id='updateButton' onClick={handleUpdate}>Update</button>
  )
}