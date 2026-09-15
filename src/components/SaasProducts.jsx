import React, { useEffect, useState } from 'react';

const products = [
  {
    name: 'CallWala',
    tagline: "Pakistan's AI calling platform for lead follow-up",
    description:
      "A multi-tenant SaaS for businesses that don't have a lead-callback system. A client embeds a widget or lead form on their site — the moment a visitor submits it, an AI voice agent calls them back within ~60 seconds and holds a real conversation (Urdu or English) over a live phone call, then logs the transcript, recording, and outcome to a dashboard. Also handles appointment booking/reminders and customer re-engagement campaigns.",
    architecture: [
      'Widget/lead-form embed on the client’s site',
      'AI voice agent calls back within ~60 seconds, in Urdu or English',
      'Transcript, recording, and outcome logged to a client dashboard',
      'Appointment booking/reminders and customer re-engagement campaigns',
      'Built on AWS Lambda, DynamoDB, and S3',
    ],
    tags: ['Next.js', 'TypeScript', 'AWS (Lambda, DynamoDB, S3)', 'Python', 'LiveKit', 'OpenAI'],
    stats: ['~60s avg callback', '98% call connection rate', 'Free – PKR 21,000/mo'],
    status: 'Live',
    accent: '#FF6D3B',
    image: '/images/callwala-banner.png',
    url: 'https://d11yscu5lpmr3i.cloudfront.net',
    cta: 'Visit CallWala',
  },
  {
    name: 'Recruit-AI',
    tagline: 'The AI recruiting engine, end to end',
    description:
      'A multi-tenant recruiting SaaS that parses every resume with GPT-4o, scores and routes candidates against a job’s real requirements with a transparent 100-point breakdown (skills, experience, GitHub signal, culture fit), then self-schedules and conducts AI phone interviews — screening every transcript for fraud and AI-generated answers before a human ever gets involved.',
    architecture: [
      'Resume parsing with GPT-4o',
      '100-point transparent scoring: skills, experience, GitHub signal, culture fit',
      'Automatic routing based on score',
      'Self-scheduled AI phone interviews',
      'Fraud and AI-generated-answer detection on every interview transcript',
    ],
    tags: ['Next.js 16', 'TypeScript', 'DynamoDB', 'NextAuth', 'AWS (SST)', 'OpenAI'],
    stats: ['AI resume parsing', '100-point transparent scoring', 'Fraud detection built in'],
    status: 'Live',
    accent: '#3CFF4E',
    image: '/images/recruit-ai-banner.png',
    url: 'https://d26svesl0jm0n7.cloudfront.net',
    cta: 'Visit Recruit-AI',
  },
  {
    name: 'InboxPilot',
    tagline: 'AI email workflow automation',
    description:
      'A full-stack AI platform that connects to Gmail via OAuth, classifies incoming email with OpenAI, extracts actionable tasks, and generates daily briefings. Next.js dashboard with real-time analytics, FastAPI backend, PostgreSQL, containerized with Docker.',
    architecture: [
      'Gmail OAuth intake',
      'OpenAI-based email classification',
      'Actionable task extraction from email content',
      'Daily AI-generated briefings',
      'Next.js dashboard + FastAPI backend + PostgreSQL, containerized with Docker',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    stats: ['Gmail OAuth intake', 'LLM email classification', 'Daily AI-generated briefings'],
    status: 'Open Source',
    accent: '#38bdf8',
    image: '/images/inbox_pilot_banner.png',
    url: 'https://inbox-pilot-lemon-six.vercel.app/',
    cta: 'Visit Inbox Pilot',
  },
  {
    name: 'MizanKhata',
    tagline: "Your shop's khata, your day, one app",
    description:
      'A mobile-first app for Pakistani shopkeepers — a digital udhaar ledger, cash book, stock book, and printable bills, plus prayer and routine reminders that actually reach you. Multiple businesses per account, in English, Urdu, and Roman Urdu.',
    architecture: [
      'Digital udhaar ledger, cash book, and stock book',
      'Printable bills',
      'Prayer and routine reminders',
      'Multi-business accounts',
      'English, Urdu, and Roman Urdu language support',
    ],
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    stats: ['Ledger, POS & Stock Book', 'Prayer & routine reminders', 'Multi-business dashboard'],
    status: 'Live',
    accent: '#d4922a',
    image: '/images/mizankhata-banner.png',
    url: 'https://roznamcha-amber.vercel.app',
    cta: 'Visit MizanKhata',
  },
  {
    name: 'Angrezi Safar',
    tagline: 'AI-graded PTE Academic training, built for the family',
    description:
      'A real PTE Academic training platform — all 22 official task types with authentic timers, AI-graded Speaking and Writing feedback, a self-growing question bank, a voice-input Urdu/English translator, grammar drills, a daily study plan, full mock tests, and a progress dashboard for observers.',
    architecture: [
      'All 22 official PTE task types with authentic timers',
      'AI-graded Speaking and Writing feedback',
      'Self-growing question bank',
      'Voice-input Urdu/English translator and grammar drills',
      'Daily study plan, full mock tests, and a progress dashboard for observers',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'PostgreSQL'],
    stats: ['All 22 PTE task types', 'AI-graded Speaking & Writing', 'Self-growing question bank'],
    status: 'Live',
    accent: '#c9a45c',
    image: '/images/ai-pte-training-banner.png',
    url: 'https://ai-pte-training.vercel.app',
    cta: 'Visit Angrezi Safar',
  },
  {
    name: 'Sana AI',
    tagline: "The AI-powered portfolio you'd chat with instead of scrolling",
    description:
      "An interactive portfolio built as an AI persona instead of static sections — visitors ask 'Sana AI' questions and it answers using this exact real background, grounded in a knowledge base instead of freely improvising. Built with React, TypeScript, Tailwind, Framer Motion, a WebGL fluid cursor effect, and an OpenAI-backed Edge Function.",
    architecture: [
      'Knowledge-base-grounded system prompt — answers from real background, not free improvisation',
      'OpenAI-backed Vercel Edge Function streaming responses',
      'React + TypeScript + Tailwind frontend',
      'WebGL fluid cursor effect for the background',
      'Framer Motion for UI animation',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'OpenAI'],
    stats: ['Streaming AI chat', 'Interactive WebGL fluid background', 'Grounded, not freely improvised'],
    status: 'Live',
    accent: '#a78bfa',
    image: '/images/sana-ai-banner.png',
    url: 'https://portfolio-ai-chi-navy.vercel.app/',
    cta: 'Chat with Sana AI',
  },
  {
    name: 'codewithsana.vercel.app',
    tagline: 'My classic single-page portfolio',
    description:
      "A traditional portfolio site — About, Projects, SaaS Products, Education, Skills, and Contact all in one scrollable page. You're looking at it right now.",
    architecture: [
      'Single-page React + Vite app',
      'Section-per-component structure (About, Projects, SaaS Products, Education, Skills, Contact)',
      'Tailwind CSS with CSS custom-property theming',
    ],
    tags: ['React', 'Vite', 'Tailwind'],
    stats: ['Full case-study project write-ups', 'Client testimonials', 'Downloadable résumé'],
    status: 'Live',
    accent: '#38bdf8',
    image: '/images/codewithsana-banner.png',
    url: 'https://codewithsana.vercel.app/',
    cta: 'Visit Site',
  },
];

const ProductModal = ({ product, onClose }) => {
  const isLive = product.status === 'Live';

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
      style={{ background: 'rgba(5, 8, 16, 0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-4 sm:my-8 rounded-2xl overflow-hidden"
        style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
          style={{ background: 'rgba(10, 14, 24, 0.6)', border: '1px solid var(--color-border)', color: '#fff', backdropFilter: 'blur(8px)' }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {product.image && (
          <div className="relative overflow-hidden" style={{ height: '14rem' }}>
            <img
              src={product.image}
              alt={`${product.name} homepage screenshot`}
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, var(--color-bg) 0%, rgba(15, 23, 42, 0.1) 60%, transparent 100%)' }}
            />
          </div>
        )}

        <div className="p-6 sm:p-8" style={{ marginTop: product.image ? '-2.5rem' : 0 }}>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: isLive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(148, 163, 184, 0.15)',
                color: isLive ? '#10b981' : 'var(--color-text-secondary)',
                border: `1px solid ${isLive ? 'rgba(16, 185, 129, 0.4)' : 'rgba(148, 163, 184, 0.4)'}`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: isLive ? '#10b981' : 'var(--color-text-secondary)' }} />
              {product.status}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {product.name}
          </h2>
          <p className="text-sm font-medium mb-5" style={{ color: product.accent }}>
            {product.tagline}
          </p>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            {product.description}
          </p>

          {product.architecture && (
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                Architecture
              </h3>
              <ol className="space-y-2">
                {product.architecture.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ background: `${product.accent}20`, color: product.accent, border: `1px solid ${product.accent}50` }}
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md"
                  style={{ background: 'rgba(15, 23, 42, 0.8)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              Highlights
            </h3>
            <ul className="space-y-2">
              {product.stats.map(stat => (
                <li key={stat} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" fill={`${product.accent}20`} stroke={`${product.accent}50`} />
                    <path d="M4.5 7l2 2 3-3" stroke={product.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {stat}
                </li>
              ))}
            </ul>
          </div>

          {product.url ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:opacity-90"
              style={{ background: product.accent, color: '#0B1220' }}
            >
              {product.cta}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <div
              className="text-center text-xs font-medium px-4 py-2.5 rounded-lg"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
            >
              Building in public — no public link yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onOpen }) => {
  const isLive = product.status === 'Live';

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen()}
      className="glass-card rounded-xl overflow-hidden group flex flex-col h-full text-left w-full cursor-pointer"
    >
      {/* Banner — real screenshot of the live product, or a plain gradient fallback */}
      <div className="relative overflow-hidden" style={{ height: '12rem' }}>
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} homepage screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-4xl font-bold"
            style={{
              background: `linear-gradient(135deg, ${product.accent}25, rgba(15, 23, 42, 0.9))`,
              color: `${product.accent}90`,
            }}
          >
            {product.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.15) 55%, transparent 100%)',
          }}
        />
        <div
          className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold backdrop-blur-md"
          style={{ background: `${product.accent}30`, border: `1px solid ${product.accent}60`, color: '#fff' }}
        >
          {product.name.slice(0, 2).toUpperCase()}
        </div>
        <span
          className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md"
          style={{
            background: isLive ? 'rgba(16, 185, 129, 0.25)' : 'rgba(148, 163, 184, 0.25)',
            color: '#fff',
            border: `1px solid ${isLive ? 'rgba(16, 185, 129, 0.5)' : 'rgba(148, 163, 184, 0.5)'}`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: isLive ? '#10b981' : '#fff' }}
          />
          {product.status}
        </span>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
          {product.name}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: product.accent }}>
          {product.tagline}
        </p>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{
            color: 'var(--color-text-secondary)',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.slice(0, 5).map(tag => (
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
          {product.tags.length > 5 && (
            <span
              className="text-xs px-2 py-1 rounded-md"
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              +{product.tags.length - 5}
            </span>
          )}
        </div>

        <ul className="space-y-1.5 mb-6">
          {product.stats.map(stat => (
            <li key={stat} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill={`${product.accent}20`} stroke={`${product.accent}50`} />
                <path d="M4.5 7l2 2 3-3" stroke={product.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {stat}
            </li>
          ))}
        </ul>

        {product.url ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="mt-auto flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:opacity-90"
            style={{ background: product.accent, color: '#0B1220' }}
          >
            {product.cta}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <div
            className="mt-auto text-center text-xs font-medium px-4 py-2.5 rounded-lg"
            style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
          >
            Building in public — no public link yet
          </div>
        )}
      </div>
    </div>
  );
};

const SaasProducts = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section id="saas-products" className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">What I Own</span>
          <h2 className="section-heading">SaaS Products I Own</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Beyond client work, here's everything I design, build, and ship myself — commercial SaaS
            platforms, open-source tools, and this portfolio itself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.name} product={product} onOpen={() => setActiveProduct(product)} />
          ))}
        </div>
      </div>

      {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </section>
  );
};

export default SaasProducts;
