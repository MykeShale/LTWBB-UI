import { NextRequest, NextResponse } from 'next/server';

// This would integrate with Claude API or other AI service
// For now, we'll use a sophisticated rule-based system

const MENTAL_HEALTH_RESPONSES = {
  anxiety: [
    "I understand anxiety can feel overwhelming. Try the 4-7-8 breathing technique: breathe in for 4 counts, hold for 7, and exhale for 8. This can help calm your nervous system. What's triggering your anxiety right now?",
    "Anxiety is your body's natural response to stress. Let's work through this together. Ground yourself by naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. How does that feel?",
    "When anxiety strikes, remember that this feeling will pass. You've gotten through difficult moments before. What coping strategies have worked for you in the past?"
  ],
  depression: [
    "I'm sorry you're feeling this way. Depression can make everything feel heavy. Remember that feelings are temporary, even when they don't feel like it. What's one small thing that might bring you a moment of comfort right now?",
    "It takes courage to acknowledge these feelings. You're not alone - many people experience depression. Have you been able to talk to anyone about how you're feeling?",
    "When everything feels overwhelming, focus on just the next hour. What's one small, kind thing you can do for yourself in the next hour?"
  ],
  stress: [
    "Stress can be really draining. Your body and mind need breaks. Even 5 minutes of deep breathing or stepping outside can help reset your nervous system. What's causing you the most stress right now?",
    "Chronic stress affects both your mental and physical health. It's important to address it. What responsibilities could you potentially delegate or postpone?",
    "When stress builds up, try progressive muscle relaxation: tense each muscle group for 5 seconds, then release. Start with your toes and work up to your head. How are you feeling now?"
  ],
  suicide: [
    "I'm really concerned about you. Your life is valuable and there are people who want to help you. Please call Befrienders Kenya right now at 0800 723 253 - it's free and available 24/7. They are trained to help in moments like this.",
    "Please don't go through this alone. Call Kenya Red Cross at 1199 or Befrienders Kenya at 0800 723 253. These services are free, confidential, and available right now. Your life matters.",
    "I want you to know that help is available and you deserve support. Please call Befrienders Kenya at 0800 723 253 or Kenya Red Cross at 1199. There are people who care about you and want to help."
  ],
  help: [
    "I'm here to support you. For immediate 24/7 support, you can call Befrienders Kenya at 0800 723 253 (free) or Kenya Red Cross at 1199. Would you like to talk more about what you're experiencing?",
    "Help is available. In Kenya, you have free options: Befrienders Kenya at 0800 723 253 (24/7) or Kenya Red Cross at 1199. You can also reach out to LTWBB directly at +254 714 445791 during business hours."
  ],
  loneliness: [
    "Loneliness can be painful, but you're not truly alone in feeling this way. Many people experience loneliness, especially in difficult times. What kind of connection would feel meaningful to you right now?",
    "I hear how lonely you're feeling. Sometimes reaching out, even in small ways, can help. Have you considered joining one of LTWBB's support groups or webinars?",
    "Your feelings are valid. Loneliness is a human experience. What's one small step you could take toward connection today?"
  ],
  relationship: [
    "Relationships can be complex and emotionally draining. It's important to have healthy boundaries and communication. What specific aspect of your relationship is troubling you?",
    "Relationship challenges can affect our mental health significantly. Remember that you deserve to be treated with respect and kindness. What would a healthy relationship look like to you?",
    "Whether it's romantic, family, or friendship relationships, they all require work and understanding. What support do you need in navigating this situation?"
  ],
  work: [
    "Work-related stress can spill over into all areas of life. It's important to set boundaries and practice self-care. What's the most challenging aspect of your work situation right now?",
    "Work pressure can feel overwhelming. Remember that your worth isn't defined by your productivity. What would help you feel more balanced?",
    "Many people struggle with work-related mental health issues. You're not alone in this. What changes, even small ones, might improve your work situation?"
  ]
};

const GENERAL_RESPONSES = [
  "Thank you for sharing that with me. It takes courage to open up. How long have you been feeling this way?",
  "I'm here to listen without judgment. Your feelings are valid. Can you tell me more about what's on your mind?",
  "That sounds really challenging. You're showing strength by reaching out. What would be most helpful for you right now?",
  "I appreciate you trusting me with this. Let's explore this together. What does your intuition tell you about this situation?",
  "That takes a lot of courage to acknowledge. Remember that difficult times don't last forever. What's one small thing that might help you feel even 1% better right now?",
  "I'm hearing how difficult this is for you. You're not alone in feeling this way. What support systems do you have in your life?",
  "Thank you for being so honest with yourself and with me. Self-awareness is the first step toward healing. What would you like to focus on first?",
  "I can hear the pain in your words. Remember that asking for help is a sign of strength, not weakness. What kind of support would feel most helpful to you?"
];

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Check for crisis keywords first
  if (lowerMessage.includes('suicide') || lowerMessage.includes('kill myself') || lowerMessage.includes('end my life')) {
    return MENTAL_HEALTH_RESPONSES.suicide[Math.floor(Math.random() * MENTAL_HEALTH_RESPONSES.suicide.length)];
  }
  
  // Check for specific mental health topics
  for (const [topic, responses] of Object.entries(MENTAL_HEALTH_RESPONSES)) {
    if (topic === 'suicide') continue; // Already handled above
    
    const keywords = topic === 'help' ? ['help', 'support', 'assistance'] :
                     topic === 'loneliness' ? ['lonely', 'alone', 'isolated'] :
                     topic === 'relationship' ? ['relationship', 'partner', 'boyfriend', 'girlfriend', 'marriage', 'divorce'] :
                     topic === 'work' ? ['work', 'job', 'career', 'boss', 'colleague', 'unemployment'] :
                     [topic];
    
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // Return a general response
  return GENERAL_RESPONSES[Math.floor(Math.random() * GENERAL_RESPONSES.length)];
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    // Generate response
    const response = getResponse(message);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    return NextResponse.json({
      response,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        error: 'I apologize, but I\'m having trouble responding right now. If you need immediate help, please call Befrienders Kenya at 0800 723 253 or Kenya Red Cross at 1199.',
        fallback: true
      },
      { status: 500 }
    );
  }
}
