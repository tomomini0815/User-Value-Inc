import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';
import AIServices from './pages/AIServices';
import ServiceDetail from './pages/ServiceDetail';
import { PageId } from './types';

const App: React.FC = () => {
  // Helper to determine PageId from URL path
  const getPageIdFromPath = (path: string): PageId => {
    // Remove trailing slash if present (except for root)
    const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

    switch (normalizedPath) {
      case '/': return 'home';
      case '/services': return 'services';
      case '/about': return 'about';
      case '/contact': return 'contact';
      case '/privacy': return 'privacy';
      case '/pricing': return 'pricing';
      case '/services/ai': return 'ai_services';
      case '/services/web': return 'service_web';
      case '/services/app': return 'service_app';
      case '/services/uiux': return 'service_uiux';
      case '/services/saas': return 'service_saas';
      case '/services/ai-web': return 'service_ai_web';
      case '/services/ai-app': return 'service_ai_app';
      case '/services/ai-saas': return 'service_ai_saas';
      default: return 'home';
    }
  };

  // Helper to determine URL path from PageId
  const getPathFromPageId = (pageId: PageId): string => {
    switch (pageId) {
      case 'home': return '/';
      case 'services': return '/services';
      case 'about': return '/about';
      case 'contact': return '/contact';
      case 'privacy': return '/privacy';
      case 'pricing': return '/pricing';
      case 'ai_services': return '/services/ai';
      case 'service_web': return '/services/web';
      case 'service_app': return '/services/app';
      case 'service_uiux': return '/services/uiux';
      case 'service_saas': return '/services/saas';
      case 'service_ai_web': return '/services/ai-web';
      case 'service_ai_app': return '/services/ai-app';
      case 'service_ai_saas': return '/services/ai-saas';
      default: return '/';
    }
  };

  const [currentPage, setCurrentPage] = useState<PageId>(() => getPageIdFromPath(window.location.pathname));
  const [isLoading, setIsLoading] = useState(true);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageIdFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigation function that updates URL
  const handleNavigate = (page: PageId) => {
    const path = getPathFromPageId(page);
    window.history.pushState(null, '', path);
    setCurrentPage(page);
  };

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll reset on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'services': return <Services onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'privacy': return <PrivacyPolicy />;
      case 'pricing': return <Pricing onNavigate={handleNavigate} />;
      case 'ai_services': return <AIServices onNavigate={handleNavigate} />;
      case 'service_web': return <ServiceDetail serviceId="service_web" onNavigate={handleNavigate} />;
      case 'service_app': return <ServiceDetail serviceId="service_app" onNavigate={handleNavigate} />;
      case 'service_uiux': return <ServiceDetail serviceId="service_uiux" onNavigate={handleNavigate} />;
      case 'service_saas': return <ServiceDetail serviceId="service_saas" onNavigate={handleNavigate} />;
      case 'service_ai_web': return <ServiceDetail serviceId="service_ai_web" onNavigate={handleNavigate} />;
      case 'service_ai_app': return <ServiceDetail serviceId="service_ai_app" onNavigate={handleNavigate} />;
      case 'service_ai_saas': return <ServiceDetail serviceId="service_ai_saas" onNavigate={handleNavigate} />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 bg-[#000000] flex items-center justify-center z-[9999]"
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-4xl md:text-6xl font-bold tracking-widest text-white"
              >
                USER VALUE
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-white selection:text-black relative">
          <div className="bg-noise" />

          <CustomCursor />
          <Header currentPage={currentPage} onNavigate={handleNavigate} />

          {/* Main Content Wrapper - Needs background to cover footer */}
          <main className="relative z-10 bg-[#050505] mb-[85vh] md:mb-[65vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Sticky Reveal Footer sits behind main content */}
          <Footer onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
};

export default App;