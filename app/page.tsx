"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaTree, FaBed, FaHeart } from "react-icons/fa";
import Hero from "./components/Hero/Hero";
import img1 from "./public/_O4A8549.jpg";
import img3 from "./public/_O4A8709.jpg";
import img5 from "./public/water based.jpg";
import img6 from "./public/tea.jpg";
import img7 from "./public/out.jpg";
import img8 from "./public/eve.jpg";
import img9 from "./public/Ele.jpg";
import {motion} from "framer-motion";

// Book Now handler
const handleBookNow = () => {
  if (typeof window !== "undefined") {
    window.location.href = "/Book";
  }
};

const images = [img5, img6, img7, img8, img9];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
      delay: 0.2,
      x: { type: "spring", stiffness: 50 },
      opacity: { duration: 1 },
      ease: "easeIn",
      duration: 1,
    }}
    className="flex justify-center">
      <Image
        src={images[currentImageIndex]}
        width={400}
        height={600}
        alt="Lila Lodge"
        className="rounded-lg shadow-lg object-cover"
      />
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="font-Quicksand bg-gray-50 min-h-screen overflow-hidden">
      <Hero />
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
          <div className="transition ease-linear text-center md:text-left space-y-4 lg:m-32">
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
            className="font-extrabold text-4xl text-gray-800 leading-tight">
              Ayubowan! <br /> Welcome to Lila Lodge, Bentota
            </motion.h1>
            <motion.h2
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{
                 delay: 0.2,
                 x: { type: "spring", stiffness: 55 },
                 opacity: { duration: 1 },
                 ease: "easeIn",
                 duration: 1,
               }}
            className="text-2xl text-gray-600">
              Bentota’s Hidden Paradise!
            </motion.h2>
            <motion.p
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{
                   delay: 0.2,
                   x: { type: "spring", stiffness: 50 },
                   opacity: { duration: 1 },
                   ease: "easeIn",
                   duration: 1,
                 }}
            className="text-lg text-gray-700 leading-relaxed">
              Escape to serenity at Lila Lodge Guest House, a charming retreat
              where comfort meets the lush beauty of Sri Lanka's vibrant jungle.
              Nestled amidst verdant greenery, our haven is just a short stroll
              from the golden sands of Bentota Beach, offering the perfect
              harmony of nature and relaxation.
            </motion.p>
          </div>
          <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{
               delay: 0.2,
               x: { type: "spring", stiffness: 60 },
               opacity: { duration: 1 },
               ease: "easeIn",
               duration: 1,
             }}
          className="flex justify-center ">
            <Image
              src={img1}
              width={400}
              height={600}
              alt="Lila Lodge"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
        {/* Why Choose Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-xl ">
          <h1 className="pb-3 text-3xl font-bold text-center text-gray-800 mb-6">
            Why Choose Lila Lodge?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prime Location */}
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
               whileHover={{ scale: 1.05,transition: { duration: 0.3 } }}
               animate={{ scale: 1, transition: { duration: 0.3 } }}
            className="flex flex-col items-center bg-purple-100 p-6 rounded-lg shadow-md ">
              <FaMapMarkerAlt className="text-3xl text-purple-500" />
              <h4 className="pt-5 text-xl font-semibold">Prime Location</h4>
              <p className="text-lg text-gray-600">
                Conveniently located just minutes from the beach and Bentota’s
                top attractions.
              </p>
            </motion.div>

            {/* Natural Setting */}
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
              whileHover={{ scale: 1.05,transition: { duration: 0.3 } }}
              animate={{ scale: 1, transition: { duration: 0.3 } }}
            className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-md">
              <FaTree className="text-3xl text-green-500" />
              <h4 className="pt-5 text-xl font-semibold">Natural Setting</h4>
              <p className="text-lg text-gray-600">
                Wake up to the gentle melodies of birdsong and immerse yourself
                in the peaceful jungle ambiance.
              </p>
            </motion.div>

            {/* Authentic Comfort */}
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
              whileHover={{ scale: 1.05,transition: { duration: 0.3 } }}
              animate={{ scale: 1, transition: { duration: 0.3 } }}
            className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md">
              <FaBed className="text-3xl text-blue-500" />
              <h4 className="pt-5 text-xl font-semibold">Authentic Comfort</h4>
              <p className="text-lg text-gray-600">
                Enjoy cozy, thoughtfully designed rooms crafted for your
                ultimate relaxation.
              </p>
            </motion.div>

            {/* Warm Hospitality */}
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
              whileHover={{ scale: 1.05,transition: { duration: 0.3 } }}
              animate={{ scale: 1, transition: { duration: 0.3 } }}
            className="flex flex-col items-center bg-red-100 p-6 rounded-lg shadow-md">
              <FaHeart className="text-3xl text-red-500" />
              <h4 className="pt-5 text-xl font-semibold">Warm Hospitality</h4>
              <p className="text-lg text-gray-600">
                Experience personalized service that reflects the heartwarming
                spirit of Sri Lanka.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Explore & Unwind Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10">
          <div className="text-center md:text-left space-y-4 lg:m-32">
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
            className="text-4xl font-bold text-gray-800 leading-tight">
              Explore & Unwind
            </motion.h1>
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
            className="text-lg text-gray-700 leading-relaxed">
              Start your day with a refreshing walk to the beach or a
              rejuvenating dip in the ocean. Return to Lila Lodge to relax in
              our serene garden, surrounded by exotic flora and fauna, where
              every corner whispers tranquility.
            </motion.p>
          </div>
          <ImageCarousel />
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative text-white text-center py-20 bg-cover bg-center min-h-[600px]"
        style={{
          backgroundImage: `url(${img3.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 pt-28">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="text-4xl font-bold">Book Your Stay Today</motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 57 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="text-lg mt-4 max-w-2xl mx-auto">
            Discover the hidden gem of Sri Lanka’s coastline. Let Lila Lodge
            Guest House be your home away from home in paradise.
          </motion.p>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 55 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            whileHover={{ scale: 1.05,transition: { duration: 0.3 } }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            onClick={handleBookNow}
            className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
