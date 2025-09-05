// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import Season from "@/components/ui/season";
// import Link from "next/link";

export default function HomePage() {
  return (
    // <div className="min-h-screen bg-white">
    //   {/* Header */}
    //   <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
    //     <div className="flex items-center space-x-8">
    //       <Link href="/" className="text-2xl font-bold text-purple-600">
    //         ENJOY AI
    //       </Link>
    //       <nav className="hidden md:flex items-center space-x-6">
    //         <Button
    //           variant="default"
    //           className="bg-purple-600 hover:bg-purple-700 text-white px-6"
    //         >
    //           Home
    //         </Button>
    //         <Link href="season" className="text-gray-700 hover:text-purple-600">
    //           2025 Season
    //         </Link>
    //         <Link href="about" className="text-gray-700 hover:text-purple-600">
    //           About Us
    //         </Link>
    //         <Link href="#" className="text-gray-700 hover:text-purple-600">
    //           Blog
    //         </Link>
    //       </nav>
    //     </div>
    //     <Button
    //       variant="outline"
    //       className="border-gray-400 text-gray-700 hover:bg-gray-50 bg-transparent"
    //     >
    //       REGISTER
    //     </Button>
    //   </header>

    //   {/* Hero Section */}
    //   <section className="relative min-h-[600px] bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 overflow-hidden">
    //     {/* Background Pattern */}
    //     <div className="absolute inset-0 opacity-20">
    //       <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl"></div>
    //       <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full blur-lg"></div>
    //       <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-400 rounded-full blur-2xl"></div>
    //     </div>

    //     {/* Flags and People Silhouettes */}
    //     <div className="absolute inset-0">
    //       <div className="absolute top-20 left-8 w-16 h-12 bg-red-500 opacity-80 transform rotate-12"></div>
    //       <div className="absolute top-32 left-24 w-16 h-12 bg-blue-500 opacity-80 transform -rotate-6"></div>
    //       <div className="absolute top-16 right-16 w-16 h-12 bg-green-500 opacity-80 transform rotate-45"></div>
    //       <div className="absolute bottom-32 right-32 w-16 h-12 bg-yellow-500 opacity-80 transform -rotate-12"></div>
    //     </div>

    //     <div className="relative z-10 container mx-auto px-6 py-20">
    //       <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div className="text-white space-y-6">
    //           <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-balance">
    //             ROBOTICS
    //             <br />
    //             <span className="text-white-300">COMPETITIONS</span>
    //             <br />
    //             <span className="text-white-300">FOR YOUTH</span>
    //           </h1>

    //           <div className="space-y-4 text-lg">
    //             <p className="text-cyan-200">
    //               ENJOY AI бол 3–22 насны хүүхэд, өсвөр үеийнхэнд
    //               <br />
    //               зориулсан олон улсын STEM болон роботикийн арга хэмжээ юм.
    //             </p>
    //             <p className="text-white">
    //               ENJOY AI-д бид залуусыг шинжлэх ухаан, инженерчлэл,
    //               <br />
    //               технологийн ур чадварыг хөгжүүлж, инновацид урамшуулан,
    //               <br />
    //               өөртөө итгэх итгэл, харилцаа,,
    //               <br />
    //               манлайлал зэрэг амьдралд хэрэгтэй цогц чадварыг төлөвшүүлэх
    //               сонирхолтой,
    //               <br />
    //               багшийн чиглүүлэгтэй хөтөлбөрүүдэд оролцуулдаг.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="relative">
    //           {/* <div className="text-right text-white">
    //             <div className="text-4xl font-bold mb-2">2024 GLOBAL FINAL</div>
    //             <div className="text-2xl text-cyan-300">全球总决赛</div>
    //           </div> */}

    //           {/* Robot/Competition Image Placeholder */}
    //           <div className="mt-8 relative">
    //             <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-80 flex items-center justify-center">
    //               <div className="text-white text-center">
    //                 <div className="text-6xl mb-4">🤖</div>
    //                 <div className="text-xl font-semibold">
    //                   Global Competition
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom Wave */}
    //     <div className="absolute bottom-0 left-0 right-0">
    //       <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
    //         <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
    //       </svg>
    //     </div>
    //   </section>

    //   {/* Featured Events Section */}
    //   <section className="py-20 bg-white">
    //     <div className="container mx-auto px-6">
    //       <h2 className="text-5xl font-bold text-center text-purple-600 mb-16">
    //         FEATURED EVENTS
    //       </h2>

    //       <div className="grid md:grid-cols-3 gap-8">
    //         {/* Event 1 */}
    //         <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    //           <div className="relative h-64 bg-gradient-to-br from-yellow-400 to-orange-500">
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <div className="text-white text-center">
    //                 <div className="text-4xl mb-2">👧</div>
    //                 <div className="text-lg font-semibold">
    //                   European Championship
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
    //               ENJOY AI 2025 European
    //             </div>
    //           </div>
    //           <CardContent className="p-6 text-center">
    //             <div className="text-gray-600 mb-2">26.07.2025</div>
    //             <div className="font-semibold text-gray-800">
    //               Athens, Greece
    //             </div>
    //           </CardContent>
    //         </Card>

    //         {/* Event 2 */}
    //         <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    //           <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700">
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <div className="text-white text-center">
    //                 <div className="text-4xl mb-2">🏆</div>
    //                 <div className="text-lg font-semibold">Asian Open</div>
    //               </div>
    //             </div>
    //             <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
    //               ENJOY AI 2025 Asian Open
    //             </div>
    //           </div>
    //           <CardContent className="p-6 text-center">
    //             <div className="text-gray-600 mb-2">03.08.2025</div>
    //             <div className="font-semibold text-gray-800">
    //               Kuala Lumpur, Malaysia
    //             </div>
    //           </CardContent>
    //         </Card>

    //         {/* Event 3 */}
    //         <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    //           <div className="relative h-64 bg-gradient-to-br from-green-500 to-teal-600">
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <div className="text-white text-center">
    //                 <div className="text-4xl mb-2">🌍</div>
    //                 <div className="text-lg font-semibold">African Open</div>
    //               </div>
    //             </div>
    //             <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
    //               ENJOY AI 2025 African Open
    //             </div>
    //           </div>
    //           <CardContent className="p-6 text-center">
    //             <div className="text-gray-600 mb-2">27.09.2025</div>
    //             <div className="font-semibold text-gray-800">Accra, Ghana</div>
    //           </CardContent>
    //         </Card>
    //       </div>

    //       {/* Contact Button */}
    //       <div className="text-center mt-12">
    //         <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">
    //           Contact Us →
    //         </Button>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <Season />
  );
}
