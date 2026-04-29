import { useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [revealing, setRevealing] = useState(false)

  const handleComplete = () => {
    setRevealing(true)
    setTimeout(() => setLoading(false), 900)
  }

  return (
    <>
      <CustomCursor /> 

      {loading && <Preloader onComplete={handleComplete} />}

      <div style={{
        transform: revealing ? 'translateY(0)' : 'translateY(60px)',
        opacity: revealing ? 1 : 0,
        transition: revealing ? 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease' : 'none',
      }}>
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App