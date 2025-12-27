import React, { useState } from 'react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import { PageId } from '../types';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center text-white bg-[#050505]/30 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-lg"
      >
        <div className="pointer-events-auto">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity"
          >
            {COMPANY_INFO.nameEn.toUpperCase()}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 pointer-events-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                  relative px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 ease-out
                  ${currentPage === item.id ? 'bg-white text-black' : 'text-gray-300 hover:text-white hover:bg-white/10'}
              `}
            >
              <div className="flex flex-col items-center gap-0.5">
                <span>{item.label}</span>
                {item.labelJa && (
                  <span className="text-[10px] font-normal normal-case tracking-normal opacity-70">
                    {item.labelJa}
                  </span>
                )}
              </div>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group overflow-hidden relative"
          >
            <span className="relative z-10">お問い合わせ</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 z-50 pointer-events-auto active:scale-95 transition-transform"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left ${currentPage === item.id ? 'text-white' : 'text-gray-600'}`}
                >
                  <div className="text-5xl font-display font-bold tracking-tight">
                    {item.label}
                  </div>
                  {item.labelJa && (
                    <div className="text-2xl font-normal mt-1 opacity-70">
                      {item.labelJa}
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;