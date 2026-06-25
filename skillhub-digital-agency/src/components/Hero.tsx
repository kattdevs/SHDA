'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Link from 'next/link'

// --- Gold particle canvas ---
function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const COUNT = 55
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.6 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

// --- Animated gold ring ---
function GoldRing() {
  return (
    <motion.div
      className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="w-[280px] h-[280px] rounded-full border border-gold/20 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-[200px] h-[200px] rounded-full border border-gold/30 flex items-center justify-center"
        >
          <div className="w-[120px] h-[120px] rounded-full border-2 border-gold/60 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gold" />
          </div>
        </motion.div>
      </motion.div>

      {/* Orbiting dot */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '0 140px' }}
      />
    </motion.div>
  )
}

// --- Word reveal animation ---
const wordVariants = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const line1 = ['Transforming', 'Ideas']
const line2 = ['Into', 'Digital']
const line3 = ['Experiences']

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden pt-20">

      {/* Subtle navy gradient top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(7,26,61,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <GoldParticles />
      </div>

      {/* Rotating rings */}
      <GoldRing />

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 w-full py-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-[1px] bg-gold" />
          <span className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-gold">
            Premium Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display uppercase leading-[0.88] tracking-tight mb-12 max-w-[900px]"
          style={{ fontSize: 'clamp(3.8rem, 10vw, 9.5rem)' }}
        >
          {/* Line 1 */}
          <span className="block overflow-hidden">
            {line1.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className={`inline-block mr-[0.18em] ${
                  word === 'Ideas'
                    ? 'text-transparent'
                    : 'text-navy'
                }`}
                style={
                  word === 'Ideas'
                    ? { WebkitTextStroke: '2px #071A3D' }
                    : {}
                }
              >
                {word}
              </motion.span>
            ))}
          </span>

          {/* Line 2 */}
          <span className="block overflow-hidden">
            {line2.map((word, i) => (
              <motion.span
                key={word}
                custom={i + line1.length}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className={`inline-block mr-[0.18em] ${
                  word === 'Digital' ? 'text-gold' : 'text-navy'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </span>

          {/* Line 3 */}
          <span className="block overflow-hidden">
            {line3.map((word, i) => (
              <motion.span
                key={word}
                custom={i + line1.length + line2.length}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className="inline-block mr-[0.18em] text-navy"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Supporting copy + CTAs side by side */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20 max-w-[900px]">

          {/* Copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-navy/55 leading-relaxed max-w-sm"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
          >
            We craft powerful digital experiences that transform ambitious ideas
            into engaging products, brands, and platforms that drive real
            business growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-navy text-white font-body text-[0.75rem] uppercase tracking-[0.18em] font-semibold px-8 py-4 hover:bg-gold transition-colors duration-300"
            >
              Start Your Project
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                className="stroke-white transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-body text-[0.75rem] uppercase tracking-[0.18em] font-semibold text-navy border-b border-navy/30 pb-0.5 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-navy/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-navy/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}