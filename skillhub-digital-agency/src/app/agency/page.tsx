import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const serviceCards = [
  {
    number: '01',
    title: 'Website Design & Development',
    blurb: 'Responsive, conversion-focused websites built for corporate, e-commerce, education, NGO, and government clients.',
    visual: null,
  },
  {
    number: '02',
    title: 'Custom Application Development',
    blurb: 'Bespoke platforms — portals, booking systems, automation tools, and enterprise apps built around your workflows.',
    visual: null,
  },
  {
    number: '03',
    title: 'Learning Management Systems',
    blurb: 'End-to-end LMS builds backed by SkillHub International\'s deep experience in skills development and corporate training.',
    visual: null,
  },
  {
    number: '04',
    title: 'Mobile Application Development',
    blurb: 'Android and iOS apps for business, education, workforce management, and customer engagement.',
    visual: null,
  },
  {
    number: '05',
    title: 'Digital Transformation',
    blurb: 'Strategy, automation, system integration, and cloud migration — pragmatic transformation with measurable outcomes.',
    visual: null,
  },
  {
    number: '06',
    title: 'Branding & Creative Design',
    blurb: 'Logos, identity systems, UI/UX, and content that communicate clearly and hold up at every touchpoint.',
    visual: null,
  },
  {
    number: '07',
    title: 'Cybersecurity Services',
    blurb: 'Risk assessments, penetration testing, POPIA compliance, cloud security, incident response, and security awareness training.',
    visual: null,
  },
]

// Visual showcase grid — replace null values with your image paths
const showcaseItems: { src: string | null; tall?: boolean; label?: string }[] = [
  { src: null, tall: true,  label: 'Web Project' },
  { src: null,              label: 'Brand Identity' },
  { src: null,              label: 'Mobile App' },
  { src: null,              label: 'LMS Platform' },
  { src: null, tall: true,  label: 'Digital Campaign' },
  { src: null,              label: 'Web Application' },
  { src: null,              label: 'UI Design' },
  { src: null,              label: 'E-Commerce' },
]

export default function AgencyPage() {
  return (
    <main style={{ backgroundColor: '#0E202F' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-52 pb-20 px-10 md:px-20">
        <div className="flex items-center gap-6 mb-12">
          <span
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
            className="text-[11px] uppercase text-[#E0CE00]"
          >
            The Agency
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <h1
            style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
            className="text-[clamp(3rem,8vw,7rem)] font-bold text-white max-w-3xl"
          >
            Work that{' '}
            <em style={{ fontStyle: 'italic' }} className="text-[#E0CE00]">
              speaks for itself.
            </em>
          </h1>
          <p
            style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.8 }}
            className="text-[0.95rem] text-white/50 max-w-xs md:text-right flex-shrink-0"
          >
            Strategy, design, and development for organisations that take their digital presence seriously.
          </p>
        </div>
      </section>

      {/* ── VISUAL SHOWCASE GRID ── */}
      <section className="px-10 md:px-20 pb-28">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {showcaseItems.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden flex items-end relative group"
              style={{
                height: item.tall ? '420px' : '260px',
                background: item.src ? 'transparent' : `hsl(${210 + i * 8}, 25%, ${12 + i * 2}%)`,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {item.src ? (
                <img src={item.src} className="w-full h-full object-cover" alt={item.label} />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                    className="text-[10px] uppercase text-white/15"
                  >
                    {item.label}
                  </span>
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#E0CE00]/0 group-hover:bg-[#E0CE00]/05 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="px-10 md:px-20">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-white/10" />
          <span
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
            className="text-white/20 text-sm"
          >
            Our Services
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <section className="px-10 md:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.number}
              className="group flex flex-col rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {/* Visual slot */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: '200px',
                  background: card.visual
                    ? 'transparent'
                    : 'rgba(255,255,255,0.03)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {card.visual ? (
                  <img src={card.visual!} className="w-full h-full object-cover" alt={card.title} />
                ) : (
                  <span
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                    className="text-[10px] uppercase text-white/10"
                  >
                    Add mockup
                  </span>
                )}
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                  className="text-[10px] uppercase text-[#E0CE00]"
                >
                  {card.number}
                </span>
                <h3
                  style={{ fontFamily: 'var(--font-playfair)' }}
                  className="text-lg font-bold italic text-white group-hover:text-[#E0CE00] transition-colors duration-300"
                >
                  {card.title}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.75 }}
                  className="text-[13px] text-white/45 flex-1"
                >
                  {card.blurb}
                </p>
                <Link
                  href="/services"
                  style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }}
                  className="text-[11px] uppercase text-white/30 hover:text-[#E0CE00] transition-colors duration-200 mt-2"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="px-10 md:px-20 py-28 flex flex-col md:flex-row items-center justify-between gap-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <h2
          style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.1 }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold text-white max-w-xl"
        >
          Ready to start your{' '}
          <em className="text-[#E0CE00] italic">next project?</em>
        </h2>
        <Link
          href="/contact"
          style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
          className="flex-shrink-0 text-base font-bold italic text-[#0E202F] bg-[#E0CE00] px-10 py-4 hover:bg-white hover:text-[#0E202F] transition-colors duration-300"
        >
          Let's Connect
        </Link>
      </section>

      <Footer />
    </main>
  )
}