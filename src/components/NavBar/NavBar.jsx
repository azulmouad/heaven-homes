import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar container">
      <p className="title">HeavenHomes</p>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Listings</li>
        <li>Agents</li>
        <button className="btn-outline">Get In Touch</button>
      </ul>
    </nav>
  );
};

export default NavBar;
