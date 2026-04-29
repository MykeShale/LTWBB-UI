import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trees, School, Heart, Users, Mic, Shield, Calendar, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Discover LTWBB\'s comprehensive programs combining mental health support with environmental action across Kenya.',
};

export default function ProjectsPage() {
  const programs = [
    {
      id: 'tree-therapy',
      icon: <Trees className="h-12 w-12" />,
      title: "Tree Therapy Project",
      category: "Environmental Wellness",
      description: "Our flagship program combines mental health support with environmental conservation. Participants engage in therapeutic tree-planting activities while receiving counseling and peer support. This innovative approach helps individuals process emotions through nature connection while contributing to Kenya's reforestation efforts.",
      impact: "2,500+ trees planted, 300+ participants",
      cta: "Join Tree Therapy Sessions",
      color: "bg-green-100 border-green-500"
    },
    {
      id: 'green-schools',
      icon: <School className="h-12 w-12" />,
      title: "Green Schools Mental Health Program",
      category: "Youth Education",
      description: "We partner with educational institutions to provide mental health education, counseling services, and environmental clubs. Students learn about emotional wellness while participating in school greening initiatives, creating a generation that values both mental health and environmental stewardship.",
      impact: "15 schools partnered, 5,000+ students reached",
      cta: "Partner Your School",
      color: "bg-blue-100 border-blue-500"
    },
    {
      id: 'counseling-nature',
      icon: <Heart className="h-12 w-12" />,
      title: "Counseling in Nature Program",
      category: "Therapeutic Services",
      description: "Professional counseling sessions conducted in natural outdoor settings including forests, parks, and gardens. Research shows that nature exposure enhances therapeutic outcomes, reduces stress, and improves overall mental wellbeing. Our certified counselors integrate nature-based techniques into evidence-based practices.",
      impact: "200+ sessions held, 95% satisfaction rate",
      cta: "Book Nature Counseling",
      color: "bg-purple-100 border-purple-500"
    },
    {
      id: 'youth-ambassadors',
      icon: <Users className="h-12 w-12" />,
      title: "Youth Climate & Mental Health Champions",
      category: "Leadership Development",
      description: "A comprehensive training program empowering young Kenyans aged 16-25 to become mental health advocates and environmental leaders. Ambassadors receive training in peer counseling, community organizing, and project management, then implement initiatives in their communities.",
      impact: "150 ambassadors trained, 50+ community projects",
      cta: "Become an Ambassador",
      color: "bg-orange-100 border-orange-500"
    },
    {
      id: 'podcast',
      icon: <Mic className="h-12 w-12" />,
      title: "Let's Talk Mental Health Podcast",
      category: "Media & Awareness",
      description: "A weekly podcast featuring conversations about mental health, wellness strategies, personal stories, and expert insights. We discuss topics relevant to Kenyans, addressing cultural stigma and providing practical guidance. Available on major streaming platforms in both English and Swahili.",
      impact: "50+ episodes, 10,000+ downloads",
      cta: "Listen to Episodes",
      color: "bg-pink-100 border-pink-500"
    },
    {
      id: 'civil-servants',
      icon: <Shield className="h-12 w-12" />,
      title: "Mental Health for Civil Servants, Police, Military & Doctors",
      category: "Professional Support",
      description: "Specialized mental health programs for professionals in high-stress public service roles. We provide confidential counseling, stress management workshops, peer support groups, and training for organizations to create mentally healthy workplaces.",
      impact: "8 organizations served, 500+ professionals supported",
      cta: "Partner with Us",
      color: "bg-red-100 border-red-500"
    },
    {
      id: 'events',
      icon: <Calendar className="h-12 w-12" />,
      title: "Mental Health Awareness Walks & Events",
      category: "Community Engagement",
      description: "Regular community events including mental health awareness walks, wellness workshops, tree-planting ceremonies, and community dialogues. These events bring people together, reduce stigma, and create visible community support for mental health initiatives.",
      impact: "25+ events held, 3,000+ attendees",
      cta: "Attend Our Events",
      color: "bg-yellow-100 border-yellow-500"
    }
  ];

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto leading-relaxed">
              Comprehensive initiatives that combine mental health support with environmental action, 
              creating holistic wellbeing for individuals and communities across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gradient-to-br from-white to-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Transformative Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each initiative is carefully designed to address specific mental health needs while promoting environmental stewardship.
            </p>
          </div>
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div key={program.id} className="scroll-mt-24" id={program.id}>
                <Card className={`h-full flex flex-col border-l-4 ${program.color} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm`}>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-3 rounded-full ${program.color} shadow-lg`}>
                        {program.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-brand-royal uppercase tracking-wide">
                          {program.category}
                        </span>
                        <CardTitle className="text-xl text-brand-navy mt-2">
                          {program.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {program.description}
                    </p>
                    
                    {/* Impact Section */}
                    <div className="bg-gradient-to-r from-brand-light/30 to-white/50 rounded-lg p-4 mb-6 border border-brand-light/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-brand-navy mb-1 text-sm">Impact</h4>
                          <p className="text-gray-700 text-sm">{program.impact}</p>
                        </div>
                        <div className="text-brand-royal bg-white/80 p-2 rounded-full">
                          <Heart className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild size="sm" className="bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full">
                      <a href="#contact">
                        {program.cta}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're seeking support, want to volunteer, or interested in partnering with us, 
            there are many ways to join our community and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-navy hover:bg-blue-700">
              <a href="/booking">
                Book a Session
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
              <a href="/contact">
                Contact Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white">
              <a href="/donate">
                Support Our Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
