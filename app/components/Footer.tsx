"use client"; // This line marks the component as a Client Component

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";

const handleBookNow = () => {
  // Navigate to form.tsx using window.location
  window.location.href = "/Book";
};

function Footer() {
  return (
    <>
      <div className="bg-black opacity-90 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 pb-7">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Lila<span className="text-purple-600">Lodge</span>
            </p>
            <div className="flex gap-6 pb-5">
              {/* icons */}
              <FaInstagram className="text-2xl text-white cursor-pointer hover:text-purple-600" />
              <FaFacebook className="text-2xl text-white cursor-pointer hover:text-purple-600" />
              <FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-purple-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <a href="/">
              <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer">
                Home
              </li>
            </a>
            <a href="/Accommodation">
              <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer">
                Accommodation
              </li>
            </a>
            <a href="/Services">
              <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer">
                Services & Excursions
              </li>
            </a>
            <a href="/Gallery">
              <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer">
                Gallery
              </li>
            </a>
            <a href="/Contact">
              <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer">
                Contacts
              </li>
            </a>
          </ul>
        </div>
        <div>
          <button
            onClick={handleBookNow}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Book Now
          </button>
        </div>
        <div className="p-5">
          <ul>
            <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer flex md:flex-row">
              <GrLocation className="text-2xl cursor-pointer hover:text-purple-600" />
              <span className="pr-4"></span>No.138/15, Galle Road, Bentota
            </li>
            <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer flex md:flex-row pt-2">
              <FiPhone className="text-2xl cursor-pointer hover:text-purple-600" />
              <span className="pr-4"></span>+94 762222222
            </li>
            <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer flex md:flex-row pt-2">
              <MdOutlineEmail className="text-2xl cursor-pointer hover:text-purple-600" />
              <span className="pr-4"></span>email@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center iteem-center text-center pb-5 bg-black opacity-90">
        <hr className="pb-10 text-white"></hr>
        <div className="text-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start pb-5">
          <h1 className="font-semibold">
            Copyright © 2024 - Lila Villa Bentota - All Rights Reserved.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
