/** Site copy & data — freelance positioning: "Le C-Level de l'Exécution Technique" */

export const site = {
  calendlyUrl: 'https://calendly.com/benjaduval/30min', // ← remplace par ton vrai lien Calendly
  email: 'benjaduval@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/benjaminduval/',
  location: 'Brussels, Belgium',
}

export const profile = {
  name: 'Benjamin Duval',
  portrait: '/assets/portrait/benjamin-duval.png',
}

export const hero = {
  eyebrow: 'Pour les startups, scale-ups et fondateurs ambitieux',
  title: 'Vous avez la vision. Je construis et scale votre produit technologique.',
  subtitle:
    "Ne laissez pas la complexité technique ralentir votre croissance. En combinant une vision stratégique de C-Level et une exécution technique de pointe (IA & Web3), je transforme vos idées complexes en produits rentables, prêts pour le marché.",
  ctaPrimary: 'Discutons de votre croissance',
  ctaSecondary: 'Voir mes résultats d\'exécution ↓',
}

export const socialProof = [
  { value: 12, prefix: '+', suffix: 'M$', label: 'Levés (ICO, IEO, VC)' },
  { value: 150, prefix: '+', suffix: 'M$', label: "D'actifs gérés au plus haut" },
  { value: 8, suffix: '+', label: 'Applications IA déployées en production' },
  { value: 12, suffix: ' ans', label: "D'expertise en scaling tech & produit" },
]

export const empathy = {
  title: "Développer un produit innovant en 2026 ne devrait pas être un gouffre financier ni un marathon sans fin.",
  paragraphs: [
    "Vous savez que l'IA ou la blockchain peut transformer votre entreprise. Mais entre le recrutement des bons talents, les choix d'architecture, le respect des réglementations et la pression du Go-To-Market, l'exécution devient chaotique.",
    "En tant qu'ancien CEO et COO ayant fondé et revendu plusieurs entreprises — de la FinTech au SaaS — j'ai affronté ces murs. J'ai vu des millions dépensés dans des roadmaps interminables.",
    "Aujourd'hui, j'interviens comme votre partenaire d'exécution : je coupe le bruit, je structure votre stratégie, et je livre le produit. Vite.",
  ],
}

export const services = [
  {
    id: 'cpo',
    number: '01',
    title: 'Fractional CPO & Product Leadership',
    audience: 'Les entreprises qui ont besoin d\'un leadership produit expérimenté sans embaucher un C-Level à temps plein.',
    impact: 'De la conception du MVP à la plateforme à grande échelle. Gestion des équipes, roadmaps, UX/UI, et alignement avec vos objectifs de P&L.',
    metric: 'Time-to-Market réduit grâce à une exécution structurée dès le jour 1.',
    icon: 'layers',
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
  },
  {
    id: 'ai',
    number: '02',
    title: 'Intégration IA & Automatisation Sur-Mesure',
    audience: 'Les sociétés cherchant à drastiquement réduire leurs coûts ou créer de nouveaux SaaS basés sur l\'IA.',
    impact: 'Création d\'orchestrations IA complexes, développement rapide d\'applications (Claude, OpenAI, Gemini, Cursor) pour automatiser vos opérations ou créer votre prochain produit.',
    metric: 'Prototype fonctionnel livré en quelques semaines, pas en mois.',
    icon: 'sparkles',
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
  {
    id: 'web3',
    number: '03',
    title: 'Web3, DeFi & Infrastructure Crypto',
    audience: 'Les institutions financières traditionnelles et les projets Web3 cherchant à créer des ponts fiables et conformes.',
    impact: 'Architecture de smart contracts, intégration de protocoles (0x, Alchemy), création de tokenomics durables et stratégies de market making.',
    metric: '+20 protocoles DeFi intégrés · infrastructures auditées gérant des millions.',
    icon: 'blocks',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
]

export const caseStudies = [
  {
    id: 'flowo',
    company: 'Flowo',
    logo: '/assets/logos/flowo.png',
    image: '/assets/projects/flowo-preview.png',
    video: 'https://www.youtube.com/embed/RYvWHKIFIng',
    tag: 'IA · SaaS · Vitesse d\'exécution',
    challenge:
      'Lancer un SaaS de productivité neuroscientifique complexe dans un marché saturé, avec un budget proche de zéro.',
    intervention:
      'Architecture complète, configuration des agents IA, et développement full-stack automatisé en utilisant uniquement des outils IA de pointe.',
    result:
      'Lancement de l\'application de zéro au marché en 3 semaines. Acquisition de +450 utilisateurs en 14 jours avec un budget total de 800€.',
    stat: '+450 utilisateurs en 14 jours · budget total 800€',
    accent: '#a78bfa',
  },
  {
    id: 'monetum',
    company: 'Monetum',
    logo: null,
    wordmark: 'Monetum',
    image: '/assets/projects/monetum.png',
    tag: 'Crypto-banking · TradFi × Web3',
    challenge:
      'Transformer une solution d\'open-banking traditionnelle en une plateforme crypto-bancaire de nouvelle génération.',
    intervention:
      'Refonte de la stratégie produit DeFi institutionnelle, management des équipes cross-fonctionnelles et sécurisation de la conformité réglementaire (COO).',
    result:
      'Repositionnement réussi de la marque et création d\'une infrastructure hybride robuste pour clients institutionnels.',
    stat: 'Transformation complète open-banking → crypto-banking',
    accent: '#6366f1',
  },
  {
    id: 'upbots-superbots',
    company: 'UpBots & SuperBots',
    logos: ['/assets/logos/upbots.png', '/assets/logos/superbots.png'],
    image: '/assets/projects/superbots-dashboard.png',
    video: 'https://www.youtube.com/embed/kaDk4vdRS-M',
    tag: 'DeFi · Trading · Fundraising',
    challenge:
      'Créer de toutes pièces des plateformes de trading algorithmique grand public et DeFi, et attirer les liquidités.',
    intervention:
      'Création des tokenomics, design de l\'écosystème, levée de fonds (ICO/IEO/Ventes privées) et développement des partenariats (FTX, KuCoin).',
    result:
      'Plus de 8M$ levés, une valorisation atteignant 50M$ de Market Cap, et plus de 20M$ sous gestion avec des audits de sécurité validés.',
    stat: '$8M+ levés · $50M market cap · $20M+ sous gestion',
    accent: '#2dd4bf',
  },
  {
    id: 'cortex',
    company: 'Cortex Machina',
    logo: '/assets/logos/cortex-machina.png',
    image: '/assets/projects/cortex-team.png',
    tag: 'IA · Healthcare · Fundraising',
    challenge:
      'Lancer une startup healthcare IA dans un secteur ultra-réglementé, avec des cycles de vente longs et des exigences GDPR/HIPAA strictes.',
    intervention:
      'Co-fondation, stratégie produit & go-to-market, partenariats hospitaliers, levée de fonds initiale et conformité réglementaire (CMO & Co-Founder).',
    result:
      'Partenariats sécurisés avec 3 hôpitaux majeurs, organisation de la levée initiale de €1M, et mise en place complète GDPR/HIPAA.',
    stat: '3 hôpitaux partenaires · €1M levés · Conformité validée',
    accent: '#fb7185',
  },
]

export const about = {
  title: 'Benjamin Duval — Bâtisseur, avant tout.',
  paragraphs: [
    "Je ne suis pas né consultant. Pendant plus de 12 ans, j'ai été à votre place.",
    "Basé en Belgique, j'ai fondé, financé et fait évoluer des entreprises technologiques en partant d'une feuille blanche pour atteindre des valorisations à plusieurs dizaines de millions de dollars.",
    "J'ai appris à la dure ce qui fonctionne et ce qui échoue. J'ai compris que la plus belle ligne de code ne vaut rien si elle ne sert pas un objectif d'acquisition, de rétention ou de rentabilité.",
    "Aujourd'hui, j'utilise la puissance inégalée de l'IA et mon expérience du management de crise et du Web3 pour offrir ce que j'aurais aimé avoir en tant que CEO : un partenaire technique capable de comprendre instantanément mon business model et de l'exécuter à la perfection.",
  ],
}

export const finalCta = {
  title: 'Prêt à transformer votre roadmap en produit live ?',
  text: "Arrêtons de parler théorie. Réservez un appel stratégique de 30 minutes avec moi. Nous analyserons votre goulot d'étranglement actuel, vos besoins en IA ou Web3, et nous établirons un plan d'action d'exécution immédiate. Sans engagement.",
  button: 'Réserver mon appel stratégique',
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

/** Autres missions — cartes empilées au scroll */
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
    gradient: 'from-emerald-600/40 to-transparent',
    accent: '#34d399',
    about: 'Plateforme fintech axée sur la clarté et des décisions financières plus intelligentes.',
    highlights: [
      'Identité de marque et positionnement produit from scratch',
      'UX fintech premium et stratégie go-to-market',
      'Architecture produit orientée conversion',
    ],
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
    gradient: 'from-blue-600/40 to-transparent',
    accent: '#60a5fa',
    about: 'Firme de trading crypto quantitative — stratégies automatisées, bootstrappée from zero.',
    highlights: [
      'Premier service de trading unique sur Telegram',
      '1 200+ utilisateurs payants · $2M de revenus annuels',
      'Construit sans capital initial',
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
    gradient: 'from-amber-600/40 to-transparent',
    accent: '#fbbf24',
    about: 'Plateforme MarTech — publicité digitale, attribution et analytics e-commerce.',
    highlights: [
      'Levées de fonds et crowdfunding',
      'Développement technique de l\'application',
      'Vente du service à des entreprises nationales',
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
    gradient: 'from-purple-600/40 to-transparent',
    accent: '#a78bfa',
    about: 'Programme Young Potential — stratégie, web marketing et RH chez le leader telecom belge.',
    highlights: [
      'Impact financier & technique du télétravail (call centers)',
      'UX/UI, A/B testing, optimisation navigation',
      'Recrutement & programme talent acquisition',
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
    gradient: 'from-red-600/40 to-transparent',
    accent: '#f87171',
    about: 'Créer une connexion émotionnelle entre la marque et ses clients.',
    highlights: [
      'Organisation d\'événements à Bruxelles',
      'Campagnes marketing, vidéos ads & promotions',
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
    details: 'Spécialisation Finance (Post-Graduate)',
  },
  {
    degree: 'Bachelor in Commercial Engineering',
    school: 'ICHEC Brussels Management School',
    location: 'Brussels, Belgium',
    period: '2009 – 2012',
    details: 'Spécialisation Finance (Post-Graduate)',
  },
  {
    degree: 'Erasmus — Business Administration',
    school: 'Universidad Politécnica de Valencia',
    location: 'Valencia, Spain',
    period: '2011',
    details: 'Comptabilité, Management & Marketing',
  },
  {
    degree: 'Summer Program — Marketing',
    school: 'Clemson University',
    location: 'South Carolina, USA',
    period: '2010',
    details: 'Marketing & Business Management (3 mois)',
  },
]

export const achievements = [
  { metric: '$12M+', label: 'Capital levé', detail: 'ICO, IEO, private sales & fundraising' },
  { metric: '$150M', label: 'Actifs gérés', detail: 'Trading platforms & DeFi protocols' },
  { metric: '10+', label: 'Entreprises bâties', detail: 'Fintech, Web3, AI & MarTech' },
  { metric: '$50M', label: 'Market cap peak', detail: 'Valorisation au plus haut' },
  { metric: '20K+', label: 'Communauté', detail: 'Membres actifs cumulés' },
  { metric: '25+', label: 'Équipe managée', detail: '8+ pays' },
  { metric: 'ICO/IEO', label: 'Listings réussis', detail: 'FTX, KuCoin, DEXs' },
  { metric: '8+', label: 'Apps IA en prod', detail: 'Orchestration custom déployée' },
]

export const languages = [
  { name: 'Français', level: 'Natif' },
  { name: 'English', level: 'Courant' },
  { name: 'Nederlands', level: 'Professionnel' },
  { name: 'Español', level: 'Conversationnel' },
]

// Legacy for tests
export const stats = socialProof.map((s) => ({ value: s.value, prefix: s.prefix, suffix: s.suffix?.replace(' ans', '+') || s.suffix, label: s.label }))
export const projects = caseStudies.map((c) => ({ id: c.id, name: c.company, featured: true, video: c.video }))
export const featuredCompanies = caseStudies
