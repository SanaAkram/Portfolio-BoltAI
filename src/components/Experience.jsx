import React from 'react';

const experience = [
  {
    title: 'AI/ML Engineer',
    company: 'Kavtech Solutions (Private) Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Sep 2023 — Present',
    current: true,
    highlights: [
      'Led development of AI Voice Agent systems across 6+ enterprise client campaigns for real estate platforms including Ylopo, RDC, and JMG.',
      'Architected end-to-end AI data pipeline: Eligibility Service → Dialer → Vocode → Transcript Processing → Insights Engine → Grading System.',
      'Built an LLM-powered lead classification system categorising inbound calls (warm, callback, follow-up) using advanced prompt engineering.',
      'Developed an AI-powered Voice Grading Platform that automatically evaluates call transcripts, eliminating manual QA entirely.',
      'Designed LLM-based pipelines to score agent performance and extract actionable business insights from unstructured call data.',
      'Built real-time Voice AI agents using LiveKit, integrating STT and TTS for natural, low-latency phone conversations.',
      'Developed backend orchestration for real-time voice streaming, ensuring low latency, high availability, and production-grade reliability.',
      'Built large-scale web scraping systems (Selenium, Pandas) extracting millions of data points for downstream AI use cases.',
      'Developed an AI-powered real estate Virtual Tour platform combining image classification with automated video generation.',
    ],
  },
  {
    title: 'Python Developer',
    company: 'Kavtech Solutions (Private) Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Aug 2023 — Sep 2023',
    current: false,
    highlights: [
      'Designed ETL pipelines for large-scale processing and optimised workflows for reliability and scale.',
    ],
  },
  {
    title: 'Associate Backend Developer',
    company: 'Kavtech Solutions (Private) Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Aug 2022 — Aug 2023',
    current: false,
    highlights: [
      'Built scalable backend systems using Python and Django with PostgreSQL; deployed REST APIs for real-time sports data applications.',
      'Reduced AWS Lambda costs by 55% through systematic performance and resource optimisation.',
      'Automated data ingestion pipelines on AWS EC2; integrated Sportsdata.io, Slack, and Twitter APIs.',
      'Ensured reliability through proactive monitoring, debugging, and log analysis.',
    ],
  },
];

const ExperienceCard = ({ role }) => (
  <div className="glass-card rounded-xl p-6 relative">
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)' }}
      >
        💼
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
          <h3 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
            {role.title}
          </h3>
          <span className="tag text-xs flex-shrink-0">
            {role.period}
            {role.current && ' · Current'}
          </span>
        </div>
        <p className="font-medium text-sm mb-1" style={{ color: 'var(--color-accent)' }}>
          {role.company}
        </p>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          {role.location}
        </p>

        <ul className="space-y-2">
          {role.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <svg className="w-3.5 h-3.5 shrink-0 mt-1" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="rgba(56, 189, 248, 0.12)" />
                <path d="M4.5 7l2 2 3-3" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="tag mb-4 inline-block">Career So Far</span>
          <h2 className="section-heading">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((role, idx) => (
            <ExperienceCard key={idx} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
