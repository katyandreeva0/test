import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent';

interface FAQProps {
  content?: typeof landingPageContent;
}

export default function FAQ({ content: fullContent = landingPageContent }: FAQProps) {
  const content = fullContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-warm-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-blue font-medium mb-4">{content.badge}</p>
          <h2 className="mb-6">{content.headline}</h2>
          <p className="text-lg">{content.subheadline}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {content.questions?.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-border shadow-clean">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-accent-gray-light/50 transition-colors"
              >
                <h4 className="mb-0 pr-4">{faq.question}</h4>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}