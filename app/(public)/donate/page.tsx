'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Shield, Leaf, Users, Phone, Building2, CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

const DonatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    customAmount: '',
    frequency: 'one-time',
    paymentMethod: 'mpesa',
    category: 'general',
    message: '',
    anonymous: false,
    receipt: true
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState<any>(null);

  const donationCategories = [
    { id: 'general', label: 'General Support', icon: Heart, description: 'Support our overall mission and operations' },
    { id: 'mental-health', label: 'Mental Health Programs', icon: Shield, description: 'Fund counseling sessions and support groups' },
    { id: 'environment', label: 'Tree Planting', icon: Leaf, description: 'Support our environmental conservation efforts' },
    { id: 'youth', label: 'Youth Programs', icon: Users, description: 'Empower the next generation of mental health advocates' }
  ];

  const presetAmounts = ['500', '1000', '2500', '5000', '10000'];

  const handleAmountSelect = (amount: string) => {
    setFormData(prev => ({ ...prev, amount, customAmount: '' }));
  };

  const handleCustomAmount = (value: string) => {
    setFormData(prev => ({ ...prev, customAmount: value, amount: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const finalAmount = formData.customAmount || formData.amount;

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          amount: parseFloat(finalAmount),
          frequency: formData.frequency,
          paymentMethod: formData.paymentMethod,
          category: formData.category,
          message: formData.message,
          anonymous: formData.anonymous
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Thank you for your donation!', {
          duration: 5000,
          position: 'top-center'
        });
        setTransactionDetails(data);
        setDonationSuccess(true);
      } else {
        toast.error(data.error || 'Payment processing failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const mpesaTillNumber = '123456';
  const bankDetails = {
    bankName: 'Equity Bank Kenya',
    accountName: 'Let\'s Talk with Bossbaby CBO',
    accountNumber: '0123456789',
    branch: 'Murang\'a Branch',
    swiftCode: 'EQBLKENA'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      {!donationSuccess && (
        <div className="bg-gradient-to-r from-brand-navy to-brand-royal text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-brand-light" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Support Mental Wellness in Kenya
              </h1>
              <p className="text-xl text-brand-light max-w-3xl mx-auto">
                Your donation helps us provide free counseling, support groups, and mental health education to communities across Kenya.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success State */}
      {donationSuccess && transactionDetails && (
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <CheckCircle2 className="h-20 w-20 mx-auto mb-6 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Thank You for Your Donation!
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-4">
                {transactionDetails.message}
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto mt-8">
                <p className="text-sm text-green-100 mb-2">Transaction ID</p>
                <p className="text-2xl font-bold">{transactionDetails.transactionId}</p>
                <p className="text-sm text-green-100 mt-4 mb-2">Amount</p>
                <p className="text-2xl font-bold">KES {transactionDetails.amount}</p>
                {transactionDetails.nextSteps && (
                  <p className="text-sm text-green-100 mt-4">{transactionDetails.nextSteps}</p>
                )}
              </div>
              <div className="mt-8 space-x-4">
                <Button
                  asChild
                  variant="outline"
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3"
                >
                  <Link href="/">Return Home</Link>
                </Button>
                <Button
                  onClick={() => {
                    setDonationSuccess(false);
                    setTransactionDetails(null);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      amount: '',
                      customAmount: '',
                      frequency: 'one-time',
                      paymentMethod: 'mpesa',
                      category: 'general',
                      message: '',
                      anonymous: false,
                      receipt: true
                    });
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3"
                >
                  Make Another Donation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

 

      {/* Main Content */}
      {!donationSuccess && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Make Your Donation</CardTitle>
                <CardDescription>Choose how you'd like to support our mission</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Category */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">What would you like to support?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {donationCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div
                            key={category.id}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.category === category.id
                                ? 'border-brand-royal bg-brand-royal/5'
                                : 'border-gray-200 hover:border-brand-royal/50'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                          >
                            <Icon className="h-5 w-5 mb-2 text-brand-royal" />
                            <h3 className="font-semibold text-sm">{category.label}</h3>
                            <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Amount */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Select Amount (KES)</Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-3">
                      {presetAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={formData.amount === amount ? 'default' : 'outline'}
                          onClick={() => handleAmountSelect(amount)}
                          className={formData.amount === amount ? 'bg-brand-royal hover:bg-brand-navy' : ''}
                        >
                          KES {amount}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={formData.customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="text-lg"
                        min="100"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">KES</span>
                    </div>
                  </div>

                  {/* Step 3: Frequency */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Donation Frequency</Label>
                    <RadioGroup
                      value={formData.frequency}
                      onValueChange={(value: string) => setFormData(prev => ({ ...prev, frequency: value }))}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer flex-1">
                          <span className="font-semibold">One-time</span>
                          <span className="text-sm text-gray-600 ml-2">Single donation</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer flex-1">
                          <span className="font-semibold">Monthly</span>
                          <span className="text-sm text-gray-600 ml-2">Recurring support</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Step 4: Payment Method */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label htmlFor="mpesa" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-green-600" />
                            <div>
                              <span className="font-semibold">M-Pesa</span>
                              <span className="text-sm text-gray-600 ml-2">Instant mobile payment</span>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-brand-royal" />
                            <div>
                              <span className="font-semibold">Bank Transfer</span>
                              <span className="text-sm text-gray-600 ml-2">Direct bank deposit</span>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-brand-royal" />
                            <div>
                              <span className="font-semibold">Credit/Debit Card</span>
                              <span className="text-sm text-gray-600 ml-2">Visa, Mastercard (Coming Soon)</span>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="font-semibold">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                          disabled={formData.anonymous}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number (for M-Pesa) *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="07XX XXX XXX or +2547XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={formData.anonymous}
                        onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, anonymous: checked }))}
                      />
                      <Label htmlFor="anonymous" className="cursor-pointer">
                        Make this donation anonymous
                      </Label>
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Add a message of support..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isProcessing || !formData.amount && !formData.customAmount}
                    className="w-full bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-navy hover:to-brand-royal text-white font-semibold"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      `Donate KES ${formData.customAmount || formData.amount}`
                    )}
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Tax Deductible</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>100% Goes to Mission</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.paymentMethod === 'mpesa' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">M-Pesa Paybill</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Business Number:</span>
                        <p className="text-2xl font-bold text-green-700">{mpesaTillNumber}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Account Number:</span>
                        <p className="font-semibold">LTWBB</p>
                      </div>
                      <div className="pt-2 border-t border-green-200">
                        <p className="text-xs text-gray-600">
                          Enter the amount and your phone number. You'll receive an M-Pesa prompt to confirm.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'bank' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-5 w-5 text-brand-royal" />
                      <h3 className="font-semibold text-brand-navy">Bank Transfer</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Bank:</span>
                        <p className="font-semibold">{bankDetails.bankName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Account Name:</span>
                        <p className="font-semibold">{bankDetails.accountName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Account Number:</span>
                        <p className="font-semibold">{bankDetails.accountNumber}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Branch:</span>
                        <p className="font-semibold">{bankDetails.branch}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">SWIFT Code:</span>
                        <p className="font-semibold">{bankDetails.swiftCode}</p>
                      </div>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'card' && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Coming Soon</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Card payments will be available soon. Please use M-Pesa or bank transfer for now.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Impact Transparency */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">KES 500</p>
                    <p className="text-xs text-gray-600">Supports 1 counseling session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">KES 1,000</p>
                    <p className="text-xs text-gray-600">Funds a support group meeting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">KES 2,500</p>
                    <p className="text-xs text-gray-600">Plants 50 trees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">KES 10,000</p>
                    <p className="text-xs text-gray-600">Trains 10 youth ambassadors</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust & Security */}
            <Card className="shadow-lg bg-gradient-to-br from-brand-navy to-brand-royal text-white">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-light" />
                    <div>
                      <p className="font-semibold text-sm">100% Secure</p>
                      <p className="text-xs text-brand-light">Your data is protected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-light" />
                    <div>
                      <p className="font-semibold text-sm">Tax Deductible</p>
                      <p className="text-xs text-brand-light">Registered CBO in Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-brand-light" />
                    <div>
                      <p className="font-semibold text-sm">Transparent</p>
                      <p className="text-xs text-brand-light">Annual reports available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default DonatePage;
