"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Food = () => {
  const cuisine = [
    { url: "/cuisine/cuisine1.png", title: "1" },
    { url: "/cuisine/cuisine2.jpg", title: "2" },
    { url: "/cuisine/cuisine3.png", title: "3" },
    { url: "/cuisine/cuisine4.jpg", title: "4" },
  ];

  return (
    <div className="h-screen bg-slate-800">
      <h1 className="heading text-[rgb(240,242,236)]">Cuisines</h1>
      <Swiper
        spaceBetween={30}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container bg-slate-800" 
      >
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src={"/cuisine/cuisine1.png"}
              height={1000}
              width={1000}
              alt={"a"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src={"/cuisine/cuisine3.png"}
              height={10}
              width={1000}
              alt={"a"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src={"/cuisine/cuisine5.jpg"}
              height={10}
              width={1000}
              alt={"a"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src={"/cuisine/cuisine6.jpg"}
              height={10}
              width={1000}
              alt={"a"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Image
              src={"/cuisine/cuisine2.jpg"}
              height={10}
              width={1000}
              alt={"a"}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-controler bg-slate-700">
        <div className="swiper-button-prev slider-arrow">
          {/* Add your previous button content here */}
        </div>
        <div className="swiper-button-next slider-arrow">
          {/* Add your next button content here */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Food;
