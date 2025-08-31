import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  // Array of your 12 actual images
  const images = [
    { src: "/1000179642-08.jpeg.jpg", alt: "Prashant Kumar - Professional Shot", title: "Professional Shot" },
    { src: "/1727603919052.jpeg", alt: "Prashant Kumar - Profile Photo", title: "Profile Photo" },
    { src: "/aktu zonal 2024-2.jpg", alt: "Prashant Kumar - AKTU Zonal 2024", title: "AKTU Zonal 2024" },
    { src: "/aktu zonal 2024-4.jpg", alt: "Prashant Kumar - AKTU Zonal Event", title: "AKTU Zonal Event" },
    { src: "/aktu zonal 2024.jpg", alt: "Prashant Kumar - AKTU Zonal Competition", title: "AKTU Zonal Competition" },
    { src: "/IMG_20241117_225423-01.jpeg.jpg", alt: "Prashant Kumar - November 2024", title: "November 2024" },
    { src: "/IMG_20250509_230336.jpg", alt: "Prashant Kumar - May 2025 Event", title: "May 2025 Event" },
    { src: "/IMG_20250509_230412.jpg", alt: "Prashant Kumar - May 2025 Activity", title: "May 2025 Activity" },
    { src: "/microsoft 4.jpg", alt: "Prashant Kumar - Microsoft Event", title: "Microsoft Event" },
    { src: "/microsoft 6.jpg", alt: "Prashant Kumar - Microsoft Competition", title: "Microsoft Competition" },
    { src: "/pras.jpg", alt: "Prashant Kumar - Personal Photo", title: "Personal Photo" },
    { src: "/Screenshot_2024-11-13-20-12-36-48_254d", alt: "Prashant Kumar - November 2024 Screenshot", title: "November 2024 Screenshot" }
  ]

  const openGallery = () => setIsOpen(true)
  const closeGallery = () => setIsOpen(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* Prashu Pics Button */}
      <motion.button
        onClick={openGallery}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <span className="mr-2">📸</span>
        Prashu Pics
      </motion.button>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-neutral-900 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                ✕
              </button>

              {/* Main Image Display */}
              <div className="relative">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-[60vh] object-cover"
                />
                
                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">{images[selectedImage].title}</h3>
                  <p className="text-neutral-300">Image {selectedImage + 1} of {images.length}</p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  ›
                </button>
              </div>

              {/* Thumbnail Grid */}
              <div className="p-6">
                <h4 className="text-white text-lg font-semibold mb-4 text-center">All Images</h4>
                <div className="grid grid-cols-6 gap-3">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-cyan-500 scale-110' 
                          : 'border-white/20 hover:border-cyan-500/50'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-16 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
