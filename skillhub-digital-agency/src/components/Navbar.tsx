'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassButton, GlassFilter } from '@/components/ui/liquid-glass'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Agency', href: '/agency' },
  { label: 'Services', href: '/services' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Glass filter — only needed once per page; if Hero is above Navbar
          in the tree you can remove this one */}
      <GlassFilter />

      {/* ── SkillHub wordmark — centre top ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-28 pointer-events-none"
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-masthead)',
            letterSpacing: '0.15em',
            fontWeight: 900,
            WebkitTextStroke: '0.5px white',
          }}
          className="pointer-events-auto text-white text-3xl uppercase"
        >
          SkillHub
        </Link>
      </motion.div>

      {/* ── Left floating block ── */}
      <motion.div
        className="fixed z-50"
        animate={{ top: scrolled ? 24 : 28, left: scrolled ? 24 : 32 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col gap-1">
          {/* Logo cube — springs in when scrolled */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                key="logo-cube"
                initial={{ opacity: 0, scale: 0.7, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="mb-1"
              >
                <Link href="/">
                <div className="relative w-11 h-11 rounded-lg bg-[#0A1722] flex items-center justify-center group cursor-pointer border border-white/10 hover:border-[#E0CE00]/60 transition-colors duration-300">
 
                    <div
                      className="absolute w-16 h-16 rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle, #E0CE00 0%, transparent 70%)',
                        animation: 'spin 5s linear infinite',
                      }}
                    />
                    <Image
                      src="/SH_Digital_Logo_Icon_transparent.png"
                      alt="SkillHub Digital"
                      width={30}
                      height={30}
                      className="relative z-10 object-contain"
                    />
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav links */}
          <ul className="hidden md:flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <motion.li
                key={link.label}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-widest text-white hover:text-[#E0CE00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ── Right floating CTA — glass button ── */}
      <motion.div
        className="fixed z-50 hidden md:block"
        animate={{ top: scrolled ? 24 : 40, right: scrolled ? 24 : 32 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassButton
          href="/contact"
          variant="primary"
          fontFamily="var(--font-playfair)"
        >
          Let's Connect
        </GlassButton>
      </motion.div>

      {/* ── Mobile hamburger ── */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white text-sm uppercase tracking-widest hover:text-[#E0CE00] transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0E202F] flex flex-col justify-center px-8 gap-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl uppercase tracking-widest text-white/70 hover:text-[#E0CE00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTA — glass */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
              className="mt-4"
            >
              <GlassButton
                href="/contact"
                variant="primary"
                fontFamily="var(--font-playfair)"
                className="w-full justify-center"
              >
                Let's Connect
              </GlassButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}