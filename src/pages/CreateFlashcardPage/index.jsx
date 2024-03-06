import React from 'react'
import { Card } from '../../components'

export default function CreateFlashcardPage() {
  return (
    <>
      <div>Create a Flashcard</div>
      <StylingControls />
      <div style={{ display: 'flex' }}>
          <Card />
          <Card />
      </div>
    </>
  )
}