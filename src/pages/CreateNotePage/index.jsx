import React from 'react'
import { Card, CardControls } from '../../components'

export default function CreateNotePage() {
  const note = 'note'
  return (
    <>
      <Card note={note} />
    </>
  )
}