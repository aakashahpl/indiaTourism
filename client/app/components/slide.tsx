"use client";
import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider"; // Import AwesomeSlider
import "react-awesome-slider/dist/styles.css"; // Import the default styles
import "../globals.css";

const Slider = () => {
  const handleSlideTransitionEnd = (currentIndex) => {
    // currentIndex will give you the index of the currently displayed slide
    console.log(`Currently displayed slide index: ${currentIndex[1]}`);
  };
  return (
    <AwesomeSlider onTransitionEnd={handleSlideTransitionEnd}>
      <div data-src="/taj.jpg" />
      <div data-src="/Taj.jpg" />
      <div data-src="/pink.jpg" />
    </AwesomeSlider>
  );
};

export default Slider;
