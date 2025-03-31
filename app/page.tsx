'use client'

import Link from "next/link"
import MainSection from "@/components/MainSection"
import FeaturedWorkSection from "@/components/FeaturedWorkSection"
import RunningProjectsSection from "@/components/RunningProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import MobileMenu from "@/components/MobileMenu"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-medium">
            BimaDev.
          </Link>
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <Link href="#work" className="hover:text-gray-300">
              Work
            </Link>
            <Link href="#about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          <button 
            className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <MainSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </div>
  )
}

