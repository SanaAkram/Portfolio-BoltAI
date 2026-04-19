import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Snake body */}
          <path d="M12 2c-2.5 0-4 2-4 4s1.5 3 3.5 3h3C17 9 18 10.5 18 12.5S16.5 16 14 16h-3c-2.5 0-4 1.5-4 3.5S9.5 23 12 23" />
      
          {/* Snake head */}
          <circle cx="12" cy="2.5" r="1" fill="currentColor" />
      
          {/* Eye */}
          <circle cx="12.3" cy="2.3" r="0.2" fill="#fff" />
        </svg>
      
    ),
    skills: [
      { name: 'Python', level: 90 },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="2"/>
        <circle cx="18" cy="6" r="2"/>
        <circle cx="6" cy="18" r="2"/>
        <circle cx="18" cy="18" r="2"/>
        <path d="M8 6h8M6 8v8M18 8v8M8 18h8"/>
      </svg>
    ),
    skills: [
      { name: 'LLMs', level: 90 },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'RAG Systems', level: 88 },
    ],
  },
  {
    category: 'Frameworks & APIs',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="6" rx="2"/>
      <rect x="3" y="14" width="18" height="6" rx="2"/>
    </svg>
    ),
    skills: [
      { name: 'Flask', level: 90 },
      { name: 'Django', level: 85 },
      { name: 'FastAPI', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'OpenAI APIs', level: 90 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5 5 0 106 13" />
      </svg>
    ),
    skills: [
      { name: 'AWS (EC2, RDS, Lambda)', level: 85 },
      { name: 'AWS SAM', level: 80 },
      { name: 'State Machines', level: 80 },
      { name: 'Docker', level: 82 },
      { name: 'CI/CD Basics', level: 75 },
    ],
  },
  {
    category: 'Data & Scraping',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    ),
    skills: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
      { name: 'Selenium', level: 90 },
      { name: 'BeautifulSoup', level: 88 },
    ],
  },
  {
    category: 'Databases',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="6" rx="8" ry="3"/>
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
      </svg>
    ),
    skills: [
      { name: 'PostgreSQL', level: 85 },
    ],
  },
];

const tools = [
  'Git',
  'GitHub',
  'Docker',
  'Postman',
  'Twilio',
  'Claude',
  'OpenAI',
  'LangChain',
  'Vocode',
  'VAPI',
  'LiveKit',
  'ElevenLabs',
  'Rime',
  'Pipecat',
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{name}</span>
        <span className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--color-border)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end))',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="tag mb-4 inline-block">Technical Expertise</span>
          <h2 className="section-heading">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map(cat => (
            <div key={cat.category} className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="font-semibold text-base mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map(tool => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;