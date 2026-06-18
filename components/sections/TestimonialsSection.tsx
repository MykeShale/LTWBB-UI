'use client';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "LTWBB reached our campus and created a safe space none of us knew we needed. The conversations that followed changed our lives.",
      author: "University Student, Murang'a",
      program: "Youth Ambassadors Program"
    },
    {
      quote: "As a nurse, I was always caring for others. LTWBB's civil servants program reminded me that I need care too. It was a turning point.",
      author: "Healthcare Professional",
      program: "Civil Servants Program"
    },
    {
      quote: "Rhoda's sessions brought our department together around mental health for the first time. We now have a wellness structure in place.",
      author: "HR Manager",
      program: "County Government Partnership"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-light)]">
      <div className="max-w-[1400px] mx-auto px-[60px]">
        <h2 
          className="text-center text-[var(--color-brand-navy)] mb-16"
          style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 40px)',
            lineHeight: '1.2'
          }}
        >
          What Our <span className="italic text-[var(--color-brand-light)]">Community</span> Says
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[16px] relative shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Large Quote Mark */}
              <div 
                className="absolute top-4 right-6 text-[var(--color-brand-navy-mist)] opacity-30"
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  lineHeight: '1'
                }}
              >
                "
              </div>

              {/* Quote */}
              <blockquote 
                className="text-[var(--color-brand-navy)] italic mb-6 relative z-10"
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  lineHeight: '1.6'
                }}
              >
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="text-[var(--color-brand-text-light)] text-sm mb-3">
                {testimonial.author}
              </div>

              {/* Program Tag */}
              <div 
                className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-3 py-1 text-[9px] font-medium uppercase tracking-wide rounded-full inline-block"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {testimonial.program}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
