'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error ke sistem analitik
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="relative">
          <h1 className="text-9xl font-bold text-white/10">500</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-medium">Oops!</span>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">Terjadi Kesalahan</h2>
          <p className="text-gray-400">
            Maaf, telah terjadi kesalahan yang tidak terduga. Tim kami sedang menanganinya.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Coba Lagi
          </button>
          <Link 
            href="/" 
            className="bg-white text-black px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
} 