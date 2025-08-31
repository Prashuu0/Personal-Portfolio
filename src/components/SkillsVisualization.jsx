import { motion } from 'framer-motion'

export default function SkillsVisualization() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TailwindCSS", level: 90, color: "from-cyan-500 to-teal-500" },
        { name: "HTML5/CSS3", level: 92, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
        { name: "Express.js", level: 70, color: "from-emerald-500 to-teal-500" },
        { name: "MongoDB", level: 65, color: "from-teal-500 to-cyan-500" },
        { name: "Firebase", level: 72, color: "from-orange-500 to-yellow-500" }
      ]
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "Python", level: 80, color: "from-blue-500 to-indigo-500" },
        { name: "Machine Learning", level: 70, color: "from-purple-500 to-pink-500" },
        { name: "Git/GitHub", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Data Analysis", level: 75, color: "from-green-500 to-blue-500" }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {category.category}
          </h3>
          
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 font-medium">{skill.name}</span>
                  <span className="text-fuchsia-400 font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                      ease: "easeOut"
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      animate={{ 
                        x: ["-100%", "100%"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
      
      {/* Additional Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Additional Skills & Technologies
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "TypeScript", "Redux", "Next.js", "PostgreSQL",
            "Docker", "AWS", "Figma", "Postman",
            "Jest", "Webpack", "REST APIs", "GraphQL"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + (index * 0.05) }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-neutral-800/50 border border-white/10 rounded-lg px-4 py-3 text-center hover:border-fuchsia-500/30 transition-all duration-300"
            >
              <span className="text-neutral-300 text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
