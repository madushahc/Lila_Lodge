"use client";
import Image from "next/image";
import img1 from "./public/_O4A8549.jpg";
import img2 from "./public/_O4A8549.jpg";
import Hero from "./components/Hero/Hero";
import img3 from "./public/_O4A8709.jpg";
const handleBookNow = () => {
  // Navigate to form.tsx using window.location
  window.location.href = "/Book";
};

import { FaMapMarkerAlt, FaTree, FaBed, FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      <Hero></Hero>
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}

          {/* Text Content */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Ayubowan !<br></br> Welcome to Lila Lodge, Bentota
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
          <div className="flex justify-center">
            <Image
              src={img1}
              width={400}
              height={600}
              alt="Lila Lodge"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Why Choose Lila Lodge Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-xl">
          <h1 className="pb-3 text-3xl font-bold text-center text-gray-800 mb-6">
            Why Choose Lila Lodge?
          </h1>

          {/* Using Flexbox for layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prime Location */}
            <div className="flex flex-col text-center items-center space-x-4 bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaMapMarkerAlt className="text-3xl text-purple-500" />
              <div>
                <h4 className="pt-5 text-xl font-semibold text-gray-700 pb-2">
                  Prime Location
                </h4>
                <p className="text-lg text-gray-600">
                  Conveniently located just minutes from the beach and Bentota’s
                  top attractions.
                </p>
              </div>
            </div>

            {/* Natural Setting */}
            <div className="flex flex-col text-center items-center space-x-4 bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaTree className="text-3xl text-green-500" />
              <div>
                <h4 className="pt-5 text-xl font-semibold text-gray-700 pb-2">
                  Natural Setting
                </h4>
                <p className="text-lg text-gray-600">
                  Wake up to the gentle melodies of birdsong and immerse
                  yourself in the peaceful jungle ambiance.
                </p>
              </div>
            </div>

            {/* Authentic Comfort */}
            <div className="flex flex-col text-center items-center space-x-4 bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaBed className="text-3xl text-blue-500" />
              <div>
                <h4 className="pt-5 text-xl font-semibold text-gray-700 pb-2">
                  Authentic Comfort
                </h4>
                <p className="text-lg text-gray-600">
                  Enjoy cozy, thoughtfully designed rooms crafted for your
                  ultimate relaxation.
                </p>
              </div>
            </div>

            {/* Warm Hospitality */}
            <div className="flex flex-col text-center items-center space-x-4 bg-red-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <FaHeart className="text-3xl text-red-500" />
              <div>
                <h4 className="pt-5 text-xl font-semibold text-gray-700 pb-2">
                  Warm Hospitality
                </h4>
                <p className="text-lg text-gray-600">
                  Experience personalized service that reflects the heartwarming
                  spirit of Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Explore & Unwind
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Start your day with a refreshing walk to the beach or a
              rejuvenating dip in the ocean. Return to Lila Lodge to relax in
              our serene garden, surrounded by exotic flora and fauna, where
              every corner whispers tranquility.
              <br />
              Whether you're seeking thrilling adventures, blissful serenity, or
              a perfect blend of both, Lila Lodge Guest House is your gateway to
              creating unforgettable memories in Bentota.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={img2}
              width={400}
              height={600}
              alt="Lila Lodge"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="relative text-white text-center py-20 bg-cover bg-center bg-no-repeat min-h-[600px]" // Adjusted height
        style={{
          backgroundImage: `url(${img3.src})`,
        }}
      >
        {/* Overlay for transparency */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
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
