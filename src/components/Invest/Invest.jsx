import React from "react";
import "./Invest.css";

import invest_img from "../../assets/invest-img.png";

const Invest = () => {
  return (
    <div className="invest">
      <h1>
        Find your dream home
        <br />
        with our curated
        <br />
        listings and expert
        <br />
        guidance.
      </h1>
      <div className="card-invest-size">
        <p>Property Investments</p>
        <h2>$1B+</h2>
      </div>
      <img className="card-invest-size" src={invest_img} alt="" />
    </div>
  );
};

export default Invest;
