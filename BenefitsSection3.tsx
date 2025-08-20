import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, GraduationCap, CheckCircle } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

export default function BenefitsSection3() {
  const content = landingPageContent;
  const benefit = content.benefits.usps[4]; // Final benefit (exam prep)

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-amber-50 text-amber-700 border-amber-200 px-4 py-2">
            🎯 Achievement
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master exams while building <span className="text-amber-600">lasting fluency</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prepare for DELE and DELF certifications while developing genuine conversation skills that last beyond test day.
          </p>
        </div>

        {/* Centered Feature Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
            <div className="text-center mb-8">
              {/* Large Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {benefit.description}
              </p>
            </div>
            
            {/* Features in a Clean Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefit.features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">
                Ready to master both exams and conversation?
              </h4>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-12 py-4 shadow-lg hover:shadow-xl transition-all">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-amber-100 mt-4">Get full access to DELE & DELF prep • No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}