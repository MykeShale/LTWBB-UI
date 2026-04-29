'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar, ThumbsUp, ThumbsDown, Share2, BookOpen } from 'lucide-react';

// Mock data - will be replaced with Sanity data
const mockArticle = {
  _id: '1',
  title: 'What Is Mental Health? A Guide for Kenyans',
  slug: 'mental-health-guide-kenya',
  category: ['anxiety', 'general'],
  language: 'english',
  excerpt: 'Understanding mental health fundamentals and why it matters for everyone in Kenya.',
  body: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Mental health is a fundamental aspect of our overall wellbeing, yet it remains one of the most misunderstood topics in Kenya today. This guide aims to demystify mental health and provide practical information for everyone.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'What is Mental Health?'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Mental health encompasses our emotional, psychological, and social wellbeing. It affects how we think, feel, and act, and helps determine how we handle stress, relate to others, and make choices.'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Good mental health is not just the absence of mental illness. It\'s about having the ability to:'
        }
      ]
    },
    {
      _type: 'block',
      list: 'bullet',
      level: 0,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Realize your full potential'
        }
      ]
    },
    {
      _type: 'block',
      list: 'bullet',
      level: 0,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Cope with the stresses of life'
        }
      ]
    },
    {
      _type: 'block',
      list: 'bullet',
      level: 0,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Work productively and fruitfully'
        }
      ]
    },
    {
      _type: 'block',
      list: 'bullet',
      level: 0,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Make meaningful contributions to your community'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Why Mental Health Matters in Kenya'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'In Kenya, mental health challenges affect millions of people, yet stigma and lack of awareness prevent many from seeking help. Understanding mental health is the first step toward creating a more supportive society.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Common Mental Health Challenges'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Some of the most common mental health conditions in Kenya include:'
        }
      ]
    },
    {
      _type: 'block',
      list: 'bullet',
      level: 0,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Anxiety disorders'
        }
      ]
    },
    {
      _type: 'block',
      list: 'bullet',
      level: 0,
      style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Depression'
            }
          ]
        },
        {
          _type: 'block',
          list: 'bullet',
          level: 0,
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Post-traumatic stress disorder (PTSD)'
            }
          ]
        },
        {
          _type: 'block',
          list: 'bullet',
          level: 0,
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Substance use disorders'
            }
          ]
        }
      ],
  coverImage: null,
  readTime: 5,
  publishedAt: '2024-01-15T10:00:00Z',
  featured: true
};

const relatedArticles = [
  {
    title: 'Understanding Anxiety Disorders',
    slug: 'understanding-anxiety-disorders',
    category: ['anxiety'],
    readTime: 6
  },
  {
    title: 'Signs of Depression to Watch For',
    slug: 'depression-signs-kenya',
    category: ['depression'],
    readTime: 7
  },
  {
    title: 'How to Support Someone with Mental Health Challenges',
    slug: 'supporting-mental-health',
    category: ['relationships'],
    readTime: 8
  }
];

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(mockArticle);
  const [isLoading, setIsLoading] = useState(true);
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading article data
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Track reading progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [params.slug]);

  const handleHelpfulClick = (isHelpful: boolean) => {
    setHelpful(isHelpful);
    // TODO: Send feedback to backend
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'anxiety': 'bg-blue-100 text-blue-800',
      'depression': 'bg-purple-100 text-purple-800',
      'youth': 'bg-green-100 text-green-800',
      'mens-health': 'bg-orange-100 text-orange-800',
      'womens-health': 'bg-pink-100 text-pink-800',
      'relationships': 'bg-red-100 text-red-800',
      'environment-mind': 'bg-emerald-100 text-emerald-800',
      'grief': 'bg-gray-100 text-gray-800',
      'workplace-stress': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const renderBlockContent = (block: any) => {
    if (block.style === 'h2') {
      return (
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
          {block.children?.[0]?.text || ''}
        </h2>
      );
    }

    if (block.list === 'bullet') {
      return (
        <li className="ml-6 mb-2 list-disc">
          {block.children?.[0]?.text || ''}
        </li>
      );
    }

    return (
      <p className="text-gray-700 leading-relaxed mb-4">
        {block.children?.[0]?.text || ''}
      </p>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <p className="text-gray-500">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-brand-royal transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <section className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6 text-white hover:bg-white/20">
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
            
            <div className="flex items-center space-x-3 mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                {article.category[0]}
              </Badge>
              <div className="flex items-center space-x-4 text-brand-light text-sm">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime} min read
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-brand-light">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {article.body?.map((block: any, index: number) => (
                  <div key={index}>
                    {renderBlockContent(block)}
                  </div>
                ))}
              </div>

              {/* Feedback Section */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">
                  Was this article helpful?
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant={helpful === true ? "default" : "outline"}
                    onClick={() => handleHelpfulClick(true)}
                    className="flex items-center"
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful
                  </Button>
                  <Button
                    variant={helpful === false ? "default" : "outline"}
                    onClick={() => handleHelpfulClick(false)}
                    className="flex items-center"
                  >
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Not Helpful
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-brand-navy mb-8">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <Badge className={getCategoryColor(related.category[0])}>
                            {related.category[0]}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-brand-navy mb-3">
                          {related.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {related.readTime} min read
                          </span>
                          <Button asChild variant="ghost" className="text-brand-royal hover:text-brand-navy p-0">
                            <Link href={`/resources/${related.slug}`}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Crisis Support */}
                <Card className="border-l-4 border-l-brand-crisis">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">
                      Need to Talk to Someone?
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      If you're struggling, help is available 24/7.
                    </p>
                    <Button asChild size="sm" className="w-full bg-brand-crisis hover:bg-red-600">
                      <Link href="/crisis">
                        Get Help Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Book Session */}
                <Card className="border-l-4 border-l-brand-royal">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">
                      Book a Counseling Session
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Professional support tailored to your needs.
                    </p>
                    <Button asChild size="sm" className="w-full bg-brand-royal hover:bg-blue-600">
                      <Link href="/booking">
                        Book Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-l-4 border-l-brand-navy">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get new articles and resources delivered to your inbox.
                    </p>
                    <Button asChild size="sm" className="w-full bg-brand-navy hover:bg-blue-700">
                      <Link href="/#newsletter">
                        Subscribe
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
