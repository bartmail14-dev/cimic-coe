import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Calendar, ArrowRight, Tag, Clock, Radio, Shield, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { newsItems as newsData, newsFilters } from '@/data/news';

export function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Update time every second (set initial on mount to avoid hydration mismatch)
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const newsItems = newsData;
  const filters = newsFilters;

  const filteredNews = activeFilter === 'ALL' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return '#ff4444';
      case 'HIGH': return '#f7941d';
      case 'STANDARD': return '#5a6b3f';
      default: return '#5a6b3f';
    }
  };

  return (
    <section id="news" ref={ref} className="py-24 bg-gradient-to-b from-[#0a0e08] via-[#0f1410] to-[#0a0e08] text-white relative overflow-hidden">
      {/* Animated tactical grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(#5a6b3f 1px, transparent 1px),
              linear-gradient(90deg, #5a6b3f 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} 
        />
      </div>

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23f7941d' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
          className="w-full h-full"
        />
      </div>

      {/* Scanning line effect */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7941d]/5 to-transparent h-32 pointer-events-none"
      />

      {/* Corner tactical frames */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#f7941d]/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#f7941d]/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#5a6b3f]/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#5a6b3f]/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HUD - Intelligence Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#f7941d] rounded-xl p-6 relative overflow-hidden">
            {/* Top stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#f7941d] via-[#5a6b3f] to-[#f7941d]" />
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left: Status */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#00ff00] rounded-full"
                  />
                  <span className="text-[#00ff00] text-xs font-mono uppercase tracking-wider">Intel Active</span>
                </div>
                <div className="w-px h-6 bg-[#5a6b3f]" />
                <div className="text-xs font-mono text-gray-400">
                  CLEARANCE: <span className="text-[#f7941d]">PUBLIC ACCESS</span>
                </div>
              </div>

              {/* Center: Title */}
              <div className="hidden md:flex items-center gap-3">
                <Radio className="w-6 h-6 text-[#f7941d]" />
                <div>
                  <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Intelligence Briefing</div>
                  <div className="text-xl text-white font-mono">Mission Updates</div>
                </div>
              </div>

              {/* Right: Live time */}
              <div className="hidden sm:flex items-center gap-4 text-xs font-mono">
                <div className="text-gray-400">
                  BRIEFING: <span className="text-[#f7941d]">{filteredNews.length} REPORTS</span>
                </div>
                <div className="w-px h-6 bg-[#5a6b3f]" />
                <div className="text-gray-400">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {currentTime ? currentTime.toLocaleTimeString('en-US', { hour12: false }) : '--:--:--'} UTC
                </div>
              </div>
            </div>

            {/* Bottom stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f7941d] via-[#5a6b3f] to-[#f7941d]" />
          </div>
        </motion.div>

        {/* TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 h-1 bg-[#f7941d] rotate-45"
                />
              ))}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-wider font-mono">
              <span className="text-[#f7941d]">Intel</span> Briefing
            </h2>
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 h-1 bg-[#f7941d] rotate-45"
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#f7941d]" />
            <Eye className="w-4 h-4 text-[#f7941d]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#f7941d]" />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            CLASSIFIED UPDATES • OPERATIONAL REPORTS • MISSION INTELLIGENCE
          </p>
        </motion.div>

        {/* FILTER TABS - Tactical Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative px-6 py-3 font-mono text-sm uppercase tracking-wider
                border-2 rounded-lg transition-all duration-300
                ${activeFilter === filter 
                  ? 'bg-[#f7941d] border-[#f7941d] text-white' 
                  : 'bg-black/40 border-[#5a6b3f]/50 text-gray-400 hover:border-[#f7941d] hover:text-[#f7941d]'
                }
              `}
            >
              {/* Corner accents */}
              {activeFilter === filter && (
                <>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white" />
                </>
              )}
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* NEWS CARDS - Military Briefing Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-900 via-[#1a2310] to-gray-900 border-2 border-[#5a6b3f]/50 h-full relative overflow-hidden hover:border-[#f7941d] transition-all duration-300">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f7941d]/30 group-hover:border-[#f7941d] transition-colors" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f7941d]/30 group-hover:border-[#f7941d] transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#f7941d]/30 group-hover:border-[#f7941d] transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f7941d]/30 group-hover:border-[#f7941d] transition-colors" />

                {/* Scanline effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7941d]/10 to-transparent w-32 pointer-events-none"
                />

                {/* Header with classification */}
                <div className="bg-black/60 border-b border-[#5a6b3f]/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 border rounded flex items-center justify-center"
                        style={{ borderColor: item.color }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span className="text-xs font-mono text-gray-400">SITREP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getPriorityColor(item.priority) }}
                      />
                      <span 
                        className="text-xs font-mono"
                        style={{ color: getPriorityColor(item.priority) }}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#f7941d]">{item.id}</span>
                    <span className="text-xs font-mono text-gray-500">{item.classification}</span>
                  </div>
                </div>

                {/* Image section */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  {/* Status badge */}
                  <div className="absolute bottom-3 left-3">
                    <div 
                      className="px-3 py-1 backdrop-blur-sm border rounded text-xs font-mono"
                      style={{ 
                        borderColor: item.color,
                        color: item.color,
                        backgroundColor: 'rgba(0,0,0,0.6)'
                      }}
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Timestamp */}
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                    <div className="w-px h-3 bg-[#5a6b3f]" />
                    <Clock className="w-3 h-3" />
                    <span>{item.timestamp}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-mono mb-3 leading-tight group-hover:text-[#f7941d] transition-colors">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f] mb-3 opacity-30" />

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Action button */}
                  <button className="text-[#f7941d] hover:text-[#ff9900] inline-flex items-center gap-2 group/link text-sm font-mono uppercase tracking-wider">
                    Access Report
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Bottom status bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f7941d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f] rounded-xl p-8 inline-block relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#f7941d]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f7941d]" />
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                <Shield className="w-4 h-4 text-[#5a6b3f]" />
                <span>FULL ARCHIVE ACCESS</span>
              </div>
              <Button 
                size="lg" 
                className="bg-[#f7941d] hover:bg-[#e88510] text-white border-0 font-mono uppercase tracking-wider"
              >
                <Eye className="mr-2 w-5 h-5" />
                View All Intelligence Reports
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="text-xs font-mono text-gray-500">
                CLEARANCE LEVEL: PUBLIC • UPDATES: REAL-TIME
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

