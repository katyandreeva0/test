import { Badge } from './ui/badge';
import { BookOpen, Brain } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

export default function BenefitsSection1() {
  const content = landingPageContent;
  const benefits = content.benefits.usps.slice(0, 2); // First 2 benefits
  const icons = [BookOpen, Brain];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
            📚 Learning Foundation
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build your language skills through <span className="text-blue-600">engaging stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn vocabulary naturally through progressive stories that keep you hooked, just like your favorite Netflix series.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            const colors = [
              { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600' },
              { bg: 'bg-green-600', light: 'bg-green-50', text: 'text-green-600' }
            ];
            const colorClass = colors[index];
            
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorClass.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-6 h-6 ${colorClass.light} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <div className={`w-2 h-2 ${colorClass.bg} rounded-full`}></div>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
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