'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(7,26,61,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 h-20 flex items-center justify-between">

        {/* Left — Wordmark */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="font-display text-[1.15rem] tracking-[0.12em] uppercase text-navy"
            style={{ letterSpacing: '0.14em' }}
          >
            SkillHub
          </span>
          <span
            className="font-display text-[1.15rem] tracking-[0.12em] uppercase text-gold"
            style={{ letterSpacing: '0.14em' }}
          >
            Digital
          </span>
        </Link>

        {/* Center — Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative font-body text-[0.78rem] uppercase tracking-[0.18em] text-navy/60 hover:text-navy transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right — CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold text-white font-body text-[0.75rem] uppercase tracking-[0.18em] font-semibold px-6 py-3 hover:bg-navy transition-colors duration-300 group"
        >
          Let&apos;s Build Something
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-white transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.header>
  )
}