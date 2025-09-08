import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm md:px-6 md:py-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          <nav className="flex items-center space-x-4 md:space-x-6">
            <Image
              src="/image/mainlogo.avif"
              alt="cyber city"
              width={100}
              height={100}
              className="object-cover opacity-70  w-16 "
            />
            <Button
              variant="default"
              className="bg-blue-400 hover:bg-blue-600 text-white px-4 text-sm md:px-6 md:text-base"
            >
              2025 оны улирал
            </Button>
            <Link
              href="/about"
              className="bg-gray-300 hover:bg-blue-600 text-black px-4 text-sm md:px-6 md:text-base rounded-xl w-40 h-9 flex justify-center items-center font-bold"
            >
              Бидний тухай
            </Link>
          </nav>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfytlC-NO85dfbElF6tgKZhBIZo4WNJKXi4RILyYQYvkNMEjg/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg border border-white/40 text-white bg-green-700 hover:bg-green-800 transition text-sm md:px-4 md:text-base"
        >
          Хамтран ажиллах
        </a>
      </header>
    </div>
  );
};
export default Header;
