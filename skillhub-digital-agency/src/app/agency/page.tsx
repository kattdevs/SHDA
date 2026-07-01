import Navbar from '@/components/Navbar'
import AgencyPage from '@/components/AgencyPage'
import Footer from '@/components/Footer'
import styles from './agency.module.css'
 
export const metadata = {
  title: 'Our Story | SkillHub Digital Agency',
  description: 'Built on vision, driven by creativity. The story behind SkillHub Digital Agency.',
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