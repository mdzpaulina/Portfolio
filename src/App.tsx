import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#1A1B3D] min-h-screen flex flex-col">
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
  );
}
