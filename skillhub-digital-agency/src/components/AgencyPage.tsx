'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Monochrome dev icons (black on light background) ─────────────────────

const ReactLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#000" strokeWidth="3" fill="none" transform="rotate(0 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#000" strokeWidth="3" fill="none" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#000" strokeWidth="3" fill="none" transform="rotate(120 50 50)"/>
    <circle cx="50" cy="50" r="6" fill="#000"/>
  </svg>
)

const FigmaLogo = () => (
  <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="10" width="35" height="35" rx="17.5" fill="#000"/>
    <rect x="55" y="10" width="35" height="35" rx="17.5" fill="#333"/>
    <rect x="10" y="55" width="35" height="35" rx="17.5" fill="#555"/>
    <rect x="55" y="55" width="35" height="35" rx="17.5" fill="#222"/>
    <rect x="10" y="100" width="35" height="35" rx="17.5" fill="#000"/>
    <circle cx="72.5" cy="117.5" r="17.5" fill="#444"/>
  </svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="2" y="2" width="96" height="66" rx="8" stroke="#000" strokeWidth="3" fill="rgba(0,0,0,0.04)"/>
    <rect x="2" y="2" width="96" height="16" rx="8" fill="rgba(0,0,0,0.08)"/>
    <circle cx="16" cy="10" r="4" fill="#000"/>
    <circle cx="30" cy="10" r="4" fill="#555"/>
    <circle cx="44" cy="10" r="4" fill="#888"/>
    <text x="12" y="40" fill="#000" fontFamily="monospace" fontSize="11">$ npm run dev</text>
    <text x="12" y="56" fill="rgba(0,0,0,0.4)" fontFamily="monospace" fontSize="10">▶ ready on localhost:3000</text>
  </svg>
)

const GitIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="45" stroke="#000" strokeWidth="3" fill="none"/>
    <path d="M72 50L50 28L28 50L50 72L72 50Z" stroke="#000" strokeWidth="3" fill="rgba(0,0,0,0.06)"/>
    <circle cx="50" cy="28" r="6" fill="#000"/>
    <circle cx="72" cy="50" r="6" fill="#000"/>
    <circle cx="50" cy="72" r="6" fill="#000"/>
    <circle cx="28" cy="50" r="6" fill="#000"/>
    <line x1="50" y1="28" x2="72" y2="50" stroke="#000" strokeWidth="2"/>
    <line x1="72" y1="50" x2="50" y2="72" stroke="#000" strokeWidth="2"/>
  </svg>
)

const NextjsLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="45" fill="#000" stroke="#000" strokeWidth="2"/>
    <path d="M30 70V30l45 55H55V50L30 70Z" fill="white"/>
  </svg>
)

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
        })
        .fromTo(contentEl, { y: '50%' }, { y: '0%', ease: 'none' }, 0.2)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: `+=${heroBoxHeight > contentHeight ? heroBoxHeight : contentHeight}`,
          scrub: true,
          pin: true,
        },
      })

      tl.fromTo(
        heroBox,
        { clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)', duration: 0.4, ease: 'power4.inOut' }
      )

      if (heroHeadings.length >= 2) {
        tl.fromTo(heroHeadings[0], { y: '0%' }, { y: '-30%', ease: 'power3.inOut' }, 0)
        tl.fromTo(heroHeadings[1], { y: '0%' }, { y: '30%',  ease: 'power3.inOut' }, 0)
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
    <main className="agency-main">

      {/* ── 1. Intro ── */}
      <section className="agency-intro">
        <p className="agency-intro__eyebrow">SkillHub Digital Agency</p>
        <h1 className="agency-intro__heading">
          Built on Vision.<br />Driven by Creativity.
        </h1>
        <p className="agency-intro__sub">Sandton, Johannesburg · Est. 2024</p>
      </section>

      {/* ── 2. Our Story (dark section) ── */}
      <section className="agency-content">
        <article className="agency-article">
          <p className="agency-content__chapter">Our Story</p>
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

      {/* ── 3. GSAP reveal — dark splits to reveal light world ── */}
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

              {/* Monochrome icons floating over the light content */}
              <div className="hero-reveal__parallax">
                <div className="hero-reveal__parallax-react"><ReactLogo /></div>
                <div className="hero-reveal__parallax-figma"><FigmaLogo /></div>
                <div className="hero-reveal__parallax-terminal"><TerminalIcon /></div>
                <div className="hero-reveal__parallax-git"><GitIcon /></div>
                <div className="hero-reveal__parallax-nextjs"><NextjsLogo /></div>
              </div>

              {/* Beliefs — normal article reading layout on the light bg */}
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

      {/* ── 4. Closing (back to dark) ── */}
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
          <a href="/contact">Start a conversation →</a>
        </div>
      </section>

    </main>
  )
}