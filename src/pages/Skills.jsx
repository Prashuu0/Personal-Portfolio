import { motion } from 'framer-motion'
import Background from '../components/Background.jsx'

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90, icon: "☕" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "HTML/CSS", level: 90, icon: "🌐" },
        { name: "SQL", level: 85, icon: "🗄️" },
        { name: "C", level: 75, icon: "🔧" }
      ]
    },
    {
      category: "Frontend Technologies",
      items: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "TailwindCSS", level: 85, icon: "🎨" },
        { name: "Bootstrap", level: 80, icon: "🎯" },
        { name: "Framer Motion", level: 85, icon: "✨" }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "🚀" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "Firebase", level: 75, icon: "🔥" }
      ]
    },
    {
      category: "Tools & IDEs",
      items: [
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "GitHub", level: 85, icon: "📚" },
        { name: "Android Studio", level: 70, icon: "📱" },
        { name: "IntelliJ", level: 75, icon: "🆔" },
        { name: "PyCharm", level: 70, icon: "🐍" }
      ]
    }
  ]

  const certifications = [
    {
      name: "Full Stack Development",
      issuer: "Certification",
      icon: "🎯"
    },
    {
      name: "MERN Stack",
      issuer: "Certification",
      icon: "⚡"
    },
    {
      name: "Project Management",
      issuer: "Certification",
      icon: "📊"
    },
    {
      name: "HackerRank Software Engineer Intern",
      issuer: "HackerRank",
      icon: "🏆"
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
              My Skills
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
            >
              Technical Expertise & Proficiency
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-300 text-lg max-w-2xl mx-auto"
            >
              Continuously learning and enhancing my skills through practical projects, hackathons, and real-world applications.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + groupIndex * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-3">
                  <span className="text-2xl">{skillGroup.category === "Programming Languages" ? "💻" : 
                    skillGroup.category === "Frontend Technologies" ? "🎨" :
                    skillGroup.category === "Backend & Database" ? "⚙️" : "🛠️"}</span>
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-neutral-300 flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-fuchsia-400 text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{cert.name}</h4>
                  <p className="text-neutral-400 text-sm">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Additional Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-cyan-400 text-4xl mb-3">🤝</div>
                <h4 className="font-semibold text-white mb-2">Leadership</h4>
                <p className="text-neutral-400 text-sm">Lead Designer of Qubitx Hackathon</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-fuchsia-400 text-4xl mb-3">🧠</div>
                <h4 className="font-semibold text-white mb-2">Problem Solving</h4>
                <p className="text-neutral-400 text-sm">Hackathon Finalist & Tech Fest Winner</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-indigo-400 text-4xl mb-3">📱</div>
                <h4 className="font-semibold text-white mb-2">Mobile Development</h4>
                <p className="text-neutral-400 text-sm">React Native & Android Development</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
