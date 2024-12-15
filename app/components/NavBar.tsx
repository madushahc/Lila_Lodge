"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../../public/favicon.jpg";

export default function NavBar() {
  const [isClick, setClick] = useState(false);

  const toggleNavbar = () => {
    setClick(!isClick);
  };
 

  return (
    <nav className="bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo Section */}
          <div className="flex">
          <div className="flex items-center flex-shrink-0 flex-initial">
          <Image
          src={img}
          alt="logo"
          width={54}
          height={54}
          priority={true}
        />
        <a href="/" className="text-white text-xl font-bold ml-2">
    Lila Lodge
  </a>
  
          </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Home
              </a>
              <a
                href="/Accommodation"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Accommodation
              </a>
              <a
                href="/Services"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Services
              </a>
              <a
                href="/Contact"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contacts
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                // Close Icon (X)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icon (Three Bars)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isClick && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="/"
                className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/Accommodation"
                className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Accommodation
              </a>
              <a
                href="/Services"
                className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Services
              </a>
              <a
                href="/Contact"
                className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contacts
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
