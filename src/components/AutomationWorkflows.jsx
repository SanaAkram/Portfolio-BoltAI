import React from 'react';

const workflows = [
  {
    title: '1. Intake',
    image: '/workflows/1-intake.png',
    description:
      'Ingests every application (Gmail intake with resume PDF attachments), extracts and parses resume text with GPT-4o into structured data (contacts, skills, experience, education, certifications), checks for duplicates, then enriches each candidate with GitHub repo scoring and LinkedIn profile analysis before inserting into the database.',
    tags: ['Gmail OAuth2', 'OpenAI GPT-4o', 'GitHub API', 'PostgreSQL'],
  },
  {
    title: '2. Scoring & Routing',
    image: '/workflows/2-scoring-routing.png',
    description:
      'Scores every candidate out of 100 — skills match (40pts), experience (30pts), GitHub signal (20pts), AI-judged culture fit (10pts) — then automatically routes them: auto-shortlist + Slack ping at 95+, recruiter review at 85–94, a questionnaire email at 70–84, or a rejection + archive below 70.',
    tags: ['OpenAI', 'PostgreSQL', 'Slack'],
  },
  {
    title: '3. Interview Loop',
    image: '/workflows/3-interview-loop.png',
    description:
      "Finds the candidate's first free Mon–Fri 11am–7pm slot on the calendar, books it, and schedules an AI phone interview via LiveKit. An hourly poller checks for completed calls, then runs AI evaluation and a dedicated fraud-detection pass (catching AI-generated answers) before saving results and notifying the team on Slack.",
    tags: ['LiveKit', 'Google Calendar', 'OpenAI', 'Slack'],
  },
  {
    title: '4. Assessment + Final Round',
    image: '/workflows/4-assessment-final.png',
    description:
      'Generates a personalized AI coding assessment, reviews the submission with AI (correctness, quality, optimization, security), calculates a final weighted score (AI screening 20% / interview 35% / assessment 35% / experience 10%), schedules the final interview, and on approval generates an AI offer letter and sends the onboarding checklist.',
    tags: ['OpenAI', 'Google Calendar', 'Slack'],
  },
];

const WorkflowCard = ({ workflow }) => (
  <div className="glass-card rounded-xl overflow-hidden">
    <a href={workflow.image} target="_blank" rel="noopener noreferrer" className="block">
      <img
        src={workflow.image}
        alt={`${workflow.title} n8n workflow diagram`}
        className="w-full h-auto transition-transform duration-500 hover:scale-[1.01]"
      />
    </a>
    <div className="p-6 sm:p-8">
      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {workflow.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
        {workflow.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {workflow.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md"
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
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

        <div className="grid grid-cols-1 gap-6">
          {workflows.map(workflow => (
            <WorkflowCard key={workflow.title} workflow={workflow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationWorkflows;
