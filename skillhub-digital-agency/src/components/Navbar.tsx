'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Agency', href: '/agency' },
  { label: 'Services', href: '/services' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* SkillHub wordmark — fixed centre, fades out on scroll */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-28 pointer-events-none transition-all duration-500"
        style={{
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? 'translateY(-10px)' : 'translateY(0)',
        }}
      >
        <Link
          href="/"
          style={{ fontFamily: 'var(--font-masthead)', letterSpacing: '0.15em' }}
          className="pointer-events-auto text-[#0E202F] font-bold text-3xl uppercase"
        >
          Skill<em className="text-[#E0CE00] not-italic">Hub</em>
        </Link>
      </div>

      {/* Left floating block — logo cube + nav links */}
      <div
        className="fixed z-50 transition-all duration-500"
        style={{
          top: scrolled ? '24px' : '28px',
          left: scrolled ? '24px' : '32px',
        }}
      >
        <div className="flex flex-col gap-1">

          {/* Logo cube container — collapses to 0 when not scrolled */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ height: scrolled ? '48px' : '0px' }}
          >
            <div
              className="relative w-11 h-11 rounded-lg bg-[#0E202F] flex items-center justify-center group cursor-pointer transition-all duration-500"
              style={{
                opacity: scrolled ? 1 : 0,
                transform: scrolled ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.8)',
                pointerEvents: scrolled ? 'auto' : 'none',
              }}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-[#E0CE00]/0 group-hover:border-[#E0CE00]/80 transition-all duration-500" />
              <div
                className="absolute w-16 h-16 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, #E0CE00 0%, transparent 70%)',
                  animation: 'spin 4s linear infinite',
                }}
              />
              <div
                className="absolute inset-0 rounded-lg"
                style={{ animation: 'pulse-ring 2.5s ease-out infinite' }}
              />
              <Image
                src="/SH_Digital_Logo_Icon_transparent.png"
                alt="SkillHub logo"
                width={30}
                height={30}
                className="relative z-10 object-contain"
              />
            </div>
          </div>

          {/* Nav links — always in same position */}
          <ul className="hidden md:flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-widest text-[#0E202F] hover:text-[#E0CE00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right floating block — Let's Connect */}
      <div
        className="fixed z-50 transition-all duration-500"
        style={{
          top: scrolled ? '24px' : '40px',
          right: scrolled ? '24px' : '32px',
        }}
      >
        <Link
          href="/contact"
          style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
          className="text-base font-bold italic text-white bg-[#0E202F] px-6 py-3 hover:bg-[#E0CE00] hover:text-[#0E202F] transition-all duration-300"
        >
          Let's Connect
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#0E202F] text-sm uppercase tracking-widest hover:text-[#E0CE00] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl uppercase tracking-widest text-[#0E202F]/70 hover:text-[#E0CE00] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
            className="mt-4 text-base font-bold italic text-white bg-[#0E202F] px-6 py-3 text-center hover:bg-[#E0CE00] hover:text-[#0E202F] transition-all duration-300"
          >
            Let's Connect
          </Link>
        </div>
      )}
    </>
  )
}