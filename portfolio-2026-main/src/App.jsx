import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import GooglyContact from './components/GooglyContact'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import MeteorShower from './components/MeteorShower'

export default function App() {
  return (
    <ThemeProvider>
      <div className="site-root min-h-screen">
        <MeteorShower />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Certifications />
          <GooglyContact />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
