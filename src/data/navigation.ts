import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: typeof Linkedin;
  href: string;
  label: string;
  color: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Courses', href: '#courses', id: 'courses' },
  { label: 'Mission', href: '#mission', id: 'mission' },
  { label: 'News', href: '#news', id: 'news' },
  { label: 'Partners', href: '#partners', id: 'partners' },
];

export const usefulLinks: FooterLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Courses', href: '#courses' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'News & Events', href: '#news' },
  { label: 'Knowledge Hub', href: '#knowledge' },
];

export const quickAccessLinks: FooterLink[] = [
  { label: 'Training Programs', href: '#courses' },
  { label: 'Seminar Series', href: '#knowledge' },
  { label: 'CIMIC Handbook', href: '#knowledge' },
  { label: 'Publications', href: '#knowledge' },
  { label: 'Intel Briefings', href: '#news' },
  { label: 'Partner Network', href: '#about' },
];

export const socialLinks: SocialLink[] = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
  { icon: Instagram, href: '#', label: 'Instagram', color: '#e4405f' },
  { icon: Facebook, href: '#', label: 'Facebook', color: '#1877f2' },
  { icon: Youtube, href: '#', label: 'YouTube', color: '#ff0000' },
];
