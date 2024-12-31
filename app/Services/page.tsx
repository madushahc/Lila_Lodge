<<<<<<< Updated upstream
export default function page(){
    return(
        <div>The services</div>
    );
}
=======
import Image from "next/image";
import {motion} from "framer-motion"
import Img0 from "../public/adventure.jpg";
import Img8 from "../public/7468418.jpg";
import Img2 from "../public/sigiriya.jpg";
import Img3 from "../public/colombo.jpg";
import Img4 from "../public/Bawa.jpg";
import Img5 from "../public/Airport.jpg";
import Img6 from "../public/Fishing.jpg";
import Img7 from "../public/Beach.jpg";
import Img9 from "../public/Kandy.jpg";
import Img10 from "../public/safari.jpg";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3  justify-center items-center">
        {/* Card 1 */}
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img10}
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition  hover:text-purple-800 duration-300">
              Wildlife Safaris and Conservation Tours
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Yala / Udawalawe Safari
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Spot leopards, elephants, and other wildlife in Yala National Park
              & Udawalawe National Park.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Pinnawala Elephant Orphanage Tour
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Visit the renowned sanctuary for rescued elephants.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Turtle Sanctuary Tours
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Explore nearby hatcheries dedicated to marine turtle conservation.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg lg:mt-3 transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100 ">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img6} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Water-Based Activities
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Bentota or Madu River Boat Ride Tours
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Cruise through serene waterways and mangrove forests.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Water Sports Activities
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Engage in thrilling activities like jet skiing, windsurfing, and
              banana boat rides.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Night Fishing and Ocean Fishing
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Enjoy guided fishing expeditions under the stars.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3  justify-center items-center">
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img9} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Cultural and Heritage Tours
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Temple of the Tooth Visit (Kandy)
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Discover Sri Lanka’s spiritual heritage at the sacred Temple of
              the Tooth Relic.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Kande Vihara Temple Tour
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Visit the iconic Buddhist temple, known for its towering Buddha
              statue and peaceful environment.
            </p>
          </div>
        </div>
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img4} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Architectural and Garden Tours
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Lunuganga Estate Tour
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Explore the enchanting garden retreat of renowned architect
              Geoffrey Bawa.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Brief Garden Tour
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Visit the lush, artistic garden of Bevis Bawa, showcasing creative
              landscaping and sculptures.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3  justify-center items-center">
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img0} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Adventure Activities
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Paramotoring
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Experience stunning aerial views of Bentota’s coastline.
            </p>
          </div>
        </div>
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img3} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              City and Sightseeing Tours
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • City Tours and Day Excursions
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Visit nearby cities and attractions, including Galle, Colombo, and
              Hikkaduwa.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3  justify-center items-center">
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img2} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Customized Sri Lanka Excursions
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Tailor-Made Trips
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Explore Ella, Nuwara Eliya, Sigiriya, Habarana, Galle, Colombo,
              and more with customized itineraries.
            </p>
          </div>
        </div>
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img7} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Special Occasion Arrangements
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Beachside Events
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Celebrate birthdays, BBQs, or private events on the beach,
              tailored to your preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3  justify-center items-center">
        <div className="max-w-[550px] lg:ml-24 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300 bg-gradient-to-br from-white to-gray-100">
          <Image
            className="w-full h-[300px] md:h-[400px] object-cover hover:opacity-90 transition duration-300"
            src={Img5} // Replace with the second card's image
            alt="Card Image"
            width={550}
            height={450}
          />
          <div className="px-6 py-4">
            <h1 className="lg:ml-12 text-xl font-bold text-gray-800 mb-6 mt-6 transition hover:text-purple-800 duration-300">
              Transportation Services
            </h1>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition  hover:text-purple-800 duration-300">
              • Airport Transfers and Taxi Services
            </h3>
            <p className="text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Reliable and comfortable transportation to and from Bandaranaike
              International Airport.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes
