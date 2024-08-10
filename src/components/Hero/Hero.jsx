import React from "react";
import "./Hero.css";
import hero_icon from "../../assets/hero.png";
import building_icon from "../../assets/building-regular.svg";
import search_config from "../../assets/search-config.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hover-img" src={hero_icon} alt="" />
      <div className="hero-overlay">
        <h3 className="container">
          Find Your Next
          <br />
          Home Sweet Home.
        </h3>
        <div className="input-card">
          <img src={building_icon} alt="" />
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city or ZIP code"
          />
          <img src={search_config} alt="" />
          <button className="btn-search">Search Property</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
