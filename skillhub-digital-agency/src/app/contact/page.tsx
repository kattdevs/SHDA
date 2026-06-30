'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const services = [
  'Website Design & Development',
  'Custom Application Development',
  'Learning Management Systems',
  'Mobile Application Development',
  'Digital Transformation Solutions',
  'Branding & Creative Design',
  'Cybersecurity Services',
  'Other / Not Sure Yet',
]

const budgets = [
  'Under R50,000',
  'R50,000 – R150,000',
  'R150,000 – R500,000',
  'R500,000+',
  'Prefer not to say',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    // Replace with your actual form submission endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = `
    w-full bg-transparent border-b border-white/15 py-4 text-white text-[0.95rem]
    placeholder-white/25 outline-none transition-colors duration-200
    focus:border-[#E0CE00] hover:border-white/30
  `

  const labelClass = `
    block text-[10px] uppercase tracking-widest text-white/30 mb-2
  `

  return (
    <main style={{ backgroundColor: '#0E202F' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-52 pb-16 px-10 md:px-20">
        <div className="flex items-center gap-6 mb-12">
          <span
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
            className="text-[11px] uppercase text-[#E0CE00]"
          >
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <h1
            style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
            className="text-[clamp(3rem,8vw,7rem)] font-bold text-white max-w-3xl"
          >
            Let's build something{' '}
            <em style={{ fontStyle: 'italic' }} className="text-[#E0CE00]">
              together.
            </em>
          </h1>
          <p
            style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.8 }}
            className="text-[0.95rem] text-white/50 max-w-xs md:text-right flex-shrink-0"
          >
            Tell us about your project and we'll get back to you within 3–5 business days.
          </p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="px-10 md:px-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-28">

          {/* LEFT — contact details */}
          <div className="w-full lg:w-5/12 flex flex-col gap-16">

            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <span
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                  className="text-[10px] uppercase text-[#E0CE00]"
                >
                  Email
                </span>
                <a
                  href="mailto:hello@skillhubdigital.africa"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                  className="block text-xl italic font-bold text-white mt-2 hover:text-[#E0CE00] transition-colors duration-200"
                >
                  hello@skillhubdigital.africa
                </a>
              </div>

              <div>
                <span
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                  className="text-[10px] uppercase text-[#E0CE00]"
                >
                  Phone
                </span>
                <a
                  href="tel:+27000000000"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                  className="block text-xl italic font-bold text-white mt-2 hover:text-[#E0CE00] transition-colors duration-200"
                >
                  +27 (0) 00 000 0000
                </a>
              </div>

              <div>
                <span
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                  className="text-[10px] uppercase text-[#E0CE00]"
                >
                  Office
                </span>
                <p
                  style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.8 }}
                  className="text-white/60 mt-2"
                >
                  Nelson Mandela Square<br />
                  Sandton, Johannesburg<br />
                  South Africa
                </p>
              </div>

              <div>
                <span
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                  className="text-[10px] uppercase text-[#E0CE00] mb-3 block"
                >
                  Connect
                </span>
                <div className="flex gap-6">
                  {['LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.06em' }}
                      className="text-[12px] uppercase text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Process steps */}
            <div>
              <span
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                className="text-[10px] uppercase text-[#E0CE00] mb-6 block"
              >
                What Happens Next
              </span>
              <div className="flex flex-col gap-6">
                {[
                  { step: '01', label: 'Discovery Call', desc: 'We schedule a call to understand your needs, goals, and timeline.' },
                  { step: '02', label: 'Proposal', desc: 'We put together a detailed proposal with scope, timeline, and investment.' },
                  { step: '03', label: 'Kickoff', desc: 'Once aligned, we get to work — keeping you informed at every stage.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
                      className="text-[11px] text-[#E0CE00] flex-shrink-0 pt-0.5"
                    >
                      {item.step}
                    </span>
                    <div>
                      <p
                        style={{ fontFamily: 'var(--font-playfair)' }}
                        className="text-sm font-bold italic text-white mb-1"
                      >
                        {item.label}
                      </p>
                      <p
                        style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.7 }}
                        className="text-[13px] text-white/40"
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="w-full lg:w-7/12">
            {submitted ? (
              <div className="flex flex-col items-start gap-6 pt-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(224,206,0,0.1)', border: '1px solid rgba(224,206,0,0.3)' }}
                >
                  <span className="text-[#E0CE00] text-xl">✓</span>
                </div>
                <h2
                  style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.1 }}
                  className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold italic text-white"
                >
                  Message received.
                </h2>
                <p
                  style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.8 }}
                  className="text-[0.95rem] text-white/50 max-w-sm"
                >
                  Thank you for reaching out. We'll review your enquiry and be in touch within 3–5 business days.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-10">

                {/* Row 1 — Name + Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                      className={labelClass}
                    >
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handle}
                      placeholder="Your name"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                      className={labelClass}
                    >
                      Organisation
                    </label>
                    <input
                      name="organisation"
                      value={formData.organisation}
                      onChange={handle}
                      placeholder="Company or institution"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 — Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                      className={labelClass}
                    >
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handle}
                      placeholder="your@email.com"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                      className={labelClass}
                    >
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handle}
                      placeholder="+27 00 000 0000"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3 — Service */}
                <div>
                  <label
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                    className={labelClass}
                  >
                    Service of Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handle}
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled style={{ backgroundColor: '#0E202F' }}>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: '#0E202F' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4 — Budget */}
                <div>
                  <label
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                    className={labelClass}
                  >
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.04em' }}
                        className={`text-[12px] px-4 py-2 border transition-all duration-200 ${
                          formData.budget === b
                            ? 'border-[#E0CE00] text-[#E0CE00] bg-[#E0CE00]/10'
                            : 'border-white/15 text-white/40 hover:border-white/30 hover:text-white/60'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 5 — Message */}
                <div>
                  <label
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
                    className={labelClass}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Describe your project, goals, timeline, or anything else you'd like us to know..."
                    style={{ fontFamily: 'var(--font-dm-sans)', resize: 'none' }}
                    className={`${inputClass} border border-white/15 px-0 focus:border-[#E0CE00]`}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between gap-6 pt-2">
                  <p
                    style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.04em' }}
                    className="text-[11px] text-white/25 uppercase"
                  >
                    * Required fields
                  </p>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !formData.name || !formData.email || !formData.message || !formData.service}
                    style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
                    className="text-base font-bold italic text-[#0E202F] bg-[#E0CE00] px-8 py-3.5 hover:bg-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}