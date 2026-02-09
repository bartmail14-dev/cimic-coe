import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Target, BookOpen, Award, Lightbulb, Users, Globe, Shield, Compass } from 'lucide-react';
import { TacticalNationsDisplay } from './TacticalNationsDisplay';

function AnimatedCounter({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      const animation = count.set(target);
      const unsubscribe = rounded.on('change', (latest) => {
        setDisplayValue(latest.toString());
      });
      return unsubscribe;
    }
  }, [isInView, count, rounded, target]);

  return (
    <div ref={ref} className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-br from-[#f7941d]/20 to-[#5a6b3f]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="text-5xl mb-2 bg-gradient-to-br from-[#f7941d] to-[#5a6b3f] bg-clip-text text-transparent">
          {displayValue}{suffix}
        </div>
        <div className="text-sm text-gray-600 uppercase tracking-wider">{label}</div>
        <div className="absolute top-3 right-3 w-2 h-2 bg-[#f7941d] rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  index: number 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Hexagonal background pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #5a6b3f 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Icon container with gradient */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7941d]/10 to-[#5a6b3f]/10 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f7941d] to-[#5a6b3f] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <Icon className="w-8 h-8 text-[#5a6b3f] relative z-10 group-hover:text-[#f7941d] transition-colors duration-500" />
          </div>
          {/* Corner accent */}
          <motion.div 
            animate={{ rotate: isHovered ? 90 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#f7941d] rounded-tr-lg"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#f7941d] to-[#5a6b3f] rounded-b-2xl"
        />
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Developing doctrine, best practices, and standards for civil-military cooperation in modern operational environments.',
    },
    {
      icon: BookOpen,
      title: 'Education & Training',
      description: 'Providing world-class education and training programs for CIMIC practitioners worldwide.',
    },
    {
      icon: Award,
      title: 'NATO Accredited',
      description: 'Officially recognized NATO Centre of Excellence since 2001, serving alliance members.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Leading research and innovation in civil-military interaction methodologies.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connecting military and civilian organizations across continents for effective cooperation.',
    },
    {
      icon: Shield,
      title: 'Mission Ready',
      description: 'Preparing personnel for complex operations requiring civil-military coordination.',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f7941d]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#5a6b3f]/5 to-transparent rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#5a6b3f 1px, transparent 1px), linear-gradient(90deg, #5a6b3f 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Military Styled */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Classification Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-8 mb-8"
          >
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <div className="w-1.5 h-1.5 bg-[#f7941d] rounded-full animate-pulse" />
              <span>NATO-ACCREDITED</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#5a6b3f] to-transparent" />
            <div className="px-3 py-1 bg-[#5a6b3f]/10 border border-[#5a6b3f]/30 rounded text-xs text-[#5a6b3f] font-mono uppercase tracking-wider">
              Centre of Excellence
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#5a6b3f] to-transparent" />
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <span>EST. 2001</span>
              <div className="w-1.5 h-1.5 bg-[#f7941d] rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Title with Military Frame */}
          <div className="relative">
            {/* Tactical Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(#5a6b3f 1px, transparent 1px),
                    linear-gradient(90deg, #5a6b3f 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Scanlines */}
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: 'linear-gradient(0deg, transparent 0%, #5a6b3f 50%, transparent 100%)',
                  backgroundSize: '100% 200px',
                }}
              />
            </div>

            {/* Corner Brackets - Military Style */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#f7941d]" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#f7941d]" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#5a6b3f]" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#5a6b3f]" />

            {/* Serial Numbers */}
            <div className="absolute -top-7 left-20 text-xs font-mono text-gray-400 tracking-wider">
              CIMIC-COE-NLD-001
            </div>
            <div className="absolute -top-7 right-20 text-xs font-mono text-gray-400 tracking-wider">
              SECTOR: GLOBAL
            </div>

            <div className="relative border-2 border-gray-200 p-12 bg-white/80 backdrop-blur-sm">
              {/* Top designation bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
              
              {/* Side indicators */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-8 bg-[#f7941d]"
                  />
                ))}
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-8 bg-[#5a6b3f]"
                  />
                ))}
              </div>

              <div className="text-center relative">
                {/* Small designation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-[#f7941d]/10 via-[#5a6b3f]/5 to-[#f7941d]/10 border border-[#5a6b3f]/20"
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
                    ))}
                  </div>
                  <span className="text-[#5a6b3f] uppercase tracking-[0.3em] text-sm font-mono">
                    About CIMIC COE
                  </span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
                    ))}
                  </div>
                </motion.div>

                {/* Main Heavy Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-[1.1] relative"
                >
                  <div className="relative inline-block">
                    <span className="block text-gray-900 mb-2 tracking-tight">
                      EXCELLENCE IN
                    </span>
                    
                    {/* Military stencil effect for main keywords */}
                    <div className="relative inline-block group">
                      <span 
                        className="block bg-gradient-to-r from-[#5a6b3f] via-[#6a7b4f] to-[#5a6b3f] bg-clip-text text-transparent tracking-tighter"
                        style={{
                          textShadow: '0 0 40px rgba(90, 107, 63, 0.3)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        CIVIL-MILITARY
                      </span>
                      
                      {/* Tactical underline with segments */}
                      <div className="absolute -bottom-3 left-0 right-0 h-2 flex gap-1">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                            className="flex-1 bg-gradient-to-r from-[#f7941d] to-[#5a6b3f] origin-left"
                          />
                        ))}
                      </div>

                      {/* Crosshair accent */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 hidden lg:block"
                      >
                        <div className="absolute left-1/2 top-0 w-px h-full bg-[#f7941d]/30" />
                        <div className="absolute top-1/2 left-0 h-px w-full bg-[#f7941d]/30" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-[#f7941d]/50 rounded-full" />
                      </motion.div>
                    </div>

                    <span className="block text-gray-900 mt-2 tracking-tight">
                      COOPERATION
                    </span>

                    {/* Military designation codes */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:block">
                      <div className="flex flex-col items-end gap-1 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="tracking-wider">NATO</span>
                          <div className="w-2 h-2 border border-[#5a6b3f] rotate-45" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="tracking-wider">CIMIC</span>
                          <div className="w-2 h-2 border border-[#f7941d] rotate-45" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="tracking-wider">COE</span>
                          <div className="w-2 h-2 border border-[#5a6b3f] rotate-45" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block">
                      <div className="flex flex-col gap-1 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#f7941d] rounded-full animate-pulse" />
                          <span className="tracking-wider">ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#5a6b3f]" />
                          <span className="tracking-wider">GLOBAL</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#f7941d]" />
                          <span className="tracking-wider">READY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.h2>

                {/* Mission Brief */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="bg-gradient-to-r from-transparent via-gray-100 to-transparent p-6 relative">
                    {/* Top markers */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white border border-gray-300 text-xs font-mono text-gray-500">
                      MISSION BRIEF
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed font-mono">
                      <span className="text-[#f7941d]">&gt;&gt;</span> The Civil-Military Cooperation Centre of Excellence (CIMIC COE) is an international military organization supporting NATO and partner nations through expertise, education, and innovation.
                    </p>

                    {/* Bottom timestamp */}
                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-300">
                      <span className="text-xs font-mono text-gray-500">LOCATION: THE HAGUE, NLD</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span className="text-xs font-mono text-gray-500">CLASSIFICATION: UNCLASSIFIED</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom designation bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
            </div>

            {/* Bottom Serial */}
            <div className="absolute -bottom-7 left-0 right-0 flex items-center justify-center gap-8 text-xs font-mono text-gray-400">
              <span className="tracking-wider">PRIORITY: HIGH</span>
              <div className="w-1 h-1 bg-[#f7941d] rounded-full" />
              <span className="tracking-wider">STATUS: OPERATIONAL</span>
              <div className="w-1 h-1 bg-[#5a6b3f] rounded-full" />
              <span className="tracking-wider">CLEARANCE: PUBLIC</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 max-w-5xl mx-auto"
        >
          <AnimatedCounter target={2001} label="Established" />
          <AnimatedCounter target={8} label="Contributing Nations" />
          <AnimatedCounter target={30} label="Partners" suffix="+" />
          <AnimatedCounter target={500} label="Annual Trainees" suffix="+" />
        </motion.div>

        {/* Tactical Nations Display - Replaces old image grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <TacticalNationsDisplay />
        </motion.div>

        {/* Mission & Impact Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#f7941d]/5 to-transparent rounded-2xl" />
            <div className="relative bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#f7941d] transition-all duration-300 group">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f7941d] via-[#5a6b3f] to-[#f7941d]" />
              
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#f7941d]" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#f7941d]" />
              
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-[100px] bg-gradient-to-b from-[#f7941d] to-[#5a6b3f] rounded-full" />
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-6 h-6 text-[#f7941d]" />
                    <h3 className="text-2xl text-gray-900 uppercase tracking-wider font-mono">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We serve as NATO's primary resource for civil-military cooperation expertise, providing subject matter expertise, education, training, and doctrine development that enables effective coordination between military forces and civilian actors in complex operational environments.
                  </p>

                  {/* Stats mini display */}
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-gradient-to-br from-[#f7941d]/5 to-transparent p-3 rounded-lg">
                      <div className="text-2xl bg-gradient-to-r from-[#f7941d] to-[#5a6b3f] bg-clip-text text-transparent">24/7</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">Operations</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#5a6b3f]/5 to-transparent p-3 rounded-lg">
                      <div className="text-2xl bg-gradient-to-r from-[#5a6b3f] to-[#f7941d] bg-clip-text text-transparent">Global</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#5a6b3f]/5 to-transparent rounded-2xl" />
            <div className="relative bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#5a6b3f] transition-all duration-300 group">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
              
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#5a6b3f]" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#5a6b3f]" />
              
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-[100px] bg-gradient-to-b from-[#5a6b3f] to-[#f7941d] rounded-full" />
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-[#5a6b3f]" />
                    <h3 className="text-2xl text-gray-900 uppercase tracking-wider font-mono">Our Impact</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Through our work, we enhance the ability of NATO and partner nations to operate effectively in environments where military and civilian efforts must be coordinated to achieve shared objectives, from humanitarian assistance to stabilization operations.
                  </p>

                  {/* Stats mini display */}
                  <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-gradient-to-br from-[#5a6b3f]/5 to-transparent p-3 rounded-lg">
                      <div className="text-2xl bg-gradient-to-r from-[#5a6b3f] to-[#f7941d] bg-clip-text text-transparent">8</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">Nations</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#f7941d]/5 to-transparent p-3 rounded-lg">
                      <div className="text-2xl bg-gradient-to-r from-[#f7941d] to-[#5a6b3f] bg-clip-text text-transparent">30+</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center text-gray-900 mb-12"
          >
            Core Capabilities
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

