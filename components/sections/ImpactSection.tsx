'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MapPin, 
  TreePine, 
  Award, 
  Heart, 
  Quote,
  TrendingUp,
  Calendar,
  Target
} from 'lucide-react';
import Link from 'next/link';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    casesSupported: 0,
    youthReached: 0,
    countiesCovered: 0,
    schoolsPartnered: 0,
    treesPlanted: 0,
    therapyHours: 0,
    satisfactionRate: 0,
    ambassadorsTrained: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters when section becomes visible
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

      // Animate all counters with staggered timing
      animateValue(0, 8700, 2000, 'casesSupported');
      animateValue(0, 20000, 2500, 'youthReached');
      animateValue(0, 15, 1800, 'countiesCovered');
      animateValue(0, 50, 2200, 'schoolsPartnered');
      animateValue(0, 10000, 2800, 'treesPlanted');
      animateValue(0, 5000, 2400, 'therapyHours');
      animateValue(0, 95, 2000, 'satisfactionRate');
      animateValue(0, 500, 2600, 'ambassadorsTrained');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const impactMetrics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: counters.casesSupported.toLocaleString(),
      label: 'Cases Supported',
      description: 'Individual counseling and support sessions',
      color: 'from-brand-royal to-brand-light',
      target: '10,000+'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: counters.youthReached.toLocaleString(),
      label: 'Youth Reached',
      description: 'Through workshops, talks, and programs',
      color: 'from-brand-navy to-brand-royal',
      target: '25,000+'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: counters.countiesCovered,
      label: 'Counties Covered',
      description: 'Across Kenya with mental wellness programs',
      color: 'from-brand-green-safe to-green-600',
      target: '20+'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: counters.schoolsPartnered,
      label: 'Schools Partnered',
      description: 'Educational institutions with our programs',
      color: 'from-brand-gold to-yellow-600',
      target: '100+'
    }
  ];

  const environmentalImpact = [
    {
      icon: <TreePine className="w-6 h-6" />,
      value: counters.treesPlanted.toLocaleString(),
      label: 'Trees Planted',
      description: 'Through Tree Therapy program'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: counters.therapyHours.toLocaleString(),
      label: 'Therapy Hours',
      description: 'Professional counseling provided'
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: `${counters.satisfactionRate}%`,
      label: 'Satisfaction Rate',
      description: 'From program participants'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: counters.ambassadorsTrained,
      label: 'Ambassadors Trained',
      description: 'Youth mental health advocates'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'University Student',
      location: 'Nairobi',
      content: 'LTWBB helped me find my voice when I thought I had lost it. The weekly sessions gave me tools to manage my anxiety and connect with others who understand.',
      program: 'Weekly Support Sessions',
      avatar: '👩‍🎓'
    },
    {
      id: 2,
      name: 'James K.',
      role: 'Teacher',
      location: 'Murang\'a',
      content: 'The Green Schools Program transformed our approach to student mental health. We now have a comprehensive support system that\'s changing lives.',
      program: 'Green Schools Program',
      avatar: '👨‍🏫'
    },
    {
      id: 3,
      name: 'Grace W.',
      role: 'Youth Ambassador',
      location: 'Mombasa',
      content: 'Becoming a Mental Wealth Ambassador gave me purpose. I\'m now helping other young people navigate their mental health journey with confidence.',
      program: 'Mental Wealth Ambassadors',
      avatar: '👩‍💼'
    },
    {
      id: 4,
      name: 'David O.',
      role: 'GBV Survivor',
      location: 'Kisumu',
      content: 'The support I received was life-changing. LTWBB connected me with counseling and legal help when I had nowhere else to turn.',
      program: 'GBV & Mental Health Linkage',
      avatar: '👨‍🦱'
    },
    {
      id: 5,
      name: 'Lucy N.',
      role: 'Parent',
      location: 'Nakuru',
      content: 'Tree Therapy helped my son open up about his struggles. The combination of nature and counseling created a safe space for healing.',
      program: 'Tree Therapy',
      avatar: '👩‍👧‍👦'
    },
    {
      id: 6,
      name: 'Michael T.',
      role: 'Corporate Professional',
      location: 'Nairobi',
      content: 'The workplace wellness program transformed our office culture. Mental health is now a priority, and productivity has soared.',
      program: 'Workplace Wellness',
      avatar: '👨‍💼'
    }
  ];

  const yearlyProgress = [
    {
      year: '2021',
      title: 'The Beginning',
      impact: '10 people supported',
      growth: '+100%'
    },
    {
      year: '2022',
      title: 'Community Response',
      impact: '500 people reached',
      growth: '+490%'
    },
    {
      year: '2023',
      title: 'Program Development',
      impact: '2,000 lives impacted',
      growth: '+300%'
    },
    {
      year: '2024',
      title: 'National Recognition',
      impact: '8,700 cases supported',
      growth: '+335%'
    },
    {
      year: '2025',
      title: 'Scaling Impact',
      impact: '20,000+ youth reached',
      growth: '+130%'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-brand-light/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-brand-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-[60px]">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-brand-royal/10 text-brand-royal border-brand-royal/20 px-4 py-2">
            Our Impact
          </Badge>
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Transforming Lives
            <br />
            <span className="text-brand-royal">Across Kenya</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Every number represents a story of healing, hope, and transformation. 
            Together, we're building a mentally healthier Kenya, one conversation at a time.
          </p>
        </div>

        {/* Main Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactMetrics.map((metric, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5`} />
              
              <CardContent className="relative p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {metric.icon}
                </div>
                
                <div 
                  className="text-4xl font-bold text-brand-navy mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {metric.value}
                </div>
                
                <h3 className="text-lg font-bold text-brand-navy mb-2">{metric.label}</h3>
                <p className="text-brand-dark text-sm mb-3">{metric.description}</p>
                
                <div className="flex items-center justify-center text-xs text-brand-gray">
                  <Target className="w-3 h-3 mr-1 text-brand-royal" />
                  Target: {metric.target}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental & Additional Impact */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 mb-20">
          <h3 
            className="text-2xl font-bold text-brand-navy mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Beyond Mental Health
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalImpact.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-royal/10 rounded-xl flex items-center justify-center text-brand-royal mx-auto mb-3">
                  {item.icon}
                </div>
                <div 
                  className="text-2xl font-bold text-brand-royal mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.value}
                </div>
                <div className="font-semibold text-brand-navy text-sm mb-1">{item.label}</div>
                <div className="text-xs text-brand-gray">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Progress Timeline */}
        <div className="mb-20">
          <h3 
            className="text-2xl font-bold text-brand-navy mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Growth Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-royal to-brand-light rounded-full" />
            
            <div className="space-y-8">
              {yearlyProgress.map((year, index) => (
                <div key={index} className="flex items-start">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-brand-royal flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-brand-royal">{year.year}</span>
                    </div>
                  </div>
                  <div className="ml-6 flex-1 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-brand-light/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-brand-navy text-lg mb-1">{year.title}</h4>
                        <p className="text-brand-dark mb-2">{year.impact}</p>
                      </div>
                      <Badge className="bg-brand-royal text-white text-sm">
                        {year.growth}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3 
            className="text-2xl font-bold text-brand-navy mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Stories of Hope
            <br />
            <span className="text-brand-royal">Real Impact, Real Lives</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`bg-white/70 backdrop-blur-sm border border-brand-light/30 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-royal/20 mb-4" />
                  
                  <p className="text-brand-dark leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-bold text-brand-navy">{testimonial.name}</div>
                        <div className="text-sm text-brand-gray">{testimonial.role}</div>
                        <div className="text-xs text-brand-gray">{testimonial.location}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.program}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-royal rounded-2xl p-12 text-white text-center">
          <h3 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Be Part of the Impact
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need support, want to volunteer, or represent an organization, 
            there are many ways to join our mission of mental wellness for all Kenyans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-navy hover:bg-brand-light px-8 py-4 rounded-lg font-semibold"
            >
              <Link href="/support">
                Get Support
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 rounded-lg font-medium"
            >
              <Link href="/contact?subject=Volunteer">
                Become a Partner
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
