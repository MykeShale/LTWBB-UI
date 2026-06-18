'use client';

import { Button } from '@/components/ui/button';

const PartnershipSection = () => {
  const sectors = [
    { icon: '🏛️', name: 'County Government' },
    { icon: '🏥', name: 'Hospitals & Clinics' },
    { icon: '🎓', name: 'Universities' },
    { icon: '🏫', name: 'Schools' },
    { icon: '🌍', name: 'NGOs & INGOs' },
    { icon: '🏢', name: 'Corporates' }
  ];

  const processSteps = [
    'Submit Enquiry',
    'Discovery Call', 
    'Custom Proposal',
    'Agreement',
    'Delivery + Impact'
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-royal)]">
      <div className="max-w-[800px] mx-auto px-[60px] text-center">
        <h2 
          className="text-white mb-6"
          style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 40px)',
            lineHeight: '1.2'
          }}
        >
          Is Your Organisation Ready to Prioritise Mental Health?
        </h2>
        <p 
          className="text-white/80 mb-16"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            lineHeight: '1.7'
          }}
        >
          LTWBB partners with county governments, NGOs, schools, hospitals, and corporates.
        </p>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-[16px] hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{sector.icon}</div>
              <div 
                className="text-white font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {sector.name}
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="bg-white/20 text-white px-4 py-2 rounded-[8px] font-mono text-sm font-bold"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                0{index + 1}
              </div>
              <span className="text-white/60 mx-2">→</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-[var(--color-brand-light)] hover:bg-white text-[var(--color-brand-navy)] px-8 py-3 rounded-[8px] font-medium transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <a href="/contact?subject=Partnership">
              Request a Partnership Proposal →
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-brand-royal)] px-6 py-3 rounded-[8px] font-medium transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <a href="#resources">
              Download Programme Brochure ↓
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
