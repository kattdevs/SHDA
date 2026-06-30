'use client'

import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'

// ─── SkillHub team data ───────────────────────────────────────────────────────
// Replace image URLs with real team photos when available

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    name: 'Listen Jimu',
    role: 'Founder',
  },
  {
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face',
    name: 'Katlego Twala',
    role: 'Software Developer',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    name: 'Boitumelo Tlou',
    role: 'Data Scientist',
  },
  {
    image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&h=500&fit=crop&crop=face',
    name: 'Felicity Mncube',
    role: 'Software Developer',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    name: 'Caleb Mokoka',
    role: 'Software Developer',
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
    name: 'Benis Mulenda',
    role: 'Cybersecurity',
  },
]

export default function Team() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--bg-depth)' }}
    >
      {/* Decorative squiggle — bottom right, very low opacity gold */}
      <svg
        className="absolute right-0 bottom-0 text-[#E0CE00]/[0.04] pointer-events-none"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="40"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Heading block ── */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          {/* "Team" — Geist 800, matches hero font */}
          <h2
            className="relative mb-4 text-white"
            style={{
              fontFamily: 'var(--font-geist-sans)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: 1.05,
            }}
          >
            The Team
            {/* Decorative scribble accent */}
            <svg
              className="absolute -top-3 -right-10 -z-10 w-16 md:w-20 text-[#E0CE00]/15"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>

          {/* Intro sentence */}
          <p
            className="max-w-xl text-white/50"
            style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.8 }}
          >
            A small team of strategists, designers, and developers based in
            Sandton, Johannesburg — working together to bring ambitious
            brands to life across Africa and beyond.
          </p>
        </div>

        {/* ── Marquee photo strip ── */}
        <div className="relative w-full">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 md:w-32 bg-gradient-to-r from-[#0A1722] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 md:w-32 bg-gradient-to-l from-[#0A1722] to-transparent" />
          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <div
                className="group flex w-60 md:w-64 shrink-0 flex-col"
                key={member.name}
              >
                <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/5">
                  <Image
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    fill
                    src={member.image}
                  />
                  {/* Name/role overlay */}
                  <div className="absolute bottom-0 w-full p-3 bg-[#0A1722]/90 backdrop-blur-sm border-t border-[#E0CE00]/10">
                    <h3
                      className="text-white text-sm"
                      style={{
                        fontFamily: 'var(--font-geist-sans)',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-[#E0CE00]/60"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  )
}