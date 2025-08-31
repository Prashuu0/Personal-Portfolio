import { motion } from 'framer-motion'
import Background from '../components/Background.jsx'

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React.js, Node.js, Express.js, and MongoDB. Building scalable and responsive web solutions.",
      features: [
        "Frontend Development with React.js",
        "Backend APIs with Node.js & Express",
        "Database Design & Management",
        "RESTful API Development",
        "Authentication & Authorization",
        "Deployment & Hosting"
      ],
      color: "fuchsia"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive, and user-friendly interfaces using TailwindCSS, modern design principles, and responsive design techniques.",
      features: [
        "Responsive Web Design",
        "Modern UI Components",
        "User Experience Optimization",
        "Interactive Animations",
        "Cross-browser Compatibility",
        "Mobile-first Approach"
      ],
      color: "cyan"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile application development using React Native, with focus on performance, user experience, and native functionality.",
      features: [
        "React Native Development",
        "Cross-platform Solutions",
        "Native API Integration",
        "Performance Optimization",
        "App Store Deployment",
        "Offline Functionality"
      ],
      color: "indigo"
    },
    {
      icon: "🤖",
      title: "AI/ML Solutions",
      description: "Implementing artificial intelligence and machine learning solutions for data analysis, recommendation systems, and intelligent automation.",
      features: [
        "Machine Learning Models",
        "Data Analysis & Processing",
        "Recommendation Systems",
        "Natural Language Processing",
        "Predictive Analytics",
        "AI Integration"
      ],
      color: "emerald"
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency, and user experience through modern development practices and optimization techniques.",
      features: [
        "Code Optimization",
        "Bundle Size Reduction",
        "Lazy Loading",
        "Caching Strategies",
        "Performance Monitoring",
        "SEO Optimization"
      ],
      color: "amber"
    },
    {
      icon: "🔧",
      title: "Technical Consulting",
      description: "Providing technical guidance, architecture recommendations, and best practices for modern web development projects.",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review & Quality",
        "Best Practices Guidance",
        "Project Planning",
        "Technical Documentation"
      ],
      color: "rose"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and project scope to create a comprehensive development plan.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
      icon: "✏️"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building the application with clean, maintainable code and thorough testing at every stage.",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "Deploying the application to production and ensuring everything works smoothly.",
      icon: "🚀"
    }
  ]

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
              My Services
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
            >
              What I Can Do For You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-300 text-lg max-w-2xl mx-auto"
            >
              From concept to deployment, I provide comprehensive development services to bring your ideas to life with modern technology and best practices.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-${service.color}-500/30 transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-${service.color}-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-500/30 transition-colors duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-fuchsia-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-400">
                      <span className={`w-2 h-2 bg-${service.color}-500 rounded-full`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              My Development Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-fuchsia-500/30 group-hover:border-fuchsia-500/50 transition-colors duration-300">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Me */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Me
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-fuchsia-500/30 transition-colors duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Problem Solver</h4>
                <p className="text-neutral-400 text-sm">
                  Proven track record in hackathons and tech fests, demonstrating strong analytical and problem-solving skills.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Modern Technology</h4>
                <p className="text-neutral-400 text-sm">
                  Using cutting-edge technologies like React 19, TailwindCSS, and Framer Motion for the best user experience.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Collaborative</h4>
                <p className="text-neutral-400 text-sm">
                  Experience in team environments, hackathons, and leadership roles ensuring smooth project delivery.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Let's discuss your project requirements and create something amazing together. I'm here to help bring your vision to life!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium rounded-md transition-all duration-300 shadow-lg"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 border-2 border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white font-medium rounded-md transition-all duration-300"
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
