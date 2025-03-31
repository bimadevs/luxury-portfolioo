'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  if (!isMounted) {
    return null // atau loading state
  }

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))] opacity-20"
        style={{
          transform: `perspective(500px) rotateX(${
            (mousePosition.y - window.innerHeight / 2) / 50
          }deg) rotateY(${(mousePosition.x - window.innerWidth / 2) / 50}deg)`,
        }}
      >
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-700/50"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-white mb-8 relative"
        >
          <span className="absolute -inset-2 text-red-500 opacity-50 animate-[glitch-1_5s_infinite]">404</span>
          <span className="absolute -inset-2 text-blue-500 opacity-50 animate-[glitch-2_5s_infinite]">404</span>
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl mb-8 text-center"
        >
          Sepertinya Anda tersesat di dunia digital.
          <br />
          Mari kembali ke jalan yang benar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform inline-block"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
    </div>
  )
} 