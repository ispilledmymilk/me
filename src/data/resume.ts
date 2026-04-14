/**
 * Site copy is aligned with resume.tex in the repo root.
 * Update resume.tex first, then mirror changes here (or automate later).
 */
export interface Contact {
  email: string;
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
}

export interface HeroHeadline {
  before: string;
  highlight: string;
  after: string;
}

export interface HeroContent {
  name: string;
  tagline: string;
  sticker: string;
  headline: HeroHeadline;
}

export interface BookingConfig {
  /** Public scheduling page (Calendly, Cal.com, …). Override: `PUBLIC_BOOKINGS_URL` */
  bookingsUrl: string;
  sticker: string;
  title: string;
  description: string;
  marqueeText: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

/** Grouped tech stack for project cards (Languages, Frameworks, etc.). */
export interface ProjectStackGroup {
  label: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  context?: string;
  dates: string;
  stackByCategory: ProjectStackGroup[];
  bullets: string[];
}

export interface EducationItem {
  school: string;
  credential: string;
  location: string;
  dates: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExtracurricularItem {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Resume {
  contact: Contact;
  hero: HeroContent;
  booking: BookingConfig;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  extracurriculars: ExtracurricularItem[];
  certifications: string[];
}

export const resume: Resume = {
  contact: {
    email: 'pkasturi@uwaterloo.ca',
    linkedin: {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sai-pranavi-kasturi-704807298',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/ispilledmymilk',
    },
  },
  hero: {
    name: 'Sai Pranavi Kasturi',
    tagline:
      'Computer Science (2B), University of Waterloo. I care about automation, testable systems, and full-stack delivery — and I use ML when it clearly improves the outcome.',
    sticker: 'Waterloo CS · automation · quality',
    headline: {
      before: 'I ship ',
      highlight: 'dependable software and strong automation',
      after: ' — with machine learning when it actually moves the needle.',
    },
  },
  booking: {
    bookingsUrl:
      'https://outlook.office.com/bookwithme/user/f92eabac618d40b0b5a7190f01425a43@uwaterloo.ca/meetingtype/W33sTLmNqUaWLWMrW0REuw2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile',
    sticker: 'COFFEE CHATS · RECRUITING · COLLABS',
    title: 'Let’s connect',
    description:
      'For recruiting, mentorship, or collaboration — grab a slot on my scheduling page, or email me if you prefer to start there.',
    marqueeText:
      'BUILD RELIABLE SYSTEMS · AUTOMATE THE BORING PARTS · SHIP WITH CONFIDENCE · OPEN TO RECRUITMENT · ',
  },
  experience: [
    {
      title: 'Automation Developer',
      company: 'Zoocasa',
      location: 'Toronto, Canada',
      dates: 'Jan 2026 – Apr 2026',
      bullets: [
        'Improved release predictability by building end-to-end test automation (Playwright, Postman) across JS and GoLang services, cutting manual QA effort 60% and shortening feedback loops for frontend and backend product teams.',
        'Shipped an AI-assisted compliance workflow: natural-language answers over policy docs, structured JSON configs generated from source files, and real-time updates on document changes, reducing manual review and clarifying impact for GTM stakeholders.',
        'Ran structured post-incident reviews on production defects across codebases; prioritized fixes that cut repeat incidents in high-risk areas and lifted reliability 47% (measurable defect trend).',
        'Partnered in sprint planning, sizing, and feature prioritization with PM, Design, and Engineering, translating goals into shippable increments and keeping delivery dates honest.',
      ],
    },
    {
      title: 'QA Specialist',
      company: 'DocTalk',
      location: 'Toronto, Canada',
      dates: 'May 2025 – Aug 2025',
      bullets: [
        'Defined and documented 1500+ functional requirements and test cases (edge cases, failure modes), single source of truth between Product and Engineering for scope, acceptance, and release readiness.',
        'Owned B2B SaaS web work end-to-end: shipped clinician/admin-facing improvements, closed UX gaps from support feedback, and validated flows with clinical stakeholders before release.',
        'Built automated regression coverage (1000+ scenarios, REST + UI, Playwright/Postman) so teams could ship with clearer risk picture and fewer production surprises.',
      ],
    },
    {
      title: 'Market Analyst Consultant',
      company: 'Happy Sneeze',
      location: 'USA, Remote',
      dates: 'Apr 2024 – Jul 2024',
      bullets: [
        'Produced a competitive landscape and financial benchmarking for 15+ health-market players; ETL and analysis pipelines turned raw filings and metrics into exec-ready product and positioning implications.',
        'Sized market segments and growth trends via reporting and scenario analysis; delivered concise memos that informed go-to-market and strategic bets at leadership level.',
        'Recommended 10 partnership targets and built a structured outreach narrative (value props, talk tracks) aligned to growth goals, supporting BD conversations from first touch to follow-up.',
      ],
    },
  ],
  projects: [
    {
      name: 'OmenAI',
      context: 'TD Best AI hack to detect financial fraud',
      dates: 'Mar 2026',
      stackByCategory: [
        { label: 'Languages', items: ['Python (scikit-learn)'] },
        { label: 'Frameworks', items: ['Next.js'] },
        { label: 'Data & storage', items: ['PostgreSQL', 'Redis'] },
      ],
      bullets: [
        'Framed insider-risk as an analyst-facing product problem on prediction markets; scoped an MVP around unlabeled trade streams and tiered risk signals (rules + Isolation Forest) with narrative explanations for triage.',
        'Prioritized 600K+ live trades into wallet-level features (velocity, sizing, win-rate drift) and segment-specific thresholds, balancing false positives vs. investigation load for demo users.',
        'Shipped a live operations dashboard (streaming feeds, on-chain context, radar views, wallet drill-down) for TD Best AI / GenAI Genesis 2026 (Gold sponsor winner).',
      ],
    },
    {
      name: 'Weathwise',
      dates: 'Dec 2025',
      stackByCategory: [
        { label: 'Languages', items: ['Java', 'TypeScript'] },
        { label: 'Frameworks', items: ['Spring Boot', 'Angular'] },
        { label: 'Data & storage', items: ['PostgreSQL', 'MongoDB'] },
        { label: 'Security', items: ['JWT'] },
        { label: 'Testing & infrastructure', items: ['Postman', 'Docker'] },
      ],
      bullets: [
        'Defined security and data-isolation requirements for a personal-finance style workflow (JWT, per-user row scoping, schema versioning), translated into API contracts the web client could ship against.',
        'Scoped OLTP vs. analytics paths (PostgreSQL vs. MongoDB) and failure-isolated batch slices so one bad account could not block aggregate jobs, with explicit tradeoffs for reliability vs. cost.',
        'Delivered a containerized MVP (Docker Compose, health checks, reverse-proxied SPA) with documented APIs and automated tests on auth and aggregation, repeatable path from local to demo.',
      ],
    },
    {
      name: 'eXplicit',
      dates: 'Jan 2026',
      stackByCategory: [
        { label: 'Languages', items: ['Python'] },
        { label: 'APIs & integrations', items: ['Google Drive API', 'OpenAI'] },
        { label: 'Data & automation', items: ['JSON', 'Workflow automation'] },
      ],
      bullets: [
        'Reduced manual policy review by shipping natural-language Q&A over real-estate feed rules with answers grounded in source docs, clear user value for ops and compliance reviewers.',
        'Owned the document-to-config pipeline: ingestion from Google Drive, structured JSON artifacts per jurisdiction/profile, and removal of spreadsheet handoffs that caused versioning errors.',
        'Implemented change notifications on Drive edits to regenerate configs, keeping downstream validators aligned with the latest policy without silent drift.',
      ],
    },
    {
      name: 'Squasher',
      context: 'CodeDecay QA',
      dates: 'Jan 2026',
      stackByCategory: [
        { label: 'Languages', items: ['Python', 'TypeScript'] },
        { label: 'Frameworks & platforms', items: ['FastAPI', 'LangGraph', 'VS Code API'] },
        { label: 'Data & storage', items: ['ChromaDB', 'SQLite'] },
        { label: 'DevOps & quality', items: ['Docker', 'pytest'] },
      ],
      bullets: [
        'Shipped a split client–server quality platform: FastAPI service exposing file-, repo-, and pre-commit-oriented analysis endpoints, paired with a TypeScript VS Code extension that surfaces risk dashboards and one-click re-runs from the editor.',
        'Orchestrated analysis as a LangGraph state machine—Radon-backed complexity, git-blame velocity signals, static import graphs, and ChromaDB vector retrieval over curated anti-pattern corpora—fused into a 0–100 decay score with severity bands and remediation text.',
        'Operationalized the backend for real teams: SQLite metric history, embedding lifecycle in Chroma, WebSocket progress fan-out for long scans, Dockerized deploys with auth and health probes, and pytest suites locking agent contracts and API regressions.',
      ],
    },
    {
      name: 'Saiborg',
      dates: 'Nov 2025',
      stackByCategory: [
        { label: 'Languages', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
        { label: 'Frameworks & runtime', items: ['FastAPI', 'Electron', 'Uvicorn'] },
      ],
      bullets: [
        'Implemented a FastAPI-centered assistant shell with a browser SPA: Web Speech–driven voice capture, typed chat transcripts, and a search plane that prefers Google Programmable Search (with DDG-style fallback) then optionally routes hits through Claude or Gemini for grounded, link-preserving summaries.',
        'Integrated Google Calendar end-to-end—OAuth desktop flow, token refresh, and CRUD helpers for upcoming events and quick-add flows—plus an Electron wrapper that supervises uvicorn, exposes a frameless desktop shell, and deep-links file pickers where needed.',
        'Production-minded configuration: `.env`-driven API keys for search and LLM providers, optional Spotify OAuth for “now playing” cards, Vercel-oriented deploy notes, and documented cold-start paths for both web-only and Electron-first users.',
      ],
    },
    {
      name: 'Smart Mirror — AuraGlass',
      dates: 'Oct 2024',
      stackByCategory: [
        { label: 'Languages & scripting', items: ['Bash', 'JavaScript'] },
        { label: 'Hardware', items: ['Raspberry Pi 4'] },
        { label: 'APIs & integrations', items: ['OpenAI'] },
        { label: 'DevOps', items: ['GitLab CI'] },
      ],
      bullets: [
        'Led firmware-adjacent productization on Raspberry Pi 4: modular JavaScript services behind a Bash-orchestrated boot path, integrating Google Calendar, Spotify, and OpenAI-powered glanceable cards with GitLab CI for repeatable builds.',
        'Owned module architecture and integration testing across seven mirror surfaces—latency-budgeted UI loops, API quota handling, and graceful degradation when third-party endpoints throttle or fail.',
        'Ran the team through specification, integration spikes, and demo hardening; shipped a research-grade mirror stack benchmarked at ~90% scenario pass rate on acceptance scripts.',
      ],
    },
    {
      name: 'Running Alarm Clock — Alarmy',
      dates: 'Sept 2023',
      stackByCategory: [
        { label: 'Languages', items: ['Java'] },
        { label: 'Embedded', items: ['Arduino'] },
        { label: 'Tooling', items: ['Git'] },
      ],
      bullets: [
        'Engineered a Java-hosted verification harness around an Arduino “runaway” alarm firmware: serial protocol tracing, timed actuator assertions, and Git-tracked fixtures so hardware regressions were reproducible on the bench.',
        'Authored 20+ automated and semi-automated cases spanning wake windows, snooze edge cases, power-loss recovery, and motor-drive fault injection—tightening loop latency until the clock hit an 80% measured pass rate on the full matrix.',
        'Published traceable QA artifacts—15+ documented cases with inputs, oracle behavior, and captured traces—for regression sign-off and performance baselines ahead of milestone demos.',
      ],
    },
  ],
  education: [
    {
      school: 'University of Waterloo',
      credential: 'Bachelor of Computer Science - 2B',
      location: 'Waterloo, Canada',
      dates: 'Sept 2024 – Present',
    },
  ],
  skills: [
    {
      label: 'Product & collaboration',
      items: [
        'Agile',
        'JIRA',
        'Figma',
        'Excel',
        'Tableau',
        'Power BI',
        'Requirements & acceptance criteria',
        'User stories',
        'SDLC',
        'Cross-functional delivery',
      ],
    },
    {
      label: 'Languages & runtimes',
      items: ['Python', 'Java', 'C++', 'GoLang', 'JavaScript', 'TypeScript'],
    },
    {
      label: 'Python & data',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'PyTorch'],
    },
    {
      label: 'Web & APIs',
      items: ['Spring Boot', 'Angular', 'REST APIs', 'JWT'],
    },
    {
      label: 'Datastores',
      items: ['PostgreSQL', 'MongoDB', 'SQL', 'Supabase'],
    },
    {
      label: 'Platform & delivery',
      items: [
        'Git',
        'Docker',
        'CI/CD',
        'DevOps',
        'Linux',
        'Bash',
        'Shell scripting',
        'AWS',
        'Azure',
        'Maven',
        'JUnit',
        'Flyway',
        'Karma',
        'GTest',
      ],
    },
    {
      label: 'Quality & tools',
      items: ['Postman', 'Playwright', 'Raspberry Pi', 'DocketQA'],
    },
  ],
  extracurriculars: [
    {
      title: 'Events Director',
      org: 'UW Product Management Club',
      location: 'Waterloo, Canada',
      dates: 'Sept 2025 – Dec 2025',
      bullets: [
        'Led end-to-end event planning and execution for UW PMC, from ideation and run-of-show through follow-up, balancing sponsor needs, venue constraints, and attendee experience.',
        'Partnered with marketing on campaigns that lifted attendance and engagement; aligned messaging with club leadership goals.',
        'Delegated setup/teardown and volunteer roles for small- and large-scale events; de-risked day-of logistics with contingency checklists.',
      ],
    },
    {
      title: 'Campus Ambassador',
      org: 'Velocity',
      location: 'Waterloo, Canada',
      dates: 'Sept 2025 – Dec 2025',
      bullets: [
        'Managed event-day operations, including check-in, food stations, supply distribution, wayfinding, and attendee support.',
        'Promoted campus events and programs through social media campaigns and word-of-mouth outreach.',
        'Organized social activities to engage the Velocity community and strengthen campus connections.',
      ],
    },
  ],
  certifications: [
    'Completed AWS Beginners certification and Data Analysis Certification by LinkedIn, API Postman certification.',
    'Won Gold Sponsor TD Best AI Hack to detect financial fraud at GenAI Genesis hackathon 2026.',
  ],
};

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#extracurriculars', label: 'Leadership' },
  { href: '#certifications', label: 'Awards' },
  { href: '#meet', label: 'Meet' },
  { href: '#contact', label: 'Contact' },
] as const;
