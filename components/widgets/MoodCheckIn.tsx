'use client';

import { useState } from 'react';

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { emoji: '😞', label: 'Struggling', type: 'crisis' },
    { emoji: '😔', label: 'Low', type: 'crisis' },
    { emoji: '😐', label: 'Okay', type: 'neutral' },
    { emoji: '🙂', label: 'Good', type: 'positive' },
    { emoji: '😊', label: 'Thriving', type: 'positive' }
  ];

  const handleMoodSelect = (mood: typeof moods[0]) => {
    setSelectedMood(mood.emoji);
  };

  const getResponse = () => {
    if (!selectedMood) return null;

    const mood = moods.find(m => m.emoji === selectedMood);
    if (!mood) return null;

    switch (mood.type) {
      case 'crisis':
        return {
          title: 'Support is Available',
          message: 'You\'re not alone. Help is available 24/7.',
          action: 'Want to talk? Chat with Wanjiku →',
          link: '#chat'
        };
      case 'neutral':
        return {
          title: 'Join Our Community',
          message: 'This week\'s webinar could help you feel better.',
          action: 'Join our Wednesday session →',
          link: '#webinars'
        };
      case 'positive':
        return {
          title: 'Share Your Wellness',
          message: 'Help others feel this way too.',
          action: 'Help others feel this way →',
          link: '/volunteer'
        };
      default:
        return null;
    }
  };

  const response = getResponse();

  return (
    <section className="py-16" style={{ background: 'rgba(214,228,255,0.3)' }}>
      <div className="max-w-[600px] mx-auto px-[60px] text-center">
        <h3 
          className="text-[var(--color-brand-navy)] mb-8"
          style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: '28px',
            lineHeight: '1.2'
          }}
        >
          How are you feeling today?
        </h3>

        {/* Emoji Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          {moods.map((mood) => (
            <button
              key={mood.emoji}
              onClick={() => handleMoodSelect(mood)}
              className={`text-5xl p-4 rounded-xl transition-all duration-300 hover:scale-110 ${
                selectedMood === mood.emoji
                  ? 'scale-110 shadow-lg'
                  : 'hover:bg-white/50'
              } ${
                selectedMood && selectedMood !== mood.emoji
                  ? 'opacity-40'
                  : ''
              }`}
              style={{
                fontSize: '48px'
              }}
            >
              {mood.emoji}
            </button>
          ))}
        </div>

        {/* Response */}
        {response && (
          <div 
            className="bg-white p-6 rounded-[16px] shadow-lg animate-fade-in"
            style={{
              opacity: selectedMood ? 1 : 0,
              transform: selectedMood ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <h4 
              className="text-[var(--color-brand-navy)] mb-3"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                lineHeight: '1.2'
              }}
            >
              {response.title}
            </h4>
            <p 
              className="text-[var(--color-brand-text-dark)] mb-4"
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            >
              {response.message}
            </p>
            <a
              href={response.link}
              className="inline-flex items-center text-[var(--color-brand-royal)] hover:text-[var(--color-brand-royal-dark)] font-medium transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {response.action}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodCheckIn;
