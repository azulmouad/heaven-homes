import React from "react";
import "./Tab.css";
import Product from "../Product/Product";
import home_1 from "../../assets/home-1.png";
import home_2 from "../../assets/home-2.png";
import home_3 from "../../assets/home-3.png";

const Tab = () => {
  return (
    <div>
      {/* Tabs */}
      <div className="tabs">
        <ul>
          <li>Houses</li>
          <li>TownHouses</li>
          <li>Condos</li>
          <li>Villas</li>
          <li>Commercial</li>
        </ul>
      </div>

      {/* Card Products */}
      <div className="products">
        <Product
          logo={home_1}
          price={"$650,000"}
          title={"123 Serenity Lane"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae fugit harum sed repudiandae, nemo ex provident voluptatibus deserunt, incidunt saepe, id itaque natus! Numquam sapiente laboriosam reprehenderit incidunt velit?"
          }
        />
        <Product
          logo={home_2}
          price={"$850,000"}
          title={"567 Harmoney Drive"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae fugit harum sed repudiandae, nemo ex provident voluptatibus deserunt, incidunt saepe, id itaque natus! Numquam sapiente laboriosam reprehenderit incidunt velit?"
          }
        />
        <Product
          logo={home_3}
          price={"$50,000"}
          title={"798 Biliss Boulevard"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae fugit harum sed repudiandae, nemo ex provident voluptatibus deserunt, incidunt saepe, id itaque natus!"
          }
        />
      </div>
    </div>
  );
};

export default Tab;
