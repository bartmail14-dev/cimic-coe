import {
  FlagNetherlands,
  FlagGermany,
  FlagPoland,
  FlagDenmark,
  FlagItaly,
  FlagCzechia,
  FlagRomania,
  FlagSlovenia,
} from '@/components/FlagComponents';

export interface CIMICData {
  cimicPersonnel: string;
  cimicBudget: string;
  natoContribution: string;
  specialization: string[];
  keyCapabilities: string;
}

export interface Nation {
  code: string;
  name: string;
  FlagComponent: React.ComponentType<{ className?: string }>;
  color: string;
  joined: string;
  personnel: string;
  position: { x: number; y: number };
  cimic: CIMICData;
}

export const nations: Nation[] = [
  {
    code: 'NLD',
    name: 'Netherlands',
    FlagComponent: FlagNetherlands,
    color: '#FF4500',
    joined: '2001',
    personnel: 'Lead Nation',
    position: { x: 20, y: 35 },
    cimic: {
      cimicPersonnel: '~85 CIMIC',
      cimicBudget: '€5.2M/year',
      natoContribution: 'Host Nation & Framework',
      specialization: ['Civil Affairs', 'NGO Liaison', 'Capacity Building'],
      keyCapabilities:
        'Host nation support, CIMIC doctrine development, Civil-military coordination training',
    },
  },
  {
    code: 'DEU',
    name: 'Germany',
    FlagComponent: FlagGermany,
    color: '#FFCE00',
    joined: '2009',
    personnel: '45+',
    position: { x: 35, y: 30 },
    cimic: {
      cimicPersonnel: '~120 CIMIC',
      cimicBudget: '€8.4M/year',
      natoContribution: 'Major Contributor',
      specialization: ['Infrastructure', 'Humanitarian Aid', 'Reconstruction'],
      keyCapabilities:
        'Engineering support, Infrastructure assessment, Post-conflict reconstruction expertise',
    },
  },
  {
    code: 'POL',
    name: 'Poland',
    FlagComponent: FlagPoland,
    color: '#DC143C',
    joined: '2013',
    personnel: '38+',
    position: { x: 50, y: 25 },
    cimic: {
      cimicPersonnel: '~65 CIMIC',
      cimicBudget: '€4.8M/year',
      natoContribution: 'Eastern Partnership',
      specialization: ['Border Communities', 'Civil Protection', 'Local Governance'],
      keyCapabilities:
        'Cross-border cooperation, Community engagement, Local authority liaison',
    },
  },
  {
    code: 'DNK',
    name: 'Denmark',
    FlagComponent: FlagDenmark,
    color: '#C8102E',
    joined: '2009',
    personnel: '32+',
    position: { x: 30, y: 18 },
    cimic: {
      cimicPersonnel: '~45 CIMIC',
      cimicBudget: '€3.6M/year',
      natoContribution: 'Nordic Cooperation',
      specialization: ['Stabilization', 'Rule of Law', 'Gender Equality'],
      keyCapabilities:
        'Stabilization operations, Legal affairs support, Women-Peace-Security programs',
    },
  },
  {
    code: 'ITA',
    name: 'Italy',
    FlagComponent: FlagItaly,
    color: '#009246',
    joined: '2017',
    personnel: '28+',
    position: { x: 40, y: 50 },
    cimic: {
      cimicPersonnel: '~95 CIMIC',
      cimicBudget: '€6.8M/year',
      natoContribution: 'Mediterranean Hub',
      specialization: ['Migration Support', 'Cultural Heritage', 'Medical Aid'],
      keyCapabilities:
        'Migration crisis response, Cultural property protection, Medical civil support',
    },
  },
  {
    code: 'CZE',
    name: 'Czech Republic',
    FlagComponent: FlagCzechia,
    color: '#11457E',
    joined: '2019',
    personnel: '24+',
    position: { x: 45, y: 35 },
    cimic: {
      cimicPersonnel: '~38 CIMIC',
      cimicBudget: '€2.9M/year',
      natoContribution: 'Central European',
      specialization: ['Disaster Relief', 'CBRN Response', 'Civil Emergency'],
      keyCapabilities:
        'Disaster response coordination, CBRN civil protection, Emergency management',
    },
  },
  {
    code: 'ROU',
    name: 'Romania',
    FlagComponent: FlagRomania,
    color: '#FCD116',
    joined: '2020',
    personnel: '20+',
    position: { x: 60, y: 42 },
    cimic: {
      cimicPersonnel: '~42 CIMIC',
      cimicBudget: '€3.2M/year',
      natoContribution: 'Black Sea Region',
      specialization: ['Rural Development', 'Agriculture Support', 'Education'],
      keyCapabilities:
        'Rural community support, Agricultural assistance, Civil education programs',
    },
  },
  {
    code: 'SVN',
    name: 'Slovenia',
    FlagComponent: FlagSlovenia,
    color: '#005EB8',
    joined: '2021',
    personnel: '18+',
    position: { x: 48, y: 45 },
    cimic: {
      cimicPersonnel: '~28 CIMIC',
      cimicBudget: '€2.1M/year',
      natoContribution: 'Alpine Region',
      specialization: ['Mountain Rescue', 'Environmental', 'Youth Engagement'],
      keyCapabilities:
        'Mountain community support, Environmental protection, Youth & sports programs',
    },
  },
];
