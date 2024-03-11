import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './index.css'

export default function Dashboard() {

  const navigate = useNavigate()

  const [greeting, setGreeting] = useState("")
  const [recentDecks, setRecentDecks] = useState([])
  const { firstName, userid } = useAuth()

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

    const fetchDecks = async () => {
      try {
        const response = await fetch(
          `https://flashstack-backend.onrender.com/deck/user/${userid}`
        );

        if (!response.ok) {
          console.error("Error fetching decks");
          return;
        }

        const data = await response.json();
        console.log(data);
        setRecentDecks(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching decks", error);
      }
    };

    fetchDecks();
  }, [])


  return (
    <>
      <div className="dashboard-quick">
        <div className='left-side-of-quick'>
          <h1 className='greeting'>{greeting}{firstName}!</h1>
          <button className='view-flashstacks' onClick={() => navigate("/decks")}>View Flashstacks</button>
        </div>
        <div className='streak-box'>
          <p className='keep-your-streak-going'>Get a streak going! 🔥</p>
          <div className='days'>
            <div className='streak-day done'>M</div>
            <div className='streak-day done'>T</div>
            <div className='streak-day'>W</div>
            <div className='streak-day'>T</div>
            <div className='streak-day'>F</div>
            <div className='streak-day'>S</div>
            <div className='streak-day'>S</div>
          </div>
        </div>
      </div>
      <div className='line-break' />
      <div className='recent-decks'>
        {recentDecks.length > 0 && (
          <>
            <p className='jumping-straight-in'>Jumping straight in?</p>
            <p className='recent-decks'>Recent Flashstacks:</p>
            {recentDecks.map((deck) => (
              <div className="deck" key={deck.deckid}>
                <p onClick={() => navigate(`/revise/${deck.deckid}`)}>
                  {deck.name}
                </p>
                <div>
                  <button onClick={() => navigate(`/newflashcard/${deck.deckid}`)}>
                    Add Card
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        {recentDecks.length === 0 && (
          <p>You've not made any decks yet! Go to the Flashstacks page to make one.</p>
        )}
      </div>
    </>
  )
}