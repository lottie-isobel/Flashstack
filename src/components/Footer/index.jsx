import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="line-break"></div>
        <nav>
          <p id="copyright">© Flashstack 2024</p>
          <NavLink to="/about-us" className="footer-link about">
            About Us
          </NavLink>
          <NavLink to="/about-us" className="footer-link contact">
            Contact Us
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
