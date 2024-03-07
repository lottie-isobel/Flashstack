import React from 'react'
import { Card } from '../../components'
import { useParams } from 'react-router-dom'

export default function CreateFlashcardPage() {
  const { deckid } = useParams()

  return (
    <>
      <div style={{ display: 'inline-block' }}>
          <Card type="frontFlashcard" id={deckid} />
      </div>
      <div style={{ display: 'inline-block' }}>
          <Card type="backFlashcard" id={deckid}/>
      </div>
    </>
  )
}