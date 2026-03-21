import Link from 'next/link'
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from '@/lib/contact'
import LinkedInIcon from '@/components/icons/LinkedInIcon'

export default function ResumePage() {
  return (
    <main className="pt-24 pb-16 flex-grow">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              Available for Senior Roles
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary dark:text-[#f7f9fb] tracking-tighter leading-tight mb-8">
              Kevin Funk
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-on-tertiary-container mb-6">
              Senior Software Engineer
            </h2>
            <div className="flex flex-col gap-4 text-secondary mb-10">
              <p className="text-xl md:text-2xl leading-relaxed">
                Frontend-leaning Full-Stack Engineer with 13 years of experience building scalable
                web applications. Proven track record of navigating hyper-growth, including scaling
                engineering teams from 10 to 40 members and facilitating 30x increases in clinical
                volume. Specialized in modernizing legacy monoliths into independent services to
                accelerate release cycles and eliminate deployment bottlenecks.
              </p>
              <p className="text-lg font-medium">
                Remote positions only.{' '}
                <span className="text-on-surface-variant font-normal">
                  I also love meeting my teammates in-person, so I&apos;m more than happy to fly to
                  meet up.
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/recruiter"
                className="cta-gradient text-tertiary px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg active:scale-95 transition-transform inline-block"
              >
                Check for Fit
              </Link>
              <a
                href="/kfunk_resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-container text-primary-fixed px-8 py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform inline-block"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 pt-12">
            <div className="bg-white p-6 rounded-2xl border border-surface-container-highest shadow-sm">
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">
                Contact &amp; Socials
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-secondary hover:text-on-tertiary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  {EMAIL}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-on-tertiary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  github.com/k-funk
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-on-tertiary-container transition-colors"
                >
                  <LinkedInIcon className="w-6 h-6 shrink-0" />
                  linkedin.com/in/k-funk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Mastery Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="font-headline font-extrabold text-4xl mb-4 text-surface-bright">
                Technical Mastery
              </h2>
              <p className="text-primary-fixed-dim text-lg max-w-md">
                A comprehensive toolkit spanning modern frontend architectures to robust backend
                services.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="w-12 h-1 bg-tertiary-fixed rounded-full" />
              <span className="w-4 h-1 bg-tertiary-fixed-dim rounded-full" />
              <span className="w-2 h-1 bg-on-primary-fixed-variant rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed font-bold">
                Primary Tech Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'NodeJS', 'Vite/Webpack', 'React', 'Redux', 'NextJS', 'ExpressJS', 'Basic PSQL'].map(
                  (skill, i) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-xl font-medium border border-outline-variant/10 ${
                        i === 0
                          ? 'bg-tertiary-fixed text-on-tertiary-fixed font-bold'
                          : 'bg-primary-container text-primary-fixed'
                      }`}
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim font-bold">
                Additional Tech Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AngularJS', 'SCSS', 'Bootstrap', 'Jekyll', 'Python', 'Django', 'Flask'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-container/50 text-primary-fixed rounded-xl font-medium border border-outline-variant/10"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="font-headline font-extrabold text-4xl text-primary dark:text-[#f7f9fb] mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1.5 cta-gradient rounded-full" />
        </div>

        <div className="space-y-12">
          {/* Hazel Health */}
          <div className="bg-surface-container-lowest dark:bg-[#1a233d] p-8 md:p-10 rounded-3xl ambient-shadow border border-white/50 group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="font-headline font-bold text-2xl text-primary dark:text-[#f7f9fb] mb-1">
                  Staff Software Engineer &lt;&lt; Senior Software Engineer
                </h3>
                <p className="text-on-tertiary-container font-bold text-lg">Hazel Health</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-on-secondary-container bg-secondary-container px-4 py-1.5 rounded-full mb-1">
                  2020 — PRESENT
                </span>
                <span className="text-xs text-secondary font-medium uppercase tracking-widest">
                  Earth (Remote)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
              <ul className="space-y-4 text-secondary leading-relaxed">
                {[
                  {
                    label: 'Scale & Growth',
                    text: 'Orchestrated the expansion of the engineering team from 10 to 40 members and company growth from ~50 to ~350 employees.',
                  },
                  {
                    label: 'Talent Acquisition',
                    text: 'Personally designed front-end interview challenges to ensure technical competency and high hiring standards during rapid growth phases.',
                  },
                  {
                    label: 'Technical Leadership',
                    text: 'Guided a cross-functional team of 9 teammates as the Technical Lead, orchestrating technical strategies, adding domain knowledge, and providing mentorship.',
                  },
                  {
                    label: 'Clinical Impact',
                    text: 'Expanded B2B footprint from 56k to 426k partner school districts, driving a 30x increase in clinical visits.',
                  },
                ].map(({ label, text }) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-emerald-500 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-primary dark:text-[#f7f9fb]">{label}:</strong> {text}
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 text-secondary leading-relaxed">
                {[
                  {
                    label: 'Quality & Efficiency',
                    text: 'Architected and implemented an org-wide bug triage process, managed web-client deployments, and scaled team capacity.',
                  },
                  {
                    label: 'Revenue Generation',
                    text: 'Developed numerous internal and customer-facing tools that increased mental health visits 3x.',
                  },
                  {
                    label: 'Architecture Modernization',
                    text: 'Decoupled a mission-critical monolith into independent web services, eliminating deployment bottlenecks.',
                  },
                  {
                    label: 'Development',
                    text: 'Developed a suite of web applications for diverse users—patients, medical providers, and school admins.',
                  },
                ].map(({ label, text }) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-emerald-500 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-primary dark:text-[#f7f9fb]">{label}:</strong> {text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EasyPost */}
          <div className="bg-surface-container-low dark:bg-[#1a233d] p-8 md:p-10 rounded-3xl border border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="font-headline font-bold text-2xl text-primary dark:text-[#f7f9fb] mb-1">
                  Senior Software Engineer/Supporting Designer
                </h3>
                <p className="text-on-tertiary-container font-bold text-lg">EasyPost</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-on-secondary-container bg-secondary-container px-4 py-1.5 rounded-full mb-1">
                  2015 — 2020
                </span>
                <span className="text-xs text-secondary font-medium uppercase tracking-widest">
                  San Francisco, CA
                </span>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-secondary leading-relaxed">
              {[
                'Spearheaded company growth from 12 to 300+ employees, contributing to various transformations.',
                'Led the development and management of front-end services, meeting the needs of 350k+ daily visitors.',
                'Worked with many teams on API design to meet both backend and frontend integration needs.',
                'Managed an internal npm package, providing SCSS styles, assets, and reusable React components.',
                'Incrementally refactored ES5 backbone.js app to an ES2018 react/redux-saga app.',
                'Managed style, content, and UX for all marketing, API docs, and knowledgebase pages for 4+ years.',
              ].map((text) => (
                <li key={text} className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-1">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* eBay */}
            <div className="bg-surface-container-low dark:bg-[#1a233d] p-8 rounded-3xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary dark:text-[#f7f9fb] mb-1">
                    Software Engineer &lt;&lt; Web Developer &lt;&lt; Designer &lt;&lt; Courier
                  </h3>
                  <p className="text-on-tertiary-container font-bold">eBay</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-on-secondary-container bg-secondary-container px-3 py-1 rounded-full">
                  2012 — 2014
                </span>
                <span className="text-[10px] text-secondary font-medium uppercase tracking-wider">
                  San Francisco, CA
                </span>
              </div>
              <ul className="space-y-3 text-secondary text-sm leading-relaxed">
                {[
                  'Within two years, climbed the ranks from delivery driver, to web designer, to software engineer.',
                  'Developed a RESTful web API to enable small and medium businesses to manage orders.',
                  'Built an AngularJS/Bootstrap web app to provide an interface to the API.',
                  'Created an internal dashboard for operations team. Stack: python, flask, psql, jQuery, bootstrap.',
                ].map((text) => (
                  <li key={text} className="flex gap-3">
                    <span className="text-emerald-500 font-bold">•</span> {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* OpenDNS & Others */}
            <div className="bg-surface-container-low dark:bg-[#1a233d] p-8 rounded-3xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary dark:text-[#f7f9fb] mb-1">
                    Software Engineer (Intern)
                  </h3>
                  <p className="text-on-tertiary-container font-bold">OpenDNS</p>
                </div>
                <span className="text-xs font-bold text-on-secondary-container bg-secondary-container px-3 py-1 rounded-full">
                  2014
                </span>
              </div>
              <p className="text-secondary text-sm mb-8 leading-relaxed">
                Designed and built an open-source public API for accessing domain info over
                TCP/HTTPS instead of UDP.
              </p>
              <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                {[
                  { title: 'Photographer – Freelance', years: '2008 — 2013' },
                  { title: 'Web/Graphic Designer – Freelance', years: '2011 — 2013' },
                  {
                    title: 'Airborne Battle Management Systems – US Air Force',
                    years: '2004 — 2008',
                  },
                ].map(({ title, years }) => (
                  <div key={title} className="flex justify-between items-center text-sm">
                    <span className="font-bold text-primary dark:text-[#f7f9fb]">{title}</span>
                    <span className="text-secondary">{years}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="font-headline font-extrabold text-3xl text-primary dark:text-[#f7f9fb] mb-4">
              Education
            </h2>
            <p className="text-secondary">Academic foundations and professional certifications.</p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              <div className="space-y-8">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-4">
                    Graduate
                  </h4>
                  <p className="font-bold text-primary dark:text-[#f7f9fb] text-lg">
                    M.S., Computer Science/Web Science
                  </p>
                  <p className="text-secondary">Stanford University • 2018</p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Previous study: San Francisco, CA (2014)
                  </p>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-4">
                    Undergraduate
                  </h4>
                  <p className="font-bold text-primary dark:text-[#f7f9fb] text-lg">
                    B.S., Visual Communication Design
                  </p>
                  <p className="text-secondary">San Francisco State University • 2011</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-4">
                    Certifications
                  </h4>
                  <p className="font-bold text-primary dark:text-[#f7f9fb] text-lg">
                    LAMP Fundamentals Certificate
                  </p>
                  <p className="text-secondary">City College of San Francisco • 2013</p>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-4">
                    Military
                  </h4>
                  <p className="font-bold text-primary dark:text-[#f7f9fb] text-lg">
                    A.A.S., Air and Space Operations Technology
                  </p>
                  <p className="text-secondary">Community College of the Air Force • 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 pb-16 text-center">
        <Link
          href="/recruiter"
          className="cta-gradient text-tertiary px-10 py-5 rounded-xl font-extrabold text-xl shadow-lg active:scale-95 transition-transform inline-block"
        >
          Check for Fit →
        </Link>
      </section>
    </main>
  )
}
