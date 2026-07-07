import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import CategorySection from './components/sections/CategorySection';
import ProductSection from './components/sections/ProductSection';
import BundleSection from './components/sections/BundleSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import LicenseSection from './components/sections/LicenseSection';
import TestimonialSection from './components/sections/TestimonialSection';
import LeadMagnetSection from './components/sections/LeadMagnetSection';
import FAQSection from './components/sections/FAQSection';
import RequestAssetSection from './components/sections/RequestAssetSection';
import FinalCTASection from './components/sections/FinalCTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 font-body">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CategorySection />
        <ProductSection />
        <BundleSection />
        <HowItWorksSection />
        <LicenseSection />
        <TestimonialSection />
        <LeadMagnetSection />
        <FAQSection />
        <RequestAssetSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
