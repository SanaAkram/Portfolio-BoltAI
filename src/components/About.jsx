import React from 'react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Built', value: '6+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Open Source Contributions', value: '10+' },
];

const About = () => {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tag mb-4 inline-block">Who I Am</span>
            <h2 className="section-heading mb-8">About Me</h2>

            <div className="space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
              <p className="leading-relaxed text-base">
                I'm an AI Engineer and Python Developer with over 3+ years of experience building
                scalable backend systems and intelligent applications. I specialize in Generative AI,
                LLMs, and RAG-based solutions, turning complex data and workflows into impactful,
                production-ready systems.
              </p>
              <p className="leading-relaxed text-base">
                My journey began with backend development and evolved into designing AI-powered
                systems, including voice agents, automated grading platforms, and LLM-driven pipelines.
                I have hands-on experience with LangChain, OpenAI APIs, and cloud technologies like AWS,
                focusing on performance, scalability, and reliability.
              </p>
              <p className="leading-relaxed text-base">
                Beyond development, I actively explore advancements in AI, experiment with emerging
                frameworks, and build real-world applications that leverage automation, data pipelines,
                and conversational intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map(trait => (
                <span key={trait} className="tag">{trait}</span>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a href="https://github.com/SanaAkram" className="btn-secondary">
                View GitHub
              </a>
            </div>
          </div>

          <div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))',
                  transform: 'rotate(3deg)',
                }}
              />
              <div className="glass-card rounded-2xl p-8 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))',
                      color: 'white',
                    }}
                  >
                    SA
                  </div>
                  <div>
                    <p className="font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>Sana Akram</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>AI Engineer</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map(stat => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-4 text-center"
                      style={{ background: 'rgba(15, 23, 42, 0.5)', border: '1px solid var(--color-border)' }}
                    >
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 rounded-xl p-4"
                  style={{ background: 'rgba(15, 23, 42, 0.5)', border: '1px solid var(--color-border)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse-glow 2s infinite' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Available for work</span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    Open to full-time roles and freelance projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
