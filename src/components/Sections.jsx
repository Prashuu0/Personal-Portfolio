// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Socials from './Socials.jsx'

export function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function About() {
  return (
    <Section id="about" title="About us">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            FAILURE IS THE CONDIMENT THAT GIVES SUCCESS
          </h3>
          <p className="text-neutral-300 leading-relaxed text-lg mb-6">
            Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            download cv
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-4 text-white">My Career</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-fuchsia-400 font-bold">01</span>
                </div>
                <div>
                  <h5 className="font-semibold text-white">UI/UX Design</h5>
                  <p className="text-neutral-400 text-sm">Creating beautiful and functional user experiences</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">02</span>
                </div>
                <div>
                  <h5 className="font-semibold text-white">Web Development</h5>
                  <p className="text-neutral-400 text-sm">Building modern and responsive web applications</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-400 font-bold">03</span>
                </div>
                <div>
                  <h5 className="font-semibold text-white">Digital Marketing</h5>
                  <p className="text-neutral-400 text-sm">Strategic marketing solutions for growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  const skills = [
    { name: 'WEB DEVELOPMENT', percentage: 65 },
    { name: 'DIGITAL MARKETING', percentage: 72 },
    { name: 'GRAPHICS DESIGN', percentage: 82 },
    { name: 'LEAD GENERATION', percentage: 90 }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    })
  }
  
  return (
    <Section id="skills" title="EXPERIENCE AND SKILL">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            variants={skillVariants}
            className="text-neutral-300 leading-relaxed text-lg mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident iure, dolor, nulla eaque delectus, repudiandae commodi.
          </motion.p>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                variants={skillVariants}
                className="group space-y-2"
              >
                <div className="flex justify-between items-center">
                  <motion.span 
                    whileHover={{ color: "#a855f7" }}
                    className="font-medium text-white group-hover:text-fuchsia-400 transition-colors duration-300"
                  >
                    {skill.name}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="text-fuchsia-400 font-bold"
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <div className="relative w-full bg-neutral-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    custom={skill.percentage}
                    variants={progressVariants}
                    className="h-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ 
                        x: ["-100%", "100%"],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5 + index * 0.2
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div 
            variants={skillVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-fuchsia-500/30 transition-all duration-300 overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center group-hover:bg-fuchsia-500/30 transition-colors duration-300"
                >
                  <span className="text-fuchsia-400 font-bold">2011-2014</span>
                </motion.div>
                <div>
                  <h5 className="font-semibold text-white group-hover:text-fuchsia-400 transition-colors duration-300">UI DESIGNER</h5>
                  <p className="text-fuchsia-400 text-sm">GOOGLE CORPORATION</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm">
                All you need to do, is your best work together one package works among seamlessly in computer daily.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={skillVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300"
                >
                  <span className="text-cyan-400 font-bold">2014-2017</span>
                </motion.div>
                <div>
                  <h5 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">UI DESIGNER</h5>
                  <p className="text-cyan-400 text-sm">APPLE PRODUCT CO.</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm">
                All you need to do, is your best work together one package works among seamlessly in computer daily.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={skillVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors duration-300"
                >
                  <span className="text-indigo-400 font-bold">2017-2020</span>
                </motion.div>
                <div>
                  <h5 className="font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">LEAD DESIGNER</h5>
                  <p className="text-indigo-400 text-sm">MUSIC INDUSTRY</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm">
                All you need to do, is your best work together one package works among seamlessly in computer daily.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export function Projects() {
  const projects = [
    { 
      title: 'Simon Jensen', 
      category: 'Web Design',
      image: '/profile.jpg',
      desc: 'Modern web design with beautiful animations and user experience.'
    },
    { 
      title: 'Simon Jensen', 
      category: 'UI/UX Design',
      image: '/profile.jpg',
      desc: 'Creative UI/UX solutions for mobile and web applications.'
    },
    { 
      title: 'Simon Jensen', 
      category: 'Digital Marketing',
      image: '/profile.jpg',
      desc: 'Strategic digital marketing campaigns that drive results.'
    },
    { 
      title: 'Simon Jensen', 
      category: 'Brand Identity',
      image: '/profile.jpg',
      desc: 'Complete brand identity design and development.'
    },
    { 
      title: 'Simon Jensen', 
      category: 'E-commerce',
      image: '/profile.jpg',
      desc: 'Full-stack e-commerce solutions with modern technology.'
    },
    { 
      title: 'Simon Jensen', 
      category: 'Mobile App',
      image: '/profile.jpg',
      desc: 'Cross-platform mobile applications with native performance.'
    }
  ]
  
  return (
    <Section id="projects" title="LASTET WORKING PROJECT">
      <p className="text-neutral-300 leading-relaxed text-lg mb-8 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident iure, dolor, nulla eaque delectus, repudiandae commodi.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-xl shadow-black/40 hover:border-fuchsia-500/50 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <p className="text-fuchsia-400 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-neutral-300 text-sm">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Let’s build something great</h3>
            <p className="text-neutral-400 mt-1">Email me at <a className="text-fuchsia-300 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
          </div>
          <Socials />
        </div>
      </div>
    </Section>
  )
}


