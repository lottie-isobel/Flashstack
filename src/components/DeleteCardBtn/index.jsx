import React from 'react';

export default function DeleteCardBtn() {

    const handleDelete = async () => {
        console.log('card deleted')
    };

  return (
        <button onClick={handleDelete}>Delete</button>
  )
}