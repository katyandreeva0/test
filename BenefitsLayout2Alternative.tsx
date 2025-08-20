import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  ArrowRight,
  BookOpen,
  Brain,
  MessageCircle,
  BarChart3,
  GraduationCap,
  Star,
  Zap,
  Target,
} from "lucide-react";
import { landingPageContent } from "../content/landingPageContent.js";

// Alternative 2: FEATURE ICONS instead of bullet points
export default function BenefitsLayout2Alternative() {
  const content = landingPageContent;
  const colorClasses = [
    {
      bg: "bg-blue-600",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      bg: "bg-green-600",
      badge: "bg-green-50 text-green-700 border-green-200",
    },
    {
      bg: "bg-purple-600",
      badge: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      bg: "bg-orange-600",
      badge: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      bg: "bg-teal-600",
      badge: "bg-teal-50 text-teal-700 border-teal-200",
    },
  ];
  const icons = [
    BookOpen,
    Brain,
    MessageCircle,
    BarChart3,
    GraduationCap,
  ];
  // Feature icons for each feature
  const featureIcons = [Star, Zap, Target, Star, Zap]; // Cycle through these

  return (
    <section
      id="features"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2"
          >
            {content.benefits.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            5 ways Varialex gets you{" "}
            <span className="text-blue-600">fluent faster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.benefits.subheadline}
          </p>
        </div>

        {/* Bento Grid Layout with Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {content.benefits.usps.map((usp, index) => {
            const Icon = icons[index];
            const colorClass = colorClasses[index];

            // Different card sizes for visual interest
            const gridClasses = [
              "md:col-span-2", // Wide card
              "md:col-span-1", // Small card
              "md:col-span-1", // Small card
              "md:col-span-2", // Wide card
              "md:col-span-3", // Full width card
            ];

            return (
              <Card
                key={index}
                className={`${gridClasses[index]} p-6 bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${colorClass.bg} rounded-xl p-3 shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge
                      variant="secondary"
                      className={`${colorClass.badge} text-sm px-3 py-1 mb-3`}
                    >
                      {usp.badge}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {usp.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {usp.description}
                    </p>

                    {/* Features with Icons */}
                    <div className="space-y-3">
                      {usp.features
                        .slice(0, index === 4 ? 3 : 2)
                        .map((feature, featureIndex) => {
                          const FeatureIcon =
                            featureIcons[
                              featureIndex % featureIcons.length
                            ];
                          return (
                            <div
                              key={featureIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="bg-gray-100 rounded-full p-1 mt-0.5">
                                <FeatureIcon className="h-3 w-3 text-gray-600" />
                              </div>
                              <span className="text-sm text-gray-700 leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl"></div>
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 m-1 text-center border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience all 5 features in your free trial
            </h3>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 shadow-lg hover:shadow-xl transition-all"
            >
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Join 10,000+ early learners • No commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}