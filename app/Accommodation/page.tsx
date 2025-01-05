"use client"; // Ensure the component is rendered on the client

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img8 from "../public/_O4A8252.jpg";
import df1 from "../public/_O4A8252.jpg";
import df2 from "../public/_O4A8600.jpg";
import df3 from "../public/_O4A8187.jpg";
import df4 from "../public/_O4A8284.jpg";
import dd5 from "../public/_O4A8433.jpg";
import dd6 from "../public/_O4A8423.jpg";
import dd7 from "../public/_O4A8481.jpg";
import dd8 from "../public/_O4A8523.jpg";
import {motion} from "framer-motion";
const handleBookNow = () => {
  window.location.href = "/Book";
};

const handleBookDeluxeDouble = () => {
  window.location.href = "/DeluxeDoubleRoom";
};

const handleBookDeluxeFamily = () => {
  window.location.href = "/DeluxeFamilyRoom";
};

export default function Page() {
  const images = [df1, df2, df3, df4];
  const imagesd = [dd5, dd6, dd7, dd8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // State to ensure client-side rendering

  useEffect(() => {
    setIsClient(true); // Mark as client-side only
  }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesd.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlided = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesd.length);
  };

  const prevSlided = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesd.length - 1 : prevIndex - 1
    );
  };

  // Only render carousel if client-side
  if (!isClient) {
    return null; // or some fallback loader component
  }

  return (
    <>
    <head>
        <title>Rooms | Lila Lodge</title>
        <meta name="description" content="Explore the cozy rooms at Lila Lodge, Bentota." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://lila-lodge.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Rooms",
                  "item": "https://lila-lodge.vercel.app/rooms"
                }
              ]
            })
          }}
        ></script>
      </head>
    <div className="font-Quicksand mb-24">
      <div className="relative w-full h-[71vh] sm:h-[70vh] mb-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
        <Image
          src={Img8}
          alt="Hero Image"
          className="w-full h-full object-cover z-0"
          layout="fill"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center m-3 lg:m-28">
        <div className="text-center md:text-left space-y-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="text-center lg:text-5xl text-4xl font-bold text-gray-800 leading-tight">
            A unique distinctive lifestyle like no other!
          </motion.h1>
        </div><br></br>
        <div className="flex justify-center">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 55 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="text-center text-lg text-gray-700 leading-relaxed">
            The styling and design of each room caters to relaxation and
            simplicity. In total, we offer 15 well acquainted rooms, including a
            Club Suite. Each room is individually decorated with hand picked
            furniture from the colonial Dutch period.
          </motion.p>
        </div>
      </div>
      {/* Carousel */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      className="relative w-full max-w-4xl mx-auto mb-36">
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentIndex
                  ? "transform translate-x-0 opacity-100 z-10"
                  : "transform translate-x-full opacity-0 z-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-20"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-20"
        >
          ❯
        </button>

        {/* Small Indicator Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Interactive Data Box */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
        className="absolute -bottom-20 right-0 bg-white p-3 shadow-lg rounded-lg z-50 max-w-full sm:max-w-md w-full sm:w-[600px] h-[180px] flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Deluxe Double Room
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Can you share Family room Bed Room photos separately to identify,
              Double room Photos separately to identify.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-2 mt-1">
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full hover:scale-105 transform"
            >
              Book Now
            </button>
            <button
              onClick={handleBookDeluxeDouble}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full hover:scale-105 transform"
            >
              Explore
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Another Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      className="relative w-full max-w-4xl mx-auto mb-6">
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
          {imagesd.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentIndex
                  ? "transform translate-x-0 opacity-100 z-10"
                  : "transform translate-x-full opacity-0 z-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlided}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-20"
        >
          ❮
        </button>
        <button
          onClick={nextSlided}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-20"
        >
          ❯
        </button>

        {/* Small Indicator Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {imagesd.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Interactive Data Box */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
        className="absolute -bottom-20 right-0 bg-white p-3 shadow-lg rounded-lg z-50 max-w-full sm:max-w-md w-full sm:w-[600px] h-[180px] flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Deluxe Family Room
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Can you share Family room Bed Room photos separately to identify,
              Double room Photos separately to identify.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-2 mt-1">
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full hover:scale-105 transform"
            >
              Book Now
            </button>
            <button
              onClick={handleBookDeluxeFamily}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full hover:scale-105 transform"
            >
              Explore
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}
