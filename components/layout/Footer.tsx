'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AwardBadges from '@/components/ui/AwardBadges';
import SDGBadge from '@/components/ui/SDGBadge';
import { Mail, Phone, MapPin, Send, MessageSquare, Trees, GraduationCap, Users, Leaf, Sprout, Globe, Share2 } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
    <footer className="relative bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy text-white overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-royal/5 via-transparent to-brand-light/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-royal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-[60px] py-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
                <img
                  src="/logo.png"
                  alt="LTWBB Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>LTWBB</h3>
                <p className="text-brand-light text-xs font-medium">
                  Your Voice, Your Power
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <p className="text-white/90 text-sm leading-relaxed">
                Creating safe spaces for mental health awareness while driving impactful
                climate action through tree planting and environmental conservation.
              </p>
              <div className="flex items-center space-x-2 mt-3 text-brand-light">
                <Sprout className="h-4 w-4" />
                <span className="text-xs font-medium">Planting hope, growing minds</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wide">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              <ul className="space-y-1.5">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/resources', label: 'Resources' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-light transition-colors text-xs flex items-center gap-1.5"
                    >
                      <div className="w-1 h-1 bg-brand-royal rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5">
                {[
                  { href: '/podcast', label: 'Podcast' },
                  { href: '/events', label: 'Events' },
                  { href: '/donate', label: 'Donate' },
                  { href: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-light transition-colors text-xs flex items-center gap-1.5"
                    >
                      <div className="w-1 h-1 bg-brand-royal rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wide">Follow Us</h4>
              <div className="flex space-x-2">
                <a
                  href="https://instagram.com/letstalkwithbossbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-royal hover:to-brand-light hover:text-brand-navy transition-all duration-300 border border-white/20"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com/letstalkwithbossbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-royal hover:to-brand-light hover:text-brand-navy transition-all duration-300 border border-white/20"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/letstalkwithbossbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-royal hover:to-brand-light hover:text-brand-navy transition-all duration-300 border border-white/20"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/254714445791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700 hover:text-white transition-all duration-300 border border-white/20"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>
            
          </div>

          {/* Column 3: Programs & Contact */}
          <div className="space-y-4">
            {/* Programs */}
            {/* <div className="space-y-2">
              <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wide">Programs</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: '/projects#tree-therapy', label: 'Tree Therapy', icon: Trees },
                  { href: '/projects#green-schools', label: 'Green Schools', icon: GraduationCap },
                  { href: '/projects#youth-ambassadors', label: 'Youth Ambassadors', icon: Users },
                  { href: '/projects#counseling-nature', label: 'Counseling in Nature', icon: Leaf },
                ].map((program, index) => (
                  <Link
                    key={index}
                    href={program.href}
                    className="text-gray-300 hover:text-brand-light transition-colors text-xs flex items-center gap-1.5"
                  >
                    <program.icon className="h-3 w-3 text-brand-royal" />
                    {program.label}
                  </Link>
                ))}
              </div>
            </div> */}

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wide">Contact</h4>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5 text-brand-royal" />
                  <span className="text-xs text-gray-300">+254 714 445791</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5 text-brand-royal" />
                  <span className="text-xs text-gray-300">letstalkwithbossbaby@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-royal" />
                  <span className="text-xs text-gray-300">Murang'a County, Kenya</span>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-brand-light">Stay Connected</h4>
                <p className="text-xs text-gray-400">Get mental health tips and climate action updates</p>
              </div>
              <form onSubmit={handleNewsletterSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-brand-royal focus:bg-white/15 rounded-lg px-3 py-2 text-xs flex-1"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy font-semibold rounded-lg px-3 py-2 text-xs transition-all duration-300"
                >
                  {isSubscribing ? (
                    <div className="w-4 h-4 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </Button>
              </form>
            </div>

          </div>



        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-4 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-xs text-gray-400 text-center md:text-left">
              © 2026 LTWBB CBO. All rights reserved. | CBO Reg. No. OP.218/051/22-040/10623
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-3 text-xs">
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
              <span className="text-gray-500">Kenya Data Protection Act compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
