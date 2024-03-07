import React from 'react'
import { Card } from '../../components'

export default function CreateFlashcardPage() {
  const frontFlashcard = 'flashcard 1'
  const backFlashcard = 'flashcard 2'

  return (
    <>
      <div style={{ display: 'inline-block' }}>
          <Card frontFlashcard={frontFlashcard} />
      </div>
      <div style={{ display: 'inline-block' }}>
          <Card backFlashcard={backFlashcard} />
      </div>
    </>
  )
}