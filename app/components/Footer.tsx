"use client"; // This line marks the component as a Client Component
import React from "react";
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
      <div className="font-Quicksand bg-black opacity-90 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 pb-7">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Lila<span className="text-purple-600">Lodge</span>
            </p>
            <div className="flex gap-6 pb-5">
              {/* icons */}
              <a href="https://www.instagram.com/lila_lodge_bentota?igsh=MTlsMWNhOTluamZ1dA==">
                <FaInstagram className="text-2xl text-white cursor-pointer hover:text-purple-600" />
              </a>
              <a href="https://www.facebook.com/share/14bX29WAWi/?mibextid=wwXIfr">
                <FaFacebook className="text-2xl text-white cursor-pointer hover:text-purple-600" />
              </a>
              <a href="https://wa.me/+94714241951" target="_blank">
                <FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-purple-600" />
              </a>
            </div>
            <div>
              <button
                onClick={handleBookNow}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                Book Now
              </button>
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
            <a href="https://facebook.com/people/Lila-Lodge/61569978188636/?sk=reviews">
              <li className="text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer">
                Reviews
              </li>
            </a>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <li className="text-white text-md pb-2 font-bold hover:text-purple-600 cursor-pointer flex flex-col md:flex-row items-start md:items-center">
              <GrLocation className="text-2xl cursor-pointer hover:text-purple-600 mr-2" />
              <a href="https://maps.app.goo.gl/BehUfpbpihgVqTaz7" className="">
                Lila Lodge, Kadiyangoda Road, Bentota
              </a>
            </li>
            <li className="text-white text-md pb-2 font-bold hover:text-purple-600 cursor-pointer flex flex-col md:flex-row items-start md:items-center pt-2">
              <FiPhone className="text-2xl cursor-pointer hover:text-purple-600 mr-2" />
              <a href="tel:+94714241951" className="">
                +94 71 424 1951
              </a>
            </li>
            <li className="text-white text-md pb-2 font-bold hover:text-purple-600 cursor-pointer flex flex-col md:flex-row items-start md:items-center pt-2">
              <MdOutlineEmail className="text-2xl cursor-pointer hover:text-purple-600 mr-2" />
              <span>
                lilalodgeofficial@gmail.com | antheagrussell22@icloud.com
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center iteem-center text-center pb-5 bg-black opacity-90">
        <hr className="pb-10 text-white"></hr>
        <div className="text-white h-1/2 w-full flex flex-col md:flex-row justify-around md:justify-center items-start md:items-center pb-5">
          <h1 className="font-semibold text-center md:text-left">
            Copyright © 2025 - LilaLodge Bentota - All Rights Reserved.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
