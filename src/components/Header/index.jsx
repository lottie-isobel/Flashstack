import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/fslogo.png";

export default function Header() {
  return (
    <>
      <header className="nav-bar">
        <img src={logo} className="logo" />
        <nav>
          <button className="btn-nav">
            <NavLink to="/flashcards">Flashcards</NavLink>
          </button>
          <button className="btn-nav">
            <NavLink to="/notes">Shows</NavLink>
          </button>
          <button className="btn-nav">
            <NavLink to="/logout">Sign Out</NavLink>
          </button>
        </nav>
      </header>
    </>
  );
}
