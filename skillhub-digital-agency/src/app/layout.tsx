import type { Metadata } from 'next'
import { Bebas_Neue, Inter, Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-masthead',
})

export const metadata: Metadata = {
  title: 'SkillHub Digital Agency',
  description: 'Strategy, design, and development for ambitious brands.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
