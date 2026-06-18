'use client';

const DonateSection = () => {
  return (
    <section className="py-24 bg-[var(--color-brand-light)] relative overflow-hidden">
      {/* Radial Gradient Glow */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-royal) 0%, transparent 70%)',
          transform: 'translate(50%, -50%)'
        }}
      />

      <div className="max-w-[1000px] mx-auto px-[60px] relative">
        <div className="text-center">
          <h2 
            className="text-[var(--color-brand-navy)] mb-6"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: '1.2'
            }}
          >
            Every Shilling <span className="italic text-[var(--color-brand-light)]">Saves a Life</span>
          </h2>
          <p 
            className="text-[var(--color-brand-text-dark)] max-w-3xl mx-auto mb-16"
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '1.7'
            }}
          >
            Your support funds outreach programs, therapy linkages, safe spaces,
            and mental wellness advocacy across Kenya.
          </p>

          {/* M-Pesa Display */}
          <div className="bg-[var(--color-brand-navy)] p-8 rounded-[16px] inline-block relative mb-12 max-w-md mx-auto">
            {/* Pseudo-element Border Offset */}
            <div 
              className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[var(--color-brand-light)] rounded-[16px] -z-10"
              style={{ transform: 'translate(8px, 8px)' }}
            />

            {/* Label */}
            <div 
              className="font-mono text-[11px] text-[var(--color-brand-navy-mist)] uppercase tracking-wide mb-2"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              M-PESA TILL NUMBER
            </div>

            {/* Number */}
            <div 
              className="font-mono text-[var(--color-brand-royal)] font-bold mb-2"
              style={{ 
                fontFamily: 'var(--font-mono)',
                fontSize: '52px',
                letterSpacing: '4px',
                lineHeight: '1'
              }}
            >
              9721411
            </div>

            {/* Sub-label */}
            <div 
              className="text-white text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Let's Talk with Bossbaby CBO
            </div>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-wrap justify-center gap-8 text-left max-w-2xl mx-auto">
            {[
              'Support outreach programs',
              'Fund therapy referrals',
              'Strengthen safe spaces',
              'Train Wellness Ambassadors'
            ].map((point, index) => (
              <div 
                key={index}
                className="flex items-center text-[var(--color-brand-text-dark)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="text-[var(--color-brand-royal)] mr-2 font-bold">→</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
