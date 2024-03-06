import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"; 
import logo from "../../assets/flashstack-logo.png";
import "./index.css";

export default function Header() {
  const navigate = useNavigate()
  const { token, logout } = useAuth()

  const switchPage = (page) => {
    navigate(page)
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const options = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
      }
      console.log(options)
      const response = await fetch("https://flashstack-backend.onrender.com/user/logout", options)
      console.log(response)
      await logout()
    }
    catch(error){
      console.error("Error:", error)
    }
  }

  return (
    <>
      <header className="nav-bar">
              <img
                src={logo}
                alt=""
                width="180"
                height="50"
                className="d-inline-block align-top logo"
              />
        <nav>
          {token && <button className="custom-button" onClick={() => switchPage("/flashcards")}>
            Flashcards
          </button>}
          {token && <button className="custom-button" onClick={() => switchPage("/notes")}>
            Notes
          </button>}
          {token && <button className="custom-button" onClick={handleLogout}>
            Sign Out
          </button>}
          {!token && <button className="custom-button" onClick={() => switchPage("/login")}>
            Sign In
          </button>}
        </nav>
      </header>
      <div className="line-break"></div>
    </>
  );
}
