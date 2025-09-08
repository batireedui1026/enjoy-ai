"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
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
      const increment = targetNumber / (duration / 16); // 60fps гэж тооцоод
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
      {/* <div>
        <Image
          src="/image/image2.png"
          width={400}
          height={220}
          alt="competitions small"
          className=" w-full"
        />
      </div> */}
      <section className="relative w-full bg-gradient-to-r from-purple-400 to-purple-600 overflow-hidden">
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-center md:w-1/2 text-10xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight ml-8">
              ENJOY AI,
              <br />I ENJOY...!
            </h1>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            {/* <Image src={vercel.svg} alt="Robot" className="w-64 h-auto" /> */}
          </div>
        </div>
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.81,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ fill: "white" }}
            ></path>
          </svg>
        </div>
      </section>
      <div>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-200 shadow-md w-72 h-44 rounded"
            >
              <span className="block text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Counter targetNumber={stat.number} />
              </span>
              <div className="pt-2 text-xl text-purple-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mx-20 mt-10">
        <div className="relative w-1/2">
          {" "}
          <Image
            src="/image/about.avif"
            width={400}
            height={320}
            alt="competitions smalls"
            className="w-full rounded"
          />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg">
              Бидний түүх
            </h2>
          </div>
        </div>
        <p className="w-1/2 items-center flex text-purple-400">
          ENJOY AI нь дараагийн үеийн шинийг санаачлагчдад урам зориг өгч,
          тэднийг чадавхижуулах хүсэл тэмүүллээс үүдэлтэй юм. Ирээдүйг
          тодорхойлоход хиймэл оюун ухаан, робот техникийн өсөн нэмэгдэж буй
          үүрэг ролийг хүлээн зөвшөөрч, ЭНЖОЙ AI нь залуу оюун ухаанд эрэл
          хайгуул хийх, бүтээх, динамик сорилтод өрсөлдөх боломжтой платформыг
          бий болгодог. Даруухан эхлэлээс энэ санаачилга нь янз бүрийн гаралтай
          оюутнуудыг хооронд нь холбож, бүтээлч сэтгэлгээ, багаар ажиллах,
          асуудлыг шийдвэрлэх чадварыг хөгжүүлэхийн тулд дэлхий нийтийн
          хөдөлгөөн болон хувирсан.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-8 md:px-0 my-8">
        {/* Text section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 pl-5">
            Бидний эрхэм зорилго
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed  pl-5">
            Хиймэл оюун ухаан, робот техникийн боловсролыг бүх насны оюутнуудад
            хүртээмжтэй, сонирхолтой, үр дүнтэй болгох. Бид урам зоригтой
            тэмцээн уралдаан, сорилт сорилт, суралцах туршлагыг бий болгосноороо
            хиймэл оюун ухаанд суурилсан ирээдүйд амжилтанд хүрэхэд шаардлагатай
            мэдлэг, ур чадвар, бүтээлч сэтгэлгээгээр залуу оюун ухааныг
            төлөвшүүлэхийг зорьж байна.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/mission.avif"
            width={600}
            height={320}
            alt="competitions smalls"
            className=" shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-8 md:px-0 my-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/mission2.avif"
            width={600}
            height={320}
            alt="competitions smalls"
            className=" shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 pl-5">
            Бидний үнэт зүйл
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed  pl-5">
            Хиймэл оюун ухаан, робот техникийн боловсролыг бүх насны оюутнуудад
            хүртээмжтэй, сонирхолтой, үр дүнтэй болгох. Бид урам зоригтой
            тэмцээн уралдаан, сорилт сорилт, суралцах туршлагыг бий болгосноороо
            хиймэл оюун ухаанд суурилсан ирээдүйд амжилтанд хүрэхэд шаардлагатай
            мэдлэг, ур чадвар, бүтээлч сэтгэлгээгээр залуу оюун ухааныг
            төлөвшүүлэхийг зорьж байна.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 p-4">
        <div className="flex items-center justify-center bg-white shadow-lg w-1/3 h-44 rounded-lg border border-gray-100 transform hover:scale-105 transition duration-300 flex-col">
          <span className="block text-sm text-center px-4 text-gray-700">
            Би цагийг үнэхээр сайхан өнгөрүүлж, таашаал авч, сурч, бас шинэ
            найзуудтай болсон. Надад үнэхээр таалагдсан. ТАНД МАШ БАЯРЛАЛАА. Би
            энэ жилийн тэмцээнд оролцохыг тэсэн ядан хүлээж байна.
          </span>
          <div className="pt-2 text-xl text-purple-600 font-semibold">
            - Оролцогч, Кени
          </div>
        </div>
        <div className="flex items-center justify-center bg-white shadow-lg w-1/3 h-48 rounded-lg border border-gray-100 transform hover:scale-105 transition duration-300 flex-col pt-8 pb-8">
          <span className="block text-sm text-center px-4 text-gray-700">
            ENJOY AI-ийн нэг хэсэг болсон нь миний сурагчдад гайхалтай туршлага
            болсон. Тэд робот техник, кодчиллын талаар маш их зүйл сурсан ч
            хамгийн чухал нь багаар ажиллах, бүтээлч байх дуртайг олж мэдсэн.
            Тэднийг маш их урам зоригтойгоор хөгжүүлж, сорилт бэрхшээлийг даван
            туулж байгааг харах үнэхээр гайхалтай. Би тэдний хүрсэн зүйлд
            үнэхээр бахархаж байна.
          </span>
          <div className="pt-2 text-xl text-purple-600 font-semibold">
            - Дасгалжуулагч, Австрали
          </div>
        </div>
        <div className="flex items-center justify-center bg-white shadow-lg w-1/3 h-44 rounded-lg border border-gray-100 transform hover:scale-105 transition duration-300 flex-col pt-2">
          <span className="block text-sm text-center px-4 text-gray-700">
            Энэ бол гайхалтай санаачлага юм! Энэхүү тэмцээнд оюутнуудыг удирдан
            чиглүүлж буй зөвлөгчийн хувьд робот техник, кодчилолын практик
            туршлага нь сурган хүмүүжүүлэгч болон суралцагчдыг хэрхэн
            хүчирхэгжүүлдэгийг өөрийн биеэр харсан. Энэ аялалын нэг хэсэг
            болсондоо баяртай байна!
          </span>
          <div className="pt-2 text-xl text-purple-600 font-semibold">
            - Дасгалжуулагч, Гана
          </div>
        </div>
      </div>
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

export default page;
