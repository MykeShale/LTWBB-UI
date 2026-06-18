'use client';

import { Button } from '@/components/ui/button';

const ResourcesPreview = () => {
  const articles = [
    {
      id: '001',
      tag: 'ANXIETY',
      title: 'Understanding Anxiety Disorders: A Kenya Guide',
      meta: '5 min · EN/SW'
    },
    {
      id: '002',
      tag: 'MEN\'S HEALTH',
      title: 'Why Kenyan Men Don\'t Talk About Mental Health',
      meta: '6 min · EN'
    },
    {
      id: '003',
      tag: 'WORKPLACE',
      title: 'Burnout in Public Service: What Civil Servants Need',
      meta: '7 min · EN'
    },
    {
      id: '004',
      tag: 'YOUTH',
      title: 'Campus Mental Health: What Kenyan Students Need to Know',
      meta: '5 min · EN/SW'
    },
    {
      id: '005',
      tag: 'DEPRESSION',
      title: 'Signs of Depression and When to Seek Help',
      meta: '6 min · EN/SW'
    },
    {
      id: '006',
      tag: 'NATURE',
      title: 'How Tree Therapy Works: The Science Behind Nature Healing',
      meta: '4 min · EN'
    },
    {
      id: '007',
      tag: 'FAMILY',
      title: 'Healthy Communication: Building Emotional Safety at Home',
      meta: '5 min · EN'
    },
    {
      id: '008',
      tag: 'TRAUMA',
      title: 'Family Mental Health After Trauma',
      meta: '6 min · EN/SW'
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-ice)]">
      <div className="max-w-[1400px] mx-auto px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left - Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-12">
              <div className="font-mono text-[11px] tracking-[3px] uppercase text-[var(--color-brand-royal)] mb-4">
                MENTAL HEALTH LIBRARY
              </div>
              <h2 
                className="text-[var(--color-brand-navy)] mb-6"
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 5vw, 40px)',
                  lineHeight: '1.2'
                }}
              >
                Knowledge That <span className="italic text-[var(--color-brand-light)]">Heals</span>
              </h2>
              <p 
                className="text-[var(--color-brand-text-dark)] max-w-2xl"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  lineHeight: '1.7'
                }}
              >
                Free, Kenya-rooted mental health content in English and Swahili.
              </p>
            </div>

            {/* Article List */}
            <div className="space-y-4 mb-12">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className="group flex items-center space-x-4 p-4 border-b border-[var(--color-brand-border)] hover:bg-white hover:translate-x-3 transition-all duration-300 cursor-pointer rounded-lg"
                >
                  {/* Number */}
                  <div 
                    className="font-mono text-[var(--color-brand-royal)] font-bold"
                    style={{ 
                      fontFamily: 'var(--font-mono)',
                      fontSize: '16px',
                      minWidth: '60px'
                    }}
                  >
                    {article.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span 
                        className="bg-[var(--color-brand-light)] text-[var(--color-brand-navy)] px-2 py-1 text-[10px] font-medium"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {article.tag}
                      </span>
                      <span className="text-[var(--color-brand-text-muted)] text-sm">
                        {article.meta}
                      </span>
                    </div>
                    <h3 
                      className="text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-royal)] transition-colors duration-300"
                      style={{ 
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(18px, 3vw, 20px)',
                        lineHeight: '1.3'
                      }}
                    >
                      {article.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-royal)] transition-colors duration-300 transform group-hover:translate-x-2">
                    →
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              className="bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)] text-white px-8 py-3 rounded-[8px] font-medium transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <a href="/resources">
                Explore All Resources →
              </a>
            </Button>
          </div>

          {/* Right - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              
              {/* Crisis Support Widget */}
              <div className="bg-[var(--color-brand-navy)] p-6 rounded-[16px] text-white">
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    fontSize: '26px',
                    lineHeight: '1.2'
                  }}
                >
                  Need Help Right Now?
                </h3>
                <p 
                  className="mb-6 opacity-90"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    lineHeight: '1.6'
                  }}
                >
                  You are not alone. These helplines are free and available 24 hours a day.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    { name: 'Befrienders Kenya', number: '0800 723 253', desc: 'Free · 24/7 · Confidential' },
                    { name: 'National Mental Health', number: '1199', desc: '' },
                    { name: 'NACADA', number: '1192', desc: '' },
                    { name: 'National Child Helpline', number: '116', desc: 'Under 18 only' }
                  ].map((helpline, index) => (
                    <div 
                      key={index}
                      className="bg-[rgba(255,255,255,0.06)] p-3 rounded-lg"
                    >
                      <div className="font-medium text-sm mb-1">{helpline.name}</div>
                      <div className="font-mono text-lg">{helpline.number}</div>
                      {helpline.desc && (
                        <div className="text-xs opacity-70">{helpline.desc}</div>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <a href="https://wa.me/254714445791" target="_blank" rel="noopener noreferrer">
                    💬 Chat with LTWBB
                  </a>
                </Button>
              </div>

              {/* Free Downloads Widget */}
              <div className="bg-[var(--color-brand-navy)] p-6 rounded-[16px] text-white">
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    lineHeight: '1.2'
                  }}
                >
                  Free Downloads
                </h3>
                
                <div className="space-y-3">
                  {[
                    '📄 Self-Help Wellbeing Workbook ↓',
                    '📋 Programme Overview Brochure ↓',
                    '👔 Mental Health at Work: Manager\'s Guide ↓'
                  ].map((download, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block p-3 bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.12)] rounded-lg transition-colors duration-300 text-white"
                    >
                      {download}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
