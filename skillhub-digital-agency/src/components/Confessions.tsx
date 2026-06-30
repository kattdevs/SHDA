'use client'

import { useEffect, useRef } from 'react'

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist, Pioneer of OOP",
    dark: true,
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    role: "Co-founder, Apple",
    dark: false,
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    role: "Science Fiction Author",
    dark: true,
  },
  {
    text: "The web is more a social creation than a technical one. I designed it for a social effect — to help people work together.",
    author: "Tim Berners-Lee",
    role: "Inventor of the World Wide Web",
    dark: false,
  },
  {
    text: "Move fast and build things that matter. Speed is irrelevant if you're heading in the wrong direction.",
    author: "Anonymous",
    role: "Silicon Valley Wisdom",
    dark: true,
  },
  {
    text: "Simplicity is the soul of efficiency. The most powerful tool a developer has is knowing what not to build.",
    author: "Austin Freeman",
    role: "Software Engineer",
    dark: false,
  },
  {
    text: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    author: "Jeff Bezos",
    role: "Founder, Amazon",
    dark: true,
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux",
    dark: false,
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
    role: "Co-founder, Apple",
    dark: true,
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    role: "Co-founder, Microsoft",
    dark: false,
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    role: "Software Developer",
    dark: true,
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    role: "Creator of Extreme Programming",
    dark: false,
  },
]

export default function Confessions() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let x = 0
    let animId: number

    const tick = () => {
      x -= 0.4
      const half = track.scrollWidth / 2
      if (Math.abs(x) >= half) x = 0
      track.style.transform = `translateX(${x}px)`
      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  const all = [...quotes, ...quotes]

  return (
    <section
      className="w-full py-28 overflow-hidden"
      style={{ background: 'var(--bg-depth)' }}
    >
      {/* Header */}
      <div className="px-10 md:px-20 mb-16">
        <h2
          style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
          className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold text-white"
        >
          Client{' '}
          <em style={{ fontStyle: 'italic' }} className="text-[#E0CE00]">
            Confessions
          </em>
        </h2>
      </div>

      {/* Scrolling cards */}
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {all.map((q, i) => {
            const rotations = [-1.8, 1.2, -0.6, 1.8, -1.2, 0.8, -2, 1.5]
            const rotate = rotations[i % rotations.length]
            const bg = q.dark ? (i % 4 === 0 ? '#0E202F' : '#162030') : (i % 4 === 1 ? '#E0CE00' : '#C8A800')

            return (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col justify-between rounded-2xl p-8"
                style={{
                  width: '320px',
                  minHeight: '240px',
                  background: bg,
                  border: q.dark
                    ? '1px solid rgba(255,255,255,0.08)'
                    : '1px solid rgba(0,0,0,0.08)',
                  transform: `rotate(${rotate}deg)`,
                }}
              >
                {/* Quote mark */}
                <span
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '3.5rem', lineHeight: 1 }}
                  className={`mb-3 block ${q.dark ? 'text-[#E0CE00]' : 'text-[#0E202F]/30'}`}
                >
                  "
                </span>

                {/* Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                  }}
                  className={`flex-1 mb-6 ${q.dark ? 'text-white' : 'text-[#0E202F]/85'}`}
                >
                  {q.text}
                </p>

                {/* Author */}
                <div>
                  <p
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '13px' }}
                    className={q.dark ? 'text-white' : 'text-[#0E202F]'}
                  >
                    {q.author}
                  </p>
                  <p
                    style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', letterSpacing: '0.06em' }}
                    className={`uppercase mt-1 ${q.dark ? 'text-white/40' : 'text-[#0E202F]/45'}`}
                  >
                    {q.role}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
