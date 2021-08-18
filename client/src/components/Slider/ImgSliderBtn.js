import React from "react";
import "./Slider.css";
import leftArrow from "../Imgs/Icons/left-arrow.svg";
import rightArrow from "../Imgs/Icons/right-arrow.svg";

export default function ImgSliderBtn({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <div className="ImgSliderBtn">
        <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
        <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    </div>
  );
}