import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <span
        className="navbar-brand mb-1 h1"
        style={{
          color: "white",
          fontSize: "45px",
          textShadow: "3px 3px 3px orange",
        }}
      >
        Duet
      </span>
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
      <nav
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{
          color: " white",
          fontSize: "25px",
        }}
      >
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home Page
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/postband">
              Create Band Posting!
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/postmusician">
              Create Musician Posting!
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/SearchPage">
              Search
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/newuser"></a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
export default Navbar;
