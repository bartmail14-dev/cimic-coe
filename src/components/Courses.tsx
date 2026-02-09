import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CourseDialog } from './CourseDialog';
import {
  GraduationCap,
  Clock,
  Users,
  ChevronRight,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { courses as courseData } from '@/data/courses';

export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  targetDate: Date;
  description: string;
  capacity: string;
  icon: any;
  color: string;
  classification: string;
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeBlocks.map((block, index) => (
        <div key={block.label} className="relative">
          <div className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-2 backdrop-blur-sm">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#f7941d]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#f7941d]" />
            
            <div className="text-center">
              <motion.div
                key={block.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-mono text-[#f7941d] mb-1"
              >
                {String(block.value).padStart(2, '0')}
              </motion.div>
              <div className="text-[10px] text-gray-400 font-mono uppercase">
                {block.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CourseCard({ course, index, onOpenDialog }: { course: Course; index: number; onOpenDialog: (course: Course) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="bg-gradient-to-br from-gray-900 via-[#1a2a1a] to-gray-900 border-2 border-[#5a6b3f]/50 p-6 h-full relative overflow-hidden hover:border-[#f7941d] transition-all duration-500">
        {/* Hex pattern background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l17.32 10v20L20 40 2.68 30V10z' fill='none' stroke='%235a6b3f' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Scanline effect */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7941d]/10 to-transparent w-32"
        />

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f7941d]/50 group-hover:border-[#f7941d] transition-colors" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f7941d]/50 group-hover:border-[#f7941d] transition-colors" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#5a6b3f]/50 group-hover:border-[#5a6b3f] transition-colors" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#5a6b3f]/50 group-hover:border-[#5a6b3f] transition-colors" />

        <div className="relative z-10">
          {/* Header with classification */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 border-2 rounded-lg flex items-center justify-center transition-all"
                style={{
                  borderColor: course.color,
                  backgroundColor: `${course.color}20`,
                }}
              >
                <course.icon className="w-6 h-6" style={{ color: course.color }} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono mb-1">{course.level}</div>
                <div 
                  className="px-2 py-0.5 border rounded text-xs font-mono"
                  style={{
                    borderColor: course.color,
                    color: course.color,
                    backgroundColor: `${course.color}15`,
                  }}
                >
                  {course.classification}
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#f7941d]"
            />
          </div>

          {/* Course Title */}
          <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-[#f7941d] transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {course.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5a6b3f] to-transparent mb-4" />

          {/* Course details */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#5a6b3f]" />
              <div>
                <div className="text-xs text-gray-500 font-mono">Duration</div>
                <div className="text-sm text-gray-300 font-mono">{course.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#5a6b3f]" />
              <div>
                <div className="text-xs text-gray-500 font-mono">Capacity</div>
                <div className="text-sm text-gray-300 font-mono">{course.capacity}</div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-4">
            <div className="text-xs text-gray-400 font-mono mb-2 flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              NEXT ITERATION
            </div>
            <CountdownTimer targetDate={course.targetDate} />
          </div>

          {/* Action Button */}
          <Button
            onClick={() => onOpenDialog(course)}
            className="w-full bg-gradient-to-r from-[#5a6b3f] to-[#4a5633] hover:from-[#f7941d] hover:to-[#e88a1d] text-white border-0 group/btn transition-all duration-300"
          >
            <span className="font-mono uppercase tracking-wider">Access Course Info</span>
            <motion.div
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
            >
              <ChevronRight className="w-4 h-4 ml-2" />
            </motion.div>
          </Button>

          {/* Bottom accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 h-1"
            style={{
              background: `linear-gradient(90deg, ${course.color}, transparent)`,
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
}

export function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<'upcoming' | 'all'>('upcoming');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedCourse(null), 300);
  };

  const getUpcomingDate = (monthsAhead: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsAhead);
    return date;
  };

  const courses: Course[] = courseData.map((c) => ({
    ...c,
    targetDate: getUpcomingDate(c.monthsAhead),
  }));

  return (
    <section id="courses" ref={ref} className="py-24 bg-gradient-to-b from-[#0a1308] via-[#1a2310] to-[#0a1308] text-white relative overflow-hidden">
      {/* Tactical grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(#5a6b3f 1px, transparent 1px),
              linear-gradient(90deg, #5a6b3f 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
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
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7941d]/5 to-transparent h-32 pointer-events-none"
      />

      {/* Corner frames */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-[#f7941d] opacity-20" />
      <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-[#f7941d] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HUD - Training Academy Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f] rounded-xl p-6 relative overflow-hidden">
            {/* Tactical stripes */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left: Status */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#5a6b3f] rounded-full"
                  />
                  <span className="text-[#5a6b3f] text-xs font-mono uppercase tracking-wider">Training Active</span>
                </div>
                <div className="w-px h-6 bg-[#5a6b3f]" />
                <div className="text-xs font-mono text-gray-400">
                  ACCREDITATION: <span className="text-[#f7941d]">NATO CERTIFIED</span>
                </div>
              </div>

              {/* Center: Title */}
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#f7941d]" />
                <div>
                  <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Training Division</div>
                  <div className="text-xl text-white font-mono">Course Catalog</div>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="text-gray-400">
                  ANNUAL: <span className="text-[#f7941d]">500+ Graduates</span>
                </div>
              </div>
            </div>

            {/* Bottom tactical stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
          </div>
        </motion.div>

        {/* SECTION TITLE */}
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
            <h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-wider font-mono">Training Programs</h2>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#f7941d] rotate-45" />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#f7941d]" />
            <GraduationCap className="w-4 h-4 text-[#f7941d]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#f7941d]" />
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-mono">
            Professional CIMIC education from tactical to strategic level. NATO-accredited courses designed for military and civilian personnel.
          </p>
        </motion.div>

        {/* NOTICE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-[#f7941d]/10 border-l-4 border-[#f7941d] p-4 rounded-r-lg backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#f7941d] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-white font-mono mb-1">
                  <span className="text-[#f7941d] font-semibold">UPCOMING ITERATIONS:</span> Registration now open for 2025 courses
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  All courses conducted at CIMIC COE, The Hague, Netherlands • NATO Secret clearance may be required
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COURSES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} onOpenDialog={handleOpenDialog} />
          ))}
        </div>

        {/* COURSE DIALOG */}
        <CourseDialog
          course={selectedCourse}
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
        />

        {/* BOTTOM INFO BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#5a6b3f] rounded-xl p-6 relative overflow-hidden">
            {/* Bottom tactical stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f]" />
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-mono text-[#f7941d] mb-2">2500+</div>
                <div className="text-sm text-gray-400 font-mono uppercase">Graduates Trained</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-[#5a6b3f] mb-2">30+</div>
                <div className="text-sm text-gray-400 font-mono uppercase">Partner Nations</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-[#f7941d] mb-2">24+</div>
                <div className="text-sm text-gray-400 font-mono uppercase">Years Excellence</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 font-mono">
                For course registration and detailed information, contact our training division
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

