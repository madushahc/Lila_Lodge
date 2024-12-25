import All from "../components/All";
import Img8 from "../public/_O4A8571.jpg";
import GalleryNav from "../components/GalleryNav";
import Image from "next/image";
import React from "react";
export default function page() {
  return (
    <div className="">
      <div className="relative w-full h-[71vh] sm:h-[70vh]">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
        <Image
          src={Img8}
          alt="Hero Image"
          className="w-full h-full object-cover z-0"
          layout="fill"
        />
      </div>

      <GalleryNav />

      <All />
    </div>
  );
}
