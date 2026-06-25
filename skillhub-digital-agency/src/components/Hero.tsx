'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
}

const dropIn = {
  hidden: { opacity: 0, y: -60, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center pt-36 pb-24 px-6 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto"
      >
        {/* Headline — drops in */}
        <h1
          className="font-display font-black text-navy leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)' }}
        >
          <motion.span variants={dropIn} className="block">
            We <em className="italic">build</em> digital
          </motion.span>
          <motion.span variants={dropIn} className="block">
            experiences that
          </motion.span>
          <motion.span variants={dropIn} className="block">
            drive <em className="italic text-gold">real growth.</em>
          </motion.span>
        </h1>

        {/* Gold divider — fades up */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 mb-10 w-12 h-[3px] bg-gold"
        />

        {/* Subheading — fades up */}
        <motion.p
          variants={fadeUp}
          className="font-display italic text-navy/60 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)' }}
        >
          A team of strategists, designers, and developers united by craft,
          curiosity, and the ambition to build brands that last across Africa
          and beyond.
        </motion.p>

        {/* CTAs — fades up */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/work"
            className="bg-navy text-white font-body text-sm font-semibold px-8 py-4 hover:bg-gold transition-colors duration-300"
          >
            View Our Work
          </a>
          <a
            href="/contact"
            className="border border-navy text-navy font-body text-sm font-semibold px-8 py-4 hover:bg-navy hover:text-white transition-colors duration-300"
          >
            
            Start a Project
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}