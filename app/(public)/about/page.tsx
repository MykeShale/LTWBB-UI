import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AwardBadges from '@/components/ui/AwardBadges';
import SDGBadge from '@/components/ui/SDGBadge';
import ImpactReport from '@/components/ui/ImpactReport';
import { Heart, Users, TreePine, Target, Calendar, Award, MapPin, Mail, Phone, Globe, ChevronRight, Star, Trophy, Shield } from 'lucide-react';

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

  // Comprehensive timeline data
  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Community conversations started in Murang'a County",
      details: "What began as informal gatherings to discuss mental health quickly grew into something more meaningful.",
      achievements: ["First community conversation", "10 initial participants", "Focus on youth mental health"],
      type: "milestone"
    },
    {
      year: "2022",
      title: "Growth & Expansion",
      description: "Formalizing our approach and reaching more communities",
      details: "We established regular meeting schedules and began integrating environmental activities.",
      achievements: ["50+ regular participants", "First tree planting activity", "Partnership with local schools"],
      type: "growth"
    },
    {
      year: "2023",
      title: "Program Development",
      description: "Launching structured programs and services",
      details: "Developed our core programs including Tree Therapy, Youth Ambassadors, and Counseling in Nature.",
      achievements: ["Tree Therapy program launch", "Youth Ambassadors initiative", "1000+ trees planted"],
      type: "program"
    },
    {
      year: "2024",
      title: "Official Recognition",
      description: "Registered as a Community-Based Organization",
      details: "Official registration as LTWBB CBO opened doors for greater impact and partnerships.",
      achievements: ["CBO Registration OP.218/051/22-040/10623", "First grant funding", "National recognition"],
      type: "milestone"
    },
    {
      year: "2025",
      title: "Scaling Impact",
      description: "Expanding reach and deepening impact across Kenya",
      details: "Current year focused on scaling successful programs and establishing sustainable operations.",
      achievements: ["5000+ lives impacted", "Multiple county presence", "Digital mental health resources"],
      type: "current"
    }
  ];

  // Team members data
  const team = [
    {
      name: "Rhoda Mwongela (Bossbaby)",
      role: "Founder & CEO",
      bio: "Passionate mental health advocate with over 5 years of experience in community dev't and environmental conservation. ",
      image: "/images/rhoda.jpg",
      expertise: ["MentalHealth Advocacy", "Community Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rhoda@ltwbb.org"
      }
    },
    {
      name: "Dennis Karanja",
      role: "Lead Psychologist & Counsellor",
      bio: "Psychologist with over 5 years of experience in mental health care, addiction recovery, and psychosocial support.",
      image: "/images/dennis.jpeg",
      expertise: ["Counseling Psychology", "Addiction Recovery"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "dennis@ltwbb.org"
      }
    },
    {
      name: "Fedelise Akinyi",
      role: "Program Coordinator & Community Builder",
      bio: "Mental health advocate, and founder of The Mama Tribe KE who creates content and builds community to support women.",
      image: "/images/fidelis.jpeg",
      expertise: ["Community Building", "Women's Empowerment"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "fedelise@ltwbb.org"
      }
    },
    {
      name: "Musembi Aaron",
      role: "Mental Health Advocate & Wellness Coach",
      bio: "Mental health advocate and wellness coach with leadership experience in medical education and community initiatives.",
      image: "/images/musembi.jpeg",
      expertise: ["Mental Health Advocacy", "Wellness Coaching", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "musembi@ltwbb.org"
      }
    },
    {
      name: "Anne",
      role: "Finance Director",
      bio: "Anne is the finance expert and executive team member in charge of finance operations including planning and management.",
      image: "/images/ann.jpeg",
      expertise: ["Finance Management", "Financial Planning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "anne@ltwbb.org"
      }
    },
    {
      name: "Mike Ayoti",
      role: "Director of IT & Digital Systems",
      bio: "Seasoned IT professional with extensive experience in digital transformation and technology leadership. ",
      image: "/images/mike.png",
      expertise: ["ICT Consultancy", "Digital Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mike@ltwbb.org"
      }
    },
    {
      name: "Peter Njenga",
      role: "Brand Systems Designer & Brand Designer",
      bio: "Brand systems designer and founder of Brand Veneer Creative, crafting visual identity and brand strategy for Let's Talk with Bossbaby. ",
      image: "/images/peter.jpeg",
      expertise: ["Brand Systems Design", "Visual Identity"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "peter@ltwbb.org"
      }
    },
    {
      name: "Joseph Mbondo",
      role: "Host, Uniformed Officers Mental Health Program",
      bio: "Host of the Uniformed Officers Mental Health Program, championing mental wellness support for police and military personnel. ",
      image: "/images/mbondo.jpeg",
      expertise: ["Mental Health Advocacy", "Program Hosting"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "joseph@ltwbb.org"
      }
    },
    {
      name: "Commissioner Wandera",
      role: "In Charge, Uniformed Officers Mental Health Program",
      bio: "Commissioner in charge of the Uniformed Officers Mental Health Program, leading mental wellness initiatives for police and military personnel. ",
      image: "/images/wandera.jpeg",
      expertise: ["Mental Health Advocacy", "Program Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "wandera@ltwbb.org"
      }
    },
  ];

  // Board members data
  const boardMembers = [
    {
      name: "Dr. Margaret Njeri",
      role: "Board Chair",
      bio: "Experienced healthcare administrator with over 20 years in public health policy and mental health advocacy. Former Ministry of Health official.",
      image: "/team/margaret.jpg",
      expertise: ["Healthcare Policy", "Strategic Planning", "Public Health"],
      social: {
        linkedin: "#",
        email: "margaret@ltwbb.org"
      }
    },
    {
      name: "James Mwangi",
      role: "Treasurer",
      bio: "Chartered accountant with expertise in non-profit financial management and sustainability. Passionate about social impact investing.",
      image: "/team/james.jpg",
      expertise: ["Financial Management", "Non-Profit Governance", "Impact Investing"],
      social: {
        linkedin: "#",
        email: "james@ltwbb.org"
      }
    },
    {
      name: "Prof. Anne Wanjiku",
      role: "Board Member",
      bio: "Professor of Psychology specializing in community mental health and trauma recovery. Published researcher and mental health policy advisor.",
      image: "/team/anne.jpg",
      expertise: ["Clinical Psychology", "Research", "Policy Development"],
      social: {
        linkedin: "#",
        email: "anne@ltwbb.org"
      }
    }
  ];

  // Enhanced awards and recognition data
  const awards = [
    {
      title: "Community Mental Health Champion",
      organization: "Ministry of Health Kenya",
      year: "2024",
      description: "Recognized for outstanding contributions to community mental health services",
      icon: <Trophy className="h-8 w-8" />,
      category: "government"
    },
    {
      title: "Environmental Conservation Award",
      organization: "Kenya Forest Service",
      year: "2024",
      description: "Excellence in integrating mental health with environmental conservation",
      icon: <TreePine className="h-8 w-8" />,
      category: "environmental"
    },
    {
      title: "Youth Leadership Award",
      organization: "UNDP Kenya",
      year: "2023",
      description: "Innovative approach to youth mental health and empowerment",
      icon: <Star className="h-8 w-8" />,
      category: "international"
    },
    {
      title: "Community Service Excellence",
      organization: "Murang'a County Government",
      year: "2023",
      description: "Exceptional service to community wellbeing and development",
      icon: <Award className="h-8 w-8" />,
      category: "local"
    },
    {
      title: "Innovation in Mental Health",
      organization: "Mental Health Kenya",
      year: "2022",
      description: "Pioneering nature-based mental health interventions",
      icon: <Shield className="h-8 w-8" />,
      category: "professional"
    }
  ];

  const goals = [
    {
      year: "2025",
      items: [
        "Plant 100,000 trees",
        "Establish 5 mental health support hubs",
        "Train 500 youth ambassadors",
        "Launch digital mental health platform"
      ]
    },
    {
      year: "2026",
      items: [
        "Reach 10,000 individuals with mental health education",
        "Partner with 50 schools nationwide",
        "Establish counseling centers in 10 counties",
        "Achieve financial sustainability"
      ]
    }
  ];

  // Partners data
  const fundingPartners = [
    {
      name: "UNDP Kenya",
      type: "International Organization",
      description: "Supporting youth mental health and environmental conservation programs",
      logo: "/partners/undp.png",
      website: "https://www.undp.org/kenya"
    },
    {
      name: "USAID Kenya",
      type: "Development Agency",
      description: "Funding community mental health initiatives and capacity building",
      logo: "/partners/usaid.png",
      website: "https://www.usaid.gov/kenya"
    },
    {
      name: "Ford Foundation",
      type: "Philanthropic Foundation",
      description: "Supporting mental health advocacy and social justice programs",
      logo: "/partners/ford.png",
      website: "https://www.fordfoundation.org"
    },
    {
      name: "Global Fund for Children",
      type: "International Foundation",
      description: "Funding youth development and mental health education programs",
      logo: "/partners/gfc.png",
      website: "https://globalfundforchildren.org"
    },
    {
      name: "Mastercard Foundation",
      type: "Private Foundation",
      description: "Supporting youth entrepreneurship and mental wellness initiatives",
      logo: "/partners/mastercard.png",
      website: "https://mastercardfdn.org"
    },
    {
      name: "Rotary International",
      type: "Service Organization",
      description: "Community service grants for mental health and environmental projects",
      logo: "/partners/rotary.png",
      website: "https://www.rotary.org"
    }
  ];

  const strategicPartners = [
    {
      name: "Ministry of Health Kenya",
      type: "Government",
      description: "Policy support and national mental health program collaboration",
      logo: "/partners/moh.png",
      website: "https://www.health.go.ke"
    },
    {
      name: "Kenya Red Cross",
      type: "Humanitarian Organization",
      description: "Emergency mental health response and community outreach partnership",
      logo: "/partners/redcross.png",
      website: "https://www.redcross.or.ke"
    },
    {
      name: "Kenya Forest Service",
      type: "Government Agency",
      description: "Tree planting initiatives and environmental conservation programs",
      logo: "/partners/kenyaforest.png",
      website: "https://www.kenyaforestservice.org"
    },
    {
      name: "Mental Health Kenya",
      type: "Professional Organization",
      description: "Professional development and mental health advocacy collaboration",
      logo: "/partners/mhk.png",
      website: "https://www.mentalhealth.co.ke"
    },
    {
      name: "University of Nairobi",
      type: "Academic Institution",
      description: "Research partnership and mental health program development",
      logo: "/partners/uon.png",
      website: "https://www.uonbi.ac.ke"
    },
    {
      name: "Kenya Wildlife Service",
      type: "Government Agency",
      description: "Environmental education and conservation program partnership",
      logo: "/partners/kws.png",
      website: "https://www.kws.go.ke"
    },
    {
      name: "Murang'a County Government",
      type: "County Government",
      description: "Local program implementation and community engagement",
      logo: "/partners/muranga.png",
      website: "https://www.muranga.go.ke"
    },
    {
      name: "Amref Health Africa",
      type: "Health NGO",
      description: "Health service delivery and community health worker training",
      logo: "/partners/amref.png",
      website: "https://www.amref.org"
    }
  ];

  return (
    <div className="min-h-full py-30">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy text-white py-24 relative overflow-hidden">
        {/* Background with Nature Photo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[rgba(28,42,100,0.82)] to-brand-navy"></div>
          {/* Nature Background Image - Right Side */}
          <div className="absolute right-0 top-0 w-2/5 h-full opacity-30">
            <div className="w-full h-full bg-gradient-to-l from-transparent via-green-900/20 to-green-800/40"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[400px]">
            {/* Left Column - 60% */}
            <div className="lg:col-span-3 space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Your Voice, Your Power
                </h1>
                <p className="text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed mb-8">
                  Supporting individuals, institutions & communities across Kenya since 2021.
                </p>

                {/* Crisis Helpline */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h3 className="text-white font-semibold mb-3 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    In crisis? Call free 24/7:
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-white/80">📞</span>
                      <span className="text-white font-medium ml-2">Befrienders Kenya: 0800 723 253</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 40% */}
            <div className="lg:col-span-2 relative">
              {/* Professional Photo of Rhoda */}
              <div className="relative">
                <img
                  src="/images/nivishe.jpg"
                  alt="Rhoda Mwongela - LTWBB Founder"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                />

                {/* Top 10 Women Badge Overlay */}
                <div className="absolute top-4 left-4 bg-brand-crisis text-white px-3 py-2 rounded-lg shadow-lg">
                  <div className="text-xs font-bold">🏆 Top 10 Women in Mental Health 2026</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Link href="/contact">
                    Get Support Today
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Link href="/contact?subject=Partnership">
                    Partner
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
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

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-royal to-brand-light rounded-full"></div>

                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'}`}>
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-3">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg mr-3 ${item.type === 'milestone' ? 'from-brand-navy to-brand-royal' :
                              item.type === 'current' ? 'from-brand-crisis to-red-600' :
                                item.type === 'program' ? 'from-brand-green-safe to-green-600' :
                                  'from-brand-royal to-brand-light'
                            }`}>
                            {item.year}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{item.details}</p>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-sm text-gray-600">
                              <ChevronRight className="h-4 w-4 text-brand-royal mr-2 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-royal rounded-full shadow-lg z-10"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-royal to-brand-light rounded-full"></div>

                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className="absolute left-4 top-2 w-4 h-4 bg-white border-4 border-brand-royal rounded-full shadow-lg z-10 transform -translate-x-1/2"></div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/30 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg mr-3 ${item.type === 'milestone' ? 'from-brand-navy to-brand-royal' :
                            item.type === 'current' ? 'from-brand-crisis to-red-600' :
                              item.type === 'program' ? 'from-brand-green-safe to-green-600' :
                                'from-brand-royal to-brand-light'
                          }`}>
                          {item.year}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{item.details}</p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-600">
                            <ChevronRight className="h-4 w-4 text-brand-royal mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-white to-brand-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to mental wellness and environmental stewardship
            </p>
          </div>

          {/* Executive Team */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Executive Team</h3>
              <p className="text-gray-600">Our core leadership driving daily operations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    {/* Team Member Image */}
                    <div className="relative h-86 bg-gradient-to-br from-brand-navy to-brand-royal flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Team Member Info */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                      <p className="text-brand-royal font-medium mb-3">{member.role}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>

                      {/* Expertise */}
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-brand-navy mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-brand-light/50 text-brand-navy text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center space-x-3">
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-brand-royal transition-colors">
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-brand-royal transition-colors">
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-brand-royal transition-colors">
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* {/* Board of Directors */}
          <div>
            {/* <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Board of Directors</h3>
              <p className="text-gray-600">Strategic guidance and governance from experienced professionals</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {boardMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"> */}
                    {/* Board Member Image */}
                    {/* <div className="relative h-64 bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                      </div>
                    </div> */}

                    {/* Board Member Info */}
                    {/* <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                      <p className="text-brand-gold font-medium mb-3">{member.role}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p> */}

                      {/* Expertise */}
                      {/* <div className="mb-4">
                        <h4 className="text-sm font-semibold text-brand-navy mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-brand-gold/20 text-brand-navy text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div> */}

                      {/* Social Links */}
                      {/* <div className="flex items-center space-x-3">
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-brand-royal transition-colors">
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-brand-royal transition-colors">
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                      </div> */}
                    {/* </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div> 
        </div>
      </section>

      {/* Enhanced Awards & Recognition Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light/30 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honored for our commitment to mental health advocacy and climate action
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {awards.map((award, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 ${award.category === 'government' ? 'from-brand-navy to-brand-royal' :
                          award.category === 'environmental' ? 'from-brand-green-safe to-green-600' :
                            award.category === 'international' ? 'from-brand-gold to-yellow-600' :
                              award.category === 'local' ? 'from-brand-royal to-brand-light' :
                                'from-brand-navy to-brand-dark'
                        }`}>
                        {award.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-brand-royal mb-1">{award.year}</div>
                        <h3 className="text-lg font-bold text-brand-navy">{award.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Award Badges Component */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Certifications & Badges</h3>
                <p className="text-gray-600">Our commitment to excellence and standards</p>
              </div>
              <AwardBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-white to-brand-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with organizations that share our vision for mental wellness and environmental sustainability
            </p>
          </div>

          {/* Funding Partners */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Funding Partners</h3>
              <p className="text-gray-600">Organizations that make our work possible through generous support</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fundingPartners.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-navy">{partner.name}</h4>
                        <p className="text-sm text-brand-gold font-medium">{partner.type}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-royal hover:text-brand-navy font-medium text-sm transition-colors"
                    >
                      Visit Website
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Partners */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Strategic Partners</h3>
              <p className="text-gray-600">Organizations we collaborate with for program implementation and impact</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {strategicPartners.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-royal to-brand-light rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-brand-navy mb-1">{partner.name}</h4>
                      <p className="text-sm text-brand-royal font-medium mb-3">{partner.type}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{partner.description}</p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-royal hover:text-brand-navy font-medium text-sm transition-colors"
                      >
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
                  "Mental health is not just about treating illness-it's about creating communities
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

      {/* SDG Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light/40 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Global Goals, Local Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our work aligns with United Nations Sustainable Development Goal 3
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 shadow-xl text-center">
              <SDGBadge />
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                We are proud to contribute to SDG 3: Good Health and Well-being through our mental health
                programs, counseling services, and community wellness initiatives across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Impact Report Section */}
      <section className="py-20 bg-gradient-to-br from-white to-brand-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Annual Impact Report
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to transparency and measurable impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ImpactReport />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-royal text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-brand-crisis rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-brand-light">JOIN OUR MOVEMENT</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-brand-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're seeking support, want to volunteer, or interested in partnership opportunities,
              there's a place for you in our community.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-crisis to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get Support</h3>
                <p className="text-brand-light mb-4">Access our mental health services and programs</p>
                <Button asChild className="bg-white text-brand-navy hover:bg-gray-100 w-full">
                  <Link href="/contact">Get Help</Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                <p className="text-brand-light mb-4">Join our team of passionate volunteers</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy w-full">
                  <Link href="/contact?subject=Volunteer">Volunteer</Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green-safe to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
                <p className="text-brand-light mb-4">Collaborate for greater impact</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy w-full">
                  <Link href="/contact?subject=Partnership">Partner</Link>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-brand-light mb-4">
                Have questions? We're here to help.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-brand-light" />
                <span className="text-lg font-medium">Call us: 0800 723 253</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
