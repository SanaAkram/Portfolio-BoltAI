import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const repoHighlights = [
  { name: 'realtime-chat-app', stars: 89, forks: 22, lang: 'JavaScript', langColor: '#f7df1e' },
  { name: 'ai-task-manager', stars: 67, forks: 15, lang: 'TypeScript', langColor: '#3178c6' },
  { name: 'devops-dashboard', stars: 45, forks: 12, lang: 'Python', langColor: '#3572A5' },

  // ✅ NEW PROJECT
  { 
    name: 'lineups-ai', 
    stars: 55, 
    forks: 14, 
    lang: 'Python', 
    langColor: '#3572A5',
    logo: '/lineups.png' // 👈 IMPORTANT
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setFormState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true); 
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <section id="github" className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag mb-4 inline-block">Open Source</span>
            <h2 className="section-heading">GitHub Contributions</h2>
          </div>

          <div className="glass-card rounded-xl p-6 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" fill="var(--color-accent)" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                @SanaAkram 
              </span>
            </div>

            <GitHubCalendar
              username="SanaAkram"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
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
