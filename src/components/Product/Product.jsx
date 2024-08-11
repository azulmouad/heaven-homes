import React from "react";
import "./Product.css";
import bed from "../../assets/bed-solid.svg";
import bath from "../../assets/bath-solid.svg";
import maximize from "../../assets/maximize-solid.svg";

//bed-solid.svg
//bath-solid.svg
//maximize-solid.svg

const Product = ({ logo, price, title, body }) => {
  return (
    <div className="product">
      <div className="card-logo">
        <img className="logo" src={logo} alt="" />
        <h3>{price}</h3>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>

      <ul className="ul-prodct">
        <li>
          <img className="icon-svg" src={bed} alt="" />
          <p>3</p>
        </li>
        <li>
          <img className="icon-svg" src={bath} alt="" />
          <p>2</p>
        </li>
        <li>
          <img className="icon-svg" src={maximize} alt="" />
          <p>2,500</p>
        </li>
      </ul>
    </div>
  );
};

export default Product;
