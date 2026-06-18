'use client';

import { Award, Star } from 'lucide-react';

const AwardBadges = () => {
  const awards = [
    {
      year: "2022",
      title: "Activist of the Year",
      organization: "Kenya Mental Health Advocacy Network",
      icon: <Star className="h-4 w-4" />
    },
    {
      year: "2026", 
      title: "Young Advocate Award",
      organization: "African Youth Climate Initiative",
      icon: <Award className="h-4 w-4" />
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {awards.map((award, index) => (
        <div 
          key={index}
          className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-brand-gold/20 to-brand-gold/10 border border-brand-gold/30 rounded-full hover:bg-brand-gold/20 transition-all duration-300 group"
        >
          <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-300">
            <div className="text-white text-xs">
              {award.icon}
            </div>
          </div>
          <div className="text-xs">
            <div className="font-semibold text-brand-dark">{award.title}</div>
            <div className="text-brand-dark/70">{award.year}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardBadges;
