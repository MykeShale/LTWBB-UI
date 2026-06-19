'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Users } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Primary Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-royal" />

        {/* Subtle Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Diagonal accent wash, right half */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-1/2"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, rgba(26,115,232,0.15) 100%)',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-screen py-28 lg:py-0">
          
          {/* Left Column - Content */}
          <div 
            className={`space-y-4 transition-all duration-1200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-6 sm:w-8 h-0.5 bg-brand-royal" />
              <div 
                className="font-body text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-brand-royal uppercase font-semibold"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Kenya's Mental Wellness Leader · Since 2021
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-white leading-tight font-bold"
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 8vw, 88px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              Your Voice,
              <br />
              Your Power
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/75 leading-relaxed max-w-full sm:max-w-[480px] text-base sm:text-lg"
              style={{
                fontFamily: 'var(--font-body)',
                lineHeight: '1.7'
              }}
            >
              LTWBB creates safe spaces where conversations heal — for individuals,
              communities, governments, and institutions across Kenya and beyond.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                asChild
                className="bg-brand-royal hover:bg-brand-royal-dark text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Link href="/support">
                  Get Support Today
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-brand-navy px-4 sm:px-6 py-4 sm:py-6 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Link href="/programs">
                  Partner With LTWBB
                </Link>
              </Button>
            </div>

            {/* Crisis line */}
            <div className="pt-5 mt-2 border-t border-white/15 max-w-full sm:max-w-[480px]">
              <p
                className="text-xs text-white/55"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                In crisis? Call Befrienders Kenya free: <a href="tel:0800723253" className="text-white/80 underline underline-offset-2 hover:text-white">0800 723 253</a> · 24/7
              </p>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last pt-10 lg:pt-0">
            <div className="relative">
              {/* Founder Image Frame */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  aspectRatio: '3/4',
                  background: 'linear-gradient(135deg, rgba(26,115,232,0.1) 0%, rgba(44,62,140,0.1) 100%)'
                }}
              >
                {/* Founder Photo */}
                <img
                  src="/images/team/rhoda.jpg"
                  alt="Rhoda Kavutha Mwongela, Founder and CEO of LTWBB, facilitating a community mental health conversation"
                  className="w-full h-full object-cover"
                />

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6">
                  <div className="text-white">
                    <div
                      className="font-semibold text-xl mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Rhoda Kavutha Mwongela
                    </div>
                    <div
                      className="text-sm text-white/85 font-medium"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Bossbaby · Founder &amp; CEO
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-[var(--color-brand-light)] rounded-xl shadow-lg px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-brand-navy flex-shrink-0" />
                <span
                  className="text-brand-navy text-xs sm:text-[13px] font-semibold whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Activist of the Year 2022
                </span>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-[var(--color-brand-light)] rounded-xl shadow-lg px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-brand-navy flex-shrink-0" />
                <span
                  className="text-brand-navy text-xs sm:text-[13px] font-semibold whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Young Advocate Award 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
