import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import TestimonialsCarousel from './components/Testimonials';

function App() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
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
