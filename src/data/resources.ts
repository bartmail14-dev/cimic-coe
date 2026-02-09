import { Presentation, BookOpen, FileText, GraduationCap, Target, Database, Zap } from 'lucide-react';

export interface Resource {
  id: number;
  icon: typeof Presentation;
  title: string;
  description: string;
  accentIcon: typeof Target;
  color: string;
  gradient: string;
  stat: string;
  code: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    icon: Presentation,
    title: 'Our Seminar Series',
    description:
      'Our seminars are a cornerstone of our mission to foster unity of purpose in the field of civil-military interaction.',
    accentIcon: Target,
    color: '#f7941d',
    gradient: 'from-orange-50 to-orange-100',
    stat: '12+ Annually',
    code: 'SEM-001',
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'The CIMIC Handbook',
    description:
      'Your essential tactical guide for understanding and applying CIMIC principles in real-world situations.',
    accentIcon: Database,
    color: '#5a6b3f',
    gradient: 'from-green-50 to-green-100',
    stat: '500+ Pages',
    code: 'HND-001',
  },
  {
    id: 3,
    icon: FileText,
    title: 'Our Publications',
    description:
      'The CCOE offers among others Concept Support and Subject Matter Expertise.',
    accentIcon: Zap,
    color: '#f7941d',
    gradient: 'from-orange-50 to-orange-100',
    stat: '50+ Docs',
    code: 'PUB-001',
  },
  {
    id: 4,
    icon: GraduationCap,
    title: 'Our Courses',
    description:
      'We offer a wide range of training opportunities related to and adjacent to Civil-Military Cooperation (CIMIC).',
    accentIcon: Target,
    color: '#5a6b3f',
    gradient: 'from-green-50 to-green-100',
    stat: '5 Programs',
    code: 'CRS-001',
  },
];
