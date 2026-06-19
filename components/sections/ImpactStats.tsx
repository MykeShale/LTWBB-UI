'use client';

import { useState, useEffect, useRef } from 'react';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<string, number>>({
    cases: 0,
    youth: 0,
    yearOne: 0,
    programs: 0,
    years: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      key: 'cases',
      value: 2000,
      suffix: '+',
      label: 'Mental Health Cases Supported'
    },
    {
      key: 'youth',
      value: 20000,
      suffix: '+',
      label: 'Youth Reached'
    },
    {
      key: 'yearOne',
      value: 570,
      suffix: '+',
      label: 'Cases in First Year (2023)'
    },
    {
      key: 'programs',
      value: 7,
      suffix: '',
      label: 'Active Programs'
    },
    {
      key: 'years',
      value: 5,
      suffix: '+',
      label: 'Years of Active Advocacy'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames
      const increment: Record<string, number> = {};

      stats.forEach(stat => {
        increment[stat.key] = stat.value / steps;
      });

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newCounters: Record<string, number> = {};

        stats.forEach(stat => {
          const currentValue = Math.min(Math.floor(increment[stat.key] * currentStep), stat.value);
          newCounters[stat.key] = currentValue;
        });

        setCounters(newCounters);

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[var(--color-brand-light)] border-y border-[rgba(44,62,140,0.1)] py-12 sm:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.key}
              className="text-center group hover:bg-[var(--color-brand-royal-mist)] p-6 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <div 
                className="font-display text-[var(--color-brand-navy)] mb-2"
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: '1'
                }}
              >
                {counters[stat.key]}{stat.suffix}
              </div>
              <div 
                className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-brand-text-muted)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
