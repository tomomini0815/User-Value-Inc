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
import ServiceDetail from './pages/ServiceDetail';
import { PageId } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isLoading, setIsLoading] = useState(true);

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
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'services': return <Services onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'privacy': return <PrivacyPolicy />;
      case 'service_web': return <ServiceDetail serviceId="service_web" onNavigate={setCurrentPage} />;
      case 'service_app': return <ServiceDetail serviceId="service_app" onNavigate={setCurrentPage} />;
      case 'service_uiux': return <ServiceDetail serviceId="service_uiux" onNavigate={setCurrentPage} />;
      case 'service_saas': return <ServiceDetail serviceId="service_saas" onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
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
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />

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
          <Footer onNavigate={setCurrentPage} />
        </div>
      )}
    </>
  );
};

export default App;