import React from 'react';

const icons = {
  language: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-2.5 0-4 2-4 4s1.5 3 3.5 3h3C17 9 18 10.5 18 12.5S16.5 16 14 16h-3c-2.5 0-4 1.5-4 3.5S9.5 23 12 23" />
      <circle cx="12" cy="2.5" r="1" fill="currentColor" />
    </svg>
  ),
  ai: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
    </svg>
  ),
  framework: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" />
    </svg>
  ),
  cloud: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5 5 0 106 13" />
    </svg>
  ),
  data: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  database: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    </svg>
  ),
  tool: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const skills = [
  { name: 'Python', icon: icons.language },
  { name: 'LLMs', icon: icons.ai },
  { name: 'Prompt Engineering', icon: icons.ai },
  { name: 'RAG Systems', icon: icons.ai },
  { name: 'Flask', icon: icons.framework },
  { name: 'Django', icon: icons.framework },
  { name: 'FastAPI', icon: icons.framework },
  { name: 'REST APIs', icon: icons.framework },
  { name: 'OpenAI APIs', icon: icons.framework },
  { name: 'AWS (EC2, RDS, Lambda)', icon: icons.cloud },
  { name: 'AWS SAM', icon: icons.cloud },
  { name: 'State Machines', icon: icons.cloud },
  { name: 'Docker', icon: icons.cloud },
  { name: 'CI/CD Basics', icon: icons.cloud },
  { name: 'Pandas', icon: icons.data },
  { name: 'NumPy', icon: icons.data },
  { name: 'Selenium', icon: icons.data },
  { name: 'BeautifulSoup', icon: icons.data },
  { name: 'PostgreSQL', icon: icons.database },
];

const tools = [
  'Git', 'GitHub', 'Docker', 'Postman', 'Twilio', 'Claude', 'OpenAI',
  'LangChain', 'Vocode', 'VAPI', 'LiveKit', 'ElevenLabs', 'Rime', 'Pipecat',
].map(name => ({ name, icon: icons.tool }));

const MarqueeRow = ({ items, speed = 'animate-marquee', reverse = false }) => {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, var(--color-bg) 0%, transparent 100%)' }}
      />
      <div
        className={`flex gap-4 w-max ${speed}`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {track.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg flex-shrink-0"
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--color-text-primary)' }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="section-heading"><span className="heading-slash">/</span>Skills</h2>
        </div>

        <div className="marquee-pause space-y-4">
          <MarqueeRow items={skills} speed="animate-marquee" />
          <MarqueeRow items={tools} speed="animate-marquee-slow" reverse />
        </div>
      </div>
    </section>
  );
};

export default Skills;
