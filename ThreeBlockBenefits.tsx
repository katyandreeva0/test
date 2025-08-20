import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, BookOpen, MessageCircle, TrendingUp } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent';
import ReadingDemo from './ReadingDemo';
import AITeacherDemo from './AITeacherDemo';
import ProgressDemo from './ProgressDemo';

interface ThreeBlockBenefitsProps {
  content?: any;
}

// Hook to track which demo is in view
const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
};

export default function ThreeBlockBenefits({ content = landingPageContent }: ThreeBlockBenefitsProps) {
  const icons = [BookOpen, MessageCircle, TrendingUp];
  const demoRefs = [React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null)];
  const inViewStates = demoRefs.map(ref => useInView(ref));

  return (
    <section id="benefits" className="bg-warm-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-accent-blue-light text-accent-blue px-4 py-2 rounded-full text-sm font-medium mb-8">
            {content.benefits.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            3 Ways Varialex Gets You{' '}
            <span className="text-accent-blue">
              Fluent Faster
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {content.benefits.subheadline}
          </p>
          
          {/* How to sign up Button at Top */}
          <Button 
            className="btn-primary text-lg px-12 py-4"
            onClick={() => {
              const element = document.getElementById('early-access');
              if (element) {
                const headerOffset = 80; // Account for fixed header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            style={{ height: '3.5rem', minWidth: '240px', fontSize: '1.125rem' }}
          >
            {content.benefits.ctaButton}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Vertical Benefits Layout with Individual Containers */}
        <div className="space-y-12">
          {content.benefits.blocks.map((benefit, index) => {
            const Icon = icons[index];
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} ref={demoRefs[index]} className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-clean-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content Side */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    {/* Blue Badge */}
                    <div className="inline-flex items-center bg-accent-blue-light text-accent-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                      {benefit.badge}
                    </div>
                    
                    {/* Title with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center shadow-clean">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    {/* Green Checkmark Features */}
                    <ul className="space-y-4">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Demo Side */}
                  <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                    {index === 0 && <ReadingDemo isActive={inViewStates[0]} />}
                    {index === 1 && <AITeacherDemo isActive={inViewStates[1]} />}
                    {index === 2 && <ProgressDemo isActive={inViewStates[2]} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}