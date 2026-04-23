// src/App.jsx
import { Navbar } from '/src/components/Navbar';
import { Home } from '/src/components/Home'; 
import { About } from '/src/components/About';
import { Projects } from '/src/components/Projects';
import { Hobbies } from '/src/components/Hobbies';
import { Footer } from '/src/components/Footer';
import './styles/App.css'
import { Experience } from './components/Experience';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div id="app">
      <Navbar />
      <main className="app-container">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Hobbies />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  )
}

export default App