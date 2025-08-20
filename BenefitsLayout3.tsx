import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap, ArrowDown } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

// Layout 3: TIMELINE JOURNEY - Vertical timeline showing user's learning journey
export default function BenefitsLayout3() {
  const content = landingPageContent;
  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  const icons = [BookOpen, Brain, MessageCircle, BarChart3, GraduationCap];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
            {content.benefits.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your journey to <span className="text-blue-600">fluent faster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {content.benefits.subheadline}
          </p>
          <div className="text-sm text-gray-500 mb-8">From struggle to fluency in 5 clear steps</div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-300 via-yellow-300 to-blue-500 rounded-full"></div>
          
          <div className="space-y-16">
            {content.benefits.usps.map((usp, index) => {
              const Icon = icons[index];
              const colorClasses = [
                { bg: 'bg-red-500', border: 'border-red-200', badge: 'bg-red-50 text-red-700 border-red-200' },
                { bg: 'bg-orange-500', border: 'border-orange-200', badge: 'bg-orange-50 text-orange-700 border-orange-200' },
                { bg: 'bg-yellow-500', border: 'border-yellow-200', badge: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
                { bg: 'bg-green-500', border: 'border-green-200', badge: 'bg-green-50 text-green-700 border-green-200' },
                { bg: 'bg-blue-500', border: 'border-blue-200', badge: 'bg-blue-50 text-blue-700 border-blue-200' }
              ];
              const colorClass = colorClasses[index];
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${colorClass.bg} rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`${isEven ? 'pr-1/2 mr-8' : 'pl-1/2 ml-8'} ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className={`bg-white border-2 ${colorClass.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="mb-4">
                        <Badge variant="secondary" className={`${colorClass.badge} text-sm px-3 py-1 mb-3`}>
                          Step {index + 1}: {usp.badge}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {usp.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {usp.description}
                        </p>
                        
                        <div className="space-y-2">
                          {usp.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className={`flex items-start space-x-2 ${isEven ? 'justify-end' : ''}`}>
                              {!isEven && <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />}
                              <span className="text-sm text-gray-700">{feature}</span>
                              {isEven && <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* End of Journey */}
          <div className="relative mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10">
              <span className="text-white font-bold text-lg">🎯</span>
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to start your fluency journey?
          </h3>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 shadow-lg hover:shadow-xl transition-all">
            Start Learning Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">Begin step 1 today • Complete transformation in weeks</p>
        </div>
      </div>
    </section>
  );
}