'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const line = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
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
        {/* Eyebrow */}
        <motion.p
          variants={line}
          className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-8"
        >
          Pan-African Digital Agency
        </motion.p>

        {/* Headline */}
        <h1
          className="font-display font-black text-navy leading-[1.0] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          <motion.span variants={line} className="block">
            We <em className="italic">build</em> digital
          </motion.span>
          <motion.span variants={line} className="block">
            experiences that
          </motion.span>
          <motion.span variants={line} className="block">
            drive <em className="italic text-gold">real growth.</em>
          </motion.span>
        </h1>

        {/* Gold divider */}
        <motion.div
          variants={line}
          className="mx-auto mt-10 mb-10 w-12 h-[3px] bg-gold"
        />

        {/* Subheading */}
        <motion.p
          variants={line}
          className="font-display text-navy/70 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
        >
          A team of strategists, designers, and developers united by craft,
          curiosity, and the ambition to build brands that last across Africa
          and beyond.
        </motion.p>

        {/* CTAs */}
        {/* CTAs */}
        <motion.div
          variants={line}
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