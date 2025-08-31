import { motion } from 'framer-motion'
import Background from '../components/Background.jsx'

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "thakurprashant881@gmail.com",
      link: "mailto:thakurprashant881@gmail.com",
      color: "fuchsia"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 75055 44800",
      link: "tel:+917505544800",
      color: "cyan"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "prashant-kumar-b8aa23276",
      link: "https://www.linkedin.com/in/prashant-kumar-b8aa23276/",
      color: "blue"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "Prashuu0",
      link: "https://github.com/Prashuu0",
      color: "indigo"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prashant-kumar-b8aa23276/",
      icon: "💼",
      color: "blue"
    },
    {
      name: "GitHub",
      url: "https://github.com/Prashuu0",
      icon: "🐙",
      color: "gray"
    },
    {
      name: "Unstop",
      url: "https://unstop.com/u/prashkum4329",
      icon: "🏆",
      color: "purple"
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
              Get In Touch
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
            >
              Let's Connect & Collaborate
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-300 text-lg max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-12 h-12 bg-${contact.color}-500/20 rounded-full flex items-center justify-center group-hover:bg-${contact.color}-500/30 transition-colors duration-300`}>
                      <span className="text-2xl">{contact.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                      <a
                        href={contact.link}
                        target={contact.title === "Email" || contact.title === "Phone" ? "_self" : "_blank"}
                        rel={contact.title === "Email" || contact.title === "Phone" ? "" : "noopener noreferrer"}
                        className={`text-${contact.color}-400 hover:text-${contact.color}-300 transition-colors duration-300`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12"
              >
                <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-${social.color}-500/20 rounded-full flex items-center justify-center hover:bg-${social.color}-500/30 transition-all duration-300 border border-${social.color}-500/30`}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-fuchsia-500 transition-colors duration-300"
                      placeholder="Your first name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-fuchsia-500 transition-colors duration-300"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-fuchsia-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-fuchsia-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-fuchsia-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                I'm passionate about collaborating on innovative projects, especially in web development, AI/ML, and mobile applications. Let's discuss how we can work together!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/prashant-kumar-b8aa23276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300"
                >
                  Connect on LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/Prashuu0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-md transition-all duration-300"
                >
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
