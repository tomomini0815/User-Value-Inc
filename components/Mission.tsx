
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface MissionProps {
    onNavigate?: (page: PageId) => void;
}

const Mission: React.FC<MissionProps> = ({ onNavigate }) => {
    return (
        <section className="relative bg-[#03070d] border-b border-cyan-500/20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container mx-auto border-x border-cyan-500/20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">

                    {/* Mission Text Area */}
                    <div className="lg:col-span-8 p-10 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-cyan-500/20 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm text-cyan-400 mb-6 flex items-center">
                                // OUR MISSION <span className="text-cyan-300/40 ml-2 text-xs tracking-wider">ミッション</span>
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tighter mb-8">
                                デジタル時代の基盤を、<br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-sky-300 animate-gradient-x">
                                    美しく、機能的に。
                                </span>
                            </h2>
                            <p className="text-slate-300 text-sm md:text-base lg:text-lg font-light max-w-2xl leading-relaxed border-l-2 border-cyan-500/30 pl-6">
                                『あったらいいな』を、当たり前の景色に。
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Area */}
                    <div
                        className="lg:col-span-4 group relative overflow-hidden cursor-pointer border-l border-cyan-500/20 bg-black/30"
                        onClick={() => onNavigate?.('contact')}
                        tabIndex={0}
                        role="button"
                        aria-label="Start Project - Contact us"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                onNavigate?.('contact');
                            }
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out shadow-[0_0_30px_rgba(56,189,248,0.5)]"></div>

                        <div className="relative h-full p-10 md:p-16 flex flex-col justify-between items-start z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-xs text-brand-accent group-hover:text-black uppercase tracking-widest transition-colors duration-300">
                                        Start Project
                                    </span>
                                    <span className="text-[10px] text-white/30 group-hover:text-black/40 transition-colors duration-300">
                                        プロジェクトを始める
                                    </span>
                                </div>
                            </motion.div>

                            <div className="mt-8 w-full">
                                <ArrowRight className="w-12 h-12 text-white group-hover:text-black mb-6 transform group-hover:rotate-[-45deg] transition-all duration-300 ease-out" />
                                <h3 className="font-display font-bold text-3xl md:text-4xl text-white group-hover:text-black transition-colors duration-300 leading-none">
                                    Let's<br />Build
                                </h3>
                            </div>
                        </div>

                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
