import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

export default function SimpleBenefits() {
  const content = landingPageContent;
  const icons = [BookOpen, Brain, MessageCircle, BarChart3, GraduationCap];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
            {content.benefits.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            5 ways Varialex gets you <span className="text-blue-600">fluent faster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.benefits.subheadline}
          </p>
        </div>

        {/* Benefits Grid - Simple and Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.benefits.usps.map((usp, index) => {
            const Icon = icons[index];
            
            return (
              <div key={index} className="text-center group hover:bg-gray-50 rounded-2xl p-6 transition-all duration-300">
                {/* Large Icon */}
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Headline */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {usp.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to transform your language learning?
          </h3>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 shadow-lg hover:shadow-xl transition-all">
            Start Learning Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">No credit card required • 7-day free trial</p>
        </div>
      </div>
    </section>
  );
}