import { AlertTriangle, BookOpen, MessageCircle, Brain } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent';

interface ProblemProps {
  content?: typeof landingPageContent;
}

export default function Problem({ content: fullContent = landingPageContent }: ProblemProps) {
  const content = fullContent.problem;

  const problemIcons = [AlertTriangle, BookOpen, MessageCircle, Brain];

  return (
    <section id="problem" className="bg-warm-gradient-2 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-blue font-medium mb-4">{content.badge}</p>
          <h2 className="text-4xl font-bold text-primary mb-6 max-w-3xl mx-auto">{content.headline}</h2>
          <p className="max-w-2xl mx-auto text-lg">{content.subheadline}</p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.problems?.map((problem, index) => {
            const Icon = problemIcons[index % problemIcons.length];
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-clean border border-border">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{problem.title}</h4>
                <p className="text-sm">{problem.description}</p>
              </div>
            );
          })}
        </div>

        {/* Transition */}
        {content.transition && (
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">{content.transition}</p>
          </div>
        )}

        {/* Pain Point Section */}
        {content.painPoint && (
          <div className="text-center bg-white rounded-lg p-8 shadow-clean border border-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">{content.painPoint.headline}</h3>
            <p className="text-lg max-w-2xl mx-auto mb-6">{content.painPoint.subtext}</p>
            <p className="text-accent-blue font-semibold text-lg">
              {content.painPoint.solution}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}