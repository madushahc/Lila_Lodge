"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Img8 from "../public/_O4A8423.jpg";
import dd5 from "../public/_O4A8433.jpg";
import dd6 from "../public/_O4A8423.jpg";
import dd7 from "../public/_O4A8481.jpg";
import dd8 from "../public/_O4A8523.jpg";
import { StaticImageData } from "next/image";
import { LiaFanSolid } from "react-icons/lia";
import { TbAirConditioning } from "react-icons/tb";
import { IoIosTv } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { BiFridge } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdCoffeeMaker } from "react-icons/md";
import { MdOutlineDining } from "react-icons/md";
import { FaBath } from "react-icons/fa6";
import {motion} from "framer-motion";
const imagesd: StaticImageData[] = [dd5, dd6, dd7, dd8];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Set state to true once the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const moveToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesd.length);
  };

  const moveToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesd.length) % imagesd.length
    );
  };

  if (!isClient) {
    return null; // Return nothing until the component is mounted on the client
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[71vh] sm:h-[70vh] mb-10 cursor-pointer">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
        <Image
          src={Img8}
          alt="Hero Image"
          className="w-full h-full object-cover z-0"
          layout="fill"
        />
      </div>

      {/* Room Details Section */}
      <div className="max-w-full max-h-full mx-auto p-6 bg-purple-100 shadow-lg rounded-lg -mt-10 mb-14 flex flex-col pt-10">
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
        className="text-5xl font-semibold text-gray-800 mb-4 text-center">
          Deluxe Family Room
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 55 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        className="text-gray-600 mb-6 text-center text-2xl lg:ml-40 lg:mr-40 m-10">
          02 rooms located on the first floor which offers a private balcony,
          large bay windows and tile floors that provide additional living
          space.
        </motion.p>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 57 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        className="text-3xl font-bold text-gray-800 mb-16 text-center ">
          Highlights
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <LiaFanSolid className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Fan</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <TbAirConditioning className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Air conditioner</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <IoIosTv className="text-blue-500 text-4xl" />
            <p className="text-gray-700">TV</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <IoBed className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Bed</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <BiFridge className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Mini Fridge</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <MdChair className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Seating Area</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <FaWifi className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Free Wi-fi</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <MdCoffeeMaker className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Coffee Maker</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <MdOutlineDining className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Food</p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          className="flex flex-col items-center space-y-2">
            <FaBath className="text-blue-500 text-4xl" />
            <p className="text-gray-700">Attached Bathroom</p>
          </motion.div>
        </div>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            y: { type: "spring", stiffness: 55 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,}}
        className="text-gray-700 text-center mt-6">Room size: 80 Sq m</motion.p>
        {/* Book Now Button placed after Room size */}
        <div className="mt-6 flex justify-center">
          <Link href="/Book">
            <motion.button
              initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            y: { type: "spring", stiffness: 57 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md">
              Book Now
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Thumbnails (scrollable) */}
      <div className="overflow-x-auto space-x-4 px-4 mb-6 hidden lg:flex">
        {imagesd.map((image, index) => (
          <div key={index} className="w-[350px] h-[300px] relative">
            <Image
              src={image}
              width={350}
              height={300}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full rounded-md shadow-md object-cover"
            />
          </div>
        ))}
      </div>

      {/* Current Image (Visible on mobile) */}
      <div className="flex justify-center items-center mt-6 mb-6 px-4 relative">
        {/* Previous Image Button - Visible on mobile and tablet, hidden on larger screens */}
        <button
          onClick={moveToPreviousImage}
          aria-label="Previous Image"
          className="absolute left-0 z-20 text-white text-3xl p-2 bg-black rounded-full hover:bg-gray-700 sm:block md:block lg:hidden"
        >
          <FaArrowLeft />
        </button>

        {/* Image - Visible on mobile and tablet, hidden on larger screens */}
        <Image
          src={imagesd[currentIndex]}
          width={1000}
          height={500}
          alt={`Image ${currentIndex + 1}`}
          className="w-full max-w-[1000px] h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 sm:block md:block lg:hidden"
        />

        {/* Next Image Button - Visible on mobile and tablet, hidden on larger screens */}
        <button
          onClick={moveToNextImage}
          className="absolute right-0 z-20 text-white text-3xl p-2 bg-black rounded-full hover:bg-gray-700 sm:block md:block lg:hidden"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
