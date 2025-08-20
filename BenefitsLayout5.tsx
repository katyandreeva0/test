import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { CheckCircle, ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap, Zap } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

// Layout 5: MINIMALIST ICONS - Large icon-first design with minimal text
export default function BenefitsLayout5() {
  const content = landingPageContent;
  const colors = ['blue', 'green', 'purple', 'orange', 'teal'];
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
            const colorClasses = [
              { gradient: 'bg-gradient-to-br from-blue-500 to-blue-600', bgLight: 'bg-blue-100', text: 'text-blue-600' },
              { gradient: 'bg-gradient-to-br from-green-500 to-green-600', bgLight: 'bg-green-100', text: 'text-green-600' },
              { gradient: 'bg-gradient-to-br from-purple-500 to-purple-600', bgLight: 'bg-purple-100', text: 'text-purple-600' },
              { gradient: 'bg-gradient-to-br from-orange-500 to-orange-600', bgLight: 'bg-orange-100', text: 'text-orange-600' },
              { gradient: 'bg-gradient-to-br from-teal-500 to-teal-600', bgLight: 'bg-teal-100', text: 'text-teal-600' }
            ];
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
                
                {/* Key Feature */}
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700 font-medium">{usp.features[0].split('.')[0]}</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Details */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How each feature transforms your learning
            </h3>
            <p className="text-gray-600">See exactly how we solve traditional language learning problems</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.benefits.usps.map((usp, index) => {
              const Icon = icons[index];
              const colorClasses = [
                { bgLight: 'bg-blue-100', text: 'text-blue-600' },
                { bgLight: 'bg-green-100', text: 'text-green-600' },
                { bgLight: 'bg-purple-100', text: 'text-purple-600' },
                { bgLight: 'bg-orange-100', text: 'text-orange-600' },
                { bgLight: 'bg-teal-100', text: 'text-teal-600' }
              ];
              const colorClass = colorClasses[index];
              
              return (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-12 h-12 ${colorClass.bgLight} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${colorClass.text}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{usp.title}</h4>
                    <div className="space-y-1">
                      {usp.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
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