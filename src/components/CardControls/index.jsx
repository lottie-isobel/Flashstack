import React from 'react';
import AddEquationBtn from '../AddEquationBtn';
import SaveCardBtn from '../SaveCardBtn';
import DeleteCardBtn from '../DeleteCardBtn';
import { useEditor } from '../../contexts';

export default function CardControls() {
  const { insertEquation } = useEditor();

  return (
    <div className="cardControls" style={{ display: 'inline-block' }}>
      <AddEquationBtn insertEquation={insertEquation} />
      <SaveCardBtn />
      <DeleteCardBtn />
    </div>
  );
}