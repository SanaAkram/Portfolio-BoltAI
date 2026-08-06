import React from 'react';

const products = [
  {
    name: 'CallWala',
    tagline: "Pakistan's AI calling platform for lead follow-up",
    description:
      "A multi-tenant SaaS for businesses that don't have a lead-callback system. A client embeds a widget or lead form on their site — the moment a visitor submits it, an AI voice agent calls them back within ~60 seconds and holds a real conversation (Urdu or English) over a live phone call, then logs the transcript, recording, and outcome to a dashboard. Also handles appointment booking/reminders and customer re-engagement campaigns.",
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
    tags: ['Next.js 16', 'TypeScript', 'DynamoDB', 'NextAuth', 'AWS (SST)', 'OpenAI'],
    stats: ['AI resume parsing', '100-point transparent scoring', 'Fraud detection built in'],
    status: 'Live',
    accent: '#3CFF4E',
    image: '/images/recruit-ai-banner.png',
    url: 'https://d26svesl0jm0n7.cloudfront.net',
    cta: 'Visit Recruit-AI',
  },
];

const ProductCard = ({ product }) => {
  const isLive = product.status === 'Live';

  return (
    <div className="glass-card rounded-xl overflow-hidden group flex flex-col h-full">
      {/* Banner — real screenshot of the live product */}
      <div className="relative overflow-hidden" style={{ height: '12rem' }}>
        <img
          src={product.image}
          alt={`${product.name} homepage screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
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
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.map(tag => (
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
  return (
    <section id="saas-products" className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">What I Own</span>
          <h2 className="section-heading">SaaS Products I Own</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Beyond client work, I design, build, and run these as real products — full-stack, end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasProducts;
