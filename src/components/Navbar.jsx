// src/components/Navbar.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
//import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-circle">JA</div>
      <div className="nav-right">
        <button className="nav-btn">Log in</button>
        <button className="nav-btn signup">Sign up</button>
        <span className="search-icon">🔍</span>
      </div>
    </nav>
  );
}