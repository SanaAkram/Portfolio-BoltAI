import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    icon: skillCategories?.[0]?.icon, // keep existing icon
    skills: [
      { name: 'Python', level: 90 },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: skillCategories?.[1]?.icon,
    skills: [
      { name: 'LLMs', level: 90 },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'RAG Systems', level: 88 },
    ],
  },
  {
    category: 'Frameworks & APIs',
    icon: skillCategories?.[2]?.icon,
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
    icon: skillCategories?.[3]?.icon,
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
    icon: skillCategories?.[2]?.icon,
    skills: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
      { name: 'Selenium', level: 90 },
      { name: 'BeautifulSoup', level: 88 },
    ],
  },
  {
    category: 'Databases',
    icon: skillCategories?.[2]?.icon,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Dynamo', level: 60 },
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

  // Voice AI / LLM Ecosystem
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
