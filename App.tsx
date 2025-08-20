import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ThreeBlockBenefits from './components/ThreeBlockBenefits';
import Testimonials from './components/Testimonials';
import EarlyAccess from './components/EarlyAccess';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import { landingPageContent } from './content/landingPageContent';

// Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation content={landingPageContent} />
      <Hero content={landingPageContent} />
      <Problem content={landingPageContent} />
      <ThreeBlockBenefits content={landingPageContent} />
      <EarlyAccess content={landingPageContent} />
      <Testimonials content={landingPageContent} />
      <FAQ content={landingPageContent} />
      <FinalCTA content={landingPageContent} />
      <Footer content={landingPageContent} />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/preview_page.html" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}