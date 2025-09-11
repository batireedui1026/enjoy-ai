import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-white py-3 px-4 border-b border-gray-100 md:py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center md:w-16 md:h-16">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center md:w-12 md:h-12">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-purple-500 md:w-8 md:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  <circle cx="12" cy="20" r="2" />
                </svg>
              </div>
            </div>
            <span className="italic text-xl md:text-2xl font-semibold text-gray-800 tracking-wide drop-shadow-sm">
              Chasing The Stars
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="https://www.facebook.com/steam.mn"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Facebook className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Instagram className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Youtube className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
