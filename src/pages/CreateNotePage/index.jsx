import React from 'react'
import { Card, CardControls } from '../../components'

export default function CreateNotePage() {
  const note = 'note'
  return (
    <>
      <header id= 'createNoteHeader'>Create Note</header>
      <Card note={note} />
    </>
  )
}