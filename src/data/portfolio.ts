import { Github, Linkedin, Mail } from 'lucide-react';
import type { NavItem, Project, SkillGroup, SocialLink, TimelineItem } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
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
    date: '2024 - Present',
    company: 'Freelance Studio',
    role: 'Frontend Developer',
    achievements: [
      'Built responsive client sites with React, TypeScript, and Tailwind CSS.',
      'Improved Lighthouse accessibility scores through semantic markup and focus handling.',
      'Delivered reusable component systems for faster client iteration.',
    ],
  },
  {
    date: '2022 - 2024',
    company: 'Northstar Labs',
    role: 'Full-Stack Engineer',
    achievements: [
      'Shipped dashboard features used by operations and support teams.',
      'Integrated API workflows with resilient loading, error, and empty states.',
      'Collaborated with design to turn prototypes into production-ready UI.',
    ],
  },
  {
    date: '2018 - 2022',
    company: 'State University',
    role: 'B.S. Computer Science',
    achievements: [
      'Focused on human-computer interaction, web architecture, and software design.',
      'Led student projects involving real users, rapid prototyping, and usability testing.',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
];
