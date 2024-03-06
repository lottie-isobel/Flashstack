import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const [greeting, setGreeting] = useState("")
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
  const navigate = useNavigate()

  return (
    <>
    <div className="dashboard-quick">
      <p className='greeting'>{greeting}</p>
      <button onClick={() => navigate("/decks")}>View Flashstacks</button>
    </div>
    <div className='line-break'/>
    </>
  )
}