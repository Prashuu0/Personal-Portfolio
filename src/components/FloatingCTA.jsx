import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      setIsVisible(scrolled > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownload = () => {
    // Create a link to download resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You can add your actual resume file
    link.download = 'Prashant_Kumar_Resume.pdf'
    link.click()
  }

  const handleContact = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 100 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse" />
        
        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:shadow-fuchsia-500/25 transition-all duration-300"
          onClick={handleContact}
        >
          <span className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <span>Let's Talk!</span>
          </span>
        </motion.button>

        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
        >
          ⭐
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
        >
          🚀
        </motion.div>

        {/* Download Resume Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="absolute -left-32 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
        >
          📄 Resume
        </motion.button>
      </div>
    </motion.div>
  )
}


