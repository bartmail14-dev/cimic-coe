import { Target, Shield, Award, Radio, Zap } from 'lucide-react';

export interface CourseData {
  id: string;
  title: string;
  level: string;
  duration: string;
  monthsAhead: number;
  description: string;
  capacity: string;
  icon: typeof Target;
  color: string;
  classification: string;
}

export const courses: CourseData[] = [
  {
    id: 'ncfwc',
    title: 'NATO CIMIC Field Worker Course',
    level: 'TACTICAL LEVEL',
    duration: '2 Weeks',
    monthsAhead: 1,
    description:
      'Enables officers and NCOs to conduct CIMIC activities across the full spectrum of military engagement in peacetime, crisis and conflict.',
    capacity: '24 Students',
    icon: Target,
    color: '#f7941d',
    classification: 'NCFWC',
  },
  {
    id: 'ncswc',
    title: 'NATO CIMIC Staff Worker Course',
    level: 'OPERATIONAL LEVEL',
    duration: '2 Weeks',
    monthsAhead: 2,
    description:
      'Prepares staff officers to plan and coordinate CIMIC operations at brigade level and above in multinational headquarters.',
    capacity: '24 Students',
    icon: Shield,
    color: '#5a6b3f',
    classification: 'NCSWC',
  },
  {
    id: 'ncfsc',
    title: 'NATO CIMIC Functional Specialist Course',
    level: 'SPECIALIST LEVEL',
    duration: '1 Week',
    monthsAhead: 3,
    description:
      'Develops specialized knowledge in specific CIMIC functional areas such as cultural affairs, governance, and infrastructure.',
    capacity: '20 Students',
    icon: Award,
    color: '#f7941d',
    classification: 'NCFSC',
  },
  {
    id: 'nchcc',
    title: 'NATO CIMIC Higher Command Course',
    level: 'STRATEGIC LEVEL',
    duration: '1 Week',
    monthsAhead: 4,
    description:
      'Designed for senior officers and civilians working at strategic level headquarters requiring advanced CIMIC knowledge.',
    capacity: '16 Students',
    icon: Radio,
    color: '#5a6b3f',
    classification: 'NCHCC',
  },
  {
    id: 'nclc',
    title: 'NATO CIMIC Liaison Course',
    level: 'COORDINATION LEVEL',
    duration: '5 Days',
    monthsAhead: 5,
    description:
      'Focuses on liaison activities between military forces and civilian actors in complex operational environments.',
    capacity: '20 Students',
    icon: Zap,
    color: '#f7941d',
    classification: 'NCLC',
  },
];
