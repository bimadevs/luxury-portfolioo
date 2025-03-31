'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {[...Array(144)].map((_, i) => (
          <div
            key={i}
            className="border border-white/20"
            style={{
              transform: `rotate(${
                Math.atan2(
                  mousePosition.y - (i % 12) * 100,
                  mousePosition.x - Math.floor(i / 12) * 100
                ) * (180 / Math.PI)
              }deg)`,
              transition: 'transform 0.5s ease-out',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Glitch Effect */}
          <div className="relative mb-8">
            <h1 className="text-[12rem] font-bold leading-none tracking-tighter">
              <span className="relative inline-block">
                <span className="absolute -inset-2 animate-glitch-1 text-red-500 opacity-70 blur-[2px]">404</span>
                <span className="absolute -inset-2 animate-glitch-2 text-blue-500 opacity-70 blur-[2px]">404</span>
                <span className="relative">404</span>
              </span>
            </h1>
          </div>

          {/* Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-3xl font-light">Oops! Sepertinya Anda Tersesat</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Halaman yang Anda cari mungkin telah dipindahkan ke dimensi lain. 
              Mari kembali ke dunia yang kita kenal.
            </p>
          </motion.div>

          {/* Interactive Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/10 px-8 py-4 transition-all duration-300 hover:bg-white/20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1">
                Kembali ke Beranda
              </span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  )
} 