"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const stats = [
    { number: 5, label: "Тив" },
    { number: 34, label: "Улс" },
    { number: 15000, label: "Үйл ажиллагаа" },
    { number: 1000000, label: "Оролцогчид" },
  ];

  function Counter({ targetNumber }: { targetNumber: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          clearInterval(counter);
          setCount(targetNumber);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [targetNumber]);

    return <span>{count.toLocaleString()}</span>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-purple-500 to-indigo-600 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              ENJOY AI,
              <br />I ENJOY...!
            </h1>
          </div>

          {/* Hero Image */}
          {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/hero-image.png"
              alt="AI Illustration"
              className="w-80 md:w-full max-w-md animate-float"
            />
          </div> */}
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-32"
          >
            <path
              d="M0,49.98 C150,150 349.81,-50 500,49.98 L500,150 L0,150 Z"
              className="fill-white"
            />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-72 h-72 bg-purple-300 rounded-full opacity-30 -top-16 -left-16 animate-pulse-slow"></div>
          <div className="absolute w-48 h-48 bg-indigo-400 rounded-full opacity-20 -bottom-16 -right-16 animate-pulse-slow"></div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-8 px-4 sm:px-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-200 shadow-md w-full sm:w-72 h-44 rounded"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Counter targetNumber={stat.number} />
            </span>
            <div className="pt-2 text-lg sm:text-xl text-purple-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-0 my-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/neg.jpg"
            width={600}
            height={320}
            alt="competitions smalls"
            className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 w-full max-w-md md:max-w-full"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4">
            Бидний түүх
          </h3>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
            ENJOY AI нь дараагийн үеийн шинийг санаачлагчдад урам зориг өгч,
            тэднийг чадавхижуулах хүсэл тэмүүллээс үүдэлтэй юм. Ирээдүйг
            тодорхойлоход хиймэл оюун ухаан, робот техникийн өсөн нэмэгдэж буй
            үүрэг ролийг хүлээн зөвшөөрч, ЭНЖОЙ AI нь залуу оюун ухаанд эрэл
            хайгуул хийх, бүтээх, динамик сорилтод өрсөлдөх боломжтой платформыг
            бий болгодог. Даруухан эхлэлээс энэ санаачилга нь янз бүрийн
            гаралтай оюутнуудыг хооронд нь холбож, бүтээлч сэтгэлгээ, багаар
            ажиллах, асуудлыг шийдвэрлэх чадварыг хөгжүүлэхийн тулд дэлхий
            нийтийн хөдөлгөөн болон хувирсан.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-0 my-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4">
            Бидний эрхэм зорилго
          </h3>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
            Хиймэл оюун ухаан, робот техникийн боловсролыг бүх насны оюутнуудад
            хүртээмжтэй, сонирхолтой, үр дүнтэй болгох. Бид урам зоригтой
            тэмцээн уралдаан, сорилт сорилт, суралцах туршлагыг бий болгосноороо
            хиймэл оюун ухаанд суурилсан ирээдүйд амжилтанд хүрэхэд шаардлагатай
            мэдлэг, ур чадвар, бүтээлч сэтгэлгээгээр залуу оюун ухааныг
            төлөвшүүлэхийг зорьж байна.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <Image
            src="/image/hoyr.jpg"
            width={600}
            height={320}
            alt="competitions smalls"
            className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 w-full max-w-md md:max-w-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-0 my-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/gurav.jpg"
            width={600}
            height={320}
            alt="competitions smalls"
            className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 w-full max-w-md md:max-w-full"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4">
            Бидний үнэт зүйл
          </h3>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
            Хиймэл оюун ухаан, робот техникийн боловсролыг бүх насны оюутнуудад
            хүртээмжтэй, сонирхолтой, үр дүнтэй болгох. Бид урам зоригтой
            тэмцээн уралдаан, сорилт сорилт, суралцах туршлагыг бий болгосноороо
            хиймэл оюун ухаанд суурилсан ирээдүйд амжилтанд хүрэхэд шаардлагатай
            мэдлэг, ур чадвар, бүтээлч сэтгэлгээгээр залуу оюун ухааныг
            төлөвшүүлэхийг зорьж байна.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-8 py-8">
        <div className="flex-1 flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition duration-300">
          <p className="text-sm text-gray-700 text-center">
            Би цагийг үнэхээр сайхан өнгөрүүлж, таашаал авч, сурч, бас шинэ
            найзуудтай болсон...
          </p>
          <span className="pt-2 text-purple-600 font-semibold">
            - Оролцогч, Кени
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition duration-300">
          <p className="text-sm text-gray-700 text-center">
            ENJOY AI-ийн нэг хэсэг болсон нь миний сурагчдад гайхалтай туршлага
            болсон...
          </p>
          <span className="pt-2 text-purple-600 font-semibold">
            - Дасгалжуулагч, Австрали
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition duration-300">
          <p className="text-sm text-gray-700 text-center">
            Энэ бол гайхалтай санаачлага юм! Энэхүү тэмцээнд оюутнуудыг удирдан
            чиглүүлж буй зөвлөгчийн хувьд...
          </p>
          <span className="pt-2 text-purple-600 font-semibold">
            - Дасгалжуулагч, Гана
          </span>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative max-w-4xl mx-auto h-0 pb-[30.5%] mt-8 mb-8 md:mt-8 md:mb-8">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/BkrR1XM6n9M?start=11"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
