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
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center text-white bg-[#03070d]/60 backdrop-blur-md border-b border-cyan-500/20 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="pointer-events-auto">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display font-bold text-xl tracking-tighter hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            {COMPANY_INFO.nameEn.toUpperCase()}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 pointer-events-auto bg-black/40 p-1.5 rounded-full border border-cyan-500/20 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                  relative px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 ease-out
                  ${currentPage === item.id ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]' : 'text-slate-300 hover:text-white hover:bg-white/10'}
              `}
            >
              <div className="flex flex-col items-center gap-0.5">
                <span>{item.label}</span>
                {item.labelJa && (
                  <span className="text-[9px] font-normal normal-case tracking-normal opacity-80">
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
            className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-cyan-400/30 bg-cyan-950/20 px-6 py-2.5 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-sky-400 hover:text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 group overflow-hidden relative"
          >
            <span className="relative z-10 font-sans font-medium">お問い合わせ</span>
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