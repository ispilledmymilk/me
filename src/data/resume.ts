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
  /** Calendly / Cal.com / Google Appointment page (opens in new tab from buttons). Optional: PUBLIC_BOOKING_SCHEDULE_URL */
  scheduleUrl: string;
  /**
   * Full Calendly scheduling URL for the inline widget (e.g. https://calendly.com/you/30min).
   * Optional: PUBLIC_CALENDLY_EVENT_URL in .env
   */
  calendlyEventUrl: string | null;
  /** Generic iframe embed (e.g. Cal.com …/embed). Used only if calendlyEventUrl is empty. Optional: PUBLIC_BOOKING_IFRAME_URL */
  iframeSrc: string | null;
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

export interface ProjectItem {
  name: string;
  context?: string;
  dates: string;
  stack: string[];
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
    scheduleUrl: 'https://calendly.com/ispilledmymilk',
    calendlyEventUrl: 'https://calendly.com/ispilledmymilk',
    iframeSrc: null,
    sticker: 'COFFEE CHATS · RECRUITING · COLLABS',
    title: 'Book time with me',
    description:
      'Schedule a quick call for recruiting, mentorship, or collaboration. If no calendar is connected yet, use email — I respond fast.',
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
        'Built end-to-end automation infrastructure using Playwright and Postman across JS and GoLang codebases, reducing manual testing overhead by 60% and accelerating release cycles across all active product teams (frontend and backend teams).',
        'Engineered an AI-powered feed compliance bot that answers natural language regulatory queries, auto-generates structured JSON configs from documents, and triggers real-time workflow updates on document changes, eliminating manual tracking.',
        'Conducted root cause analysis on production failures by reviewing cross-language codebases to identify systemic failure patterns, reducing defect recurrence in high-risk areas and improving overall system reliability by 47%.',
        'Contributed to full SDLC including sprint planning, effort estimation, and feature prioritization in an Agile environment, collaborating cross-functionally with developers, designers, and product managers to meet delivery timelines.',
      ],
    },
    {
      title: 'QA Specialist',
      company: 'DocTalk',
      location: 'Toronto, Canada',
      dates: 'May 2025 – Aug 2025',
      bullets: [
        'Architected scalable automated testing infrastructure covering 1000+ test scenarios across REST APIs and frontend services using Playwright and Postman, improving defect detection rates and reducing regression risk prior to each production release.',
        'Owned frontend development and maintenance of a B2B SaaS platform, independently implementing new user-facing features, resolving UI bugs, and improving UX workflows to enhance usability for clinical and administrative end users.',
        'Defined and documented 1500+ functional requirements and test cases covering edge cases and failure scenarios, bridging engineering and product teams to align technical execution with business goals and ensure on-time, high-quality feature delivery.',
      ],
    },
    {
      title: 'Market Analyst Consultant',
      company: 'Happy Sneeze',
      location: 'USA, Remote',
      dates: 'Apr 2024 – Jul 2024',
      bullets: [
        'Developed a competitive landscape map by conducting extensive data analysis and financial performance assessments of 15+ key players in the health market, leveraging ETL techniques to extract and process large volumes of data into actionable insights.',
        'Performed comprehensive research using data transformation and reporting techniques to analyze annual growth rate, key segments, and emerging trends, delivering structured reports that directly informed executive-level strategic decisions.',
        'Identified 10 valuable partners and developed a targeted outreach strategy with personalized messaging frameworks to engage stakeholders in discussions, ensuring alignment with corporate growth goals, market positioning and partnership objectives.',
      ],
    },
    {
      title: 'IT Support Help',
      company: 'Indian Language School',
      location: 'Lagos, Nigeria',
      dates: 'Apr 2022 – Mar 2023',
      bullets: [
        'Provided technical support to 1500+ students, resolving 90 issues weekly related to hardware, software, and network.',
        'Managed tickets and troubleshot 50+ requests per week, including system errors, printer malfunctions, and access issues.',
        'Assisted in maintaining 200+ campus devices, performing updates, installations, and security patches to ensure uptime.',
      ],
    },
  ],
  projects: [
    {
      name: 'OmenAI',
      context: 'TD Best AI hack to detect financial fraud',
      dates: 'Mar 2026',
      stack: ['Python (scikit-learn)', 'PostgreSQL', 'Next.js', 'Redis'],
      bullets: [
        'Architected an unsupervised risk pipeline over 600K+ live trades: engineered wallet-level features (velocity, sizing, win-rate drift), tiered rule-based gates, and scikit-learn Isolation Forest scoring with LLM-generated narrative explanations for analyst-grade triage.',
        'Shipped a Next.js real-time operations dashboard on PostgreSQL and Redis-backed streams—sub-second refresh on ingested trades, on-chain context panels, radar and distribution views, and drill-down wallet forensics without curated labels.',
        'Treated insider-trading detection as a cold-start learning problem: calibrated anomaly thresholds per market segment, surfaced model uncertainty in the UI, and demoed end-to-end at TD Best AI (GenAI Genesis 2026).',
      ],
    },
    {
      name: 'Weathwise',
      dates: 'Dec 2025',
      stack: [
        'Java',
        'Spring Boot',
        'Angular',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'JWT',
        'Postman',
      ],
      bullets: [
        'Designed a stateless Spring Boot service behind JWT bearer auth with strict row-level user scoping on every financial mutation, versioned relational schema migrations, and twelve-factor config for repeatable Docker Compose deploys.',
        'Split OLTP vs. analytical paths across PostgreSQL and MongoDB: synchronous REST contracts for balances and transfers, document-backed rollups for aggregates, and fault-isolated batch slices so one bad account cannot poison a global job.',
        'Hardened the edge: reverse-proxied Angular SPA, container health gates before traffic, Postman collections plus automated regression over auth flows and aggregation endpoints—documentation kept in lockstep with the OpenAPI contract.',
      ],
    },
    {
      name: 'eXplicit',
      dates: 'Jan 2026',
      stack: ['Python', 'Google Drive API', 'OpenAI', 'JSON', 'Workflow automation'],
      bullets: [
        'Built a retrieval-grounded compliance copilot over Google Drive corpora: natural-language Q&A with citations back to source clauses, backed by OpenAI structured outputs and a versioned JSON schema for downstream feed validators.',
        'Automated the document→config loop: ingestion, normalization, and deterministic JSON artifact generation per jurisdiction or feed profile, replacing spreadsheet-driven handoffs with auditable, diffable configuration artifacts.',
        'Implemented change propagation on Drive revisions—idempotent regeneration jobs, conflict-safe merges when multiple editors touch policy docs, and guardrails so stale configs never ship to production workflows.',
      ],
    },
    {
      name: 'Squasher',
      context: 'CodeDecay QA',
      dates: 'Jan 2026',
      stack: [
        'Python',
        'FastAPI',
        'TypeScript',
        'VS Code API',
        'LangGraph',
        'ChromaDB',
        'SQLite',
        'Docker',
        'pytest',
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
      stack: ['Python', 'FastAPI', 'Electron', 'JavaScript', 'HTML', 'CSS', 'Uvicorn'],
      bullets: [
        'Implemented a FastAPI-centered assistant shell with a browser SPA: Web Speech–driven voice capture, typed chat transcripts, and a search plane that prefers Google Programmable Search (with DDG-style fallback) then optionally routes hits through Claude or Gemini for grounded, link-preserving summaries.',
        'Integrated Google Calendar end-to-end—OAuth desktop flow, token refresh, and CRUD helpers for upcoming events and quick-add flows—plus an Electron wrapper that supervises uvicorn, exposes a frameless desktop shell, and deep-links file pickers where needed.',
        'Production-minded configuration: `.env`-driven API keys for search and LLM providers, optional Spotify OAuth for “now playing” cards, Vercel-oriented deploy notes, and documented cold-start paths for both web-only and Electron-first users.',
      ],
    },
    {
      name: 'Smart Mirror — AuraGlass',
      dates: 'Oct 2024',
      stack: ['Bash', 'JavaScript', 'GitLab', 'OpenAI', 'API', 'Raspberry Pi 4'],
      bullets: [
        'Led firmware-adjacent productization on Raspberry Pi 4: modular JavaScript services behind a Bash-orchestrated boot path, integrating Google Calendar, Spotify, and OpenAI-powered glanceable cards with GitLab CI for repeatable builds.',
        'Owned module architecture and integration testing across seven mirror surfaces—latency-budgeted UI loops, API quota handling, and graceful degradation when third-party endpoints throttle or fail.',
        'Ran the team through specification, integration spikes, and demo hardening; shipped a research-grade mirror stack benchmarked at ~90% scenario pass rate on acceptance scripts.',
      ],
    },
    {
      name: 'Running Alarm Clock — Alarmy',
      dates: 'Sept 2023',
      stack: ['Java', 'Arduino', 'Git'],
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
      credential: 'Bachelors of Computer Science - 2B',
      location: 'Waterloo, Canada',
      dates: 'Sept 2024 – Present',
    },
  ],
  skills: [
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
      label: 'This portfolio',
      items: ['Astro', 'Tailwind CSS', 'Vite', 'Node.js'],
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
      items: ['Postman', 'Playwright', 'Raspberry Pi', 'Agile', 'JIRA', 'Excel', 'Figma', 'Tableau', 'Power BI', 'DocketQA'],
    },
  ],
  extracurriculars: [
    {
      title: 'Events Director',
      org: 'UW Product Management Club',
      location: 'Waterloo, Canada',
      dates: 'Sept 2025 – Dec 2025',
      bullets: [
        'Lead end-to-end event planning and execution for campus organization events, managing logistics from ideation to follow-up.',
        'Coordinate promotional campaigns with the marketing team to increase event attendance and engagement.',
        'Organize teams, delegate tasks effectively, and lead setup and teardown for small- and large-scale events.',
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
    {
      title: 'Engineering and Campus Ambassador',
      org: 'University of Waterloo',
      location: 'Waterloo, Canada',
      dates: 'Sept 2024 – Present',
      bullets: [
        'Represented campus programs and helped attract prospective students to engineering and campus housing.',
        'Guided 50+ students during tours, answering questions about engineering life, schedules, and housing.',
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
