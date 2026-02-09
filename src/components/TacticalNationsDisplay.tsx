import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Shield, Users, Calendar, ChevronRight, Target, TrendingUp, Award, Radio } from 'lucide-react';
import { nations, type Nation } from '@/data/nations';

function TacticalNationCard({ nation, isActive, onHover }: { nation: Nation; isActive: boolean; onHover: () => void }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onHoverStart={onHover}
      onClick={() => setIsFlipped(!isFlipped)}
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="relative group cursor-pointer h-[280px]"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isActive && !isFlipped ? [1, 1.05, 1] : 1,
          boxShadow: isActive && !isFlipped ? [
            '0 0 0px rgba(247, 148, 29, 0)',
            '0 0 30px rgba(247, 148, 29, 0.6)',
            '0 0 0px rgba(247, 148, 29, 0)',
          ] : '0 0 0px rgba(0, 0, 0, 0)',
        }}
        transition={{ 
          rotateY: { duration: 0.6 },
          scale: { duration: 2, repeat: isActive && !isFlipped ? Infinity : 0 },
          boxShadow: { duration: 2, repeat: isActive && !isFlipped ? Infinity : 0 },
        }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT SIDE */}
        <div 
          className="absolute inset-0 bg-white border-2 border-gray-200 hover:border-[#f7941d] transition-all duration-300"
          style={{
            clipPath: 'polygon(10% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%, 0% 30%)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Hexagonal background pattern */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23${nation.color.slice(1)}' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className="p-6 relative h-full flex flex-col">
            {/* Top designation */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: nation.color }}
                />
                <span className="text-xs font-mono text-gray-500 tracking-wider">{nation.code}</span>
              </div>
              <Shield className="w-4 h-4 text-gray-400 group-hover:text-[#f7941d] transition-colors" />
            </div>

            {/* Flag - Large and central */}
            <div className="text-center mb-4 flex-1 flex flex-col items-center justify-center">
              <motion.div
                animate={isActive && !isFlipped ? { rotateY: [0, 360] } : {}}
                transition={{ duration: 2, ease: 'linear' }}
                className="mb-2 inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-20 h-20 mx-auto">
                  <nation.FlagComponent className="w-full h-full" />
                </div>
              </motion.div>
              <h4 className="text-gray-900 group-hover:text-[#5a6b3f] transition-colors">{nation.name}</h4>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-xs border-t border-gray-200 pt-3">
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  <span>Joined</span>
                </div>
                <span className="font-mono">{nation.joined}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  <span>Personnel</span>
                </div>
                <span className="font-mono">{nation.personnel}</span>
              </div>
            </div>

            {/* Click hint */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-xs font-mono text-[#f7941d] flex items-center gap-1">
                <Target className="w-3 h-3" />
                <span>CLICK</span>
              </div>
            </div>

            {/* Bottom accent */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#f7941d] to-[#5a6b3f]"
            />
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f7941d] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#5a6b3f] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* BACK SIDE - MILITARY INTEL */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a2a1a] to-gray-900 border-2 border-[#f7941d] transition-all duration-300"
          style={{
            clipPath: 'polygon(10% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%, 0% 30%)',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Scanline effect */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7941d]/10 to-transparent h-24"
            style={{ pointerEvents: 'none' }}
          />

          <div className="p-4 relative h-full flex flex-col text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f7941d]/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#f7941d] rounded-full animate-pulse" />
                <span className="text-xs font-mono text-[#f7941d] tracking-wider">CIMIC INTEL</span>
              </div>
              <Shield className="w-4 h-4 text-[#f7941d]" />
            </div>

            {/* Classification badge */}
            <div className="flex items-center justify-center mb-3">
              <div className="px-3 py-1 bg-[#f7941d]/20 border border-[#f7941d] rounded text-xs font-mono tracking-wider">
                {nation.code} - {nation.cimic.natoContribution.toUpperCase()}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-xs flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Users className="w-3 h-3 flex-shrink-0" />
                  <span>Personnel</span>
                </div>
                <span className="font-mono text-white text-right">{nation.cimic.cimicPersonnel}</span>
              </div>
              
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <TrendingUp className="w-3 h-3 flex-shrink-0" />
                  <span>Budget</span>
                </div>
                <span className="font-mono text-white text-right">{nation.cimic.cimicBudget}</span>
              </div>

              <div className="border-t border-[#f7941d]/30 pt-2 mt-2">
                <div className="flex items-start gap-1.5 mb-2">
                  <Award className="w-3 h-3 text-[#f7941d] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">CIMIC Focus Areas</div>
                    <div className="flex flex-wrap gap-1">
                      {nation.cimic.specialization.map((spec, i) => (
                        <span 
                          key={i}
                          className="px-1.5 py-0.5 bg-[#5a6b3f]/30 border border-[#5a6b3f] rounded text-[10px] font-mono text-[#5a6b3f] whitespace-nowrap"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#f7941d]/30 pt-2">
                <div className="flex items-start gap-1.5">
                  <Radio className="w-3 h-3 text-[#f7941d] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">Key Capabilities</div>
                    <div className="text-[10px] leading-tight text-gray-300">
                      {nation.cimic.keyCapabilities}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Click hint */}
            <div className="mt-2 pt-2 border-t border-[#f7941d]/30">
              <div className="text-xs font-mono text-[#f7941d] text-center flex items-center justify-center gap-1">
                <Target className="w-3 h-3" />
                <span>CLICK TO FLIP</span>
              </div>
            </div>
          </div>

          {/* Corner frames */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f7941d]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#f7941d]" />
        </div>
      </motion.div>

      {/* Active indicator (outside the flip container) */}
      <AnimatePresence>
        {isActive && !isFlipped && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-1/2 -left-3 -translate-y-1/2 z-10"
          >
            <div className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-[#f7941d]" />
              <div className="w-2 h-2 bg-[#f7941d] rounded-full animate-ping" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TacticalRadarMap({ activeNation }: { activeNation: string | null }) {
  return (
    <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-gray-900 via-[#1a2a1a] to-gray-900 rounded-2xl overflow-hidden border-4 border-[#5a6b3f]">
      {/* Radar grid */}
      <div className="absolute inset-0">
        {/* Concentric circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5a6b3f]"
            style={{
              width: `${(i + 1) * 20}%`,
              height: `${(i + 1) * 20}%`,
            }}
          />
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: `
                linear-gradient(#5a6b3f 1px, transparent 1px),
                linear-gradient(90deg, #5a6b3f 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
            className="w-full h-full"
          />
        </div>

        {/* Scanning line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 w-1/2 h-px origin-left"
          style={{
            background: 'linear-gradient(90deg, rgba(247, 148, 29, 0.8) 0%, transparent 100%)',
            boxShadow: '0 0 20px rgba(247, 148, 29, 0.5)',
          }}
        />

        {/* Center hub - CIMIC COE HQ */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full border-4 border-[#f7941d] bg-[#f7941d]/20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#f7941d] rounded-full">
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-full h-full bg-[#f7941d] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nation markers */}
        {nations.map((nation, index) => {
          const isActive = activeNation === nation.code;
          return (
            <motion.div
              key={nation.code}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="absolute"
              style={{
                left: `${nation.position.x}%`,
                top: `${nation.position.y}%`,
              }}
            >
              <motion.div
                animate={isActive ? {
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    '0 0 0px rgba(247, 148, 29, 0)',
                    '0 0 40px rgba(247, 148, 29, 0.8)',
                    '0 0 0px rgba(247, 148, 29, 0)',
                  ]
                } : {}}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                className="relative group cursor-pointer"
              >
                {/* Pulsing outer ring */}
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                  style={{ borderColor: isActive ? '#f7941d' : '#5a6b3f' }}
                />
                
                {/* Main marker */}
                <div 
                  className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 flex items-center justify-center relative z-10 transition-all p-1 bg-white"
                  style={{
                    borderColor: isActive ? '#f7941d' : '#5a6b3f',
                    boxShadow: isActive ? '0 0 20px rgba(247, 148, 29, 0.8)' : '0 0 10px rgba(90, 107, 63, 0.5)',
                  }}
                >
                  <nation.FlagComponent className="w-full h-full" />
                </div>

                {/* Connection line to center */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <svg
                    className="absolute"
                    style={{
                      width: `${Math.abs(50 - nation.position.x)}%`,
                      height: `${Math.abs(35 - nation.position.y)}%`,
                      left: nation.position.x > 50 ? '-100%' : '0',
                      top: nation.position.y > 35 ? '-100%' : '0',
                    }}
                  >
                    <motion.line
                      x1={nation.position.x > 50 ? "100%" : "0%"}
                      y1={nation.position.y > 35 ? "100%" : "0%"}
                      x2={nation.position.x > 50 ? "0%" : "100%"}
                      y2={nation.position.y > 35 ? "0%" : "100%"}
                      stroke={isActive ? "#f7941d" : "#5a6b3f"}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.3"
                    />
                  </svg>
                </motion.div>

                {/* Label */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#f7941d] text-white px-3 py-1 rounded text-xs font-mono"
                    >
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f7941d] rotate-45" />
                      {nation.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Top HUD elements */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20">
        <div className="bg-black/60 backdrop-blur-sm border border-[#5a6b3f] px-4 py-2 rounded font-mono text-xs text-[#5a6b3f]">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-[#f7941d] rounded-full"
            />
            <span>TACTICAL MAP - ACTIVE</span>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm border border-[#5a6b3f] px-4 py-2 rounded font-mono text-xs text-[#5a6b3f]">
          <div className="flex items-center gap-4">
            <span>NATIONS: {nations.length}</span>
            <div className="w-px h-4 bg-[#5a6b3f]" />
            <span>STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-black/60 backdrop-blur-sm border border-[#5a6b3f] px-4 py-2 rounded">
          <div className="flex items-center justify-between font-mono text-xs text-[#5a6b3f]">
            <span>GRID: EUROPE</span>
            <span>SCALE: 1:5000000</span>
            <span>COORD: 52.0907°N, 5.1214°E</span>
          </div>
        </div>
      </div>

      {/* Corner frames */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#f7941d]" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#f7941d]" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#f7941d]" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#f7941d]" />
    </div>
  );
}

export function TacticalNationsDisplay() {
  const [activeNation, setActiveNation] = useState<string | null>(null);

  useEffect(() => {
    // Auto-cycle through nations
    const interval = setInterval(() => {
      setActiveNation(current => {
        if (!current) return nations[0].code;
        const currentIndex = nations.findIndex(n => n.code === current);
        const nextIndex = (currentIndex + 1) % nations.length;
        return nations[nextIndex].code;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Flag Banner at Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 relative overflow-hidden">
          {/* Tactical stripes */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
          
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#f7941d]" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#f7941d]" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#5a6b3f]" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#5a6b3f]" />

          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5a6b3f]/10 border border-[#5a6b3f]/30 rounded mb-2">
              <Shield className="w-3 h-3 text-[#5a6b3f]" />
              <span className="text-xs text-[#5a6b3f] font-mono uppercase tracking-wider">Allied Nations</span>
            </div>
            <p className="text-sm text-gray-600 font-mono">8 NATO Contributing Nations</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {nations.map((nation, index) => (
              <motion.div
                key={nation.code}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                onHoverStart={() => setActiveNation(nation.code)}
                className="group cursor-pointer relative"
              >
                <motion.div
                  animate={activeNation === nation.code ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Glow effect when active */}
                  {activeNation === nation.code && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-3 bg-[#f7941d]/20 blur-xl rounded-full"
                    />
                  )}
                  
                  {/* Flag */}
                  <div 
                    className="relative w-16 h-16 rounded-lg bg-white border-2 border-gray-300 group-hover:border-[#f7941d] transition-all duration-300 flex items-center justify-center shadow-lg group-hover:shadow-2xl p-2"
                    style={{
                      borderColor: activeNation === nation.code ? '#f7941d' : undefined,
                      boxShadow: activeNation === nation.code ? '0 0 30px rgba(247, 148, 29, 0.4)' : undefined,
                    }}
                  >
                    <nation.FlagComponent className="w-full h-full" />
                  </div>

                  {/* Label on hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded font-mono">
                      {nation.code}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left: Nation Cards in 2x4 grid */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
                ))}
              </div>
              <h3 className="text-xl text-gray-900 uppercase tracking-wider font-mono">Contributing Nations</h3>
            </div>
            <p className="text-sm text-gray-600 font-mono">Click cards for CIMIC contribution data</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {nations.map((nation) => (
              <TacticalNationCard
                key={nation.code}
                nation={nation}
                isActive={activeNation === nation.code}
                onHover={() => setActiveNation(nation.code)}
              />
            ))}
          </div>
        </div>

        {/* Right: Tactical Radar Map */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#5a6b3f] rotate-45" />
                ))}
              </div>
              <h3 className="text-xl text-gray-900 uppercase tracking-wider font-mono">Tactical Overview</h3>
            </div>
            <p className="text-sm text-gray-600 font-mono">Real-time alliance network visualization</p>
          </div>

          <TacticalRadarMap activeNation={activeNation} />
        </div>
      </div>
    </div>
  );
}

