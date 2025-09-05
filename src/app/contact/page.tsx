import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-8">
          {/* <Image href= className="text-2xl font-bold text-purple-600">
            ENJOY AI
          </L> */}

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="default"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            >
              Home
            </Button>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              2025 Season
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Blog
            </Link>
          </nav>
        </div>
        <Button
          variant="outline"
          className="border-gray-400 text-gray-700 hover:bg-gray-50 bg-transparent"
        >
          REGISTER
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-400 rounded-full blur-2xl"></div>
        </div>

        {/* Flags and People Silhouettes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-8 w-16 h-12 bg-red-500 opacity-80 transform rotate-12"></div>
          <div className="absolute top-32 left-24 w-16 h-12 bg-blue-500 opacity-80 transform -rotate-6"></div>
          <div className="absolute top-16 right-16 w-16 h-12 bg-green-500 opacity-80 transform rotate-45"></div>
          <div className="absolute bottom-32 right-32 w-16 h-12 bg-yellow-500 opacity-80 transform -rotate-12"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-balance">
                ROBOTICS
                <br />
                <span className="text-cyan-300">COMPETITIONS</span>
                <br />
                <span className="text-pink-300">FOR YOUTH</span>
              </h1>

              <div className="space-y-4 text-lg">
                <p className="text-cyan-200">
                  ENJOY AI is an international STEM and robotics
                  <br />
                  event for kids and teenagers from 3 to 22 years old.
                </p>
                <p className="text-white">
                  At ENJOY AI, we engage young people in exciting
                  <br />
                  mentor-based programs that build science, engineering,
                  <br />
                  and technology skills, that inspire innovation, and that
                  <br />
                  foster well-rounded life capabilities including self-
                  <br />
                  confidence, communication, and leadership.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-right text-white">
                <div className="text-4xl font-bold mb-2">2024 GLOBAL FINAL</div>
                <div className="text-2xl text-cyan-300">全球总决赛</div>
              </div>

              {/* Robot/Competition Image Placeholder */}
              <div className="mt-8 relative">
                <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-xl font-semibold">
                      Global Competition
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-purple-600 mb-16">
            FEATURED EVENTS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-yellow-400 to-orange-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">👧</div>
                    <div className="text-lg font-semibold">
                      European Championship
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
                  ENJOY AI 2025 European
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-gray-600 mb-2">26.07.2025</div>
                <div className="font-semibold text-gray-800">
                  Athens, Greece
                </div>
              </CardContent>
            </Card>

            {/* Event 2 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <div className="text-lg font-semibold">Asian Open</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
                  ENJOY AI 2025 Asian Open
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-gray-600 mb-2">03.08.2025</div>
                <div className="font-semibold text-gray-800">
                  Kuala Lumpur, Malaysia
                </div>
              </CardContent>
            </Card>

            {/* Event 3 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-green-500 to-teal-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🌍</div>
                    <div className="text-lg font-semibold">African Open</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
                  ENJOY AI 2025 African Open
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-gray-600 mb-2">27.09.2025</div>
                <div className="font-semibold text-gray-800">Accra, Ghana</div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">
              Contact Us →
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 overflow-hidden">
        {/* Top Wave Pattern */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-20 fill-white transform rotate-180"
          >
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 mt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title and Illustration */}
            <div className="text-white space-y-8">
              <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
                CONTACT
                <br />
                US
              </h2>

              {/* Robot Illustration Placeholder */}
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hLwoumT84wCZu3ofcvkh1n2Z7lfueH.png"
                  alt="Student working with robot illustration"
                  width={200}
                  height={200}
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Get in touch
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input className="w-full" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input className="w-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input type="email" className="w-full" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Topic:
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="join" />
                      <label htmlFor="join" className="text-sm text-gray-700">
                        Join the competition
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="organize" />
                      <label
                        htmlFor="organize"
                        className="text-sm text-gray-700"
                      >
                        Organize the competition
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="products" />
                      <label
                        htmlFor="products"
                        className="text-sm text-gray-700"
                      >
                        Products inquiry
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sponsor" />
                      <label
                        htmlFor="sponsor"
                        className="text-sm text-gray-700"
                      >
                        Become a sponsor
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="other" />
                      <label htmlFor="other" className="text-sm text-gray-700">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Write a message
                  </label>
                  <Textarea
                    className="w-full h-32 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg text-lg font-medium"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
