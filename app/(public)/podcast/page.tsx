'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Mic, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function PodcastPage() {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const episodes = [
    {
      id: 1,
      title: "Nature's Healing: How Trees Help Our Mental Health",
      description: "Exploring the therapeutic benefits of connecting with nature and the science behind ecotherapy.",
      guest: "Dr. Sarah Kimani - Clinical Psychologist",
      date: "May 8, 2026",
      duration: "45 min",
      audioUrl: "#",
      transcript: "/podcast/natures-healing-transcript"
    },
    {
      id: 2,
      title: "Breaking the Silence: Mental Health in Kenyan Communities",
      description: "Addressing cultural barriers and stigma around mental health conversations in Kenya.",
      guest: "Rhoda Mwongela - LTWBB Founder",
      date: "May 1, 2026",
      duration: "38 min",
      audioUrl: "#",
      transcript: "/podcast/breaking-silence-transcript"
    },
    {
      id: 3,
      title: "Youth Mental Health: Navigating Modern Challenges",
      description: "Understanding the unique mental health challenges facing young people in today's digital world.",
      guest: "Dr. James Muriithi - Youth Mental Health Specialist",
      date: "April 24, 2026",
      duration: "42 min",
      audioUrl: "#",
      transcript: "/podcast/youth-mental-health-transcript"
    },
    {
      id: 4,
      title: "Tree Therapy: Planting Seeds of Hope",
      description: "How the simple act of planting trees can transform mental health and build community resilience.",
      guest: "John Kamau - Kenya Forest Service",
      date: "April 17, 2026",
      duration: "35 min",
      audioUrl: "#",
      transcript: "/podcast/tree-therapy-transcript"
    }
  ];

  const togglePlay = (episodeId: number) => {
    setIsPlaying(isPlaying === episodeId ? null : episodeId);
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-brand-light/30 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-royal to-brand-light rounded-full flex items-center justify-center">
                <Mic className="h-10 w-10 text-brand-navy" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk Podcast
            </h1>
            <p className="text-xl text-brand-light mb-8 max-w-2xl mx-auto">
              Honest conversations about mental health, wellness, and the healing power of nature. 
              Join us as we explore stories of hope, resilience, and recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-gray-100">
                Subscribe on Spotify
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                Listen on Apple Podcasts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Latest Episodes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              New episodes every Tuesday. Join our community of listeners committed to mental health awareness.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {episodes.map((episode) => (
              <Card key={episode.id} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-brand-light/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Play Button */}
                    <div className="flex-shrink-0">
                      <Button
                        size="lg"
                        onClick={() => togglePlay(episode.id)}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-royal to-brand-light hover:from-brand-light hover:to-brand-royal text-brand-navy shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {isPlaying === episode.id ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 ml-1" />
                        )}
                      </Button>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-brand-navy mb-2">
                            {episode.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {episode.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {episode.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {episode.duration}
                            </span>
                            <span className="font-medium text-brand-royal">
                              {episode.guest}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-4">
                        <Button variant="outline" size="sm" className="border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white">
                          Download Episode
                        </Button>
                        <Button variant="ghost" size="sm" className="text-brand-royal hover:text-brand-navy">
                          Read Transcript
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-brand-light to-brand-royal/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-brand-light/30 shadow-lg">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-lg text-brand-dark/70 mb-8">
              Get new episodes delivered to your inbox every Tuesday, plus exclusive bonus content.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-brand-navy to-brand-royal hover:from-brand-royal hover:to-brand-navy text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Subscribe to Podcast Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
