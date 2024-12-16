"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GalleryNav() {
  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname === path;

  return (
    <div className="flex justify-center items-center p-4 space-x-6 mt-12">
      <Link
        href="/Gallery/All"
        className={`text-gray-800 font-semibold transition-colors duration-300 
          ${isActive('/Gallery/All') ? 'text-purple-600 underline' : 'hover:text-purple-600'} 
          hover:underline-offset-4`}
      >
        All
      </Link>
      <Link
        href="/Gallery/Dining"
        className={`text-gray-800 font-semibold transition-colors duration-300 
          ${isActive('/Gallery/Dining') ? 'text-purple-600 underline' : 'hover:text-purple-600'} 
          hover:underline-offset-4`}
      >
        Dining
      </Link>
      <Link
        href="/Gallery/Accommodation"
        className={`text-gray-800 font-semibold transition-colors duration-300 
          ${isActive('/Gallery/Accommodation') ? 'text-purple-600 underline' : 'hover:text-purple-600'} 
          hover:underline-offset-4`}
      >
        Accommodation
      </Link>
      <Link
        href="/Gallery/Excursions"
        className={`text-gray-800 font-semibold transition-colors duration-300 
          ${isActive('/Gallery/Excursions') ? 'text-purple-600 underline' : 'hover:text-purple-600'} 
          hover:underline-offset-4`}
      >
        Excursions
      </Link>
    </div>
  );
}
