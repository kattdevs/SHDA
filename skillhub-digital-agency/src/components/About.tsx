"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section
      className="py-8 px-4 relative"
      style={{ background: "var(--bg-depth)" }}
      ref={heroRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header — eyebrow + social icons, gold spinner instead of red */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span
                className="animate-spin"
                style={{ color: "var(--gold-500)" }}
              >
                ✱
              </span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--ivory-100)", fontFamily: "var(--font-dm-sans)" }}
              >
                WHO WE ARE
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                style={{ borderColor: "var(--charcoal-line)", backgroundColor: "var(--charcoal-800)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: "var(--ivory-100)" }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="currentColor" />
                  <circle cx="4" cy="4" r="2" fill="currentColor" />
                </svg>
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                style={{ borderColor: "var(--charcoal-line)", backgroundColor: "var(--charcoal-800)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--ivory-100)" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                style={{ borderColor: "var(--charcoal-line)", backgroundColor: "var(--charcoal-800)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--ivory-100)" }}>
                  <path d="M0 4.5h7.8c4.5 0 6 2 6 4.5 0 1.8-1 3-2.5 3.6 2 .6 3.2 2 3.2 4.2 0 3-2.3 5-7 5H0v-17.3zM4 10.5h3.3c1.5 0 2.5-.8 2.5-2.2 0-1.4-1-2-2.5-2H4v4.2zm0 7.5h3.6c1.7 0 2.8-.8 2.8-2.3 0-1.5-1-2.3-2.8-2.3H4V18zM17 4h7v1.5h-7zM24 13.5c0-3.5-2-6-5.7-6-3.5 0-6 2.5-6 6.3 0 4 2.6 6.2 6.2 6.2 2.7 0 4.6-1.2 5.3-3.5h-3.2c-.4.8-1.1 1.2-2.1 1.2-1.5 0-2.6-1-2.7-2.7h8.1c0-.5.1-1 .1-1.5zM15.9 11.8c.2-1.3 1.1-2.1 2.4-2.1 1.4 0 2.2.9 2.3 2.1h-4.7z" />
                </svg>
              </TimelineContent>
            </div>
          </div>

          {/* Clipped image — SkillHub building photo, replaces stock Unsplash image */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg
              className="w-full"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath id="clip-inverted" clipPathUnits={"objectBoundingBox"}>
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="/about-building.jpg"
              ></image>
            </svg>

            {/* Thin gold edge — frames the clipped shape subtly */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px var(--gold-glow-faint)",
              }}
            />
          </TimelineContent>

          {/* Stats row — gold numerals instead of red */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold" style={{ color: "var(--gold-500)", fontFamily: "var(--font-geist-sans)" }}>5+</span>
                <span style={{ color: "var(--ivory-500)", fontFamily: "var(--font-dm-sans)" }}>years building digital products</span>
                <span style={{ color: "var(--charcoal-line)" }}>|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold" style={{ color: "var(--gold-500)", fontFamily: "var(--font-geist-sans)" }}>50+</span>
                <span style={{ color: "var(--ivory-500)", fontFamily: "var(--font-dm-sans)" }}>clients served</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="font-semibold" style={{ color: "var(--gold-500)", fontFamily: "var(--font-geist-sans)" }}>9</span>
                <span className="uppercase" style={{ color: "var(--ivory-500)", fontFamily: "var(--font-dm-sans)" }}>service areas</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="font-bold" style={{ color: "var(--gold-500)", fontFamily: "var(--font-geist-sans)" }}>Sandton</span>
                <span style={{ color: "var(--ivory-500)", fontFamily: "var(--font-dm-sans)" }}>headquartered</span>
                <span className="lg:hidden block" style={{ color: "var(--charcoal-line)" }}>|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          <div className="md:col-span-2">
            <h1
              className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] mb-8"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 800,
                color: "var(--ivory-100)",
              }}
            >
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.6,
                }}
              >
                Building Digital Work That Holds Its Own, Anywhere.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p
                  className="leading-relaxed text-justify"
                  style={{ color: "var(--ivory-100)", fontFamily: "var(--font-dm-sans)", fontWeight: 300, lineHeight: 1.85 }}
                >
                  SkillHub Digital started in Sandton with a simple frustration:
                  too many African businesses were being sold templated sites
                  and recycled strategy decks. We set out to build a studio
                  that treats every brand with the same rigor agencies abroad
                  bring to global clients.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p
                  className="leading-relaxed text-justify"
                  style={{ color: "var(--ivory-100)", fontFamily: "var(--font-dm-sans)", fontWeight: 300, lineHeight: 1.85 }}
                >
                  Our team of strategists, designers, and developers works
                  end-to-end — research, identity, interface, build, and the
                  campaigns that bring it all to life. Every project gets the
                  same standard, whether it's a startup or an institution.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--gold-500)", fontFamily: "var(--font-geist-sans)" }}
              >
                SKILLHUB
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm mb-8"
                style={{ color: "var(--ivory-500)", fontFamily: "var(--font-dm-sans)" }}
              >
                Strategy | Design | Development
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p
                  className="font-medium mb-4"
                  style={{ color: "var(--ivory-100)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Ready to bring your brand's next chapter to life?
                </p>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out px-5 py-3 rounded-lg cursor-pointer font-semibold"
                style={{
                  background: "linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 100%)",
                  color: "var(--navy-950)",
                  boxShadow: "var(--shadow-gold-glow)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                LET'S COLLABORATE <ArrowRight size={18} />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>

      {/* Thin gold accent line — matches Hero's section divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold-glow-ring), transparent)" }}
      />
    </section>
  );
}