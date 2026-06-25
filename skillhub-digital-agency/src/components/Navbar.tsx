'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white px-8 py-6 flex items-start justify-between"
    >
      {/* Left — stacked nav links */}
      <nav className="flex flex-col gap-1 text-sm font-medium font-body text-navy">
        <Link href="/work" className="hover:text-gold transition-colors">
          Work <span className="text-gold">(12)</span>
        </Link>
        <Link href="/agency" className="text-gold hover:opacity-75 transition-opacity">
          Agency
        </Link>
        <Link href="/services" className="hover:text-gold transition-colors">
          Services
        </Link>
      </nav>

      {/* Center — logo */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 top-6 font-display text-xl font-black tracking-tight text-navy hover:text-gold transition-colors"
      >
        SkillHub Digital
      </Link>

      {/* Right — CTA */}
      <div className="flex items-center gap-6">
        <Link
          href="/contact"
          className="text-sm font-body text-navy underline underline-offset-4 hover:text-gold transition-colors hidden md:block"
        >
          Start a project
        </Link>
        <Link
          href="/contact"
          className="bg-navy text-white text-sm font-semibold font-body px-5 py-2.5 hover:bg-gold transition-colors duration-300"
        >
          Let's Connect
        </Link>
      </div>
    </motion.header>
  )
}