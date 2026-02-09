import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Activity, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TacticalDataStream } from './TacticalDataStream';
import { useState, useEffect } from 'react';
import { heroStats, heroImage } from '@/data/hero';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = heroStats;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1f12]">
      {/* Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Civil-Military Cooperation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3319]/98 via-[#4a5633]/95 to-[#1a1f12]/98" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f12] via-transparent to-transparent" />
      </motion.div>

      {/* Tactical grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(247, 148, 29, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247, 148, 29, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23f7941d' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated scan lines */}
      <motion.div
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(247, 148, 29, 0.03) 50%)',
          backgroundSize: '100% 4px'
        }}
      />

      {/* Tactical corners */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-[#f7941d]/40" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-[#f7941d]/40" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#f7941d]/40" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#f7941d]/40" />

      {/* Tactical data streams - in background */}
      <div className="absolute inset-0 z-[5]">
        <TacticalDataStream index={0} variant="coordinates" />
        <TacticalDataStream index={1} variant="operations" />
        <TacticalDataStream index={2} variant="partnerships" />
      </div>

      {/* Cursor follower effect */}
      <motion.div
        animate={{ x: mousePosition.x - 250, y: mousePosition.y - 250 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#f7941d]/5 blur-3xl pointer-events-none hidden lg:block"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl">
          {/* NATO Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d3319]/60 to-[#4a5633]/60 backdrop-blur-md border border-[#f7941d]/40 rounded-full pl-2 pr-5 py-2">
              <div className="w-8 h-8 bg-[#f7941d] rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#7a8f5c] uppercase tracking-wider leading-none">NATO</span>
                <span className="text-xs text-white tracking-wide leading-none mt-0.5">Centre of Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Main title with military typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl text-white mb-2 tracking-tight leading-[0.95]" style={{ fontWeight: 700 }}>
              <span className="block">CIVIL-MILITARY</span>
              <span className="block bg-gradient-to-r from-[#f7941d] via-[#ffa940] to-[#f7941d] bg-clip-text text-transparent animate-gradient">
                COOPERATION
              </span>
            </h1>
            {/* Tactical underline */}
            <div className="flex items-center gap-2 mt-4">
              <div className="h-0.5 w-24 bg-[#f7941d]" />
              <div className="h-0.5 w-12 bg-[#f7941d]/50" />
              <div className="h-0.5 w-6 bg-[#f7941d]/25" />
            </div>
          </motion.div>

          {/* Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-[#e8e8e0] leading-relaxed tracking-wide">
              Advancing <span className="text-[#f7941d]">operational excellence</span> through strategic cooperation between military forces and civilian organizations in complex operational environments.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button
              onClick={() => scrollToSection('#about')}
              size="lg"
              className="relative bg-gradient-to-r from-[#f7941d] to-[#e88510] hover:from-[#e88510] hover:to-[#f7941d] text-white px-8 py-6 shadow-2xl shadow-[#f7941d]/30 transition-all duration-300 hover:shadow-[#f7941d]/50 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Discover Mission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              variant="outline"
              className="border-2 border-[#f7941d]/50 text-white hover:bg-[#f7941d]/10 hover:border-[#f7941d] backdrop-blur-sm px-8 py-6 transition-all duration-300"
            >
              <span className="tracking-wide">Establish Contact</span>
            </Button>
          </motion.div>

          {/* Stats - Military style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Background with glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d3319]/60 to-[#1a1f12]/60 rounded-xl border border-[#5a6b3f]/30 backdrop-blur-md overflow-hidden">
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#f7941d] to-transparent" />
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#f7941d] to-transparent" />
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-[#f7941d]/0 group-hover:bg-[#f7941d]/5 transition-all duration-500" />
                </div>
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#f7941d]/20 rounded-lg flex items-center justify-center border border-[#f7941d]/40 group-hover:bg-[#f7941d]/30 transition-all">
                      <stat.icon className="w-6 h-6 text-[#f7941d]" />
                    </div>
                    <Activity className="w-4 h-4 text-[#7a8f5c] animate-pulse" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-4xl text-white tracking-tight">{stat.value}</div>
                    <div className="text-sm text-[#7a8f5c] uppercase tracking-wider">{stat.label}</div>
                  </div>
                  
                  {/* Progress bar decoration */}
                  <div className="mt-4 h-1 bg-[#5a6b3f]/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#f7941d] to-[#ffa940]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tactical scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[#7a8f5c] text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#f7941d]/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-[#f7941d] rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
}

