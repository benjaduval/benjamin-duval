import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import About from './components/About'
import CompanyShowcase from './components/CompanyShowcase'
import StackedExperience from './components/StackedExperience'
import Impact from './components/Impact'
import Expertise from './components/Expertise'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-canvas">
      <div className="pointer-events-none fixed inset-0 bg-mesh-light opacity-80" />
      <div className="noise-overlay pointer-events-none fixed inset-0" />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <LogoMarquee />
          <About />
          <CompanyShowcase />
          <StackedExperience />
          <Impact />
          <Expertise />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
