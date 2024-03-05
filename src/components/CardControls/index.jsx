import React from 'react';
import AddEquationBtn from '../AddEquationBtn';
import SaveCardBtn from '../SaveCardBtn';
import DeleteCardBtn from '../DeleteCardBtn';

export default function CardControls() {

  return (
    <>
      <div className="cardControls" style={{ display: 'inline-block' }}>
            <AddEquationBtn />
            <SaveCardBtn />
            <DeleteCardBtn />
      </div>
    </>
  )
}