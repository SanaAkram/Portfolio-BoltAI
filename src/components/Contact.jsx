import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import emailjs from 'emailjs-com';

const repoHighlights = [ 
  { name: 'Lineups', stars: 124, forks: 38, lang: 'Django', langColor: '#3178c6' },
  { name: 'realtime-chat-app', stars: 89, forks: 22, lang: 'Python', langColor: '#f7df1e' },
  { name: 'ai-task-manager', stars: 67, forks: 15, lang: 'Python', langColor: '#3178c6' },
  { name: 'devops-dashboard', stars: 45, forks: 12, lang: 'Python', langColor: '#3572A5' },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setFormState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.send(
        'service_9ruu7zl',
        'template_i3xhy7y',
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        'g7HfcyIntZwPojF7f'
      );
  
      setSubmitted(true);
    } catch (error) {
      console.error('FAILED...', error);
      alert('Something went wrong!');
    }
  
    setLoading(false);
  };

  return (
    <>
      <section id="github" className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag mb-4 inline-block">Open Source</span>
            <h2 className="section-heading">GitHub Activity</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-10">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <svg width="24" height="24" fill="var(--color-accent)" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>@SanaAkram</span>
              </div>
              <GitHubCalendar
              username="SanaAkram"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Repositories', value: '42' },
                  { label: 'Total Stars', value: '325' },
                  { label: 'Followers', value: '180' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="text-center rounded-lg p-3"
                    style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--color-border)' }}
                  >
                    <p className="text-xl font-bold gradient-text">{item.value}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>{item.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/SanaAkram"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                View GitHub Profile
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-10">
            <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  PINNED REPOSITORIES
                </h3>
                <div className="space-y-3">
                  {repoHighlights.map(repo => (
                    <a
                      key={repo.name}
                      href="https://github.com/SanaAkram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 group"
                      style={{ background: 'rgba(15, 23, 42, 0.5)', border: '1px solid var(--color-border)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                        e.currentTarget.style.background = 'rgba(56, 189, 248, 0.04)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                      }}
                    >
                      <div>
                        <p className="text-sm font-medium group-hover:text-sky-400 transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                          {repo.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: repo.langColor }}
                          />
                          <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{repo.lang}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                          {repo.forks}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

      <section id="contact" className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Get In Touch</span>
            <h2 className="section-heading inline-block mx-auto">Let's Work Together</h2>
            <p className="mt-6 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              I'm currently open to new opportunities. Whether you have a project in mind
              or just want to chat — my inbox is always open.
            </p>
          </div>

          {submitted ? (
            <div
              className="glass-card rounded-xl p-10 text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}
              >
                <svg width="28" height="28" fill="none" stroke="#10b981" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
