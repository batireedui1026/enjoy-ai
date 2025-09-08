import Image from "next/image";
import React from "react";

const Season = () => {
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
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Кибер хотын зүрхэнд байрлах хөл хөдөлгөөнтэй сансрын боомт нь
                судлаачдыг шинэ ертөнцөд холбож, харин сансрын цахилгаан шатнууд
                хүмүүсийг огторгуйн уудамд тээвэрлэнэ.
              </p>
              <p className="mt-2 text-gray-600 text-sm md:text-base text-start">
                Оролцогчид энэ өндөр технологийн хотоор аялж байхдаа хурдтай
                сэтгэх, стратеги боловсруулах, техникийн ур чадвар шаардсан олон
                даалгавартай тулгарна.
              </p>
              <div>
                <div className="mt-4 flex gap-2 justify-between ">
                  <div>
                    <div className="mx-auto border rounded overflow-hidden w-48 h-16 text-xs">
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

                    <Image
                      src="/image/competitions2.avif"
                      width={400}
                      height={220}
                      alt="competitions small"
                      className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                    {/* <p className="text-black font-semibold text-sm md:text-base">
                      WhalesBot AI Module 5/5s <br />
                      <span className="font-normal text-gray-600">
                        or AI Module 1s
                      </span>
                    </p> */}
                    <a
                      href="https://drive.google.com/drive/folders/1C_Z3-g5pJXMtnrOKAc0hb5ReThPADpRe?fbclid=IwY2xjawMrejpleHRuA2FlbQIxMABicmlkETE4TW9BTUp3Q3hkQkNYUmY1AR7-rov7QpQsEsg2o-tWbecFehTwn02yUrVgiOe_TdCiHWP2bnj1X5HBtdoViQ_aem_btvnLRXQBV7m-sjteDoayg"
                      download
                      className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm h-10 mt-40"
                    >
                      📥 Дүрэм татах
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <h1 className="text-7xl font-extrabold leading-tight mt-8 md:text-6xl lg:text-8xl md:mt-40">
              КИБЕР <br /> <span className="pl-2 md:pl-4">ХОТ</span>
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
          src="/image/forest.avif"
          alt="cyber city"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 md:gap-10 md:px-6 md:py-12 items-center">
          <div className="space-y-4 md:pt-24">
            <div className="bg-gray-100/70 p-4 shadow-lg backdrop-blur-sm transition-opacity duration-700 ease-in-out hover:opacity-90">
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Геометрийн ой” бол ENJOY AI -н хамгийн бяцхан судлаачдад
                зориулсан хөгжилтэй сорилт! Өнгөлөг дүрс, нууцлаг зүйлсээр
                дүүрэн ид шидийн ойгоор аялж явахдаа эртний балгастай тааралдаж,
                энгийн даалгавруудыг хамтдаа шийднэ.
              </p>
              <div className="mt-4 flex  items-center justify-evenly">
                <div>
                  <div className="mx-auto border rounded overflow-hidden w-48 h-16 text-xs">
                    <div className="grid grid-cols-2 text-white font-bold text-xs text-start">
                      <div className="p-1 border-r bg-purple-400">АНГИЛАЛ</div>
                      <div className="p-1 text-gray-700">5-6 нас, 7-8 нас</div>
                    </div>
                    <div className="grid grid-cols-2 bg-gray-100 text-xs">
                      <div className="p-1 border-r font-semibold bg-purple-400">
                        БАГ
                      </div>
                      <div className="p-1 text-gray-700">2 сурагч, 1 багш</div>
                    </div>
                  </div>
                  <Image
                    src="/image/forest2.avif"
                    width={300}
                    height={220}
                    alt="competitions small"
                    className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                  {/* <p className="text-black font-semibold text-sm md:text-base">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p> */}
                  <a
                    href="https://drive.google.com/drive/folders/1C_Z3-g5pJXMtnrOKAc0hb5ReThPADpRe?fbclid=IwY2xjawMrejpleHRuA2FlbQIxMABicmlkETE4TW9BTUp3Q3hkQkNYUmY1AR7-rov7QpQsEsg2o-tWbecFehTwn02yUrVgiOe_TdCiHWP2bnj1X5HBtdoViQ_aem_btvnLRXQBV7m-sjteDoayg"
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm w-32 h-10 mt-44"
                  >
                    📥 Дүрэм татах
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <h1 className="text-5xl font-extrabold leading-tight mt-8 md:text-6xl lg:text-8xl md:mt-40">
              ГЕОМЕТРИЙН <br /> <span className="pl-2 md:pl-4">ОЙ</span>
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
              ТЭНГЭРИЙН АДАЛ <br /> <span className="pl-2 md:pl-4">ЯВДАЛ</span>
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
                Skyline Adventures” бол ENJOY AI-ийн Дроны уралдаан юм. Сурагчид
                харааны хурд, программчлал, хиймэл оюун зэрэг олон төрлийн ур
                чадварыг цогцоор нь ашиглах шаардлагатай. Тэд дроноо ашиглан
                хөөрөх, нисэх хөдөлгөөн хийж, QR таних үйлдлүүдийг гүйцэтгэнэ.
                Энэ уралдаан нь сурагчдын төсөөллийг өдөөж, сансар судлал,
                агаарын технологид сонирхолтой болох суурийг тавина.
              </p>
              <div className="mt-4 flex  items-center">
                <div>
                  <div className="mx-auto border rounded overflow-hidden w-48 h-16 text-xs">
                    <div className="grid grid-cols-2 text-white font-bold text-xs text-start">
                      <div className="p-1 border-r bg-purple-400">АНГИЛАЛ</div>
                      <div className="p-1 text-gray-700">
                        8-12 нас, 13-17 нас
                      </div>
                    </div>
                    <div className="grid grid-cols-2 bg-gray-100 text-xs">
                      <div className="p-1 border-r font-semibold bg-purple-400">
                        БАГ
                      </div>
                      <div className="p-1 text-gray-700">1 сурагч, 1 багш</div>
                    </div>
                  </div>
                  <Image
                    src="/image/sky2.avif"
                    width={400}
                    height={220}
                    alt="competitions small"
                    className="rounded-lg w-full max-w-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-2">
                  {/* <p className="text-black font-semibold text-sm md:text-base">
                    WhalesBot AI Module 5/5s <br />
                    <span className="font-normal text-gray-600">
                      or AI Module 1s
                    </span>
                  </p> */}
                  <a
                    href="https://drive.google.com/drive/folders/1C_Z3-g5pJXMtnrOKAc0hb5ReThPADpRe?fbclid=IwY2xjawMrejpleHRuA2FlbQIxMABicmlkETE4TW9BTUp3Q3hkQkNYUmY1AR7-rov7QpQsEsg2o-tWbecFehTwn02yUrVgiOe_TdCiHWP2bnj1X5HBtdoViQ_aem_btvnLRXQBV7m-sjteDoayg"
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-600 to-green-600 text-white font-medium shadow-md hover:from-green-700 hover:to-green-700 transition-transform duration-300 hover:scale-105 rounded text-xs md:text-sm mt-48 h-10 ml-5"
                  >
                    📥 Дүрэм татах
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Season;
