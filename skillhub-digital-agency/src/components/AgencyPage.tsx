'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Dev icons — monochrome, recognisable, falling like Alice's objects ──────

const GitHubIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" fill="#000"
      d="M50 5C25.1 5 5 25.1 5 50c0 19.9 12.9 36.8 30.8 42.8 2.3.4 3.1-1 3.1-2.2v-7.7c-12.6 2.7-15.3-6.1-15.3-6.1-2.1-5.3-5.1-6.7-5.1-6.7-4.1-2.8.3-2.8.3-2.8 4.6.3 7 4.7 7 4.7 4.1 7 10.7 5 13.3 3.8.4-3 1.6-5 2.9-6.1-10.1-1.1-20.7-5-20.7-22.4 0-4.9 1.8-9 4.7-12.1-.5-1.2-2-5.7.4-11.9 0 0 3.8-1.2 12.5 4.7a43.3 43.3 0 0 1 22.8 0c8.7-5.9 12.5-4.7 12.5-4.7 2.5 6.2.9 10.7.4 11.9 2.9 3.2 4.7 7.2 4.7 12.1 0 17.4-10.6 21.2-20.7 22.3 1.6 1.4 3.1 4.2 3.1 8.4v12.5c0 1.2.8 2.6 3.1 2.2C82.1 86.8 95 69.9 95 50 95 25.1 74.9 5 50 5Z"/>
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="100" height="100" rx="8" fill="#000"/>
    <path fill="white"
      d="M56.5 51.5V56c1.4.8 3 1.3 4.8 1.3 4.8 0 7.7-2.5 7.7-6.7 0-3.5-2-5.5-6.1-7-2.9-1.1-4-1.8-4-3.3 0-1.4 1.1-2.3 2.9-2.3 1.6 0 3.2.6 4.8 1.6v-4.1c-1.4-.8-3.1-1.2-4.9-1.2-4.5 0-7.3 2.5-7.3 6.5 0 3.4 2.1 5.4 5.9 6.8 3 1.1 4.2 1.9 4.2 3.5 0 1.6-1.2 2.5-3.2 2.5-2 0-3.9-.7-5.8-2.1ZM42 38.3h7.5v-4H28v4h7.5V62H42V38.3Z"/>
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
    <path fill="#000"
      d="M74.3 5.4 51.6 27.3 32.9 12.4 5 23.9v52.2l27.9 11.5 18.7-14.9 22.7 21.9L95 87V13L74.3 5.4ZM27.9 64.3 13.6 50l14.3-14.3 14.3 14.3-14.3 14.3ZM50 50 35.7 35.7 50 21.4l14.3 14.3L50 50Zm22.1 14.3L57.8 50l14.3-14.3 14.3 14.3-14.3 14.3Z"/>
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fill="#000"
      d="M25 7.5C31.7 7.5 35.8 10.8 37.5 17.5c2.5-3.3 5.4-4.6 8.8-3.8 2.4.6 4.2 2.1 5.2 4.5C53.2 13.5 57.3 10.2 64 10.2c8.3 0 12.5 5 12.5 15-1.7-2.5-3.8-3.8-6.3-3.8-4.3 0-6.4 2.5-9.4 6.3C58.5 31.5 55 35 47.5 35c-6.7 0-10.8-3.3-12.5-10-2.5 3.3-5.4 4.6-8.8 3.8-2.4-.6-4.2-2.1-5.2-4.5C19.3 29 15.2 32.5 8.5 32.5 .2 32.5-4 27.5-4 17.5 -2.3 20 -.2 21.3 2.3 21.3c4.3 0 6.4-2.5 9.4-6.3 2.3-3.8 5.8-7.5 13.3-7.5ZM63 35c-6.7 0-10.8-3.3-12.5-10-2.5 3.3-5.4 4.6-8.8 3.8-2.4-.6-4.2-2.1-5.2-4.5C34.8 29 30.7 32.5 24 32.5c-6 0-10-2.9-12-8.8.5 7 4.5 11.3 12 11.3 6.7 0 10.8-3.3 12.5-10 2.5 3.3 5.4 4.6 8.8 3.8 2.4-.6 4.2-2.1 5.2-4.5C52.2 29 56.3 32.5 63 32.5c8.3 0 12.5-5 12.5-15-1.7 2.5-3.8 3.8-6.3 3.8-4.3 0-6.4-2.5-9.4-6.3C57.5 11.2 54 7.5 46.5 7.5"/>
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
      }).fromTo(contentEl, { y: '50%' }, { y: '0%', ease: 'none' }, 0.2)

      // Pin the section and animate each half independently —
      // top half slides up out of view, bottom half slides down out of view,
      // revealing the light "What We Believe" world behind them.
      // The two split_items together look like ONE sentence because they are
      // stacked flush. No clip-path on the header box itself.
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

    // Different speeds create the tumbling/falling effect
    parallaxScrollBySpeed('.hero-reveal__parallax-github', 15)
    parallaxScrollBySpeed('.hero-reveal__parallax-typescript', 9)
    parallaxScrollBySpeed('.hero-reveal__parallax-terminal', 5)
    parallaxScrollBySpeed('.hero-reveal__parallax-vscode', 20)
    parallaxScrollBySpeed('.hero-reveal__parallax-tailwind', 12)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main className="agency-main">

      {/* ── 1. Big intro — "Built on Vision. Driven by Creativity." ── */}
      <section className="agency-intro">
        <p className="agency-intro__eyebrow">SkillHub Digital Agency</p>
        <h1 className="agency-intro__heading">
          Built on Vision.<br />Driven by Creativity.
        </h1>
      </section>

      {/* ── 2. Our Story — heading sits close above the paragraphs ── */}
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

      {/* ── 3. GSAP reveal — "WHAT WE BELIEVE" splits ONCE to reveal light world ── */}
      <section className="hero-reveal">
        <article>
          {/* The two split_items are required for the GSAP clip animation —
              top half slides up, bottom half slides down, revealing the
              content behind. There is only ONE visible text instance;
              the second item is aria-hidden and only exists for the animation. */}
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

              {/* Dev icons — rotated, positioned to overlap/fall across the text */}
              <div className="hero-reveal__parallax">
                <div className="hero-reveal__parallax-github"><GitHubIcon /></div>
                <div className="hero-reveal__parallax-typescript"><TypeScriptIcon /></div>
                <div className="hero-reveal__parallax-terminal"><TerminalIcon /></div>
                <div className="hero-reveal__parallax-vscode"><VSCodeIcon /></div>
                <div className="hero-reveal__parallax-tailwind"><TailwindIcon /></div>
              </div>

              {/* Beliefs — readable article layout on the warm cream background */}
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