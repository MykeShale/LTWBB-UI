'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Calendar, Award, Users, Heart, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const AboutStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      year: '2021',
      title: 'The Spark',
      description: 'University conversations spark a movement',
      details: 'What began as informal mental health discussions at university quickly revealed a deeper need in the community.',
      quote: 'I realized I wasn\'t alone in my struggles, and neither were thousands of others.',
      type: 'beginning'
    },
    {
      year: '2022',
      title: 'Community Response',
      description: 'From personal healing to collective support',
      details: 'Weekly gatherings grew into structured support systems, with more people seeking safe spaces to share.',
      quote: 'Conversations became lifelines. Each story shared created ripples of healing.',
      type: 'growth'
    },
    {
      year: '2023',
      title: 'Program Evolution',
      description: 'Professionalizing mental wellness support',
      details: 'Developed evidence-based programs including Tree Therapy, Youth Ambassadors, and peer support systems.',
      quote: 'We needed to create something sustainable, something that could outlast any single person.',
      type: 'development'
    },
    {
      year: '2024',
      title: 'National Recognition',
      description: 'From local initiative to national impact',
      details: 'Official CBO registration opened doors for partnerships and scaling our reach across Kenya.',
      quote: 'This was never about me. It was about creating spaces where others could find their voice.',
      type: 'milestone'
    }
  ];

  const impactNumbers = [
    {
      value: '8,700+',
      label: 'Lives Directly Supported',
      description: 'Individual counseling and support sessions'
    },
    {
      value: '20,000+',
      label: 'Youth Reached',
      description: 'Through workshops, talks, and programs'
    },
    {
      value: '50+',
      label: 'Partner Institutions',
      description: 'Schools, universities, and organizations'
    },
    {
      value: '15+',
      label: 'Counties Impacted',
      description: 'Across Kenya with mental wellness programs'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Compassion First',
      description: 'Every conversation begins with empathy and understanding'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community-Driven',
      description: 'Our solutions come from the communities we serve'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Professional standards in everything we do'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-brand-light/20 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-[60px]">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Badge className="mb-4 bg-brand-royal/10 text-brand-royal border-brand-royal/20 px-4 py-2">
            Our Story
          </Badge>
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            From Personal Journey to
            <br />
            <span className="text-brand-royal">National Movement</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            The story of LTWBB is one of transformation-how personal pain became collective healing, 
            and how one conversation sparked thousands more.
          </p>
        </div>

        {/* Founder Story Section */}
        <div className={`grid lg:grid-cols-2 gap-16 mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left - Founder Image & Quote */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for founder image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy via-brand-royal to-brand-light flex items-center justify-center">
                <div className="text-white/30 text-center">
                  <div className="text-8xl mb-4">👤</div>
                  <p className="text-lg font-medium">Rhoda Kavutha Mwongela</p>
                  <p className="text-sm opacity-70">Founder & CEO</p>
                </div>
              </div>
              
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                <Quote className="w-8 h-8 text-brand-royal mb-3" />
                <blockquote className="text-white text-lg font-medium leading-relaxed">
                  "I discovered that my wounds could become windows-windows through which others could see 
                  they weren't alone, and through which healing could enter."
                </blockquote>
                <cite className="text-white/80 text-sm mt-3 block">
                  -Rhoda Kavutha Mwongela, Founder
                </cite>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-brand-light/50">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-brand-royal" />
                <div>
                  <div className="font-bold text-brand-navy text-sm">Mental Health Champion</div>
                  <div className="text-xs text-brand-gray">National Recognition 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Story Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 
                className="text-3xl font-bold text-brand-navy mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The Wounded Healer
              </h3>
              <p className="text-lg text-brand-dark leading-relaxed mb-6">
                Rhoda Kavutha Mwongela's journey began not as a planned mission, but as a personal 
                search for healing. Like many young Kenyans, she faced mental health challenges 
                in silence, discovering firsthand the gaps in our support systems.
              </p>
              <p className="text-lg text-brand-dark leading-relaxed mb-6">
                What started as sharing her own story at university gatherings evolved into something 
                much deeper. Students began seeking her out, not just for advice, but for the safe 
                space she created-where vulnerability was met with validation, not judgment.
              </p>
            </div>

            <div className="bg-brand-light/30 rounded-xl p-6 border border-brand-light/50">
              <h4 className="font-bold text-brand-navy mb-3">The "Bossbaby" Story</h4>
              <p className="text-brand-dark leading-relaxed">
                "Bossbaby" wasn't just a nickname-it became a symbol of strength through vulnerability. 
                It represented the courage to lead while acknowledging our own wounds, creating a new 
                paradigm for mental health leadership in Kenya.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="bg-brand-royal hover:bg-brand-royal-dark text-white px-6 py-3 rounded-lg font-semibold"
              >
                <Link href="/about">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-3 rounded-lg font-medium"
              >
                Watch Interview <Play className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 
              className="text-3xl font-bold text-brand-navy mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Journey of Impact
            </h3>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              From university conversations to nationwide movement
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {timelineEvents.map((event, index) => (
              <Card 
                key={index}
                className={`relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeTimelineIndex === index 
                    ? 'ring-2 ring-brand-royal bg-brand-royal/5' 
                    : 'bg-white/70 backdrop-blur-sm border border-brand-light/30'
                }`}
                onClick={() => setActiveTimelineIndex(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      className={`${
                        event.type === 'milestone' ? 'bg-brand-gold/20 text-brand-gold' :
                        event.type === 'beginning' ? 'bg-brand-royal/20 text-brand-royal' :
                        'bg-brand-light/50 text-brand-navy'
                      }`}
                    >
                      {event.year}
                    </Badge>
                    {event.type === 'milestone' && <Award className="w-5 h-5 text-brand-gold" />}
                  </div>
                  
                  <h4 className="font-bold text-brand-navy text-lg mb-2">{event.title}</h4>
                  <p className="text-brand-dark text-sm mb-3">{event.description}</p>
                  <p className="text-brand-gray text-xs leading-relaxed italic">
                    "{event.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {impactNumbers.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 hover:shadow-xl transition-all duration-300">
                <div 
                  className="text-4xl font-bold text-brand-royal mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="font-semibold text-brand-navy mb-1">{stat.label}</div>
                <div className="text-sm text-brand-gray">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 
              className="text-3xl font-bold text-brand-navy mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Guiding Principles
            </h3>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              The values that shape every conversation, program, and partnership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border border-brand-light/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-royal">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-brand-navy text-xl mb-3">{value.title}</h4>
                  <p className="text-brand-dark leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-brand-navy to-brand-royal rounded-2xl p-12 text-white">
            <Quote className="w-12 h-12 text-white/50 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              "Your Voice, Your Power"
            </blockquote>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              This isn't just our motto-it's the foundation of everything we do. 
              Every conversation creates ripples of healing that transform lives, 
              families, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-navy hover:bg-brand-light px-8 py-4 rounded-lg font-semibold"
              >
                <Link href="/support">
                  Join a Support Session
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-brand-navy hover:bg-white hover:text-brand-navy px-8 py-4 rounded-lg font-medium"
              >
                <Link href="/contact">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
