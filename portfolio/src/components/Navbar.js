import React from 'react';
import '../sass/Navbar.scss';

function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        <div className="navbar-title">Aiden's Portfolio</div>
        <div className="navbar-items">
          <a href="/" className="navbar-item">About me</a>
          <a href="/" className="navbar-item">Skills</a>
          <a href="/" className="navbar-item">Archiving</a>
          <a href="/" className="navbar-item">Projects</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
