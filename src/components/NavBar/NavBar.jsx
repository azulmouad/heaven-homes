import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {}, [
    window.addEventListener("scroll", () => {
      //GET Scroll Value
      //If Scroll 50px show color Nav
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }),
  ]);

  return (
    <nav className={`navbar container ${sticky ? "dark-nav" : ""}`}>
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
