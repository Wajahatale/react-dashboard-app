// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/Navbar.scss"; // Import the SCSS styles for Navbar

function Navbar({ onLogout }) {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
