'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    try {
      // TODO: Implement newsletter subscription API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setSubscribeMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo + Tagline + Mission */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-royal to-brand-light flex items-center justify-center">
                  <Heart className="h-5 w-5 text-brand-navy" />
                </div>
                <h3 className="text-2xl font-bold">LTWBB</h3>
              </div>
              <p className="text-brand-light text-sm font-medium">
                Conversations Save Lives
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating safe spaces for mental health awareness while driving impactful 
              climate action through tree planting and environmental conservation.
            </p>
            <div className="pt-4">
              <div className="flex items-center space-x-2 text-brand-light text-xs">
                <span>🌱</span>
                <span>Planting hope, growing minds</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-brand-light flex items-center">
              <span className="w-2 h-2 bg-brand-royal rounded-full mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/resources', label: 'Resources' },
                { href: '/podcast', label: 'Podcast' },
                { href: '/events', label: 'Events' },
                { href: '/donate', label: 'Donate' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-brand-light hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center group"
                  >
                    <span className="w-1 h-1 bg-brand-royal rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-brand-light flex items-center">
              <span className="w-2 h-2 bg-brand-royal rounded-full mr-2"></span>
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/projects#tree-therapy', label: 'Tree Therapy', emoji: '🌳' },
                { href: '/projects#green-schools', label: 'Green Schools', emoji: '🏫' },
                { href: '/projects#youth-ambassadors', label: 'Youth Ambassadors', emoji: '🙋' },
                { href: '/projects#civil-servants', label: 'Civil Servants Program', emoji: '🛡️' },
                { href: '/projects#counseling-nature', label: 'Counseling in Nature', emoji: '🌿' },
              ].map((program, index) => (
                <li key={index}>
                  <Link 
                    href={program.href} 
                    className="text-gray-300 hover:text-brand-light hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center group"
                  >
                    <span className="mr-2">{program.emoji}</span>
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-brand-light flex items-center">
                <span className="w-2 h-2 bg-brand-royal rounded-full mr-2"></span>
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-brand-navy" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-brand-light transition-colors">+254 714 445791</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-brand-navy" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-brand-light transition-colors">info@ltwbb.org</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-brand-navy" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-brand-light transition-colors">Murang'a County, Kenya</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-brand-light flex items-center">
                <span className="w-2 h-2 bg-brand-royal rounded-full mr-2"></span>
                Newsletter
              </h4>
              <p className="text-sm text-gray-300">
                Get mental health tips and updates
              </p>
              <form onSubmit={handleNewsletterSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-brand-royal focus:bg-white/15 rounded-full px-4 py-3 transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy font-semibold rounded-full px-4 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  {isSubscribing ? (
                    <span className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-brand-navy border-t-transparent rounded-full animate-spin mr-2" />
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </span>
                  )}
                </Button>
              </form>
              {subscribeMessage && (
                <p className="text-sm text-brand-light bg-white/10 rounded-full px-3 py-1 text-center animate-pulse">{subscribeMessage}</p>
              )}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-brand-light flex items-center">
                <span className="w-2 h-2 bg-brand-royal rounded-full mr-2"></span>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/letstalkwithbossbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-royal hover:to-brand-light hover:text-brand-navy transition-all duration-300 ease-in-out transform hover:scale-110 border border-white/20 hover:shadow-lg"
                >
                  <span className="font-medium">📷</span>
                </a>
                <a
                  href="https://facebook.com/letstalkwithbossbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-royal hover:to-brand-light hover:text-brand-navy transition-all duration-300 ease-in-out transform hover:scale-110 border border-white/20 hover:shadow-lg"
                >
                  <span className="font-medium">📘</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 LTWBB CBO. All rights reserved. | Kenya Data Protection Act compliant
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
