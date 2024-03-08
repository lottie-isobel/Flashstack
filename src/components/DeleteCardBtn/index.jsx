import React from 'react';

export default function DeleteCardBtn({id}) {

    const handleDelete = async () => {
    const noteOptions = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    const noteResponse = await fetch(`https://flashstack-backend.onrender.com/note/${id}`, noteOptions);
    // const noteData = await noteResponse.json();

    // if (noteResponse.status == 204) {
    //     // alert(`Note ${id} has been deleted.`)
    //     console.log('Data deleted successfully:', noteData);
    // } else {
    //     alert(noteData.error);
    // }
    window.location.reload();
    };



  return (
        <button id='deleteButton' onClick={handleDelete}>Delete</button>
  )
}