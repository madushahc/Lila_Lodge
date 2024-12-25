"use client";
import { useState, useEffect } from "react";
import GalleryNav from "@/app/components/GalleryNav";
import Image from "next/image";
import Img1 from "../../public/_O4A8547.jpg";
import Img2 from "../../public/_O4A8608.jpg";
import Img3 from "../../public/_O4A8641.jpg";
import Img4 from "../../public/_O4A8669.jpg";
import Img5 from "../../public/_O4A8553.jpg";
import Img6 from "../../public/_O4A8547.jpg";
import Img7 from "../../public/_O4A8558.jpg";
import Img8 from "../../public/_O4A8699.jpg";

const images = [
  { src: Img1, alt: "Image 1" },
  { src: Img2, alt: "Image 2" },
  { src: Img3, alt: "Image 3" },
  { src: Img4, alt: "Image 4" },
  { src: Img5, alt: "Image 5" },
  { src: Img6, alt: "Image 6" },
  { src: Img7, alt: "Image 7" },
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default to the first image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the large image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

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
      <div className="bg-gray-50 min-h-screen">
        <GalleryNav />

        {/* Large Image Display */}

        <div className="flex justify-center items-center mt-6 mb-6 px-4">
          <Image
            src={selectedImage.src}
            width={1000}
            height={500}
            alt={selectedImage.alt}
            className="w-full max-w-[1000px] h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Small Images - Wrapping Layout */}
        <div className="flex flex-wrap justify-center gap-4 px-4 mb-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[100px] h-[75px] sm:w-[150px] sm:h-[100px] relative cursor-pointer ${
                selectedImage.src === image.src
                  ? "ring-4 ring-purple-500 scale-105 rounded-md"
                  : "ring-2 ring-gray-200"
              } hover:ring-purple-500 transition-all transform hover:scale-110`}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
            >
              <Image
                src={image.src}
                width={150}
                height={100}
                alt={image.alt}
                className="w-full h-full rounded-md shadow-md hover:shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
