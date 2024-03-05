import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/flashstack-logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./index.css";

export default function Header() {
  return (
    <>
      <header className="nav-bar">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <img
                src={logo}
                alt=""
                width="180"
                height="50"
                className="d-inline-block align-top logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* <img src={logo} className="logo" /> */}
        <nav>
          <Button className="custom-button">
            <NavLink to="/flashcards" className="nav-link">
              Flashcards
            </NavLink>
          </Button>
          <Button className="custom-button">
            <NavLink to="/notes" className="nav-link">
              Shows
            </NavLink>
          </Button>
          <Button className="custom-button">
            <NavLink to="/logout" className="nav-link">
              Sign Out
            </NavLink>
          </Button>
        </nav>
      </header>
      <div className="line-break"></div>
    </>
  );
}
