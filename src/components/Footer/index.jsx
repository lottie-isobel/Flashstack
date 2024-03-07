import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="line-break"></div>
        <nav>
          <p className="footer-link" id="copyright">
            © Flashstack 2024
          </p>
          <NavLink to="/about" className="footer-link about">
            About Us
          </NavLink>
          <NavLink to="/contact" className="footer-link contact">
            Contact Us
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
