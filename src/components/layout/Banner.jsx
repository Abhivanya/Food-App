import React from "react";
import Style from "./Banner.module.css";
import bannerImg from "../assets/meals.jpg";
const Banner = () => {
  return (
    <div className={Style["main-image"]}>
      <img src={bannerImg} alt="banner img" />
    </div>
  );
};

export default Banner;
