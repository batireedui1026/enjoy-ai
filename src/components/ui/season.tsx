"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Season = () => {
  const router = useRouter();
  return (
    <div>
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
              <Image
                src="/image/competitions2.avif"
                width={500}
                height={220}
                alt="competitions small"
                className="rounded-lg w-full max-w-[550px] transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <p className=" text-black text-xs md:text-base font-semibold ">
                Кибер хотын зүрхэнд байрлах хөл хөдөлгөөнтэй сансрын боомт нь
                судлаачдыг шинэ ертөнцөд холбож, харин сансрын цахилгаан шатнууд
                хүмүүсийг огторгуйн уудамд тээвэрлэнэ.
              </p>
              <p className="mt-2 text-black text-sm md:text-base text-start font-semibold">
                Оролцогчид энэ өндөр технологийн хотоор аялж байхдаа хурдтай
                сэтгэх, стратеги боловсруулах, техникийн ур чадвар шаардсан олон
                даалгавартай тулгарна.
              </p>
              <div>
                <div className="mt-4 flex gap-2 justify-between ">
                  <div>
                    <div className="mx-auto border rounded overflow-hidden w-52 h-16 text-xs">
                      <div className="grid grid-cols-2 text-white font-bold text-xs text-start">
                        <div className="p-1 border-r bg-purple-400">
                          АНГИЛАЛ
                        </div>
                        <div className="p-1 text-gray-700">10-15 нас</div>
                      </div>
                      <div className="grid grid-cols-2 bg-gray-100 text-xs">
                        <div className="p-1 border-r font-semibold bg-purple-400">
                          БАГ
                        </div>
                        <div className="p-1 text-gray-700">
                          2 сурагч, 1 багш
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 text-center ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:mt-30    text-center text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] tracking-wide">
              КИБЕР ХОТ
            </h1>
            <div className="-mt-8 max-w-2xl mx-auto shadow-lg rounded-2xl p-6 space-y-4 text-sm bg-gray-8 00">
              <h2 className="text-sm font-bold text-white-800 text-start">
                ENJOY AI улсын аварга шалгаруулах Робот кодчилолын тэмцээн:
              </h2>
              <ul className="text-start">
                <li>
                  <span className="font-semibold">Тэмцээний нэр:</span> Кибер
                  хот
                </li>
                <li>
                  <span className="font-semibold">Ангилал:</span> 10-15
                </li>
                <li>
                  <span className="font-semibold">Баг:</span> 2 сурагч, 1 багш
                </li>
                <li>
                  <span className="font-semibold">Хэрэглэгдэхүүн:</span> 1S / 5S
                </li>
                <li>
                  <span className="font-semibold">Шагнал:</span> Тэмцээний эхний
                  3 баг{" "}
                  <span className="font-medium">ENJOY AI медаль, цом</span>{" "}
                  гардан авна. Мөн эдгээр багууд 12 сард болох{" "}
                  <span className="font-medium">ENJOY AI дэлхийн аваргад</span>{" "}
                  оролцох эрхээр шагнана.
                </li>
                <li>
                  <span className="font-semibold">Оролцох боломж:</span>{" "}
                  Улаанбаатар хот, 21 аймгаас оролцох боломжтой. Багийн тоо{" "}
                  <span className="font-medium">хязгааргүй</span> тул сонирхсон
                  хүүхэд бүрд нээлттэй.
                </li>
                <div>
                  <li>
                    <span className="font-semibold">Тэмцээний дүрэм:</span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1C_Z3-g5pJXMtnrOKAc0hb5ReThPADpRe?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400  hover:underline"
                    >
                      https://drive.google.com/drive/folders
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">
                      Тэмцээний газрын зураг:
                    </span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1kH6-BOPYNpCiilsonkZ7vasbGInqf0V2?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold text-blue-400  shadow-md  transition hover:underline"
                    >
                      https://drive.google.com/drive
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">Тэмцээний зөвлөмж:</span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1JkHNp3wi3b0qHNA1ilptq3DYmdXyLUR5?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-semibold text-blue-400 hover:underline"
                    >
                      https://drive.google.com/drive/folders/1
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">
                      Кибер хот: Тэмцээний танилцуулга видео:
                    </span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://www.youtube.com/watch?v=ymSeYBvXfkM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-semibold text-blue-400 hover:underline"
                    >
                      https://www.youtube.com
                    </a>
                  </span>
                </div>
              </ul>
            </div>
            <button
              onClick={() => router.push("/register")}
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:mr-96"
            >
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        <Image
          src="/image/forest.avif"
          alt="forest"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="flex flex-col justify-center items-center space-y-4 text-center ">
            <h1 className=" -mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:mt-20 text-center text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] tracking-wide ">
              ГЕОМЕТРИЙН ОЙ
            </h1>
            <div className="max-w-2xl mx-auto shadow-lg rounded-2xl p-6 space-y-4 text-sm bg-gray-8 00">
              <h2 className="text-sm font-bold text-white-800 text-start">
                ENJOY AI улсын аварга шалгаруулах Робот кодчилолын тэмцээн:
              </h2>
              <ul className="text-start">
                <li>
                  <span className="font-semibold">Тэмцээний нэр:</span>{" "}
                  Геометрийн ой
                </li>
                <li>
                  <span className="font-semibold">Ангилал:</span> 5-6 нас, 7-8
                  нас
                </li>
                <li>
                  <span className="font-semibold">Баг:</span> 2 сурагч, 1 багш
                </li>
                <li>
                  <span className="font-semibold">Хэрэглэгдэхүүн:</span>{" "}
                  U20pro/U30pro
                </li>
                <li>
                  <span className="font-semibold">Шагнал:</span> Тэмцээний эхний
                  3 баг{" "}
                  <span className="font-medium">ENJOY AI медаль, цом</span>{" "}
                  гардан авна. Мөн эдгээр багууд 12 сард болох{" "}
                  <span className="font-medium">ENJOY AI дэлхийн аваргад</span>{" "}
                  оролцох эрхээр шагнана.
                </li>
                <li>
                  <span className="font-semibold">Оролцох боломж:</span>{" "}
                  Улаанбаатар хот, 21 аймгаас оролцох боломжтой. Багийн тоо{" "}
                  <span className="font-medium">хязгааргүй</span> тул сонирхсон
                  хүүхэд бүрд нээлттэй.
                </li>
                <div>
                  <li>
                    <span className="font-semibold">Тэмцээний дүрэм:</span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1C_Z3-g5pJXMtnrOKAc0hb5ReThPADpRe?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400  hover:underline"
                    >
                      https://drive.google.com/drive/folders
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">
                      Тэмцээний газрын зураг:
                    </span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1kH6-BOPYNpCiilsonkZ7vasbGInqf0V2?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold text-blue-400  shadow-md  transition hover:underline"
                    >
                      https://drive.google.com/drive
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">Тэмцээний зөвлөмж:</span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1JkHNp3wi3b0qHNA1ilptq3DYmdXyLUR5?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-semibold text-blue-400 hover:underline"
                    >
                      https://drive.google.com/drive/folders/1
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">
                      Кибер хот: Тэмцээний танилцуулга видео:
                    </span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://www.youtube.com/watch?v=ymSeYBvXfkM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-semibold text-blue-400 hover:underline"
                    >
                      https://www.youtube.com
                    </a>
                  </span>
                </div>
              </ul>
            </div>
            <button
              onClick={() => router.push("/register")}
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:ml-96"
            >
              Бүртгүүлэх
            </button>
          </div>
          <div className="space-y-4 md:pt-5">
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <Image
                src="/image/forest2.avif"
                width={500}
                height={220}
                alt="competitions small"
                className="rounded-lg w-full max-w-[550px] transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <p className=" text-black text-xs md:text-base font-semibold ">
                Геометрийн ой” бол ENJOY AI -н хамгийн бяцхан судлаачдад
                зориулсан хөгжилтэй сорилт! Өнгөлөг дүрс, нууцлаг зүйлсээр
                дүүрэн ид шидийн ойгоор аялж явахдаа эртний балгастай тааралдаж,
                энгийн даалгавруудыг хамтдаа шийднэ.
              </p>

              <div>
                <div className="mt-4 flex gap-2 justify-between ">
                  <div>
                    <div className="mx-auto border rounded overflow-hidden w-52 h-16 text-xs">
                      <div className="grid grid-cols-2 text-white font-bold text-xs text-start">
                        <div className="p-1 border-r bg-purple-400">
                          АНГИЛАЛ
                        </div>
                        <div className="p-1 text-gray-700">
                          5-6 нас, 7-8 нас
                        </div>
                      </div>
                      <div className="grid grid-cols-2 bg-gray-100 text-xs">
                        <div className="p-1 border-r font-semibold bg-purple-400">
                          БАГ
                        </div>
                        <div className="p-1 text-gray-700">
                          2 сурагч, 1 багш
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section className="relative w-full min-h-screen bg-gradient-to-r from-purple-900 via-pink-700 to-purple-800 text-white overflow-hidden">
        <Image
          src="/image/sky.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="space-y-4 md:pt-5">
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <Image
                src="/image/sky2.avif"
                width={500}
                height={220}
                alt="competitions small"
                className="rounded-lg w-full max-w-[550px] transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <p className=" text-black text-xs md:text-base font-semibold ">
                Skyline Adventures” бол ENJOY AI-ийн Дроны уралдаан юм. Сурагчид
                харааны хурд, программчлал, хиймэл оюун зэрэг олон төрлийн ур
                чадварыг цогцоор нь ашиглах шаардлагатай. Тэд дроноо ашиглан
                хөөрөх, нисэх хөдөлгөөн хийж, QR таних үйлдлүүдийг гүйцэтгэнэ.
                Энэ уралдаан нь сурагчдын төсөөллийг өдөөж, сансар судлал,
                агаарын технологид сонирхолтой болох суурийг тавина.
              </p>
              <div>
                <div className="mt-4 flex gap-2 justify-between ">
                  <div>
                    <div className="mx-auto border rounded overflow-hidden w-52 h-16 text-xs">
                      <div className="grid grid-cols-2 text-white font-bold text-xs text-start">
                        <div className="p-1 border-r bg-purple-400">
                          АНГИЛАЛ
                        </div>
                        <div className="p-1 text-gray-700">10-15 нас</div>
                      </div>
                      <div className="grid grid-cols-2 bg-gray-100 text-xs">
                        <div className="p-1 border-r font-semibold bg-purple-400">
                          БАГ
                        </div>
                        <div className="p-1 text-gray-700">
                          1 сурагч, 1 багш
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 text-center ">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:mt-20 text-center text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] tracking-wide">
              ТЭНГЭРИЙН АДАЛ ЯВДАЛ
            </h1>
            <div className="mb-4 max-w-2xl mx-auto shadow-lg rounded-2xl p-6 space-y-4 text-sm ">
              <h2 className="text-sm font-bold text-white-800 text-start ">
                ENJOY AI улсын аварга шалгаруулах Робот кодчилолын тэмцээн:
              </h2>
              <ul className="text-start">
                <li>
                  <span className="font-semibold">Тэмцээний нэр:</span> Кибер
                  хот
                </li>
                <li>
                  <span className="font-semibold">Ангилал:</span> 10-15
                </li>
                <li>
                  <span className="font-semibold">Баг:</span> 2 сурагч, 1 багш
                </li>
                <li>
                  <span className="font-semibold">Хэрэглэгдэхүүн:</span> 1S / 5S
                </li>
                <li>
                  <span className="font-semibold">Шагнал:</span> Тэмцээний эхний
                  3 баг{" "}
                  <span className="font-medium">ENJOY AI медаль, цом</span>{" "}
                  гардан авна. Мөн эдгээр багууд 12 сард болох{" "}
                  <span className="font-medium">ENJOY AI дэлхийн аваргад</span>{" "}
                  оролцох эрхээр шагнана.
                </li>
                <li>
                  <span className="font-semibold">Оролцох боломж:</span>{" "}
                  Улаанбаатар хот, 21 аймгаас оролцох боломжтой. Багийн тоо{" "}
                  <span className="font-medium">хязгааргүй</span> тул сонирхсон
                  хүүхэд бүрд нээлттэй.
                </li>
                <div>
                  <li>
                    <span className="font-semibold">Тэмцээний дүрэм:</span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1C_Z3-g5pJXMtnrOKAc0hb5ReThPADpRe?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400  hover:underline"
                    >
                      https://drive.google.com/drive/folders
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">
                      Тэмцээний газрын зураг:
                    </span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1kH6-BOPYNpCiilsonkZ7vasbGInqf0V2?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold text-blue-400  shadow-md  transition hover:underline"
                    >
                      https://drive.google.com/drive
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">Тэмцээний зөвлөмж:</span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://drive.google.com/drive/folders/1JkHNp3wi3b0qHNA1ilptq3DYmdXyLUR5?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-semibold text-blue-400 hover:underline"
                    >
                      https://drive.google.com/drive/folders/1
                    </a>
                  </span>
                  <li>
                    <span className="font-semibold">
                      Кибер хот: Тэмцээний танилцуулга видео:
                    </span>
                  </li>
                  <span className="font-semibold">
                    <a
                      href="https://www.youtube.com/watch?v=ymSeYBvXfkM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-semibold text-blue-400 hover:underline"
                    >
                      https://www.youtube.com
                    </a>
                  </span>
                </div>
              </ul>
            </div>
            <button
              onClick={() => router.push("/register")}
              className="px-6 py-3 rounded-lg border border-white/40 text-white bg-blue-600 hover:bg-blue-800 transition text-sm md:text-base md:px-8 md:py-4 md:mr-96"
            >
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Season;
