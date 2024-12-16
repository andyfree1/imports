import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AIAssistant from './components/AIChat/AIAssistant';

function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] animate-gradient" />
      <div className="fixed inset-0 bg-mesh opacity-20" />
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 bg-gradient-to-t from-[#0B2447]/50 to-transparent" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#0B2447]/30 to-transparent" />

      <div className="relative z-10">
        <Navigation />
        <main>
          <section id="home">
            <Hero onChatClick={() => setIsAIChatOpen(true)} />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>

      <AIAssistant isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
}

export default App;