'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1A1A2E]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - 60% on desktop */}
          <div className="lg:col-span-7 text-white space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Your Voice, Your Power
              <br />
              <span className="text-3xl lg:text-4xl xl:text-5xl font-light mt-4 block">
                You Don't Have to
                <br />
                Face It Alone.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl leading-relaxed max-w-2xl" style={{ color: 'rgba(214,228,255,0.90)' }}>
              Supporting individuals, institutions & communities across Kenya since 2021.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-[#1A73E8] hover:bg-[#1558B0] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  Get Support Today
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#E8A838] text-[#E8A838] hover:bg-[#E8A838] hover:text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact?subject=Partnership">
                  Partner →
                </Link>
              </Button>
            </div>
            
            {/* Crisis Helpline */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-lg font-medium mb-2">
                In crisis? Call free 24/7:
              </p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span className="text-xl font-semibold">
                  Befrienders Kenya: 0800 723 253
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Column - 40% on desktop */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/nivishe.jpg"
                  alt="Rhoda Mwongela - Mental Health Advocate"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Award Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#E8A838] to-[#D4941E] text-white p-4 rounded-lg shadow-lg max-w-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="font-bold text-sm leading-tight">
                        Top 10 Women in Mental Health 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievement Description */}
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white text-sm leading-relaxed">
                  Congratulations to Rhoda Mwongela for being selected as one of the Top 10 Women in Mental Health 2026. Through awareness, prevention, and peer support programs across colleges and universities, she continues to champion accessible mental health support for learners across Kenya.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
