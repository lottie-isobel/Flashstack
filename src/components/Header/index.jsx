import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/flashcards">Flashcards</NavLink>
                <NavLink to="/notes">Shows</NavLink>
                <NavLink to="/logout">Sign Out</NavLink>
            </nav>
        </header>
    </>
  )
}