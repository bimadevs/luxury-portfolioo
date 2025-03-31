'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectSlider from "./ProjectSlider"

const projectImages = [
  { src: "/bimsui-preview.png", alt: "Ui Component Library" },
  { src: "/bimsc-preview.png", alt: "Source Code Collection" },
  { src: "/logo-color.png", alt: "BimaDev Logo" },
]

export default function MainSection() {
  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Project Images Grid/Slider */}
        <div id="picture-slider" className="mb-8 sm:mb-16">
          {/* Mobile Slider */}
          <div className="sm:hidden">
            <ProjectSlider images={projectImages} />
          </div>

          {/* Desktop/Tablet Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative bg-gray-900">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <div className="text-sm mb-4">(HELLO, I'M BimaDev)</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            FULL <span className="font-serif italic font-normal">STACK</span>
            <br className="hidden sm:block" /> DEVELOPER
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-gray-400">
              Transforming ideas into powerful digital solutions. Specializing in web design and development
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Let's collaborate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16 sm:mb-32">
          <p className="max-w-md mb-8 sm:mb-16">
          With many years of experience and website development, making open source projects
          </p>

          <div className="space-y-4 sm:space-y-6">
            {["BimsUI", "BimSC"].map((service, index) => (
              <div key={index} className="flex justify-between items-center py-4 sm:py-6 border-t border-gray-800">
                <h3 className="text-lg sm:text-xl">{service}</h3>
                <Link href="#featured-work" className="inline-flex items-center gap-2 text-sm hover:text-gray-300">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition Image */}
        <div className="aspect-[16/9] relative bg-gray-900 mb-16 sm:mb-32">
          <Image src="/logo-color.png" alt="BimaDev Logo" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

