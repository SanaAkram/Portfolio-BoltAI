import React from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    category: 'Database',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'Supabase', level: 88 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: [
      { name: 'AWS', level: 78 },
      { name: 'Docker', level: 82 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux', level: 80 },
    ],
  },
];

const tools = [
  'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack', 'Vite',
  'Prisma', 'Socket.io', 'Stripe', 'Vercel', 'Netlify', 'GitHub Actions',
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
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.background = 'rgba(56, 189, 248, 0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
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
