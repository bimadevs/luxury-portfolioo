'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectSliderProps {
  images: ProjectImage[]
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  return (
    <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-[4/3] relative bg-gray-900">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
} 