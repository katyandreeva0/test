import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { landingPageContent } from '../content/landingPageContent';

interface NavigationProps {
  content?: typeof landingPageContent;
}

// TikTok icon component since it's not in Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.286-1.73-1.448-2.756C16.238 1.215 16.156.855 16.089.5h-3.033v15.371c0 .43-.035.847-.105 1.248-.105.613-.315 1.177-.631 1.672-.631 1.036-1.668 1.672-2.858 1.672-1.883 0-3.414-1.531-3.414-3.414s1.531-3.414 3.414-3.414c.351 0 .687.07 1.001.175V9.773c-.315-.07-.646-.105-.996-.105-3.414 0-6.189 2.775-6.189 6.189S5.767 22.046 9.181 22.046c3.414 0 6.189-2.775 6.189-6.189V8.515c1.672 1.177 3.684 1.883 5.881 1.883v-2.836c-1.036 0-1.989-.281-2.789-.772-.421-.263-.807-.579-1.141-.928Z"/>
  </svg>
);

export default function Navigation({ content: fullContent = landingPageContent }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = fullContent.nav;
  const socialContent = fullContent.footer.socials;

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
    <nav className="bg-warm-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <div className="w-8 h-8 bg-accent-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  {content.brand}
                </span>
                <span className="border border-accent-blue text-accent-blue px-1.5 py-0.5 rounded text-xs font-normal">
                  Early Access
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {content.menuItems?.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.href.replace('#', ''));
                  if (element) {
                    const headerOffset = 80; // Account for fixed header height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              className="btn-primary"
              onClick={() => window.open(fullContent.urls?.signup || 'https://app.varialex.com/signup', '_blank')}
            >
              {content.getStartedLabel}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {content.menuItems?.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary py-2 text-base font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.href.replace('#', ''));
                    if (element) {
                      const headerOffset = 80; // Account for fixed header height
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-border space-y-4">
                <Button
                  className="btn-primary w-full"
                  onClick={() => window.open(fullContent.urls?.signup || 'https://app.varialex.com/signup', '_blank')}
                >
                  {content.getStartedLabel}
                </Button>

                {/* Social Media Links */}
                {socialContent && (
                  <div className="pt-4 border-t border-border">
                    <h6 className="text-sm font-medium text-primary mb-3">Follow Us</h6>
                    <div className="flex justify-center space-x-4">
                      {socialContent.map((social) => {
                        const IconComponent = getSocialIcon(social.icon);
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-accent-gray-light hover:bg-accent-blue-light rounded-lg flex items-center justify-center text-accent-gray hover:text-accent-blue transition-all duration-200"
                            aria-label={`Follow us on ${social.name}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}