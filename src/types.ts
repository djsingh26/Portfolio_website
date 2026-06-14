import type { LucideIcon } from 'lucide-react';

export type Theme = 'light' | 'dark';

export type NavItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  category: string;
  level: string;
  items: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: 'Frontend' | 'Full Stack' | 'Design Systems';
  githubUrl: string;
  demoUrl: string;
  accent: string;
};

export type TimelineItem = {
  date: string;
  company: string;
  role: string;
  achievements: string[];
  logo?: string;
};

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl: string;
  skills: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
