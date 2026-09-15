import React from 'react';

const workflows = [
  {
    step: '01',
    title: 'Intake',
    accent: '#38bdf8',
    image: '/workflows/1-intake.png',
    description:
      'Ingests every application (Gmail intake with resume PDF attachments), extracts and parses resume text with GPT-4o into structured data (contacts, skills, experience, education, certifications), checks for duplicates, then enriches each candidate with GitHub repo scoring and LinkedIn profile analysis before inserting into the database.',
    tags: ['Gmail OAuth2', 'OpenAI GPT-4o', 'GitHub API', 'PostgreSQL'],
  },
  {
    step: '02',
    title: 'Scoring & Routing',
    accent: '#a78bfa',
    image: '/workflows/2-scoring-routing.png',
    description:
      'Scores every candidate out of 100 — skills match (40pts), experience (30pts), GitHub signal (20pts), AI-judged culture fit (10pts) — then automatically routes them: auto-shortlist + Slack ping at 95+, recruiter review at 85–94, a questionnaire email at 70–84, or a rejection + archive below 70.',
    tags: ['OpenAI', 'PostgreSQL', 'Slack'],
  },
  {
    step: '03',
    title: 'Interview Loop',
    accent: '#34d399',
    image: '/workflows/3-interview-loop.png',
    description:
      "Finds the candidate's first free Mon–Fri 11am–7pm slot on the calendar, books it, and schedules an AI phone interview via LiveKit. An hourly poller checks for completed calls, then runs AI evaluation and a dedicated fraud-detection pass (catching AI-generated answers) before saving results and notifying the team on Slack.",
    tags: ['LiveKit', 'Google Calendar', 'OpenAI', 'Slack'],
  },
  {
    step: '04',
    title: 'Assessment + Final Round',
    accent: '#fb923c',
    image: '/workflows/4-assessment-final.png',
    description:
      'Generates a personalized AI coding assessment, reviews the submission with AI (correctness, quality, optimization, security), calculates a final weighted score (AI screening 20% / interview 35% / assessment 35% / experience 10%), schedules the final interview, and on approval generates an AI offer letter and sends the onboarding checklist.',
    tags: ['OpenAI', 'Google Calendar', 'Slack'],
  },
];

const WorkflowCard = ({ workflow, isLast }) => (
  <div className="relative">
    <div
      className="glass-card rounded-xl overflow-hidden group transition-all duration-300"
      style={{
        borderTop: `3px solid ${workflow.accent}`,
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 12px 40px -8px ${workflow.accent}55`)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`)}
    >
      <div className="relative">
        <a href={workflow.image} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={workflow.image}
            alt={`${workflow.title} n8n workflow diagram`}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </a>
        <div
          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-bold tracking-wider uppercase"
          style={{ background: `${workflow.accent}22`, border: `1px solid ${workflow.accent}88`, color: workflow.accent }}
        >
          Step {workflow.step}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-3xl font-black leading-none"
            style={{ color: workflow.accent, opacity: 0.85, fontFamily: 'monospace' }}
          >
            {workflow.step}
          </span>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {workflow.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          {workflow.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {workflow.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md font-medium"
              style={{
                background: `${workflow.accent}15`,
                color: workflow.accent,
                border: `1px solid ${workflow.accent}35`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {!isLast && (
      <div className="flex justify-center py-1" aria-hidden="true">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <path d="M10 0v20" stroke="var(--color-border)" strokeWidth="2" />
          <path d="M2 18l8 8 8-8" stroke="var(--color-border)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )}
  </div>
);

const AutomationWorkflows = () => {
  return (
    <section id="automations" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">n8n Automation</span>
          <h2 className="section-heading">Automation Workflows</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Before Recruit-AI existed as a coded product, I designed and ran its entire recruiting
            pipeline as a working n8n automation — intake, AI scoring, interview scheduling, and
            offers, end to end. These are real diagrams of that workflow, generated from the actual
            exported n8n JSON.
          </p>
        </div>

        <div className="flex flex-col">
          {workflows.map((workflow, i) => (
            <WorkflowCard key={workflow.title} workflow={workflow} isLast={i === workflows.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationWorkflows;
