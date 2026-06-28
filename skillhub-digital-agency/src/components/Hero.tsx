'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col">

      {/* Top — centered headline */}
      <div className="flex flex-col items-center justify-center pt-40 pb-20 px-6 text-center">
        <h1
          style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
          className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold text-[#0E202F] max-w-4xl"
        >
          Transforming Ideas Into{' '}
          <em
            style={{ fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}
            className="text-[#E0CE00]"
          >
            Digital Experiences
          </em>
        </h1>

        <div className="w-16 h-px bg-[#0E202F]/20 mt-10" />
      </div>

      {/* Bottom — bio left, pin right */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-center px-10 md:px-20 pb-24 gap-10">

        {/* Left — bio */}
        <div className="w-full md:w-[42%] flex flex-col gap-7">
          <p
            style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.85 }}
            className="text-[1rem] font-semibold text-[#0E202F]/70"
          >
            SkillHub Digital is based out of Sandton, Johannesburg — but our designs
            and partnerships reach across Africa and beyond. We partner with ambitious
            brands to craft strategy-led design, high-performance web builds, and
            campaigns that actually convert. Our team of strategists, designers, and
            developers is dedicated to working with forward-thinking organisations to
            create custom digital solutions, compelling visual content, and brand
            experiences that leave a mark.
          </p>

          <Link
            href="/services"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
            className="self-start text-base font-bold italic text-white bg-[#0E202F] px-7 py-3 hover:bg-[#E0CE00] hover:text-[#0E202F] transition-colors duration-300"
          >
            Our Services
          </Link>
        </div>

        {/* Spacer */}
        <div className="hidden md:block flex-1" />

        {/* Right — floating pin */}
        <div className="w-full md:w-[42%] flex items-center justify-center">
          <div
            style={{ animation: 'pin-float 3s ease-in-out infinite' }}
            className="relative w-64 h-80 md:w-80 md:h-96"
          >
            <Image
              src="/location_pin_transparent.png"
              alt="Location pin"
              fill
              className="object-contain"
              style={{
                filter: 'drop-shadow(0 30px 40px rgba(14, 32, 47, 0.15))',
                animation: 'pin-shadow 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}