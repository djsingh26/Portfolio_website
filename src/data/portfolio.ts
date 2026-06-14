import { Github, Linkedin, Mail } from 'lucide-react';
import type { Certification, NavItem, Project, SkillGroup, SocialLink, TimelineItem } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    level: 'Advanced',
    items: ['React', 'Lightning Web Components', 'Experience Cloud', 'Accessibility', 'Animation', 'Angular'],
  },
  {
    category: 'Backend',
    level: 'Practical',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Authentication', 'Testing'],
  },
  {
    category: 'Tools',
    level: 'Daily',
    items: ['Vite', 'Git', 'Figma', 'CI/CD', 'Performance Audits'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Atlas Analytics',
    description:
      'A responsive analytics dashboard with live filters, accessible charts, and export-ready reporting workflows.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    category: 'Frontend',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Nectar Commerce',
    description:
      'A polished storefront prototype with product discovery, cart state, and conversion-focused product pages.',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    accent: 'from-orange-400 to-rose-500',
  },
  {
    id: 3,
    title: 'Pulse Design Kit',
    description:
      'A reusable component library with typed variants, tokenized themes, and documentation for product teams.',
    tech: ['Storybook', 'TypeScript', 'Tailwind', 'A11y'],
    category: 'Design Systems',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    accent: 'from-emerald-500 to-lime-500',
  },
  {
    id: 4,
    title: 'Field Notes CRM',
    description:
      'A lightweight CRM workspace optimized for scanning, quick edits, and predictable team handoffs.',
    tech: ['React', 'TanStack Query', 'Node.js', 'SQL'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    accent: 'from-sky-500 to-indigo-500',
  },
];

export const timeline: TimelineItem[] = [
  {
    date: 'December 2025 - Present',
    company: 'Steampunk Inc.',
    role: 'Salesforce Application Developer',
    achievements: [
      'Built responsive client sites with React, TypeScript, and Tailwind CSS.',
      'Improved Lighthouse accessibility scores through semantic markup and focus handling.',
      'Delivered reusable component systems for faster client iteration.',
    ],
  },
  {
    date: 'March 2023 - December 2024',
    company: 'Freddie Mac',
    role: 'Salesforce II Engineer',
    achievements: [
      'Shipped dashboard features used by operations and support teams.',
      'Integrated API workflows with resilient loading, error, and empty states.',
      'Collaborated with design to turn prototypes into production-ready UI.',
    ],
  },
  {
    date: 'July 2022 - March 2023',
    company: 'Freddie Mac',
    role: 'Salesforce I Engineer',
    achievements: [
      'Focused on human-computer interaction, web architecture, and software design.',
      'Led student projects involving real users, rapid prototyping, and usability testing.',
    ],
  },
  {
    date: 'March 2021 - August 2021',
    company: 'Freddie Mac',
    role: 'Software Engineer - Intern',
    achievements: [
      'Focused on human-computer interaction, web architecture, and software design.',
      'Led student projects involving real users, rapid prototyping, and usability testing.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    issued: 'June 14th 2025',
    credentialId: 'Credential ID available on request',
    credentialUrl: 'https://trailhead.salesforce.com/credentials/verification',
    skills: ['Apex', 'Developer Fundamentals', 'Data Modeling', 'Process Automation', 'Testing', 'Debugging', 'Deployment', 'User Interface', 'Integration'],
  },
  {
    id: 2,
    title: 'Salesforce Certified Platform App Builder',
    issuer: 'Salesforce',
    issued: 'October 08th 2025',
    credentialUrl: 'https://trailhead.salesforce.com/credentials/verification',
    skills: ['Data Modeling', 'Salesforce Management', 'User Interface', 'App Development', 'Security', 'Business Logic', 'Process Automation', 'Mobile App Development'],
  },
  {
    id: 3,
    title: 'Salesforce Certified JavaScript Developer I',
    issuer: 'Soon ...',
    issued: 'Sometimes in 2026',
    credentialUrl: 'https://www.freecodecamp.org/certification/',
    skills: ['HTML', 'CSS', 'Accessibility', 'JavaScript Fundamentals', 'React', 'Testing', 'Performance Optimization', 'Security Best Practices', 'Build Tools', 'LWC Development'],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/djsingh26', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dilraj-singh-professional//', icon: Linkedin },
  { label: 'Email', href: 'mailto:dilraj3004@gmail.com', icon: Mail },
];
