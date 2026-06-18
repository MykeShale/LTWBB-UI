'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  ImageIcon,
  X,
  Camera,
  Award,
  Sparkles
} from 'lucide-react';

const CommunityGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Camera className="w-5 h-5" /> },
    { id: 'outreach', label: 'Community Outreach', icon: <Users className="w-5 h-5" /> },
    { id: 'events', label: 'Events & Workshops', icon: <Calendar className="w-5 h-5" /> },
    { id: 'wellness', label: 'Wellness Walks', icon: <Heart className="w-5 h-5" /> },
    { id: 'speaking', label: 'Speaking Engagements', icon: <Award className="w-5 h-5" /> }
  ];

  const galleryImages = [
    {
      id: '1',
      category: 'outreach',
      title: 'University Mental Health Campaign',
      description: 'Engaging with university students across Kenya to promote mental wellness and create safe spaces for open conversations.',
      date: '2024-03-15',
      location: 'University of Nairobi',
      featured: true,
      image: '/images/gallery/outreach-1.jpg'
    },
    {
      id: '2',
      category: 'events',
      title: 'Weekly Support Session',
      description: 'Our Wednesday support sessions bring together community members for shared healing and growth.',
      date: '2024-03-20',
      location: 'LTWBB Headquarters',
      featured: false,
      image: '/images/gallery/session-1.jpg'
    },
    {
      id: '3',
      category: 'wellness',
      title: 'Mental Wellness Walk',
      description: 'Community wellness walks combining physical activity with mental health awareness and peer support.',
      date: '2024-03-10',
      location: 'Karura Forest',
      featured: true,
      image: '/images/gallery/walk-1.jpg'
    },
    {
      id: '4',
      category: 'speaking',
      title: 'National Mental Health Conference',
      description: 'Speaking at national conference on youth mental health and suicide prevention strategies.',
      date: '2024-02-28',
      location: 'Kenyatta International Convention Centre',
      featured: true,
      image: '/images/gallery/conference-1.jpg'
    },
    {
      id: '5',
      category: 'outreach',
      title: 'High School Mental Health Program',
      description: 'Bringing mental health education and support to high school students in Murang\'a County.',
      date: '2024-03-05',
      location: 'Murang\'a High School',
      featured: false,
      image: '/images/gallery/school-1.jpg'
    },
    {
      id: '6',
      category: 'events',
      title: 'Tree Therapy Session',
      description: 'Connecting with nature as part of our therapeutic approach to mental wellness and healing.',
      date: '2024-02-20',
      location: 'Thika Road Forest',
      featured: false,
      image: '/images/gallery/tree-1.jpg'
    },
    {
      id: '7',
      category: 'speaking',
      title: 'AYLF Leadership Summit',
      description: 'Honoured to be a keynote speaker at the 3rd AYLF Leadership Summit, engaging with student leaders from all 54 African countries on "Building a New Africa for the 21st Century."',
      date: '2024-05-11',
      location: 'Mount Kenya University',
      featured: true,
      image: '/images/aylf.jpg'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.icon;
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-brand-light/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-[60px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-royal/10 text-brand-royal border-brand-royal/20 px-4 py-2">
            Community Impact
          </Badge>
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Journey in
            <br />
            <span className="text-brand-royal">Pictures & Stories</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Follow our journey as we create safe spaces, change lives, and build a mentally healthier Kenya, 
            one conversation at a time.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-brand-royal text-white shadow-lg'
                  : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image) => (
            <Card 
              key={image.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square">
                {/* Image */}
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-brand-navy/10 to-brand-royal/10 flex items-center justify-center hidden">
                  <ImageIcon className="w-16 h-16 text-brand-royal/30" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center mb-2">
                      {getCategoryIcon(image.category)}
                      <Badge className="ml-2 bg-white/20 text-white border-0 text-xs">
                        {categories.find(c => c.id === image.category)?.label}
                      </Badge>
                      {image.featured && (
                        <Badge className="ml-2 bg-brand-gold text-white">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.location}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                <h3 className="text-xl font-bold text-brand-navy">Gallery Details</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedImage(null)}
                  className="hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative aspect-square bg-gray-100">
                  <img 
                    src={selectedImageData.image} 
                    alt={selectedImageData.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 to-brand-royal/10 flex items-center justify-center hidden">
                    <ImageIcon className="w-24 h-24 text-brand-royal/30" />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {getCategoryIcon(selectedImageData.category)}
                    <Badge variant="secondary" className="ml-2">
                      {categories.find(c => c.id === selectedImageData.category)?.label}
                    </Badge>
                    {selectedImageData.featured && (
                      <Badge className="ml-2 bg-brand-gold text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">
                    {selectedImageData.title}
                  </h3>
                  
                  <p className="text-brand-dark leading-relaxed mb-6">
                    {selectedImageData.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-brand-gray">
                      <Calendar className="w-5 h-5 mr-3 text-brand-royal" />
                      <span>{new Date(selectedImageData.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-brand-gray">
                      <MapPin className="w-5 h-5 mr-3 text-brand-royal" />
                      <span>{selectedImageData.location}</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-brand-light/30">
                    <Button
                      asChild
                      className="w-full bg-brand-royal hover:bg-brand-royal-dark text-white font-medium"
                    >
                      <a href="#" className="flex items-center justify-center">
                        View Full Story
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-royal rounded-2xl p-12 text-white text-center">
          <h3 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Join Our Community
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of our mental wellness movement. Attend events, join programs, 
            or contribute your skills to support mental health in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-navy hover:bg-brand-light hover:text-brand-light px-8 py-4 rounded-lg font-semibold"
            >
              <a href="/events">
                Upcoming Events
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-brand-navy hover:bg-white hover:text-brand-navy px-8 py-4 rounded-lg font-medium"
            >
              <a href="/contact?subject=Volunteer">
                Volunteer With Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallerySection;
