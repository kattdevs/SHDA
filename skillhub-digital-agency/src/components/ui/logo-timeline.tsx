'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface LogoItem {
  label: string
  icon: React.ReactNode
  animationDelay: number
  animationDuration: number
  row: number
}

export interface LogoTimelineProps {
  items: LogoItem[]
  title?: string
  height?: string
  className?: string
  iconSize?: number
  showRowSeparator?: boolean
  animateOnHover?: boolean
}

export function LogoTimeline({
  items,
  title,
  height = 'h-[400px] sm:h-[800px]',
  className,
  showRowSeparator = true,
  animateOnHover = false,
}: LogoTimelineProps) {
  const [isHovered, setIsHovered] = useState(false)

  const rowsMap = new Map<number, LogoItem[]>()
  items.forEach((item) => {
    if (!rowsMap.has(item.row)) rowsMap.set(item.row, [])
    rowsMap.get(item.row)?.push(item)
  })

  const rows = Array.from(rowsMap.entries())
    .sort(([a], [b]) => a - b)
    .map(([, rowItems]) => rowItems)

  const animationPlayState = animateOnHover
    ? isHovered ? 'running' : 'paused'
    : 'running'

  return (
    <section className={cn('w-full', height, className)}>
      <style>{`
        @keyframes chip-scroll {
          0%   { transform: translateX(-100%) translateY(-50%); }
          100% { transform: translateX(100vw)  translateY(-50%); }
        }
        .logo-chip-animate {
          will-change: transform;
        }
      `}</style>
      <motion.div
        aria-hidden="true"
        className="relative h-full w-full overflow-hidden py-24 ring-inset sm:py-32"
        style={{ background: 'var(--bg-depth, linear-gradient(180deg,#060D15 0%,#0A1722 45%,#0E202F 100%))' }}
        onMouseEnter={() => animateOnHover && setIsHovered(true)}
        onMouseLeave={() => animateOnHover && setIsHovered(false)}
      >
        {title && (
          <div className="absolute top-1/2 left-1/2 mx-auto w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative z-10">
              <p
                className="mx-auto mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
                style={{
                  color: 'rgba(255,255,255,0.08)',
                  fontFamily: 'var(--font-geist-sans, sans-serif)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                }}
              >
                {title}
              </p>
            </div>
          </div>
        )}

        <div
          className="@container absolute inset-0 grid"
          style={{ gridTemplateRows: `repeat(${rows.length}, 1fr)` }}
        >
          {rows.map((rowItems, index) => (
            <div className="group relative flex items-center" key={index}>
              {/* No track lines — chips float on their own */}
              {rowItems.map((logo) => (
                <div
                  key={`${logo.row}-${logo.label}`}
                  className={cn(
                    'absolute top-1/2 flex -translate-y-1/2 items-center gap-2 px-3 py-1.5 whitespace-nowrap',
                    'rounded-full backdrop-blur-sm',
                    'logo-chip-animate',
                  )}
                  style={{
                    animationDelay: `${logo.animationDelay}s`,
                    animationDuration: `${logo.animationDuration}s`,
                    animationPlayState,
                    animationName: 'chip-scroll',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    background: 'linear-gradient(135deg, rgba(212,188,46,0.12) 0%, rgba(14,32,47,0.8) 100%)',
                    border: '1px solid rgba(212,188,46,0.2)',
                    boxShadow: '0 0 12px rgba(212,188,46,0.08)',
                  }}
                >
                  <span style={{ color: 'var(--gold-500, #D4BC2E)', display: 'flex', alignItems: 'center' }}>
                    {logo.icon}
                  </span>
                  <span
                    className="text-sm/6 font-medium"
                    style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-dm-sans, sans-serif)' }}
                  >
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}