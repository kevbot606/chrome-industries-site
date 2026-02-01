import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
