'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  TreePine, 
  Shield, 
  Phone, 
  CreditCard,
  Smartphone,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target
} from 'lucide-react';
import Link from 'next/link';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [showThankYou, setShowThankYou] = useState(false);

  const predefinedAmounts = ['500', '1000', '2000', '5000'];

  const donationCategories = [
    {
      id: 'general',
      title: 'General Support',
      description: 'Support our mission to provide mental health services to all Kenyans',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-brand-royal to-brand-light'
    },
    {
      id: 'therapy',
      title: 'Therapy Fund',
      description: 'Help provide free counseling sessions to those who cannot afford them',
      icon: <Users className="w-6 h-6" />,
      color: 'from-brand-navy to-brand-royal'
    },
    {
      id: 'tree-therapy',
      title: 'Tree Therapy Program',
      description: 'Support our innovative nature-based mental wellness initiatives',
      icon: <TreePine className="w-6 h-6" />,
      color: 'from-brand-green-safe to-green-600'
    },
    {
      id: 'crisis',
      title: 'Crisis Response',
      description: 'Fund our 24/7 emergency mental health support services',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-brand-crisis to-red-600'
    }
  ];

  const impactMetrics = [
    {
      amount: '500',
      impact: 'Counseling session for 1 person',
      icon: <Users className="w-5 h-5" />
    },
    {
      amount: '1000',
      impact: 'Group therapy for 5 people',
      icon: <Heart className="w-5 h-5" />
    },
    {
      amount: '2000',
      impact: 'Tree therapy session for 10 people',
      icon: <TreePine className="w-5 h-5" />
    },
    {
      amount: '5000',
      impact: 'Mental health training for 25 youth',
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const handleDonation = () => {
    const amount = selectedAmount || customAmount;
    if (!amount) return;
    
    // Here you would integrate with M-Pesa API
    console.log('Processing donation:', {
      amount,
      type: donationType,
      category: 'general' // This would be dynamic based on selection
    });
    
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  const mpesaTillNumber = '123456'; // Replace with actual LTWBB M-Pesa till number
  const phoneNumber = '+254714445791'; // Replace with actual LTWBB phone number

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-brand-light/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-brand-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-[60px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-gold/10 text-brand-gold border-brand-gold/20 px-4 py-2">
            Support Our Mission
          </Badge>
          <h2 
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Support Mental
            <br />
            <span className="text-brand-gold">Wellness Access</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Your generosity helps us provide free mental health services, run community programs, 
            and reach more Kenyans with life-saving support and resources.
          </p>
        </div>

        {/* Impact Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card 
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-brand-light/30 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center text-brand-royal mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-brand-gold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  KSH {metric.amount}
                </div>
                <div className="font-semibold text-brand-navy mb-1">Impact:</div>
                <div className="text-sm text-brand-dark">{metric.impact}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Form */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border border-brand-light/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Make a Donation</h3>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-brand-navy mb-3 block">Donation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={donationType === 'one-time' ? "default" : "outline"}
                      onClick={() => setDonationType('one-time')}
                      className={`${
                        donationType === 'one-time'
                          ? 'bg-brand-royal text-white'
                          : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                      }`}
                    >
                      One-time
                    </Button>
                    <Button
                      variant={donationType === 'monthly' ? "default" : "outline"}
                      onClick={() => setDonationType('monthly')}
                      className={`${
                        donationType === 'monthly'
                          ? 'bg-brand-royal text-white'
                          : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                      }`}
                    >
                      Monthly
                    </Button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-brand-navy mb-3 block">Select Amount (KSH)</label>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`${
                          selectedAmount === amount
                            ? 'bg-brand-royal text-white'
                            : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                        }`}
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Custom Amount */}
                  <input
                    type="number"
                    placeholder="Or enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('');
                    }}
                    className="w-full px-4 py-3 border border-brand-light/30 rounded-lg focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 text-brand-navy"
                  />
                </div>

                {/* Donation Button */}
                <Button
                  onClick={handleDonation}
                  disabled={!selectedAmount && !customAmount}
                  className="w-full bg-brand-gold hover:bg-yellow-600 text-white font-bold py-4 rounded-lg text-lg disabled:opacity-50"
                >
                  Donate Now
                </Button>

                {/* M-Pesa Information */}
                <div className="mt-6 p-4 bg-brand-light/30 rounded-lg border border-brand-light/50">
                  <div className="flex items-center mb-2">
                    <Smartphone className="w-5 h-5 text-brand-royal mr-2" />
                    <span className="font-semibold text-brand-navy">M-Pesa Till Number:</span>
                  </div>
                  <div className="text-2xl font-bold text-brand-royal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {mpesaTillNumber}
                  </div>
                  <p className="text-sm text-brand-dark">
                    Business Name: LETS TALK WITH BOSSBABY
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Categories */}
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Where Your Support Goes</h3>
            <div className="space-y-4">
              {donationCategories.map((category, index) => (
                <Card 
                  key={category.id}
                  className="bg-white/70 backdrop-blur-sm border border-brand-light/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-navy text-lg mb-2">{category.title}</h4>
                        <p className="text-brand-dark leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Alternative Donation Methods */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 mb-16">
          <h3 className="text-xl font-bold text-brand-navy mb-6 text-center">Other Ways to Give</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center text-brand-royal mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Direct Bank Transfer</h4>
              <p className="text-brand-dark text-sm mb-3">
                Account Name: LETS TALK WITH BOSSBABY<br />
                Bank: Equity Bank Kenya<br />
                Account: 1234567890
              </p>
              <Button variant="outline" className="border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white">
                Copy Details
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center text-brand-royal mx-auto mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Partnership Support</h4>
              <p className="text-brand-dark text-sm mb-3">
                Partner with us to support our mental health programs through corporate social responsibility.
              </p>
              <Button asChild variant="outline" className="border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white">
                <Link href="/contact?subject=Partnership">
                  Become a Partner
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust & Transparency */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-royal rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>95%</div>
              <div className="font-semibold mb-1">Program Efficiency</div>
              <div className="text-sm text-white/80">Of donations go directly to programs</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>100%</div>
              <div className="font-semibold mb-1">Transparency</div>
              <div className="text-sm text-white/80">Annual reports available to all donors</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>501(c)3</div>
              <div className="font-semibold mb-1">Tax Deductible</div>
              <div className="text-sm text-white/80">All donations are tax-deductible</div>
            </div>
          </div>
        </div>

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md p-8 text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Thank You!</h3>
              <p className="text-brand-dark mb-6">
                Your generous donation will help us continue providing mental health support to communities across Kenya.
              </p>
              <div className="bg-brand-light/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-brand-dark mb-2">Next Steps:</p>
                <ol className="text-sm text-brand-dark text-left space-y-1">
                  <li>1. Check your M-Pesa for payment confirmation</li>
                  <li>2. You'll receive a receipt via email</li>
                  <li>3. We'll send updates on how your donation is making impact</li>
                </ol>
              </div>
              <Button
                onClick={() => setShowThankYou(false)}
                className="bg-brand-royal hover:bg-brand-royal-dark text-white"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DonationSection;
