// src/App.jsx
import { Navbar } from '/src/components/Navbar';
import { Home } from '/src/components/Home'; 
import { About } from '/src/components/About';
import { Projects } from '/src/components/Projects';
import { Footer } from '/src/components/Footer';
import './App.css'
import { Experience } from './components/Experience';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="bg-[#1A1B3D] min-h-screen flex flex-col "> 
      <Navbar />
      <main className="max-w-6xl w-full px-4 mx-auto">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  )
}

export default App
