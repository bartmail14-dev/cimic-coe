import { useState, useEffect } from 'react';
import { Menu, X, Radio, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { navItems } from '@/data/navigation';
interface HeaderProps {
  currentPage: 'home' | 'handbook';
  onNavigate: (page: 'home' | 'handbook') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'courses', 'mission', 'news', 'partners', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // navItems imported from @/data/navigation

  const scrollToSection = (href: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top tactical bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#2d3319]/98 backdrop-blur-xl shadow-2xl border-b border-[#5a6b3f]/30'
            : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
        }`}
      >
        {/* Tactical grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(90, 107, 63, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(90, 107, 63, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with tactical enhancement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4 relative group"
            >
              {/* Live status indicator */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-[#f7941d] rounded-full"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-[#f7941d]/20 blur-xl group-hover:bg-[#f7941d]/30 transition-all" />
                <img src="/logo.png" alt="CIMIC COE Logo" className="w-14 h-14 object-contain relative z-10" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white tracking-tight">
                    CIMIC Centre
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-[#f7941d]/20 border border-[#f7941d]/40 rounded text-[10px] text-[#f7941d] uppercase tracking-wider">
                    <Radio className="w-2 h-2" />
                    Active
                  </span>
                </div>
                <span className="text-xs text-[#7a8f5c] tracking-wider uppercase">
                  of Excellence
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation - Tactical Style */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-2 border border-white/10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-5 py-2.5 rounded-full transition-all duration-300 group ${
                      activeSection === item.id && currentPage === 'home'
                        ? 'text-white'
                        : 'text-[#e8e8e0] hover:text-white'
                    }`}
                  >
                    {activeSection === item.id && currentPage === 'home' && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-[#5a6b3f] to-[#4a5633] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 text-sm tracking-wide">{item.label}</span>
                    
                    {/* Hover effect */}
                    {!(activeSection === item.id && currentPage === 'home') && (
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-all duration-300" />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-6 flex items-center gap-3"
              >
                <Button
                  onClick={() => {
                    if (currentPage === 'home') {
                      onNavigate('handbook');
                    } else {
                      onNavigate('home');
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className={`relative px-4 py-2.5 border-2 transition-all duration-300 overflow-hidden group ${
                    currentPage === 'handbook'
                      ? 'border-[#f7941d] bg-[#f7941d]/20 text-[#f7941d]'
                      : 'border-[#5a6b3f] bg-transparent text-[#5a6b3f] hover:bg-[#5a6b3f]/10'
                  }`}
                >
                  <span className="relative z-10 tracking-wide flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Handbook
                  </span>
                </Button>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="relative bg-gradient-to-r from-[#f7941d] to-[#e88510] hover:from-[#e88510] hover:to-[#f7941d] text-white px-6 py-2.5 shadow-lg shadow-[#f7941d]/30 transition-all duration-300 hover:shadow-[#f7941d]/50 hover:scale-105 overflow-hidden group"
                >
                  <span className="relative z-10 tracking-wide">Mission Brief</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Tactical scan line effect */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#f7941d]/50 to-transparent"
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-[81px] right-0 bottom-0 w-80 max-w-full bg-[#2d3319]/98 backdrop-blur-xl border-l border-[#5a6b3f]/30 z-50 lg:hidden"
          >
            {/* Tactical grid overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(90, 107, 63, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(90, 107, 63, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
            
            <div className="relative h-full p-6 flex flex-col">
              <div className="flex-1 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-5 py-4 rounded-lg transition-all ${
                      activeSection === item.id && currentPage === 'home'
                        ? 'bg-gradient-to-r from-[#5a6b3f] to-[#4a5633] text-white'
                        : 'text-[#e8e8e0] hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="tracking-wide">{item.label}</span>
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => {
                    if (currentPage === 'home') {
                      onNavigate('handbook');
                    } else {
                      onNavigate('home');
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-5 py-4 rounded-lg transition-all ${
                    currentPage === 'handbook'
                      ? 'bg-gradient-to-r from-[#f7941d] to-[#e88510] text-white'
                      : 'text-[#e8e8e0] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="tracking-wide flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    CIMIC Handbook
                  </span>
                </motion.button>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-[#f7941d] to-[#e88510] hover:from-[#e88510] hover:to-[#f7941d] text-white py-3 shadow-lg"
                >
                  Mission Brief
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

