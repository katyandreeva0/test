import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { CheckCircle, ArrowRight, BookOpen, Brain, MessageCircle, BarChart3, GraduationCap } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent.js';

// Layout 4: INTERACTIVE TABS - Users can click through each benefit
export default function BenefitsLayout4() {
  const content = landingPageContent;
  const colors = ['blue', 'green', 'purple', 'orange', 'teal'];
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
          <p className="text-sm text-gray-500">Click each tab to explore how we solve your language learning challenges</p>
        </div>

        <Tabs defaultValue="0" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-gray-100 p-2 rounded-2xl">
            {content.benefits.usps.map((usp, index) => {
              const Icon = icons[index];
              const colorClasses = [
                { bgLight: 'bg-blue-100', text: 'text-blue-600', bg: 'bg-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-200', gradient: 'from-blue-50 to-blue-100', border: 'border-blue-200', button: 'border-blue-300 text-blue-700 hover:bg-blue-50' },
                { bgLight: 'bg-green-100', text: 'text-green-600', bg: 'bg-green-600', badge: 'bg-green-50 text-green-700 border-green-200', gradient: 'from-green-50 to-green-100', border: 'border-green-200', button: 'border-green-300 text-green-700 hover:bg-green-50' },
                { bgLight: 'bg-purple-100', text: 'text-purple-600', bg: 'bg-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-200', gradient: 'from-purple-50 to-purple-100', border: 'border-purple-200', button: 'border-purple-300 text-purple-700 hover:bg-purple-50' },
                { bgLight: 'bg-orange-100', text: 'text-orange-600', bg: 'bg-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200', gradient: 'from-orange-50 to-orange-100', border: 'border-orange-200', button: 'border-orange-300 text-orange-700 hover:bg-orange-50' },
                { bgLight: 'bg-teal-100', text: 'text-teal-600', bg: 'bg-teal-600', badge: 'bg-teal-50 text-teal-700 border-teal-200', gradient: 'from-teal-50 to-teal-100', border: 'border-teal-200', button: 'border-teal-300 text-teal-700 hover:bg-teal-50' }
              ];
              const colorClass = colorClasses[index];
              
              return (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-lg"
                >
                  <div className={`w-10 h-10 ${colorClass.bgLight} rounded-full flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${colorClass.text}`} />
                  </div>
                  <span className="text-sm font-medium text-center leading-tight">{usp.badge}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab Content */}
          {content.benefits.usps.map((usp, index) => {
            const Icon = icons[index];
            const colorClasses = [
              { bgLight: 'bg-blue-100', text: 'text-blue-600', bg: 'bg-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-200', gradient: 'from-blue-50 to-blue-100', border: 'border-blue-200', button: 'border-blue-300 text-blue-700 hover:bg-blue-50' },
              { bgLight: 'bg-green-100', text: 'text-green-600', bg: 'bg-green-600', badge: 'bg-green-50 text-green-700 border-green-200', gradient: 'from-green-50 to-green-100', border: 'border-green-200', button: 'border-green-300 text-green-700 hover:bg-green-50' },
              { bgLight: 'bg-purple-100', text: 'text-purple-600', bg: 'bg-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-200', gradient: 'from-purple-50 to-purple-100', border: 'border-purple-200', button: 'border-purple-300 text-purple-700 hover:bg-purple-50' },
              { bgLight: 'bg-orange-100', text: 'text-orange-600', bg: 'bg-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200', gradient: 'from-orange-50 to-orange-100', border: 'border-orange-200', button: 'border-orange-300 text-orange-700 hover:bg-orange-50' },
              { bgLight: 'bg-teal-100', text: 'text-teal-600', bg: 'bg-teal-600', badge: 'bg-teal-50 text-teal-700 border-teal-200', gradient: 'from-teal-50 to-teal-100', border: 'border-teal-200', button: 'border-teal-300 text-teal-700 hover:bg-teal-50' }
            ];
            const colorClass = colorClasses[index];
            
            return (
              <TabsContent key={index} value={index.toString()} className="mt-8">
                <Card className="p-8 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 ${colorClass.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className={`${colorClass.badge} text-sm px-3 py-1 mb-2`}>
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
                      
                      <div className="space-y-3">
                        {usp.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual Preview Area */}
                    <div className={`bg-gradient-to-br ${colorClass.gradient} rounded-2xl p-8 border ${colorClass.border}`}>
                      <div className="text-center">
                        <div className={`w-20 h-20 ${colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          {usp.title} in Action
                        </h4>
                        <p className="text-gray-600 mb-6">
                          Interactive demo would be displayed here showing how this feature solves your learning challenges.
                        </p>
                        <Button variant="outline" className={`${colorClass.button}`}>
                          Try This Feature
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Mid-page CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
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