import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Compass, Eye, Shield, Target, Radio, Zap, Globe, Award, ChevronRight } from 'lucide-react';
import { coreValues } from '@/data/mission';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeValue, setActiveValue] = useState(0);
  const [missionCode, setMissionCode] = useState('ALPHA-001');
  const [timestamp, setTimestamp] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 100]);

  // Auto-cycle through values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Update timestamp
  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random mission codes
  useEffect(() => {
    const codes = ['ALPHA-001', 'BRAVO-247', 'CHARLIE-513', 'DELTA-889', 'ECHO-142'];
    const interval = setInterval(() => {
      setMissionCode(codes[Math.floor(Math.random() * codes.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const values = coreValues;

  return (
    <section id="mission" ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#5a6b3f]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f7941d]/5 rounded-full blur-3xl" />
      
      {/* Animated floating shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-20 w-32 h-32 border-2 border-[#5a6b3f]/10 rounded-lg rotate-12"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 right-20 w-40 h-40 border-2 border-[#f7941d]/10 rounded-lg -rotate-12"
      />

      {/* Tactical corners - light version */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-[#5a6b3f]/20" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-[#5a6b3f]/20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#f7941d]/20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#f7941d]/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HUD - Mission Control Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/60 backdrop-blur-sm border-2 border-[#5a6b3f]/30 rounded-xl p-6 relative overflow-hidden shadow-lg">
            {/* Tactical stripes */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left: Classification */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#f7941d] rounded-full"
                  />
                  <span className="text-[#f7941d] text-xs font-mono uppercase tracking-wider">Mission Active</span>
                </div>
                <div className="w-px h-6 bg-[#5a6b3f]/30" />
                <div className="text-xs font-mono text-gray-600">
                  STATUS: <span className="text-[#5a6b3f]">OPERATIONAL</span>
                </div>
              </div>

              {/* Center: Title */}
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#f7941d]" />
                <div>
                  <div className="text-xs text-gray-600 font-mono uppercase tracking-wider">Our Purpose</div>
                  <div className="text-xl text-gray-900 font-mono">Mission Command</div>
                </div>
              </div>

              {/* Right: Live data */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="text-gray-600">
                  CODE: <span className="text-[#f7941d]">{missionCode}</span>
                </div>
                <div className="w-px h-6 bg-[#5a6b3f]/30" />
                <div className="text-gray-600">
                  {timestamp.toLocaleTimeString('en-US', { hour12: false })} UTC
                </div>
              </div>
            </div>

            {/* Bottom tactical stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
          </div>
        </motion.div>

        {/* MISSION BRIEFING TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
              ))}
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-wider font-mono text-gray-900">Mission & Vision</h2>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#f7941d]" />
            <Shield className="w-4 h-4 text-[#f7941d]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#f7941d]" />
          </div>
        </motion.div>

        {/* MISSION & VISION - Tactical Briefing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group"
          >
            <div className="relative h-full">
              {/* Animated border glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(247, 148, 29, 0)',
                    '0 0 40px rgba(247, 148, 29, 0.3)',
                    '0 0 0px rgba(247, 148, 29, 0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
              />
              
              <Card className="bg-white border-2 border-[#f7941d] p-8 h-full relative overflow-hidden shadow-xl">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#f7941d]" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f7941d]" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#f7941d]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#f7941d]" />

                {/* Scanline */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7941d]/5 to-transparent w-32"
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#f7941d]/10 border-2 border-[#f7941d] rounded-lg flex items-center justify-center relative">
                      <Compass className="w-8 h-8 text-[#f7941d]" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 border-2 border-[#f7941d] rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-[#f7941d] font-mono uppercase tracking-wider mb-1">Primary Objective</div>
                      <h3 className="text-3xl text-gray-900 font-mono">Our Mission</h3>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#f7941d]/10 border border-[#f7941d] rounded text-xs font-mono text-[#f7941d]">
                    CRITICAL
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="bg-gray-50/80 border border-[#f7941d]/20 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      To support <span className="text-gray-900 font-semibold">NATO and partner nations</span> by providing expertise, education, and training in <span className="text-[#f7941d] font-semibold">civil-military cooperation</span>, enhancing their ability to operate effectively in complex environments through professional development and innovative solutions.
                    </p>
                  </div>

                  {/* Mission stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-[#f7941d]/10 border border-[#f7941d]/30 rounded">
                      <div className="text-2xl font-mono text-[#f7941d]">24+</div>
                      <div className="text-xs text-gray-600 font-mono">Years Active</div>
                    </div>
                    <div className="text-center p-3 bg-[#f7941d]/10 border border-[#f7941d]/30 rounded">
                      <div className="text-2xl font-mono text-[#f7941d]">2500+</div>
                      <div className="text-xs text-gray-600 font-mono">Trained</div>
                    </div>
                    <div className="text-center p-3 bg-[#f7941d]/10 border border-[#f7941d]/30 rounded">
                      <div className="text-2xl font-mono text-[#f7941d]">50+</div>
                      <div className="text-xs text-gray-600 font-mono">Missions</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group"
          >
            <div className="relative h-full">
              {/* Animated border glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(90, 107, 63, 0)',
                    '0 0 40px rgba(90, 107, 63, 0.3)',
                    '0 0 0px rgba(90, 107, 63, 0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute inset-0 rounded-2xl"
              />
              
              <Card className="bg-white border-2 border-[#5a6b3f] p-8 h-full relative overflow-hidden shadow-xl">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#5a6b3f]" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#5a6b3f]" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#5a6b3f]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#5a6b3f]" />

                {/* Scanline */}
                <motion.div
                  animate={{ x: ['200%', '-100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5a6b3f]/5 to-transparent w-32"
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#5a6b3f]/10 border-2 border-[#5a6b3f] rounded-lg flex items-center justify-center relative">
                      <Eye className="w-8 h-8 text-[#5a6b3f]" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute inset-0 border-2 border-[#5a6b3f] rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-[#5a6b3f] font-mono uppercase tracking-wider mb-1">Strategic Goal</div>
                      <h3 className="text-3xl text-gray-900 font-mono">Our Vision</h3>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#5a6b3f]/10 border border-[#5a6b3f] rounded text-xs font-mono text-[#5a6b3f]">
                    PRIORITY
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="bg-gray-50/80 border border-[#5a6b3f]/20 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      To be the <span className="text-gray-900 font-semibold">leading international centre of excellence</span> for civil-military cooperation, recognized for <span className="text-[#5a6b3f] font-semibold">innovative approaches</span>, operational relevance, and exceptional contribution to peace and security operations worldwide.
                    </p>
                  </div>

                  {/* Vision highlights */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-[#5a6b3f]/10 border border-[#5a6b3f]/30 rounded">
                      <Globe className="w-6 h-6 text-[#5a6b3f] mx-auto mb-1" />
                      <div className="text-xs text-gray-600 font-mono">Global Reach</div>
                    </div>
                    <div className="text-center p-3 bg-[#5a6b3f]/10 border border-[#5a6b3f]/30 rounded">
                      <Zap className="w-6 h-6 text-[#5a6b3f] mx-auto mb-1" />
                      <div className="text-xs text-gray-600 font-mono">Innovation</div>
                    </div>
                    <div className="text-center p-3 bg-[#5a6b3f]/10 border border-[#5a6b3f]/30 rounded">
                      <Award className="w-6 h-6 text-[#5a6b3f] mx-auto mb-1" />
                      <div className="text-xs text-gray-600 font-mono">Excellence</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES - Tactical Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-[#5a6b3f]" />
              <div className="px-4 py-2 bg-white border border-[#5a6b3f] rounded shadow-sm">
                <span className="text-xs text-[#5a6b3f] font-mono uppercase tracking-wider">Core Values</span>
              </div>
              <div className="h-px w-16 bg-[#5a6b3f]" />
            </div>
            <h3 className="text-3xl font-mono uppercase tracking-wider mb-2 text-gray-900">Operational Principles</h3>
            <p className="text-gray-600 font-mono text-sm">The foundation of our mission excellence</p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const isActive = activeValue === index;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  onHoverStart={() => setActiveValue(index)}
                  className="group cursor-pointer"
                >
                  <motion.div
                    animate={isActive ? {
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 0px rgba(247, 148, 29, 0)',
                        `0 0 30px ${value.color}40`,
                        '0 0 0px rgba(247, 148, 29, 0)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                  >
                    <Card 
                      className="bg-white border-2 p-6 h-full relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{
                        borderColor: isActive ? value.color : '#e5e7eb',
                      }}
                    >
                      {/* Hex pattern */}
                      <div 
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l17.32 10v20L20 40 2.68 30V10z' fill='none' stroke='%23${value.color.slice(1)}' stroke-width='1'/%3E%3C/svg%3E")`,
                          backgroundSize: '40px 40px',
                        }}
                      />

                      {/* Corner accent */}
                      <div 
                        className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-opacity"
                        style={{ 
                          borderColor: value.color,
                          opacity: isActive ? 1 : 0.3 
                        }}
                      />

                      {/* Header */}
                      <div className="relative z-10 mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div 
                            className="w-12 h-12 border-2 rounded-lg flex items-center justify-center transition-all"
                            style={{
                              borderColor: value.color,
                              backgroundColor: isActive ? `${value.color}20` : `${value.color}10`,
                            }}
                          >
                            <value.icon 
                              className="w-6 h-6 transition-colors" 
                              style={{ color: value.color }}
                            />
                          </div>
                          <div 
                            className="px-2 py-1 border rounded text-xs font-mono"
                            style={{
                              borderColor: value.color,
                              color: value.color,
                              backgroundColor: `${value.color}10`,
                            }}
                          >
                            {value.code}
                          </div>
                        </div>
                        <h4 className="text-gray-900 text-xl font-mono mb-1">{value.title}</h4>
                        <div 
                          className="text-xs font-mono"
                          style={{ color: value.color }}
                        >
                          {value.stat}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="relative z-10">
                        <div className="h-px w-full mb-3" style={{ backgroundColor: `${value.color}30` }} />
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Active indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-0 top-1/2 -translate-y-1/2"
                          >
                            <div className="flex items-center">
                              <div className="w-1 h-12 rounded-r" style={{ backgroundColor: value.color }} />
                              <ChevronRight className="w-4 h-4 -ml-1" style={{ color: value.color }} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bottom accent */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-1"
                        style={{
                          background: `linear-gradient(90deg, ${value.color}, transparent)`,
                        }}
                      />
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM HUD - Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm border-2 border-[#5a6b3f]/30 rounded-xl p-4 relative overflow-hidden shadow-lg">
            {/* Bottom tactical stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-600">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#5a6b3f]" />
                <span>CIMIC DOCTRINE DEVELOPMENT</span>
              </div>
              <div className="w-px h-4 bg-[#5a6b3f]/30" />
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#f7941d]" />
                <span>NATO PARTNERSHIP EXCELLENCE</span>
              </div>
              <div className="w-px h-4 bg-[#5a6b3f]/30" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#5a6b3f]" />
                <span>OPERATIONAL SINCE 2001</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

