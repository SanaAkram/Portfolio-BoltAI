import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SaasProducts from './components/SaasProducts';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TestimonialsCarousel from './components/Testimonials';
import RobotGame from './components/RobotGame';
import './index.css';

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [showInfo,   setShowInfo]   = useState(false);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Header />

      {/* Game mode toggle */}
      <div className="game-toggle-fixed">
        <div className="game-toggle-row">
          <button
            className={`game-toggle-btn${gameActive ? ' game-toggle-btn--on' : ''}`}
            onClick={() => { setGameActive((v) => !v); setShowInfo(false); }}
            title={gameActive ? 'Disable game mode' : 'Enable game mode'}
          >
            <span className="game-toggle-dot" />
            game mode
          </button>
          <button
            className="game-info-btn"
            onClick={() => setShowInfo((v) => !v)}
            title="How to play"
          >
            i
          </button>
        </div>

        {showInfo && (
          <div className="robot-game-info">
            <button className="robot-game-info-close" onClick={() => setShowInfo(false)}>×</button>
            <div className="robot-game-info-title">controls</div>
            <div className="robot-game-info-row">
              <span className="robot-game-key">← →</span> move
            </div>
            <div className="robot-game-info-row">
              <span className="robot-game-key">space</span> jump
            </div>
            <div className="robot-game-info-row">
              <span className="robot-game-key">W A D</span> alt keys
            </div>
            <div className="robot-game-info-goal">
              collect all 5 brain cells 🧠
            </div>
          </div>
        )}
      </div>

      <RobotGame active={gameActive} />

      <main>
        <Hero />
        <About />
        <Projects />
        <SaasProducts />
        <TestimonialsCarousel />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
