import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Process from '@/components/Process'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Process />
      <Footer />
    </main>
  )
}