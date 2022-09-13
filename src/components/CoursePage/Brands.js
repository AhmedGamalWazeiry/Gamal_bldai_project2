import React from "react";
import Style from "./Brands.module.css";
const Brands = () => {
  return (
    <div className={Style["brands"]}>
      <h1>
        Top companies choose <a href="#">Udemy Business</a> to build in-demand
        career skills.
      </h1>
      <div className={Style["brands-image"]}>
        <img
          src={require("../../images/nasdaq-light.png")}
          alt="nasdaq-light"
        />
        <img
          src={require("../../images/volkswagen-light.png")}
          alt="volkswagen-lights"
        />
        <img src={require("../../images/box-light.png")} alt="box-light" />
        <img
          src={require("../../images/netapp-light.png")}
          alt="netapp-light"
        />
        <img
          src={require("../../images/eventbrite-light.png")}
          alt="eventbrite-light"
        />
      </div>
    </div>
  );
};

export default Brands;
