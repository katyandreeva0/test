import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { landingPageContent } from '../content/landingPageContent';

interface FinalCTAProps {
  content?: typeof landingPageContent;
}

export default function FinalCTA({ content: fullContent = landingPageContent }: FinalCTAProps) {
  const content = fullContent.finalCta;

  return (
    <section id="final-cta" className="bg-warm-gradient-blue py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Blue Badge */}
        <div className="inline-flex items-center bg-accent-blue-light text-accent-blue px-4 py-2 rounded-full text-sm font-medium mb-8">
          ⭐ {content.badge.replace('📚 ', '')}
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
          Ready to Speak Spanish<br />
          and French with{' '}
          <span className="text-accent-blue">Confidence?</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {content.subheadline}
        </p>

        {/* 2x2 Checkmarks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {content.checkmarks?.map((item, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start gap-3 text-gray-600">
              <div className="w-5 h-5 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <Button
          className="btn-primary text-lg px-12 py-4"
          onClick={() => window.open(fullContent.urls?.signup || 'https://app.varialex.com/signup', '_blank')}
          style={{ height: '3.5rem', minWidth: '240px', fontSize: '1.125rem' }}
        >
          {content.ctaButton}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}