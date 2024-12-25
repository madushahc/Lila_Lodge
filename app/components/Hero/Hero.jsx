import Image from "next/image";
import React from "react";
import img2 from "./../../public/_O4A8187.jpg";
const handleBookNow = () => {
  // Navigate to form.tsx using window.location
  window.location.href = "/Book";
};

const Hero = () => {
  return (
    <div className="relative w-full h-[71vh] sm:h-[70vh]">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
      <Image
        src={img2}
        alt="Hero Image"
        className="w-full h-full object-cover z-0"
        layout="fill"
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleBookNow}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
