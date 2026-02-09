import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MilitaryCheckbox } from './MilitaryCheckbox';
import { Textarea } from './ui/textarea';
import { Course } from './Courses';
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  ChevronRight,
  CheckCircle,
  User,
  Building,
  Mail,
  Globe,
  Shield,
  Hash,
  Home,
  FileText
} from 'lucide-react';
import { toast } from 'sonner';

interface CourseDialogProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const iterations = [
  {
    value: 'NCHCC 01-2026',
    label: 'NCHCC 01-2026 09 February - 20 February. The Hague, The Netherlands.'
  },
  {
    value: 'NCHCC 02-2026',
    label: 'NCHCC 02-2026 15 June - 26 June. The Hague, The Netherlands.'
  },
  {
    value: 'NCHCC 03-2026',
    label: 'NCHCC 03-2026 12 October - 23 October. The Hague, The Netherlands.'
  }
];

const nationalities = [
  'Albania', 'Belgium', 'Bulgaria', 'Canada', 'Croatia', 'Czech Republic', 
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
  'Iceland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Montenegro',
  'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania',
  'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'United Kingdom', 
  'United States', 'Other'
];

const ranks = [
  'Mr', 'Mrs', 'Ms', 'Private (PVT)', 'Corporal (CPL)', 'Sergeant (SGT)',
  'Staff Sergeant (SSG)', 'Sergeant Major (SGM)', 'Lieutenant (LT)',
  'Captain (CPT)', 'Major (MAJ)', 'Lieutenant Colonel (LTC)', 
  'Colonel (COL)', 'Brigadier General (BG)', 'Major General (MG)'
];

const idTypes = ['ID', 'Passport', 'Military ID', 'Diplomatic ID'];

const previousCourses = [
  'NATO CIMIC Field Worker Course',
  'NATO CIMIC Staff Worker Course',
  'NATO CIMIC Functional Specialist Course',
  'NATO CIMIC Higher Command Course',
  'NATO CIMIC Liaison Course',
  'NATO CIMIC Resilience Through Civil Preparedness Course',
  'NATO CIMIC Analysis and Assessment Course'
];

export function CourseDialog({ course, isOpen, onClose }: CourseDialogProps) {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedPreviousCourses, setSelectedPreviousCourses] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    iteration: '',
    familyName: '',
    firstName: '',
    company: '',
    dateOfBirth: '',
    personalEmail: '',
    dutyEmail: '',
    nationality: '',
    rank: '',
    idNumber: '',
    idType: 'ID',
    street: '',
    zipcode: '',
    place: '',
    accommodation: false,
    motivation: ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreviousCourseToggle = (courseName: string) => {
    setSelectedPreviousCourses(prev => 
      prev.includes(courseName) 
        ? prev.filter(c => c !== courseName)
        : [...prev, courseName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.iteration || !formData.familyName || !formData.firstName || 
        !formData.company || !formData.dateOfBirth || !formData.personalEmail || 
        !formData.dutyEmail || !formData.rank || !formData.idNumber || 
        !formData.street || !formData.zipcode || !formData.place || !formData.motivation) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Success
    toast.success('Registration submitted successfully! You will receive a confirmation email shortly.');
    
    // Reset form
    setFormData({
      iteration: '',
      familyName: '',
      firstName: '',
      company: '',
      dateOfBirth: '',
      personalEmail: '',
      dutyEmail: '',
      nationality: '',
      rank: '',
      idNumber: '',
      idType: 'ID',
      street: '',
      zipcode: '',
      place: '',
      accommodation: false,
      motivation: ''
    });
    setSelectedPreviousCourses([]);
    setShowRegistration(false);
    onClose();
  };

  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-[#1a2a1a] to-gray-900 border-2 border-[#5a6b3f] text-white p-0">
        {/* Hidden accessibility elements */}
        <DialogTitle className="sr-only">
          {showRegistration ? 'Course Registration Form' : 'Course Information'}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {showRegistration 
            ? `Register for ${course.title}. Fill in all required fields to complete your registration.`
            : `Detailed information about ${course.title} including description, subjects, and prerequisites.`
          }
        </DialogDescription>

        {/* Tactical header bar */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-[#5a6b3f] via-[#f7941d] to-[#5a6b3f] h-1" />
        
        <div className="relative">
          {/* Hex pattern background */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l17.32 10v20L20 40 2.68 30V10z' fill='none' stroke='%235a6b3f' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }}
          />

          {!showRegistration ? (
            // COURSE DETAILS VIEW
            <div className="p-8 relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 border-2 rounded-xl flex items-center justify-center"
                    style={{
                      borderColor: course.color,
                      backgroundColor: `${course.color}20`,
                    }}
                  >
                    <course.icon className="w-8 h-8" style={{ color: course.color }} />
                  </div>
                  <div>
                    <div 
                      className="px-3 py-1 border rounded-full text-xs font-mono mb-2 inline-block"
                      style={{
                        borderColor: course.color,
                        color: course.color,
                        backgroundColor: `${course.color}15`,
                      }}
                    >
                      {course.classification}
                    </div>
                    <h2 className="text-3xl font-semibold">{course.title}</h2>
                    <p className="text-sm text-gray-400 font-mono mt-1">{course.level}</p>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#f7941d]" />
                    <span className="text-xs text-gray-400 font-mono uppercase">Duration</span>
                  </div>
                  <div className="text-xl font-mono text-white">{course.duration}</div>
                </div>
                <div className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-[#f7941d]" />
                    <span className="text-xs text-gray-400 font-mono uppercase">Capacity</span>
                  </div>
                  <div className="text-xl font-mono text-white">{course.capacity}</div>
                </div>
                <div className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#f7941d]" />
                    <span className="text-xs text-gray-400 font-mono uppercase">Location</span>
                  </div>
                  <div className="text-sm font-mono text-white">The Hague, NL</div>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#f7941d]" />
                  About this Course
                </h3>
                <div className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">{course.description}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Supported by qualified and experienced NATO staff, CCOE staff, and representatives 
                    of non-military organisations, students will get introduced to essential NATO doctrines 
                    and processes.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Students will be challenged to test their knowledge in a practice-oriented multinational 
                    learning environment.
                  </p>
                </div>
              </div>

              {/* Subjects */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#f7941d]" />
                  Course Subjects
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'NATO CIMIC Doctrine & Concepts',
                    'Civil-Military Cooperation Planning',
                    'Operating Environment Analysis',
                    'Coordination with Civilian Actors',
                    'Crisis Management Operations',
                    'Practical Exercises & Scenarios'
                  ].map((subject, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 text-[#5a6b3f] flex-shrink-0" />
                      <span className="text-sm text-gray-300">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#f7941d]" />
                  Prerequisites
                </h3>
                <div className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#f7941d] mt-1">•</span>
                      <span>Military or civilian personnel working in or with CIMIC functions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f7941d] mt-1">•</span>
                      <span>NATO Secret clearance or equivalent (for some courses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f7941d] mt-1">•</span>
                      <span>Proficiency in English language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f7941d] mt-1">•</span>
                      <span>Nomination by national authority or sponsoring organization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={() => setShowRegistration(true)}
                  className="flex-1 bg-gradient-to-r from-[#f7941d] to-[#e88a1d] hover:from-[#e88a1d] hover:to-[#f7941d] text-white border-0 py-6 text-lg"
                >
                  <span className="font-mono uppercase tracking-wider">Register Now</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="bg-black/40 border-[#5a6b3f] text-white hover:bg-black/60 py-6"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            // REGISTRATION FORM VIEW
            <div className="p-8 relative z-10">
              {/* Form Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Button
                    onClick={() => setShowRegistration(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    ← Back to Details
                  </Button>
                </div>
                <h2 className="text-3xl font-semibold mb-2">Course Registration</h2>
                <p className="text-gray-400 font-mono">{course.title}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Iteration Selection */}
                <div>
                  <Label className="text-white mb-2 block">
                    Iteration <span className="text-[#f7941d]">*</span>
                  </Label>
                  <Select value={formData.iteration} onValueChange={(value) => handleInputChange('iteration', value)}>
                    <SelectTrigger className="bg-black/40 border-[#5a6b3f] text-white">
                      <SelectValue placeholder="Select iteration" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-[#5a6b3f] text-white">
                      {iterations.map((iter) => (
                        <SelectItem key={iter.value} value={iter.value}>
                          {iter.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <User className="w-4 h-4 text-[#f7941d]" />
                      Family Name <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      value={formData.familyName}
                      onChange={(e) => handleInputChange('familyName', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="Enter family name"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <User className="w-4 h-4 text-[#f7941d]" />
                      First Name <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-2 block flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#f7941d]" />
                    Company/Military Unit <span className="text-[#f7941d]">*</span>
                  </Label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-black/40 border-[#5a6b3f] text-white"
                    placeholder="Enter company or military unit"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#f7941d]" />
                    Date of Birth <span className="text-[#f7941d]">*</span>
                  </Label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="bg-black/40 border-[#5a6b3f] text-white"
                  />
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#f7941d]" />
                      Personal Email <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      type="email"
                      value={formData.personalEmail}
                      onChange={(e) => handleInputChange('personalEmail', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="personal@email.com"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#f7941d]" />
                      Duty/Work Email <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      type="email"
                      value={formData.dutyEmail}
                      onChange={(e) => handleInputChange('dutyEmail', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="work@email.com"
                    />
                  </div>
                </div>

                {/* Nationality and Rank */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#f7941d]" />
                      Nationality
                    </Label>
                    <Select value={formData.nationality} onValueChange={(value) => handleInputChange('nationality', value)}>
                      <SelectTrigger className="bg-black/40 border-[#5a6b3f] text-white">
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#5a6b3f] text-white max-h-60">
                        {nationalities.map((nation) => (
                          <SelectItem key={nation} value={nation}>
                            {nation}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#f7941d]" />
                      Rank <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Select value={formData.rank} onValueChange={(value) => handleInputChange('rank', value)}>
                      <SelectTrigger className="bg-black/40 border-[#5a6b3f] text-white">
                        <SelectValue placeholder="Select rank" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#5a6b3f] text-white max-h-60">
                        {ranks.map((rank) => (
                          <SelectItem key={rank} value={rank}>
                            {rank}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* ID Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <Hash className="w-4 h-4 text-[#f7941d]" />
                      ID Number <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange('idNumber', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="Enter ID number"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#f7941d]" />
                      ID Type
                    </Label>
                    <Select value={formData.idType} onValueChange={(value) => handleInputChange('idType', value)}>
                      <SelectTrigger className="bg-black/40 border-[#5a6b3f] text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-[#5a6b3f] text-white">
                        {idTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <Label className="text-white mb-2 block flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#f7941d]" />
                    Street <span className="text-[#f7941d]">*</span>
                  </Label>
                  <Input
                    value={formData.street}
                    onChange={(e) => handleInputChange('street', e.target.value)}
                    className="bg-black/40 border-[#5a6b3f] text-white"
                    placeholder="Enter street address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block">
                      Zipcode <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      value={formData.zipcode}
                      onChange={(e) => handleInputChange('zipcode', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="Enter zipcode"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">
                      Place <span className="text-[#f7941d]">*</span>
                    </Label>
                    <Input
                      value={formData.place}
                      onChange={(e) => handleInputChange('place', e.target.value)}
                      className="bg-black/40 border-[#5a6b3f] text-white"
                      placeholder="Enter city/place"
                    />
                  </div>
                </div>

                {/* Accommodation */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-4 hover:border-[#f7941d]/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <MilitaryCheckbox
                      id="accommodation"
                      checked={formData.accommodation}
                      onCheckedChange={(checked) => handleInputChange('accommodation', checked)}
                      variant="orange"
                    />
                    <Label htmlFor="accommodation" className="text-white cursor-pointer flex-1">
                      Accommodation in military housing is required
                    </Label>
                  </div>
                </motion.div>

                {/* Motivation */}
                <div>
                  <Label className="text-white mb-2 block">
                    What is your motivation for registering in this course? <span className="text-[#f7941d]">*</span>
                  </Label>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    className="bg-black/40 border-[#5a6b3f] text-white min-h-32"
                    placeholder="Please describe your motivation..."
                  />
                </div>

                {/* Previous Courses */}
                <div>
                  <Label className="text-white mb-4 block">
                    Have you previously attended any of our CIMIC Courses?
                  </Label>
                  <div className="space-y-3">
                    {previousCourses.map((courseName, index) => (
                      <motion.div 
                        key={courseName}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-black/40 border border-[#5a6b3f]/50 rounded-lg p-3 hover:border-[#f7941d]/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <MilitaryCheckbox
                            id={courseName}
                            checked={selectedPreviousCourses.includes(courseName)}
                            onCheckedChange={() => handlePreviousCourseToggle(courseName)}
                            variant="green"
                          />
                          <Label htmlFor={courseName} className="text-white cursor-pointer text-sm flex-1">
                            {courseName}
                          </Label>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#f7941d] to-[#e88a1d] hover:from-[#e88a1d] hover:to-[#f7941d] text-white border-0 py-6 text-lg"
                  >
                    <span className="font-mono uppercase tracking-wider">Submit Registration</span>
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowRegistration(false)}
                    variant="outline"
                    className="bg-black/40 border-[#5a6b3f] text-white hover:bg-black/60 py-6"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

