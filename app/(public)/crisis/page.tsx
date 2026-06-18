import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Heart, Shield, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crisis Support',
  description: 'Immediate mental health crisis support in Kenya. Get help now with 24/7 crisis hotlines and emergency resources.',
  robots: 'noindex, nofollow',
};

export default function CrisisPage() {
  const crisisContacts = [
    {
      name: 'Befrienders Kenya',
      phone: '0800723253',
      description: 'Free, 24/7 professional counseling',
      isPrimary: true,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'Kenya Red Cross',
      phone: '1199',
      description: 'Emergency services and crisis response',
      isPrimary: false,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'LTWBB Direct Line',
      phone: '+254714445791',
      description: 'Our support team during business hours',
      isPrimary: false,
      color: 'bg-brand-navy hover:bg-blue-700'
    },
    {
      name: 'WhatsApp Support',
      phone: '+254714445791',
      description: 'Chat with us on WhatsApp - fastest response time',
      isPrimary: false,
      color: 'bg-green-600 hover:bg-green-700',
      isWhatsApp: true
    },
    {
      name: 'NACADA Helpline',
      phone: '1192',
      description: 'National Authority for the Campaign Against Alcohol and Drug Abuse',
      isPrimary: false,
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      name: 'National Child Helpline',
      phone: '116',
      description: '24/7 child protection and support services',
      isPrimary: false,
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const emergencySteps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Stay with them',
      description: 'Don\'t leave the person alone. Your presence matters.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Listen without judgment',
      description: 'Let them express themselves without criticism.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Ask directly',
      description: '"Are you thinking about suicide?" It\'s okay to ask.'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call for help together',
      description: 'Don\'t wait. Call emergency services immediately.'
    }
  ];

  return (
    <div className="min-h-full bg-brand-light">
      {/* Top Section - Immediate Help */}
      <section className="bg-gradient-to-br from-white to-brand-light py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, brand-crisis 1px, transparent 1px), radial-gradient(circle at 70% 70%, brand-navy 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brand-crisis/10 rounded-full border border-brand-crisis/20 mb-6">
              <span className="w-2 h-2 bg-brand-crisis rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-crisis">Immediate Support Available</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Help is available <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crisis to-red-600">right now</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              You are not alone. These services are <span className="font-semibold text-brand-navy">free, confidential</span>, and available <span className="font-semibold text-brand-crisis">24/7</span>.
            </p>

            {/* Crisis Contacts */}
            <div className="space-y-6 mb-12">
              {crisisContacts.map((contact, index) => (
                <Card 
                  key={index} 
                  className={`border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                    contact.isPrimary 
                      ? 'border-brand-crisis bg-gradient-to-br from-red-50 to-brand-light/30' 
                      : 'border-brand-royal/30 bg-white'
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                      <div className="text-center lg:text-left flex-1">
                        <div className="flex items-center justify-center lg:justify-start mb-3">
                          {contact.isPrimary && (
                            <div className="inline-flex items-center px-3 py-1 bg-brand-crisis text-white text-xs font-bold rounded-full mr-3">
                              PRIMARY
                            </div>
                          )}
                          <h3 className={`text-2xl font-bold ${
                            contact.isPrimary ? 'text-brand-crisis' : 'text-brand-navy'
                          }`}>
                            {contact.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-3 text-lg">{contact.description}</p>
                        <div className="flex items-center justify-center lg:justify-start">
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              contact.isPrimary 
                                ? 'bg-gradient-to-br from-brand-crisis to-red-600' 
                                : 'bg-gradient-to-br from-brand-royal to-brand-light'
                            }`}>
                              <Phone className="h-6 w-6 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-brand-navy">
                              {contact.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className={`${contact.color} text-white min-w-[200px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full`}
                      >
                        <a href={contact.isWhatsApp ? `https://wa.me/254714445791` : `tel:${contact.phone}`}>
                          <Phone className="mr-3 h-5 w-5" />
                          {contact.isWhatsApp ? 'Chat on WhatsApp' : 'Call Now'}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-brand-navy text-white rounded-lg p-6">
              <p className="text-lg font-semibold mb-2">
                Remember: Your life matters. You deserve support.
              </p>
              <p className="text-brand-light">
                Making that call is the first step toward feeling better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section - Helping Others */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              If Someone Else is in Crisis
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                If you're worried about someone else, here's how you can help:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {emergencySteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-brand-royal text-white p-3 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-l-4 border-l-red-600 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Important Safety Note
                </h3>
                <p className="text-gray-700">
                  If you believe someone is in immediate danger, do not hesitate to call emergency services 
                  or take them to the nearest emergency room. Your quick action can save a life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Section - You Are Not Alone */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You Are Not Alone
            </h2>
            <p className="text-xl text-brand-light mb-8">
              LTWBB is here for you. Our community understands, and we want to help you through this difficult time.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <p className="text-lg mb-6">
                Mental health challenges can feel overwhelming, but recovery is possible. 
                Many people have been where you are and found hope and healing.
              </p>
              <p className="text-lg">
                Taking that first step to reach out is a sign of strength, not weakness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-brand-navy hover:bg-gray-100 min-w-[200px]"
              >
                <a href="/booking">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-navy min-w-[200px]"
              >
                <a href="/resources">
                  Browse Resources
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">
              Additional Support Resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    Mental Health Resources
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mental health information and support</li>
                    <li>• Self-help tools and resources</li>
                    <li>• Directory of mental health services</li>
                  </ul>
                  <Button asChild variant="ghost" className="text-brand-royal hover:text-brand-navy mt-4 p-0">
                    <a href="/resources">
                      View Resources →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    Professional Counseling
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Confidential counseling sessions</li>
                    <li>• Professional mental health support</li>
                    <li>• Affordable and accessible care</li>
                  </ul>
                  <Button asChild variant="ghost" className="text-brand-royal hover:text-brand-navy mt-4 p-0">
                    <a href="/booking">
                      Book a Session →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
