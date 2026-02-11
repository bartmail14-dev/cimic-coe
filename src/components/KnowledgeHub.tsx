import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Card } from './ui/card';
import { BookOpen, ArrowRight, Database } from 'lucide-react';
import { Button } from './ui/button';
import { resources } from '@/data/resources';

interface KnowledgeHubProps {
  onHandbookClick?: () => void;
}

export function KnowledgeHub({ onHandbookClick }: KnowledgeHubProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // resources imported from @/data/resources

  return (
    <section id="knowledge" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(90, 107, 63, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90, 107, 63, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z' fill='none' stroke='%235a6b3f' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Dots pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(90, 107, 63, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#f7941d]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#5a6b3f]/5 rounded-full blur-3xl" />
      
      {/* Animated floating shapes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-20 w-40 h-40 border-2 border-[#f7941d]/10 rounded-lg rotate-12"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 right-20 w-48 h-48 border-2 border-[#5a6b3f]/10 rounded-lg -rotate-12"
      />

      {/* Tactical corners - light version */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-[#5a6b3f]/20" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-[#5a6b3f]/20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#f7941d]/20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#f7941d]/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top tactical badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/60 backdrop-blur-sm border-2 border-[#5a6b3f]/30 rounded-xl px-8 py-4 shadow-lg inline-flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
              ))}
            </div>
            <span className="text-sm font-mono text-gray-600 uppercase tracking-wider">Knowledge Center</span>
            <div className="w-px h-6 bg-[#5a6b3f]/30" />
            <span className="text-sm font-mono text-[#f7941d]">CIMIC Resources</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 h-1 bg-[#5a6b3f] rotate-45"
                />
              ))}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-wider font-mono text-gray-900">
              Do You <span className="text-[#f7941d]">Already</span> Know...
            </h2>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 h-1 bg-[#5a6b3f] rotate-45"
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#5a6b3f]" />
            <BookOpen className="w-5 h-5 text-[#5a6b3f]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#5a6b3f]" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our comprehensive collection of resources, training materials, and expert publications
          </p>
        </motion.div>

        {/* Resource cards - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {resources.map((resource, index) => {
            const isHovered = hoveredCard === resource.id;
            
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card 
                  className={`
                    relative overflow-hidden h-full p-8 border-2 transition-all duration-500
                    bg-white hover:shadow-2xl
                    ${isHovered ? 'border-[#f7941d] scale-[1.02]' : 'border-gray-200'}
                  `}
                >
                  {/* Gradient background overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
                  />

                  {/* Hexagon pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l17.32 10v20L20 40 2.68 30V10z' fill='none' stroke='%23${resource.color.slice(1)}' stroke-width='1'/%3E%3C/svg%3E")`,
                      backgroundSize: '40px 40px',
                    }}
                  />

                  {/* Top code badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div 
                      className="px-3 py-1 rounded text-xs font-mono border"
                      style={{
                        borderColor: resource.color,
                        color: resource.color,
                        backgroundColor: 'rgba(255,255,255,0.8)'
                      }}
                    >
                      {resource.code}
                    </div>
                  </div>

                  {/* Corner accents */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 transition-all"
                    style={{ borderColor: resource.color }}
                  />
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 transition-all"
                    style={{ borderColor: resource.color }}
                  />

                  {/* Animated scan line */}
                  <motion.div
                    animate={{ 
                      x: isHovered ? ['-100%', '200%'] : '-100%'
                    }}
                    transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-32 pointer-events-none"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon section */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        animate={{ 
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <div 
                          className="w-20 h-20 rounded-xl border-2 flex items-center justify-center relative"
                          style={{
                            borderColor: resource.color,
                            backgroundColor: isHovered ? `${resource.color}15` : `${resource.color}08`
                          }}
                        >
                          <resource.icon 
                            className="w-10 h-10" 
                            style={{ color: resource.color }}
                          />
                          
                          {/* Pulsing ring */}
                          {isHovered && (
                            <motion.div
                              animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0, 0.5]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 border-2 rounded-xl"
                              style={{ borderColor: resource.color }}
                            />
                          )}
                        </div>
                      </motion.div>

                      {/* Accent icon */}
                      <resource.accentIcon 
                        className="w-6 h-6 text-gray-400" 
                      />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl font-mono mb-3 transition-colors"
                      style={{ color: isHovered ? resource.color : '#111827' }}
                    >
                      {resource.title}
                    </h3>

                    {/* Divider */}
                    <div 
                      className="h-px w-full mb-4 transition-all"
                      style={{ 
                        background: isHovered 
                          ? `linear-gradient(to right, ${resource.color}, transparent)`
                          : 'linear-gradient(to right, #e5e7eb, transparent)'
                      }}
                    />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    {/* Bottom section */}
                    <div className="flex items-center justify-between">
                      {/* Stat */}
                      <div 
                        className="px-4 py-2 rounded-lg border"
                        style={{
                          borderColor: isHovered ? resource.color : '#e5e7eb',
                          backgroundColor: isHovered ? `${resource.color}10` : '#f9fafb'
                        }}
                      >
                        <div className="text-xs font-mono text-gray-500 mb-1">Available</div>
                        <div 
                          className="font-mono transition-colors"
                          style={{ color: isHovered ? resource.color : '#111827' }}
                        >
                          {resource.stat}
                        </div>
                      </div>

                      {/* Read more button */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          if (resource.id === 2 && onHandbookClick) {
                            onHandbookClick();
                          }
                        }}
                        className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider transition-colors"
                        style={{ color: resource.color }}
                      >
                        {resource.id === 2 ? 'Open Handbook' : 'Read More'}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <motion.div
                    animate={{ 
                      scaleX: isHovered ? 1 : 0,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                    style={{ backgroundColor: resource.color }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm border-2 border-[#5a6b3f]/30 rounded-xl p-8 inline-block relative overflow-hidden shadow-lg">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#f7941d]/50" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f7941d]/50" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#5a6b3f]/50" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#5a6b3f]/50" />
            
            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="flex items-center gap-2 text-gray-600 text-sm font-mono">
                <Database className="w-4 h-4 text-[#5a6b3f]" />
                <span>FULL RESOURCE LIBRARY</span>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#5a6b3f] to-[#6a7b4f] hover:from-[#4a5b2f] hover:to-[#5a6b3f] text-white border-0 font-mono uppercase tracking-wider shadow-lg"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Explore All Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="text-xs font-mono text-gray-500">
                SEMINARS • HANDBOOKS • PUBLICATIONS • COURSES
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

