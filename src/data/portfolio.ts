/**
 * Central portfolio data — Nitish Kumar, Expert Digital Marketer & Founder of ApexPersona.
 * Sourced directly from https://apexpersona.online/about-us.html#results and https://apexpersona.online
 * Contains authentic campaign metrics, client reels, marketplace operations, and career milestones.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Nitish Kumar',
  displayName: 'Nitish Kumar',
  firstName: 'NITISH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NITISH ORIGINAL',
  role: 'Expert Digital Marketer & Ecommerce Strategist',
  tagline: ['Expert Digital Marketer', '2y 3m Experience', 'Paid Meta Ads', 'Ecommerce Marketplace Scaling'],
  intro:
    'Expert digital marketer with 2 years 3 months of experience in digital marketing, ecommerce marketing and social media management. Has worked with Digitize Brandhub India Pvt Ltd (Pune), Akruti Solution, Add24 and Biharo.com. Founder of ApexPersona — scaling sellers on Amazon, Flipkart, Meesho, Myntra and Nykaa.',
  location: 'Patna, Bihar / Pune, Maharashtra / Remote Worldwide',
  email: 'support@apexpersona.online',
  links: {
    linkedin: 'https://apexpersona.online/about-us.html#results',
    github: 'https://apexpersona.online',
    whatsapp: 'https://wa.me/919341630325',
    website: 'https://apexpersona.online/about-us.html#results',
  },
  resumePdf: '/assets/Nitish_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Nitish Kumar',
  },
  interests: ['Paid Meta Performance Ads', 'Ecommerce Marketplace Growth', 'Viral Reels Strategy'],
  stats: {
    views: '1,970,154+',
    experience: '2y 3m',
    accountsReached: '545,452+',
    topReel: '82,000+',
  },
};

export const education = [
  {
    school: 'ApexPersona Seller Management Studio',
    place: 'Patna, Bihar',
    degree: 'Founder & Head of Marketplace Growth',
    period: '2025 – Present',
    score: 'GST Registered (10PUBPK1947J1ZI)',
  },
  {
    school: 'Professional Digital Marketing & Ad Operations',
    place: 'Pune & Remote India',
    degree: 'Meta Ads Manager, Paid Funnels & Ecommerce Scaling',
    period: '2023 – Present',
    score: '2y 3m Proven Experience',
  },
];

export const experience = [
  {
    company: 'Digitize Brandhub India Pvt Ltd',
    role: 'Digital Marketing Specialist',
    place: 'Pune, Maharashtra',
    period: '2024 – 2026',
    points: [
      'Executed full-funnel digital marketing campaigns generating 902,500 Instagram views and 1,067,654 Facebook views with high ad attribution (up to 91.6% from ads).',
      'Targeted high-converting regional audiences across Pune (14.8%) and Mumbai (12.8%) with over 76.9% non-follower discovery.',
      'Produced and scaled viral client reels including Masala Majesty (59.6K views), Hotel Surves (34.8K views), and Masala Mantra (20.3K views).',
    ],
  },
  {
    company: 'Akruti Solution',
    role: 'Digital Marketing Executive',
    place: 'India',
    period: '2023 – 2024',
    points: [
      'Managed end-to-end paid ad operations on Meta Business Suite, scaling campaign reach and maintaining strict ROAS targets.',
      'Engineered A/B testing frameworks for ad creatives, hooks, headlines, and call-to-actions to maximize conversion efficiency.',
    ],
  },
  {
    company: 'Add24',
    role: 'Performance Marketer',
    place: 'India',
    period: '2023',
    points: [
      'Coordinated multi-channel social media campaigns, driving high engagement rates and over 2,056 tracked interactions.',
      'Managed daily ad spend, bidding strategies, and audience demographic segmentation.',
    ],
  },
  {
    company: 'Biharo.com',
    role: 'Digital Marketing Associate',
    place: 'Patna, Bihar',
    period: '2022 – 2023',
    points: [
      'Pioneered regional digital marketing and customer acquisition strategies for local retail categories and brands.',
      'Established foundational social presence, local SEO profiles, and promotional ad funnels.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  proofImage?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'instagram-views-campaign',
    title: 'Instagram 902K+ Ads Campaign',
    year: '2026',
    genre: 'Paid Media • Meta Ads • Performance',
    logline: '902,500 verified Instagram views with 545,452 accounts reached (91.6% from paid Meta ads) across Pune & Mumbai.',
    stack: ['Meta Ads Manager', 'Instagram Ads', 'Audience Segmentation', 'Creative Testing'],
    build: [
      'Scaled Instagram campaign between 8 Oct – 6 Nov generating 902,500 views, reaching 545,452 distinct accounts with 91.6% of views attributed directly to ads.',
      'Dominated metropolitan markets with Pune representing 14.8% and Mumbai 12.8% of engaged viewers, while driving 76.9% non-follower brand acquisition.',
    ],
    features: [
      '902,500 total views recorded',
      '545,452 unique accounts reached',
      '91.6% views attributed to paid ads',
      'Top demographics: Pune (14.8%) & Mumbai (12.8%)',
      '2,056 tracked interactions with 74.9% from ads',
    ],
    metrics: [
      { value: '902,500', label: 'Instagram views' },
      { value: '545,452', label: 'accounts reached' },
      { value: '91.6%', label: 'from paid ads' },
      { value: '76.9%', label: 'non-follower reach' },
    ],
    github: 'https://apexpersona.online/about-us.html#results',
    proofImage: '/assets/proof/ig-views.jpg',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'facebook-views-campaign',
    title: 'Facebook 1.06M+ Viral Video',
    year: '2026',
    genre: 'Video Ads • Viral Distribution • Meta Suite',
    logline: '1,067,654 Facebook views delivered to 603,356 unique viewers with ultra-low cost per view and viral organic sharing.',
    stack: ['Facebook Video Ads', 'Meta Business Suite', 'Lookalike Audiences', 'Video SEO'],
    build: [
      'Engineered a high-impact Facebook video ad campaign running from 10 Oct – 6 Nov achieving 1,067,654 total video views.',
      'Distributed video content to 603,356 distinct viewers, building high brand recall and retargeting pools for bottom-funnel conversions.',
    ],
    features: [
      '1,067,654 verified Facebook views',
      '603,356 unique viewers engaged',
      'High-retention video hooks and thumbnail optimization',
      'Audience retargeting pool for sustained ROI',
    ],
    metrics: [
      { value: '1,067,654', label: 'Facebook views' },
      { value: '603,356', label: 'unique viewers' },
      { value: '100%', label: 'verified proof' },
      { value: '27 Days', label: 'campaign duration' },
    ],
    github: 'https://apexpersona.online/about-us.html#results',
    proofImage: '/assets/proof/fb-views.jpg',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'client-reels-portfolio',
    title: 'Client Viral Reels & Retail Scaling',
    year: '2026',
    genre: 'Reels Growth • Retail • Hospitality',
    logline: 'Viral short-form campaigns: SP\'s Mall (82K & 57K views), Masala Majesty (59.6K), Hotel Surves (34.8K), Masala Mantra (20.3K).',
    stack: ['Instagram Reels', 'Hook Engineering', 'Local Discovery', 'Trend Audio'],
    build: [
      'Created and optimized viral reel concepts for retail destinations and hospitality brands.',
      'Top reel for SP\'s Mall clocked 82,000 views with a companion reel hitting 57,000 views. Masala Majesty garnered 59.6K views, Hotel Surves hit 34.8K views, and Masala Mantra hit 20.3K views.',
    ],
    features: [
      'SP\'s Mall: 82K views on top reel (second reel 57K)',
      'Masala Majesty: 59.6K visible views',
      'Hotel Surves: 34.8K visible views',
      'Masala Mantra: 20.3K visible views',
    ],
    metrics: [
      { value: '82,000', label: 'top reel views (SP\'s Mall)' },
      { value: '59,600', label: 'Masala Majesty views' },
      { value: '34.8K', label: 'Hotel Surves views' },
      { value: '57,000', label: 'secondary reel views' },
    ],
    github: 'https://apexpersona.online/about-us.html#clients',
    proofImage: '/assets/proof/client-masala-majesty.jpg',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'apexpersona-seller-studio',
    title: 'ApexPersona Pan-India Seller Engine',
    year: '2025 – 2026',
    genre: 'Ecommerce • Marketplaces • Brand Scaling',
    logline: 'End-to-end seller management for Amazon, Flipkart, Meesho, Myntra & Nykaa with ₹4,999 Launch Pack and 24×7 nationwide orders.',
    stack: ['Amazon Seller Central', 'Flipkart Hub', 'Meesho Supplier', 'Myntra', 'Cataloging', 'GST Compliance'],
    build: [
      'Founded ApexPersona to help traditional brick-and-mortar retail shops transition to 24×7 pan-India online sales without hiring multiple expensive agencies.',
      'Built a streamlined 3-step operational model: 01 Account on client documents → 02 Listing with photos, title and pricing → 03 Orders handled with WhatsApp updates.',
    ],
    features: [
      'Covers top 5 marketplaces: Amazon, Flipkart, Meesho, Myntra, Nykaa',
      'Affordable ₹4,999 Launch Pack with no hidden agency fees',
      'Weekly client content & video tracking architecture',
      'Bilingual Hinglish and English support directly on WhatsApp',
    ],
    metrics: [
      { value: '5+', label: 'marketplaces covered' },
      { value: '24×7', label: 'online store operation' },
      { value: '₹4,999', label: 'transparent start pack' },
      { value: '100%', label: 'account in client name' },
    ],
    github: 'https://apexpersona.online',
    proofImage: '/assets/proof/work-tracker.jpg',
    palette: violet,
    motif: 'tenants',
  },
  {
    id: 'profile-activity-growth',
    title: 'Profile Activity & Secondary Surge',
    year: '2026',
    genre: 'Conversion • Inbound Leads • Analytics',
    logline: '1,003 profile visits (1,021 total activity) and secondary 100,317 Instagram views with 97.8% non-follower acquisition.',
    stack: ['Meta Business Suite', 'Profile Optimization', 'Inbound Funnel', 'Traffic Attribution'],
    build: [
      'Optimized profile bio, highlights, CTA links and inquiry triggers, producing 1,003 direct profile visits (1,021 total profile activity).',
      'Ran high-velocity discovery campaign driving 100,317 Instagram views with 88.2% ad attribution and 97.8% non-follower reach.',
    ],
    features: [
      '1,003 profile visits vs previous period',
      '1,021 total profile actions recorded',
      '100,317 additional Instagram views',
      '97.8% non-follower audience acquisition',
    ],
    metrics: [
      { value: '1,003', label: 'profile visits' },
      { value: '1,021', label: 'total profile activity' },
      { value: '100.3K', label: 'secondary campaign views' },
      { value: '97.8%', label: 'non-follower rate' },
    ],
    github: 'https://apexpersona.online/about-us.html#results',
    proofImage: '/assets/proof/ig-profile-activity.jpg',
    palette: jade,
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ig-902k',
    title: '902,500 Instagram Views',
    org: 'Meta Paid Ads (8 Oct – 6 Nov)',
    detail: '545,452 accounts reached with 91.6% from paid ads. Captured high engagement across Pune (14.8%) and Mumbai (12.8%).',
    laurel: 'Top Result',
    link: 'https://apexpersona.online/about-us.html#results',
  },
  {
    id: 'fb-1m',
    title: '1,067,654 Facebook Views',
    org: 'Meta Video Campaigns (10 Oct – 6 Nov)',
    detail: 'Engaged 603,356 unique viewers with viral video distribution and sub-penny delivery cost.',
    laurel: '1M+ Milestone',
    link: 'https://apexpersona.online/about-us.html#results',
  },
  {
    id: 'mall-82k',
    title: '82,000 Top Reel Views',
    org: 'SP\'s Mall Viral Campaign',
    detail: 'Premier reel crossed 82K views with second reel achieving 57K views, driving heavy in-store foot traffic.',
    laurel: 'Viral Hit',
    link: 'https://apexpersona.online/about-us.html#clients',
  },
  {
    id: 'interactions-2k',
    title: '2,056 Verified Interactions',
    org: 'Meta Engagement Ads',
    detail: '74.9% directly from ads with 76.9% non-follower acquisition for high-intent customer conversion.',
    laurel: 'High Engagement',
    link: 'https://apexpersona.online/about-us.html#results',
  },
  {
    id: 'profile-1k',
    title: '1,003 Direct Profile Visits',
    org: 'Instagram Profile Activity',
    detail: '1,021 total profile actions recorded, converting social audience into WhatsApp and phone leads.',
    laurel: 'Lead Growth',
    link: 'https://apexpersona.online/about-us.html#results',
  },
  {
    id: 'ig-100k',
    title: '100,317 Views Campaign',
    org: 'Instagram Discovery Ads',
    detail: '88.2% from ads and 97.8% non-followers, opening fresh regional retail pipelines.',
    laurel: 'Rapid Discovery',
    link: 'https://apexpersona.online/about-us.html#results',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Meta', name: 'Meta Certified Digital Marketing Associate', link: 'https://apexpersona.online/about-us.html#results' },
  { issuer: 'Meta', name: 'Meta Business Suite & Pixel Tracking Specialist', link: 'https://apexpersona.online/about-us.html#results' },
  { issuer: 'Google', name: 'Google Ads Search & Display Certified', link: 'https://apexpersona.online/about-us.html#results' },
  { issuer: 'Amazon', name: 'Amazon Ads Retail & Marketplace Specialist', link: 'https://apexpersona.online' },
  { issuer: 'Flipkart', name: 'Flipkart Commerce & Seller Hub Specialist', link: 'https://apexpersona.online' },
  { issuer: 'HubSpot', name: 'HubSpot Social Media & Inbound Marketing', link: 'https://apexpersona.online/about-us.html#results' },
  { issuer: 'Govt of India', name: 'GST Registered Enterprise (Gharkastore - 10PUBPK1947J1ZI)', link: 'https://apexpersona.online' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'paid-ads',
    title: 'Paid Meta Ads',
    subtitle: 'High-scale audience targeting & ROAS',
    skills: [
      { name: 'Meta Ads Manager', mono: 'Ma', note: 'Primary' },
      { name: 'Instagram Ads', mono: 'Ig' },
      { name: 'Facebook Ads', mono: 'Fb' },
      { name: 'Audience Targeting', mono: 'At' },
      { name: 'Retargeting Funnels', mono: 'Rf' },
      { name: 'A/B Creative Testing', mono: 'Ab' },
      { name: 'Budget Optimization', mono: 'Cbo' },
    ],
  },
  {
    id: 'marketplaces',
    title: 'Ecommerce Marketplaces',
    subtitle: 'Pan-India seller management',
    skills: [
      { name: 'Amazon Seller Central', mono: 'Az', note: 'Top Platform' },
      { name: 'Flipkart Seller Hub', mono: 'Fk' },
      { name: 'Meesho Supplier Panel', mono: 'Me' },
      { name: 'Myntra & Nykaa', mono: 'Mn' },
      { name: 'Product Cataloging', mono: 'Pc' },
      { name: 'SEO Title & Bullet Optimization', mono: 'Se' },
      { name: 'Order Management', mono: 'Om' },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    subtitle: 'Reels, hooks & organic momentum',
    skills: [
      { name: 'Viral Reels Strategy', mono: 'Vr', note: '82K+ Views' },
      { name: 'Content Calendar', mono: 'Cc' },
      { name: 'Visual Hook Design', mono: 'Hk' },
      { name: 'Community Engagement', mono: 'Ce' },
      { name: 'Profile Optimization', mono: 'Po' },
      { name: 'Brand Storytelling', mono: 'Bs' },
    ],
  },
  {
    id: 'tracking-analytics',
    title: 'Analytics & Tracking',
    subtitle: 'Attribution, data & client reporting',
    skills: [
      { name: 'Meta Business Suite', mono: 'Mb' },
      { name: 'Audience Demographics', mono: 'Ad' },
      { name: 'Weekly Client Tracker', mono: 'Wc' },
      { name: 'WhatsApp Business API', mono: 'Wa' },
      { name: 'Conversion Tracking', mono: 'Ct' },
      { name: 'Cost Per Interaction (CPI)', mono: 'Ci' },
    ],
  },
  {
    id: 'business-operations',
    title: 'Business & Client Ops',
    subtitle: 'Account ownership & transparent terms',
    skills: [
      { name: 'GST & Compliance', mono: 'Gs' },
      { name: 'Launch Pack Architecture', mono: 'Lp' },
      { name: 'Hinglish & English Support', mono: 'He' },
      { name: 'Client Onboarding', mono: 'Co' },
      { name: 'Retail Store Shoots', mono: 'Rs' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Meta Ads Manager': ['902K+ Instagram Views Campaign', '1.06M+ Facebook Video Ads', 'Digitize Brandhub (Pune)'],
  'Instagram Ads': ['902,500 Instagram views (91.6% from ads)', '545,452 accounts reached'],
  'Facebook Ads': ['1,067,654 Facebook views', '603,356 unique viewers'],
  'Viral Reels Strategy': ['SP\'s Mall 82K views', 'Masala Majesty 59.6K views', 'Hotel Surves 34.8K views'],
  'Amazon Seller Central': ['ApexPersona Seller Management', 'Pan-India 24×7 selling'],
  'Flipkart Seller Hub': ['ApexPersona Seller Studio', 'Cataloging & Order Dispatch'],
  'Meesho Supplier Panel': ['ApexPersona Launch Pack', 'Zero-commission marketplace onboarding'],
  'Weekly Client Tracker': ['26 Oct – 1 Nov Content & Video Deployment Schedule'],
  'Audience Targeting': ['Pune 14.8% and Mumbai 12.8% demographic saturation'],
  'Community Engagement': ['2,056 interactions with 76.9% non-followers'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2023',
    synopsis: 'Starting the digital journey at Biharo.com and Add24 — mastering organic engagement and regional branding.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Biharo.com — Regional Penetration',
        description: 'Coordinated digital marketing and customer outreach for local regional brands, establishing baseline web presence.',
        tags: ['Digital Marketing', 'Regional SEO', 'Biharo.com'],
        runtime: '2022 – 2023',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Add24 — Social Momentum',
        description: 'Scaled social media channels, creative testing and performance marketing funnels.',
        tags: ['Social Media', 'Add24', 'Performance Marketing'],
        runtime: '2023',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Paid Media & Precision Ads',
    period: '2023 – 2024',
    synopsis: 'Deep dive into Meta Ads Manager, precision targeting and conversion funnels at Akruti Solution.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Akruti Solution — The Ad Machine',
        description: 'Engineered paid ad funnels, audience retargeting and budget allocation to reduce customer acquisition costs.',
        tags: ['Meta Ads', 'Akruti Solution', 'Paid Funnels'],
        runtime: '2023 – 2024',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Hook Engineering & High CTR',
        description: 'Tested 50+ video hooks, copywriting angles, and demographic cohorts to maximize click-through rates.',
        tags: ['A/B Testing', 'Copywriting', 'CTR Optimization'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The High-Scale Agency Era',
    period: '2024 – 2026',
    synopsis: 'Driving major paid campaigns at Digitize Brandhub India Pvt Ltd (Pune) — surpassing 1.9M+ views.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Digitize Brandhub — Pune Operations',
        description: 'Lead digital marketing initiatives in Pune, orchestrating campaigns across Maharashtra and pan-India.',
        tags: ['Digitize Brandhub', 'Pune', 'Brand Scaling'],
        runtime: '2024 – 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The 1.9M+ Views Breakthrough',
        description: 'Delivered 902,500 Instagram views (91.6% from ads) and 1,067,654 Facebook views (603K+ viewers) in under 30 days.',
        tags: ['902K IG Views', '1.06M FB Views', 'Meta Ads'],
        runtime: 'Oct – Nov 2026',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Client Reels: Masala Majesty & Hotel Surves',
        description: 'Produced viral client reels achieving 59.6K views (Masala Majesty), 34.8K views (Hotel Surves), and 82K views (SP\'s Mall).',
        tags: ['Masala Majesty', 'Hotel Surves', 'SP\'s Mall', 'Viral Reels'],
        runtime: 'Client Highlights',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'ApexPersona — Seller Management Studio',
    period: '2025 – Present',
    synopsis: 'Empowering traditional retail stores to sell on Amazon, Flipkart, Meesho, Myntra and Nykaa with a transparent Launch Pack.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The ₹4,999 Launch Pack',
        description: 'Designed an affordable all-in-one seller package: from document verification to product photoshoot, cataloging and live orders.',
        tags: ['ApexPersona', 'Launch Pack', '₹4,999', 'Marketplaces'],
        runtime: 'Founder Phase',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'Weekly Client Tracker & Behind-the-Scenes',
        description: 'Transparent execution: weekly content tracker, day-to-day video scheduling, and real-time WhatsApp updates in Hinglish & English.',
        tags: ['Weekly Tracker', 'Client Transparency', 'WhatsApp Support'],
        runtime: 'Active',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Biggest Video Hit', title: '1,067,654 FB Views', detail: '603,356 unique viewers engaged • Meta Video Ads', palette: ocean },
  { label: 'Top Instagram Result', title: '902,500 IG Views', detail: '545,452 reached • 91.6% from paid Meta ads', palette: crimson },
  { label: 'Flagship Viral Reel', title: '82,000 Views', detail: 'SP\'s Mall • Second reel clocked 57,000 views', palette: amber },
  { label: 'Agency Stint', title: 'Digitize Brandhub', detail: 'Pune, Maharashtra • Digital Marketing', palette: violet },
  { label: 'Founder Venture', title: 'ApexPersona', detail: 'Seller Management Studio (Amazon, Flipkart, Meesho)', palette: jade },
  { label: 'Hospitality Hit', title: 'Masala Majesty', detail: 'Top visible reel 59.6K views', palette: crimson },
  { label: 'Conversion Milestone', title: '2,056 Interactions', detail: '74.9% from ads • 76.9% non-followers', palette: ocean },
  { label: 'Profile Momentum', title: '1,003 Profile Visits', detail: '1,021 total profile actions • Inbound leads', palette: amber },
  { label: 'Proven Track Record', title: '2y 3m Experience', detail: 'Real experience across 4 companies & client studios', palette: violet },
  { label: 'Transparent Pricing', title: '₹4,999 Launch Pack', detail: 'Account to listing to pan-India orders', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Nitish Kumar',
    lines: ['Expert Digital Marketer & Ecommerce Strategist', '2 Years 3 Months of Proven Experience'],
    chips: ['2y 3m Experience', 'Digital Marketing', 'Ecommerce', 'Social Media'],
  },
  {
    kicker: 'Scale',
    title: 'Over 1.9M+ Meta Views',
    lines: ['1,067,654 Facebook views (603K+ viewers)', '902,500 Instagram views (545K+ accounts reached)', '91.6% attributed directly to paid ads'],
    chips: ['902.5K Instagram', '1.06M Facebook', '545K Accounts'],
  },
  {
    kicker: 'Client Reels',
    title: 'Viral Short-Form Hits',
    lines: ['SP\'s Mall — 82,000 & 57,000 views', 'Masala Majesty — 59,600 visible views', 'Hotel Surves (34.8K) & Masala Mantra (20.3K)'],
    chips: ['SP\'s Mall (82K)', 'Masala Majesty', 'Hotel Surves'],
  },
  {
    kicker: 'Companies',
    title: 'Proven Track Record',
    lines: ['Digitize Brandhub India Pvt Ltd (Pune)', 'Akruti Solution · Add24 · Biharo.com', 'Founder of ApexPersona Seller Management Studio'],
  },
  {
    kicker: 'Studio',
    title: 'ApexPersona Pan-India Selling',
    lines: ['Amazon · Flipkart · Meesho · Myntra · Nykaa', 'From account setup to product listing to daily order fulfillment', 'Hinglish & English support on WhatsApp'],
    chips: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Nykaa'],
  },
  {
    kicker: 'Proof',
    title: 'Original Screenshots & Weekly Tracker',
    lines: ['All results backed by verifiable Meta Business Suite dashboards and weekly client content trackers.'],
  },
];

export type ProfileId = 'nitish' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'nitish',
    name: 'Nitish',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Brand Owner / Client',
    blurb: 'Results, client reels, pricing & proof first',
    color: '#4cc9ff',
    order: ['moments', 'originals', 'picks', 'story', 'skills', 'about', 'journey'],
  },
  {
    id: 'developer',
    name: 'Performance Marketer',
    blurb: 'Meta ads, numbers, attribution & ad spend first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'moments', 'journey', 'picks', 'about', 'story'],
  },
  {
    id: 'creative',
    name: 'Ecommerce Seller',
    blurb: 'Amazon, Flipkart, Meesho & Launch Pack first',
    color: '#ffb547',
    order: ['originals', 'journey', 'picks', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Nitish', meta: 'Profile • 2y 3m Experience • Digitize Brandhub & ApexPersona', palette: violet },
  journey: { nav: 'Journey', card: 'Career Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Campaign Proof', meta: `${projects.length} Major Campaigns • 1.9M+ Views`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Results', meta: 'Top 10 from Meta dashboards & Client Reels', palette: jade },
  skills: { nav: 'Skills', card: 'Marketing Stack', meta: `${skillCategories.length} Categories • Meta Ads, Marketplaces & Reels`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Verified Milestones • Meta Analytics`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Profile & Proof • View & connect on WhatsApp', palette: violet },
};
