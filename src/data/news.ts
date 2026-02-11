import { Shield, Radio, FileText } from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  timestamp: string;
  category: string;
  priority: 'CRITICAL' | 'HIGH' | 'STANDARD';
  classification: string;
  status: string;
  icon: typeof Shield;
  color: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'BRIEF-001',
    title: 'Advanced CIMIC Training Course 2025',
    excerpt:
      'Registration now open for our comprehensive 3-week training course covering advanced civil-military cooperation methodologies. NATO-certified program.',
    date: 'March 15, 2025',
    timestamp: '14:32 UTC',
    category: 'Training',
    priority: 'HIGH',
    classification: 'PUBLIC',
    status: 'ACTIVE',
    icon: Shield,
    color: '#f7941d',
    image: '/images/news-training.webp',
  },
  {
    id: 'BRIEF-002',
    title: 'International CIMIC Conference',
    excerpt:
      'Annual conference bringing together experts from 40+ nations to discuss emerging challenges in civil-military cooperation and strategic partnerships.',
    date: 'April 22, 2025',
    timestamp: '09:15 UTC',
    category: 'Conference',
    priority: 'CRITICAL',
    classification: 'PUBLIC',
    status: 'SCHEDULED',
    icon: Radio,
    color: '#5a6b3f',
    image: '/images/news-conference.webp',
  },
  {
    id: 'BRIEF-003',
    title: 'New CIMIC Doctrine Publication',
    excerpt:
      'Latest edition of our comprehensive doctrine manual now available, featuring updated best practices, lessons learned and operational guidelines.',
    date: 'May 8, 2025',
    timestamp: '11:47 UTC',
    category: 'Publication',
    priority: 'STANDARD',
    classification: 'PUBLIC',
    status: 'PUBLISHED',
    icon: FileText,
    color: '#f7941d',
    image: '/images/news-doctrine.webp',
  },
];

export const newsFilters = ['ALL', 'Training', 'Conference', 'Publication'];
