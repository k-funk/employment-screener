import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from '@/lib/contact'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import WorkExperience from '@/components/WorkExperience'

export default function ResumePage() {
  return (
    <main className="pt-24 pb-16 flex-grow">
      <Hero />
      <TechnicalMastery />
      <WorkExperienceSection />
      <Education />
      <CTA />
    </main>
  )
}

function PrimarySection({
  title,
  blurb,
  variant = 'default',
  children,
}: PropsWithChildren<{ title: string; blurb: string; variant?: 'default' | 'inverse' }>) {
  const sectionClass = variant === 'inverse' ? 'bg-primary text-white py-20' : 'py-20'
  const titleClass = variant === 'inverse' ? 'text-surface-bright' : 'text-foreground'
  const blurbClass = variant === 'inverse' ? 'text-primary-fixed-dim' : 'text-secondary'
  return (
    <section className={sectionClass}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className={`font-headline font-extrabold text-4xl mb-4 ${titleClass}`}>{title}</h2>
          <div className="w-24 h-1.5 cta-gradient rounded-full mb-4" />
          <p className={`text-lg max-w-md ${blurbClass}`}>{blurb}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            Available for Senior Roles
          </div>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tighter leading-tight mb-8">
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
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/recruiter"
              className="cta-gradient text-tertiary px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg active:scale-95 transition-all inline-block"
            >
              Check for Fit
            </Link>
            <a
              href="/kfunk_resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled px-8 py-4 rounded-xl font-bold text-lg active:scale-95 transition-all inline-block"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 pt-12">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant ambient-shadow">
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
  )
}

function TechnicalMastery() {
  return (
    <PrimarySection
      title="Technical Mastery"
      blurb="A comprehensive toolkit spanning modern frontend architectures to robust backend services."
      variant="inverse"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed font-bold">
              Primary Tech Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'NodeJS', 'Vite/Webpack', 'React', 'Redux', 'NextJS', 'ExpressJS', 'Basic PSQL'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl font-medium border border-outline-variant bg-primary-container text-primary-fixed"
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
                    className="px-4 py-2 bg-primary-container/50 text-primary-fixed rounded-xl font-medium border border-outline-variant"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
    </PrimarySection>
  )
}

function WorkExperienceSection() {
  return (
    <PrimarySection
      title="Work Experience"
      blurb="13 years building across hyper-growth startups and enterprise-scale software."
      variant="default"
    >
      <div className="space-y-8">
        <WorkExperience
          title="Staff Software Engineer << Senior Software Engineer"
          company="Hazel Health"
          startYear={2020}
          endYear={2026}
          location="Earth (Remote)"
        >
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
                  <span className="text-emerald-500 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">{label}:</strong> {text}
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
                  <span className="text-emerald-500 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">{label}:</strong> {text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </WorkExperience>

        <WorkExperience
          title="Senior Software Engineer/Supporting Designer"
          company="EasyPost"
          startYear={2015}
          endYear={2020}
          location="San Francisco, CA"
        >
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
                <span className="text-emerald-500 font-bold">•</span>
                {text}
              </li>
            ))}
          </ul>
        </WorkExperience>

        <WorkExperience
          title="Software Engineer << Web Developer << Designer << Courier"
          company="eBay"
          startYear={2012}
          endYear={2014}
          location="San Francisco, CA"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-secondary leading-relaxed">
            {[
              'Within two years, climbed the ranks from delivery driver, to web designer, to software engineer.',
              'Developed a RESTful web API to enable small and medium businesses to manage orders.',
              'Built an AngularJS/Bootstrap web app to provide an interface to the API.',
              'Created an internal dashboard for operations team. Stack: python, flask, psql, jQuery, bootstrap.',
            ].map((text) => (
              <li key={text} className="flex gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                {text}
              </li>
            ))}
          </ul>
        </WorkExperience>

        <WorkExperience
          title="Software Engineer (Intern)"
          company="OpenDNS"
          startYear={2014}
          endYear={2014}
          location="San Francisco, CA"
        >
          <ul className="text-secondary leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold">•</span>
              Designed and built an open-source public API for accessing domain info over
              TCP/HTTPS instead of UDP.
            </li>
          </ul>
        </WorkExperience>

        <WorkExperience
          title="Photographer"
          company="Freelance"
          startYear={2008}
          endYear={2013}
          location="San Francisco & Napa Valley, CA"
        />
        <WorkExperience
          title="Web/Graphic Designer"
          company="Freelance"
          startYear={2011}
          endYear={2013}
          location="San Francisco & Napa Valley, CA"
        />
        <WorkExperience
          title="Airborne Battle Management Systems"
          company="US Air Force"
          startYear={2004}
          endYear={2008}
          location="Various"
        />
      </div>
    </PrimarySection>
  )
}

function Education() {
  return (
    <PrimarySection
      title="Education"
      blurb="Academic foundations and professional certifications."
      variant="inverse"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          <div className="space-y-8">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-tertiary-fixed font-bold mb-4">
                Graduate
              </h4>
              <p className="font-bold text-surface-bright text-lg">
                M.S., Computer Science/Web Science
              </p>
              <p className="text-primary-fixed-dim">Stanford University • 2018</p>
              <p className="text-xs text-primary-fixed-dim opacity-60 mt-1">
                Previous study: San Francisco, CA (2014)
              </p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-tertiary-fixed font-bold mb-4">
                Undergraduate
              </h4>
              <p className="font-bold text-surface-bright text-lg">
                B.S., Visual Communication Design
              </p>
              <p className="text-primary-fixed-dim">San Francisco State University • 2011</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-tertiary-fixed font-bold mb-4">
                Certifications
              </h4>
              <p className="font-bold text-surface-bright text-lg">
                LAMP Fundamentals Certificate
              </p>
              <p className="text-primary-fixed-dim">City College of San Francisco • 2013</p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-tertiary-fixed font-bold mb-4">
                Military
              </h4>
              <p className="font-bold text-surface-bright text-lg">
                A.A.S., Air and Space Operations Technology
              </p>
              <p className="text-primary-fixed-dim">Community College of the Air Force • 2008</p>
            </div>
          </div>
        </div>
    </PrimarySection>
  )
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto pt-16 pb-8 text-center">
      <Link
        href="/recruiter"
        className="cta-gradient text-tertiary px-10 py-5 rounded-xl font-extrabold text-xl shadow-lg active:scale-95 transition-all inline-block"
      >
        Check for Fit
      </Link>
    </section>
  )
}
