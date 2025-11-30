import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import { PageId } from '../types';
import { motion } from 'framer-motion';

interface FooterProps {
    onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-[85vh] md:h-[65vh] bg-[#050505] text-white flex flex-col justify-between p-6 md:p-12 z-0">
            {/* Ambient Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto h-full flex flex-col relative z-10 pt-20">
                {/* Top Section */}
                <div className="flex-grow flex flex-col md:flex-row justify-between md:items-start gap-12">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-5xl md:text-8xl tracking-tight mb-8 text-white italic"
                        >
                            Let's build<br />the future.
                        </motion.h2>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <nav className="flex flex-col gap-3 md:text-right">
                            {NAV_ITEMS.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => onNavigate(item.id)}
                                    className="text-3xl md:text-5xl font-display font-bold text-gray-700 hover:text-white transition-colors duration-500 uppercase tracking-tighter"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 mt-12">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-4xl font-display font-bold mb-2">{COMPANY_INFO.nameEn}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                            {COMPANY_INFO.location}
                        </p>
                    </div>
                    <div className="flex gap-8 text-xs text-gray-500 font-mono uppercase tracking-wider">
                        <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Service</button>
                        <span>© {new Date().getFullYear()} User Value Inc.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;