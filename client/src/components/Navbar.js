import React from "react"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
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
            <a className="nav-link" href="/Profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/BandSearch">I need a band!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/MusicianSearch">I need a Musician!</a>
          </li>
        </ul>
      </nav>
    </nav>
    )
}
export default Navbar