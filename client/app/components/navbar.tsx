"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import {PiMapPinLine} from "react-icons/pi"
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div className="">
      <nav
        className={`z-10 fixed top-0 left-0 w-full transition-transform ease-in-out duration-100 h-20 ${
          scrolling
            ? "bg-black bg-opacity-70 backdrop-blur-sm drop-shadow-lg"
            : " bg-gradient-to-b from-gray-800 to-transparent bg-opacity-90 "
        }`}
      >
        <div id="Logo" className="flex justify-around">
          <div className="flex">
            <Image
              src={"/logo3.png"}
              alt="My Image"
              width={70}
              height={70}
              className=" scale-150"
            />
            <h1
              className="text-white text-5xl px-2 py-2 m-1"
              style={{ fontFamily: "MyFont", borderBottom: "none" }}
            >
              India
            </h1>
          </div>

          <div color="">
            <ul className="flex text-xl gap-6 py-5 text-white">
              <Link href="/form" className="flex">
                <li className="">Plan your trip</li>
                <MdKeyboardArrowDown size={30} />
              </Link>

              <a href="" className="flex">
                <li className="">Things to do</li>
                <MdKeyboardArrowDown size={30} />
              </a>

              <a href="" className="flex">
                <li className="">Be inspired </li>
                <MdKeyboardArrowDown size={30} />
              </a>
            </ul>
          </div>

          <div className="flex hover:scale-110 py-4" >
          <Link href="/utilitymap" className="flex">
            <PiMapPinLine size={40} color={"rgba(255,255,255,1)"} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
