import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Clock, ExternalLink, PlayCircle, CheckCircle, Star, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Mental Health Webinars | LTWBB',
  description: 'Join our free live mental health webinars on Google Meet. Learn from experts, connect with community, and get practical support for your mental wellness journey.',
};

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      id: 1,
      title: "Managing Anxiety in Daily Life",
      description: "Learn practical techniques to manage anxiety and stress in your everyday routine. This interactive session covers breathing exercises, mindfulness practices, and cognitive strategies.",
      speaker: "Dr. Sarah Kimani - Clinical Psychologist",
      date: "Tuesday, May 13, 2026",
      time: "6:00 PM - 7:30 PM EAT",
      duration: "90 minutes",
      capacity: "50 spots left",
      level: "Beginner Friendly",
      image: "/images/webinars.jpg"
    },
    {
      id: 2,
      title: "Building Resilience Through Nature",
      description: "Discover how connecting with nature can improve your mental health and build resilience. Learn about ecotherapy and practical nature-based coping strategies.",
      speaker: "Rhoda Mwongela - LTWBB Founder",
      date: "Thursday, May 15, 2026",
      time: "6:00 PM - 7:30 PM EAT",
      duration: "90 minutes",
      capacity: "75 spots left",
      level: "All Levels",
      image: "/images/webinars.jpg"
    },
    {
      id: 3,
      title: "Mental Health in the Workplace",
      description: "Understanding workplace mental health challenges and creating supportive environments. Perfect for professionals and HR managers.",
      speaker: "Dr. James Muriithi - Occupational Health Specialist",
      date: "Tuesday, May 20, 2026",
      time: "6:00 PM - 7:30 PM EAT",
      duration: "90 minutes",
      capacity: "100 spots left",
      level: "Intermediate",
      image: "/images/webinars.jpg"
    },
    {
      id: 4,
      title: "Teen Mental Health: Signs & Support",
      description: "Essential webinar for parents, teachers, and youth leaders on identifying mental health issues in teenagers and providing effective support.",
      speaker: "Dr. Grace Njeri - Adolescent Psychologist",
      date: "Thursday, May 22, 2026",
      time: "6:00 PM - 7:30 PM EAT",
      duration: "90 minutes",
      capacity: "60 spots left",
      level: "All Levels",
      image: "/images/webinars.jpg"
    }
  ];

  const pastWebinars = [
    {
      title: "Understanding Depression",
      speaker: "Dr. Michael Kamau",
      date: "November 28, 2024",
      views: "1.2K views",
      recording: "https://youtube.com/example"
    },
    {
      title: "Stress Management Techniques",
      speaker: "Dr. Sarah Kimani",
      date: "November 21, 2024",
      views: "856 views",
      recording: "https://youtube.com/example"
    },
    {
      title: "Building Healthy Relationships",
      speaker: "Rhoda Mwongela",
      date: "November 14, 2024",
      views: "2.1K views",
      recording: "https://youtube.com/example"
    }
  ];

  const benefits = [
    "Expert-led sessions with qualified mental health professionals",
    "Interactive Q&A - get your questions answered live",
    "Free access - no hidden costs or subscriptions",
    "Learn practical coping strategies you can use immediately",
    "Connect with a supportive community of peers",
    "Access to recorded sessions for future reference",
    "Certificate of participation available on request",
    "Follow-up resources and materials provided"
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
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">FREE LIVE SESSIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mental Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">Webinars</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto leading-relaxed mb-8">
              Join our free live Google Meet sessions with mental health professionals. 
              Learn, share, and grow together from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <a href="#upcoming">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Schedule
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300">
                <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer">
                  <Video className="mr-2 h-5 w-5" />
                  Join Live Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-white to-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Join Our Webinars?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of expert-led mental health education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="py-16 bg-gradient-to-br from-brand-light/30 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Upcoming Live Sessions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Register now to secure your spot in our upcoming webinars
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border border-brand-light/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 bg-brand-royal/10 text-brand-royal rounded-full text-sm font-medium mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {webinar.date}
                      </div>
                      <CardTitle className="text-2xl text-brand-navy mb-2">
                        {webinar.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {webinar.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="h-4 w-4 mr-2 text-brand-royal" />
                      {webinar.speaker}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-brand-royal" />
                        {webinar.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Video className="h-4 w-4 mr-2 text-brand-royal" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-brand-light/30">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">
                          <span className="font-semibold text-green-600">{webinar.capacity}</span>
                        </span>
                        <span className="text-sm px-2 py-1 bg-brand-light/50 rounded-full">
                          {webinar.level}
                        </span>
                      </div>
                      
                      <Button size="sm" className="bg-brand-royal hover:bg-blue-600 text-white">
                        Register Free
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 bg-gradient-to-br from-white to-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Past Sessions & Recordings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Catch up on previous webinars with our recorded sessions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-brand-light/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center">
                      <PlayCircle className="h-6 w-6 text-brand-navy" />
                    </div>
                    <span className="text-sm text-gray-500">{webinar.views}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {webinar.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {webinar.speaker}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {webinar.date}
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white">
                    <a href={webinar.recording} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch Recording
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-brand-light mb-8">
              Take the first step towards better mental health. Join our free webinars and connect with others on the same journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <a href="/contact">
                  Get Personal Support
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300">
                <a href="/newsletter">
                  Subscribe for Updates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
