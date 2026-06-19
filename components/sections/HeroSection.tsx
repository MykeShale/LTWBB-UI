'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Award, Heart } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    cases: 0,
    youth: 0,
    founded: 0,
    recognition: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const timer = setTimeout(() => {
      const animateValue = (start: number, end: number, duration: number, key: keyof typeof counters) => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(progress * (end - start) + start)
          }));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };

      animateValue(0, 8700, 2000, 'cases');
      animateValue(0, 20000, 2500, 'youth');
      animateValue(0, 2021, 1500, 'founded');
      animateValue(0, 100, 1800, 'recognition');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const trustMetrics = [
    {
      icon: Users,
      value: counters.cases.toLocaleString(),
      label: 'Cases Supported',
      suffix: '+'
    },
    {
      icon: Users,
      value: counters.youth.toLocaleString(),
      label: 'Youth Reached',
      suffix: '+'
    },
    {
      icon: Calendar,
      value: counters.founded,
      label: 'Founded',
      suffix: ''
    },
    {
      icon: Award,
      value: counters.recognition,
      label: 'National Recognition',
      suffix: '%'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Primary Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-royal" />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-royal/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
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
              className="text-white/80 leading-relaxed max-w-full sm:max-w-[500px] text-base sm:text-lg"
              style={{ 
                fontFamily: 'var(--font-body)',
                lineHeight: '1.7'
              }}
            >
              A modern digital safe space for mental wellness and community healing. 
              Join thousands finding hope, healing, and connection through conversations that save lives.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                asChild
                className="bg-brand-royal hover:bg-brand-royal-dark text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Link href="/support">
                  Get Mental Health Support
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-white/30 text-black hover:bg-white hover:text-brand-navy px-4 sm:px-6 py-4 sm:py-6 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Link href="/programs">
                  Join Weekly Sessions
                </Link>
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="pt-2">
              <Button
                asChild
                variant="ghost"
                className="text-white/70 hover:text-white font-medium transition-all duration-300 p-0 h-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Link href="/contact">
                  Book a Talk →
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Founder Image Frame */}
              <div 
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
                style={{
                  width: '100%',
                  maxWidth: '440px',
                  height: 'auto',
                  aspectRatio: '3/4',
                  background: 'linear-gradient(135deg, rgba(26,115,232,0.1) 0%, rgba(44,62,140,0.1) 100%)'
                }}
              >
                {/* Founder Photo */}
                <img 
                  src="/images/team/rhoda.jpg" 
                  alt="Rhoda Kavutha Mwongela - Founder & CEO of LTWBB"
                  className="w-full h-full object-cover"
                />

                {/* Glass Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                  <div className="text-white">
                    <div 
                      className="font-bold text-xl mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Rhoda Kavutha Mwongela
                    </div>
                    <div 
                      className="text-sm opacity-90 font-medium"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Bossbaby · Founder & CEO
                    </div>
                    <div 
                      className="text-xs opacity-70 mt-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      "Your Voice, Your Power"
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-3 sm:p-4 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-royal rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-xs sm:text-sm">National Impact</div>
                    <div className="text-xs text-brand-gray">Recognized Leader</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-3 sm:p-4 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-royal rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-xs sm:text-sm">8,700+ Lives</div>
                    <div className="text-xs text-brand-gray">Directly Supported</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div 
          className={`absolute bottom-4 left-0 right-0 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-[60px]">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 p-3 sm:p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {trustMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-royal/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <metric.icon className="w-3 h-3 sm:w-5 sm:h-5 text-brand-royal" />
                      </div>
                    </div>
                    <div 
                      className="font-bold text-lg sm:text-2xl text-white mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {metric.value}{metric.suffix}
                    </div>
                    <div 
                      className="text-xs sm:text-sm text-white/70 font-medium"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
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
