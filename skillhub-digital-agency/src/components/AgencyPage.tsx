'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlassButton, GlassFilter } from '@/components/ui/liquid-glass'
import { LogoTimeline } from '@/components/ui/logo-timeline'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Dev icons — monochrome, falling like Alice's objects ─────────────────

const GitHubIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" fill="#000"
      d="M50 5C25.1 5 5 25.1 5 50c0 19.9 12.9 36.8 30.8 42.8 2.3.4 3.1-1 3.1-2.2v-7.7c-12.6 2.7-15.3-6.1-15.3-6.1-2.1-5.3-5.1-6.7-5.1-6.7-4.1-2.8.3-2.8.3-2.8 4.6.3 7 4.7 7 4.7 4.1 7 10.7 5 13.3 3.8.4-3 1.6-5 2.9-6.1-10.1-1.1-20.7-5-20.7-22.4 0-4.9 1.8-9 4.7-12.1-.5-1.2-2-5.7.4-11.9 0 0 3.8-1.2 12.5 4.7a43.3 43.3 0 0 1 22.8 0c8.7-5.9 12.5-4.7 12.5-4.7 2.5 6.2.9 10.7.4 11.9 2.9 3.2 4.7 7.2 4.7 12.1 0 17.4-10.6 21.2-20.7 22.3 1.6 1.4 3.1 4.2 3.1 8.4v12.5c0 1.2.8 2.6 3.1 2.2C82.1 86.8 95 69.9 95 50 95 25.1 74.9 5 50 5Z"/>
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="100" height="100" rx="8" fill="#000"/>
    <path fill="white" d="M56.5 51.5V56c1.4.8 3 1.3 4.8 1.3 4.8 0 7.7-2.5 7.7-6.7 0-3.5-2-5.5-6.1-7-2.9-1.1-4-1.8-4-3.3 0-1.4 1.1-2.3 2.9-2.3 1.6 0 3.2.6 4.8 1.6v-4.1c-1.4-.8-3.1-1.2-4.9-1.2-4.5 0-7.3 2.5-7.3 6.5 0 3.4 2.1 5.4 5.9 6.8 3 1.1 4.2 1.9 4.2 3.5 0 1.6-1.2 2.5-3.2 2.5-2 0-3.9-.7-5.8-2.1ZM42 38.3h7.5v-4H28v4h7.5V62H42V38.3Z"/>
  </svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="2" y="2" width="96" height="66" rx="8" stroke="#000" strokeWidth="3" fill="rgba(0,0,0,0.05)"/>
    <rect x="2" y="2" width="96" height="17" rx="8" fill="rgba(0,0,0,0.1)"/>
    <circle cx="16" cy="10.5" r="4" fill="#000"/>
    <circle cx="30" cy="10.5" r="4" fill="#555"/>
    <circle cx="44" cy="10.5" r="4" fill="#888"/>
    <text x="12" y="40" fill="#000" fontFamily="monospace" fontSize="11">$ git commit -m &quot;feat&quot;</text>
    <text x="12" y="56" fill="rgba(0,0,0,0.4)" fontFamily="monospace" fontSize="10">▶ 1 file changed, 42 insertions</text>
  </svg>
)

const VSCodeIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fill="#000" d="M74.3 5.4 51.6 27.3 32.9 12.4 5 23.9v52.2l27.9 11.5 18.7-14.9 22.7 21.9L95 87V13L74.3 5.4ZM27.9 64.3 13.6 50l14.3-14.3 14.3 14.3-14.3 14.3ZM50 50 35.7 35.7 50 21.4l14.3 14.3L50 50Zm22.1 14.3L57.8 50l14.3-14.3 14.3 14.3-14.3 14.3Z"/>
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" fill="#000"
      d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 15.8 40.5 15.8c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.127 33.692 0 27 0ZM13.5 15.8C6.3 15.8 1.8 19.4 0 26.6c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 28.472 20.308 31.6 27 31.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 18.927 20.192 15.8 13.5 15.8Z"/>
  </svg>
)

const ReactIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#000" strokeWidth="3" fill="none" transform="rotate(0 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#000" strokeWidth="3" fill="none" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#000" strokeWidth="3" fill="none" transform="rotate(120 50 50)"/>
    <circle cx="50" cy="50" r="6" fill="#000"/>
  </svg>
)

const NpmIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="100" height="100" rx="8" fill="#000"/>
    <rect x="18" y="30" width="64" height="40" fill="#000"/>
    <path fill="white" d="M18 30h64v40H62V46H50v24H18z"/>
  </svg>
)

const YarnIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="46" stroke="#000" strokeWidth="3" fill="none"/>
    <path stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none"
      d="M28 72c4-8 8-20 6-32M34 40c6-4 16-6 24-4M58 36c4 6 6 16 4 26M62 62c-6 4-14 6-20 4M42 66c-4-4-8-12-6-20"/>
  </svg>
)

const RadixIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="35" cy="30" r="18" fill="#000"/>
    <rect x="17" y="52" width="36" height="36" rx="4" fill="#000"/>
    <path d="M53 52 A35 35 0 0 1 88 52 A35 35 0 0 1 53 87Z" fill="#000"/>
  </svg>
)

const PnpmIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="5" y="5" width="26" height="26" rx="3" fill="#000"/>
    <rect x="37" y="5" width="26" height="26" rx="3" fill="#000"/>
    <rect x="69" y="5" width="26" height="26" rx="3" fill="#000"/>
    <rect x="5" y="37" width="26" height="26" rx="3" fill="#000"/>
    <rect x="37" y="37" width="26" height="26" rx="3" fill="rgba(0,0,0,0.3)"/>
    <rect x="69" y="37" width="26" height="26" rx="3" fill="rgba(0,0,0,0.3)"/>
    <rect x="5" y="69" width="26" height="26" rx="3" fill="#000"/>
    <rect x="37" y="69" width="26" height="26" rx="3" fill="rgba(0,0,0,0.3)"/>
    <rect x="69" y="69" width="26" height="26" rx="3" fill="rgba(0,0,0,0.3)"/>
  </svg>
)

// ─── Industry icons ───────────────────────────────────────────────────────────

const BldgIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>
const GovIcon  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22V12L12 3l9 9v10H3z"/><rect x="9" y="14" width="6" height="8"/></svg>
const EduIcon  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
const SkillIcon= () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
const NGOIcon  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
const HealthIcon=() => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
const ShopIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
const FinIcon  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
const AssocIcon= () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
const SMEIcon  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>

// ─── Industries data for LogoTimeline ─────────────────────────────────────────

const INDUSTRY_ITEMS = [
  { label: 'Corporate Organisations',       icon: <BldgIcon  />, animationDelay: 0,    animationDuration: 18, row: 1 },
  { label: 'Government Departments',         icon: <GovIcon   />, animationDelay: -6,   animationDuration: 18, row: 1 },
  { label: 'Educational Institutions',       icon: <EduIcon   />, animationDelay: -12,  animationDuration: 18, row: 1 },
  { label: 'Skills Development Providers',   icon: <SkillIcon />, animationDelay: 0,    animationDuration: 22, row: 2 },
  { label: 'NGOs & Non-Profits',             icon: <NGOIcon   />, animationDelay: -8,   animationDuration: 22, row: 2 },
  { label: 'Healthcare Organisations',       icon: <HealthIcon/>, animationDelay: -16,  animationDuration: 22, row: 2 },
  { label: 'Retail & E-Commerce',            icon: <ShopIcon  />, animationDelay: 0,    animationDuration: 20, row: 3 },
  { label: 'Financial Services',             icon: <FinIcon   />, animationDelay: -7,   animationDuration: 20, row: 3 },
  { label: 'Professional Associations',      icon: <AssocIcon />, animationDelay: -14,  animationDuration: 20, row: 3 },
  { label: 'Small & Medium Enterprises',     icon: <SMEIcon   />, animationDelay: -4,   animationDuration: 20, row: 3 },
]

export default function AgencyPage() {
  useEffect(() => {
    const heroReveal = gsap.utils.toArray('.hero-reveal') as HTMLElement[]
    heroReveal.forEach((element) => {
      const heroBox = element.querySelector('.hero-reveal__header') as HTMLElement
      const heroHeadings = element.querySelectorAll('.hero-reveal_split_item')
      const contentEl = element.querySelector('.hero-reveal__content') as HTMLElement
      if (!heroBox || !contentEl) return

      const heroBoxHeight = heroBox.offsetHeight
      const contentHeight = contentEl.offsetHeight

      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: `+=${heroBoxHeight > contentHeight ? heroBoxHeight : contentHeight}`,
          scrub: true,
        },
      }).fromTo(contentEl, { y: '50%' }, { y: '0%', ease: 'none' }, 0.2)

      if (heroHeadings.length >= 2) {
        gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: 'top top',
            end: `+=${heroBoxHeight > contentHeight ? heroBoxHeight : contentHeight}`,
            scrub: true,
            pin: true,
          },
        })
        .fromTo(heroHeadings[0], { y: '0%', opacity: 1 }, { y: '-100%', opacity: 0, ease: 'power3.inOut' }, 0)
        .fromTo(heroHeadings[1], { y: '0%', opacity: 1 }, { y: '100%', opacity: 0, ease: 'power3.inOut' }, 0)
      }

    })

    function parallaxScrollBySpeed(selector: string, speed = 1) {
      const el = document.querySelector(selector) as HTMLElement
      const contentEl = document.querySelector('.hero-reveal__content')
      const contentHeight = contentEl?.getBoundingClientRect().height || 0
      if (!el) return
      gsap.to(el, {
        yPercent: (speed - 1) * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-reveal',
          start: 'top top',
          end: `+=${contentHeight * 3}`,
          scrub: true,
        },
      })
    }

    parallaxScrollBySpeed('.hero-reveal__parallax-github', 15)
    parallaxScrollBySpeed('.hero-reveal__parallax-typescript', 9)
    parallaxScrollBySpeed('.hero-reveal__parallax-terminal', 5)
    parallaxScrollBySpeed('.hero-reveal__parallax-vscode', 20)
    parallaxScrollBySpeed('.hero-reveal__parallax-tailwind', 12)
    parallaxScrollBySpeed('.hero-reveal__parallax-react', 7)
    parallaxScrollBySpeed('.hero-reveal__parallax-npm', 17)
    parallaxScrollBySpeed('.hero-reveal__parallax-yarn', 11)
    parallaxScrollBySpeed('.hero-reveal__parallax-radix', 8)
    parallaxScrollBySpeed('.hero-reveal__parallax-pnpm', 14)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main className="agency-main">
      <GlassFilter />

      <div className="agency-page-wrap">
        {/* ── 1. Big intro ── */}
        <section className="agency-intro">
          <h1 className="agency-intro__heading">
            OUR<br />STORY.
          </h1>
        </section>

        {/* ── 2. Our Story ── */}
        <section className="agency-content">
          <article className="agency-article">
          <p>
            SkillHub Digital Agency was founded by Mr. Jimu with a singular, uncompromising conviction:
            that Africa deserves digital work that holds its own anywhere in the world. Not work that is
            &ldquo;good for around here.&rdquo; Work that is genuinely exceptional — built with the same rigour,
            craft, and strategic depth that global brands command, applied to ambitious businesses
            across the continent.
          </p>
          <p>
            The idea took root in Sandton, Johannesburg — a city that sits at the intersection of
            old money and new energy, where startups and institutions share the same skyline. Mr. Jimu
            saw a gap: too much talent, too little infrastructure to channel it. Young developers,
            designers, and strategists with world-class instincts but nowhere to fully express them.
            SkillHub became that place.
          </p>
          <p>
            From the beginning, the agency was built around a belief that the best ideas emerge when
            people are trusted, encouraged, and given the freedom to think differently. Not just to
            execute briefs, but to challenge them. Not just to meet expectations, but to redefine what
            those expectations could be. Every project taken on at SkillHub carries that spirit — a
            refusal to settle for the obvious solution when a better one is within reach.
          </p>
          <p>
            More than just a studio that delivers digital solutions, SkillHub was created to cultivate
            something rarer: a culture of curiosity, collaboration, and continuous growth. Our team of
            young developers, designers, and creatives are encouraged to explore new technologies,
            experiment with emerging tools, and approach every project as an opportunity to learn
            something new — because that restlessness is exactly what keeps the work from going stale.
          </p>
          <p>
            By combining strategic thinking with creative freedom, we help businesses build digital
            experiences that are not only visually exceptional but deliver lasting, measurable value.
            And as we grow, our commitment remains unchanged: to create work that inspires confidence,
            fosters innovation, and builds long-term partnerships with every client we serve.
          </p>
        </article>
        </section>
      </div>

      {/* ── 3. GSAP reveal ── */}
      <section className="hero-reveal">
        <article>
          <header className="hero-reveal__header">
            <div className="hero-reveal_split">
              <div className="hero-reveal_split_item">
                <p className="c-wide-text">WHAT WE BELIEVE</p>
              </div>
              <div className="hero-reveal_split_item" aria-hidden="true">
                <p className="c-wide-text" aria-hidden="true">WHAT WE BELIEVE</p>
              </div>
            </div>
          </header>

          <div className="hero-reveal__content">
            <div className="hero-reveal__content-inner">

              <div className="hero-reveal__parallax">
                <div className="hero-reveal__parallax-github"><GitHubIcon /></div>
                <div className="hero-reveal__parallax-typescript"><TypeScriptIcon /></div>
                <div className="hero-reveal__parallax-terminal"><TerminalIcon /></div>
                <div className="hero-reveal__parallax-vscode"><VSCodeIcon /></div>
                <div className="hero-reveal__parallax-tailwind"><TailwindIcon /></div>
                <div className="hero-reveal__parallax-react"><ReactIcon /></div>
                <div className="hero-reveal__parallax-npm"><NpmIcon /></div>
                <div className="hero-reveal__parallax-yarn"><YarnIcon /></div>
                <div className="hero-reveal__parallax-radix"><RadixIcon /></div>
                <div className="hero-reveal__parallax-pnpm"><PnpmIcon /></div>
              </div>

              <div className="hero-reveal__content-p">
                <h2 className="beliefs-title">What We Believe</h2>

                <span className="belief-eyebrow">Innovation Begins with Freedom</span>
                <h3>Creativity flourishes when people are free to explore.</h3>
                <p>
                  We believe the best digital work comes from teams that are trusted to experiment,
                  make mistakes, and push past the first idea. By giving our people space to explore
                  without fear, we consistently arrive at solutions that are thoughtful, original,
                  and genuinely future-focused — not just what was expected, but what was needed.
                </p>
                <div className="belief-divider" />

                <span className="belief-eyebrow">Partnership Over Transactions</span>
                <h3>Every client is a long-term partner, not a project number.</h3>
                <p>
                  We take the time to understand your business, your goals, and what success actually
                  means for you — before we write a single line of code or open a design file.
                  That groundwork is what separates work that looks good from work that performs,
                  endures, and keeps delivering value long after launch day.
                </p>
                <div className="belief-divider" />

                <span className="belief-eyebrow">Excellence in Every Detail</span>
                <h3>Quality is not a checkpoint. It is the standard we start from.</h3>
                <p>
                  From the first conversation to the final handoff, we are committed to work that
                  reflects precision, professionalism, and genuine craft. The things most people never
                  notice — the micro-interaction that feels exactly right, the performance optimisation
                  that makes the page load in half a second — are the things we obsess over most.
                </p>
                <div className="belief-divider" />

                <span className="belief-eyebrow">Always Learning. Always Growing.</span>
                <h3>Technology evolves every day, and so do we.</h3>
                <p>
                  The tools we use today will be different from the ones we rely on in two years.
                  That is not a threat — it is the part of this work we find most energising. We
                  embrace new frameworks, new design systems, and new ways of thinking, because
                  staying current is how we keep our clients ahead in a landscape that never
                  stands still.
                </p>
              </div>

            </div>
          </div>
        </article>
      </section>

      {/* ── 4. Closing (back to dark) — UNCHANGED ── */}
      <div className="agency-page-wrap">
        <section>
          <div className="agency-content--after">
            <p>
              SkillHub Digital is not a large agency with hundreds of clients and an anonymous
              production line. We are a focused, intentional studio — small enough to care deeply
              about every brief, experienced enough to execute it with confidence. Every project
              we take on gets the full weight of our thinking, not a template and a timeline.
            </p>
            <p>
              Our home is Sandton, Johannesburg. Our ambition is continental. If you are building
              something that matters — a brand, a product, a digital experience that should outlast
              the trend cycle — we would like to be part of it.
            </p>
          </div>
          <div className="agency-cta">
            <GlassButton
              href="/contact"
              variant="primary"
              fontFamily="var(--font-playfair)"
            >
              Start a conversation
            </GlassButton>
          </div>
        </section>
      </div>

      {/* ── Divider ── */}
      <div className="agency-page-wrap">
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(212,188,46,0.35), transparent)', margin: '0 0' }} />
      </div>

      {/* ── 5. Industries We Serve — LogoTimeline ── */}
      <div className="agency-page-wrap">
        <div style={{ paddingTop: '4rem' }}>
          <p
            style={{
              fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--gold-500, #D4BC2E)', marginBottom: '0.75rem',
              fontFamily: 'var(--font-dm-sans, sans-serif)',
            }}
          >
            Industries We Serve
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-geist-sans, sans-serif)',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: 0,
            }}
          >
            Built for the organisations shaping Africa&apos;s future
          </h2>
        </div>
      </div>

      <LogoTimeline
        items={INDUSTRY_ITEMS}
        title="Industries We Serve"
        height="h-[320px]"
        showRowSeparator={true}
      />

      {/* ── Divider ── */}
      <div className="agency-page-wrap">
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(212,188,46,0.35), transparent)', margin: '0 0' }} />
      </div>

      {/* ── 6. Why Choose SkillHub ── */}
      <div className="agency-page-wrap">
        <section style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
          <p
            style={{
              fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--gold-500, #D4BC2E)', marginBottom: '0.75rem',
              fontFamily: 'var(--font-dm-sans, sans-serif)',
            }}
          >
            Why Choose SkillHub
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-geist-sans, sans-serif)',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '2.5rem',
            }}
          >
            Five reasons our clients stay
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                num: '01',
                title: 'Industry Expertise',
                body: 'Our experience across education, skills development, corporate training, consulting, government, and private sector enables us to develop solutions that address real business challenges — not generic ones.',
              },
              {
                num: '02',
                title: 'Client-Centred Approach',
                body: 'We work closely with clients throughout the entire project lifecycle to ensure every solution aligns with their goals, budget, and operational requirements. Your success is how we measure ours.',
              },
              {
                num: '03',
                title: 'Innovation-Driven',
                body: 'We leverage emerging technologies, modern development frameworks, and industry best practices to deliver future-ready digital solutions — built for today and designed to scale tomorrow.',
              },
              {
                num: '04',
                title: 'End-to-End Support',
                body: 'From concept development and design through implementation, maintenance, and continuous improvement, we provide comprehensive support at every stage of your project.',
              },
              {
                num: '05',
                title: 'Quality and Reliability',
                body: 'Every solution undergoes rigorous testing and quality assurance processes to ensure performance, security, and scalability. We do not ship until it is ready.',
              },
            ].map((reason) => (
              <div
                key={reason.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '1.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-sans, sans-serif)',
                    fontWeight: 800, fontSize: '0.85rem',
                    color: 'var(--gold-500, #D4BC2E)',
                    letterSpacing: '0.05em', flexShrink: 0,
                    paddingTop: 2, minWidth: 28,
                  }}
                >
                  {reason.num}
                </span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-geist-sans, sans-serif)',
                      fontWeight: 700, fontSize: '1rem',
                      color: '#ffffff', letterSpacing: '-0.01em',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans, sans-serif)',
                      fontSize: '0.9rem', fontWeight: 300,
                      lineHeight: 1.75, color: 'rgba(255,255,255,0.55)',
                      margin: 0,
                    }}
                  >
                    {reason.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <p
              style={{
                fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'var(--gold-500, #D4BC2E)', marginBottom: '1rem',
                fontFamily: 'var(--font-dm-sans, sans-serif)',
              }}
            >
              Ready to get started?
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-geist-sans, sans-serif)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Transform your ideas into<br />
              <span style={{ color: 'var(--gold-500, #D4BC2E)' }}>
                powerful digital solutions
              </span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans, sans-serif)',
                fontSize: '0.95rem', fontWeight: 300,
                lineHeight: 1.8, color: 'rgba(255,255,255,0.5)',
                maxWidth: 520, margin: '0 auto 2rem',
              }}
            >
              Contact us today to discuss your website, application, LMS, or digital
              transformation project and discover how SkillHub Digital can help your
              organisation achieve its goals.
            </p>
            <GlassButton
              href="/contact"
              variant="primary"
              fontFamily="var(--font-playfair)"
            >
              Start a conversation
            </GlassButton>
          </div>

        </section>
      </div>

    </main>
  )
}
      