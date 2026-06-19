'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  MessageCircle, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Heart,
  AlertTriangle,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState('immediate');

  const emergencyContacts = [
    {
      name: 'National Mental Health Helpline',
      number: '1199',
      description: '24/7 professional mental health support',
      type: 'government',
      available: '24/7'
    },
    {
      name: 'NACADA Helpline',
      number: '1192',
      description: 'Substance abuse and mental health support',
      type: 'government',
      available: '24/7'
    },
    {
      name: 'Child Helpline',
      number: '116',
      description: 'Child protection and emergency services',
      type: 'government',
      available: '24/7'
    },
    {
      name: 'Befrienders Kenya',
      number: '0722 178 177',
      description: 'Emotional support and crisis intervention',
      type: 'ngo',
      available: '24/7'
    }
  ];

  const supportServices = [
    {
      title: 'Individual Counseling',
      description: 'One-on-one therapy sessions with qualified mental health professionals',
      icon: <Users className="w-6 h-6" />,
      features: ['Confidential sessions', 'Professional therapists', 'Affordable rates', 'Flexible scheduling'],
      waitTime: '1-3 days',
      cta: 'Book Session'
    },
    {
      title: 'Group Support Sessions',
      description: 'Safe space group discussions facilitated by mental health experts',
      icon: <Heart className="w-6 h-6" />,
      features: ['Weekly meetings', 'Peer support', 'Professional facilitation', 'Safe environment'],
      waitTime: 'Join anytime',
      cta: 'Join Group'
    },
    {
      title: 'Crisis Intervention',
      description: 'Immediate support for urgent mental health emergencies',
      icon: <Shield className="w-6 h-6" />,
      features: ['24/7 availability', 'Emergency response', 'Risk assessment', 'Safety planning'],
      waitTime: 'Immediate',
      cta: 'Get Help Now'
    },
    {
      title: 'Anonymous Support',
      description: 'Confidential support without revealing your identity',
      icon: <MessageCircle className="w-6 h-6" />,
      features: ['Complete anonymity', 'No judgment', 'Professional guidance', 'Resource referral'],
      waitTime: 'Available now',
      cta: 'Chat Anonymously'
    }
  ];

  const resources = [
    {
      category: 'Self-Help Resources',
      items: [
        { title: 'Coping Strategies Guide', type: 'PDF', size: '2.3 MB' },
        { title: 'Mindfulness Exercises', type: 'Audio', size: '15 min' },
        { title: 'Crisis Planning Worksheet', type: 'Interactive', size: 'Online' }
      ]
    },
    {
      category: 'Educational Content',
      items: [
        { title: 'Understanding Mental Health', type: 'Video', size: '12 min' },
        { title: 'Stress Management Techniques', type: 'Article', size: '5 min read' },
        { title: 'Building Resilience', type: 'Course', size: '6 modules' }
      ]
    },
    {
      category: 'Community Support',
      items: [
        { title: 'Local Support Groups', type: 'Directory', size: '15 listings' },
        { title: 'Online Community Forum', type: 'Forum', size: '500+ members' },
        { title: 'Peer Support Network', type: 'Network', size: 'Active' }
      ]
    }
  ];

  const locations = [
    {
      name: 'LTWBB Headquarters - Murang\'a',
      address: 'Along Murang\'a - Kenol Highway, Murang\'a County',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      services: ['Counseling', 'Group sessions', 'Emergency support'],
      contact: '0700 123 456'
    },
    {
      name: 'Nairobi Outreach Center',
      address: 'Community House, Ngong Road, Nairobi',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      services: ['Youth programs', 'Individual therapy', 'Workshops'],
      contact: '0711 987 654'
    },
    {
      name: 'Mombasa Coastal Office',
      address: 'Mombasa Town Center, Mombasa County',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      services: ['Community outreach', 'School programs', 'Crisis support'],
      contact: '0733 456 789'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-brand-crisis-bg/10 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-[60px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-crisis/10 text-brand-crisis border-brand-crisis/20 px-4 py-2">
            Support & Help Center
          </Badge>
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
              You Are Not
              <br />
              <span className="text-brand-crisis">Alone</span>
            </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Immediate help, professional support, and compassionate guidance are available 24/7. 
            Your mental health matters, and we're here to support you through every challenge.
          </p>
        </div>

        {/* Crisis Alert Banner */}
        <div className="bg-brand-crisis rounded-2xl p-8 mb-16 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
          </div>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            If you're in crisis or having thoughts of self-harm, please reach out immediately. 
            These services are free, confidential, and available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-crisis hover:bg-brand-light px-8 py-4 rounded-lg font-bold"
            >
              <a href="tel:1199">
                <Phone className="w-5 h-5 mr-2" />
                Call 1199 Now
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-crisis px-8 py-4 rounded-lg font-medium"
            >
              <a href="https://wa.me/254714445791" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </a>
            </Button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h3 
            className="text-2xl font-bold text-brand-navy mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border border-brand-light/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    contact.type === 'government' 
                      ? 'bg-brand-navy/10 text-brand-navy' 
                      : 'bg-brand-royal/10 text-brand-royal'
                  }`}>
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">{contact.name}</h4>
                  <div className="text-2xl font-bold text-brand-crisis mb-2">{contact.number}</div>
                  <p className="text-brand-dark text-sm mb-3">{contact.description}</p>
                  <div className="flex items-center justify-center text-xs text-brand-gray">
                    <Clock className="w-3 h-3 mr-1" />
                    {contact.available}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Services Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: 'immediate', label: 'Immediate Help' },
              { id: 'ongoing', label: 'Ongoing Support' },
              { id: 'resources', label: 'Resources' },
              { id: 'locations', label: 'Locations' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-brand-royal text-white shadow-lg'
                    : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-brand-light/30 p-8">
            {activeTab === 'immediate' && (
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-6">Support Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {supportServices.map((service, index) => (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 bg-brand-royal/10 rounded-lg flex items-center justify-center text-brand-royal mr-4">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-brand-navy mb-1">{service.title}</h4>
                            <p className="text-sm text-brand-gray">{service.waitTime}</p>
                          </div>
                        </div>
                        <p className="text-brand-dark mb-4">{service.description}</p>
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-brand-gray">
                              <ChevronRight className="w-4 h-4 text-brand-royal mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button
                          className="w-full bg-brand-royal hover:bg-brand-royal-dark text-white font-medium"
                        >
                          {service.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-6">Helpful Resources</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {resources.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-brand-navy mb-4">{category.category}</h4>
                      <div className="space-y-3">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-brand-light/30 rounded-lg hover:bg-brand-light/50 transition-colors cursor-pointer">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-brand-royal rounded-full mr-3"></div>
                              <div>
                                <div className="font-medium text-brand-dark text-sm">{item.title}</div>
                                <div className="text-xs text-brand-gray">{item.type} • {item.size}</div>
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-brand-royal" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'locations' && (
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-6">Our Locations</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {locations.map((location, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <MapPin className="w-5 h-5 text-brand-royal mr-2" />
                          <h4 className="font-bold text-brand-navy">{location.name}</h4>
                        </div>
                        <p className="text-brand-dark text-sm mb-3">{location.address}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-brand-gray">
                            <Clock className="w-4 h-4 mr-2 text-brand-royal" />
                            {location.hours}
                          </div>
                          <div className="text-sm text-brand-gray">
                            <strong>Services:</strong> {location.services.join(', ')}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {location.contact}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ongoing' && (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-brand-royal mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Ongoing Support Available</h3>
                <p className="text-lg text-brand-dark max-w-2xl mx-auto mb-8">
                  We offer continuous support through regular counseling, group sessions, and community programs. 
                  Our team is committed to your long-term mental wellness journey.
                </p>
                <Button
                  size="lg"
                  className="bg-brand-royal hover:bg-brand-royal-dark text-white px-8 py-4 rounded-lg font-semibold"
                  asChild
                >
                  <Link href="/programs">
                    Explore Our Programs
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Safe Space Message */}
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-royal/10 rounded-2xl p-8 text-center">
          <Heart className="w-12 h-12 text-brand-royal mx-auto mb-4" />
          <h3 
            className="text-2xl font-bold text-brand-navy mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            This Is a Safe Space
          </h3>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto leading-relaxed">
            Whatever you're going through, you deserve support without judgment. 
            Our trained professionals are here to listen, understand, and help you find your path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-white/80 text-brand-navy border-0 px-4 py-2">
              Confidential
            </Badge>
            <Badge className="bg-white/80 text-brand-navy border-0 px-4 py-2">
              Professional
            </Badge>
            <Badge className="bg-white/80 text-brand-navy border-0 px-4 py-2">
              Free Support
            </Badge>
            <Badge className="bg-white/80 text-brand-navy border-0 px-4 py-2">
              24/7 Available
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
