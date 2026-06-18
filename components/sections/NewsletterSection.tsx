'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-[var(--color-brand-light)]">
      <div className="max-w-[600px] mx-auto px-[60px] text-center">
        <h2 
          className="text-[var(--color-brand-navy)] mb-6"
          style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 40px)',
            lineHeight: '1.2'
          }}
        >
          Mental Health, Delivered Monthly
        </h2>
        <p 
          className="text-[var(--color-brand-text-dark)] mb-8"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            lineHeight: '1.7'
          }}
        >
          Tips, program updates, and stories of hope. No spam. Unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-[var(--color-brand-border)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-royal)] focus:border-transparent"
            style={{ fontFamily: 'var(--font-body)' }}
          />
          <Button
            type="submit"
            className="bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy-dark)] text-white px-6 py-3 rounded-[8px] font-medium transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Subscribe →
          </Button>
        </form>

        <p 
          className="text-[var(--color-brand-text-muted)] text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Join 2,000+ community members · Kenya Data Protection Act compliant
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
