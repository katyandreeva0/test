import { Badge } from './ui/badge';
import { MessageCircle, BarChart3 } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

export default function BenefitsSection2() {
  const content = landingPageContent;
  const benefits = content.benefits.usps.slice(2, 4); // Benefits 3-4
  const icons = [MessageCircle, BarChart3];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-purple-50 text-purple-700 border-purple-200 px-4 py-2">
            🗣️ Practice & Growth
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Practice conversations and <span className="text-purple-600">track your progress</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build confidence through AI conversations and see your skills improve with detailed progress tracking.
          </p>
        </div>

        {/* Stacked Layout with Alternating Sides */}
        <div className="space-y-16">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            const colors = [
              { bg: 'bg-purple-600', light: 'bg-purple-50', accent: 'bg-purple-100' },
              { bg: 'bg-orange-600', light: 'bg-orange-50', accent: 'bg-orange-100' }
            ];
            const colorClass = colors[index];
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Content */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${colorClass.bg} rounded-2xl flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {benefit.description}
                  </p>
                  
                  {/* Features in Columns */}
                  <div className="grid grid-cols-1 gap-4">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`${colorClass.light} rounded-xl p-4 border border-gray-200`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 ${colorClass.accent} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-sm font-bold text-gray-700">{featureIndex + 1}</span>
                          </div>
                          <span className="text-gray-800 font-medium text-sm leading-relaxed">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                  <div className={`w-80 h-80 ${colorClass.light} rounded-3xl flex items-center justify-center border border-gray-200`}>
                    <div className={`w-32 h-32 ${colorClass.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="h-16 w-16 text-white" />
                    </div>
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