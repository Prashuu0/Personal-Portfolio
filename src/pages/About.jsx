import { motion } from 'framer-motion'
import Background from '../components/Background.jsx'
import ImageGallery from '../components/ImageGallery.jsx'

export default function About() {
  return (
    <div className="relative">
      <Background />
      <section className="relative overflow-hidden pt-24 min-h-screen flex items-center">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fuchsia-400 font-medium mb-2 tracking-wider uppercase"
            >
              About Me
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
            >
              FAILURE IS THE CONDIMENT THAT GIVES SUCCESS
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Prashant Kumar
              </h3>
              <p className="text-neutral-300 leading-relaxed text-lg mb-6">
                I am a Computer Science Engineering student at G.L. Bajaj Group of Institutions, Mathura (Batch 2026) with a strong foundation in Full Stack Development and a passion for building impactful digital solutions.
              </p>
              <p className="text-neutral-300 leading-relaxed text-lg mb-6">
                Skilled in React.js, TailwindCSS, Java, JavaScript, and SQL, I enjoy creating modern, responsive, and user-friendly applications. My journey includes developing projects like Personal Portfolio Website, E-Commerce Product Catalog, and Currency Converter.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <motion.a 
                  href="https://www.linkedin.com/in/prashant-kumar-b8aa23276/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Connect on LinkedIn
                </motion.a>
                
                {/* Prashu Pics Button */}
                <ImageGallery />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold mb-4 text-white">My Journey</h4>
                <div className="space-y-6">
                  <motion.div 
                    className="flex gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-fuchsia-400 font-bold">01</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Full Stack Development</h5>
                      <p className="text-neutral-400 text-sm">React.js, Node.js, MongoDB, Express.js</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400 font-bold">02</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">UI/UX Design</h5>
                      <p className="text-neutral-400 text-sm">TailwindCSS, Responsive Design, Modern UI</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-400 font-bold">03</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Problem Solving</h5>
                      <p className="text-neutral-400 text-sm">Hackathons, Tech Fests, Leadership</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Academic Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-fuchsia-400 text-4xl mb-3">🥉</div>
                <h4 className="font-semibold text-white mb-2">Bronze Medal - AKTU Fest</h4>
                <p className="text-neutral-400 text-sm">VidyaSetu: AI + VR-based project</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-cyan-400 text-4xl mb-3">🥈</div>
                <h4 className="font-semibold text-white mb-2">2nd Place - Tech Ideathon</h4>
                <p className="text-neutral-400 text-sm">Microsoft Office, Noida & GL Bajaj</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-indigo-400 text-4xl mb-3">🏆</div>
                <h4 className="font-semibold text-white mb-2">Top 10 Finalist</h4>
                <p className="text-neutral-400 text-sm">MNIT 24hr & DTU 36hr Hackathons</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
