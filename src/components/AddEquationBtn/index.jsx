import React from 'react';

export default function AddEquationBtn() {

    const handleClick = async () => {
        console.log('equation added')
    };

  return (
        <button onClick={handleClick}>Add Equation</button>
  )
}