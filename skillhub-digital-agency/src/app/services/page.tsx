'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Website Design & Development',
    oneliner: 'Responsive, high-performance websites built to convert visitors into clients.',
    visual: null,
    description: 'We create professional, responsive, and user-friendly websites that strengthen your online presence and drive measurable business growth — from corporate sites to e-commerce platforms. Every website we build is mobile-first, accessibility-compliant, and optimised for speed.',
    pillars: [
      {
        label: 'Corporate & Institutional',
        items: ['Corporate websites', 'Government and public sector websites', 'Educational institution websites', 'NGO and non-profit websites', 'Professional association websites', 'Healthcare organisation websites'],
      },
      {
        label: 'Commerce & Campaigns',
        items: ['E-commerce websites', 'Landing pages and campaign websites', 'Product catalogue websites', 'Membership and subscription sites', 'Event and conference websites', 'Booking and reservation websites'],
      },
      {
        label: 'Design & Experience',
        items: ['UI/UX design and prototyping', 'Mobile-first responsive design', 'Accessibility compliance (WCAG)', 'Brand-aligned visual design', 'Interactive animations and micro-interactions', 'Design system development'],
      },
      {
        label: 'Performance & Support',
        items: ['Website speed optimisation', 'SEO technical foundations', 'Security hardening', 'CMS integration and training', 'Website maintenance packages', 'Hosting and infrastructure setup'],
      },
    ],
  },
  {
    number: '02',
    title: 'Custom Application Development',
    oneliner: 'Bespoke platforms built around how your business actually operates.',
    visual: null,
    description: 'We develop bespoke web and mobile applications tailored to your unique operational requirements — built to scale, secured by design, and aligned with your business objectives. From internal tools to customer-facing platforms, we build software that works the way you work.',
    pillars: [
      {
        label: 'Business Process Applications',
        items: ['Business process automation systems', 'Workflow management platforms', 'Document management systems', 'Approval and sign-off workflows', 'Reporting and analytics dashboards', 'Data capture and form systems'],
      },
      {
        label: 'Customer & Stakeholder Portals',
        items: ['Customer self-service portals', 'Employee self-service platforms', 'Partner and vendor portals', 'Membership management systems', 'Client relationship platforms', 'Stakeholder communication portals'],
      },
      {
        label: 'Operational Systems',
        items: ['Booking and reservation systems', 'Inventory and asset management', 'Project management tools', 'Scheduling and resource planning', 'Contract management systems', 'Compliance tracking platforms'],
      },
      {
        label: 'Integration & Enterprise',
        items: ['Enterprise application development', 'Third-party API integrations', 'ERP and CRM integrations', 'Payment gateway integration', 'Legacy system modernisation', 'Microservices architecture'],
      },
    ],
  },
  {
    number: '03',
    title: 'Learning Management Systems',
    oneliner: 'LMS platforms backed by SkillHub International\'s deep expertise in learning.',
    visual: null,
    description: 'As part of SkillHub International — a leader in skills development — we bring deep domain expertise to LMS builds that go beyond templates and serve how people actually learn. From corporate training to SETA-aligned compliance systems, we build platforms that track, assess, and certify.',
    pillars: [
      {
        label: 'Platform Development',
        items: ['Custom LMS development', 'Moodle implementation and customisation', 'Corporate training platforms', 'E-learning portals', 'Virtual classroom integration', 'Multi-tenant learning platforms'],
      },
      {
        label: 'Compliance & Certification',
        items: ['Compliance and certification systems', 'SETA-aligned learning pathways', 'CPD tracking and reporting', 'Regulatory training management', 'Certificate generation and issuance', 'Audit trail and reporting'],
      },
      {
        label: 'Assessment & Learner Management',
        items: ['Online assessment and examination systems', 'Learner management solutions', 'Progress tracking and reporting', 'Skills gap analysis tools', 'Portfolio of evidence management', 'Learner onboarding workflows'],
      },
      {
        label: 'Content & Integration',
        items: ['SCORM and xAPI content integration', 'Video and multimedia content hosting', 'Skills development tracking systems', 'HR system integration', 'Payment and enrolment systems', 'Mobile learning support'],
      },
    ],
  },
  {
    number: '04',
    title: 'Mobile Application Development',
    oneliner: 'Android and iOS apps built for the African market and beyond.',
    visual: null,
    description: 'We build modern mobile applications that deliver exceptional user experiences across Android and iOS — from internal workforce tools to customer-facing engagement apps. Our mobile apps are built for performance, designed for real users, and optimised for low-bandwidth environments.',
    pillars: [
      {
        label: 'Business & Workforce Apps',
        items: ['Internal workforce applications', 'Field service management apps', 'Time and attendance tracking', 'Expense management apps', 'Business productivity tools', 'Offline-capable enterprise apps'],
      },
      {
        label: 'Customer & Community Apps',
        items: ['Customer engagement apps', 'Loyalty and rewards programmes', 'Community and membership apps', 'Event management apps', 'Push notification and messaging', 'Customer support integration'],
      },
      {
        label: 'Education & Training Apps',
        items: ['Educational applications', 'Mobile learning platforms', 'Assessment and quiz apps', 'Course delivery applications', 'Student and learner portals', 'Institutional apps'],
      },
      {
        label: 'Technical & Platform',
        items: ['Native iOS development (Swift)', 'Native Android development (Kotlin)', 'Cross-platform development (React Native)', 'App Store and Play Store deployment', 'API and backend integration', 'App maintenance and updates'],
      },
    ],
  },
  {
    number: '05',
    title: 'Digital Transformation',
    oneliner: 'From legacy systems to future-ready digital environments.',
    visual: null,
    description: 'We help organisations move from legacy operations to future-ready digital environments — with a practical, phased approach that minimises disruption and maximises return on investment. We work alongside your team to plan, execute, and embed lasting digital change.',
    pillars: [
      {
        label: 'Strategy & Consulting',
        items: ['Digital strategy development', 'Technology roadmap planning', 'Digital maturity assessments', 'Change management consulting', 'Stakeholder alignment workshops', 'Business case development'],
      },
      {
        label: 'Process & Automation',
        items: ['Workflow automation', 'Robotic process automation (RPA)', 'Digital document management', 'Approval process digitisation', 'Business intelligence and reporting', 'Data analytics implementation'],
      },
      {
        label: 'Systems & Integration',
        items: ['System integration and middleware', 'Legacy system modernisation', 'ERP and CRM implementation support', 'API development and management', 'Data migration and cleansing', 'Single sign-on (SSO) implementation'],
      },
      {
        label: 'Cloud & Infrastructure',
        items: ['Cloud migration planning and execution', 'Microsoft Azure deployment', 'AWS cloud solutions', 'Hybrid cloud architecture', 'Cloud cost optimisation', 'Infrastructure as Code (IaC)'],
      },
    ],
  },
  {
    number: '06',
    title: 'Branding & Creative Design',
    oneliner: 'Visual identities that hold up across every channel and touchpoint.',
    visual: null,
    description: 'Our creative team builds visual identities that do more than look good — they communicate clearly, build trust, and hold up across every channel and touchpoint. From logo to full brand system, we create design languages that scale with your organisation.',
    pillars: [
      {
        label: 'Brand Identity',
        items: ['Logo design and brand mark development', 'Corporate identity systems', 'Brand guidelines and style guides', 'Colour, typography, and visual language', 'Brand naming and positioning', 'Rebranding and brand refresh'],
      },
      {
        label: 'Digital Design',
        items: ['UI/UX design', 'Web and app interface design', 'Prototype and wireframe development', 'Icon and illustration design', 'Email template design', 'Social media visual identity'],
      },
      {
        label: 'Marketing & Collateral',
        items: ['Brochures, flyers, and presentations', 'Proposal and pitch deck design', 'Annual report design', 'Exhibition and event materials', 'Branded merchandise design', 'Advertising creative'],
      },
      {
        label: 'Content & Media',
        items: ['Digital content creation', 'Social media graphics and templates', 'Video and motion graphics', 'Photography art direction', 'Copywriting and content strategy', 'Campaign creative development'],
      },
    ],
  },
  {
    number: '07',
    title: 'Cybersecurity Services',
    oneliner: 'Assess, protect, test, respond, and educate — end to end.',
    visual: null,
    description: 'A structured five-pillar cybersecurity practice that helps organisations understand their risk, protect their assets, test their defences, respond with confidence, and build a security-aware culture. From POPIA compliance to penetration testing, we cover the full spectrum.',
    pillars: [
      {
        label: 'Assess',
        items: ['Cybersecurity risk assessments', 'Vulnerability assessments', 'Security maturity reviews', 'Gap analysis', 'Third-party risk reviews'],
      },
      {
        label: 'Protect',
        items: ['Security policies and governance', 'POPIA compliance', 'Endpoint security', 'Identity and access management', 'Azure Security Reviews', 'AWS Security Reviews', 'Cloud configuration assessments', 'Cloud identity reviews', 'Storage security and backup reviews'],
      },
      {
        label: 'Test',
        items: ['Vulnerability scanning', 'Penetration testing', 'Web application security testing', 'Wireless security assessments', 'Internal and external network testing'],
      },
      {
        label: 'Respond',
        items: ['Incident response planning', 'Digital forensics coordination', 'Business continuity planning', 'Disaster recovery planning', 'Tabletop exercises'],
      },
      {
        label: 'Educate',
        items: ['Security awareness training', 'Phishing simulations', 'Executive cyber briefings', 'Secure remote working training'],
      },
    ],
  },
]

function ServiceDetail({ service, onClose }: { service: typeof services[0]; onClose: () => void }) {
  const [openPillar, setOpenPillar] = useState<number | null>(0)
  const others = services.filter((s) => s.number !== service.number).slice(0, 3)

  return (
    <div className="w-full">
      {/* Back button */}
      <button
        onClick={onClose}
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
        className="flex items-center gap-3 text-[11px] uppercase text-white/40 hover:text-white transition-colors duration-200 mb-12"
      >
        ← Back to Services
      </button>

      {/* Large visual */}
      <div
        className="w-full rounded-2xl overflow-hidden flex items-center justify-center mb-16"
        style={{
          height: '480px',
          background: service.visual ? 'transparent' : 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {service.visual ? (
          <img src={service.visual!} className="w-full h-full object-cover" alt={service.title} />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <span
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
              className="text-[11px] uppercase text-white/15"
            >
              {service.number} — Add Visual or Mockup
            </span>
          </div>
        )}
      </div>

      {/* Service info */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-20">
        <div className="w-full md:w-5/12">
          <span
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
            className="text-[11px] text-[#E0CE00] uppercase"
          >
            {service.number}
          </span>
          <h2
            style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold italic text-white mt-3 mb-6"
          >
            {service.title}
          </h2>
          <p
            style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.85 }}
            className="text-[0.95rem] text-white/55"
          >
            {service.description}
          </p>
          <Link
            href="/contact"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
            className="inline-block mt-8 text-sm font-bold italic text-[#0E202F] bg-[#E0CE00] px-6 py-3 hover:bg-white transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>

        {/* Pillars accordion */}
        <div className="w-full md:w-7/12">
          <span
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
            className="text-[10px] uppercase text-white/30 mb-6 block"
          >
            What We Provide
          </span>
          {service.pillars.map((pillar, pi) => (
            <div key={pillar.label} className="border-t border-white/10">
              <button
                onClick={() => setOpenPillar(openPillar === pi ? null : pi)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                  className={`text-[12px] uppercase transition-colors duration-200 ${openPillar === pi ? 'text-[#E0CE00]' : 'text-white/40 group-hover:text-white'}`}
                >
                  {pillar.label}
                </span>
                <span className={`text-lg leading-none transition-all duration-300 ${openPillar === pi ? 'text-[#E0CE00] rotate-45' : 'text-white/30'}`}>
                  +
                </span>
              </button>
              {openPillar === pi && (
                <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#E0CE00] flex-shrink-0" />
                      <span
                        style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.03em' }}
                        className="text-[13px] text-white/50"
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

      {/* More Services */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="pt-16">
        <span
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
          className="text-[11px] uppercase text-[#E0CE00] mb-10 block"
        >
          More Services
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((s) => (
            <button
              key={s.number}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setTimeout(() => onClose(), 100)
                setTimeout(() => {
                  const el = document.getElementById(`service-${s.number}`)
                  el?.click()
                }, 300)
              }}
              className="group text-left rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-full flex items-center justify-center"
                style={{ height: '160px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                {s.visual ? (
                  <img src={s.visual!} className="w-full h-full object-cover" alt={s.title} />
                ) : (
                  <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }} className="text-[10px] uppercase text-white/10">
                    Visual coming soon
                  </span>
                )}
              </div>
              <div className="p-5">
                <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }} className="text-[10px] uppercase text-[#E0CE00]">
                  {s.number}
                </span>
                <h3 style={{ fontFamily: 'var(--font-playfair)' }} className="text-base font-bold italic text-white group-hover:text-[#E0CE00] transition-colors duration-300 mt-1 mb-2">
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.7 }} className="text-[12px] text-white/40">
                  {s.oneliner}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null)

  const activeService = services.find((s) => s.number === active)

  return (
    <main style={{ backgroundColor: '#0E202F' }}>
      <Navbar />

      <section className="pt-52 pb-16 px-10 md:px-20">
        {/* Hero */}
        {!active && (
          <>
            <div className="flex items-center gap-6 mb-12">
              <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }} className="text-[11px] uppercase text-[#E0CE00]">
                What We Do
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h1
              style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
              className="text-[clamp(3rem,8vw,7rem)] font-bold text-white max-w-4xl mb-20"
            >
              Services
            </h1>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <button
                  id={`service-${service.number}`}
                  key={service.number}
                  onClick={() => {
                    setActive(service.number)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="group text-left rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
                >
                  {/* Visual */}
                  <div
                    className="w-full flex items-center justify-center relative overflow-hidden"
                    style={{ height: '220px', background: service.visual ? 'transparent' : 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {service.visual ? (
                      <img src={service.visual!} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={service.title} />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }} className="text-[10px] uppercase text-white/10">
                        Add Visual
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#E0CE00]/0 group-hover:bg-[#E0CE00]/06 transition-colors duration-300" />
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }} className="text-[10px] uppercase text-[#E0CE00]">
                      {service.number}
                    </span>
                    <h2
                      style={{ fontFamily: 'var(--font-playfair)' }}
                      className="text-xl font-bold italic text-white group-hover:text-[#E0CE00] transition-colors duration-300 mt-2 mb-3"
                    >
                      {service.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.7 }} className="text-[13px] text-white/45 mb-5">
                      {service.oneliner}
                    </p>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }} className="text-[11px] uppercase text-white/25 group-hover:text-[#E0CE00] transition-colors duration-200">
                      Explore →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Service detail view */}
        {active && activeService && (
          <ServiceDetail
            service={activeService}
            onClose={() => setActive(null)}
          />
        )}
      </section>

      {!active && (
        <section
          className="px-10 md:px-20 py-28 flex flex-col md:flex-row items-center justify-between gap-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h2
            style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.1 }}
            className="text-[clamp(2rem,5vw,4rem)] font-bold text-white max-w-xl"
          >
            Ready to transform your{' '}
            <em className="text-[#E0CE00] italic">digital vision?</em>
          </h2>
          <Link
            href="/contact"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
            className="flex-shrink-0 text-base font-bold italic text-[#0E202F] bg-[#E0CE00] px-10 py-4 hover:bg-white hover:text-[#0E202F] transition-colors duration-300"
          >
            Let's Connect
          </Link>
        </section>
      )}

      <Footer />
    </main>
  )
}