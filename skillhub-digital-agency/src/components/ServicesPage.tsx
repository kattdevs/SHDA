'use client'

import { useState, useEffect } from 'react'
import FlowingMenu from '@/components/FlowingMenu'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose,
} from '@/components/ui/dialog'
import { GlassButton, GlassFilter } from '@/components/ui/liquid-glass'
import { X } from 'lucide-react'

// ─── Service data ─────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 1,
    title: 'Website Design & Development',
    description: 'Professional, responsive websites that drive growth',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
    intro: 'We create professional, responsive, and user-friendly websites that strengthen your online presence and drive business growth — from corporate sites to e-commerce platforms.',
    sections: [
      {
        label: 'Corporate & Institutional',
        items: ['Corporate websites', 'Government & public sector websites', 'Educational institution websites', 'NGO & non-profit websites'],
      },
      {
        label: 'Commerce & Campaigns',
        items: ['E-commerce websites', 'Landing pages & campaign websites', 'Online booking & product catalogues'],
      },
      {
        label: 'Ongoing Support',
        items: ['Website maintenance & support', 'Performance optimisation', 'Security updates & monitoring', 'Content management system training'],
      },
    ],
  },
  {
    id: 2,
    title: 'Custom Application Development',
    description: 'Bespoke web & mobile apps tailored to your operations',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    intro: 'We develop bespoke web and mobile applications tailored to your unique operational requirements — from workflow automation to full enterprise platforms.',
    sections: [
      {
        label: 'Business Systems',
        items: ['Business process automation systems', 'Enterprise applications', 'Data management & reporting platforms', 'ERP & CRM integrations'],
      },
      {
        label: 'Portals & Platforms',
        items: ['Customer portals', 'Employee self-service platforms', 'Membership management systems', 'Booking & reservation systems'],
      },
      {
        label: 'Integration & APIs',
        items: ['API development & third-party integration', 'Payment gateway integration', 'Cloud service connectivity', 'Legacy system modernisation'],
      },
    ],
  },
  {
    id: 3,
    title: 'Learning Management Systems',
    description: 'Comprehensive LMS for training & development',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
    intro: 'As a leader in skills development, SkillHub delivers full LMS design, development, and implementation — built for corporates, education institutions, and government training programmes.',
    sections: [
      {
        label: 'Platform Development',
        items: ['Corporate training platforms', 'Compliance & certification systems', 'E-learning portals', 'Moodle customisation & deployment'],
      },
      {
        label: 'Assessment & Tracking',
        items: ['Online assessment systems', 'Learner management solutions', 'Skills development tracking systems', 'Automated reporting & analytics'],
      },
      {
        label: 'Content & Integration',
        items: ['Virtual classroom integration', 'SCORM & xAPI content support', 'Video & multimedia content embedding', 'Third-party tool integrations'],
      },
    ],
  },
  {
    id: 4,
    title: 'Mobile Application Development',
    description: 'Android & iOS apps with exceptional user experience',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
    intro: 'We build modern mobile applications that deliver exceptional user experiences across Android and iOS — from internal workforce tools to public-facing engagement apps.',
    sections: [
      {
        label: 'Business & Internal Apps',
        items: ['Internal workforce applications', 'Business process mobile apps', 'Event management apps', 'Field service & operations apps'],
      },
      {
        label: 'Engagement & Community',
        items: ['Customer engagement apps', 'Community & membership apps', 'Educational & e-learning apps', 'Loyalty & rewards programmes'],
      },
      {
        label: 'Development & Deployment',
        items: ['React Native cross-platform builds', 'Native Android & iOS development', 'App Store & Google Play deployment', 'Ongoing maintenance & updates'],
      },
    ],
  },
  {
    id: 5,
    title: 'Digital Transformation Solutions',
    description: 'Modernise operations through technology-driven change',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    intro: 'We help organisations modernise through technology — improving efficiency, reducing manual effort, and positioning clients for future growth through integrated digital solutions.',
    sections: [
      {
        label: 'Strategy & Consulting',
        items: ['Digital strategy development', 'Technology consulting & roadmapping', 'Digital process optimisation', 'Change management support'],
      },
      {
        label: 'Automation & Integration',
        items: ['Workflow automation', 'System integration & data pipelines', 'API connectivity', 'Document management digitalisation'],
      },
      {
        label: 'Cloud & Infrastructure',
        items: ['Cloud-based solution design', 'Cloud migration planning & execution', 'Infrastructure architecture reviews', 'Scalability & performance planning'],
      },
    ],
  },
  {
    id: 6,
    title: 'Branding & Creative Design',
    description: 'Visual identities that leave a lasting mark',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&auto=format&fit=crop',
    intro: 'Our creative team develops compelling visual identities and digital content that build brand recognition, inspire trust, and engage audiences across every touchpoint.',
    sections: [
      {
        label: 'Identity & Brand',
        items: ['Logo design', 'Corporate identity development', 'Brand guidelines & style systems', 'Rebranding & brand refresh'],
      },
      {
        label: 'UI/UX Design',
        items: ['UI/UX design for web & mobile', 'Wireframing & prototyping', 'Design system development', 'User research & usability testing'],
      },
      {
        label: 'Content & Collateral',
        items: ['Marketing collateral & print design', 'Social media graphics & templates', 'Digital content creation', 'Pitch decks & presentation design'],
      },
    ],
  },
  {
    id: 7,
    title: 'Cybersecurity Services',
    description: 'Assess. Protect. Test. Respond. Educate.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    intro: 'We provide end-to-end cybersecurity services that protect your people, systems, and data — from risk assessment and POPIA compliance through to staff awareness training and incident response.',
    sections: [
      {
        label: 'Assess',
        items: ['Cybersecurity Risk Assessments', 'Vulnerability Assessments', 'Security Maturity Reviews', 'Gap Analysis', 'Third-party Risk Reviews'],
      },
      {
        label: 'Protect',
        items: ['Security Policies & Governance', 'POPIA Compliance', 'Endpoint Security', 'Identity & Access Management', 'Cloud Security Reviews'],
      },
      {
        label: 'Test',
        items: ['Vulnerability Scanning', 'Penetration Testing', 'Web Application Security Testing', 'Wireless Security Assessments', 'Internal & External Network Testing'],
      },
      {
        label: 'Respond',
        items: ['Incident Response Planning', 'Digital Forensics Coordination', 'Business Continuity Planning', 'Disaster Recovery Planning', 'Tabletop Exercises'],
      },
      {
        label: 'Educate',
        items: ['Security Awareness Training', 'Phishing Simulations', 'Executive Cyber Briefings', 'Secure Remote Working Training'],
      },
    ],
  },
]

// ─── Card stack ───────────────────────────────────────────────────────────────

const POSITION_STYLES = [
  { scale: 1,    y: 12  },
  { scale: 0.95, y: -16 },
  { scale: 0.9,  y: -44 },
]


// ─── Dialog — yellow with full breakdown ──────────────────────────────────────

function ServiceDialog({
  service,
  open,
  onClose,
}: {
  service: typeof SERVICES[0] | null
  open: boolean
  onClose: () => void
}) {
  if (!service) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="flex flex-col gap-0 p-0 sm:max-h-[min(720px,88vh)] sm:max-w-2xl [&>button:last-child]:hidden"
        style={{ background: '#E0CE00', border: 'none', borderRadius: 16 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <div>
            <DialogTitle
              className="text-2xl font-black leading-tight"
              style={{
                color: '#0A1722',
                fontFamily: 'var(--font-geist-sans, sans-serif)',
                letterSpacing: '-0.03em',
              }}
            >
              {service.title}
            </DialogTitle>
            <p
              className="mt-1 text-sm"
              style={{ color: 'rgba(10,23,34,0.55)', fontFamily: 'var(--font-dm-sans, sans-serif)' }}
            >
              {service.description}
            </p>
          </div>
          <DialogClose asChild>
            <button
              className="mt-1 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-60 flex-shrink-0"
              style={{ background: 'rgba(10,23,34,0.12)' }}
            >
              <X size={15} color="#0A1722" />
            </button>
          </DialogClose>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(10,23,34,0.12)', margin: '0 1.5rem' }} />

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 py-5">
          <DialogDescription asChild>
            <div>
              {/* Intro */}
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: 'rgba(10,23,34,0.65)', fontFamily: 'var(--font-dm-sans, sans-serif)' }}
              >
                {service.intro}
              </p>

              {/* Sections — structured like cybersecurity */}
              <div className="flex flex-col gap-6">
                {service.sections.map((section) => (
                  <div key={section.label}>
                    {/* Section label with navy left bar */}
                    <div className="flex items-center gap-2 mb-3">
                      <div style={{ width: 3, height: 16, background: '#0A1722', borderRadius: 2, flexShrink: 0 }} />
                      <h4
                        className="text-xs uppercase tracking-[0.15em] font-bold"
                        style={{ color: '#0A1722', fontFamily: 'var(--font-dm-sans, sans-serif)' }}
                      >
                        {section.label}
                      </h4>
                    </div>
                    {/* Items grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: 'rgba(10,23,34,0.8)', fontFamily: 'var(--font-dm-sans, sans-serif)' }}
                        >
                          <span style={{ color: '#0A1722', flexShrink: 0, marginTop: 3, fontWeight: 900 }}>●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </DialogDescription>
        </div>

        {/* Footer CTA */}
        <div
          className="px-6 py-4 flex justify-end"
          style={{ borderTop: '1px solid rgba(10,23,34,0.12)' }}
        >
          <a
            href="/contact"
            className="flex h-10 items-center gap-1 rounded-full px-6 text-sm font-bold transition-all hover:opacity-80"
            style={{
              background: '#0A1722',
              color: '#E0CE00',
              fontFamily: 'var(--font-geist-sans, sans-serif)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Get a quote →
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}


// ─── Main page ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [mounted, setMounted]               = useState(false)
  const [openServiceId, setOpenServiceId]   = useState<number | null>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-depth, linear-gradient(180deg,#060D15 0%,#0A1722 45%,#0E202F 100%))' }} />
  )

  const openService = SERVICES.find((s) => s.id === openServiceId) ?? null

  // Map services to FlowingMenu items
  const menuItems = SERVICES.map((service) => ({
    link:    '#',
    text:    service.title,
    image:   service.image,
    onClick: () => setOpenServiceId(service.id),
  }))

  return (
    <>
      <GlassFilter />

      {/* ── Hero ── */}
      <section
        className="relative w-full px-6 md:px-20 pt-32 pb-12 text-center"
        style={{ background: 'var(--bg-depth, linear-gradient(180deg,#060D15 0%,#0A1722 45%,#0E202F 100%))' }}
      >
        <p
          className="text-xs uppercase tracking-[0.3em] mb-4"
          style={{ color: 'var(--gold-500,#D4BC2E)', fontFamily: 'var(--font-dm-sans,sans-serif)' }}
        >
          What we do
        </p>
        <h1
          className="text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-geist-sans,sans-serif)', fontWeight: 800, color: '#fff' }}
        >
          Our Services
        </h1>
        <p
          className="mx-auto max-w-xl text-base"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-dm-sans,sans-serif)', lineHeight: 1.8 }}
        >
          Seven service areas. One focused team. Built for organisations shaping Africa&apos;s future.
        </p>
        <div className="mt-8 h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(212,188,46,0.35), transparent)' }} />
      </section>

      {/* ── Flowing menu ── */}
      <div style={{ height: '700px', position: 'relative' }}>
        <FlowingMenu
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#0E202F"
          marqueeBgColor="#E0CE00"
          marqueeTextColor="#0A1722"
          borderColor="rgba(224,206,0,0.2)"
        />
      </div>

      {/* ── CTA ── */}
      <section
        className="w-full py-20 px-6 text-center"
        style={{ background: 'var(--bg-depth, linear-gradient(180deg,#060D15 0%,#0A1722 45%,#0E202F 100%))' }}
      >
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(212,188,46,0.35), transparent)', marginBottom: '5rem' }} />
        <h2
          className="text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4"
          style={{ fontFamily: 'var(--font-geist-sans,sans-serif)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}
        >
          Ready to get started?
        </h2>
        <p
          className="mx-auto max-w-md mb-8 text-sm"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-dm-sans,sans-serif)', lineHeight: 1.8 }}
        >
          Tell us about your project and we will match you with the right service
          and put together a plan that works for your goals and budget.
        </p>
        <GlassButton href="/contact" variant="primary" fontFamily="var(--font-playfair)">
          Start a conversation
        </GlassButton>
      </section>

      {/* ── Dialog ── */}
      <ServiceDialog
        service={openService}
        open={openServiceId !== null}
        onClose={() => setOpenServiceId(null)}
      />
    </>
  )
}