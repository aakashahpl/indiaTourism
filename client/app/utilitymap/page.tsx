"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

// Replace with your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFrYXNocGF0ZWxhaHBsIiwiYSI6ImNsbWF2MnpkejBkeW8zcGpyNnZsZGs1ancifQ.1CZK6EwQfroKMlUqn1yobA";

const MapboxMap = () => {

  const mapContainer = useRef<HTMLDivElement | null>(null); // Define the type of ref
  const map = useRef<Map | null>(null); // Define the type of ref as Map

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);


  useEffect(() => {
    if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/aakashpatelahpl/clmllouic000501ns1sy5f1ws", // Replace with your desired map style
      // center: [77, 23], // Initial map center
      zoom: 3.5, // Initial zoom level
      projection: "globe",
    });
    
    if (map.current !== null) {
      
      map.current.on('load', () => {
        // Use map.flyTo() to smoothly animate the map to India's coordinates
        setTimeout(() => {
          
          map.current.flyTo({
            center: [80,13], // India's coordinates
            zoom: 12, // Adjust the zoom level as needed
            speed: 0.7, // The fly animation speed (0.1 to 1)
            essential: true
          });
        }, 0);
      });
    }
  });
  
  const homeImage = {
      "Chennai": [80, 13],
      "Delhi": [77, 28],
      "Kolkata": [88, 22]
  }
  function updateCood() {
      let delay = 0;
      for (const key in homeImage) {
          if (homeImage.hasOwnProperty(key)) {
              const value = homeImage[key];
              setTimeout(() => {
                  map.current.flyTo({
                      center: value,
                      zoom: 5, // You can adjust the zoom level as needed
                      essential: true, // This animation is considered essential with regard to preferential rendering
                  });
              }, delay);
              delay += 2000; // Increment the delay for the next animation
          }
      }
  }
  

  return (
    <div className=" w-100 h-screen">
      <div ref={mapContainer} id="map-container" style={{ width: "100%", height: "100%" }}></div>
    {/* <div className="h-20 w-20 bg-red-500" onClick={updateCood}></div> */}
    </div>
  );
};

export default MapboxMap;
