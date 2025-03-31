export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-t-2 border-white/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border-t-2 border-white/20 rounded-full animate-spin-slower"></div>
        </div>
        <p className="text-gray-400 animate-pulse">Memuat...</p>
      </div>
    </div>
  )
} 