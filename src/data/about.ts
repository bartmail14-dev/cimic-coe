import { Target, BookOpen, Award, Lightbulb, Globe, Shield } from 'lucide-react';
import { Users } from 'lucide-react';

export interface Feature {
  icon: typeof Target;
  title: string;
  description: string;
}

export interface Stat {
  target: number;
  label: string;
  suffix?: string;
}

export const features: Feature[] = [
  {
    icon: Target,
    title: 'Strategic Focus',
    description:
      'Developing doctrine, best practices, and standards for civil-military cooperation in modern operational environments.',
  },
  {
    icon: BookOpen,
    title: 'Education & Training',
    description:
      'Providing world-class education and training programs for CIMIC practitioners worldwide.',
  },
  {
    icon: Award,
    title: 'NATO Accredited',
    description:
      'Officially recognized NATO Centre of Excellence since 2001, serving alliance members.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description:
      'Leading research and innovation in civil-military interaction methodologies.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description:
      'Connecting military and civilian organizations across continents for effective cooperation.',
  },
  {
    icon: Shield,
    title: 'Mission Ready',
    description:
      'Preparing personnel for complex operations requiring civil-military coordination.',
  },
];

export const stats: Stat[] = [
  { target: 2001, label: 'Established' },
  { target: 8, label: 'Contributing Nations' },
  { target: 30, label: 'Partners', suffix: '+' },
  { target: 500, label: 'Annual Trainees', suffix: '+' },
];
