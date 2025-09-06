import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Season = () => {
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
      <div className="relative max-w-2xl mx-auto h-0 pb-[30.5%] mt-8 mb-8 md:mt-8 md:mb-8">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/D1NXfQkdWzM"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        <Image
          src="/image/competitions.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="space-y-4 md:pt-5">
            <p className="wixui-rich-text__text text-4xl font-extrabold text-blue-400 md:text-5xl lg:text-[69px]">
              Тэмцээн
            </p>
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Оролцогчид технологийн метрополисоор хурдан сэтгэхүй, стратеги
                болон техникийн ур чадвар шаардсан сансар огторгуйтай холбоотой
                олон даалгаврыг биелүүлнэ.
              </p>
              <div className="mt-4 flex flex-col items-center">
                <Image
                  src="/image/competitions2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                  <p className="text-black font-semibold text-sm md:text-base">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p>
                  <a
                    href="/files/durem.pdf"
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm"
                  >
                    📥 Дүрэм татах
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <h1 className="text-7xl font-extrabold leading-tight mt-8 md:text-6xl lg:text-8xl md:mt-40">
              CYBER <br /> <span className="pl-2 md:pl-4">CITY</span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:mr-96"
            >
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        <Image
          src="/image/battle.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <h1 className="text-7xl font-extrabold leading-tight mt-8 md:text-6xl lg:text-7xl md:mt-48">
              BATTLE <br /> <span className="pl-2 md:pl-4">OF TRIBES</span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:ml-96"
            >
              Бүртгүүлэх
            </a>
          </div>
          <div className="space-y-4 md:pt-24">
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Хоёр баг нь Улбар шар ба Цэнхэр гэсэн баг болж бие биетэйгээ
                өрсөлдөн, өөрсдийн талбайгаа хамгаалан ялалт байгуулахын төлөө
                өрсөлдөх тэмцээн
              </p>
              <div className="mt-4 flex flex-col items-center">
                <Image
                  src="/image/battle2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                  <p className="text-black font-semibold text-sm md:text-base">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p>
                  <a
                    href="/files/durem.pdf"
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm"
                  >
                    📥 Дүрэм татах
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        <Image
          src="/image/forest.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="space-y-4 md:pt-24">
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Багууд ойн нууцыг тайлж, аяллын турш сонирхолтой бэлэг,
                гайхалтай зүйлсийг нээнэ.
              </p>
              <div className="mt-4 flex flex-col items-center">
                <Image
                  src="/image/forest2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                  <p className="text-black font-semibold text-sm md:text-base">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p>
                  <a
                    href="/files/durem.pdf"
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm"
                  >
                    📥 Дүрэм татах
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <h1 className="text-5xl font-extrabold leading-tight mt-8 md:text-6xl lg:text-8xl md:mt-40">
              GEOMETRIC <br /> <span className="pl-2 md:pl-4">FOREST</span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:mr-80"
            >
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        <Image
          src="/image/sky.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <h1 className="text-5xl font-extrabold leading-tight mt-8 md:text-6xl lg:text-8xl md:mt-40">
              SKYLINE <br /> <span className="pl-2 md:pl-4">ADVENTURES</span>
            </h1>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7R0At5ZsF76GhaannQ6_6O-Z-NLgZcm0rWDxqdOs2r9Q7Hw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:ml-96"
            >
              Бүртгүүлэх
            </a>
          </div>
          <div className="space-y-4 md:pt-24">
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Eagle дрон тэмцээнд сурагчид дүрс таних болон программчилсан
                удирдлага зэрэг технологийг бүрэн ашиглан өрсөлдөнө.
              </p>
              <div className="mt-4 flex flex-col items-center">
                <Image
                  src="/image/sky2.avif"
                  width={400}
                  height={220}
                  alt="competitions small"
                  className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                  <p className="text-black font-semibold text-sm md:text-base">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p>
                  <a
                    href="/files/durem.pdf"
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm"
                  >
                    📥 Дүрэм татах
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="w-full bg-white py-3 px-4 border-b border-gray-100 md:py-4 md:px-6">
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
            <span className="italic text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent md:text-3xl">
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
      </header>
    </div>
  );
};

export default Season;
