"use client"
import React from 'react';
import ExploreButton from './explore';
const destinations = [
  {
    name: 'Jaipur',
    image: 'https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?s=612x612&w=0&k=20&c=z1hztb9BT6YhxT--G_cW8hBmBHWzrFdwbfM0Pc2jATI=',
    website: 'https://www.tourism.rajasthan.gov.in/jaipur.html',
  },
  {
    name: 'Agra',
    image: 'https://lp-cms-production.imgix.net/2019-06/75243789.jpg',
    website: 'https://www.india.com/travel/agra/',
  },
  {
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29hfGVufDB8fDB8fHww&w=1000&q=80',
    website: 'https://goa-tourism.com/',
  },
  {
    name: 'Udaipur',
    image: 'https://media.istockphoto.com/id/1155147454/photo/scenic-udaipur.jpg?s=612x612&w=0&k=20&c=pr1GksTtV1md2qQ0AtvKy926ch2K563lYTW6ozZSjt0=',
    website: 'https://www.tourism.rajasthan.gov.in/udaipur.html',
  },
  {
    name: 'New Delhi',
    image: 'https://images.unsplash.com/photo-1583756886694-583226ccdfd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIwZGVsaGklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    website: 'https://www.delhitourism.gov.in/delhitourism/index.jsp',
  },
  {
    name: 'Ladakh',
    image: 'https://images.pexels.com/photos/14477905/pexels-photo-14477905.jpeg?cs=srgb&dl=pexels-anjali-vishwakarma-14477905.jpg&fm=jpg',
    website: 'https://www.tourmyindia.com/states/ladakh/',
  },
];

const PopularDestinations = () => {
    
  return (
    <div className='text-center -z-10 bg-slate-800 '>
      <h2 className="text-4xl mb-9 pt-4 text-white">Popular Destinations in India</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[60px] mx-[100px]">
        {destinations.map((destination, index) => (
          <div key={index} className="flex flex-col mb-8 ">
            <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-[500px] object-cover transition-opacity group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-center items-center p-4">
                <h3 className="text-2xl font-bold font-serif text-white">{destination.name}</h3>
                <ExploreButton website={destination.website} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;