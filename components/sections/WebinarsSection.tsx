'use client';

import { Button } from '@/components/ui/button';

const WebinarsSection = () => {
  return (
    <section className="py-24 bg-[var(--color-brand-navy-dark)]">
      <div className="max-w-[1400px] mx-auto px-[60px]">
        <div className="text-center mb-16">
          <h2 
            className="text-white mb-6"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 40px)',
              lineHeight: '1.2'
            }}
          >
            Join Our <span className="italic text-[var(--color-brand-light)]">Weekly</span> Mental Health Webinars
          </h2>
          <p 
            className="text-white/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '1.7'
            }}
          >
            Every Wednesday & Saturday · Open to all · Free · No registration required
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-12">
          {/* Wednesday Card */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-8 relative overflow-hidden group hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300">
            {/* Ghost WED Text */}
            <div 
              className="absolute top-4 right-4 text-[rgba(255,255,255,0.06)] font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '80px',
                lineHeight: '1'
              }}
            >
              WED
            </div>

            {/* Badge */}
            <div className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-3 py-1 text-sm font-medium rounded-full inline-block mb-4">
              Every Wednesday
            </div>

            {/* Title */}
            <h3 
              className="text-white mb-4"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '36px',
                lineHeight: '1.2'
              }}
            >
              Open Wellness Conversations
            </h3>

            {/* Time */}
            <p 
              className="text-white/80 mb-6"
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            >
              📅 Every Wednesday · 6:00 PM EAT · Live Video
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {['Expert-hosted', 'Anonymous participation', 'Interactive Q&A', 'Recorded'].map((feature, index) => (
                <div key={index} className="flex items-center text-white/70 text-sm">
                  ✓ {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              className="bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)] text-white px-6 py-3 rounded-[8px] font-medium transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <a href="#webinars">
                Register Free →
              </a>
            </Button>
          </div>

          {/* Saturday Card */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-8 relative overflow-hidden group hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300">
            {/* Ghost SAT Text */}
            <div 
              className="absolute top-4 right-4 text-[rgba(255,255,255,0.06)] font-bold"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '80px',
                lineHeight: '1'
              }}
            >
              SAT
            </div>

            {/* Badge */}
            <div className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-3 py-1 text-sm font-medium rounded-full inline-block mb-4">
              Every Saturday
            </div>

            {/* Title */}
            <h3 
              className="text-white mb-4"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '36px',
                lineHeight: '1.2'
              }}
            >
              Themed Deep-Dive Sessions
            </h3>

            {/* Time */}
            <p 
              className="text-white/80 mb-6"
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            >
              📅 Every Saturday · 10:00 AM EAT · Live Video + Q&A
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {['Guest facilitators', 'English & Swahili', 'Free always', 'Open to all'].map((feature, index) => (
                <div key={index} className="flex items-center text-white/70 text-sm">
                  ✓ {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              className="bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)] text-white px-6 py-3 rounded-[8px] font-medium transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <a href="#webinars">
                Register Free →
              </a>
            </Button>
          </div>
        </div>

        {/* Institutional CTA Bar */}
        <div className="bg-[rgba(255,255,255,0.04)] rounded-[16px] p-8 text-center">
          <p 
            className="text-white/80"
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '1.6'
            }}
          >
            Running an Organisation?{' '}
            <a 
              href="/contact?subject=Private Webinar"
              className="text-[var(--color-brand-light)] hover:text-white underline transition-colors duration-300"
            >
              Book a private webinar for your team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebinarsSection;
