import React from "react"


import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import FormControl from "react-bootstrap/FormControl"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Navbar() {
    return (
        <nav  className="navbar navbar-expand-lg navbar-dark bg-info">
      <span className="navbar-brand mb-1 h1">placeholder</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/Dashboard">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/newuser">New User</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/postband">I need a Musician!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/MusicianSearch">I need a Band!</a>
          </li>
        </ul>
      </nav>
    </nav>
    )
}
export default Navbar