import React, { useState } from 'react';

const projects = [
  {
    title: 'Ylopo AI Voice — Real Estate Lead Engagement',
    description: "Led development of the AI voice agent inside Ylopo AI² — a combined text-and-voice lead engagement engine that has placed 5+ million AI calls. Handles behavior-triggered outreach (new leads, site returns, favorited listings), attempts contact up to 14 times over 90 days, achieves a 45% answer rate and 9% live-transfer rate, and hands qualified leads to the right agent within 5–8 minutes. Architected the full pipeline — Eligibility Service, Dialer, Vocode, Transcript Processing, Insights Engine, and Grading System — built the LiveKit-based real-time voice agents with STT/TTS integration, and connected it into CRMs like Follow Up Boss for automatic lead assignment and call logging.",
    tags: ['Python', 'LiveKit', 'Vocode', 'AWS Step Functions', 'OpenAI', 'CRM Integration', 'Real-Time Voice AI'],
    github: 'https://github.com/SanaAkram',
    demo: 'https://www.ylopo.com/ylopo-ai-voice',
    image: '/images/ylopo-ai-voice-banner.png',
    featured: true,
  },
  {
    title: 'LiveKit X Memory Arcs',
    description: 'Built real-time AI voice agents using LiveKit library for conversational handling of Memory Arcs. Implemented STT/TTS pipelines, low-latency streaming, and intelligent fallback logic for scalable conversational systems.',
    tags: ['Python', 'LiveKit', 'Vocode', 'AWS SAM', 'LLMs', 'Realtime Systems'],
    github: 'https://github.com/SanaAkram',
    demo: "https://www.memoryarcs.com",
    image: 'https://tse3.mm.bing.net/th/id/OIP.vpDWDF2Lczd3cP1EEhkfcQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'AI Voice Grading System (LLM Evaluation Engine)',
    description: 'Developed an AI-powered grading platform that evaluates call transcripts using LLMs. Automated QA processes by scoring agent performance and generating actionable insights using prompt engineering.',
    tags: ['Python', 'OpenAI', 'Prompt Engineering', 'LLMs', 'AWS Step Functions'],
    github: 'https://github.com/SanaAkram',
    demo: 'https://www.ylopo.com/ylopo-ai-voice',
    image: '/images/ylopo-ai-voice-banner.png',
    featured: true,
  },
  {
    title: 'Transcript Insights & Processing Engine',
    description: 'Built backend systems to process transcripts, generate insights, and classify leads using LLM pipelines. Designed APIs with Flask, YAML-based prompts, and implemented robust testing using Pytest.',
    tags: ['Flask', 'LLMs', 'Pytest', 'REST APIs', 'Data Pipelines'],
    github: 'https://github.com/SanaAkram',
    demo: 'https://www.ylopo.com/ylopo-ai-voice',
    image: '/images/ylopo-ai-voice-banner.png',
    featured: true,
  },
  {
    title: 'End-to-End AI Pipeline (Voice → Insights → Grading)',
    description: 'Architected a complete AI workflow including Eligibility Service, Dialer, Vocode, Transcript Processing, Insights Engine, and Grading System. Ensured scalability, reliability, and low-latency processing.',
    tags: ['System Design', 'AWS', 'State Machines', 'Distributed Systems'],
    github: 'https://github.com/SanaAkram',
    demo: 'https://www.ylopo.com/ylopo-ai-voice',
    image: '/images/ylopo-ai-voice-banner.png',
    featured: false,
  },
  {
    title: 'Large-Scale Web Scraping & Data Pipeline',
    description: 'Built scalable scraping systems using Selenium and Pandas to collect millions of real estate and influencer data points. Designed efficient ETL pipelines for downstream AI applications.',
    tags: ['Python', 'Selenium', 'Pandas', 'ETL', 'Data Engineering'],
    github: 'https://github.com/SanaAkram',
    demo: null,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    title: 'AI Real Estate Video Generation System',
    description: "Built the AI pipeline behind Ylopo's 3D virtual house tours — MLS listing photos go in, and the system automatically selects the best angles, stitches them into an interactive 'digital twin' walkthrough with AI-generated voice-over narration, and ships it fully optimized for CRM, social, and listing-site distribution. Listings with these tours see 3x higher click rates and 2x higher lead generation.",
    tags: ['Python', 'Computer Vision', 'Automation', 'AI'],
    github: 'https://github.com/SanaAkram',
    demo: 'https://www.ylopo.com/virtual-house-tours',
    image: '/images/ylopo-virtual-tours-banner.png',
    featured: false,
  },
  {
    title: 'GMaps Scrapper',
    description: "Paste a Google Maps search link and get back an Excel sheet of every business's name, category, rating, phone, address, and social profile links — scraped via a headless-Chromium job queue with progress polling and .xlsx export.",
    tags: ['Node.js', 'Express', 'Playwright', 'Web Scraping'],
    github: 'https://github.com/SanaAkram/Gmaps-Scrapper',
    demo: null,
    image: 'https://github.com/user-attachments/assets/79ec909c-a314-4ae2-8388-b6d5b7d25e3e',
    featured: false,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden group">
      <div className="relative overflow-hidden" style={{ height: project.video ? 'auto' : '12rem' }}>
        {project.video ? (
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={project.video}
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
            {project.featured && (
              <div className="absolute top-3 left-3 z-10">
                <span className="tag text-xs">Featured</span>
              </div>
            )}
          </div>
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
              }}
            />
            {project.featured && (
              <div className="absolute top-3 left-3">
                <span className="tag text-xs">Featured</span>
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400 transition-colors" style={{ color: 'var(--color-text-primary)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
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

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <span className="tag mb-4 inline-block">What I've Built</span>
            <h2 className="section-heading">Projects</h2>
          </div>
          <a
            href="https://github.com/SanaAkram"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-0 flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            View all on GitHub
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Show More Projects
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
