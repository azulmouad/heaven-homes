import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="title">
      <div>
        <h2>Latest Property Listings</h2>
        <p>
          Discover the neest additions to our exclusive real estate portfolio.
        </p>
      </div>
      <button className="btn max-btn">View All Listings</button>
    </div>
  );
};

export default Title;
