export default function Footer() {
  return (
    <footer
      className="w-full pt-20 pb-10 px-10 md:px-20 overflow-hidden"
      style={{ background: 'var(--bg-depth)' }}
    >
      {/* Big wordmark */}
      <div className="mb-16 overflow-hidden">
        <h2
          style={{
            fontFamily: 'var(--font-masthead)',
            letterSpacing: '-0.02em',
            lineHeight: 0.85,
            WebkitTextStroke: '1px rgba(255,255,255,0.15)',
          }}
          className="text-[clamp(5rem,18vw,16rem)] font-bold text-transparent select-none"
        >
          SkillHub
        </h2>
      </div>

      {/* Footer info row */}
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 pt-12">

        {/* Left — tagline */}
        <div className="flex flex-col gap-3 max-w-xs">
          <p
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
            className="text-lg text-white/70 leading-snug"
          >
            Transforming ideas into digital experiences.
          </p>
          <span
            style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.06em' }}
            className="text-[11px] uppercase text-white/30"
          >
            Sandton, Johannesburg — South Africa
          </span>
        </div>

        {/* Centre — contact details */}
        <div className="flex flex-col gap-3">
          <span
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
            className="text-[10px] uppercase text-[#E0CE00] mb-1"
          >
            Contact
          </span>
          <a
            href="tel:+27000000000"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            +27 (0) 00 000 0000
          </a>
          <a
            href="mailto:hello@skillhubdigital.africa"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            hello@skillhubdigital.africa
          </a>
          <span
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            className="text-sm text-white/50"
          >
            Nelson Mandela Square, Sandton
          </span>
        </div>

        {/* Right — socials */}
        <div className="flex flex-col gap-3">
          <span
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
            className="text-[10px] uppercase text-[#E0CE00] mb-1"
          >
            Connect
          </span>
          <a
            href="https://linkedin.com/company/skillhub-digital"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/skillhubdigital"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://skillhubdigital.africa"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            skillhubdigital.africa
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-6">
        <span
          style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.06em' }}
          className="text-[11px] uppercase text-white/20"
        >
          © {new Date().getFullYear()} SkillHub Digital Agency. All rights reserved.
        </span>
        <span
          style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.06em' }}
          className="text-[11px] uppercase text-white/20"
        >
          QCTO Accredited · Sandton, ZA
        </span>
      </div>
    </footer>
  )
}