import { ArrowRight, Clock, Sparkles, BookOpen, MessageCircle, Zap, Shield, Gift, Volume2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { landingPageContent } from '../content/landingPageContent';

interface EarlyAccessProps {
  content?: typeof landingPageContent;
}

export default function EarlyAccess({ content: fullContent = landingPageContent }: EarlyAccessProps) {
  const content = fullContent.earlyAccess;

  return (
    <section id="early-access" className="bg-warm-gradient-blue py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Clean Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-blue-light text-accent-blue border border-accent-blue/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              <span>Early Access Offer: 100 Premium Tokens FREE</span>
            </div>
            
            <h2 className="mb-6 max-w-3xl mx-auto">
              Start Learning Free + Get <span className="text-accent-blue">100 Premium Tokens</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Begin your language journey with everything you need, plus 100 premium tokens to experience our AI teacher, custom stories, and pronunciation coaching.
            </p>
          </div>

          {/* Clean Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Free Features Card */}
            <div className="bg-white rounded-lg p-8 shadow-clean border border-border">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <h3>Forever Free</h3>
                </div>
                <p className="text-muted-foreground text-sm">No credit card required</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1">Real Stories That Captivate</h5>
                    <p className="text-sm">Hand-crafted stories in Spanish and French with actual plots you'll want to finish</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1">Smart Vocabulary System</h5>
                    <p className="text-sm">AI-powered flashcards that adapt to your learning speed and remember what you forget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1">Progress Tracking</h5>
                    <p className="text-sm">Track your reading speed, vocabulary growth, and comprehension improvements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Features Card */}
            <div className="bg-white rounded-lg p-8 shadow-clean-md border-2 border-accent-blue">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <h3>Premium Features</h3>
                  <div className="bg-accent-blue-light text-accent-blue px-2 py-1 rounded text-xs font-medium">
                    100 FREE TOKENS
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Experience 20+ hours of AI learning</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-accent-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1">AI Teacher</h5>
                    <p className="text-sm">Practice speaking in real scenarios - order coffee, job interviews, travel situations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-accent-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1">Stories About YOUR Life</h5>
                    <p className="text-sm">AI creates personalized stories using your hobbies, job, and interests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Volume2 className="h-5 w-5 text-accent-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1">Perfect Your Pronunciation</h5>
                    <p className="text-sm">AI listens to your speech and gives instant feedback to sound like a native</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  className="btn-primary w-full mb-3"
                  onClick={() => window.open('https://app.varialex.com/signup', '_blank')}
                >
                  Claim Your 100 Free Tokens
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  Start learning in under 60 seconds • No payment required
                </p>
              </div>
            </div>
          </div>

          {/* Clean Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Free Features Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}