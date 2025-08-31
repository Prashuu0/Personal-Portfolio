import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160])

  // Text reveal animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-24 min-h-screen flex items-center">
      {/* Enhanced background with more Glint-like effects */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:24px_24px]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" 
        />
        {/* Additional floating elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-fuchsia-400/30 rounded-full blur-sm"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-cyan-400/20 rounded-full blur-sm"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={textVariants}
            className="text-sm font-medium text-fuchsia-400 mb-4 tracking-wider uppercase"
          >
            Welcome to Prashant Kumar's Portfolio
          </motion.div>
          
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent leading-tight"
          >
            FAILURE IS THE CONDIMENT THAT GIVES SUCCESS
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            className="mt-6 text-neutral-300 text-lg leading-relaxed max-w-lg"
          >
            Computer Science Engineering student passionate about Full Stack Development, creating modern web applications, and solving real-world problems through innovative technology solutions.
          </motion.p>
          
          <motion.div
            variants={textVariants}
            className="mt-8 flex gap-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Getting Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(147, 51, 234)",
                backgroundColor: "rgba(147, 51, 234, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-md border-2 border-fuchsia-500 text-fuchsia-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-fuchsia-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div style={{ y: y1 }} className="absolute -top-6 -left-6 h-24 w-24 rounded-xl bg-fuchsia-500/25 blur-xl" />
          <motion.div style={{ y: y2 }} className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-cyan-400/25 blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              rotateY: 5
            }}
            className="group relative mx-auto w-64 md:w-80"
          >
            {/* Enhanced gradient frame */}
            <motion.div 
              animate={{ 
                background: [
                  "linear-gradient(45deg, #a855f7, #3b82f6, #06b6d4)",
                  "linear-gradient(45deg, #06b6d4, #a855f7, #3b82f6)",
                  "linear-gradient(45deg, #3b82f6, #06b6d4, #a855f7)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="rounded-[1.25rem] p-[2px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]"
            >
              <div className="relative overflow-hidden rounded-[1.15rem] bg-neutral-950">
                {/* Enhanced glow overlay */}
                <motion.div 
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="pointer-events-none absolute -inset-8 bg-[radial-gradient(closest-side,rgba(147,51,234,0.25),transparent),radial-gradient(closest-side,rgba(34,211,238,0.22),transparent)] blur-2xl" 
                />
                
                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  className="relative z-10 aspect-square w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced bottom label */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute left-3 bottom-3 rounded-md bg-black/60 px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/20 backdrop-blur border border-white/10"
                >
                  Prashant Kumar
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


