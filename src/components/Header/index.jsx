import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/flashstack-logo.png";
import "./index.css";

export default function Header() {
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
          <button className="custom-button">
            <NavLink to="/flashcards" className="nav-link">
              Flashcards
            </NavLink>
          </button>
          <button className="custom-button">
            <NavLink to="/notes" className="nav-link">
              Notes
            </NavLink>
          </button>
          <button className="custom-button">
            <NavLink to="/logout" className="nav-link">
              Sign Out
            </NavLink>
          </button>
        </nav>
      </header>
      <div className="line-break"></div>
    </>
  );
}
