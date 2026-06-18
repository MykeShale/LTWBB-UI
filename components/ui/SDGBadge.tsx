'use client';

import { Heart } from 'lucide-react';

const SDGBadge = () => {
  return (
    <div className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-green-600/20 to-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white font-bold text-sm">3</div>
      </div>
      <div>
        <div className="font-semibold text-brand-dark text-sm">SDG 3</div>
        <div className="text-brand-dark/70 text-xs">Good Health & Well-being</div>
      </div>
      <Heart className="h-4 w-4 text-green-600 ml-2" />
    </div>
  );
};

export default SDGBadge;
