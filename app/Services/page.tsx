import Image from "next/image";
import Img0 from "../public/7468418.jpg";
import Img8 from "../public/7468418.jpg";

export default function Page() {
  return (
    <div className="mb-3">
      {/* Hero Section */}
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

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-6">
        Services & Excursions
      </h1>

      {/* Cards Container */}
      <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6">
        Wildlife Safaris and Conservation Tours
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 justify-center items-center">
        {/* Card 1 */}
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 duration-300 bg-white">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover"
            src={Img0}
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Card Title 1
            </h3>
            <p className="text-gray-600 text-base">
              This is a description of the first card. It provides a brief
              overview of the content or feature.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-[550px] lg:ml-28  rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 duration-300 bg-white">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover"
            src={Img0}
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Card Title 2
            </h3>
            <p className="text-gray-600 text-base">
              This is a description of the second card. It provides a brief
              overview of the content or feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
