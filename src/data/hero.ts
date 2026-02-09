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

export const heroImage =
  'https://images.unsplash.com/photo-1698833994916-e5270f571a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGNvb3BlcmF0aW9uJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MTg0MDQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
