import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { landingPageContent } from '../content/landingPageContent';

interface FooterProps {
  content?: typeof landingPageContent;
}

// TikTok icon component since it's not in Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.286-1.73-1.448-2.756C16.238 1.215 16.156.855 16.089.5h-3.033v15.371c0 .43-.035.847-.105 1.248-.105.613-.315 1.177-.631 1.672-.631 1.036-1.668 1.672-2.858 1.672-1.883 0-3.414-1.531-3.414-3.414s1.531-3.414 3.414-3.414c.351 0 .687.07 1.001.175V9.773c-.315-.07-.646-.105-.996-.105-3.414 0-6.189 2.775-6.189 6.189S5.767 22.046 9.181 22.046c3.414 0 6.189-2.775 6.189-6.189V8.515c1.672 1.177 3.684 1.883 5.881 1.883v-2.836c-1.036 0-1.989-.281-2.789-.772-.421-.263-.807-.579-1.141-.928Z"/>
  </svg>
);

export default function Footer({ content: fullContent = landingPageContent }: FooterProps) {
  const content = fullContent.footer;

  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'instagram':
        return Instagram;
      case 'tiktok':
        return TikTokIcon;
      default:
        return Instagram;
    }
  };

  return (
    <footer id="footer" className="bg-warm-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div 
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => {
                const element = document.getElementById('hero');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">V</span>
              </div>
              <span className="text-xl font-semibold text-primary">
                {content.brand}
              </span>
            </div>
            <p className="mb-4 max-w-md">{content.description}</p>
            <p className="text-sm text-muted-foreground mb-6">{content.earlyAccessLabel}</p>
            
            {/* Social Media Links */}
            {content.socials && (
              <div>
                <h6 className="text-sm font-medium text-primary mb-3">Follow Us</h6>
                <div className="flex space-x-4">
                  {content.socials.map((social) => {
                    const IconComponent = getSocialIcon(social.icon);
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-accent-gray-light hover:bg-accent-blue-light rounded-lg flex items-center justify-center text-accent-gray hover:text-accent-blue transition-all duration-200 group"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problem"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('problem');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  The Problem
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('benefits');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('testimonials');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#early-access"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('early-access');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('faq');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h5 className="mb-4">Features</h5>
            <ul className="space-y-2">
              {content.links.features.map((feature) => (
                <li key={feature.name}>
                  <a
                    href={feature.url}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      if (feature.url.startsWith('#')) {
                        e.preventDefault();
                        const element = document.getElementById(feature.url.slice(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {feature.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="mb-4">Support</h5>
            <ul className="space-y-2">
              {content.links.support.map((supportItem) => (
                <li key={supportItem.name}>
                  <a
                    href={supportItem.url}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      if (supportItem.url.startsWith('#')) {
                        e.preventDefault();
                        const element = document.getElementById(supportItem.url.slice(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    target={supportItem.url.startsWith('http') ? '_blank' : undefined}
                    rel={supportItem.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {supportItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{content.copyright}</p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}