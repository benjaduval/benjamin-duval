import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import About from './components/About'
import SelectedWork from './components/SelectedWork'
import Impact from './components/Impact'
import Expertise from './components/Expertise'
import Journey from './components/Journey'
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
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <SelectedWork />
        <Impact />
        <Expertise />
        <Journey />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
