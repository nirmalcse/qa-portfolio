export type Profile = {
  name: string
  role: string
  tagline: string
  location: string
  email: string
  website: string
  resumeUrl: string
  social: { label: string; href: string }[]
  highlights: { title: string; description: string; icon: 'sparkles' | 'code' | 'briefcase' | 'rocket' }[]
  skills: { group: string; items: string[] }[]
  projects: {
    name: string
    description: string
    tags: string[]
    links: { label: string; href: string }[]
  }[]
  experience: {
    role: string
    company: string
    period: string
    bullets: string[]
  }[]
}

export const profile: Profile = {
  name: 'Your Name',
  role: 'Product Designer & Frontend Developer',
  tagline:
    'I build delightful interfaces and scalable design systems — from concept to shipped product.',
  location: 'City, Country',
  email: 'you@example.com',
  website: 'https://yourdomain.com',
  resumeUrl: '#',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'Dribbble', href: 'https://dribbble.com/your-handle' },
  ],
  highlights: [
    {
      title: 'Design-led engineering',
      description:
        'Fast prototypes → polished UI. I keep UX, accessibility, and performance aligned.',
      icon: 'sparkles',
    },
    {
      title: 'Modern web stack',
      description:
        'React, TypeScript, Tailwind, animations, and component architecture that scales.',
      icon: 'code',
    },
    {
      title: 'Product thinking',
      description:
        'I care about the “why” — goals, metrics, constraints, and iterative delivery.',
      icon: 'briefcase',
    },
    {
      title: 'Reliable delivery',
      description:
        'Clear communication, strong ownership, and a bias toward shipping quality work.',
      icon: 'rocket',
    },
  ],
  skills: [
    {
      group: 'Design',
      items: ['Product Design', 'Design Systems', 'Wireframing', 'Prototyping', 'UX Writing'],
    },
    {
      group: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind', 'Accessibility', 'Performance'],
    },
    {
      group: 'Tools',
      items: ['Figma', 'Notion', 'Jira', 'GitHub', 'Vercel'],
    },
  ],
  projects: [
    {
      name: 'Pulse — Personal Finance Dashboard',
      description:
        'A responsive dashboard with interactive charts, budgets, and goals. Built with a token-based UI system.',
      tags: ['React', 'TypeScript', 'UI System'],
      links: [
        { label: 'Case Study', href: '#' },
        { label: 'Live', href: '#' },
      ],
    },
    {
      name: 'Atlas — Component Library',
      description:
        'Reusable components with accessibility-first patterns and documentation for teams.',
      tags: ['Design System', 'A11y', 'Storybook'],
      links: [
        { label: 'Docs', href: '#' },
        { label: 'Repo', href: '#' },
      ],
    },
    {
      name: 'Northwind — Landing Page Revamp',
      description:
        'Conversion-focused redesign with performance optimizations and crisp motion.',
      tags: ['Branding', 'Framer Motion', 'SEO'],
      links: [
        { label: 'Before/After', href: '#' },
        { label: 'Live', href: '#' },
      ],
    },
  ],
  experience: [
    {
      role: 'Senior UI/UX Designer',
      company: 'Studio Name',
      period: '2023 — Present',
      bullets: [
        'Led redesign of core product flows, improving activation and task completion.',
        'Defined design tokens and component patterns for consistent UI across teams.',
        'Partnered with engineering to ship accessible, performant interfaces.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Company Name',
      period: '2021 — 2023',
      bullets: [
        'Built reusable React components and page templates across multiple products.',
        'Implemented analytics events and A/B tests to validate design decisions.',
        'Improved Lighthouse scores with code splitting and image optimizations.',
      ],
    },
  ],
}
