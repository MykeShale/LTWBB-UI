'use client';

import { Button } from '@/components/ui/button';
import { Download, FileText, Calendar, TrendingUp } from 'lucide-react';

const ImpactReport = () => {
  const handleDownload = () => {
    // Create a placeholder PDF download
    const link = document.createElement('a');
    link.href = '/documents/LTWBB_Annual_Impact_Report_2024.pdf';
    link.download = 'LTWBB_Annual_Impact_Report_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-brand-navy to-brand-royal rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Annual Impact Report 2024</h3>
            <p className="text-brand-light/80">Our year in review</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-brand-light mr-2" />
              <span className="font-semibold text-brand-light">Published</span>
            </div>
            <p className="text-white font-medium">December 2024</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-brand-light mr-2" />
              <span className="font-semibold text-brand-light">Impact</span>
            </div>
            <p className="text-white font-medium">5000+ Lives Reached</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center mb-2">
              <FileText className="h-5 w-5 text-brand-light mr-2" />
              <span className="font-semibold text-brand-light">Format</span>
            </div>
            <p className="text-white font-medium">PDF (2.4 MB)</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6">
          <h4 className="font-semibold text-white mb-3">What's Inside:</h4>
          <ul className="space-y-2 text-brand-light/90 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-1 flex-shrink-0"></span>
              <span>Comprehensive program impact metrics and outcomes</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-1 flex-shrink-0"></span>
              <span>Financial transparency and resource allocation</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-1 flex-shrink-0"></span>
              <span>Partner collaborations and community testimonials</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-1 flex-shrink-0"></span>
              <span>Future goals and strategic priorities for 2025</span>
            </li>
          </ul>
        </div>
        
        <Button 
          onClick={handleDownload}
          size="lg" 
          className="w-full bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-600 hover:to-brand-gold text-brand-navy font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Full Report
        </Button>
        
        <p className="text-center text-brand-light/70 text-sm mt-4">
          Free download • No registration required
        </p>
      </div>
    </div>
  );
};

export default ImpactReport;
