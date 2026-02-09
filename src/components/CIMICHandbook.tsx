import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Book, 
  Shield, 
  ChevronDown, 
  ChevronRight,
  Filter,
  Globe2,
  Users,
  AlertTriangle,
  Briefcase,
  Target,
  Radio,
  FileText,
  Lock,
  Unlock,
  Zap,
  BookOpen
} from 'lucide-react';
import { Input } from './ui/input';

interface HandbookEntry {
  id: string;
  term: string;
  definition: string;
  category: string;
  classification: 'UNCLASSIFIED' | 'RESTRICTED' | 'CONFIDENTIAL';
  relatedTerms?: string[];
  examples?: string[];
}

const categories = [
  { id: 'all', name: 'All Entries', icon: BookOpen, color: '#f7941d' },
  { id: 'operations', name: 'Operations', icon: Target, color: '#5a6b3f' },
  { id: 'coordination', name: 'Coordination', icon: Users, color: '#f7941d' },
  { id: 'doctrine', name: 'Doctrine', icon: Shield, color: '#5a6b3f' },
  { id: 'organizations', name: 'Organizations', icon: Briefcase, color: '#f7941d' },
  { id: 'concepts', name: 'Concepts', icon: Globe2, color: '#5a6b3f' },
  { id: 'planning', name: 'Planning', icon: FileText, color: '#f7941d' },
];

const handbookEntries: HandbookEntry[] = [
  {
    id: 'cimic-001',
    term: 'Civil-Military Cooperation (CIMIC)',
    definition: 'The coordination and cooperation, in support of the mission, between the NATO Commander and civil actors, including national population and local authorities, as well as international, national and non-governmental organizations and agencies.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CMI', 'Civil Affairs', 'Host Nation Support'],
    examples: [
      'Coordinating humanitarian aid delivery with local authorities',
      'Establishing liaison with NGOs in the operational area',
      'Supporting reconstruction efforts in post-conflict zones'
    ]
  },
  {
    id: 'cimic-002',
    term: 'Civil-Military Interaction (CMI)',
    definition: 'All contacts and interactions between military and civilian actors in a given operational environment. CMI is broader than CIMIC and includes both formal and informal interactions.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CIMIC', 'Civil Affairs', 'Population Engagement'],
    examples: [
      'Daily interactions between soldiers and local population',
      'Information sharing at checkpoints',
      'Cultural awareness activities'
    ]
  },
  {
    id: 'cimic-003',
    term: 'Host Nation Support (HNS)',
    definition: 'Civil and military assistance rendered in peace, crisis or war by a Host Nation to Allied forces and organizations which are located on, operating in or in transit through the Host Nation\'s territory.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Host Nation', 'Support Agreement', 'Infrastructure'],
    examples: [
      'Provision of facilities and infrastructure',
      'Transportation and logistics support',
      'Security assistance and protection'
    ]
  },
  {
    id: 'cimic-004',
    term: 'Non-Governmental Organization (NGO)',
    definition: 'A private, self-governing, not-for-profit organization dedicated to alleviating human suffering and/or promoting education, health care, economic development, environmental protection, human rights, and conflict resolution.',
    category: 'organizations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['IO', 'INGO', 'Civil Society'],
    examples: [
      'Red Cross / Red Crescent',
      'Médecins Sans Frontières',
      'Save the Children'
    ]
  },
  {
    id: 'cimic-005',
    term: 'International Organization (IO)',
    definition: 'An organization with international membership, scope, or presence, established by formal political agreement between member states that have the status of international treaties.',
    category: 'organizations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['UN', 'NGO', 'IGO'],
    examples: [
      'United Nations',
      'European Union',
      'Organization for Security and Co-operation in Europe (OSCE)'
    ]
  },
  {
    id: 'cimic-006',
    term: 'Civil Affairs (CA)',
    definition: 'Designated active or reserve component military forces and units organized, trained, and equipped specifically to conduct civil affairs operations and to support civil-military operations.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CIMIC', 'CMO', 'Population Engagement'],
    examples: [
      'Governance and public administration support',
      'Essential services restoration',
      'Rule of law operations'
    ]
  },
  {
    id: 'cimic-007',
    term: 'Key Leader Engagement (KLE)',
    definition: 'The deliberate and planned interaction with influential individuals or groups to build relationships, influence attitudes, and shape behaviors in support of mission objectives.',
    category: 'coordination',
    classification: 'RESTRICTED',
    relatedTerms: ['Population Engagement', 'Stakeholder Analysis', 'Influence Operations'],
    examples: [
      'Meetings with local government officials',
      'Engagement with tribal elders',
      'Coordination with religious leaders'
    ]
  },
  {
    id: 'cimic-008',
    term: 'Quick Impact Project (QIP)',
    definition: 'A project of limited scope and duration, designed to achieve a visible, immediate impact on the target population and demonstrate good will while supporting the overall mission.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CMO', 'Hearts and Minds', 'Community Support'],
    examples: [
      'School renovation',
      'Water well drilling',
      'Medical clinic establishment'
    ]
  },
  {
    id: 'cimic-009',
    term: 'Civil-Military Operations Center (CMOC)',
    definition: 'A facility established to provide a focal point for the coordination of civil-military operations between military forces and civilian organizations.',
    category: 'coordination',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['CIMIC Center', 'Coordination Center', 'Liaison'],
    examples: [
      'Humanitarian assistance coordination center',
      'Disaster relief coordination facility',
      'Reconstruction operations center'
    ]
  },
  {
    id: 'cimic-010',
    term: 'Area of Responsibility (AOR)',
    definition: 'The geographical area associated with a combatant command within which a geographic combatant commander has authority to plan and conduct operations.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Joint Operations Area', 'Area of Operations', 'Theater of Operations'],
  },
  {
    id: 'cimic-011',
    term: 'Humanitarian Assistance',
    definition: 'Programs conducted to relieve or reduce the results of natural or man-made disasters or other endemic conditions such as human pain, disease, hunger, or privation that might present a serious threat to life or that can result in great damage to or loss of property.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Disaster Relief', 'Emergency Response', 'Foreign Humanitarian Assistance'],
    examples: [
      'Earthquake response operations',
      'Flood relief efforts',
      'Medical humanitarian missions'
    ]
  },
  {
    id: 'cimic-012',
    term: 'Civil-Military Cooperation (CIMIC) Assessment',
    definition: 'The process of gathering, analyzing, and disseminating information about the civil environment to support military planning and operations.',
    category: 'planning',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Civil Preparation of the Environment', 'Intelligence', 'Information Management'],
    examples: [
      'Infrastructure capability assessment',
      'Population needs analysis',
      'Governance structure mapping'
    ]
  },
  {
    id: 'cimic-013',
    term: 'Reconstruction and Stabilization',
    definition: 'Post-conflict activities designed to restore or create essential services, governance, and economic conditions necessary for long-term stability and development.',
    category: 'operations',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Stabilization Operations', 'Post-Conflict Reconstruction', 'Nation Building'],
    examples: [
      'Infrastructure rebuilding projects',
      'Institutional capacity building',
      'Economic revitalization programs'
    ]
  },
  {
    id: 'cimic-014',
    term: 'Internally Displaced Persons (IDP)',
    definition: 'Persons or groups of persons who have been forced or obliged to flee or leave their homes, but have not crossed an internationally recognized state border.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Refugees', 'Displaced Populations', 'Humanitarian Crisis'],
  },
  {
    id: 'cimic-015',
    term: 'Civil Preparedness',
    definition: 'The state of readiness of the civil community to respond to and manage the consequences of crises, whether natural, technological, or conflict-related.',
    category: 'planning',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Emergency Management', 'Crisis Response', 'Resilience'],
  },
  {
    id: 'cimic-016',
    term: 'Liaison',
    definition: 'Contact or intercommunication maintained between elements of military forces or other agencies to ensure mutual understanding and unity of purpose and action.',
    category: 'coordination',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Coordination', 'Communication', 'Information Sharing'],
  },
  {
    id: 'cimic-017',
    term: 'Comprehensive Approach',
    definition: 'A coordinated application of all relevant instruments of power and influence available to the international community to achieve lasting solutions to security challenges.',
    category: 'doctrine',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Whole of Government', 'Unity of Effort', 'Interagency Coordination'],
  },
  {
    id: 'cimic-018',
    term: 'Information Operations (Info Ops)',
    definition: 'Military operations conducted to influence the perceptions and behaviors of selected target audiences through the coordinated use of information-related capabilities.',
    category: 'operations',
    classification: 'RESTRICTED',
    relatedTerms: ['Strategic Communications', 'PSYOPS', 'Public Affairs'],
  },
  {
    id: 'cimic-019',
    term: 'Force Protection',
    definition: 'Security measures taken to protect military personnel, civilian personnel, family members, facilities, and equipment from threats and hazards.',
    category: 'operations',
    classification: 'RESTRICTED',
    relatedTerms: ['Security', 'Threat Assessment', 'Risk Mitigation'],
  },
  {
    id: 'cimic-020',
    term: 'Cultural Awareness',
    definition: 'The understanding of the cultural factors, norms, values, and beliefs that influence behavior in a particular society or group.',
    category: 'concepts',
    classification: 'UNCLASSIFIED',
    relatedTerms: ['Cross-Cultural Competence', 'Regional Expertise', 'Language Skills'],
  },
];

function HandbookCard({ entry, isExpanded, onToggle }: { 
  entry: HandbookEntry; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  const category = categories.find(c => c.id === entry.category);
  const CategoryIcon = category?.icon || BookOpen;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative"
    >
      {/* Main Card */}
      <div 
        className="bg-gradient-to-br from-gray-900 via-[#1a2a1a] to-gray-900 border-2 border-[#5a6b3f] hover:border-[#f7941d] rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
        onClick={onToggle}
        style={{
          clipPath: isExpanded ? 'none' : 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
        }}
      >
        {/* Scanline effect */}
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7941d]/5 to-transparent h-32 pointer-events-none"
        />

        {/* Header */}
        <div className="p-4 relative z-10">
          <div className="flex items-start justify-between gap-4 mb-3">
            {/* Category Badge */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded border-2 flex items-center justify-center"
                style={{ borderColor: category?.color, backgroundColor: `${category?.color}15` }}
              >
                <CategoryIcon className="w-4 h-4" style={{ color: category?.color }} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{entry.id}</div>
                <div className="text-xs font-mono" style={{ color: category?.color }}>{category?.name}</div>
              </div>
            </div>

            {/* Classification & Expand Icon */}
            <div className="flex items-center gap-3">
              <div 
                className={`px-2 py-1 border rounded text-[10px] font-mono uppercase tracking-wider ${
                  entry.classification === 'UNCLASSIFIED' 
                    ? 'border-green-500 text-green-400 bg-green-500/10'
                    : entry.classification === 'RESTRICTED'
                    ? 'border-yellow-500 text-yellow-400 bg-yellow-500/10'
                    : 'border-red-500 text-red-400 bg-red-500/10'
                }`}
              >
                <div className="flex items-center gap-1">
                  {entry.classification === 'UNCLASSIFIED' ? (
                    <Unlock className="w-3 h-3" />
                  ) : (
                    <Lock className="w-3 h-3" />
                  )}
                  {entry.classification}
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-[#f7941d]" />
              </motion.div>
            </div>
          </div>

          {/* Term */}
          <h3 className="text-xl font-bold text-white mb-2 pr-8 group-hover:text-[#f7941d] transition-colors">
            {entry.term}
          </h3>

          {/* Definition Preview */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {isExpanded ? entry.definition : `${entry.definition.slice(0, 120)}...`}
          </p>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t-2 border-[#5a6b3f]/30 overflow-hidden"
            >
              <div className="p-4 space-y-4">
                {/* Examples */}
                {entry.examples && entry.examples.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[#f7941d]" />
                      <span className="text-xs font-mono text-[#f7941d] uppercase tracking-wider">Examples</span>
                    </div>
                    <ul className="space-y-2">
                      {entry.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <ChevronRight className="w-4 h-4 text-[#5a6b3f] flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Terms */}
                {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Radio className="w-4 h-4 text-[#5a6b3f]" />
                      <span className="text-xs font-mono text-[#5a6b3f] uppercase tracking-wider">Related Terms</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {entry.relatedTerms.map((term, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 bg-[#5a6b3f]/20 border border-[#5a6b3f] rounded-full text-xs text-[#5a6b3f] font-mono hover:bg-[#5a6b3f]/30 transition-colors cursor-pointer"
                        >
                          {term}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Hint */}
                <div className="pt-2 border-t border-[#5a6b3f]/20">
                  <div className="text-xs font-mono text-gray-500 text-center flex items-center justify-center gap-2">
                    <Zap className="w-3 h-3" />
                    <span>CLICK TO COLLAPSE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f7941d] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#5a6b3f] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f] rounded-b"
        style={{ originX: 0 }}
      />
    </motion.div>
  );
}

export function CIMICHandbook() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);

  const filteredEntries = useMemo(() => {
    return handbookEntries.filter(entry => {
      const matchesSearch = 
        entry.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || entry.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0e08] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#5a6b3f 1px, transparent 1px),
            linear-gradient(90deg, #5a6b3f 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23f7941d' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-black/60 backdrop-blur-sm border-2 border-[#f7941d] rounded-xl p-8 relative overflow-hidden">
            {/* Corner frames */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#f7941d]" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#f7941d]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#5a6b3f]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#5a6b3f]" />

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Book className="w-12 h-12 text-[#f7941d]" />
                </motion.div>
                <div>
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <div className="h-px w-8 bg-[#f7941d]" />
                    <span className="text-xs font-mono text-[#f7941d] uppercase tracking-widest">Database Access</span>
                    <div className="h-px w-8 bg-[#f7941d]" />
                  </div>
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase tracking-wider">
                    CIMIC Handbook
                  </h1>
                </div>
              </div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Interactive reference guide for Civil-Military Cooperation terminology, concepts, and doctrine. 
                <span className="text-[#5a6b3f]"> Classification level: UNCLASSIFIED</span>
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className="text-2xl text-[#f7941d] font-mono">{handbookEntries.length}</div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Total Entries</div>
                </div>
                <div className="w-px h-10 bg-[#5a6b3f]" />
                <div className="text-center">
                  <div className="text-2xl text-[#5a6b3f] font-mono">{categories.length - 1}</div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Categories</div>
                </div>
                <div className="w-px h-10 bg-[#5a6b3f]" />
                <div className="text-center">
                  <div className="text-2xl text-green-400 font-mono">{filteredEntries.length}</div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Results</div>
                </div>
              </div>
            </div>

            {/* Pulsing indicator */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f] rounded-xl p-6 relative overflow-hidden">
            {/* Scanline */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5a6b3f]/10 to-transparent w-32"
            />

            <div className="relative z-10 space-y-6">
              {/* Search Bar */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-4 h-4 text-[#f7941d]" />
                  <span className="text-xs font-mono text-[#f7941d] uppercase tracking-wider">Search Database</span>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter term, definition, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-black/60 border-[#5a6b3f] text-white placeholder:text-gray-500 font-mono pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4 text-[#5a6b3f]" />
                  <span className="text-xs font-mono text-[#5a6b3f] uppercase tracking-wider">Filter by Category</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    return (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all font-mono text-sm ${
                          isActive
                            ? 'border-[#f7941d] bg-[#f7941d]/20 text-[#f7941d]'
                            : 'border-[#5a6b3f] bg-black/40 text-gray-400 hover:border-[#5a6b3f] hover:bg-[#5a6b3f]/10'
                        }`}
                      >
                        <Icon className="w-4 h-4" style={{ color: isActive ? '#f7941d' : category.color }} />
                        <span>{category.name}</span>
                        {category.id !== 'all' && (
                          <span className="text-xs opacity-60">
                            ({handbookEntries.filter(e => e.category === category.id).length})
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count & Clear */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-gray-400">
              Displaying <span className="text-green-400 font-semibold">{filteredEntries.length}</span> of {handbookEntries.length} entries
            </span>
          </div>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#f7941d]/20 border border-[#f7941d] rounded text-sm font-mono text-[#f7941d] hover:bg-[#f7941d]/30 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Handbook Entries Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry) => (
              <HandbookCard
                key={entry.id}
                entry={entry}
                isExpanded={expandedEntry === entry.id}
                onToggle={() => setExpandedEntry(expandedEntry === entry.id ? null : entry.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f]/50 rounded-xl p-12 inline-block">
              <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2 font-mono">No Entries Found</h3>
              <p className="text-gray-400 text-sm font-mono">
                Try adjusting your search query or category filter
              </p>
            </div>
          </motion.div>
        )}

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f]/30 rounded-xl p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#5a6b3f]" />
              <span>CIMIC COE Knowledge Database v2.1</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Secure Access Granted</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#f7941d]" />
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

