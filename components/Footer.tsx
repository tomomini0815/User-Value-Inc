import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import { PageId } from '../types';
import { motion } from 'framer-motion';

interface FooterProps {
    onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <div 
        className="relative h-[80vh] md:h-[60vh] w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
        <div className="fixed bottom-0 h-[80vh] md:h-[60vh] w-full bg-brand-black flex flex-col justify-between p-6 md:p-12 border-t border-white/10">
            <div className="container mx-auto h-full flex flex-col justify-between relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-6xl md:text-9xl tracking-tight mb-8 text-white italic"
                        >
                            Let's talk.
                        </motion.h2>
                        <div className="flex flex-col items-start gap-2">
                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl md:text-3xl font-light text-gray-300 hover:text-white hover:italic transition-all duration-300">
                                {COMPANY_INFO.email}
                            </a>
                            <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg md:text-xl font-mono text-gray-500 hover:text-white transition-colors">
                                {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-start md:items-end">
                        <ul className="flex flex-col gap-2 md:text-right">
                            {NAV_ITEMS.map(item => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => onNavigate(item.id)}
                                        className="text-3xl md:text-5xl text-gray-600 hover:text-white transition-colors font-display font-bold uppercase hover:translate-x-2 md:hover:-translate-x-4 duration-300"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
                    <div className="mb-4 md:mb-0">
                        <p className="text-4xl font-display font-bold mb-1">{COMPANY_INFO.nameEn}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{COMPANY_INFO.location}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-600 text-xs font-mono">© {new Date().getFullYear()} User Value Inc.</p>
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-brand-accent/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />
        </div>
    </div>
  );
};

export default Footer;