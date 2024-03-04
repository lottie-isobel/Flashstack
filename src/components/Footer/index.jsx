import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
        <footer>
            <nav>
                <p id="copyright">© Flashstack 2024</p>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/about-us">Contact Us</NavLink>
            </nav>
        </footer>
    </>
  )
}