import Image from 'next/image';
import React from 'react';
import img2 from "./../../public/_O4A8187.jpg";

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
    </div>
  );
};

export default Hero;
