import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, TreePine, Target, Calendar, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Let\'s Talk with Bossbaby CBO, our mission, story, and commitment to mental health advocacy and climate action in Kenya.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empathy",
      description: "We approach every conversation with compassion and understanding."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusivity",
      description: "Everyone deserves access to mental health support regardless of background."
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Openness",
      description: "Creating safe spaces where honest conversations can flourish."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Action",
      description: "Turning conversations into meaningful community impact."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building supportive networks that strengthen collective wellbeing."
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Sustainability",
      description: "Ensuring our programs create lasting positive change."
    }
  ];

  const goals = [
    {
      year: "2025",
      items: [
        "Plant 100,000 trees",
        "Establish 5 mental health support hubs",
        "Train 500 youth ambassadors"
      ]
    },
    {
      year: "2026",
      items: [
        "Reach 10,000 individuals with mental health education",
        "Partner with 50 schools nationwide"
      ]
    }
  ];

  return (
    <div className="min-h-full">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-royal/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-brand-light/20 rounded-full animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-brand-crisis rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-brand-light">Since 2021</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">LTWBB</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto leading-relaxed mb-8">
              A community built on conversations, rooted in care, growing through action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5" />
                <span className="font-medium">5000+ Lives Impacted</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <TreePine className="h-5 w-5" />
                <span className="font-medium">5000+ Trees Planted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-20 bg-gradient-to-br from-brand-light/30 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to nationwide impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-brand-royal to-brand-light rounded-full"></div>
                {[
                  { year: "2021", title: "The Beginning", desc: "Community conversations in Murang'a County" },
                  { year: "2024", title: "Official Recognition", desc: "Registered as a Community-Based Organization" },
                  { year: "Today", title: "Growing Impact", desc: "Serving thousands across Kenya with innovative programs" }
                ].map((milestone, index) => (
                  <div key={index} className="relative pl-8 pb-6">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-brand-royal rounded-full border-4 border-white shadow-md"></div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-brand-light/30 hover:shadow-lg transition-all duration-300">
                      <span className="text-sm font-semibold text-brand-royal">{milestone.year}</span>
                      <h4 className="font-bold text-brand-navy mb-1">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-brand-light/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-brand-navy to-brand-royal rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    <Users className="h-20 w-20 text-white relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">
                    From Community to Movement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    What started as heartfelt conversations has blossomed into a nationwide movement 
                    for mental wellness and environmental stewardship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CEO Message */}
      <section className="py-20 bg-gradient-to-br from-white to-brand-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-brand-navy to-brand-royal rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border border-white/30">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <blockquote className="text-2xl md:text-4xl italic font-light leading-relaxed mb-8">
                  "Mental health is not just about treating illness—it's about creating communities 
                  where everyone feels seen, heard, and supported. When we combine this with 
                  environmental action, we create healing for both people and planet."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <cite className="font-semibold text-white text-lg">
                      Rhoda Mwongela (Bossbaby)
                    </cite>
                    <p className="text-brand-light/80">
                      Founder & CEO, Let's Talk with Bossbaby CBO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-brand-light/40 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-l-brand-royal shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-royal to-brand-light flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-brand-navy" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy">Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A mentally resilient and environmentally sustainable world where individuals 
                  thrive and nature flourishes.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-l-brand-navy shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-brand-royal flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy">Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create safe spaces for mental health awareness while driving impactful 
                  climate action through tree planting and environmental conservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Values */}
      <section className="py-20 bg-gradient-to-br from-white to-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-royal to-brand-light flex items-center justify-center text-brand-navy mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Goals Timeline */}
      <section className="py-20 bg-gradient-to-br from-brand-light/30 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Strategic Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our roadmap for creating lasting impact
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-royal text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {goal.year}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-2xl font-bold text-brand-navy">Goals</h3>
                        <p className="text-gray-600">For {goal.year}</p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {goal.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center group/item">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-royal to-brand-light flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                            <Award className="h-5 w-5 text-brand-navy" />
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
