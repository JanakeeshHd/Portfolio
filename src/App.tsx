import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Janakeesh Hegde.
        </p>
      </footer>
    </div>
  );
}

export default App;
