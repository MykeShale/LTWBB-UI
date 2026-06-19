'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Users,
  TreePine,
  GraduationCap,
  Shield,
  Heart,
  Building,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const ProgramsSection = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const programs = [
    {
      id: 1,
      title: 'Mental Wealth Ambassadors',
      description: 'Youth leadership program training mental health advocates in communities and schools.',
      category: 'youth',
      icon: Users,
      image: '/images/team/ambassador.jpg',
      impact: '500+ youth trained',
      cta: 'Become an Ambassador',
    },
    {
      id: 2,
      title: 'Weekly Support Sessions',
      description: 'Safe space group discussions facilitated by mental health professionals, every Wednesday and Saturday.',
      category: 'therapy',
      icon: Heart,
      image: '/images/team/webinars.jpg',
      impact: '2,000+ participants',
      cta: 'Join a Session',
    },
    {
      id: 3,
      title: 'Tree Therapy',
      description: 'Nature-based mental wellness combining environmental conservation with healing.',
      category: 'community',
      icon: TreePine,
      image: null,
      impact: '10,000+ trees planted',
      cta: 'Experience Tree Therapy',
    },
    {
      id: 4,
      title: 'Green Schools Program',
      description: 'Mental health education and support systems integrated into school curricula.',
      category: 'youth',
      icon: GraduationCap,
      image: null,
      impact: '50+ schools reached',
      cta: 'Bring to Your School',
    },
    {
      id: 5,
      title: 'Suicide Prevention Campaigns',
      description: 'Outreach programs, crisis-intervention training, and community awareness work.',
      category: 'therapy',
      icon: Shield,
      image: null,
      impact: '500+ lives reached directly',
      cta: 'Learn More',
    },
    {
      id: 6,
      title: 'CBT Sessions',
      description: 'Professional Cognitive Behavioral Therapy for individuals and groups.',
      category: 'therapy',
      icon: Brain,
      image: null,
      impact: '1,000+ therapy hours',
      cta: 'Book a Session',
    },
    {
      id: 7,
      title: "Men's Mental Health",
      description: 'Breaking stigma and creating safe spaces for men to discuss mental health.',
      category: 'community',
      icon: UserCheck,
      image: null,
      impact: '800+ men supported',
      cta: "Join the Men's Circle",
    },
    {
      id: 8,
      title: 'Workplace Wellness',
      description: 'Corporate mental health programs and employee wellbeing initiatives.',
      category: 'institutional',
      icon: Building,
      image: null,
      impact: '30+ institutions served',
      cta: 'Partner With Us',
    },
    {
      id: 9,
      title: 'Youth Champions Program',
      description: 'Empowering young leaders to become mental health advocates in their communities.',
      category: 'youth',
      icon: Users,
      image: null,
      impact: '200+ youth champions',
      cta: 'Become a Champion',
    },
    {
      id: 10,
      title: 'GBV & Mental Health Linkage',
      description: 'Integrated support for gender-based violence survivors, with trauma counseling and referrals.',
      category: 'therapy',
      icon: Heart,
      image: null,
      impact: '300+ survivors supported',
      cta: 'Get Support',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-brand-navy-dark overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div
            className="font-mono text-[10px] sm:text-[11px] tracking-[3px] uppercase text-[var(--color-brand-light)] mb-4"
          >
            Our Programs
          </div>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: '1.15',
            }}
          >
            Mental Wellness for{' '}
            <span className="italic text-[var(--color-brand-light)]">Everyone</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Ten active programs across mental health, schools, and institutions — here are six to start with.
          </p>
        </div>

        {/* Programs Grid (preview: first 6, full catalog lives on /programs) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {programs.slice(0, 6).map((program) => {
            const Icon = program.icon;
            const isOpen = openCard === program.id;
            return (
              <div
                key={program.id}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer focus-within:ring-2 focus-within:ring-[var(--color-brand-light)]"
                onClick={() => setOpenCard(isOpen ? null : program.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenCard(isOpen ? null : program.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
              >
                {/* Background: real photo if we have one, else a consistent branded duotone */}
                {program.image ? (
                  <img
                    src={program.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(150deg, var(--color-brand-navy) 0%, var(--color-brand-royal-dark) 100%)' }}
                  />
                )}

                {/* Scrim: always present for legibility, deepens on open/hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'
                  }`}
                />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Default caption: title + impact, always visible */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-transform duration-300 ${
                    isOpen ? '-translate-y-1' : ''
                  }`}
                >
                  <h3
                    className="text-white text-lg sm:text-xl font-semibold mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {program.title}
                  </h3>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-brand-light)]">
                    {program.impact}
                  </div>

                  {/* Detail panel: opens on hover (desktop) or tap (any device) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="text-white/80 text-sm leading-relaxed mt-3 mb-4"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {program.description}
                      </p>
                      <Link
                        href="/programs"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[var(--color-brand-light)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {program.cta}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/25 text-white hover:bg-white hover:text-brand-navy-dark px-8 py-4 rounded-lg font-medium"
          >
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>

        {/* Call to Action Band */}
        <div className="bg-brand-royal rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            Ready to start your journey?
          </h3>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto text-base sm:text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Whether you&apos;re seeking personal support, want to join our programs, or represent an institution,
            we have the right mental wellness solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-royal hover:bg-brand-navy-mist px-8 py-4 rounded-lg font-semibold"
            >
              <Link href="/support">Get Personal Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-royal px-8 py-4 rounded-lg font-medium"
            >
              <Link href="/contact?subject=Partnership">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
