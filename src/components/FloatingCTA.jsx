import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-end gap-2 mr-1"
          >
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-white shadow-lg shadow-black/40 hover:bg-emerald-600 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-white shadow-lg shadow-black/40 hover:bg-cyan-600 transition"
            >
              <FaPhone /> Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={scrollToContact}
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-white shadow-xl shadow-black/40 transition hover:bg-fuchsia-700"
      >
        Hire Me
      </button>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Quick actions"
        className={`grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-neutral-900 text-white shadow-xl shadow-black/40 transition ${
          open ? 'ring-2 ring-fuchsia-500/60' : 'hover:border-white/20'
        }`}
      >
        <motion.span
          initial={false}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="text-2xl leading-none"
        >
          +
        </motion.span>
      </button>
    </div>
  )
}


