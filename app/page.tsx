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
    <div className="flex justify-center">
      <Image
        src={images[currentImageIndex]}
        width={400}
        height={600}
        alt="Lila Lodge"
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      <Hero />
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
          <div className="transition ease-linear text-center md:text-left space-y-4 lg:m-32">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Ayubowan! <br /> Welcome to Lila Lodge, Bentota
            </h1>
            <h2 className="text-2xl text-gray-600">
              Bentota’s Hidden Paradise!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Escape to serenity at Lila Lodge Guest House, a charming retreat
              where comfort meets the lush beauty of Sri Lanka's vibrant jungle.
              Nestled amidst verdant greenery, our haven is just a short stroll
              from the golden sands of Bentota Beach, offering the perfect
              harmony of nature and relaxation.
            </p>
          </div>
          <div className="flex justify-center ">
            <Image
              src={img1}
              width={400}
              height={600}
              alt="Lila Lodge"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        {/* Why Choose Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-xl ">
          <h1 className="pb-3 text-3xl font-bold text-center text-gray-800 mb-6">
            Why Choose Lila Lodge?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prime Location */}
            <div className="flex flex-col items-center bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaMapMarkerAlt className="text-3xl text-purple-500" />
              <h4 className="pt-5 text-xl font-semibold">Prime Location</h4>
              <p className="text-lg text-gray-600">
                Conveniently located just minutes from the beach and Bentota’s
                top attractions.
              </p>
            </div>
            {/* Natural Setting */}
            <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaTree className="text-3xl text-green-500" />
              <h4 className="pt-5 text-xl font-semibold">Natural Setting</h4>
              <p className="text-lg text-gray-600">
                Wake up to the gentle melodies of birdsong and immerse yourself
                in the peaceful jungle ambiance.
              </p>
            </div>
            {/* Authentic Comfort */}
            <div className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaBed className="text-3xl text-blue-500" />
              <h4 className="pt-5 text-xl font-semibold">Authentic Comfort</h4>
              <p className="text-lg text-gray-600">
                Enjoy cozy, thoughtfully designed rooms crafted for your
                ultimate relaxation.
              </p>
            </div>
            {/* Warm Hospitality */}
            <div className="flex flex-col items-center bg-red-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaHeart className="text-3xl text-red-500" />
              <h4 className="pt-5 text-xl font-semibold">Warm Hospitality</h4>
              <p className="text-lg text-gray-600">
                Experience personalized service that reflects the heartwarming
                spirit of Sri Lanka.
              </p>
            </div>
          </div>
        </div>

        {/* Explore & Unwind Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10">
          <div className="text-center md:text-left space-y-4 lg:m-32">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Explore & Unwind
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Start your day with a refreshing walk to the beach or a
              rejuvenating dip in the ocean. Return to Lila Lodge to relax in
              our serene garden, surrounded by exotic flora and fauna, where
              every corner whispers tranquility.
            </p>
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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Book Your Stay Today</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Discover the hidden gem of Sri Lanka’s coastline. Let Lila Lodge
            Guest House be your home away from home in paradise.
          </p>
          <button
            onClick={handleBookNow}
            className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
