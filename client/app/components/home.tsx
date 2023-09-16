"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageSlider from "./imageslider";
import MapboxMap from "./mapbox";

const Homeo = () => {
  const slides = [
    {
      url: "/homepage/pink.jpg",
      title: "boat",
      cord: [78, 27.17],
      info: "Enjoy the cultural diversity and artistic heritage of West Bengal.",
    },
    {
      url: "/homepage/taj10.jpg",
      title: "beach",
      cord: [88, 22],
      info: "Visit the iconic Taj Mahal and explore the spiritual heart of India.",
    },
    {
      url: "/homepage/rajasthan10.jpg",
      title: "boat",
      cord: [70, 27.4],
      info: "Step into the royal past and vibrant colors of Rajasthan",
    },
    {
      url: "/homepage/victoria.jpg",
      title: "boat",
      cord: [88, 22],
      info: "Embrace the cultural tapestry and artistic heritage of West Bengal.",
    },
    {
      url: "/homepage/kashmir10.jpg",
      title: "boat",
      cord: [75, 33],
      info: "Experience the breathtaking beauty and rich cultural tapestry of Kashmir.",
    },
    {
      url: "/homepage/tiger11.jpg",
      title: "boat",
      cord: [76, 27],
      info: "Embrace the cultural tapestry and artistic heritage of West Bengal.",
    },
  ];

  return (
    <div className="">
      <ImageSlider slides={slides} />
      {/* <div className="flex">
        <div className="w-1/2 h-screen"></div>
        <MapboxMap />
      </div> */}
    </div>
  );
};

export default Homeo;
// comment