import React from "react";
import "./Slider.css";

const Slider = ({ isActive, slide }) => {
  return (
    <div className={isActive ? "slider active" : "slider"}>
      <img src={slide.image} alt="slide" className="images" />
      <span className="place-tag">{slide.name}</span>
    </div>
  );
};

export default Slider;
