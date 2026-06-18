'use client';

import { Button } from '@/components/ui/button';

const CrisisBand = () => {
  const helplines = [
    {
      name: 'Befrienders Kenya',
      number: '0800 723 253',
      description: 'Free · 24/7',
      color: 'bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)]'
    },
    {
      name: 'Kenya Red Cross',
      number: '1199',
      description: 'Emergency',
      color: 'bg-white hover:bg-gray-100 text-[var(--color-brand-navy)]'
    },
    {
      name: 'NACADA',
      number: '1192',
      description: 'Substance Abuse',
      color: 'bg-white hover:bg-gray-100 text-[var(--color-brand-navy)]'
    },
    {
      name: 'Child Helpline',
      number: '116',
      description: 'Under 18 only',
      color: 'bg-white hover:bg-gray-100 text-[var(--color-brand-navy)]'
    }
  ];

  return (
    <section className="bg-[var(--color-brand-navy-dark)] border-t-2 border-[rgba(26,115,232,0.3)] py-16">
      <div className="max-w-[1400px] mx-auto px-[60px]">
        <div className="text-center mb-12">
          <h2 
            className="text-white mb-8"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 40px)',
              lineHeight: '1.2'
            }}
          >
            If you are in crisis right now, help is one call away.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helplines.map((helpline, index) => (
            <Button
              key={index}
              asChild
              className={`h-auto p-6 rounded-[16px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-left ${helpline.color}`}
            >
              <a 
                href={`tel:${helpline.number}`}
                className="block w-full"
                aria-label={`Call ${helpline.name} at ${helpline.number}`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <div 
                    className="font-semibold text-lg mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {helpline.name}
                  </div>
                  <div 
                    className="font-mono text-xl mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {helpline.number}
                  </div>
                  <div 
                    className="text-sm opacity-80"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {helpline.description}
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>

        <div className="text-center">
          <p 
            className="text-white/80"
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          >
            Or chat with us on WhatsApp:{' '}
            <a 
              href="https://wa.me/254714445791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-brand-royal)] hover:text-[var(--color-brand-royal-light)] underline font-medium transition-colors duration-300"
            >
              +254 714 445 791
            </a>
            {' '} (Mon–Sat, 8am–6pm)
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrisisBand;
