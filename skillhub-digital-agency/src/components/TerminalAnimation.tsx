'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Terminal script — lines of "code" that type out one by one ───────────────
// Each line has a type: 'command' (user input with $ prompt),
// 'output' (response text), or 'gap' (empty line for breathing room).

const LINES = [
  { type: 'command', text: 'npx create-next-app@latest skillhub-digital' },
  { type: 'output',  text: '✔ Would you like to use TypeScript? Yes' },
  { type: 'output',  text: '✔ Would you like to use Tailwind CSS? Yes' },
  { type: 'output',  text: '✔ Would you like to use App Router? Yes' },
  { type: 'output',  text: 'Creating a new Next.js app in /skillhub-digital' },
  { type: 'output',  text: '✓ Installing dependencies...' },
  { type: 'gap',     text: '' },
  { type: 'command', text: 'cd skillhub-digital && npm run dev' },
  { type: 'output',  text: '  ▶ Next.js 14.2.35' },
  { type: 'output',  text: '  ✓ Ready in 1.2s' },
  { type: 'output',  text: '  ◯ Local: http://localhost:3000' },
  { type: 'gap',     text: '' },
  { type: 'command', text: 'git init && git add .' },
  { type: 'output',  text: 'Initialized empty Git repository' },
  { type: 'command', text: 'git commit -m "feat: initial SkillHub Digital commit"' },
  { type: 'output',  text: '[main (root-commit)] feat: initial SkillHub Digital commit' },
  { type: 'output',  text: ' 42 files changed, 1,337 insertions(+)' },
  { type: 'gap',     text: '' },
  { type: 'command', text: 'vercel deploy --prod' },
  { type: 'output',  text: '  ✓ Deployed to skillhubdigital.africa' },
  { type: 'output',  text: '  ✓ Build completed in 38s' },
  { type: 'output',  text: '  🚀 Production: https://skillhubdigital.africa' },
  { type: 'gap',     text: '' },
  { type: 'command', text: 'npm install gsap framer-motion' },
  { type: 'output',  text: 'added 12 packages in 3.4s' },
  { type: 'gap',     text: '' },
  { type: 'command', text: 'echo "Building something great..."' },
  { type: 'output',  text: 'Building something great...' },
]

// Typing speed config (ms)
const CHAR_DELAY   = 35   // delay between each character
const LINE_PAUSE   = 420  // pause after a command line before output appears
const OUTPUT_PAUSE = 80   // pause between output lines
const LOOP_PAUSE   = 2200 // pause at end before restarting

// ─── Component ────────────────────────────────────────────────────────────────

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<
    { type: string; text: string; partial?: string; done?: boolean }[]
  >([])
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auto-scroll to bottom as new lines appear
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleLines])

  useEffect(() => {
    let cancelled = false

    const sleep = (ms: number) =>
      new Promise<void>((res) => {
        timeoutRef.current = setTimeout(res, ms)
      })

    async function run() {
      while (!cancelled) {
        setVisibleLines([])

        for (let i = 0; i < LINES.length; i++) {
          if (cancelled) return
          const line = LINES[i]

          if (line.type === 'gap') {
            setVisibleLines((prev) => [...prev, { ...line, done: true }])
            await sleep(OUTPUT_PAUSE)
            continue
          }

          if (line.type === 'output') {
            setVisibleLines((prev) => [...prev, { ...line, done: true }])
            await sleep(OUTPUT_PAUSE)
            continue
          }

          // Command lines — type character by character
          setVisibleLines((prev) => [...prev, { ...line, partial: '', done: false }])

          for (let c = 0; c <= line.text.length; c++) {
            if (cancelled) return
            const partial = line.text.slice(0, c)
            setVisibleLines((prev) => {
              const next = [...prev]
              next[next.length - 1] = { ...line, partial, done: c === line.text.length }
              return next
            })
            await sleep(CHAR_DELAY)
          }

          await sleep(LINE_PAUSE)
        }

        // Pause at end, then loop
        await sleep(LOOP_PAUSE)
      }
    }

    run()
    return () => {
      cancelled = true
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: '#0a1520', fontFamily: 'monospace' }}>

      {/* Browser / terminal bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0 border-b"
        style={{ backgroundColor: '#0d1c2a', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
        </div>
        <div
          className="flex-1 mx-4 h-6 rounded-full flex items-center px-3"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
        >
          <span className="text-[11px] tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
            skillhub — zsh
          </span>
        </div>
      </div>

      {/* Terminal output */}
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden p-4 md:p-5 flex flex-col gap-0.5"
        style={{ overflowY: 'auto' }}
      >
        {visibleLines.map((line, i) => {
          if (line.type === 'gap') return <div key={i} className="h-2" />

          if (line.type === 'output') {
            const isSuccess = line.text.startsWith('✓') || line.text.startsWith('✔') || line.text.startsWith('🚀')
            const isArrow   = line.text.startsWith('  ▶') || line.text.startsWith('  ◯')
            return (
              <div
                key={i}
                className="text-[11px] md:text-xs leading-relaxed"
                style={{
                  color: isSuccess ? '#28C840'
                       : isArrow   ? 'rgba(212,188,46,0.8)'
                       : 'rgba(255,255,255,0.45)',
                }}
              >
                {line.text}
              </div>
            )
          }

          // Command line
          return (
            <div key={i} className="flex items-start gap-2 text-[11px] md:text-xs leading-relaxed">
              <span style={{ color: '#D4BC2E', flexShrink: 0 }}>$</span>
              <span style={{ color: '#ffffff' }}>
                {line.done ? line.text : line.partial}
                {/* Blinking cursor on the currently-typing line */}
                {!line.done && (
                  <span
                    className="inline-block w-[7px] h-[13px] ml-px align-middle"
                    style={{
                      backgroundColor: '#D4BC2E',
                      animation: 'blink 0.9s step-end infinite',
                    }}
                  />
                )}
              </span>
            </div>
          )
        })}

        {/* Idle cursor at end when all lines are done */}
        {visibleLines.length > 0 && visibleLines[visibleLines.length - 1]?.done && (
          <div className="flex items-center gap-2 text-[11px] md:text-xs mt-1">
            <span style={{ color: '#D4BC2E' }}>$</span>
            <span
              className="inline-block w-[7px] h-[13px] align-middle"
              style={{
                backgroundColor: '#D4BC2E',
                animation: 'blink 0.9s step-end infinite',
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  )
}