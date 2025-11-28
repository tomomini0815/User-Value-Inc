import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <button 
        onClick={() => onNavigate('home')}
        className="font-display font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity z-50"
      >
        {COMPANY_INFO.nameEn.toUpperCase()}
      </button>

      <nav className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 py-2 rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
        {NAV_ITEMS.map((item) => (
          <button 
            key={item.id} 
            onClick={() => onNavigate(item.id)}
            className={`
                relative px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300
                ${currentPage === item.id ? 'bg-white text-black' : 'text-gray-300 hover:text-white hover:bg-white/10'}
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button 
        onClick={() => onNavigate('contact')}
        className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
      >
        Start Project
      </button>

      {/* Menu Trigger for Mobile */}
      <button className="md:hidden group flex flex-col justify-center items-end gap-1.5 w-10 h-10 z-50 mix-blend-difference">
        <span className="w-8 h-0.5 bg-white transition-all group-hover:w-6"></span>
        <span className="w-6 h-0.5 bg-white transition-all group-hover:w-8"></span>
      </button>
    </motion.header>
  );
};

export default Header;