import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import LogoStrip from '../components/LogoStrip'
import Empathy from '../components/Empathy'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import StackedExperience from '../components/StackedExperience'
import AboutSection from '../components/AboutSection'
import Credentials from '../components/Credentials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function HomePage() {
  const location = useLocation()

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

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [location.hash])

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
