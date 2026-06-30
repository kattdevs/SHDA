'use client'

import React from 'react'
import { motion, Transition } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// VerticalCutReveal
// Splits text into words (or chars) and reveals each with a vertical
// clip/slide-up animation, staggered.
// ─────────────────────────────────────────────────────────────────────────────

interface VerticalCutRevealProps {
  children: string
  splitBy?: 'words' | 'chars'
  staggerDuration?: number
  staggerFrom?: 'first' | 'last' | 'center'
  reverse?: boolean
  transition?: Transition
  className?: string
}

export function VerticalCutReveal({
  children,
  splitBy = 'words',
  staggerDuration = 0.1,
  staggerFrom = 'first',
  reverse = false,
  transition,
  className,
}: VerticalCutRevealProps) {
  const pieces =
    splitBy === 'words' ? children.split(' ') : children.split('')

  const getDelay = (i: number) => {
    const total = pieces.length
    let order = i
    if (staggerFrom === 'last') order = total - 1 - i
    if (staggerFrom === 'center') order = Math.abs(i - Math.floor(total / 2))
    return order * staggerDuration
  }

  return (
    <span className={className} style={{ display: 'inline' }}>
      {pieces.map((piece, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: reverse ? '-100%' : '100%' }}
            animate={{ y: '0%' }}
            transition={{
              ...transition,
              delay: (transition?.delay ?? 0) + getDelay(i),
            }}
          >
            {piece}
            {splitBy === 'words' && i < pieces.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}