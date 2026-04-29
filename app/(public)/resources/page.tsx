'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Clock, BookOpen, Filter } from 'lucide-react';
import Link from 'next/link';

// Mock data for now - will be replaced with Sanity data
const mockArticles = [
  {
    _id: '1',
    title: 'What Is Mental Health? A Guide for Kenyans',
    slug: 'mental-health-guide-kenya',
    category: ['anxiety', 'general'],
    language: 'english',
    excerpt: 'Understanding mental health fundamentals and why it matters for everyone in Kenya.',
    coverImage: null,
    readTime: 5,
    publishedAt: '2024-01-15T10:00:00Z',
    featured: true
  },
  {
    _id: '2',
    title: 'Afya ya Akili ni Nini? Mwongozo kwa Wakenya',
    slug: 'afya-ya-akili-mwongozo',
    category: ['anxiety', 'general'],
    language: 'swahili',
    excerpt: 'Kuelewa msingi wa afya ya akili na kwa nini ni muhimu kwa kila Mkenya.',
    coverImage: null,
    readTime: 6,
    publishedAt: '2024-01-16T10:00:00Z',
    featured: false
  },
  {
    _id: '3',
    title: 'Why Men in Kenya Don\'t Seek Help — And How to Change That',
    slug: 'mens-mental-health-kenya',
    category: ['mens-health'],
    language: 'english',
    excerpt: 'Exploring the barriers men face in seeking mental health support and solutions.',
    coverImage: null,
    readTime: 8,
    publishedAt: '2024-01-17T10:00:00Z',
    featured: false
  },
  {
    _id: '4',
    title: 'How Trees and Nature Help Our Mental Health',
    slug: 'nature-mental-health-benefits',
    category: ['environment-mind'],
    language: 'english',
    excerpt: 'The scientific connection between nature exposure and improved mental wellbeing.',
    coverImage: null,
    readTime: 7,
    publishedAt: '2024-01-18T10:00:00Z',
    featured: true
  },
  {
    _id: '5',
    title: 'Signs Your Teenager May Be Struggling',
    slug: 'teen-mental-health-signs',
    category: ['youth'],
    language: 'english',
    excerpt: 'Recognizing warning signs and providing support for teenage mental health challenges.',
    coverImage: null,
    readTime: 6,
    publishedAt: '2024-01-19T10:00:00Z',
    featured: false
  }
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'anxiety', label: 'Anxiety' },
  { value: 'depression', label: 'Depression' },
  { value: 'youth', label: 'Youth' },
  { value: 'mens-health', label: 'Men\'s Health' },
  { value: 'womens-health', label: 'Women\'s Health' },
  { value: 'relationships', label: 'Relationships' },
  { value: 'environment-mind', label: 'Environment & Mind' },
  { value: 'grief', label: 'Grief' },
  { value: 'workplace-stress', label: 'Workplace Stress' }
];

const languages = [
  { value: 'all', label: 'All' },
  { value: 'english', label: 'English' },
  { value: 'swahili', label: 'Swahili' },
  { value: 'both', label: 'Both' }
];

export default function ResourcesPage() {
  const [articles, setArticles] = useState(mockArticles);
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    filterArticles();
  }, [searchQuery, selectedCategory, selectedLanguage, articles]);

  const filterArticles = () => {
    let filtered = articles;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article =>
        article.category.includes(selectedCategory)
      );
    }

    // Filter by language
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(article =>
        article.language === selectedLanguage || article.language === 'both'
      );
    }

    setFilteredArticles(filtered);
  };

  const featuredArticle = articles.find(article => article.featured);

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

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mental Health Resources
          </h1>
          <p className="text-xl text-brand-light max-w-3xl mx-auto">
            Evidence-based articles, guides, and resources to support your mental health journey. 
            Available in both English and Swahili.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Filter */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-royal"
            >
              {languages.map(language => (
                <option key={language.value} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-brand-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Featured Article</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className={getCategoryColor(featuredArticle.category[0])}>
                        {categories.find(cat => cat.value === featuredArticle.category[0])?.label}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {featuredArticle.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-brand-navy mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <Button asChild size="lg" className="bg-brand-royal hover:bg-blue-600">
                      <Link href={`/resources/${featuredArticle.slug}`}>
                        Read Article
                        <BookOpen className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="h-16 w-16 text-brand-royal mb-4" />
                      <p className="text-sm text-gray-500">
                        {new Date(featuredArticle.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-brand-navy">
              All Articles ({filteredArticles.length})
            </h2>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading articles...</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article._id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge className={getCategoryColor(article.category[0])}>
                        {categories.find(cat => cat.value === article.category[0])?.label}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime} min</span>
                      </div>
                      <Button asChild variant="ghost" className="text-brand-royal hover:text-brand-navy p-0">
                        <Link href={`/resources/${article.slug}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Crisis Support */}
      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4">
          <Card className="border-l-4 border-l-brand-crisis">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Need to Talk to Someone?
              </h3>
              <p className="text-gray-600 mb-4">
                If you're struggling with your mental health, remember that help is available. 
                You don't have to face this alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-crisis hover:bg-red-600">
                  <Link href="/crisis">
                    Get Immediate Help
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  <Link href="/booking">
                    Book a Session
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
