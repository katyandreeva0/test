import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap, Zap } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

// Alternative 5: VISUAL HIERARCHY instead of bullet points
export default function BenefitsLayout5Alternative() {
  const content = landingPageContent;
  const colorClasses = [
    { gradient: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { gradient: 'bg-gradient-to-br from-green-500 to-green-600' },
    { gradient: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { gradient: 'bg-gradient-to-br from-orange-500 to-orange-600' },
    { gradient: 'bg-gradient-to-br from-teal-500 to-teal-600' }
  ];
  const icons = [BookOpen, Brain, MessageCircle, BarChart3, GraduationCap];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
            {content.benefits.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The complete <span className="text-blue-600">fluency system</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.benefits.subheadline}
          </p>
        </div>

        {/* Large Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {content.benefits.usps.map((usp, index) => {
            const Icon = icons[index];
            const colorClass = colorClasses[index];
            
            return (
              <Card key={index} className="text-center p-8 bg-white border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                {/* Large Icon */}
                <div className={`w-24 h-24 ${colorClass.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {usp.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {usp.description}
                </p>
                
                {/* Single Key Feature as Highlight */}
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-800">
                    {usp.features[0].split('.')[0]}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Details with Visual Separation */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How each feature transforms your learning
            </h3>
            <p className="text-gray-600">See exactly how we solve traditional language learning problems</p>
          </div>
          
          {/* Features with Visual Hierarchy */}
          <div className="space-y-8">
            {content.benefits.usps.map((usp, index) => {
              const Icon = icons[index];
              const colorClass = colorClasses[index];
              
              return (
                <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-blue-400 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${colorClass.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-3">{usp.title}</h4>
                      
                      {/* Features with Different Text Sizes for Hierarchy */}
                      <div className="space-y-2">
                        {usp.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="space-y-1">
                            <div className={`text-${featureIndex === 0 ? 'base' : 'sm'} ${featureIndex === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'} leading-relaxed`}>
                              {feature}
                            </div>
                            {featureIndex === 0 && <div className="w-12 h-0.5 bg-blue-200"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 m-1 text-center border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-yellow-300" />
              <h3 className="text-2xl font-bold text-white">
                Transform your language learning today
              </h3>
              <Zap className="h-8 w-8 text-yellow-300" />
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 shadow-lg hover:shadow-xl transition-all">
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-white/80 mt-4">All 5 features included • Works in 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}