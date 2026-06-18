'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-brand-light max-w-2xl mx-auto">
            We're here to listen and support you. Reach out to us for counseling, 
            partnerships, or general inquiries about our programs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gradient-to-br from-brand-light/50 to-white/80">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/60 backdrop-blur-sm border border-brand-light/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy mb-6">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand-royal flex items-center justify-center">
                      <Phone className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">Phone</h3>
                      <a 
                        href="tel:+254714445791" 
                        className="text-brand-dark/70 hover:text-brand-royal transition-colors"
                      >
                        +254 714 445791
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand-royal flex items-center justify-center">
                      <Mail className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">Email</h3>
                      <a 
                        href="mailto:letstalkwithbossbaby@gmail.com" 
                        className="text-brand-dark/70 hover:text-brand-royal transition-colors"
                      >
                        letstalkwithbossbaby@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand-royal flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">Location</h3>
                      <p className="text-brand-dark/70">
                        Murang'a County, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand-royal flex items-center justify-center">
                      <Clock className="h-6 w-6 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">Office Hours</h3>
                      <p className="text-brand-dark/70">
                        Monday–Saturday: 8am–6pm EAT
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/60 backdrop-blur-sm border border-brand-light/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-navy">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a
                      href="https://instagram.com/letstalkwithbossbaby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-brand-dark/70 hover:text-brand-royal transition-colors"
                    >
                      <span className="font-medium">📷</span>
                      <span>Instagram: @letstalkwithbossbaby</span>
                    </a>
                    <a
                      href="https://facebook.com/letstalkwithbossbaby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-brand-dark/70 hover:text-brand-royal transition-colors"
                    >
                      <span className="font-medium">📘</span>
                      <span>Facebook: Let's Talk with Bossbaby</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/letstalkwithbossbaby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-brand-dark/70 hover:text-brand-royal transition-colors"
                    >
                      <span className="font-medium">💼</span>
                      <span>LinkedIn: Let's Talk with Bossbaby</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Note */}
              <Card className="border-l-4 border-l-brand-crisis bg-gradient-to-br from-red-50 to-brand-light/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-crisis mb-2">
                    Mental Health Emergency?
                  </h3>
                  <p className="text-brand-dark/80 mb-3">
                    For immediate mental health support, please contact our crisis partners:
                  </p>
                  <div className="space-y-2">
                    <div>
                      <strong>Befrienders Kenya:</strong>{' '}
                      <a href="tel:0800723253" className="text-brand-crisis hover:underline">
                        0800 723 253 (Free, 24/7)
                      </a>
                    </div>
                    <div>
                      <strong>Kenya Red Cross:</strong>{' '}
                      <a href="tel:1199" className="text-brand-crisis hover:underline">
                        1199
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="bg-white/60 backdrop-blur-sm border border-brand-light/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-navy mb-6">
                    Send us a Message
                  </CardTitle>
                  <p className="text-brand-dark/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-brand-navy">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-brand-navy">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-brand-navy">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-brand-navy">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 XXX XXX XXX"
                        className="bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-brand-navy">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                        <SelectTrigger className="bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/90 backdrop-blur-sm border-brand-light/30">
                          <SelectItem value="counseling">Counseling Services</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-brand-navy">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-white/80 backdrop-blur-sm border-brand-light/40 focus:border-brand-royal"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-brand-navy border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>

                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-lg backdrop-blur-sm ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-50/80 text-green-700 border border-green-200/50' 
                        : 'bg-red-50/80 text-red-700 border border-red-200/50'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-white to-brand-light/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Find Us in Murang'a County
            </h2>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              We're proud to serve our community from the heart of Murang'a County, Kenya.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-navy to-brand-royal rounded-full mx-auto mb-6 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Murang'a County, Kenya
            </h3>
            <p className="text-brand-dark/70 mb-6">
              Our headquarters is centrally located to serve communities across Murang'a County and the surrounding regions.
            </p>
            <Button asChild className="bg-gradient-to-r from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
