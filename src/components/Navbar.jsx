import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'services', label: 'Service', path: '/services' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        scrolled ? 'bg-neutral-900/70 shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-wide text-2xl">
          <span className="text-fuchsia-400">Prashant</span>
          <span className="text-white">Kumar</span>
        </Link>
        
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`relative px-2 py-1 transition-colors ${
                  isActive(link.path) ? 'text-fuchsia-300' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-fuchsia-400"
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-neutral-800 bg-neutral-900 text-white"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <motion.div
            initial={false}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-2xl"
          >
            ≡
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="md:hidden absolute top-full left-0 right-0 border-t border-neutral-800 bg-neutral-900/95 backdrop-blur-md"
          >
            <ul className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`w-full text-left rounded-md px-3 py-2 block ${
                      isActive(link.path) ? 'bg-fuchsia-600/20 text-fuchsia-300' : 'text-neutral-200 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}


