import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import './styles/App.css';

export default function App() {
  return (
    <div id="app">
      <Navbar />
      <main className="app-container">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
