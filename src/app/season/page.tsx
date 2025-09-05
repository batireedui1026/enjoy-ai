import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-6">
            <Image
              src="/image/mainlogo.avif"
              alt="cyber city"
              width={100}
              height={100}
              className="object-cover opacity-70"
            />
            <Button
              variant="default"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            >
              2025 оны улирал
            </Button>
          </nav>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg border border-white/40 text-white bg-green-700 hover:bg-green-800 transition"
        >
          Бүртгүүлэх
        </a>
      </header>
      <div className="relative max-h-2/3 max-w-2xl  mx-auto h-0 pb-[30.5%] mt-15">
        <iframe
          className="absolute top-0 left-0 w-full h-96"
          src="https://www.youtube.com/embed/D1NXfQkdWzM"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        {/* Background */}
        <Image
          src="/image/competitions.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div className="space-y-6 pt-5">
            <p className="wixui-rich-text__text text-[69px] font-extrabold text-blue-400">
              Тэмцээн
            </p>

            <div className="bg-gray-100/70 p-4 w-2xl max-h-2/3 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-4 text-gray-600 text-base transition-opacity duration-700 ease-in-out">
                Оролцогчид энэ өндөр технологийн метрополисоор аялахдаа хурдан
                сэтгэхүй, стратеги болон техникийн ур чадвар шаардсан сансар
                огторгуйтай холбоотой олон даалгаврыг биелүүлэх хэрэгтэй болно.
              </p>

              <div className="mt-4 flex flex-col items-center transition-opacity duration-700 ease-in-out hover:opacity-100">
                <Image
                  src="/image/competitions2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <p className="mt-2 text-black font-semibold transition-opacity duration-700 ease-in-out">
                  WhalesBot AI Module 5/5s <br />
                  <span className="font-normal text-gray-600">
                    or AI Module 1s
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h1 className="text-8xl font-extrabold leading-tight mt-40">
              CYBER <br /> <span className="pl-4">CITY</span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition mr-60"
            >
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        {/* Background */}
        <Image
          src="/image/battle.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h1 className="text-7xl font-extrabold leading-tight mt-48">
              BATTLE <br /> <span className="pl-4">OF TRIBES </span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition ml-80"
            >
              Бүртгүүлэх
            </a>
          </div>
          {/* Right side */}
          <div className="space-y-6 pt-24">
            <div className="bg-gray-100/70 p-4 w-2xl max-h-2/3 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-4 text-gray-600 text-base transition-opacity duration-700 ease-in-out">
                Хоёр баг – Улбар шар ба Цэнхэр – бие биетэйгээ өрсөлдөн,
                өөрсдийн овгоо хамгаалан ялалт байгуулах өндөр эрсдэлтэй
                тэмцээн.
              </p>
              <div className="mt-4 flex flex-col items-center transition-opacity duration-700 ease-in-out hover:opacity-100">
                <Image
                  src="/image/battle2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <p className="mt-2 text-black font-semibold transition-opacity duration-700 ease-in-out">
                  WhalesBot AI Module 5/5s <br />
                  <span className="font-normal text-gray-600">
                    or AI Module 1s
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        {/* Background */}
        <Image
          src="/image/forest.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div className="space-y-6 pt-24">
            <div className="bg-gray-100/70 p-4 w-2xl max-h-2/3 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-4 text-gray-600 text-base transition-opacity duration-700 ease-in-out">
                Багийн хамтаар ажилласнаар та ойн нууцыг тайлж, замдаа
                сонирхолтой бэлэг, гайхалтай зүйлсийг нээн илрүүлнэ.
              </p>
              <div className="mt-4 flex flex-col items-center transition-opacity duration-700 ease-in-out hover:opacity-100">
                <Image
                  src="/image/forest2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <p className="mt-2 text-black font-semibold transition-opacity duration-700 ease-in-out">
                  WhalesBot AI Module 5/5s <br />
                  <span className="font-normal text-gray-600">
                    or AI Module 1s
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h1 className="text-8xl font-extrabold leading-tight mt-40 pl-10">
              GEOMETRIC
              <br /> <span className="pl-4">FOREST </span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition mr-60"
            >
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        {/* Background */}
        <Image
          src="/image/sky.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h1 className="text-8xl font-extrabold leading-tight mt-40">
              SKYLINE
              <br /> <span className="pl-4">ADVENTURES </span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-white/40 text-white bg-blue-700 hover:bg-blue-800 transition ml-80"
            >
              Бүртгүүлэх
            </a>
          </div>
          {/* Right side */}
          <div className="space-y-6 pt-5">
            <div className="space-y-6 pt-24">
              <div className="bg-gray-100/70 p-4 w-2xl max-h-2/3 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
                <p className="mt-4 text-gray-600 text-base transition-opacity duration-700 ease-in-out">
                  Энэ бол Eagle дрон тэмцээн бөгөөд оюутнууд дүрс таних болон
                  программчилсан удирдлага зэрэг олон төрлийн технологийг бүрэн
                  дүүрэн ашиглах шаардлагатай.
                </p>
                <div className="mt-4 flex flex-col items-center transition-opacity duration-700 ease-in-out hover:opacity-100">
                  <Image
                    src="/image/sky2.avif"
                    width={400}
                    height={220}
                    alt="competitions small"
                    className="rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
                  />
                  <p className="mt-2 text-black font-semibold transition-opacity duration-700 ease-in-out">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="w-full bg-white py-4 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-purple-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  <circle cx="12" cy="20" r="2" />
                </svg>
              </div>
            </div>
            <span className="italic text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Chasing The Stars
            </span>
          </div>

          {/* Social Media Icons and QR Code */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="#"
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
        </div>
      </header>
    </div>
  );
};

export default page;
