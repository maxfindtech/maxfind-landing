import type { es } from './es';

// Inglés: misma forma que el diccionario es, validado por TypeScript.
export const en: typeof es = {
  meta: {
    home: {
      title: 'MAXFIND — Identity verification by DNI in Peru',
      description:
        'Identity verification API for businesses in Peru. Query DNIs in milliseconds, validate physical identity, access a reputation network. Free sandbox.',
    },
    precios: {
      title: 'Pricing',
      description:
        'Plans from S/ 19/month. Professional sandbox free forever. 30-day production trial with 500 real queries. No long-term commitment.',
    },
    productoOverview: {
      title: 'Product',
      description:
        'Explore what MAXFIND does in detail: DNI verification against RENIEC, physical validation, reputation network, and a professional sandbox.',
    },
  },
  nav: {
    producto: 'Product',
    soluciones: 'Solutions',
    precios: 'Pricing',
    docs: 'Docs',
    blog: 'Blog',
    login: 'Sign in',
    signup: 'Get started',
    openMenu: 'Open menu',
    homeAria: 'MAXFIND home',
    changeTheme: 'Toggle theme',
    changeLanguage: 'Change language',
  },
  hero: {
    eyebrow: 'Identity verification API · Peru',
    headline: 'Find the real identity behind every DNI',
    description:
      'Identity verification API for serious businesses in Peru. Real data in milliseconds, professional sandbox included for free.',
    primaryCta: 'Get started',
    secondaryCta: 'Read the docs',
    trust: 'No card required · Unlimited sandbox · 30-day trial with 500 real queries',
    mockup: {
      responseIn: 'Responded in',
      padronTag: 'RENIEC registry',
    },
  },
  socialProof: {
    heading: 'Businesses already verifying identity with MAXFIND',
    stats: {
      latency: 'Average latency',
      uptime: 'Guaranteed uptime',
      official: 'Official data',
      compliance: 'Legal compliance',
    },
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Validating identity in Peru today is painful',
    subtitle:
      'Without developer-friendly tools, every verification turns into a manual, slow, error-prone process.',
    items: [
      { title: 'Tedious', description: 'Checking DNIs manually, one customer at a time.' },
      {
        title: 'Slow',
        description: 'Waiting on public services that take days to respond.',
      },
      { title: 'Unsafe', description: 'No way to spot tampered or fake DNIs.' },
      {
        title: 'Expensive',
        description:
          'RENIEC partnerships require a legal entity and months of paperwork.',
      },
    ],
  },
  solution: {
    eyebrow: 'The solution',
    title: 'MAXFIND solves it in 3 steps',
    subtitle:
      'Designed so your first "hello world" hits real data, not hours of paperwork.',
    steps: [
      {
        title: 'Create your free account',
        description:
          'Instant access to the professional sandbox, free forever. No card, no paperwork.',
      },
      {
        title: 'Make your first call',
        description: 'In under 5 minutes following the docs. cURL, JS, or Python.',
      },
      {
        title: 'Go to production',
        description:
          '30 days free with 500 real RENIEC queries. After that, you only pay for what you use.',
      },
    ],
    ctaPrimary: 'Create account',
    ctaSecondary: 'Read the quickstart',
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to verify identity',
    subtitle: 'A single API with it all baked in. Built to scale with your business.',
    more: 'Learn more',
    items: [
      {
        title: 'Fast verification',
        description:
          'Query any Peruvian DNI in under a second. Data straight from the official RENIEC registry.',
      },
      {
        title: 'Physical validation',
        description:
          'Is the DNI the customer is showing real? We compare the physical document against the official registry in real time.',
      },
      {
        title: 'Reputation network',
        description:
          'Share alerts with other businesses in your industry. If a customer was a problem somewhere else, you hear about it first.',
      },
      {
        title: 'Professional sandbox',
        description:
          'Build and test without touching real data. Predictable mock DNIs so you can automate your tests.',
      },
      {
        title: 'Webhooks',
        description:
          'Receive real-time events when things happen. Plug MAXFIND into your stack without polling.',
      },
      {
        title: 'Guaranteed SLA',
        description:
          '99.9% uptime on production plans. Monitored latency and a public status page.',
      },
    ],
  },
  codeExample: {
    eyebrow: 'Developer experience',
    title: 'It is this simple',
    subtitle: 'A single HTTP call. No required SDK, no complex OAuth, no weird signatures.',
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple plans, no surprises',
    subtitle:
      'You pay for what you use. No annual commitments. Professional sandbox free forever.',
    model: {
      step1Title: 'Free sandbox',
      step1Description:
        'Unlimited mock DNIs to develop and test. Free forever, no card required.',
      step2Title: '30-day trial',
      step2Description:
        'On any subscription, 500 real RENIEC queries at no cost during the first 30 days.',
      step3Title: 'Then you start paying',
      step3Description:
        'After the trial, your chosen plan activates. You only pay for what you use.',
    },
    viewAll: 'See all plans and FAQ',
    mostPopular: 'Most popular',
    perMonth: '/mo',
    noteAfterCards: 'All prices in Peruvian soles (PEN), VAT excluded. Cancel any time.',
    compareTitle: 'Compare plans in detail',
    compareHeaderFeature: 'Feature',
    included: 'Included',
    notIncluded: 'Not included',
    pageHeroTitle: 'Simple plans, no surprises',
    pageHeroDescription:
      'You only pay for what you use. No annual commitments. Professional sandbox free forever and a 30-day trial with 500 real queries on signup.',
    plans: [
      {
        name: 'Micro',
        price: 'S/ 19',
        description: 'To start testing at low volume.',
        cta: 'Get started',
        features: ['500 queries/mo', 'Unlimited sandbox', 'DNI validation', 'Email support'],
      },
      {
        name: 'Starter',
        price: 'S/ 79',
        description: 'For teams already validating in production.',
        cta: 'Get started',
        features: [
          '5,000 queries/mo',
          'Physical validation',
          'Reputation network',
          'Webhooks',
          'Priority support',
        ],
      },
      {
        name: 'Pro',
        price: 'S/ 249',
        description: 'For high volume and critical operations.',
        cta: 'Get started',
        features: [
          '25,000 queries/mo',
          'Everything in Starter',
          '99.9% SLA',
          'Dedicated account',
          'Guided onboarding',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Unlimited volume and specific requirements.',
        cta: 'Talk to sales',
        features: [
          'Unlimited queries',
          'Custom SLA',
          'Dedicated infrastructure',
          '24/7 support',
          'Custom contract and billing',
        ],
      },
    ],
    comparisonRows: [
      'Real queries / month',
      'Professional sandbox',
      'DNI verification (RENIEC)',
      'Physical validation',
      'Reputation network',
      'Webhooks',
      '99.9% SLA',
      'Dedicated account',
      'Support',
    ],
    comparisonValues: {
      unlimited: 'Unlimited',
      supportEmail: 'Email',
      supportPriority: 'Priority',
      support247: '24/7',
    },
    faqs: [
      {
        q: 'Is the sandbox really free?',
        a: 'Yes. The professional sandbox with mock DNIs is free forever and does not require a card. Use it to build and integrate without touching real data or burning queries.',
      },
      {
        q: 'How does the 30-day trial work?',
        a: 'When you subscribe to any plan, you get 30 days with up to 500 real RENIEC queries at no cost. It is so you can validate in production before paying. After 30 days or 500 queries, billing for your chosen plan kicks in.',
      },
      {
        q: 'What happens if I go over my plan limit?',
        a: 'We warn you before you hit the limit. You can upgrade at any time or pay for overage queries at your plan rate. We never cut service without notice.',
      },
      {
        q: 'Are there commitments or annual contracts?',
        a: 'No. Every plan is month-to-month and you can cancel at any time from the dashboard. Only Enterprise can have a custom contract if you need one.',
      },
      {
        q: 'Do I need a RENIEC partnership?',
        a: 'No. That is exactly why MAXFIND exists: we give you identity verification access without you having to set up partnerships, certificates, or legal-entity paperwork.',
      },
      {
        q: 'Is the data legally protected?',
        a: 'Yes. We operate under Peru’s Personal Data Protection Law 29733, with a data bank registered at MINJUS and full audit logs on every query.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'Credit or debit card for monthly plans. Enterprise can be billed by invoice and bank transfer per contract.',
      },
    ],
  },
  industries: {
    eyebrow: 'Solutions',
    title: 'Built for any business that needs to verify',
    subtitle:
      'Real use cases, not generic templates. Each solution ships with integration examples specific to your industry.',
    viewCase: 'See use case',
    items: [
      {
        title: 'Clinics and medical offices',
        description:
          'Verify patient identity at admissions. Catch fake DNIs before treating them.',
      },
      {
        title: 'Buildings and condominiums',
        description: 'Identify visitors and control access. Know who enters your property.',
      },
      {
        title: 'Fintechs',
        description:
          'Streamlined KYC for your financial product. Fast onboarding without sacrificing security.',
      },
      {
        title: 'Retail and commerce',
        description:
          'Verify buyers on high-value transactions. Reduce fraud across your sales channels.',
      },
    ],
  },
  trust: {
    eyebrow: 'Security and compliance',
    title: 'Built to comply with Peruvian law',
    subtitle:
      'Personal data protection is not an afterthought. It is at the core of how we designed the API.',
    cta: 'View privacy policy',
    items: [
      {
        title: 'Data bank registered with MINJUS',
        description:
          'The "maxfind_users" personal data bank is formally registered with Peru’s National Personal Data Protection Authority.',
      },
      {
        title: 'Law 29733 compliance',
        description:
          'We process personal data under the current Peruvian legal framework, with a specific legal basis for every operation.',
      },
      {
        title: 'Full audit log',
        description:
          'Every query is logged with timestamp, IP, and purpose. Full log access from your dashboard.',
      },
      {
        title: 'End-to-end encryption',
        description:
          'TLS 1.3 in transit, AES-256 at rest. Per-tenant isolation for sensitive data.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What teams already verifying with MAXFIND say',
    items: [
      {
        quote:
          'We integrated MAXFIND into onboarding in an afternoon. KYC stopped being our signup bottleneck and we dropped abandonment significantly.',
        name: 'Daniela Reyes',
        role: 'CTO at FinPe',
      },
      {
        quote:
          'At admissions, we now confirm patient identity in seconds. We caught several attempts at insurance fraud that used to slip by.',
        name: 'Marco Salinas',
        role: 'Head of systems at Clínica Aurora',
      },
      {
        quote:
          'The sandbox let us test everything without touching real data. When we moved to production, we did not have to change a single line of code.',
        name: 'Lucía Ferrer',
        role: 'Founder at ComercioSeguro',
      },
    ],
  },
  ctaFinal: {
    title: 'Ready to start?',
    description: 'Create your free account and make your first call in under 5 minutes.',
    primary: 'Create free account',
    secondary: 'Talk to sales',
  },
  footer: {
    tagline: 'Identity verification API for serious businesses in Peru.',
    sections: {
      Producto: 'Product',
      Soluciones: 'Solutions',
      Empresa: 'Company',
      Recursos: 'Resources',
      Legal: 'Legal',
    },
    copyright: 'All rights reserved.',
    madeIn: 'Made in Peru',
  },
  faq: {
    title: 'Frequently asked questions',
    contact: 'Cannot find what you need? Email us at',
  },
  chat: {
    title: 'MAXFIND help',
    subtitle: 'We reply instantly',
    greeting: 'Hi! 👋 How can I help? Pick a question or type your own.',
    placeholder: 'Type your question…',
    send: 'Send',
    fallback:
      'I did not find an exact answer. A person can help: <a href="{contactUrl}" class="font-medium text-accent underline">use the contact form</a> or email <a href="mailto:{contactEmail}" class="font-medium text-accent underline">{contactEmail}</a>.',
    openAria: 'Open help',
    closeAria: 'Close',
    faqs: [
      {
        label: 'What is MAXFIND?',
        keywords: ['what is', 'maxfind', 'product', 'do', 'about'],
        answer:
          'MAXFIND is an identity verification API for DNIs in Peru. You can query the official RENIEC registry, validate physical identity, and tap into a reputation network across businesses.',
      },
      {
        label: 'Is the sandbox free?',
        keywords: ['sandbox', 'free', 'trial', 'test'],
        answer:
          'Yes. The professional sandbox with mock DNIs is free forever and does not require a card. Use it to integrate and test without spending real queries.',
      },
      {
        label: 'How do I start?',
        keywords: ['start', 'begin', 'sign up', 'account', 'register'],
        answer:
          'Create your free account and make your first call in under 5 minutes. <a href="{signupUrl}" class="font-medium text-accent underline">Get started here</a>.',
      },
      {
        label: 'How much does it cost?',
        keywords: ['price', 'cost', 'plan', 'plans', 'pricing'],
        answer:
          'Plans start at S/ 19/month. On signup you get 30 days with 500 real queries at no cost. <a href="{pricingUrl}" class="font-medium text-accent underline">See all plans</a>.',
      },
      {
        label: 'Where does the data come from?',
        keywords: ['data', 'source', 'reniec', 'registry', 'official'],
        answer:
          'Every query resolves against the official RENIEC registry. Real, structured data, no scraping.',
      },
      {
        label: 'Is it legal? Is data protected?',
        keywords: ['legal', 'law', 'personal data', 'privacy', 'secure', 'protection', '29733'],
        answer:
          'Yes. We operate under Peru’s Law 29733, with a data bank registered at MINJUS and full audit logs on every query. Data is encrypted in transit and at rest.',
      },
      {
        label: 'Do I need a RENIEC partnership?',
        keywords: ['partnership', 'reniec', 'paperwork', 'requirement', 'legal entity'],
        answer:
          'No. That is the whole point of MAXFIND: you verify identity without setting up partnerships, certificates, or legal-entity paperwork.',
      },
      {
        label: 'Is there documentation?',
        keywords: ['documentation', 'docs', 'api', 'integrate', 'endpoint'],
        answer:
          'Yes, everything is at <a href="{docsUrl}" target="_blank" rel="noopener noreferrer" class="font-medium text-accent underline">docs.maxfind.app</a> with cURL, JS, and Python examples.',
      },
    ],
  },
  forms: {
    status: {
      successDefault: 'Got it, your message reached us. We reply within 24 business hours.',
      successDemo:
        'We received your demo request. We will reach out within 24 business hours to coordinate.',
      error: 'We could not send your message. Try again or email us directly at',
      invalid: 'Some required fields are missing. Review the form and try again.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      description: 'Questions about the API, integration, or pricing? Write to us.',
      emailLabel: 'Email',
      devNoticeTitle: 'Are you a developer?',
      devNoticeBody: 'Most likely',
      devNoticeLink: 'the documentation',
      devNoticeAfter: 'will answer your question faster.',
      fieldName: 'Name',
      fieldNamePh: 'Your name',
      fieldEmail: 'Email',
      fieldEmailPh: 'you@company.com',
      fieldCompany: 'Company',
      fieldOptional: '(optional)',
      fieldCompanyPh: 'Company name',
      fieldMessage: 'Message',
      fieldMessagePh: 'Tell us how we can help',
      submit: 'Send message',
      legal: 'By submitting, you accept our',
      legalLink: 'privacy policy',
    },
    demo: {
      eyebrow: 'Enterprise',
      title: 'Request a personalized demo',
      description:
        'For teams with high volume or specific needs. We show you how MAXFIND fits your stack in 30 minutes.',
      bullets: [
        'Walkthrough of features and use cases for your industry',
        'Custom pricing for high volume',
        'Extended sandbox and integration support',
      ],
      fieldName: 'Name',
      fieldRole: 'Role',
      fieldEmail: 'Work email',
      fieldCompany: 'Company',
      fieldVolume: 'Estimated query volume',
      fieldVolumeOptions: [
        'Under 5,000/mo',
        '5,000 — 25,000/mo',
        '25,000 — 100,000/mo',
        'More than 100,000/mo',
      ],
      fieldUseCase: 'Use case',
      submit: 'Request demo',
    },
  },
  auth: {
    login: {
      title: 'Sign in',
      subtitle: 'Welcome back to MAXFIND.',
      email: 'Email',
      emailPh: 'you@company.com',
      password: 'Password',
      passwordPh: '••••••••',
      forgot: 'Forgot it?',
      submit: 'Sign in',
      noAccount: 'Don’t have an account?',
      signup: 'Get started for free',
      legalBefore: 'By continuing you accept the',
      legalTerms: 'terms',
      legalAnd: 'and the',
      legalPrivacy: 'privacy policy',
      errorBoth: 'Enter both email and password.',
    },
    register: {
      title: 'Create your free account',
      subtitle: 'Instant sandbox access, no card.',
      sideTitle: 'Start verifying identity in minutes',
      sideBenefits: [
        'Professional sandbox free forever',
        '30 days with 500 real RENIEC queries',
        'No card required to start',
      ],
      name: 'Full name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@company.com',
      company: 'Company',
      companyPh: 'Company name',
      password: 'Password',
      passwordPh: 'At least 8 characters',
      submit: 'Create free account',
      hasAccount: 'Already have an account?',
      login: 'Sign in',
      legalBefore: 'By creating your account you accept the',
      legalTerms: 'terms',
      legalAnd: 'and the',
      legalPrivacy: 'privacy policy',
      errorRequired: 'Enter your name, email, and password.',
      errorPasswordShort: 'Password must be at least 8 characters.',
    },
    recover: {
      title: 'Recover password',
      subtitle: 'We will email you a link to set a new password.',
      email: 'Email',
      emailPh: 'you@company.com',
      submit: 'Send link',
      back: 'Back to sign in',
      okMessage:
        'If that email exists at MAXFIND, we sent a recovery link. Check your inbox.',
      errorEmail: 'Enter your email.',
    },
  },
  comingSoon: {
    eyebrow: 'Coming soon',
    primary: 'Get started',
    secondary: 'Back to home',
  },
  notify: {
    blog: {
      eyebrow: 'Blog',
      title: 'Coming soon',
      description:
        'We will write about identity verification, KYC in Peru, integrations, and behind-the-scenes at MAXFIND. Leave your email and we will tell you when the first post is up.',
    },
    changelog: {
      eyebrow: 'Changelog',
      title: 'No updates yet',
      description:
        'When we ship new features, improvements, or important changes, we will announce them here. Drop your email if you want the monthly recap.',
    },
    emailLabel: 'Email',
    emailPh: 'you@company.com',
    submit: 'Notify me',
    successOk: 'Done! We will let you know as soon as we publish.',
    successError: 'We could not save your subscription. Try again or email us at',
    invalid: 'Enter a valid email.',
  },
  notFound: {
    code: 'Error 404',
    title: 'This page does not exist',
    description:
      'The URL you typed does not match any page. Check the address bar or go back home.',
    primary: 'Back to home',
    secondary: 'Report issue',
  },
  productoIndex: {
    eyebrow: 'Product',
    title: 'One API, everything you need to verify identity',
    description:
      'DNI verification against RENIEC, physical document validation, reputation network across businesses, and a free professional sandbox. All bundled into a single API.',
  },
  verificacionDni: {
    meta: {
      title: 'Fast and reliable DNI verification',
      description:
        'Query any Peruvian DNI against the official RENIEC registry in under a second. Simple REST API, clear docs, professional sandbox.',
    },
    eyebrow: 'Product · DNI verification',
    title: 'Verify any Peruvian DNI in milliseconds',
    description:
      'Query the official RENIEC registry with a single API call. Real, structured data, instantly, so your product validates identity without friction.',
    rows: [
      {
        title: 'Official registry data',
        description:
          'Every query resolves against the official RENIEC registry. No scraping, no dubious sources.',
        points: ['Full names and surnames', 'Structured JSON response', 'Always up-to-date data'],
      },
      {
        title: 'Under a second',
        description:
          'Average latency under 200ms. Your onboarding flow does not stall waiting on a verification.',
        points: ['p95 below 400ms', 'Cloud infrastructure', 'Smart caching'],
      },
      {
        title: 'One HTTP call',
        description:
          'Simple REST API with API-key auth. No complex OAuth, no weird signatures, no mandatory SDKs.',
        points: ['Bearer token auth', 'Docs with examples', 'Optional SDKs for JS and Python'],
      },
    ],
  },
  validacionIdentidad: {
    meta: {
      title: 'Physical identity validation',
      description:
        'Compare the physical DNI against the official RENIEC registry in real time. Catch tampered documents and stop fraud before serving the customer.',
    },
    eyebrow: 'Product · Physical validation',
    title: 'Is the DNI they are showing you real?',
    description:
      'Compare the physical document against the official RENIEC registry in real time. Catch tampering and impersonation before you serve, open an account, or close a sale.',
    rows: [
      {
        title: 'Document against registry',
        description:
          'Compare the data on the physical DNI the person is showing you against the official RENIEC registry. If it does not match, you know instantly.',
        points: ['Real-time match', 'Tampered-data detection', 'Clear answer: valid or not'],
      },
      {
        title: 'Stop fraud at the door',
        description:
          'Before you serve, open an account, or hand over a product, confirm the person is who they claim to be. Fewer chargebacks, less risk.',
        points: ['Prevents impersonation', 'Reduces chargebacks', 'Audit trail for every validation'],
      },
      {
        title: 'Drops into your flow',
        description:
          'Add physical validation to your admissions, onboarding, or point of sale with one API call. No special hardware required.',
        points: ['No mandatory biometric reader', 'Simple REST API', 'Works on web and mobile'],
      },
    ],
  },
  redReputacion: {
    meta: {
      title: 'Cross-business reputation network',
      description:
        'Share alerts with other businesses in your industry. If a customer was a problem elsewhere, you find out first. Law 29733 compliant.',
    },
    eyebrow: 'Product · Reputation network',
    title: 'Find out first, not later',
    description:
      'A trust network across formal businesses. Share and receive alerts about problematic individuals in your industry, with privacy by design and legal compliance built in.',
    rows: [
      {
        title: 'Shared alerts',
        description:
          'If someone caused a problem at another business in your industry, you hear about it before serving them. The network works for everyone who joins.',
        points: ['Peer-to-peer signals', 'Categories per incident type', 'You decide what to do with each alert'],
      },
      {
        title: 'Privacy by design',
        description:
          'We do not share unnecessary personal data. Alerts are handled under Law 29733, with a legal basis and audit log on every access.',
        points: ['Law 29733 compliance', 'Audited access', 'Minimum data needed'],
      },
      {
        title: 'Stronger as it grows',
        description:
          'Every business that joins contributes signals and receives protection. It is a self-reinforcing trust network across formal merchants.',
        points: ['Network effect', 'No extra cost on Starter+', 'Optional participation'],
      },
    ],
  },
  sandboxPage: {
    meta: {
      title: 'Professional sandbox',
      description:
        'Build and test without touching real data. Predictable mock DNIs, free forever, same API as production.',
    },
    eyebrow: 'Product · Sandbox',
    title: 'Build without touching real data',
    description:
      'A professional sandbox with predictable mock DNIs, free forever. Integrate MAXFIND, write your tests, and validate your flow before spending a single real query.',
    rows: [
      {
        title: 'Free forever',
        description:
          'The sandbox costs nothing and does not need a card. Build and integrate for as long as you need before going to production.',
        points: ['No card required', 'No time limit', 'No real queries spent'],
      },
      {
        title: 'Predictable mock DNIs',
        description:
          'A set of test DNIs with deterministic responses. Perfect for automated tests that should not depend on real data.',
        points: ['Stable responses', 'Success and error cases', 'Great for CI/CD'],
      },
      {
        title: 'Same API as production',
        description:
          'The sandbox uses the exact same endpoints and formats as production. What works here works there — just swap the API key.',
        points: ['Same endpoints', 'Same response shape', 'Migrate without code changes'],
      },
    ],
    readyTitle: 'Ready for real data?',
    readyBody:
      'Once you are done integrating in sandbox, subscribe and get 30 days with 500 real RENIEC queries at no cost. After the trial, you only pay for what you use.',
    readyPrimary: 'Create account',
    readySecondary: 'See plans',
  },
  solucionesIndex: {
    meta: {
      title: 'Industry solutions',
      description:
        'MAXFIND adapted to your industry: clinics, buildings, fintechs, and retail.',
    },
    eyebrow: 'Solutions',
    title: 'Identity verification for your industry',
    description:
      'Each industry has unique use cases. Here is how MAXFIND adapts to yours.',
  },
  clinicas: {
    meta: {
      title: 'MAXFIND for clinics and medical offices',
      description:
        'Verify patient identity at admissions. Catch fake DNIs before treatment and stay compliant with Law 29733.',
    },
    eyebrow: 'Solutions · Clinics',
    title: 'Verify your patients’ identity',
    description:
      'Confirm who each patient is at admissions, catch fake documents, and protect your coverage without adding friction to care.',
    rows: [
      {
        title: 'Frictionless admissions',
        description:
          'Validate the patient’s identity at admissions with a single query. No extra paperwork or delays at the desk.',
        points: ['Verification in seconds', 'Correct data in the medical record', 'Fewer typing errors'],
      },
      {
        title: 'Catch fake DNIs',
        description:
          'Before treating anyone, confirm the document is real by comparing it against the official RENIEC registry. Avoid impersonation and insurance fraud.',
        points: ['Match against RENIEC', 'Prevents coverage impersonation', 'Per-patient audit trail'],
      },
      {
        title: 'Stay compliant',
        description:
          'You handle sensitive health data. MAXFIND runs under Law 29733, with a data bank registered at MINJUS and full audit logs on every query.',
        points: ['Law 29733 compliance', 'Access audit logs', 'Encrypted data'],
      },
    ],
  },
  edificios: {
    meta: {
      title: 'MAXFIND for buildings and condominiums',
      description:
        'Identify visitors and control access to your building. Confirm the real identity of everyone entering your property.',
    },
    eyebrow: 'Solutions · Buildings',
    title: 'Know who walks into your building',
    description:
      'Verify visitor and vendor identity at reception. Real access control, not a number jotted down by hand.',
    rows: [
      {
        title: 'Know who enters',
        description:
          'Register and verify the identity of every visitor at reception. Know who enters your building and when, with real data.',
        points: ['Verification at reception', 'Registration with confirmed identity', 'Visit history'],
      },
      {
        title: 'Real access control',
        description:
          'Jotting down a DNI in a notebook is not enough. Confirm that the document exists and matches the person in front of you.',
        points: ['Match against RENIEC', 'Prevents entry with fake data', 'Integrates with your access system'],
      },
      {
        title: 'Peace of mind for residents',
        description:
          'A building that verifies identities is a safer building. Give residents certainty that you know who comes in.',
        points: ['Higher perceived safety', 'Faster response to incidents', 'Legally protected data'],
      },
    ],
  },
  fintechPage: {
    meta: {
      title: 'MAXFIND for fintechs',
      description:
        'Simplified KYC for your financial product. Fast onboarding against the RENIEC registry without sacrificing security or compliance.',
    },
    eyebrow: 'Solutions · Fintech',
    title: 'KYC that does not slow down your onboarding',
    description:
      'Verify identity during user signup with a simple API. Fast onboarding, solid compliance, and the integration speed your team needs.',
    rows: [
      {
        title: 'Frictionless KYC',
        description:
          'Verify your users’ identity during onboarding with a single API call. Less drop-off at signup, more activated accounts.',
        points: ['Faster onboarding', 'Less drop-off', 'Verification against RENIEC'],
      },
      {
        title: 'Compliance without the drag',
        description:
          'Identity verification is the foundation of your compliance. MAXFIND gives you official data and full audit logs to back every signup.',
        points: ['Per-user audit trail', 'Per-query audit log', 'Law 29733 compliance'],
      },
      {
        title: 'Built for developers',
        description:
          'REST API, professional sandbox, and SDKs. Your team integrates MAXFIND in an afternoon, not in a quarter of meetings.',
        points: ['Free sandbox', 'Docs with examples', 'Webhooks for events'],
      },
    ],
  },
  comercioPage: {
    meta: {
      title: 'MAXFIND for retail and commerce',
      description:
        'Verify buyers on high-value transactions and reduce fraud in your sales. RENIEC verification and a reputation network across merchants.',
    },
    eyebrow: 'Solutions · Retail',
    title: 'Sell with the identity confirmed',
    description:
      'Verify your buyers on high-value transactions, reduce chargebacks from impersonation, and join a reputation network across formal merchants.',
    rows: [
      {
        title: 'Verify on high-value transactions',
        description:
          'On credit sales, large deliveries, or deferred payments, confirm the buyer’s identity before closing. Fewer surprises later.',
        points: ['Verification at point of sale', 'Great for credit sales', 'Match against RENIEC'],
      },
      {
        title: 'Reduce fraud',
        description:
          'Identity impersonation is one of the top causes of retail loss. Catch it before it turns into a chargeback.',
        points: ['Prevents impersonation', 'Fewer chargebacks', 'Per-transaction audit trail'],
      },
      {
        title: 'Join the network',
        description:
          'Share alerts with other formal merchants. If a buyer caused trouble somewhere else, you know before selling to them.',
        points: ['Reputation network', 'Cross-merchant signals', 'Optional participation'],
      },
    ],
  },
  sobre: {
    meta: {
      title: 'About MAXFIND',
      description:
        'MAXFIND is an identity verification infrastructure built for Peru’s formal businesses.',
    },
    eyebrow: 'About MAXFIND',
    title: 'Identity verification infrastructure for Peru',
    description:
      'We built what we wished we had when we worked in fintech, retail, and healthcare: a simple API to confirm who is really on the other side.',
    sections: [
      {
        title: 'Why we exist',
        body:
          'In Peru, validating a customer’s identity is still slow, manual, and limited to those with a RENIEC partnership. That leaves out most of the market: clinics, buildings, new fintechs, and formal merchants that need certainty without months of paperwork. MAXFIND is the layer that closes that gap.',
      },
      {
        title: 'How we work',
        body:
          'We operate as infrastructure: we respond fast, we are predictable, and we take personal-data protection seriously. Our data bank is registered with MINJUS and we design every feature around Law 29733 from day one.',
      },
      {
        title: 'Where we are going',
        body:
          'The roadmap focuses on three axes: expanding the reputation network into more industries, adding optional biometric validation, and shipping SDKs for more languages. If your business needs identity verification and wants to join the network, get in touch.',
      },
    ],
  },
};
