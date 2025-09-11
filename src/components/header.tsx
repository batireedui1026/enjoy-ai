"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname(); // Одоогийн зам
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "2025 оны улирал" },
    { href: "/about", label: "Бидний тухай" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo + Nav */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/image/mainlogo.avif"
              alt="cyber city"
              width={120}
              height={120}
              className="object-cover opacity-70"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm md:text-base transition
                  ${
                    pathname === link.href
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-black hover:bg-blue-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Register Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => router.push("/register")}
            className="px-6 py-2 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base"
          >
            Бүртгүүлэх
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-4 pb-4 bg-white shadow-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-md transition
                ${
                  pathname === link.href
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black hover:bg-blue-400"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              router.push("/register");
            }}
            className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-800 transition"
          >
            Бүртгүүлэх
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
