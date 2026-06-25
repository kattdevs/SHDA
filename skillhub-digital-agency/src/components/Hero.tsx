'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fullText = "WE BUILD DIGITAL EXPERIENCES THAT DRIVE REAL GROWTH."

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 38)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-36 pb-24 px-6 text-center overflow-hidden">

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display uppercase text-navy/[0.04] whitespace-nowrap"
          style={{ fontSize: 'clamp(8rem, 22vw, 20rem)', letterSpacing: '0.05em' }}
        >
          SKILLHUB
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Headline — typewriter */}
        <h1
          className="font-display text-navy uppercase leading-[0.95] tracking-wide"
          style={{
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            fontWeight: 900,
            WebkitTextStroke: '1px #0F1A2E',
          }}
        >
          {displayed}
          {!done && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block w-[4px] h-[0.85em] bg-gold align-middle ml-1"
            />
          )}
        </h1>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate={done ? 'show' : 'hidden'}
          variants={fadeUp}
          className="font-body text-navy/60 max-w-2xl mx-auto leading-relaxed mt-10"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          A team of strategists, designers, and developers united by craft,
          curiosity, and the ambition to build brands that last across Africa
          and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate={done ? 'show' : 'hidden'}
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
      </div>
    </section>
  )
}