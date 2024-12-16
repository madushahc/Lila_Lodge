export default function GalleryNav() {
    return (
      <div className="flex justify-center items-center p-4 space-x-6 mt-10">
        <a
          href="/Gallery/All"
          className="text-gray-800 font-semibold transition-colors duration-300 hover:text-purple-600 hover:underline underline-offset-4"
        >
          All
        </a>
        <a
          href="/Gallery/Dining"
          className="text-gray-800 font-semibold transition-colors duration-300 hover:text-purple-600 hover:underline underline-offset-4"
        >
          Dining
        </a>
        <a
          href="/Gallery/Accommodation"
          className="text-gray-800 font-semibold transition-colors duration-300 hover:text-purple-600 hover:underline underline-offset-4"
        >
          Accommodation
        </a>
        <a
          href="/Gallery/Excursions"
          className="text-gray-800 font-semibold transition-colors duration-300 hover:text-purple-600 hover:underline underline-offset-4"
        >
          Excursions
        </a>
      </div>
    );
  }
  