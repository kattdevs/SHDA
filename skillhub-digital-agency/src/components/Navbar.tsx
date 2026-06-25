'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Floating Navbar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className="w-full flex items-center justify-between px-8 rounded-none md:rounded-2xl"
          style={{
            maxWidth: '1200px',
            height: '72px',
            background: 'rgba(7, 15, 43, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            {/* Gold accent icon */}
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 flex-shrink-0"
            >
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="7" height="7" fill="#D4AF37" />
                <rect x="11" y="2" width="7" height="7" fill="#D4AF37" opacity="0.5" />
                <rect x="2" y="11" width="7" height="7" fill="#D4AF37" opacity="0.5" />
                <rect x="11" y="11" width="7" height="7" fill="#D4AF37" />
              </svg>
            </motion.div>
            <span className="font-display text-white text-[1rem] tracking-[0.12em] uppercase">
              SkillHub{' '}
              <span style={{ color: '#D4AF37' }}>Digital</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative font-body text-[0.75rem] uppercase tracking-[0.18em] text-white/70 hover:text-[#D4AF37] transition-colors duration-300 pb-1 block"
                >
                  {link.label}
                  {/* Animated gold underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-[#D4AF37]"
                    initial={{ width: 0 }}
                    animate={{ width: hovered === link.label ? '100%' : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block flex-shrink-0"
          >
            <Link
              href="/contact"
              className="font-body text-[0.72rem] uppercase tracking-[0.18em] font-bold text-navy px-6 py-2.5 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.35)',
              }}
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-[1.5px] bg-white block" />
            <span className="w-4 h-[1.5px] bg-white block" />
            <span className="w-6 h-[1.5px] bg-white block" />
          </button>
        </nav>
      </motion.div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col px-8 py-10"
            style={{ background: 'rgba(7, 15, 43, 0.98)' }}
          >
            {/* Close button */}
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-white text-[1rem] tracking-[0.12em] uppercase">
                SkillHub <span style={{ color: '#D4AF37' }}>Digital</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Mobile links */}
            <ul className="flex flex-col gap-8 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-white uppercase tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block font-body text-[0.75rem] uppercase tracking-[0.2em] font-bold text-navy px-8 py-4"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
                  boxShadow: '0 0 24px rgba(212, 175, 55, 0.4)',
                }}
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}