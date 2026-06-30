import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Confessions from '@/components/Confessions'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Team />
      <Confessions />
      <Footer />
    </main>
  )
}