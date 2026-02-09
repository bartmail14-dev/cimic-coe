import { Users, BookCheck, Network, Shield } from 'lucide-react';

export interface CoreValue {
  icon: typeof Users;
  title: string;
  code: string;
  description: string;
  stat: string;
  color: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: Users,
    title: 'Collaboration',
    code: 'COL',
    description:
      'Building bridges between military and civilian organizations for effective partnerships.',
    stat: '8 Nations',
    color: '#f7941d',
  },
  {
    icon: BookCheck,
    title: 'Excellence',
    code: 'EXC',
    description:
      'Maintaining the highest standards in education, training, and doctrine development.',
    stat: '2500+ Trained',
    color: '#5a6b3f',
  },
  {
    icon: Network,
    title: 'Integration',
    code: 'INT',
    description:
      'Promoting seamless cooperation across different organizations and cultures.',
    stat: '45+ Partners',
    color: '#f7941d',
  },
  {
    icon: Shield,
    title: 'Integrity',
    code: 'ITG',
    description:
      'Upholding professional ethics and transparency in all our operations.',
    stat: 'ISO Certified',
    color: '#5a6b3f',
  },
];
