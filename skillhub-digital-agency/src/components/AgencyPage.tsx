'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Floating dev elements — SVG inline icons ──────────────────────────────
// Replaces: alice, clock, book, kettle, card

const ReactLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(0 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(120 50 50)"/>
    <circle cx="50" cy="50" r="6" fill="#61DAFB"/>
  </svg>
)

const FigmaLogo = () => (
  <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="10" width="35" height="35" rx="17.5" fill="#FF7262"/>
    <rect x="55" y="10" width="35" height="35" rx="17.5" fill="#1ABCFE"/>
    <rect x="10" y="55" width="35" height="35" rx="17.5" fill="#A259FF"/>
    <rect x="55" y="55" width="35" height="35" rx="17.5" fill="#0ACF83"/>
    <rect x="10" y="100" width="35" height="35" rx="17.5" fill="#FF7262"/>
    <circle cx="72.5" cy="117.5" r="17.5" fill="#1ABCFE"/>
  </svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="2" y="2" width="96" height="66" rx="8" stroke="#D4BC2E" strokeWidth="3" fill="rgba(14,32,47,0.9)"/>
    <rect x="2" y="2" width="96" height="16" rx="8" fill="#D4BC2E" fillOpacity="0.15"/>
    <circle cx="16" cy="10" r="4" fill="#FF5F57"/>
    <circle cx="30" cy="10" r="4" fill="#FFBD2E"/>
    <circle cx="44" cy="10" r="4" fill="#28C840"/>
    <text x="12" y="40" fill="#D4BC2E" fontFamily="monospace" fontSize="11">$ npm run dev</text>
    <text x="12" y="56" fill="rgba(212,188,46,0.5)" fontFamily="monospace" fontSize="10">▶ ready on localhost:3000</text>
  </svg>
)

const GitIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="45" stroke="#F05032" strokeWidth="3" fill="none"/>
    <path d="M72 50L50 28L28 50L50 72L72 50Z" stroke="#F05032" strokeWidth="3" fill="rgba(240,80,50,0.1)"/>
    <circle cx="50" cy="28" r="6" fill="#F05032"/>
    <circle cx="72" cy="50" r="6" fill="#F05032"/>
    <circle cx="50" cy="72" r="6" fill="#F05032"/>
    <circle cx="28" cy="50" r="6" fill="#F05032"/>
    <line x1="50" y1="28" x2="72" y2="50" stroke="#F05032" strokeWidth="2"/>
    <line x1="72" y1="50" x2="50" y2="72" stroke="#F05032" strokeWidth="2"/>
  </svg>
)

const NextjsLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="45" fill="#000" stroke="#fff" strokeWidth="2"/>
    <path d="M30 70V30l45 55H55V50L30 70Z" fill="white"/>
  </svg>
)

// ─── Inline styles ─────────────────────────────────────────────────────────

const styles = `
  .agency-main {
    background: var(--bg-depth, linear-gradient(180deg, #060D15 0%, #0A1722 45%, #0E202F 100%));
    color: #ffffff;
    font-family: var(--font-dm-sans, sans-serif);
  }

  /* ── Intro section ── */
  .agency-intro {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem;
    position: relative;
  }

  .agency-intro::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,188,46,0.35), transparent);
  }

  .agency-intro__eyebrow {
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold-500, #D4BC2E);
    margin-bottom: 1.5rem;
    font-family: var(--font-dm-sans, sans-serif);
  }

  .agency-intro__heading {
    font-family: var(--font-geist-sans, sans-serif);
    font-weight: 800;
    font-size: clamp(2.5rem, 8vw, 6rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #ffffff;
    max-width: 900px;
    margin: 0 auto 2rem;
  }

  .agency-intro__sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: var(--font-dm-sans, sans-serif);
  }

  /* ── Story section ── */
  .agency-content {
    max-width: 720px;
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  .agency-content__chapter {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold-500, #D4BC2E);
    margin-bottom: 2rem;
    font-family: var(--font-dm-sans, sans-serif);
  }

  .agency-article p {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    line-height: 1.9;
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-family: var(--font-dm-sans, sans-serif);
    font-weight: 300;
  }

  .agency-article p:first-of-type::first-letter {
    font-family: var(--font-playfair, serif);
    font-size: 4rem;
    font-weight: 700;
    float: left;
    line-height: 0.8;
    margin-right: 0.15em;
    margin-top: 0.1em;
    color: var(--gold-500, #D4BC2E);
  }

  /* ── Hero reveal ── */
  .hero-reveal {
    position: relative;
    overflow: hidden;
  }

  .hero-reveal__header {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 2;
  }

  .hero-reveal_split {
    position: relative;
  }

  .hero-reveal_split_item {
    overflow: hidden;
  }

  .c-wide-text {
    font-family: var(--font-geist-sans, sans-serif);
    font-weight: 800;
    font-size: clamp(4rem, 14vw, 12rem);
    letter-spacing: -0.04em;
    line-height: 1;
    text-transform: uppercase;
    color: #ffffff;
    white-space: nowrap;
    margin: 0;
    text-align: center;
  }

  .hero-reveal__content {
    position: relative;
    z-index: 1;
  }

  .hero-reveal__content-inner {
    position: relative;
    min-height: 100vh;
  }

  /* ── Floating dev icons ── */
  .hero-reveal__parallax {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .hero-reveal__parallax-react {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 8%;
    left: 5%;
    opacity: 0.75;
  }

  .hero-reveal__parallax-figma {
    position: absolute;
    width: 70px;
    height: 105px;
    top: 5%;
    right: 8%;
    opacity: 0.8;
  }

  .hero-reveal__parallax-terminal {
    position: absolute;
    width: 240px;
    height: 168px;
    top: 35%;
    left: 3%;
    opacity: 0.7;
  }

  .hero-reveal__parallax-git {
    position: absolute;
    width: 90px;
    height: 90px;
    top: 20%;
    right: 4%;
    opacity: 0.65;
  }

  .hero-reveal__parallax-nextjs {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 60%;
    right: 10%;
    opacity: 0.6;
  }

  /* Beliefs text */
  .hero-reveal__content-p {
    position: relative;
    z-index: 2;
    max-width: 640px;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
  }

  .hero-reveal__content-p h3 {
    font-family: var(--font-geist-sans, sans-serif);
    font-weight: 800;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
  }

  .hero-reveal__content-p h3:first-child {
    margin-top: 0;
  }

  .hero-reveal__content-p .belief-eyebrow {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold-500, #D4BC2E);
    font-family: var(--font-dm-sans, sans-serif);
    display: block;
    margin-bottom: 0.75rem;
    margin-top: 3rem;
  }

  .hero-reveal__content-p .belief-eyebrow:first-child {
    margin-top: 0;
  }

  .hero-reveal__content-p p {
    font-size: 1rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.8);
    font-family: var(--font-dm-sans, sans-serif);
    font-weight: 300;
    margin-bottom: 0;
  }

  /* ── After hero content ── */
  .agency-content--after {
    max-width: 720px;
    margin: 0 auto;
    padding: 6rem 2rem;
    border-top: 1px solid rgba(212,188,46,0.15);
  }

  .agency-content--after p {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    line-height: 1.9;
    color: rgba(255,255,255,0.85);
    margin-bottom: 2rem;
    font-family: var(--font-dm-sans, sans-serif);
    font-weight: 300;
  }

  .agency-cta {
    display: flex;
    justify-content: center;
    padding: 4rem 2rem 8rem;
  }

  .agency-cta a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(212,188,46,0.35);
    color: var(--gold-500, #D4BC2E);
    padding: 14px 36px;
    border-radius: 100px;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    font-family: var(--font-playfair, serif);
    font-style: italic;
    font-weight: 700;
    transition: all 0.3s;
  }

  .agency-cta a:hover {
    background: rgba(212,188,46,0.08);
    border-color: rgba(212,188,46,0.6);
  }
`

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
            scrub: true
          }
        })
        .fromTo(contentEl, { y: '50%' }, { y: '0%', ease: 'none' }, 0.2)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: `+=${heroBoxHeight > contentHeight ? heroBoxHeight : contentHeight}`,
          scrub: true,
          pin: true
        }
      })

      tl.fromTo(
        heroBox,
        { clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)', duration: 0.4, ease: 'power4.inOut' }
      )

      if (heroHeadings.length >= 2) {
        tl.fromTo(heroHeadings[0], { y: '0%' }, { y: '-30%', ease: 'power3.inOut' }, 0)
        tl.fromTo(heroHeadings[1], { y: '0%' }, { y: '30%', ease: 'power3.inOut' }, 0)
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
          scrub: true
        }
      })
    }

    parallaxScrollBySpeed('.hero-reveal__parallax-react', 15)
    parallaxScrollBySpeed('.hero-reveal__parallax-figma', 13)
    parallaxScrollBySpeed('.hero-reveal__parallax-nextjs', 6)
    parallaxScrollBySpeed('.hero-reveal__parallax-git', 23)
    parallaxScrollBySpeed('.hero-reveal__parallax-terminal', 5)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      <style>{styles}</style>
      <main className="agency-main">

        {/* ── 1. Intro ── */}
        <section className="agency-intro">
          <p className="agency-intro__eyebrow">SkillHub Digital Agency</p>
          <h1 className="agency-intro__heading">
            Built on Vision.<br />Driven by Creativity.
          </h1>
          <p className="agency-intro__sub">Sandton, Johannesburg · Est. 2024</p>
        </section>

        {/* ── 2. Our Story ── */}
        <section className="agency-content">
          <article className="agency-article">
            <p className="agency-content__chapter">Our Story</p>
            <p>
              SkillHub Digital Agency was founded by Mr. Jimu with a singular, uncompromising conviction:
              that Africa deserves digital work that holds its own anywhere in the world. Not work that is
              "good for around here." Work that is genuinely exceptional — built with the same rigour,
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

        {/* ── 3. Hero reveal — "WHAT WE BELIEVE" with dev icons ── */}
        <section className="hero-reveal">
          <article>
            <header className="hero-reveal__header">
              <div className="hero-reveal_split">
                <div className="hero-reveal_split_item">
                  <p className="c-wide-text -split">WHAT WE BELIEVE</p>
                </div>
                <div className="hero-reveal_split_item" aria-hidden="true">
                  <p className="c-wide-text -split" aria-hidden="true">WHAT WE BELIEVE</p>
                </div>
              </div>
            </header>

            <div className="hero-reveal__content">
              <div className="hero-reveal__content-inner">

                {/* Floating dev icons — replace Alice/clock/book/kettle/card */}
                <div className="hero-reveal__parallax">
                  <div className="hero-reveal__parallax-react">
                    <ReactLogo />
                  </div>
                  <div className="hero-reveal__parallax-figma">
                    <FigmaLogo />
                  </div>
                  <div className="hero-reveal__parallax-terminal">
                    <TerminalIcon />
                  </div>
                  <div className="hero-reveal__parallax-git">
                    <GitIcon />
                  </div>
                  <div className="hero-reveal__parallax-nextjs">
                    <NextjsLogo />
                  </div>
                </div>

                {/* Beliefs content */}
                <div className="hero-reveal__content-p">

                  <span className="belief-eyebrow">Innovation Begins with Freedom</span>
                  <h3>Creativity flourishes when people are free to explore.</h3>
                  <p>
                    We believe the best digital work comes from teams that are trusted to experiment,
                    make mistakes, and push past the first idea. By giving our people space to explore
                    without fear, we consistently arrive at solutions that are thoughtful, original,
                    and genuinely future-focused — not just what was expected, but what was needed.
                  </p>

                  <span className="belief-eyebrow">Partnership Over Transactions</span>
                  <h3>Every client is a long-term partner, not a project number.</h3>
                  <p>
                    We take the time to understand your business, your goals, and what success actually
                    means for you — before we write a single line of code or open a design file.
                    That groundwork is what separates work that looks good from work that performs,
                    endures, and keeps delivering value long after launch day.
                  </p>

                  <span className="belief-eyebrow">Excellence in Every Detail</span>
                  <h3>Quality isn't a checkpoint. It's the standard we start from.</h3>
                  <p>
                    From the first conversation to the final handoff, we're committed to work that
                    reflects precision, professionalism, and genuine craft. The things most people never
                    notice — the micro-interaction that feels exactly right, the performance optimisation
                    that makes the page load in half a second — are the things we obsess over most.
                  </p>

                  <span className="belief-eyebrow">Always Learning. Always Growing.</span>
                  <h3>Technology evolves every day, and so do we.</h3>
                  <p>
                    The tools we use today will be different from the ones we rely on in two years.
                    That's not a threat — it's the part of this work we find most energising. We
                    embrace new frameworks, new design systems, and new ways of thinking, because
                    staying current is how we keep our clients ahead in a landscape that never
                    stands still.
                  </p>

                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ── 4. Closing section ── */}
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
            <a href="/contact">
              Start a conversation →
            </a>
          </div>
        </section>

      </main>
    </>
  )
}