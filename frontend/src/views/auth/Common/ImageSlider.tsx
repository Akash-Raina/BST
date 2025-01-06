import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import jonathan from "../../assets/cover1.jpg"
import rony from "../../assets/cover2.jpg"
import aaru from "../../assets/cover3.jpg"
import owais from "../../assets/cover4.png"

const images = [
  {
    url: jonathan,
    caption: 'Jonathan'
  },
  {
    url: rony,
    caption: 'Rony'
  },
  {
    url: aaru,
    caption: 'Aaru'
  },
  {
    url: owais,
    caption: 'Owais'
  }
]

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-600/80 mix-blend-multiply" />
      
      {/* Image */}
      <div
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <div className="absolute flex h-full w-[400%]">
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-1/4">
              <img
                src={image.url}
                alt={image.caption}
                className="h-full w-full object-cover object-top bg-[#F8EDF1]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-6 text-white">
                <h3 className="text-xl font-bold">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

