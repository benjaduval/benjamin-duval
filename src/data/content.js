/** Site copy & data — freelance positioning: Technical Execution Partner */

export const site = {
  calendlyUrl: 'https://calendly.com/benjaduval/30min',
  email: 'benjaduval@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/benjaminduval/',
  location: 'Brussels, Belgium',
}

export const profile = {
  name: 'Benjamin Duval',
  portrait: '/assets/portrait/benjamin-duval.png',
}

export const hero = {
  eyebrow: 'For ambitious startups, scale-ups & founders',
  title: 'You have the vision. I build and scale your technology product.',
  subtitle:
    "Don't let technical complexity slow your growth. Combining C-Level strategic vision with cutting-edge execution (AI & Web3), I turn complex ideas into profitable, market-ready products.",
  ctaPrimary: "Let's talk growth",
  ctaSecondary: 'See execution results ↓',
  background: '/assets/hero/benjamin-speaking.png',
}

export const socialProof = [
  { value: 12, prefix: '+', suffix: 'M$', label: 'Capital raised (ICO, IEO, VC)' },
  { value: 150, prefix: '+', suffix: 'M$', label: 'Assets under management at peak' },
  { value: 8, suffix: '+', label: 'AI applications deployed in production' },
  { value: 12, suffix: ' yrs', label: 'Tech & product scaling experience' },
]

export const empathy = {
  title: 'Building an innovative product in 2026 should not be a financial black hole or an endless marathon.',
  paragraphs: [
    'You know AI or blockchain can transform your business. But between hiring the right talent, architecture choices, regulatory compliance, and Go-To-Market pressure, execution becomes chaotic.',
    'As a former CEO and COO who founded and exited multiple companies — from FinTech to SaaS — I have hit those walls. I have seen millions spent on endless roadmaps.',
    'Today, I step in as your execution partner: I cut the noise, structure your strategy, and ship the product. Fast.',
  ],
}

export const services = [
  {
    id: 'cpo',
    number: '01',
    title: 'Fractional CPO & Product Leadership',
    audience: 'Companies that need experienced product leadership without hiring a full-time C-Level executive.',
    impact: 'From MVP design to large-scale platform. Team management, roadmaps, UX/UI, and alignment with your P&L goals.',
    metric: 'Reduced time-to-market through structured execution from day one.',
    icon: 'layers',
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
  },
  {
    id: 'ai',
    number: '02',
    title: 'Custom AI Integration & Automation',
    audience: 'Businesses looking to drastically cut costs or build new AI-powered SaaS products.',
    impact: 'Complex AI orchestration, rapid application development (Claude, OpenAI, Gemini, Cursor) to automate operations or launch your next product.',
    metric: 'Working prototype delivered in weeks, not months.',
    icon: 'sparkles',
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
  {
    id: 'web3',
    number: '03',
    title: 'Web3, DeFi & Crypto Infrastructure',
    audience: 'Traditional financial institutions and Web3 projects building reliable, compliant bridges.',
    impact: 'Smart contract architecture, protocol integration (0x, Alchemy), sustainable tokenomics, and market-making strategies.',
    metric: '20+ DeFi protocols integrated · audited infrastructures managing millions.',
    icon: 'blocks',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
]

export const caseStudies = [
  {
    id: 'flowo',
    company: 'Flowo',
    logo: '/assets/logos/flowo.png',
    logoInvert: true,
    url: 'https://getflowo.com',
    image: '/assets/projects/flowo/hero-flowo-dashboard-v5.webp',
    gallery: [
      { src: '/assets/projects/flowo/hero-flowo-dashboard-v5.webp', alt: 'Flowo dashboard' },
      { src: '/assets/projects/flowo/ai-chat-mockup.webp', alt: 'Flowo AI assistant' },
      { src: '/assets/projects/flowo/one-click-week-calendar-v2.webp', alt: 'One-click week planning' },
      { src: '/assets/projects/flowo/tour-step-tasks.png', alt: 'Task management' },
      { src: '/assets/projects/flowo/tour-step-ai.png', alt: 'AI scheduling' },
    ],
    video: 'https://www.youtube.com/embed/RYvWHKIFIng',
    tag: 'AI · SaaS · Productivity',
    product:
      'Flowo is an AI-native productivity platform: unified calendar, tasks, notes, and an AI copilot that plans your week, reschedules on the fly, and adapts to ADHD-friendly workflows. Built A-to-Z — product vision, UX, AI orchestration, billing, and go-to-market.',
    contribution:
      'End-to-end product architecture, AI agent configuration, full-stack development with cutting-edge AI tooling, landing pages, onboarding, and launch strategy.',
    outcome:
      'Zero-to-market in 3 weeks. 450+ users acquired in 14 days on an €800 total marketing budget.',
    stat: '450+ users in 14 days · €800 total launch budget',
    accent: '#a78bfa',
  },
  {
    id: 'monetum',
    company: 'Monetum',
    logo: '/assets/projects/monetum.png',
    logoInvert: true,
    url: 'https://monetum.com',
    image: '/assets/projects/monetum-dashboard.jpg',
    gallery: [
      { src: '/assets/projects/monetum-dashboard.jpg', alt: 'Monetum unified dashboard' },
    ],
    tag: 'Crypto-banking · TradFi × Web3',
    product:
      'Monetum is a regulated European financial platform combining business IBAN accounts, SEPA payments, open banking APIs, and integrated crypto wallets — one dashboard for fiat and digital assets.',
    contribution:
      'As COO, I led the product pivot from open-banking to crypto-banking: DeFi institutional strategy, cross-functional team management, regulatory compliance, and hybrid infrastructure design.',
    outcome:
      'Successful brand repositioning and a robust hybrid infrastructure serving institutional clients across TradFi and Web3.',
    stat: 'Full open-banking → crypto-banking transformation',
    accent: '#6366f1',
  },
  {
    id: 'upbots-superbots',
    company: 'UpBots & SuperBots',
    logos: [
      { src: '/assets/logos/upbots.png', invert: true },
      { src: '/assets/logos/superbots.png', invert: true },
    ],
    url: 'https://upbots.io',
    urls: [
      { label: 'UpBots', href: 'https://upbots.io' },
      { label: 'SuperBots', href: 'https://www.superbots.finance' },
    ],
    image: '/assets/projects/superbots-dashboard.png',
    gallery: [
      { src: '/assets/projects/superbots-dashboard.png', alt: 'SuperBots vault dashboard' },
      { src: '/assets/projects/upbots-app.png', alt: 'UpBots trading platform' },
    ],
    video: 'https://www.youtube.com/embed/kaDk4vdRS-M',
    tag: 'DeFi · Trading · Fundraising',
    product:
      'UpBots is a multi-exchange crypto trading hub with automated bots and portfolio tools. SuperBots extends this into DeFi with on-chain vaults, staking, and audited smart contracts on BSC — a full trading ecosystem from CeFi to DeFi.',
    contribution:
      'Co-founded both platforms. Tokenomics design, ecosystem architecture, fundraising (ICO/IEO/private sales), exchange listings, and strategic partnerships (FTX, KuCoin).',
    outcome:
      '$8M+ raised, $50M peak market cap, $20M+ assets under management, with security audits validated.',
    stat: '$8M+ raised · $50M market cap · $20M+ AUM',
    accent: '#2dd4bf',
  },
  {
    id: 'cortex',
    company: 'Cortex Machina',
    logo: '/assets/logos/cortex-machina.png',
    logoInvert: true,
    url: 'https://www.cortex-machina.com',
    image: '/assets/projects/cortex-dashboard.jpg',
    gallery: [
      { src: '/assets/projects/cortex-dashboard.jpg', alt: 'Cortex Machina platform' },
      { src: '/assets/projects/cortex-team.png', alt: 'Cortex Machina team' },
    ],
    tag: 'AI · Healthcare · BCI',
    product:
      'Cortex Machina builds plug-and-play brain-computer interface (BCI) systems: dry-electrode EEG hardware (Vortex headset), Cortex Machina PRO software with real-time AI neural pattern detection, and a developer API for custom medical and research applications.',
    contribution:
      'Co-founded as CMO & Co-Founder. Product & go-to-market strategy, hospital partnerships, initial €1M fundraising, and full GDPR/HIPAA compliance framework.',
    outcome:
      'Partnerships secured with 3 major hospitals, €1M initial raise organized, and full regulatory compliance validated.',
    stat: '3 hospital partners · €1M raised · Compliance validated',
    accent: '#fb7185',
  },
]

export const about = {
  title: 'Benjamin Duval — Builder first.',
  paragraphs: [
    'I was not born a consultant. For over 12 years, I have been in your shoes.',
    'Based in Belgium, I have founded, funded, and scaled technology companies from a blank page to valuations in the tens of millions of dollars.',
    'I learned the hard way what works and what fails. I understood that the most elegant line of code is worthless if it does not serve acquisition, retention, or profitability.',
    'Today, I leverage the unmatched power of AI and my crisis management and Web3 experience to offer what I wished I had as CEO: a technical partner who instantly understands my business model and executes it flawlessly.',
  ],
}

export const finalCta = {
  title: 'Ready to turn your roadmap into a live product?',
  text: "Let's stop talking theory. Book a 30-minute strategy call with me. We'll analyze your current bottleneck, your AI or Web3 needs, and define an immediate execution plan. No commitment.",
  button: 'Book my strategy call',
}

export const techPartners = [
  { name: 'OpenAI', label: 'OpenAI' },
  { name: 'Claude', label: 'Anthropic' },
  { name: 'Alchemy', label: 'Alchemy' },
  { name: '0x', label: '0x Protocol' },
  { name: 'KuCoin', label: 'KuCoin' },
  { name: 'Cursor', label: 'Cursor' },
]

export const clientLogos = [
  { name: 'Monetum', src: '/assets/projects/monetum.png', small: true },
  { name: 'Flowo', src: '/assets/logos/flowo.png' },
  { name: 'UpBots', src: '/assets/logos/upbots.png' },
  { name: 'SuperBots', src: '/assets/logos/superbots.png' },
  { name: 'Cortex Machina', src: '/assets/logos/cortex-machina.png' },
  { name: 'Contrast.Finance', src: '/assets/logos/contrast-finance.png' },
  { name: '4C-Trading', src: '/assets/logos/4c-trading.png' },
]

export const otherExperiences = [
  {
    id: 'contrast',
    company: 'Contrast.Finance',
    role: 'Founder',
    period: '2024 – Present',
    category: 'Fintech',
    url: 'https://contrast.finance',
    logo: '/assets/logos/contrast-finance.png',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
    accent: '#34d399',
    about:
      'I founded Contrast.Finance to bring clarity to complex financial decisions — a premium fintech platform focused on smarter money management.',
    highlights: [
      'Built brand identity, positioning, and product vision from scratch',
      'Designed conversion-oriented UX and go-to-market strategy',
      'Architected a scalable product foundation for rapid iteration',
    ],
  },
  {
    id: '4c-trading',
    company: '4C-Trading',
    role: 'Founder & CEO',
    period: '2017 – 2021',
    category: 'Crypto Trading',
    url: 'https://4c-trading.com',
    logo: '/assets/logos/4c-trading.png',
    image: '/assets/projects/4c-trading-cover.jpg',
    accent: '#60a5fa',
    about:
      'I founded 4C-Trading (originally Crypto-Addicts) — a quantitative crypto trading firm that became one of the first Telegram-based signal and bot services, bootstrapped with zero external capital.',
    highlights: [
      'Pioneered Telegram-native crypto trading signals and automated bots',
      '1,200+ paying subscribers · $2M annual revenue',
      'Merged leading signal providers (CryptoAddicts + CryptoMedics) into one platform',
    ],
  },
  {
    id: 'myadiction',
    company: 'MyADiction',
    role: 'Founder & CEO',
    period: '2015 – 2017',
    category: 'MarTech',
    url: null,
    wordmark: 'MyADiction',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    accent: '#fbbf24',
    about:
      'I founded MyADiction — a MarTech platform for digital advertising, e-commerce attribution, and analytics — and took it from concept to national enterprise clients.',
    highlights: [
      'Raised funding through crowdfunding and private investors',
      'Led full technical development of the mobile application',
      'Sold the service to national enterprise clients before exit',
    ],
  },
  {
    id: 'proximus',
    company: 'Proximus',
    role: 'Young Potential Program',
    period: '2014 – 2016',
    category: 'Telecom',
    url: 'https://www.proximus.be',
    wordmark: 'Proximus',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80',
    accent: '#a78bfa',
    about:
      'Within Proximus\' Young Potential Program, I contributed to digital strategy, UX optimization, and talent acquisition at Belgium\'s leading telecom operator.',
    highlights: [
      'Quantified financial & operational impact of remote work for call centers',
      'Led UX/UI improvements, A/B testing, and navigation optimization',
      'Designed talent acquisition program for high-potential recruits',
    ],
  },
  {
    id: 'kinepolis',
    company: 'Kinepolis',
    role: 'Brand Manager',
    period: '2010 – 2011',
    category: 'Entertainment',
    url: 'https://www.kinepolis.com',
    wordmark: 'Kinepolis',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    accent: '#f87171',
    about:
      'As Brand Manager at Kinepolis Brussels, I strengthened the emotional connection between the brand and its audience through events, campaigns, and digital content.',
    highlights: [
      'Organized flagship brand events across Brussels locations',
      'Produced video ads and promotional campaigns driving foot traffic',
      'Increased brand engagement through integrated marketing initiatives',
    ],
  },
]

export const education = [
  {
    degree: 'International Business & Entrepreneurship',
    school: 'USC Marshall School of Business',
    location: 'Los Angeles, USA',
    period: '2014',
    details: 'Executive Program — Business Communication, Entrepreneurship, Global Marketing Management',
  },
  {
    degree: 'Master in Commercial Engineering',
    school: 'ICHEC Brussels Management School',
    location: 'Brussels, Belgium',
    period: '2012 – 2014',
    details: 'Finance specialization (Post-Graduate)',
  },
  {
    degree: 'Bachelor in Commercial Engineering',
    school: 'ICHEC Brussels Management School',
    location: 'Brussels, Belgium',
    period: '2009 – 2012',
    details: 'Finance specialization (Post-Graduate)',
  },
  {
    degree: 'Erasmus — Business Administration',
    school: 'Universidad Politécnica de Valencia',
    location: 'Valencia, Spain',
    period: '2011',
    details: 'Accounting, Management & Marketing',
  },
  {
    degree: 'Summer Program — Marketing',
    school: 'Clemson University',
    location: 'South Carolina, USA',
    period: '2010',
    details: 'Marketing & Business Management (3 months)',
  },
]

export const achievements = [
  { metric: '$12M+', label: 'Capital raised', detail: 'ICO, IEO, private sales & fundraising' },
  { metric: '$150M', label: 'Assets managed', detail: 'Trading platforms & DeFi protocols' },
  { metric: '10+', label: 'Companies built', detail: 'Fintech, Web3, AI & MarTech' },
  { metric: '$50M', label: 'Peak market cap', detail: 'Highest valuation achieved' },
  { metric: '20K+', label: 'Community', detail: 'Cumulative active members' },
  { metric: '25+', label: 'Team managed', detail: 'Across 8+ countries' },
  { metric: 'ICO/IEO', label: 'Successful listings', detail: 'FTX, KuCoin, DEXs' },
  { metric: '8+', label: 'AI apps in prod', detail: 'Custom orchestration deployed' },
]

export const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Dutch', level: 'Professional' },
  { name: 'Spanish', level: 'Conversational' },
]

export const labels = {
  product: 'The product',
  contribution: 'My contribution',
  outcome: 'The outcome',
  watchDemo: 'Watch the demo',
  visitSite: 'Visit website',
  otherVentures: 'Other ventures',
  venturesTitle: 'Every card tells another execution story.',
  venturesSubtitle: 'Scroll — cards stack on top of each other, venture by venture.',
  credentialsLabel: 'Education & recognition',
  credentialsTitle: 'The academic foundation behind the execution.',
  credentialsSubtitle: 'International business & finance training, backed by a measurable track record in tech entrepreneurship.',
  achievementsTitle: 'Key results & recognition',
  educationTitle: 'Degrees & education',
  languagesTitle: 'Languages',
  trackRecord: 'Track record',
  resultsTitle: 'Concrete results, not promises.',
  resultsSubtitle: 'Every engagement starts with a real business problem — and ends with a live product, metrics, and traction.',
  servicesLabel: 'How I help',
  servicesTitle: 'Three execution levers. One goal: ship.',
  forWhom: 'For:',
  aboutLabel: 'About',
  logoStrip: 'Technologies mastered & companies supported',
  footerTagline: 'Technical execution partner',
  orEmail: 'Or email me directly:',
}

// Legacy for tests
export const stats = socialProof.map((s) => ({ value: s.value, prefix: s.prefix, suffix: s.suffix?.replace(' yrs', '+') || s.suffix, label: s.label }))
export const projects = caseStudies.map((c) => ({ id: c.id, name: c.company, featured: true, video: c.video }))
export const featuredCompanies = caseStudies
