'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center">
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-8 text-2xl">
          <Link href="#work" onClick={onClose} className="hover:text-gray-300">
            Work
          </Link>
          <Link href="#about" onClick={onClose} className="hover:text-gray-300">
            About
          </Link>
          <Link href="#contact" onClick={onClose} className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
} 