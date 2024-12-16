"use client";
import { useState, useEffect } from "react";
import GalleryNav from "@/app/components/GalleryNav";
import Image from "next/image"; 
import Img1 from "../../public/_O4A8162.jpg";
import Img2 from "../../public/_O4A8187.jpg";
import Img3 from "../../public/_O4A8193.jpg";
import Img4 from "../../public/_O4A8217.jpg";
import Img5 from "../../public/_O4A8252.jpg";
import Img6 from "../../public/_O4A8284.jpg";
import Img7 from "../../public/_O4A8382.jpg";

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
    <div className="bg-gray-50 min-h-screen">
      <GalleryNav />
      
      {/* Large Image Display */}
      <div className="flex justify-center items-center mt-6 mb-6">
        <Image
          src={selectedImage.src}
          width={1000}
          height={500}
          alt={selectedImage.alt}
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
      
      {/* Small Images - Scrollable */}
      <div className="flex justify-center gap-3 px-6 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200 mb-5 h-auto">
  {images.map((image, index) => (
    <div
      key={index}
      className={`flex-none w-[150px] h-[100px] relative cursor-pointer ${
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
        className="rounded-md shadow-md hover:shadow-lg"
      />
      {selectedImage.src === image.src && (
        <div className="absolute inset-0 bg-purple-500 bg-opacity-20 rounded-md pointer-events-none" />
      )}
    </div>
  ))}
</div>

    </div>
  );
}
