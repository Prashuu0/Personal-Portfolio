import { motion } from 'framer-motion'

export function Services() {
  const items = [
    { 
      title: 'DESIGN PRINCIPLES', 
      desc: 'Need a project completed by an expert? Let\'s go! Access a human resources consultant to answer questions.',
      icon: '🎨',
      color: 'fuchsia'
    },
    { 
      title: 'UNIQUE VALUES', 
      desc: 'Need a project completed by an expert? Let\'s go! Access a human resources consultant to answer questions.',
      icon: '💎',
      color: 'cyan'
    },
    { 
      title: 'STYLE COMPONENTS', 
      desc: 'Need a project completed by an expert? Let\'s go! Access a human resources consultant to answer questions.',
      icon: '⚡',
      color: 'indigo'
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fuchsia-400 font-medium mb-2 tracking-wider uppercase"
        >
          Our Services
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
        >
          WHAT WE DO
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          SERVICES AND SOLUTIONS
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-neutral-300 leading-relaxed text-lg max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident iure, dolor, nulla eaque delectus, repudiandae commodi.
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {items.map((s, index) => (
          <motion.div 
            key={s.title}
            variants={cardVariants}
            whileHover={{ 
              y: -15, 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="group relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-8 shadow-xl hover:border-fuchsia-500/50 transition-all duration-500 overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            {/* Floating particles */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              className="absolute top-4 right-4 w-2 h-2 bg-fuchsia-400/30 rounded-full"
            />
            
            <div className="relative z-10">
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className="text-5xl mb-6 inline-block"
              >
                {s.icon}
              </motion.div>
              
              <motion.h3 
                whileHover={{ color: "#a855f7" }}
                className="text-xl font-semibold text-white mb-4 group-hover:text-fuchsia-400 transition-colors duration-300"
              >
                {s.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                className="text-neutral-300 text-sm leading-relaxed"
              >
                {s.desc}
              </motion.p>
              
              {/* Hover effect line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export function Stats() {
  const stats = [
    { k: '10+', v: 'Projects' },
    { k: '3+', v: 'Years' },
    { k: '100%', v: 'Client Focus' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 text-center">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="text-2xl font-extrabold">{s.k}</div>
            <div className="text-neutral-400 text-sm">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function PortfolioGrid() {
  const items = Array.from({ length: 6 }).map((_, i) => ({ id: i + 1 }))
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <motion.div key={it.id} whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 aspect-[4/3]">
            <div className="absolute inset-0 grid place-items-center text-neutral-500">Placeholder</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      quote: 'Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project',
      author: 'Jack Metiyo Shina',
      position: 'CEO, TechCorp'
    },
    {
      quote: 'Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project',
      author: 'Sarah Johnson',
      position: 'Design Director, CreativeStudio'
    },
    {
      quote: 'Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project',
      author: 'Michael Chen',
      position: 'Founder, StartupXYZ'
    },
    {
      quote: 'Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project',
      author: 'Emily Rodriguez',
      position: 'Marketing Manager, GrowthCo'
    },
    {
      quote: 'Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project',
      author: 'David Thompson',
      position: 'CTO, InnovationLabs'
    }
  ]
  
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center mb-12">
        <h4 className="text-fuchsia-400 font-medium mb-2">TESTIMONIALS</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">TESTIMONIALS</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          CLIENTS TO SAYS
        </h3>
        <p className="text-neutral-300 leading-relaxed text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident iure, dolor, nulla eaque delectus, repudiandae commodi.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-6 shadow-xl hover:border-fuchsia-500/50 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <h4 className="font-semibold text-white text-sm">{testimonial.author}</h4>
                <p className="text-fuchsia-400 text-xs">{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Pricing() {
  const plans = [
    {
      name: 'INFLUENCER',
      subtitle: 'Best For Small Investors',
      price: '$104',
      period: 'Per Month',
      features: ['Basic Features', 'Email Support', '5 Projects', 'Basic Analytics']
    },
    {
      name: 'AGENCY',
      subtitle: 'Best For Small Investors',
      price: '$204',
      period: 'Per Month',
      features: ['Advanced Features', 'Priority Support', 'Unlimited Projects', 'Advanced Analytics', 'Custom Integrations']
    },
    {
      name: 'ENTERPRISE',
      subtitle: 'Best For Small Investors',
      price: '$275',
      period: 'Per Month',
      features: ['All Features', '24/7 Support', 'Unlimited Everything', 'Custom Development', 'Dedicated Manager']
    }
  ]
  
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center mb-12">
        <h4 className="text-fuchsia-400 font-medium mb-2">Payment</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">WHAT WE DO</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          OUR ALL PRICES
        </h3>
        <p className="text-neutral-300 leading-relaxed text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident iure, dolor, nulla eaque delectus, repudiandae commodi.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group relative rounded-2xl border backdrop-blur-md p-8 shadow-xl transition-all duration-300 ${
              index === 1 
                ? 'border-fuchsia-500/50 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10' 
                : 'border-white/10 bg-black/60 hover:border-fuchsia-500/50'
            }`}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm mb-6">{plan.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-fuchsia-400">{plan.price}</span>
                <span className="text-neutral-400 text-sm ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-neutral-300 text-sm">
                    <span className="text-fuchsia-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
                index === 1
                  ? 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white'
                  : 'border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm text-neutral-400">
        <div>© {new Date().getFullYear()} Apni Pahchan</div>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-white">Top</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}


