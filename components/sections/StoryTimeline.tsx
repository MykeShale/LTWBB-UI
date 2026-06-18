'use client';

import { useState, useEffect } from 'react';

const StoryTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  const milestones = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'Founded November 2021 at Murang\'a University of Technology. Rhoda, then 21, turned peer counseling into structured advocacy. "Bossbaby" -authority and accessibility in one brand.'
    },
    {
      year: '2022',
      title: 'First Recognition',
      description: 'Activist of the Year 2022. First awareness walks in Murang\'a County. Campus programs expand.'
    },
    {
      year: '2023',
      title: 'Building the Foundation',
      description: '570+ cases documented while still a full-time student. Nivishe Foundation 12-week fellowship. Tree Therapy and Counseling in Nature programs launch.'
    },
    {
      year: '2024',
      title: 'Official Registration',
      description: 'LTWBB formally registered as a CBO. Green Schools Program launches (15 schools). 2,000+ cumulative cases supported.'
    },
    {
      year: '2025',
      title: 'Governance & Scale',
      description: 'Appointed Private Secretary to the Deputy Governor of Murang\'a County at age 24. Joins Murang\'a County Gender Technical Working Group. Civil Servants Program expands.'
    },
    {
      year: '2026',
      title: 'National Recognition & Global Vision',
      description: 'Young Advocate for Mental Wellness 2026. 20,000+ youth reached. International partnerships initiated. The movement that began as one conversation is shaping Kenya\'s mental health policy.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('story-timeline');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="story-timeline" className="py-24 bg-[var(--color-brand-ice)]">
      <div className="max-w-[900px] mx-auto px-[60px]">
        <h2 
          className="text-center text-[var(--color-brand-navy)] mb-20"
          style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            lineHeight: '1.2'
          }}
        >
          From a Conversation to a <span className="italic text-[var(--color-brand-light)]">Movement</span>
        </h2>

        <div className="relative">
          {/* Connector Line */}
          <div 
            className="absolute left-20 top-0 bottom-0 w-[1px]"
            style={{
              background: 'linear-gradient(to bottom, var(--color-brand-navy-mist) 0%, transparent 100%)'
            }}
          />

          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year}
              className="relative flex items-start mb-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${0.1 * index}s`
              }}
            >
              {/* Year Column */}
              <div className="w-20 pr-4 text-right">
                <div 
                  className="font-mono text-[13px] text-[var(--color-brand-royal)] font-bold"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {milestone.year}
                </div>
              </div>

              {/* Dot */}
              <div 
                className="absolute left-20 w-4 h-4 bg-[var(--color-brand-royal)] border-2 border-white rounded-full shadow-lg"
                style={{ transform: 'translateX(-50%)' }}
              />

              {/* Content */}
              <div className="ml-8 flex-1">
                <h3 
                  className="text-[var(--color-brand-navy)] mb-3"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    lineHeight: '1.3'
                  }}
                >
                  {milestone.title}
                </h3>
                <p 
                  className="text-[var(--color-brand-text-light)] leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    lineHeight: '1.7'
                  }}
                >
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
