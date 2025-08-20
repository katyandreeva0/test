import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, Shield, Lock, Eye, Users, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Varialex
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent-blue" />
              <span className="font-medium text-foreground">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-accent-blue-light px-4 py-2 rounded-full mb-6">
            <Lock className="h-5 w-5 text-accent-blue" />
            <span className="text-accent-blue font-medium">Your Privacy Matters</span>
          </div>
          <h1 className="mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We value your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Varialex, you agree to the practices described here.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Last updated: 18.08.2025</p>
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-12 border-accent-blue/20 bg-accent-blue-light/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-accent-blue" />
              Privacy at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium mb-1">Data We Collect</h4>
                  <p className="text-sm text-muted-foreground">Account information, learning data, technical data, and communications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium mb-1">How We Use It</h4>
                  <p className="text-sm text-muted-foreground">To provide and improve our service, track progress, ensure security, and analyze usage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium mb-1">Your Rights</h4>
                  <p className="text-sm text-muted-foreground">Access, correct, delete, or export your data anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium mb-1">We Don't Sell</h4>
                  <p className="text-sm text-muted-foreground">We do not sell your personal information</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Section 1: Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                We collect only the data necessary to provide and improve our service:
              </p>
              
              <div>
                <h4 className="font-medium mb-3">Account information</h4>
                <p className="text-muted-foreground text-sm">Your email address, first and last name, and any details you provide when creating your account.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Learning data</h4>
                <p className="text-muted-foreground text-sm">Progress, activity history, and AI-generated content.</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Technical data</h4>
                <p className="text-muted-foreground text-sm">Cookies, device information, browser type, IP address, and usage statistics.</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Communications</h4>
                <p className="text-muted-foreground text-sm">If you contact us, we may store your message and email address to respond.</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Payment information (future use)</h4>
                <p className="text-muted-foreground text-sm">When we introduce paid features, purchases will be processed through third-party providers such as Stripe. We will not store your full credit card or banking details.</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">We use your data to:</p>
              
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Provide, maintain, and improve the Varialex service.</li>
                <li>• Track your learning progress and personalize your experience.</li>
                <li>• Ensure platform security and prevent abuse.</li>
                <li>• Analyze usage to improve features and performance.</li>
                <li>• (Future) Process purchases and deliver premium features through third-party providers such as Stripe.</li>
              </ul>

              <div className="bg-accent-blue-light/50 p-4 rounded-lg mt-6">
                <p className="text-sm text-foreground">
                  <strong>We do not sell your personal information.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Legal Basis for Processing */}
          <Card>
            <CardHeader>
              <CardTitle>3. Legal Basis for Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you are located in the European Union, we process your data under the following legal bases:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Contract</h4>
                  <p className="text-muted-foreground text-sm">To deliver the service you sign up for.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Legitimate interests</h4>
                  <p className="text-muted-foreground text-sm">To improve our features, ensure security, and prevent misuse.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Consent</h4>
                  <p className="text-muted-foreground text-sm">For cookies, analytics, or optional communications.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Legal obligations</h4>
                  <p className="text-muted-foreground text-sm">To comply with applicable laws and regulations.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>4. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We use cookies to:</p>
              
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Keep you logged in and remember your preferences.</li>
                <li>• Measure site performance and usage patterns.</li>
              </ul>

              <p className="text-sm text-muted-foreground mt-4">
                You can disable cookies in your browser settings, though some features may not function properly.
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Sharing Your Data */}
          <Card>
            <CardHeader>
              <CardTitle>5. Sharing Your Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We work with trusted providers to deliver our service, including:
              </p>
              
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Wedos</strong> – hosting and email services (EU servers).</li>
                <li>• <strong>Netlify</strong> – frontend hosting and global CDN.</li>
                <li>• <strong>Cloudflare</strong> – security, performance, and bot protection.</li>
                <li>• <strong>OpenAI</strong> – language model services. We may also use Anthropic, Google, or similar AI providers.</li>
                <li>• <strong>Stripe (future use)</strong> – payment processing. When we introduce purchases, payments will be processed securely by Stripe. We do not store your full payment details.</li>
              </ul>

              <p className="text-sm text-muted-foreground mt-4">
                Our providers may process data according to their own privacy policies. Providers may change as we improve our infrastructure.
              </p>
            </CardContent>
          </Card>

          {/* Section 6: International Data Transfers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent-blue" />
                6. International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Some of our providers (such as OpenAI, Google, and Stripe) may process data outside the European Union. When this happens, we use safeguards such as Standard Contractual Clauses approved by the European Commission to protect your data.
              </p>
            </CardContent>
          </Card>

          {/* Section 7: Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>• We keep your learning data as long as your account is active.</li>
                <li>• If you delete your account, associated data is removed from active systems.</li>
                <li>• Backups and logs may persist temporarily before being automatically deleted.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 8: Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>8. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Access</h4>
                    <p className="text-xs text-muted-foreground">The personal data we hold about you.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Request deletion</h4>
                    <p className="text-xs text-muted-foreground">Of your account and data.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Request correction</h4>
                    <p className="text-xs text-muted-foreground">Of inaccurate information.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Withdraw consent</h4>
                    <p className="text-xs text-muted-foreground">For optional processing (like analytics or AI training).</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Portability</h4>
                    <p className="text-xs text-muted-foreground">Request a copy of your data in a machine-readable format.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-blue-light/50 p-4 rounded-lg mt-6">
                <p className="text-sm text-foreground">
                  <strong>To exercise these rights, contact us at:</strong> privacy@varialex.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 9: Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Varialex is not directed at children under 16. If you are under 16, you may only use the service with parental consent.
              </p>
            </CardContent>
          </Card>

          {/* Section 10: Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent-blue" />
                10. Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use technical and organizational measures to keep your data secure, including encryption and network protections. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Section 11: Changes to This Policy */}
          <Card>
            <CardHeader>
              <CardTitle>11. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a new "Last Updated" date. Continued use of Varialex after updates means you accept the revised policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-accent-blue/20 bg-accent-blue-light/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent-blue" />
                12. Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or your data, please contact us:
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@varialex.com</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  For general questions about Varialex, visit our{' '}
                  <Button variant="link" className="text-accent-blue p-0 h-auto" onClick={() => window.location.href = '/'}>
                    main website
                  </Button>
                  {' '}or join our{' '}
                  <Button variant="link" className="text-accent-blue p-0 h-auto" onClick={() => window.open('https://discord.gg/muuyQNMh', '_blank')}>
                    Discord community
                  </Button>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <Button onClick={scrollToTop} className="btn-primary">
            <ArrowLeft className="h-4 w-4 rotate-90" />
            Back to Top
          </Button>
        </div>
      </main>
    </div>
  );
}