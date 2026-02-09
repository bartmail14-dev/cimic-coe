import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shield,
  Radio,
  Globe,
  ExternalLink,
  ChevronRight,
  Zap
} from 'lucide-react';

export function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const usefulLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Courses', href: '#courses' },
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'News & Events', href: '#news' },
    { label: 'Knowledge Hub', href: '#knowledge' },
  ];

  const quickAccess = [
    { label: 'Training Programs', href: '#courses' },
    { label: 'Seminar Series', href: '#knowledge' },
    { label: 'CIMIC Handbook', href: '#knowledge' },
    { label: 'Publications', href: '#knowledge' },
    { label: 'Intel Briefings', href: '#news' },
    { label: 'Partner Network', href: '#about' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#e4405f' },
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877f2' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#ff0000' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a0e08] via-[#0f1410] to-[#050708] text-white relative overflow-hidden border-t-2 border-[#f7941d]">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(#5a6b3f 1px, transparent 1px),
            linear-gradient(90deg, #5a6b3f 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23f7941d' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
          className="w-full h-full"
        />
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* HUD Status Bar */}
        <div className="mb-12">
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f]/50 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#f7941d]/50" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f7941d]/50" />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#00ff00] rounded-full"
                    aria-hidden="true"
                  />
                  <span className="text-[#00ff00] text-xs font-mono uppercase tracking-wider">System Online</span>
                </div>
                <div className="w-px h-6 bg-[#5a6b3f]" />
                <div className="text-xs font-mono text-gray-400">SECURE CONNECTION</div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#f7941d]" aria-hidden="true" />
                <div className="text-sm font-mono text-gray-300">CIMIC COE • FOOTER</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400" suppressHydrationWarning>
                <Radio className="w-4 h-4 text-[#5a6b3f]" aria-hidden="true" />
                {currentTime.toLocaleTimeString('en-GB', { hour12: false, timeZone: 'UTC' })} UTC
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* CIMIC Branding without imported logo */}
            <div className="mb-6">
              <div className="bg-black/40 border-2 border-[#5a6b3f] rounded-xl p-6 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#f7941d]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#f7941d]" />
                
                <div className="text-center space-y-2">
                  <div className="text-2xl font-mono tracking-wider text-[#f7941d]">CIMIC COE</div>
                  <div className="text-xs font-mono text-[#5a6b3f] uppercase tracking-widest">Centre of Excellence</div>
                  <div className="text-xs font-mono text-gray-400">EST. 2001</div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-black/20 border border-[#5a6b3f]/30 rounded-lg p-6 mb-6 relative overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5a6b3f]/5 to-transparent w-32"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-[#f7941d]" aria-hidden="true" />
                  <span className="text-xs font-mono text-[#f7941d] uppercase tracking-wider">Mission Statement</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  The CCOE is the preferred network campus to: <span className="text-white font-semibold">connect people</span>, share <span className="text-[#5a6b3f]">collective knowledge</span> and gain <span className="text-white font-semibold">unity of purpose</span> in the field of Civil-Military Cooperation.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-black/20 border border-[#f7941d]/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#f7941d]/10 border border-[#f7941d] rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f7941d]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#f7941d] uppercase tracking-wider mb-1">Address</div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Majoor Jan Linzel Complex<br />
                      Brasserskade 227A<br />
                      2497 NX The Hague<br />
                      The Netherlands
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-black/20 border border-[#5a6b3f]/30 rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#5a6b3f]/10 border border-[#5a6b3f] rounded flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#5a6b3f]" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-[#5a6b3f] uppercase tracking-wider mb-1">Phone</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>Registry: <span className="text-white">+31 (0) 889 566439</span></div>
                        <div>PA Head: <span className="text-white">+31 (0) 652 753723</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-black/20 border border-[#f7941d]/30 rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f7941d]/10 border border-[#f7941d] rounded flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#f7941d]" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-[#f7941d] uppercase tracking-wider mb-1">Email</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div className="text-white">info@cimic-coe.org</div>
                        <div className="text-white">PAO@cimic-coe.org</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#5a6b3f]" />
                <h4 className="text-white uppercase tracking-wider font-mono text-sm">Useful Links</h4>
              </div>
              <ul className="space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#f7941d] transition-colors text-sm"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#f7941d]" />
                <h4 className="text-white uppercase tracking-wider font-mono text-sm">Quick Access</h4>
              </div>
              <ul className="space-y-3">
                {quickAccess.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#5a6b3f] transition-colors text-sm"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5a6b3f] to-transparent mb-12" />

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* Social Media */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-12 bg-[#f7941d]" />
                <Zap className="w-4 h-4 text-[#f7941d]" aria-hidden="true" />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Connect With Us</span>
                <Zap className="w-4 h-4 text-[#f7941d]" aria-hidden="true" />
                <div className="h-px w-12 bg-[#f7941d]" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-12 h-12 bg-black/40 border-2 border-[#5a6b3f]/50 hover:border-[#f7941d] rounded-lg flex items-center justify-center transition-all group"
                >
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#f7941d] transition-colors" aria-hidden="true" />
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#f7941d] transition-colors" />
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ boxShadow: `0 0 20px ${social.color}40` }}
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f]/30 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f7941d]/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f7941d]/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#5a6b3f]/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#5a6b3f]/30" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-[#5a6b3f]" aria-hidden="true" />
                <span className="text-gray-400 font-mono">
                  © {currentYear} <span className="text-white">CIMIC COE</span> • All Rights Reserved
                </span>
              </div>
              <div className="px-4 py-2 bg-[#5a6b3f]/10 border border-[#5a6b3f] rounded text-xs font-mono text-[#5a6b3f] uppercase tracking-wider">
                NATO Accredited
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 font-mono">Powered by</span>
                <a href="#" className="text-[#f7941d] hover:text-[#ff9900] transition-colors font-mono flex items-center gap-1">
                  Blue Wire Media
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" aria-hidden="true" />
          </div>

          {/* End of Transmission Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-black/40 border border-[#5a6b3f]/30 rounded-full">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-1 bg-[#5a6b3f] rounded-full"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                End of Transmission
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-1 bg-[#5a6b3f] rounded-full"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f] pointer-events-none"
        aria-hidden="true"
      />
    </footer>
  );
}

