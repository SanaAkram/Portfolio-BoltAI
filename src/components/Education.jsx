import React from 'react';

const education = [
  {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'University of Central Punjab',
    location: 'Lahore, Pakistan',
    period: '2018 — 2022',
    grade: '',
    highlights: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Operating Systems',
      'Software Engineering',
      'Computer Networks',
    ],
    icon: '🎓',
  },
  {
    degree: 'Intermediate (ICS - Physics)',
    field: 'Computer Science',
    institution: 'Punjab College',
    location: 'Gujrat, Pakistan',
    period: '2016 — 2018',
    grade: '',
    highlights: [
      'Physics',
      'Computer Science',
      'Mathematics',
    ],
    icon: '📚',
  },
];

const certifications = [
  {
    name: 'IBM Generative AI Engineering Professional Certificate',
    issuer: 'Coursera (IBM)',
    year: '2026',
    link: 'https://www.coursera.org/account/accomplishments/specialization/UHTYFWL7HNE6',
  },
  {
    name: 'IBM AI Developer Professional Certificate',
    issuer: 'Coursera (IBM)',
    year: '2026',
    link: 'https://www.coursera.org/account/accomplishments/specialization/RF793MCA5ZTP',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="tag mb-4 inline-block">Academic Background</span>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)' }}
                  >
                    {edu.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                        {edu.degree}
                      </h3>
                      <span className="tag text-xs flex-shrink-0">{edu.period}</span>
                    </div>
                    <p className="font-medium text-sm mb-1" style={{ color: 'var(--color-accent)' }}>
                      {edu.field}
                    </p>
                    <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                      {edu.institution} • {edu.location}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span
                          key={h}
                          className="text-xs px-2 py-1 rounded-md"
                          style={{
                            background: 'rgba(15, 23, 42, 0.8)',
                            color: 'var(--color-text-secondary)',
                            border: '1px solid var(--color-border)',
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-base mb-5" style={{ color: 'var(--color-text-primary)' }}>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 pb-4"
                    style={{ borderBottom: idx < certifications.length - 1 ? '1px solid var(--color-border)' : 'none' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(56, 189, 248, 0.1)' }}
                    >
                      <svg width="14" height="14" fill="none" stroke="var(--color-accent)" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <p
                        className="text-sm font-medium leading-tight transition-colors"
                        style={{ color: 'var(--color-text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                      >
                        {cert.name}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {cert.issuer} · {cert.year}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;