'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/support', label: 'Support' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Crisis Strip - Above Nav */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[var(--color-brand-navy-dark)] border-b border-[rgba(26,115,232,0.3)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] py-2">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center space-x-6 text-white text-sm">
            <span className="font-medium">Struggling right now?</span>
            <span className="font-mono text-xs">Befrienders: 0800 723 253</span>
            <span className="font-mono text-xs">NACADA: 1192</span>
            <span className="font-mono text-xs">Red Cross: 1199</span>
            <Button
              asChild
              size="sm"
              className="bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)] text-white px-3 py-1 h-auto text-xs"
            >
              <Link href="https://wa.me/254714445791" target="_blank">
                💬 WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white text-xs font-medium">Need help?</span>
                <span className="text-white text-xs font-mono">0800 723 253</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)] text-white px-2 py-1 h-auto text-xs"
                >
                  <Link href="tel:0800723253">
                    📞 Call
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-[var(--color-brand-royal)] hover:bg-[var(--color-brand-royal-dark)] text-white px-2 py-1 h-auto text-xs"
                >
                  <Link href="https://wa.me/254714445791" target="_blank">
                    💬 WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 md:top-[44px] left-0 right-0 z-50 h-16 md:h-20 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-brand-border/50'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="flex flex-col">
                <div 
                  className={`font-heading text-[14px] sm:text-[16px] md:text-[18px] tracking-[2px] md:tracking-[3px] font-bold transition-all duration-500 ${
                    isScrolled ? 'text-brand-navy' : 'text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  LTWBB
                </div>
                <div 
                  className={`font-body text-[6px] sm:text-[7px] md:text-[8px] leading-tight transition-all duration-500 ${
                    isScrolled ? 'text-brand-gray' : 'text-white/80'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Your Voice, Your Power
                </div>
              </div>
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[14px] font-medium transition-all duration-300 relative group py-2 ${
                    isActiveLink(link.href)
                      ? isScrolled ? 'text-brand-royal' : 'text-white'
                      : isScrolled
                      ? 'text-brand-gray hover:text-brand-navy'
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                  <span className={`absolute inset-x-0 -bottom-1 h-0.5 transform transition-transform duration-300 ${
                    isActiveLink(link.href) 
                      ? isScrolled ? 'bg-brand-royal scale-x-100' : 'bg-white scale-x-100'
                      : isScrolled 
                      ? 'bg-brand-royal scale-x-0 group-hover:scale-x-100'
                      : 'bg-white scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right - CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Donate */}
              <Button
                asChild
                variant="outline"
                className={`border-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                    : 'border-white text-brand-navy hover:bg-white hover:text-brand-royal'
                }`}
              >
                <Link href="/donate">
                  Donate
                </Link>
              </Button>

              {/* Get Support - Primary CTA */}
              <Button
                asChild
                className="bg-brand-royal hover:bg-brand-royal-dark text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/support">
                  Get Support
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile CTA Button */}
              <Button
                asChild
                size="sm"
                className={`bg-brand-royal hover:bg-brand-royal-dark text-white rounded-full p-2 h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 ${
                  isScrolled ? 'shadow-lg' : 'shadow-md'
                }`}
              >
                <Link href="/support">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isScrolled 
                        ? 'text-brand-navy hover:bg-brand-navy/10' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="bg-white/98 backdrop-blur-xl border-b border-brand-border/50 h-[70vh] sm:h-auto">
                  <div className="flex flex-col space-y-4 sm:space-y-6 mt-4 sm:mt-8">
                    {/* Mobile Navigation Links */}
                    <div className="space-y-1">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
                            isActiveLink(link.href)
                              ? 'text-white bg-brand-royal shadow-md'
                              : 'text-brand-dark hover:text-brand-royal hover:bg-brand-light/50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    {/* Mobile CTAs */}
                    <div className="pt-4 sm:pt-6 border-t border-brand-border space-y-2 sm:space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium text-sm sm:text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href="/donate">
                          Donate
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-brand-royal hover:bg-brand-royal-dark text-white font-semibold shadow-lg text-sm sm:text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href="/support">
                          Get Support
                        </Link>
                      </Button>
                    </div>

                    {/* Emergency Contacts in Mobile Menu */}
                    <div className="pt-4 border-t border-brand-border">
                      <div className="bg-brand-light/20 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-brand-navy text-sm sm:text-base mb-2">Emergency Contacts</h4>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-mono">Befrienders:</span>
                            <a href="tel:0800723253" className="text-brand-royal hover:underline">0800 723 253</a>
                          </div>
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-mono">NACADA:</span>
                            <a href="tel:1192" className="text-brand-royal hover:underline">1192</a>
                          </div>
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-mono">Red Cross:</span>
                            <a href="tel:1199" className="text-brand-royal hover:underline">1199</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
