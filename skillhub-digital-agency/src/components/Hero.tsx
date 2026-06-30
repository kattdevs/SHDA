'use client'

import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { GlassButton, GlassFilter } from '@/components/ui/liquid-glass'

// ─────────────────────────────────────────────────────────────────────────────
// CONTAINER SCROLL
// ─────────────────────────────────────────────────────────────────────────────

const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const rotate    = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale     = useTransform(scrollYProgress, [0, 1], isMobile ? [0.7, 0.9] : [1.05, 1])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: '1000px' }}>
        <motion.div
          style={{ translateY: translate }}
          className="max-w-5xl mx-auto text-center mb-0"
        >
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
          }}
          className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
          <div
  className="h-full w-full overflow-hidden rounded-2xl md:rounded-2xl md:p-0 relative"
  style={{ background: 'var(--bg-depth)' }}
>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      className="w-full overflow-hidden"
    style={{ background: 'var(--bg-depth)' }}
    >
      {/* Glass distortion SVG filter — required, hidden */}
      <GlassFilter />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-2 pb-4">
            {/* Eyebrow */}
            <p
              className="text-white/40 text-sm uppercase tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              SkillHub Digital Agency
            </p>

            {/* Headline */}
            <h1
              className="text-[clamp(3rem,9vw,7rem)] leading-none tracking-tight text-white"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 800 }}
            >
              Transforming Ideas Into{' '}
              <span className="text-[#E0CE00]">Digital Experiences</span>
            </h1>

            {/* CTA row — glass buttons */}
            <div className="flex items-center gap-4 mt-8">
              <GlassButton
                href="/services"
                variant="primary"
                fontFamily="var(--font-playfair)"
              >
                Our Services
              </GlassButton>

              <GlassButton
                href="/contact"
                variant="secondary"
                fontFamily="var(--font-playfair)"
              >
                Let's Connect
              </GlassButton>
            </div>
          </div>
        }
      >
        {/* ── Inside iPad frame ── */}
        <div className="w-full h-full flex flex-col">
          {/* Mock browser bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-[#0a1a26] flex-shrink-0">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 mx-4 h-6 rounded-full bg-white/5 flex items-center px-3">
              <span
                className="text-white/20 text-[11px] tracking-widest"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                skillhubdigital.africa
              </span>
            </div>
          </div>

          {/* Placeholder — swap with <Image> once you have a screenshot */}
          <div className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(#E0CE00 1px, transparent 1px), linear-gradient(90deg, #E0CE00 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <p
                className="relative z-10 text-[#E0CE00]/20 text-[clamp(3rem,8vw,6rem)] font-black tracking-widest uppercase select-none"
                style={{ fontFamily: 'var(--font-masthead)' }}
              >
                SkillHub
              </p>
              <p
                className="relative z-10 text-white/20 text-xs uppercase tracking-[0.4em]"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Digital Agency · Sandton, Johannesburg
              </p>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}