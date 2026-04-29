'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Heart, X } from 'lucide-react';

const CrisisButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const crisisContacts = [
    {
      name: 'Befrienders Kenya',
      phone: '0800723253',
      description: 'Free, 24/7 support',
      isPrimary: true,
    },
    {
      name: 'Kenya Red Cross',
      phone: '1199',
      description: 'Emergency services',
      isPrimary: false,
    },
    {
      name: 'LTWBB Direct',
      phone: '+254714445791',
      description: 'Our support line',
      isPrimary: false,
    },
  ];

  return (
    <>
      {/* Mobile: Direct Phone Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[9999]">
        <Button
          asChild
          className="bg-gradient-to-r from-brand-crisis to-red-600 hover:from-red-600 hover:to-brand-crisis text-white rounded-full w-14 h-14 shadow-2xl animate-pulse border-4 border-white/30 backdrop-blur-sm transform hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-3xl"
          size="icon"
          aria-label="Get help now"
        >
          <a href="tel:0800723253">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>

      {/* Desktop: Floating Popup */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-[9999]">
        {/* Floating Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-brand-crisis to-red-600 hover:from-red-600 hover:to-brand-crisis text-white rounded-full w-16 h-16 shadow-2xl animate-pulse border-4 border-white/30 backdrop-blur-sm transform hover:scale-110 transition-all duration-300 ease-in-out group hover:shadow-3xl"
          size="icon"
          aria-label="Get help now"
        >
          <div className="absolute inset-2 rounded-full bg-white/20 animate-ping" />
          <Heart className="h-7 w-7 group-hover:scale-110 transition-transform duration-300 relative z-10" />
        </Button>

        {/* Floating Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Popup Header */}
            <div className="bg-gradient-to-r from-brand-navy to-brand-royal text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Crisis Support</h3>
                  <p className="text-sm text-brand-light/80">
                    Help is available right now
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Popup Content */}
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
              {crisisContacts.map((contact, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
                    contact.isPrimary
                      ? 'bg-red-50 border-brand-crisis hover:bg-red-100'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className={`font-semibold text-sm ${
                        contact.isPrimary ? 'text-brand-crisis' : 'text-brand-navy'
                      }`}>
                        {contact.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {contact.description}
                      </p>
                    </div>
                    {contact.isPrimary && (
                      <div className="bg-brand-crisis text-white text-xs px-2 py-1 rounded-full">
                        PRIMARY
                      </div>
                    )}
                  </div>
                  <Button
                    asChild
                    className={`w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
                      contact.isPrimary
                        ? 'bg-brand-crisis hover:bg-red-600'
                        : 'bg-brand-navy hover:bg-blue-700'
                    } text-white`}
                    size="sm"
                  >
                    <a href={`tel:${contact.phone}`} className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {contact.phone}
                    </a>
                  </Button>
                </div>
              ))}

              <div className="pt-3 border-t border-gray-200">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                  size="sm"
                >
                  <a href="/booking">
                    Book a Counseling Session
                  </a>
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  All conversations are confidential.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CrisisButton;
