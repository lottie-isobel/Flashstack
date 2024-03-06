import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './index.css'

export default function Dashboard() {

  const navigate = useNavigate()

  const [greeting, setGreeting] = useState("")
  const [recentDecks, setRecentDecks] = useState([])
  const { firstName } = useAuth()

  useEffect(() => {
    const d = new Date()
    const currentHour = d.getHours()
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good morning, ")
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon, ")
    } else {
      setGreeting("Good evening, ")
    }
  }, [])
  

  return (
    <>
    <div className="dashboard-quick">
      <div className='left-side-of-quick'>
        <h1 className='greeting'>{greeting}{firstName}!</h1>
        <button className='view-flashstacks' onClick={() => navigate("/decks")}>View Flashstacks</button>
      </div>
      <div className='streak-box'>
        <p className='keep-your-streak-going'>Keep your streak going! 🔥</p>
      </div>
    </div>
    <div className='line-break'/>
    <div className='recent-decks'>
      <p className='jumping-straight-in'>Jumping straight in?</p>
      <p className='recent-decks'>Recent decks:</p>
    </div>
    </>
  )
}