'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Globe, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const pathname = usePathname();
  
  // Detect if we're on crisis page
  const isCrisisPage = pathname === '/crisis';

  const navLinks = [
    { href: '/', label: { en: 'Home', sw: 'Nyumbani' } },
    { href: '/about', label: { en: 'About', sw: 'Kuhusu' } },
    { href: '/projects', label: { en: 'Projects', sw: 'Miradi' } },
    { href: '/resources', label: { en: 'Resources', sw: 'Rasilimali' } },
    { href: '/webinars', label: { en: 'Webinars', sw: 'Webinari' } },
    { href: '/podcast', label: { en: 'Podcast', sw: 'Podcasti' } },
    { href: '/events', label: { en: 'Events', sw: 'Matukio' } },
    { href: '/contact', label: { en: 'Contact', sw: 'Mawasiliano' } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('ltwbb-language') as 'en' | 'sw' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = (newLang: 'en' | 'sw') => {
    setLanguage(newLang);
    localStorage.setItem('ltwbb-language', newLang);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 shadow-lg border-b border-brand-light/20'
          : isCrisisPage
          ? 'bg-brand-light/80 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-brand-navy to-brand-royal shadow-lg' 
                  : isCrisisPage
                  ? 'bg-gradient-to-br from-brand-navy to-brand-royal shadow-md'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}>
                <div className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}>
                  L
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-brand-navy' : isCrisisPage ? 'text-brand-navy' : 'text-white'
              }`}>
                LTWBB
              </div>
              <div className={`text-xs font-light transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : isCrisisPage ? 'text-brand-navy/70' : 'text-brand-light/80'
              }`}>
                Conversations Save Lives
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-md font-bold transition-all duration-300 relative group ${
                    isActiveLink(link.href)
                      ? 'text-white bg-gradient-to-r from-brand-navy to-brand-royal shadow-md'
                      : isScrolled
                      ? 'text-gray-700 hover:text-brand-navy hover:bg-brand-light/30'
                      : isCrisisPage
                      ? 'text-brand-navy hover:text-brand-navy hover:bg-brand-light/30'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label[language]}
                  <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-brand-royal to-brand-navy transform transition-transform duration-300 ${
                    isActiveLink(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Language Toggle & CTA */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
              {/* Language Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02] ${
                      isScrolled 
                        ? 'hover:bg-brand-light/30 text-gray-600 hover:text-brand-navy' 
                        : isCrisisPage
                        ? 'hover:bg-brand-light/30 text-brand-navy/80 hover:text-brand-navy'
                        : 'hover:bg-white/10 text-white/80 hover:text-white'
                    }`}
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-xs font-medium">{language.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-brand-light/20 shadow-lg">
                  <DropdownMenuItem 
                    onClick={() => toggleLanguage('en')}
                    className="hover:bg-brand-light/30"
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => toggleLanguage('sw')}
                    className="hover:bg-brand-light/30"
                  >
                    Swahili
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Get Help Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-brand-crisis to-red-600 hover:from-red-600 hover:to-brand-crisis text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-white/20"
              >
                <Link href="/crisis">
                  <Phone className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Get Help Now' : 'Pata Msaada Sasa'}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile CTA Button */}
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-brand-crisis to-red-600 hover:from-red-600 hover:to-brand-crisis text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="/crisis">
                <Phone className="h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`p-2 rounded-full transition-all duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02] ${
                    isScrolled 
                      ? 'hover:bg-brand-light/30 text-gray-600 hover:text-brand-navy' 
                      : 'hover:bg-white/10 text-white hover:text-white'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-white/95 backdrop-blur-md border-b border-brand-light/20">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center justify-between pb-6 border-b border-brand-light/20">
                    <span className="text-sm font-semibold text-brand-navy">Language</span>
                    <div className="flex space-x-2">
                      <Button
                        variant={language === 'en' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleLanguage('en')}
                        className={`transition-all duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02] ${
                          language === 'en' 
                            ? 'bg-brand-navy text-white hover:bg-brand-navy/90' 
                            : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                        }`}
                      >
                        EN
                      </Button>
                      <Button
                        variant={language === 'sw' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleLanguage('sw')}
                        className={`transition-all duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02] ${
                          language === 'sw' 
                            ? 'bg-brand-navy text-white hover:bg-brand-navy/90' 
                            : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                        }`}
                      >
                        SW
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                          isActiveLink(link.href)
                            ? 'text-white bg-gradient-to-r from-brand-navy to-brand-royal shadow-md'
                            : 'text-gray-700 hover:text-brand-navy hover:bg-brand-light/30'
                        }`}
                      >
                        {link.label[language]}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-brand-light/20">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-brand-crisis to-red-600 hover:from-red-600 hover:to-brand-crisis text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/crisis">
                        <Phone className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Get Help Now' : 'Pata Msaada Sasa'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
