export const profile = {
  name: 'Benjamin Duval',
  title: 'Full-Stack Product Leader',
  subtitle: 'Web3 & Blockchain Architect · AI Integration Expert',
  tagline: 'I build, develop, and ship production-grade products.',
  description:
    'Entrepreneur and technical product leader with 12+ years building and scaling IT companies from zero to market leadership. C-level strategic vision combined with hands-on technical execution.',
  location: 'Brussels, Belgium',
  email: 'benjaduval@hotmail.com',
  phone: '+32 477 53 15 50',
  linkedin: 'https://www.linkedin.com/in/benjaminduval/',
  portrait: '/assets/portrait/benjamin-duval.png',
}

export const stats = [
  { value: 12, suffix: '+', label: 'Years experience', detail: 'From first startup to C-level operator' },
  { value: 12, prefix: '$', suffix: 'M+', label: 'Capital raised', detail: 'ICO, IEO, private sales & fundraising' },
  { value: 150, prefix: '$', suffix: 'M', label: 'Assets managed', detail: 'Trading platforms & DeFi protocols' },
  { value: 10, suffix: '+', label: 'Companies built', detail: 'Fintech, Web3, AI & MarTech' },
]

export const achievements = [
  { metric: '$50M', label: 'Peak market cap' },
  { metric: '20K+', label: 'Community members' },
  { metric: '25+', label: 'Team across 8 countries' },
  { metric: '450+', label: 'Flowo users in 2 weeks' },
]

export const narrative = [
  {
    title: 'Operator first',
    copy: 'CEO, COO, and founder — not advising from the sidelines. Product development, compliance, customer success, and P&L under one roof.',
  },
  {
    title: 'Product at scale',
    copy: 'From UpBots and SuperBots to Monetum and Flowo — platforms used by thousands of users and institutional partners across crypto, AI, and banking.',
  },
  {
    title: 'AI-native builder',
    copy: '8+ production apps shipped with custom AI orchestration. Expert in Claude, OpenAI, Gemini, Cursor — agents for build, launch, and operations.',
  },
]

export const expertise = [
  {
    title: 'Web3 Product Development',
    description: 'DeFi protocols (0x, Enso), wallet infrastructure (Alchemy), smart contracts, algo-trading systems.',
    tags: ['DeFi', 'Smart contracts', 'Tokenomics'],
  },
  {
    title: 'AI Integration & Apps',
    description: 'Custom AI orchestration across 8+ production apps — Claude, OpenAI, Gemini, Cursor, agent workflows.',
    tags: ['SaaS', 'Agents', 'Automation'],
  },
  {
    title: 'Operational Transformation',
    description: 'CEO & COO experience scaling fintech, banking, and crypto platforms for institutional and retail clients.',
    tags: ['COO', 'Compliance', 'Growth'],
  },
  {
    title: 'Full-Stack Leadership',
    description: 'Product strategy, engineering management, market making, go-to-market, P&L ownership, fundraising.',
    tags: ['ICO/IEO', 'Listing', 'Team leadership'],
  },
]

/** Full dedicated sections — one scroll block per company */
export const featuredCompanies = [
  {
    id: 'monetum',
    name: 'Monetum',
    role: 'COO',
    period: '2024 – 2026',
    category: 'Crypto Banking',
    url: 'https://monetum.com',
    logo: null,
    wordmark: 'Monetum',
    image: '/assets/projects/monetum.png',
    gradient: 'from-slate-900 via-blue-950 to-indigo-900',
    accent: '#6366f1',
    about:
      'Next-generation crypto-banking platform providing seamless integration between traditional finance infrastructure and decentralized digital assets.',
    summary:
      'Leading the transformation of an open-banking solution into a crypto-banking platform bridging TradFi and Web3 — rebranding, DeFi product strategy, and institutional partnerships.',
    highlights: [
      'Lead cross-functional teams across engineering, marketing, and business development',
      'Oversee product development, compliance, and customer success',
      'Design and implement DeFi product strategies for institutional clients',
      'Build partnerships with traditional financial institutions',
      'Manage risk assessment and regulatory compliance frameworks',
      'Drive business development and strategic partnerships in Web3',
    ],
    metrics: ['Operational transformation', 'Institutional DeFi', 'Full rebranding'],
    tags: ['DeFi', 'Banking', 'Compliance', 'Strategy'],
  },
  {
    id: 'flowo',
    name: 'Flowo',
    role: 'Solo Founder & Developer',
    period: '2026 – Present',
    category: 'AI SaaS',
    url: 'https://getflowo.com',
    logo: '/assets/logos/flowo.png',
    image: '/assets/projects/flowo-preview.png',
    video: 'https://www.youtube.com/embed/RYvWHKIFIng',
    videoLabel: 'Watch Flowo demo',
    gradient: 'from-violet-950 via-purple-900 to-fuchsia-900',
    accent: '#a78bfa',
    about:
      'Complete SaaS combining calendar AI management, task AI management, notes, meeting booking, and planning — built on neuroscience principles.',
    summary:
      'Launched as a technical challenge using only AI agents and coding tools. Automatically plans and reschedules tasks based on priority, deadline, and dopamine optimization.',
    highlights: [
      'Built entirely with AI agents — planning, infra, security, marketing automation',
      'Google & Outlook calendar sync with intelligent schedule optimization',
      'AI agents for fully automated app management, marketing & support',
      'Admin panel, third-party services, security audit & IT infrastructure',
      'Launch timeline: 3 weeks · Budget: €800 · +450 users in 2 weeks',
    ],
    metrics: ['3-week launch', '€800 budget', '+450 users'],
    tags: ['AI', 'Neuroscience', 'Solo build', 'Agents'],
  },
  {
    id: 'upbots',
    name: 'UpBots',
    role: 'CEO & Founder',
    period: '2020 – 2024',
    category: 'CEX Trading Automation',
    url: 'https://upbots.com',
    logo: '/assets/logos/upbots.png',
    image: '/assets/projects/upbots-app.png',
    video: 'https://www.youtube.com/embed/kaDk4vdRS-M',
    videoLabel: 'Watch UpBots demo',
    gradient: 'from-cyan-950 via-teal-900 to-slate-900',
    accent: '#2dd4bf',
    about:
      'Crypto trading automation platform offering advanced algorithmic trading strategies, portfolio management, and market analytics for retail and professional traders.',
    summary:
      'Led product development from MVP to full-scale platform — fundraising, exchange listings, liquidity management, and a 25-person global team.',
    highlights: [
      'Led product development from MVP to full-scale platform',
      'Raised over $8M through private sale, ICO & IEO',
      'Organized liquidity management, tokenomics & market making strategy',
      'Listed on FTX, KuCoin and multiple DEXs',
      'Established partnerships with crypto exchanges worldwide',
      'Managed a team of 25 people across 8+ countries',
    ],
    metrics: ['$8M+ raised', '25-person team', 'FTX & KuCoin'],
    tags: ['Crypto', 'ICO', 'Trading', 'Leadership'],
  },
  {
    id: 'superbots',
    name: 'SuperBots.Finance',
    role: 'CEO & Founder',
    period: '2022 – 2024',
    category: 'DeFi Automation',
    url: 'https://superbots.finance',
    logo: '/assets/logos/superbots.png',
    image: '/assets/projects/superbots-dashboard.png',
    gradient: 'from-indigo-950 via-violet-900 to-purple-950',
    accent: '#818cf8',
    about:
      'Specialized platform offering sophisticated automated trading strategies on DEX — DeFi yield farming, liquidity provision, and arbitrage opportunities.',
    summary:
      'Founded and scaled from zero to market — tokenomics design, 20+ protocol integrations, and over $20M managed in 2024.',
    highlights: [
      'Project launch from zero to market',
      'Creation of tokenomics and ecosystem design',
      'Strategic product direction and DeFi partnership development',
      'Integrated with 20+ DeFi protocols',
      'Over $20,000,000 managed by SuperBots in 2024',
      'Sale of 2 whitelabels, over $1M TVL, audit validated',
    ],
    metrics: ['$20M+ managed', '20+ protocols', '2 whitelabels'],
    tags: ['DeFi', 'Vaults', 'Tokenomics', 'Yield'],
  },
  {
    id: 'cortex',
    name: 'Cortex Machina',
    role: 'CMO & Co-Founder',
    period: '2022 – 2025',
    category: 'AI Healthcare',
    url: null,
    logo: '/assets/logos/cortex-machina.png',
    image: '/assets/projects/cortex-team.png',
    gradient: 'from-rose-950 via-red-900 to-slate-900',
    accent: '#fb7185',
    about:
      'Healthcare technology company leveraging AI and machine learning for predictive medical analytics and patient data management.',
    summary:
      'Co-founded an AI-driven healthcare startup — hospital partnerships, €1M fundraise, and full regulatory compliance across GDPR and HIPAA.',
    highlights: [
      'Co-founded AI-driven healthcare technology startup',
      'Defined product strategy and go-to-market approach',
      'Secured partnerships with 3 major hospitals',
      'Managed and organized the initial €1M fundraise',
      'Oversaw regulatory compliance (GDPR, HIPAA)',
      'Directed marketing and sales strategies',
    ],
    metrics: ['3 hospital partners', '€1M raised', 'GDPR & HIPAA'],
    tags: ['Healthcare', 'AI', 'Fundraising', 'Compliance'],
  },
]

/** Stacking scroll cards — other roles */
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
    gradient: 'from-emerald-900 to-slate-900',
    about: 'Fintech platform focused on clarity, contrast, and smarter decision-making in digital finance.',
    highlights: ['Brand identity from zero', 'Premium fintech UX', 'Go-to-market strategy'],
  },
  {
    id: '4c-trading',
    company: '4C-Trading',
    role: 'Founder & CEO',
    period: '2017 – 2021',
    category: 'Crypto Trading',
    url: null,
    logo: '/assets/logos/4c-trading.png',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938aa0?w=1200&auto=format&fit=crop&q=80',
    gradient: 'from-blue-900 to-slate-950',
    about: 'Trading firm focused on cryptocurrency markets, employing quantitative strategies and automated trading systems.',
    highlights: [
      'Built from zero initial capital',
      'First unique trading service on Telegram',
      '1,200+ paying users · $2M annual revenue',
    ],
  },
  {
    id: 'myadiction',
    company: 'MyADiction',
    role: 'Founder & CEO',
    period: '2015 – 2017',
    category: 'MarTech',
    url: null,
    logo: null,
    wordmark: 'MyADiction',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    gradient: 'from-amber-900 to-stone-900',
    about: 'MarTech platform providing advanced digital advertising, attribution tracking, and performance analytics for e-commerce.',
    highlights: [
      'Fundraising and crowdfunding management',
      'Technical development of the application',
      'Sold services to national companies',
    ],
  },
  {
    id: 'proximus',
    company: 'Proximus',
    role: 'Young Potential Program',
    period: '2014 – 2016',
    category: 'Telecom',
    url: 'https://proximus.be',
    logo: null,
    wordmark: 'Proximus',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80',
    gradient: 'from-purple-900 to-indigo-950',
    about: "Belgium's leading telecommunications company — strategy, web marketing, and HR across multiple rotations.",
    highlights: [
      'Strategy intern: financial & technical impact of remote work for call centers',
      'Web marketing: UX/UI analysis, A/B testing, navigation optimization',
      'HR specialist: recruitment, talent acquisition program management',
    ],
  },
  {
    id: 'kinepolis',
    company: 'Kinepolis',
    role: 'Brand Manager',
    period: '2010 – 2011',
    category: 'Entertainment',
    url: 'https://kinepolis.com',
    logo: null,
    wordmark: 'Kinepolis',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    gradient: 'from-red-900 to-neutral-900',
    about: 'Mission to create an emotional connection between the company and their customers.',
    highlights: [
      'Organization of events in Brussels',
      'Marketing campaigns, video ads & promotions',
    ],
  },
]

export const logoStrip = [
  { name: 'Monetum', src: '/assets/projects/monetum.png', small: true },
  { name: 'Flowo', src: '/assets/logos/flowo.png' },
  { name: 'UpBots', src: '/assets/logos/upbots.png' },
  { name: 'SuperBots', src: '/assets/logos/superbots.png' },
  { name: 'Cortex Machina', src: '/assets/logos/cortex-machina.png' },
  { name: 'Contrast.Finance', src: '/assets/logos/contrast-finance.png' },
  { name: '4C-Trading', src: '/assets/logos/4c-trading.png' },
]

export const education = [
  {
    degree: 'International Business & Entrepreneurship',
    school: 'USC Marshall School of Business',
    location: 'Los Angeles, USA',
    period: '2014',
    details: 'Executive Program in Business Communication, Entrepreneurship, Global Marketing Management',
  },
  {
    degree: 'Master in Commercial Engineering',
    school: 'ICHEC Brussels Management School',
    location: 'Brussels, Belgium',
    period: '2012 – 2014',
    details: 'Post-Graduate specialization in Finance',
  },
  {
    degree: 'Bachelor in Commercial Engineering',
    school: 'ICHEC Brussels Management School',
    location: 'Brussels, Belgium',
    period: '2009 – 2012',
    details: 'Post-Graduate specialization in Finance',
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
    details: 'Marketing & Business Management',
  },
]

export const skills = {
  technical: [
    'AI Tools — Cursor, OpenAI, Claude, Gemini',
    'Blockchain / Web3 Architecture',
    'DeFi Protocols & Smart Contracts',
    'Full-Stack Product Development',
    'Tokenomics & Market Making',
    'Figma & Canva',
    'Agile / Scrum',
  ],
  business: [
    'Fundraising / ICO / IEO / Listing',
    'Go-to-Market Strategy',
    'P&L Ownership',
    'Cross-functional Leadership (25+ people)',
    'Strategic Partnerships',
    'Regulatory Compliance',
  ],
  languages: [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Dutch', level: 'Professional' },
    { name: 'Spanish', level: 'Conversational' },
  ],
}

// Legacy exports for tests
export const projects = featuredCompanies.map((c) => ({
  id: c.id,
  name: c.name,
  featured: true,
  video: c.video,
}))
export const experiences = [...featuredCompanies, ...otherExperiences].map((c) => ({
  role: c.role,
  company: c.name || c.company,
  period: c.period,
  url: c.url,
  about: c.about,
  highlights: c.highlights,
  tags: c.tags || [],
}))
