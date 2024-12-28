import Form from "../components/Form";
import Image from "next/image";
import React from "react";
import Img8 from "../public/contact image.jpg";

export default function page() {
  return (
    <div>
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
      <div className="pt-1">
        <Form />
      </div>
    </div>
  );
}
