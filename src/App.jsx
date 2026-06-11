import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import LogoStrip from './components/LogoStrip'
import Empathy from './components/Empathy'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import StackedExperience from './components/StackedExperience'
import AboutSection from './components/AboutSection'
import Credentials from './components/Credentials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
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
    <div className="relative min-h-screen bg-zinc-950">
      <div className="noise-overlay pointer-events-none fixed inset-0" />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <LogoStrip />
        <Empathy />
        <Services />
        <CaseStudies />
        <StackedExperience />
        <AboutSection />
        <Credentials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
