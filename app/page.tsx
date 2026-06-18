import HeroSection from '@/components/sections/HeroSection';
import ImpactStats from '@/components/sections/ImpactStats';
import FounderSpotlight from '@/components/sections/FounderSpotlight';
import ProgramsSection from '@/components/sections/ProgramsSection';
import SupportSection from '@/components/sections/SupportSection';
import ResourcesPreview from '@/components/sections/ResourcesPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WebinarsSection from '@/components/sections/WebinarsSection';
import StoryTimeline from '@/components/sections/StoryTimeline';
import PartnershipSection from '@/components/sections/PartnershipSection';
import DonateSection from '@/components/sections/DonateSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import CrisisBand from '@/components/sections/CrisisBand';
import MoodCheckIn from '@/components/widgets/MoodCheckIn';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Founder Spotlight */}
      <FounderSpotlight />
      
      {/* Programs Section */}
      <ProgramsSection />
      
      {/* Support Section */}
      <SupportSection />
      
      {/* Resources Preview */}
      <ResourcesPreview />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Webinars */}
      <WebinarsSection />
      
      {/* Story Timeline */}
      <StoryTimeline />
      
      {/* Institutional Partnership */}
      <PartnershipSection />
      
      {/* Donate Section */}
      <DonateSection />
      
      {/* Mood Check-in Widget */}
      <MoodCheckIn />
      
      {/* Newsletter */}
      {/* <NewsletterSection /> */}
      
      {/* Crisis Band */}
      <CrisisBand />
    </div>
  );
}
