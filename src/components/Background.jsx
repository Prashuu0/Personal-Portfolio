import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Animated blobs */}
      <motion.div
        className="absolute left-1/3 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.6))]" />
    </div>
  )
}


