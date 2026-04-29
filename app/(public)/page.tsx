'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Trees, Users, Calendar, School, Heart, Mic, Phone, Mail, Send, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [counters, setCounters] = useState({
    trees: 0,
    people: 0,
    sessions: 0,
    schools: 0
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        trees: Math.floor(5000 * progress),
        people: Math.floor(2000 * progress),
        sessions: Math.floor(300 * progress),
        schools: Math.floor(15 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({
          trees: 5000,
          people: 2000,
          sessions: 300,
          schools: 15
        });
      }
    }, interval);
  };

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setSubscribeMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  const programs = [
    {
      icon: <Trees className="h-8 w-8" />,
      title: "Tree Therapy Project",
      description: "Healing through nature connection and environmental stewardship.",
      link: "/projects#tree-therapy"
    },
    {
      icon: <School className="h-8 w-8" />,
      title: "Green Schools Program",
      description: "Mental health education and tree planting in educational institutions.",
      link: "/projects#green-schools"
    },
    {
      icon: <Heart className="h-8 w-8 animate-pulse" style={{ animation: "float 3s ease-in-out infinite" }} />,
      title: "Counseling in Nature",
      description: "Therapeutic sessions in natural outdoor settings.",
      link: "/projects#counseling-nature"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Youth Ambassadors",
      description: "Empowering young leaders in mental health and climate action.",
      link: "/projects#youth-ambassadors"
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Let's Talk Podcast",
      description: "Conversations about mental health and environmental wellness.",
      link: "/podcast"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Civil Servants Program",
      description: "Mental health support for public service professionals.",
      link: "/projects#civil-servants"
    }
  ];

  const resources = [
    {
      category: "Anxiety",
      title: "Understanding Anxiety Disorders",
      excerpt: "A comprehensive guide to recognizing and managing anxiety in daily life.",
      readTime: 5,
      link: "/resources/anxiety-guide"
    },
    {
      category: "Depression",
      title: "Signs of Depression and When to Seek Help",
      excerpt: "Learn to identify depression symptoms and find appropriate support.",
      readTime: 7,
      link: "/resources/depression-signs"
    },
    {
      category: "Youth",
      title: "Supporting Teen Mental Health",
      excerpt: "Essential guide for parents and educators on adolescent mental wellness.",
      readTime: 6,
      link: "/resources/teen-mental-health"
    }
  ];

  const partners = [
    "Ministry of Health Kenya",
    "Kenya Red Cross",
    "UNICEF Kenya",
    "World Health Organization",
    "Kenya Forest Service",
    "Ministry of Education"
  ];

  return (
    <div className="min-h-full">
      {/* SECTION 1: Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-royal/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-brand-light/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-brand-crisis/10 rounded-full animate-pulse delay-2000" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-brand-crisis rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-brand-light">24/7 Crisis Support Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block mb-2">You Don't Have to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Face It Alone</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto leading-relaxed">
              LTWBB CBO creates <span className="text-white font-semibold">safe spaces</span> for mental health conversations across Kenya. 
              <span className="text-brand-crisis font-semibold"> Conversations save lives.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-white to-brand-light text-brand-navy hover:from-brand-light hover:to-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out px-8 py-4 text-lg font-semibold rounded-full">
                <Link href="/resources">
                  Start a Conversation
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-brand-navy backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out hover:shadow-lg">
                <Link href="/booking">
                  Book a Counseling Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="h-6 w-6 text-brand-light" />
            <span className="text-xs text-brand-light/60">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Impact Stats Bar */}
      <section ref={statsRef} className="bg-gradient-to-br from-brand-light to-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, brand-navy 1px, transparent 1px), radial-gradient(circle at 80% 80%, brand-royal 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Impact</h2>
            <p className="text-gray-600">Together, we're making a difference in communities across Kenya</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Trees, value: counters.trees, label: 'Trees Planted', color: 'from-green-500 to-emerald-600' },
              { icon: Users, value: counters.people, label: 'People Reached', color: 'from-blue-500 to-brand-royal' },
              { icon: Calendar, value: counters.sessions, label: 'Sessions Held', color: 'from-purple-500 to-pink-600' },
              { icon: School, value: counters.schools, label: 'Schools Partnered', color: 'from-orange-500 to-red-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} opacity-20 animate-ping`} />
                </div>
                <div className="text-4xl font-bold text-brand-navy mb-1">{stat.value.toLocaleString()}+</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-brand-light to-white/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 shadow-lg">
            <blockquote className="text-2xl md:text-3xl italic text-center text-brand-navy mb-6">
              "We believe conversations save lives. Mental health is not a luxury — it is a human right."
            </blockquote>
            <cite className="block text-center text-brand-dark/80">
              — Rhoda Mwongela (Bossbaby), Founder & CEO
            </cite>
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Programs */}
      <section className="py-16 bg-gradient-to-br from-white to-brand-light/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-brand-navy bg-white/80 backdrop-blur-sm ${
                program.title === "Counseling in Nature" ? "ring-2 ring-pink-200/50 hover:ring-pink-300/70" : ""
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-brand-royal to-brand-light flex items-center justify-center text-brand-navy ${
                      program.title === "Counseling in Nature" ? "bg-gradient-to-br from-pink-400 to-red-400 animate-pulse shadow-lg" : ""
                    }`}>
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    {program.title}
                  </h3>
                  <p className="text-brand-dark/70 mb-4">
                    {program.description}
                  </p>
                  <Button asChild variant="ghost" className="text-brand-royal hover:text-brand-navy hover:bg-brand-light/30 p-0 rounded-full transition-all duration-300 ease-in-out group">
                    <Link href={program.link}>
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Latest Resources */}
      <section className="py-16 bg-gradient-to-br from-brand-light/50 to-white/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
            Mental Health Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/70 backdrop-blur-sm border border-brand-light/30">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-brand-royal to-brand-light rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-brand-dark/70 mb-4">
                    {resource.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-dark/60">{resource.readTime} min read</span>
                    <Button asChild variant="ghost" className="text-brand-royal hover:text-brand-navy hover:bg-brand-light/30 p-0 rounded-full transition-all duration-300 ease-in-out group">
                      <Link href={resource.link}>
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out px-8 py-4 rounded-full">
              <Link href="/resources">
                View All Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: Podcast Preview */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Listen to Our Podcast
              </h2>
              <p className="text-lg text-brand-light mb-8">
                Join us for honest conversations about mental health, wellness, and the healing power of nature. 
                Each episode brings you stories, insights, and practical advice from experts and community members.
              </p>
              <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link href="/podcast">
                  All Episodes
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-center">
                <Mic className="h-16 w-16 mx-auto mb-4 text-brand-light" />
                <h3 className="text-xl font-semibold mb-2">Latest Episode</h3>
                <p className="text-brand-light mb-4">
                  "Nature's Healing: How Trees Help Our Mental Health"
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
                  Listen Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Crisis Support Banner */}
      <section className="bg-brand-crisis py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            If you are in crisis right now, help is one call away.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-crisis hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <a href="tel:0800723253">
                <Phone className="mr-2 h-4 w-4" />
                Call Befrienders: 0800 723 253
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-crisis transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
              <a href="tel:1199">
                Call Kenya Red Cross: 1199
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: Live Webinars */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">LIVE NOW</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Mental Health Webinars
            </h2>
            <p className="text-xl text-brand-light max-w-3xl mx-auto">
              Join our live Google Meet sessions with mental health professionals and community leaders. 
              Learn, share, and grow together from the comfort of your home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Upcoming Sessions</h3>
                    <p className="text-brand-light">Every Tuesday & Thursday</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      title: "Managing Anxiety in Daily Life", 
                      time: "Tuesday, 6:00 PM EAT",
                      speaker: "Dr. Sarah Kimani - Clinical Psychologist"
                    },
                    { 
                      title: "Building Resilience Through Nature", 
                      time: "Thursday, 6:00 PM EAT", 
                      speaker: "Rhoda Mwongela - LTWBB Founder"
                    },
                    { 
                      title: "Mental Health in the Workplace", 
                      time: "Next Tuesday, 6:00 PM EAT",
                      speaker: "Dr. James Muriithi - Occupational Health"
                    }
                  ].map((webinar, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{webinar.title}</h4>
                          <p className="text-brand-light text-sm mb-2">{webinar.speaker}</p>
                          <div className="flex items-center text-brand-light text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {webinar.time}
                          </div>
                        </div>
                        <div className="ml-4">
                          <Button size="sm" className="bg-brand-royal hover:bg-blue-600 text-white">
                            Register
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Why Join Our Webinars?</h4>
                <ul className="space-y-3">
                  {[
                    "Expert-led sessions with qualified professionals",
                    "Interactive Q&A with mental health experts", 
                    "Free access - no hidden costs",
                    "Learn practical coping strategies",
                    "Connect with supportive community",
                    "Access to recorded sessions"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-brand-light">
                      <div className="w-2 h-2 bg-brand-royal rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <div className="relative">
                  <img 
                    src="/images/webinars.jpg" 
                    alt="LTWBB Live Webinars on Google Meet"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500 rounded-full mb-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-red-300">HOSTED ON GOOGLE MEET</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Join Live Sessions</h3>
                    <p className="text-brand-light mb-6">
                      Connect with us and hundreds of participants in our live mental health webinars.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />
                        Join Next Webinar
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300">
                      <a href="/webinars">
                        View Full Schedule
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Partners & Media */}
      <section className="py-16 bg-gradient-to-br from-white to-brand-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
            Our Partners & Supporters
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-light/30 hover:bg-brand-light/30 hover:text-brand-navy transition-all duration-300 text-center">
                <div className="font-medium text-brand-dark/80">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-light to-brand-royal/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Join our community
            </h2>
            <p className="text-lg text-brand-dark/70 mb-8">
              Get mental health tips, event updates, and stories of hope delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal"
                required
              />
              <Button type="submit" disabled={isSubscribing} className="bg-gradient-to-r from-brand-navy to-brand-royal hover:from-brand-royal hover:to-brand-navy text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold">
                {isSubscribing ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            {subscribeMessage && (
              <p className="mt-4 text-brand-navy font-medium bg-brand-light/50 rounded-full px-4 py-2 inline-block">{subscribeMessage}</p>
            )}
            <p className="text-sm text-brand-dark/60 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
