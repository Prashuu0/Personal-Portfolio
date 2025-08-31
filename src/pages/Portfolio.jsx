import { motion } from 'framer-motion'
import Background from '../components/Background.jsx'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "VidyaSetu: AI-Powered Student Assistance Chatbot",
      description: "An AI-driven education platform streamlining student, admin, and government interactions with VR-based campus tours and dynamic search for courses and scholarships.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Gemini AI"],
      image: "/project-images/vidyasetu-education.svg",
      github: "https://github.com/prashuu0/vidyasetu-ai",
      live: "https://vidyasetu-ai.vercel.app",
      featured: true,
      icon: "🎓"
    },
    {
      id: 2,
      title: "QuickAid: AI & AR-Powered First Aid Companion",
      description: "A mobile app offering real-time, offline-capable first-aid support using AI and AR for high-risk zones and rural areas.",
      technologies: ["React Native", "Firebase", "SQLite", "Dialogflow", "AR-Core/AR-Kit"],
      image: "/project-images/quicaid-medical.svg",
      github: "https://github.com/prashuu0/quicaid-app",
      live: "https://quicaid-app.vercel.app",
      featured: true,
      icon: "🚑"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A modern portfolio website to showcase personal projects, skills, and achievements with interactive design and smooth animations.",
      technologies: ["React.js", "TailwindCSS", "Framer Motion", "EmailJS"],
      image: "/project-images/portfolio-website.svg",
      github: "https://github.com/prashuu0/personal-portfolio",
      live: "https://prashant-kumar-portfolio.vercel.app",
      featured: false,
      icon: "💼"
    },
    {
      id: 4,
      title: "E-Commerce Product Catalog",
      description: "A frontend e-commerce app that allows users to browse, search, and filter products with an interactive UI and Redux state management.",
      technologies: ["React.js", "Redux", "TailwindCSS", "Fake Store API"],
      image: "/project-images/ecommerce.svg",
      github: "https://github.com/prashuu0/ecommerce-catalog",
      live: "https://ecommerce-catalog-prashant.vercel.app",
      featured: false,
      icon: "🛒"
    },
    {
      id: 5,
      title: "Currency Converter",
      description: "A sleek and intuitive web app for real-time currency conversion using live exchange rates with modern UI design.",
      technologies: ["React", "API Integration", "CSS3"],
      image: "/project-images/currency-converter.svg",
      github: "https://github.com/prashuu0/currency-converter",
      live: "https://currency-converter-prashant.vercel.app",
      featured: false,
      icon: "💱"
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      description: "Built a personalized movie recommender using collaborative filtering on curated datasets with high accuracy in personalized suggestions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      image: "/project-images/movie-recommendation.svg",
      github: "https://github.com/prashuu0/movie-recommendation-ai",
      live: "https://movie-recommendation-prashant.vercel.app",
      featured: false,
      icon: "🎬"
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="relative">
      <Background />
      <section className="relative overflow-hidden pt-24 min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fuchsia-400 font-medium mb-2 tracking-wider uppercase"
            >
              My Portfolio
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
            >
              Featured Projects & Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-300 text-lg max-w-2xl mx-auto"
            >
              A collection of my best work showcasing skills in Full Stack Development, AI/ML, and modern web technologies.
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-fuchsia-500/30 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-4xl">{project.icon}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-md transition-colors duration-300"
                        >
                          GitHub
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm rounded-md transition-colors duration-300"
                        >
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-2xl">{project.icon}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-xs mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-neutral-700 text-neutral-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-white text-xs rounded-md transition-colors duration-300"
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs rounded-md transition-colors duration-300"
                      >
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together!
              </h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium rounded-md transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
