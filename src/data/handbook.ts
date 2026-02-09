import { BookOpen, Target, Users, Shield, Briefcase, Globe2, FileText } from 'lucide-react';

export interface HandbookEntry {
  id: string;
  term: string;
  definition: string;
  category: string;
  classification: 'UNCLASSIFIED' | 'RESTRICTED' | 'CONFIDENTIAL';
  relatedTerms?: string[];
  examples?: string[];
}

export interface HandbookCategory {
  id: string;
  name: string;
  icon: typeof BookOpen;
  color: string;
}

export const categories: HandbookCategory[] = [
  { id: 'all', name: 'All Entries', icon: BookOpen, color: '#f7941d' },
  { id: 'operations', name: 'Operations', icon: Target, color: '#5a6b3f' },
  { id: 'coordination', name: 'Coordination', icon: Users, color: '#f7941d' },
  { id: 'doctrine', name: 'Doctrine', icon: Shield, color: '#5a6b3f' },
  { id: 'organizations', name: 'Organizations', icon: Briefcase, color: '#f7941d' },
  { id: 'concepts', name: 'Concepts', icon: Globe2, color: '#5a6b3f' },
  { id: 'planning', name: 'Planning', icon: FileText, color: '#f7941d' },
];

export const handbookEntries: HandbookEntry[] = [
  {
    id: 'cimic-001',
    term: 'Civil-Military Cooperation (CIMIC)',
    definition:
      'The coordination and cooperation, in support of the mission, between the NATO Commander and civil actors, including national population and local authorities, as well as international, national and non-governmental organizations and agencies.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CMI', 'Civil Affairs', 'Host Nation Support'],
    examples: [
      'Coordinating humanitarian aid delivery with local authorities',
      'Establishing liaison with NGOs in the operational area',
      'Supporting reconstruction efforts in post-conflict zones',
    ],
  },
  {
    id: 'cimic-002',
    term: 'Civil-Military Interaction (CMI)',
    definition:
      'All contacts and interactions between military and civilian actors in a given operational environment. CMI is broader than CIMIC and includes both formal and informal interactions.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CIMIC', 'Civil Affairs', 'Population Engagement'],
    examples: [
      'Daily interactions between soldiers and local population',
      'Information sharing at checkpoints',
      'Cultural awareness activities',
    ],
  },
  {
    id: 'cimic-003',
    term: 'Host Nation Support (HNS)',
    definition:
      "Civil and military assistance rendered in peace, crisis or war by a Host Nation to Allied forces and organizations which are located on, operating in or in transit through the Host Nation's territory.",
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Host Nation', 'Support Agreement', 'Infrastructure'],
    examples: [
      'Provision of facilities and infrastructure',
      'Transportation and logistics support',
      'Security assistance and protection',
    ],
  },
  {
    id: 'cimic-004',
    term: 'Non-Governmental Organization (NGO)',
    definition:
      'A private, self-governing, not-for-profit organization dedicated to alleviating human suffering and/or promoting education, health care, economic development, environmental protection, human rights, and conflict resolution.',
    category: 'organizations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['IO', 'INGO', 'Civil Society'],
    examples: ['Red Cross / Red Crescent', 'Médecins Sans Frontières', 'Save the Children'],
  },
  {
    id: 'cimic-005',
    term: 'International Organization (IO)',
    definition:
      'An organization with international membership, scope, or presence, established by formal political agreement between member states that have the status of international treaties.',
    category: 'organizations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['UN', 'NGO', 'IGO'],
    examples: [
      'United Nations',
      'European Union',
      'Organization for Security and Co-operation in Europe (OSCE)',
    ],
  },
  {
    id: 'cimic-006',
    term: 'Civil Affairs (CA)',
    definition:
      'Designated active or reserve component military forces and units organized, trained, and equipped specifically to conduct civil affairs operations and to support civil-military operations.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CIMIC', 'CMO', 'Population Engagement'],
    examples: [
      'Governance and public administration support',
      'Essential services restoration',
      'Rule of law operations',
    ],
  },
  {
    id: 'cimic-007',
    term: 'Key Leader Engagement (KLE)',
    definition:
      'The deliberate and planned interaction with influential individuals or groups to build relationships, influence attitudes, and shape behaviors in support of mission objectives.',
    category: 'coordination',
    classification: 'RESTRICTED',
    relatedTerms: ['Population Engagement', 'Stakeholder Analysis', 'Influence Operations'],
    examples: [
      'Meetings with local government officials',
      'Engagement with tribal elders',
      'Coordination with religious leaders',
    ],
  },
  {
    id: 'cimic-008',
    term: 'Quick Impact Project (QIP)',
    definition:
      'A project of limited scope and duration, designed to achieve a visible, immediate impact on the target population and demonstrate good will while supporting the overall mission.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CMO', 'Hearts and Minds', 'Community Support'],
    examples: ['School renovation', 'Water well drilling', 'Medical clinic establishment'],
  },
  {
    id: 'cimic-009',
    term: 'Civil-Military Operations Center (CMOC)',
    definition:
      'A facility established to provide a focal point for the coordination of civil-military operations between military forces and civilian organizations.',
    category: 'coordination',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CIMIC Center', 'Coordination Center', 'Liaison'],
    examples: [
      'Humanitarian assistance coordination center',
      'Disaster relief coordination facility',
      'Reconstruction operations center',
    ],
  },
  {
    id: 'cimic-010',
    term: 'Area of Responsibility (AOR)',
    definition:
      'The geographical area associated with a combatant command within which a geographic combatant commander has authority to plan and conduct operations.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Joint Operations Area', 'Area of Operations', 'Theater of Operations'],
  },
  {
    id: 'cimic-011',
    term: 'Humanitarian Assistance',
    definition:
      'Programs conducted to relieve or reduce the results of natural or man-made disasters or other endemic conditions such as human pain, disease, hunger, or privation that might present a serious threat to life or that can result in great damage to or loss of property.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Disaster Relief', 'Emergency Response', 'Foreign Humanitarian Assistance'],
    examples: [
      'Earthquake response operations',
      'Flood relief efforts',
      'Medical humanitarian missions',
    ],
  },
  {
    id: 'cimic-012',
    term: 'Civil-Military Cooperation (CIMIC) Assessment',
    definition:
      'The process of gathering, analyzing, and disseminating information about the civil environment to support military planning and operations.',
    category: 'planning',
    classification: 'UNCLASSIFIED',
    relatedTerms: [
      'Civil Preparation of the Environment',
      'Intelligence',
      'Information Management',
    ],
    examples: [
      'Infrastructure capability assessment',
      'Population needs analysis',
      'Governance structure mapping',
    ],
  },
  {
    id: 'cimic-013',
    term: 'Reconstruction and Stabilization',
    definition:
      'Post-conflict activities designed to restore or create essential services, governance, and economic conditions necessary for long-term stability and development.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Stabilization Operations', 'Post-Conflict Reconstruction', 'Nation Building'],
    examples: [
      'Infrastructure rebuilding projects',
      'Institutional capacity building',
      'Economic revitalization programs',
    ],
  },
  {
    id: 'cimic-014',
    term: 'Internally Displaced Persons (IDP)',
    definition:
      'Persons or groups of persons who have been forced or obliged to flee or leave their homes, but have not crossed an internationally recognized state border.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Refugees', 'Displaced Populations', 'Humanitarian Crisis'],
  },
  {
    id: 'cimic-015',
    term: 'Civil Preparedness',
    definition:
      'The state of readiness of the civil community to respond to and manage the consequences of crises, whether natural, technological, or conflict-related.',
    category: 'planning',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Emergency Management', 'Crisis Response', 'Resilience'],
  },
  {
    id: 'cimic-016',
    term: 'Liaison',
    definition:
      'Contact or intercommunication maintained between elements of military forces or other agencies to ensure mutual understanding and unity of purpose and action.',
    category: 'coordination',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Coordination', 'Communication', 'Information Sharing'],
  },
  {
    id: 'cimic-017',
    term: 'Comprehensive Approach',
    definition:
      'A coordinated application of all relevant instruments of power and influence available to the international community to achieve lasting solutions to security challenges.',
    category: 'doctrine',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Whole of Government', 'Unity of Effort', 'Interagency Coordination'],
  },
  {
    id: 'cimic-018',
    term: 'Information Operations (Info Ops)',
    definition:
      'Military operations conducted to influence the perceptions and behaviors of selected target audiences through the coordinated use of information-related capabilities.',
    category: 'operations',
    classification: 'RESTRICTED',
    relatedTerms: ['Strategic Communications', 'PSYOPS', 'Public Affairs'],
  },
  {
    id: 'cimic-019',
    term: 'Force Protection',
    definition:
      'Security measures taken to protect military personnel, civilian personnel, family members, facilities, and equipment from threats and hazards.',
    category: 'operations',
    classification: 'RESTRICTED',
    relatedTerms: ['Security', 'Threat Assessment', 'Risk Mitigation'],
  },
  {
    id: 'cimic-020',
    term: 'Cultural Awareness',
    definition:
      'The understanding of the cultural factors, norms, values, and beliefs that influence behavior in a particular society or group.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Cross-Cultural Competence', 'Regional Expertise', 'Language Skills'],
  },
];
