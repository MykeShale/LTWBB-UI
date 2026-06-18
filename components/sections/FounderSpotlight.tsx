'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

const FounderSpotlight = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('founder-spotlight');
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
    <section id="founder-spotlight" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Visual */}
          <div className={`relative transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Main Frame */}
            <div 
              className="relative rounded-[16px] overflow-hidden shadow-2xl"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(135deg, var(--color-brand-navy) 0%, var(--color-brand-royal) 100%)'
              }}
            >
              {/* Founder Photo */}
              <img 
                src="/images/nivishe.jpg" 
                alt="Rhoda Kavutha Mwongela - Founder & CEO of LTWBB"
                className="w-full h-full object-cover"
              />

              {/* SVG Grain Overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-[3%]">
                <filter id="grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
              </svg>
            </div>

            {/* Accent Top-Right */}
            <div 
              className="absolute top-5 right-5 w-20 h-20 border-2 border-[var(--color-brand-light)] rounded-lg"
              style={{ transform: 'translate(20px, -20px)' }}
            />

            {/* Accent Bottom-Left */}
            <div 
              className="absolute bottom-10 left-0 h-[100px] bg-[var(--color-brand-royal)] rounded"
              style={{ 
                width: '100px',
                transform: 'translateX(-30px)'
              }}
            />

            {/* Award Strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(44,62,140,0.92)] backdrop-blur-sm p-3 sm:p-4">
              <div className="flex justify-center space-x-2 sm:space-x-3">
                <Badge className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-2 sm:px-3 py-1 text-[10px] sm:text-xs">
                  Activist 2022
                </Badge>
                <Badge className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-2 sm:px-3 py-1 text-[10px] sm:text-xs">
                  Young Advocate 2026
                </Badge>
                <Badge className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-2 sm:px-3 py-1 text-[10px] sm:text-xs">
                  Nivishe Certified
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Eyebrow */}
            <div className="font-mono text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase text-[var(--color-brand-royal)]">
              MEET THE FOUNDER
            </div>

            {/* Name */}
            <h2 
              className="text-[var(--color-brand-navy)]"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 6vw, 52px)',
                lineHeight: '1.2'
              }}
            >
              Rhoda Kavutha Mwongela
            </h2>

            {/* AKA */}
            <div 
              className="italic text-[var(--color-brand-navy-light)]"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 4vw, 24px)'
              }}
            >
              "Bossbaby"
            </div>

            {/* Bio 1 */}
            <p 
              className="text-[var(--color-brand-text-dark)] leading-relaxed text-sm sm:text-base"
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                lineHeight: '1.7'
              }}
            >
              Rhoda founded LTWBB at 21 as a university student navigating her own
              mental health journey. What began as peer conversations became Kenya's
              most personal and impactful mental health CBO.
            </p>

            {/* Bio 2 */}
            <p 
              className="text-[var(--color-brand-text-dark)] leading-relaxed text-sm sm:text-base"
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                lineHeight: '1.7'
              }}
            >
              Today she leads LTWBB while serving as Private Secretary to the Deputy
              Governor of Murang'a County -bridging grassroots advocacy with institutional
              policy. She is proof that one conversation can change a life.
            </p>

            {/* Pull Quote */}
            <div className="border-l-4 border-[var(--color-brand-royal)] bg-[var(--color-brand-light)] p-4 sm:p-6 rounded-r-lg">
              <blockquote 
                className="italic text-[var(--color-brand-navy)]"
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  lineHeight: '1.6'
                }}
              >
                "Mental health is not a luxury. It is not a weakness. It is a human right -
                and I will not stop until every Kenyan knows that."
              </blockquote>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;
