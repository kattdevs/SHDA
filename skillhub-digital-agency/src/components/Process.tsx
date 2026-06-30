"use client"

import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

// ─── SkillHub's actual process — replace copy as needed ───────────────────────

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Discovery & Research",
    description:
      "We start by understanding your brand, your market, and the people you're trying to reach. We look at competitors, industry trends, and user expectations so every decision that follows is grounded in real insight, not guesswork.",
  },
  {
    id: "process-2",
    title: "Strategy & Wireframing",
    description:
      "With research in hand, we map the structure — sitemaps, user flows, and wireframes that lay out how your brand's story will unfold across the experience. This is where the bones of the project get tested before anything looks finished.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Our designers bring the vision to life. We focus on craft — typography, color, layout, motion — ensuring the final look is not just polished but unmistakably yours, built on the strategy that came before it.",
  },
  {
    id: "process-4",
    title: "Development & Testing",
    description:
      "Our developers turn the designs into a fully functional product — fast, responsive, and built to scale. Every build goes through rigorous testing across devices before anything reaches your audience.",
  },
  {
    id: "process-5",
    title: "Launch & Ongoing Support",
    description:
      "Our commitment doesn't end at launch. We provide post-launch support, monitor performance, and stay available as your brand grows. This process isn't just about shipping a project — it's about building something that keeps working for you.",
  },
]

export default function Process() {
  return (
    <section
      className="w-full py-20 px-6 md:px-12 xl:px-20 relative"
      style={{ background: "var(--bg-depth)" }}
    >
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-16 max-w-7xl mx-auto">

        {/* ── Sticky intro column ── */}
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12 flex flex-col justify-center">
          <h5
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#FFFFFF" }}
          >
            Our Process
          </h5>
          <h2
            className="mb-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 800, color: "#FFFFFF" }}
          >
            How we bring your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              vision to life
            </span>
          </h2>
          <p
            className="max-w-prose text-sm md:text-base"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, lineHeight: 1.85, color: "#FFFFFF" }}
          >
            Every project starts with a conversation. We take time to
            understand your brand identity, your goals, and what success
            actually looks like for you — then we build a process around
            getting you there, one deliberate phase at a time.
          </p>
        </div>

        {/* ── Stacking cards ── */}
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-2xl border p-8 md:p-10 shadow-md backdrop-blur-md"
              style={{
                background: "var(--gradient-charcoal-card)",
                borderColor: "var(--charcoal-line)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3
                  className="text-xl md:text-2xl tracking-tight"
                  style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 700, color: "#FFFFFF" }}
                >
                  {phase.title}
                </h3>
                <span
                  className="text-2xl md:text-3xl font-bold flex-shrink-0"
                  style={{ fontFamily: "var(--font-geist-sans)", color: "var(--gold-500)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p
                className="text-sm md:text-base"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, lineHeight: 1.8, color: "#FFFFFF" }}
              >
                {phase.description}
              </p>

              {/* Thin gold underline accent */}
              <div
                className="mt-6 h-px w-12"
                style={{ background: "var(--gold-glow-ring)" }}
              />
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>

      {/* Thin gold divider — matches the rest of the site's section transitions */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold-glow-ring), transparent)" }}
      />
    </section>
  )
}
