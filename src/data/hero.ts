import { Users, Globe, Shield } from 'lucide-react';

export interface HeroStat {
  icon: typeof Users;
  value: string;
  label: string;
  color: string;
}

export const heroStats: HeroStat[] = [
  { icon: Users, value: '30+', label: 'Member Nations', color: '#f7941d' },
  { icon: Globe, value: '15+', label: 'Years Active', color: '#7a8f5c' },
  { icon: Shield, value: '100+', label: 'Operations', color: '#f7941d' },
];

export const heroImage = '/images/hero-bg.webp';
