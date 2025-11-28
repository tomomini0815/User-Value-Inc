import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { PageId } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isLoading, setIsLoading] = useState(true);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll reset on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'services': return <Services />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
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
                  className="fixed inset-0 bg-brand-black flex items-center justify-center z-[9999]"
              >
                  <motion.h1 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-display text-4xl font-bold tracking-widest text-white"
                  >
                      USER VALUE
                  </motion.h1>
              </motion.div>
          )}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-accent selection:text-white relative flex flex-col">
          <div className="bg-noise" /> 
          
          <CustomCursor />
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
          
          <main className="relative z-10 flex-grow bg-brand-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    {renderPage()}
                </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer is now revealed via z-index in the component itself, or we place it here to be revealed behind main */}
          <div className="sticky bottom-0 z-0">
             <Footer onNavigate={setCurrentPage} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;