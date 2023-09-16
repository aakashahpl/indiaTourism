"use strict";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {PiMapPinLine} from "react-icons/pi"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { motion } from "framer-motion";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFrYXNocGF0ZWxhaHBsIiwiYSI6ImNsbWF2MnpkejBkeW8zcGpyNnZsZGs1ancifQ.1CZK6EwQfroKMlUqn1yobA";

const ImageSlider = ({ slides }: any) => {
  const mapContainer = useRef<HTMLDivElement | null>(null); // Define the type of ref
  const map = useRef<Map | null>(null); // Define the type of ref as Map

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/aakashpatelahpl/clmddgl7701a201nz4qonbcta", // Replace with your desired map style
      // center: [77, 23], // Initial map center
      zoom: 3.5, // Initial zoom level
      projection: "globe",
    });

    if (map.current !== null) {
      map.current.on("load", () => {
        // Use map.flyTo() to smoothly animate the map to India's coordinates
        setTimeout(() => {
          map.current.flyTo({
            center: [78.9629, 20.5937], // India's coordinates
            zoom: 3, // Adjust the zoom level as needed
            speed: 0.65, // The fly animation speed (0.1 to 1)
            essential: true,
          });
        }, 0);
      });
    }
    const marker = new mapboxgl.Marker()
      .setLngLat([78.9, 20.5])
      .addTo(map.current);
  });

  const homeImage = {
    Chennai: [80, 13],
    Delhi: [77, 28],
    Kolkata: [88, 22],
  };
  function updateCood(cood) {
    let delay = 0;

    setTimeout(() => {
      map.current.flyTo({
        center: cood,
        zoom: 5,
        essential: true,
      });

      // Create and add the marker inside the same setTimeout
      // new mapboxgl.Marker().setLngLat(cood).addTo(map.current);

      // Increment the delay for the next animation
      delay += 500;
    }, delay);
  }

  // // Create a default Marker, colored black, rotated 45 degrees.
  // const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
  //   .setLngLat([12.65147, 55.608166])
  //   .addTo(map);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("previous");
    updateCood(slides[currentIndex + 1].cord);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("Next");
    updateCood(slides[currentIndex + 1].cord);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div>
      <div className="">
        <Image
          className="w-screen h-screen  -z-10"
          src={slides[currentIndex].url}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="Profile Picture"
        />
      </div>
      <div className=" absolute bottom-10 left-[39%] select-none ">
        <div className=" flex p-3 w-[40vh] justify-between">
          <div className="hover:scale-110 ease-in-out  " onClick={goToPrevious}>
            <BsFillArrowLeftCircleFill size={40} color="rgba(0, 0, 0, 0.4)" />
          </div>
          <div className="hover:scale-110 ease-in-out" onClick={goToNext}>
            <BsFillArrowRightCircleFill size={40} color="rgba(0, 0, 0, 0.4)" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-screen relative">
          <div className="absolute p-3 bottom-0 pl-4 backdrop-blur-sm bg-gradient-to-r from-transparent via-slate-800 to-transparent">
            <motion.h1
              className="text-[6rem]   text-slate-200    "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Explore India
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-yellow-200 "
            >
              {slides[currentIndex].info}
            </motion.h1>
          </div>
        </div>
        <div className=" w-1/2 h-screen">
          <div
            ref={mapContainer}
            id="map-container"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;