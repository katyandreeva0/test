import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

// Alternative 4: FEATURE CARDS instead of bullet points
export default function BenefitsLayout4Alternative() {
  const content = landingPageContent;
  const colorClasses = [
    { bg: 'bg-blue-600', bgLight: 'bg-blue-100', text: 'text-blue-600', card: 'bg-blue-50 border-blue-200' },
    { bg: 'bg-green-600', bgLight: 'bg-green-100', text: 'text-green-600', card: 'bg-green-50 border-green-200' },
    { bg: 'bg-purple-600', bgLight: 'bg-purple-100', text: 'text-purple-600', card: 'bg-purple-50 border-purple-200' },
    { bg: 'bg-orange-600', bgLight: 'bg-orange-100', text: 'text-orange-600', card: 'bg-orange-50 border-orange-200' },
    { bg: 'bg-teal-600', bgLight: 'bg-teal-100', text: 'text-teal-600', card: 'bg-teal-50 border-teal-200' }
  ];
  const icons = [BookOpen, Brain, MessageCircle, BarChart3, GraduationCap];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
            {content.benefits.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            5 ways Varialex gets you <span className="text-blue-600">fluent faster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {content.benefits.subheadline}
          </p>
        </div>

        {/* Benefits with Feature Cards */}
        <div className="space-y-12 mb-16">
          {content.benefits.usps.map((usp, index) => {
            const Icon = icons[index];
            const colorClass = colorClasses[index];
            
            return (
              <Card key={index} className="p-8 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${colorClass.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">
                          Solution {index + 1}
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {usp.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                  
                  {/* Features as Individual Cards */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {usp.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`${colorClass.card} border-2 rounded-xl p-4 hover:shadow-md transition-all duration-200`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 ${colorClass.bgLight} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className={`text-sm font-bold ${colorClass.text}`}>
                              {featureIndex + 1}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed font-medium">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to experience all 5 solutions?
          </h3>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 shadow-lg hover:shadow-xl transition-all">
            Start Learning Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-blue-100 mt-4">Access all features instantly • No setup required</p>
        </div>
      </div>
    </section>
  );
}