import { Star, Quote } from 'lucide-react';
import { landingPageContent } from '../content/landingPageContent';

interface TestimonialsProps {
  content?: typeof landingPageContent;
}

export default function Testimonials({ content: fullContent = landingPageContent }: TestimonialsProps) {
  const content = fullContent.testimonials;

  return (
    <section id="testimonials" className="bg-warm-gradient-3 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-blue font-medium mb-4">{content.badge}</p>
          <h2 className="mb-6">{content.headline}</h2>
          <p className="max-w-2xl mx-auto text-lg">{content.subheadline}</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.reviews?.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-clean border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="h-6 w-6 text-accent-blue mb-2" />
                <p className="text-base leading-relaxed">{review.content}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center">
                    <span className="font-semibold text-accent-blue text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h5 className="mb-0">{review.name}</h5>
                  </div>
                </div>
                <div className="bg-accent-blue-light text-accent-blue px-2 py-1 rounded text-xs font-medium">
                  {review.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}