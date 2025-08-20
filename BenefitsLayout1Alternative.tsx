import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

// Alternative 1: NUMBERED BADGES instead of bullet points
export default function BenefitsLayout1Alternative() {
  const content = landingPageContent;
  const colorClasses = [
    { bg: 'bg-blue-600', bgLight: 'bg-blue-100', text: 'text-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
    { bg: 'bg-green-600', bgLight: 'bg-green-100', text: 'text-green-600', badge: 'bg-green-50 text-green-700 border-green-200' },
    { bg: 'bg-purple-600', bgLight: 'bg-purple-100', text: 'text-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
    { bg: 'bg-orange-600', bgLight: 'bg-orange-100', text: 'text-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200' },
    { bg: 'bg-teal-600', bgLight: 'bg-teal-100', text: 'text-teal-600', badge: 'bg-teal-50 text-teal-700 border-teal-200' }
  ];
  const icons = [BookOpen, Brain, MessageCircle, BarChart3, GraduationCap];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl">
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

        {/* Numbered Steps with Feature Badges */}
        <div className="space-y-8 mb-16">
          {content.benefits.usps.map((usp, index) => {
            const Icon = icons[index];
            const colorClass = colorClasses[index];
            
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < content.benefits.usps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-200"></div>
                )}
                
                <div className="flex items-start gap-6">
                  {/* Large Number Circle */}
                  <div className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${colorClass.bgLight} rounded-lg p-2`}>
                        <Icon className={`h-5 w-5 ${colorClass.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {usp.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {usp.description}
                        </p>
                        
                        {/* Features as Numbered Badges */}
                        <div className="flex flex-wrap gap-2">
                          {usp.features.slice(0, 2).map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              variant="secondary" 
                              className={`${colorClass.badge} px-3 py-1 text-sm`}
                            >
                              <span className="font-bold mr-2">{featureIndex + 1}.</span>
                              {feature.length > 40 ? feature.substring(0, 40) + '...' : feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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