import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { landingPageContent } from '../content/landingPageContent';

interface HeroProps {
  content?: typeof landingPageContent;
}

export default function Hero({ content: fullContent = landingPageContent }: HeroProps) {
  const content = fullContent.hero;

  return (
    <section id="hero" className="bg-warm-gradient-1 pt-20 pb-12 sm:pt-20 sm:pb-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-accent-gray-light text-accent-gray border border-border px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-8">
            {content.badge}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:!text-6xl !font-bold !leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto text-primary">
            <span className="block sm:hidden">
              {content.headline?.mobile?.line1}<br />
              <span className="text-blue-600">
                {content.headline?.mobile?.line2}
              </span>
            </span>
            <span className="hidden sm:block">
              {content.headline?.line1}<br />
              <span className="text-blue-600">
                {content.headline?.line2}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg px-2">
            {content.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              className="btn-primary relative overflow-hidden group"
              onClick={() => window.open(fullContent.urls?.signup || 'https://app.varialex.com/signup', '_blank')}
            >
              <span className="relative z-10">{content.ctaButton}</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => {
                const element = document.getElementById('benefits');
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
            >
              How does it work?
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground px-4">
            {content.languages?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}