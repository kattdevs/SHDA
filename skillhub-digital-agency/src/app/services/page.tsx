import Navbar from '@/components/Navbar'
import ServicesPage from '@/components/ServicesPage'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services | SkillHub Digital Agency',
  description: 'Website design, custom applications, LMS, mobile apps, digital transformation, branding, and cybersecurity — seven service areas built for Africa.',
}

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesPage />
      <Footer />
    </>
  )
}