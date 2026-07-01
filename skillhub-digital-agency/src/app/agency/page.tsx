import Navbar from '@/components/Navbar'
import AgencyPage from '@/components/AgencyPage'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Story | SkillHub Digital Agency',
  description: 'Built on vision, driven by creativity. The story behind SkillHub Digital Agency — who we are, what we believe, and how we work.',
}

export default function Agency() {
  return (
    <>
      <Navbar />
      <AgencyPage />
      <Footer />
    </>
  )
}