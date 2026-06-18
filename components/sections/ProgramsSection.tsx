'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  TreePine, 
  GraduationCap, 
  Shield, 
  Heart, 
  Building, 
  UserCheck, 
  Home,
  Calendar,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'youth', label: 'Youth Programs' },
    { id: 'therapy', label: 'Therapy & Support' },
    { id: 'community', label: 'Community' },
    { id: 'institutional', label: 'Institutions' }
  ];

  const programs = [
    {
      id: 1,
      title: 'Mental Wealth Ambassadors',
      description: 'Youth leadership program training mental health advocates in communities and schools.',
      category: 'youth',
      image: '/images/ambassador.jpg',
      features: [
        'Leadership training',
        'Peer support skills',
        'Community outreach',
        'Mental health education'
      ],
      impact: '500+ youth trained',
      color: 'from-brand-royal to-brand-light',
      cta: 'Become Ambassador'
    },
    {
      id: 2,
      title: 'Weekly Support Sessions',
      description: 'Safe space group discussions facilitated by mental health professionals.',
      category: 'therapy',
      icon: <Heart className="w-6 h-6" />,
      features: [
        'Wednesday sessions',
        'Saturday meetings',
        'Professional facilitation',
        'Confidential environment'
      ],
      impact: '2000+ participants',
      color: 'from-brand-navy to-brand-royal',
      cta: 'Join Session'
    },
    {
      id: 3,
      title: 'Tree Therapy',
      description: 'Innovative nature-based mental wellness combining environmental conservation with healing.',
      category: 'community',
      icon: <TreePine className="w-6 h-6" />,
      features: [
        'Nature walks',
        'Tree planting',
        'Ecotherapy techniques',
        'Environmental mindfulness'
      ],
      impact: '10,000+ trees planted',
      color: 'from-brand-green-safe to-green-600',
      cta: 'Experience Tree Therapy'
    },
    {
      id: 4,
      title: 'Green Schools Program',
      description: 'Mental health education and support systems integrated into school curricula.',
      category: 'youth',
      icon: <GraduationCap className="w-6 h-6" />,
      features: [
        'Teacher training',
        'Student counseling',
        'Mental health clubs',
        'Parent workshops'
      ],
      impact: '50+ schools reached',
      color: 'from-brand-gold to-yellow-600',
      cta: 'Bring to Your School'
    },
    {
      id: 5,
      title: 'Suicide Prevention Campaigns',
      description: 'Life-saving outreach programs and crisis intervention training.',
      category: 'therapy',
      icon: <Shield className="w-6 h-6" />,
      features: [
        'Crisis hotlines',
        'Community training',
        'Awareness campaigns',
        'Emergency response'
      ],
      impact: '500+ lives saved',
      color: 'from-brand-crisis to-red-600',
      cta: 'Get Help Now'
    },
    {
      id: 6,
      title: 'CBT Sessions',
      description: 'Professional Cognitive Behavioral Therapy for individuals and groups.',
      category: 'therapy',
      icon: <Brain className="w-6 h-6" />,
      features: [
        'One-on-one therapy',
        'Group CBT',
        'Evidence-based techniques',
        'Affordable rates'
      ],
      impact: '1000+ therapy hours',
      color: 'from-brand-navy-dark to-brand-navy',
      cta: 'Book Session'
    },
    {
      id: 7,
      title: 'Men\'s Mental Health',
      description: 'Breaking stigma and creating safe spaces for men to discuss mental health.',
      category: 'community',
      icon: <UserCheck className="w-6 h-6" />,
      features: [
        'Men-only groups',
        'Workplace programs',
        'Sports integration',
        'Mentorship'
      ],
      impact: '800+ men supported',
      color: 'from-brand-gray to-gray-700',
      cta: 'Join Men\'s Circle'
    },
    {
      id: 8,
      title: 'Workplace Wellness',
      description: 'Corporate mental health programs and employee wellbeing initiatives.',
      category: 'institutional',
      icon: <Building className="w-6 h-6" />,
      features: [
        'Employee training',
        'Wellness assessments',
        'Stress management',
        'Productivity programs'
      ],
      impact: '30+ companies served',
      color: 'from-brand-royal-dark to-brand-royal',
      cta: 'Partner With Us'
    },
    {
      id: 9,
      title: 'Youth Champions Program',
      description: 'Empowering young leaders to become mental health advocates in their communities.',
      category: 'youth',
      icon: <Users className="w-6 h-6" />,
      features: [
        'Leadership skills',
        'Advocacy training',
        'Project management',
        'Community impact'
      ],
      impact: '200+ youth champions',
      color: 'from-brand-light to-brand-royal',
      cta: 'Become Champion'
    },
    {
      id: 10,
      title: 'GBV & Mental Health Linkage',
      description: 'Integrated support for gender-based violence survivors with mental health care.',
      category: 'therapy',
      icon: <Heart className="w-6 h-6" />,
      features: [
        'Trauma counseling',
        'Legal support linkage',
        'Safe housing referral',
        'Support groups'
      ],
      impact: '300+ survivors supported',
      color: 'from-brand-crisis-bg to-brand-crisis',
      cta: 'Get Support'
    }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-brand-light/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-brand-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-brand-royal/10 text-brand-royal border-brand-royal/20 px-3 sm:px-4 py-2 text-xs sm:text-sm">
            Our Programs
          </Badge>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Comprehensive Mental
            <br />
            <span className="text-brand-royal">Wellness Solutions</span>
          </h2>
          <p className="text-base sm:text-lg sm:text-xl text-brand-gray max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            From individual counseling to institutional partnerships, we offer evidence-based programs 
            designed to meet diverse mental health needs across Kenya.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 sm:px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === category.id
                  ? 'bg-brand-royal text-white shadow-lg'
                  : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {filteredPrograms.map((program) => (
            <Card 
              key={program.id}
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 ${
                expandedCard === program.id ? 'ring-2 ring-brand-royal scale-105' : ''
              } ${program.id === 1 ? 'min-h-[400px] sm:min-h-[450px]' : ''}`}
              onClick={() => setExpandedCard(expandedCard === program.id ? null : program.id)}
            >
              {/* Background - Clean image with minimal overlays */}
              {program.id === 1 && program.image ? (
                <div className="absolute inset-0">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Minimal gradient overlay - only at bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              )}
              
              <CardContent className={`relative p-6 sm:p-8 lg:p-10 h-full flex flex-col ${program.id === 1 ? 'justify-between' : ''}`}>
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                  {/* Regular content for other cards */}
                  {program.id !== 1 && (
                    <>
                      {/* Icon and Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 rotate-0 group-hover:rotate-6 transition-all duration-300`}>
                          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                            {program.icon}
                          </div>
                        </div>
                        <Badge 
                          variant="secondary"
                          className="bg-white/90 text-brand-navy border-0 text-xs font-medium"
                        >
                          {program.impact}
                        </Badge>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">
                        {program.title}
                      </h3>
                      
                      <p className="text-brand-dark leading-relaxed mb-6 text-base">
                        {program.description}
                      </p>

                      {/* Features - Show on Expand */}
                      <div className={`space-y-2 mb-6 overflow-hidden transition-all duration-500 ${
                        expandedCard === program.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-brand-gray">
                            <ChevronRight className="w-4 h-4 text-brand-royal mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Mental Wealth Ambassadors - Empty top area to show image */}
                  {program.id === 1 && (
                    <div className="flex-1 flex items-center justify-center">
                      {/* Optional: Add a subtle icon or element here if needed */}
                    </div>
                  )}
                </div>

                {/* Bottom Section with Title and Hover Content */}
                <div className="relative">
                  {/* Title for Mental Wealth Ambassadors - At bottom with dark background */}
                  {program.id === 1 && (
                    <div className="text-center space-y-3 mb-4">
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-light to-transparent mx-auto rounded-full opacity-80" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl tracking-tight group-hover:text-brand-light transition-all duration-500">
                        {program.title}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-light to-transparent mx-auto rounded-full opacity-80" />
                    </div>
                  )}

                  {/* Compact Hover Content - Slides up from bottom */}
                  {program.id === 1 && (
                    <div className="absolute bottom-full left-0 right-0 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      <div className="bg-black/90 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-2xl">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-white/95 flex items-center justify-center">
                              <Users className="w-4 h-4 text-brand-royal" />
                            </div>
                            <Badge className="bg-white/95 text-brand-navy border-0 text-xs font-semibold">
                              {program.impact}
                            </Badge>
                          </div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                        </div>
                        
                        <p className="text-white text-sm leading-relaxed mb-3 line-clamp-2">
                          {program.description}
                        </p>

                        {/* Compact Features */}
                        <div className="flex flex-wrap gap-2">
                          {program.features.slice(0, 3).map((feature, index) => (
                            <span 
                              key={index} 
                              className="text-xs text-white/90 bg-white/15 rounded-full px-2 py-1 border border-white/25"
                            >
                              {feature}
                            </span>
                          ))}
                          {program.features.length > 3 && (
                            <span className="text-xs text-brand-light">
                              +{program.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <Button
                      asChild
                      className={`relative overflow-hidden bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-500 text-sm sm:text-base transform hover:scale-105 group ${
                        program.id === 1 ? 'w-full justify-center' : ''
                      }`}
                      size="sm"
                    >
                      <Link href={`/programs/${program.id}`}>
                        <span className="relative z-10">{program.cta}</span>
                        {/* Button shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </Link>
                    </Button>
                    
                    {program.id !== 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-brand-royal hover:text-brand-navy hover:bg-brand-royal/10 p-3 rounded-xl transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(expandedCard === program.id ? null : program.id);
                        }}
                      >
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          expandedCard === program.id ? 'rotate-90' : ''
                        }`} />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-royal rounded-2xl p-12 text-white text-center">
          <h3 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're seeking personal support, want to join our programs, or represent an institution, 
            we have the right mental wellness solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-navy hover:bg-brand-light hover:text-brand-light px-8 py-4 rounded-lg font-semibold"
            >
              <Link href="/support">
                Get Personal Support
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-brand-navy hover:bg-white hover:text-brand-navy px-8 py-4 rounded-lg font-medium"
            >
              <Link href="/contact?subject=Partnership">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Program Statistics */}
        {/* <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-royal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              10+
            </div>
            <div className="font-semibold text-brand-navy mb-1">Active Programs</div>
            <div className="text-sm text-brand-gray">Across different categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-royal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              50,000+
            </div>
            <div className="font-semibold text-brand-navy mb-1">People Impacted</div>
            <div className="text-sm text-brand-gray">Through our programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-royal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              15+
            </div>
            <div className="font-semibold text-brand-navy mb-1">Counties Reached</div>
            <div className="text-sm text-brand-gray">Across Kenya</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-royal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              95%
            </div>
            <div className="font-semibold text-brand-navy mb-1">Satisfaction Rate</div>
            <div className="text-sm text-brand-gray">From program participants</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramsSection;
