import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import MusicHero from './ui/scroll-locked-video-hero';

const Hero: React.FC = () => {
    return (
        <AuroraBackground className="!min-h-screen !h-auto !bg-[#03070d] !justify-start pt-24 sm:pt-28 md:pt-28 border-b border-cyan-500/20">
            <div className="relative z-10 flex-grow flex flex-col w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 min-h-[calc(100vh-6rem)] border-x border-cyan-500/20">
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-cyan-500/20 bg-black/40 backdrop-blur-md">
                    <div className="py-4 px-3.5 sm:py-4.5 sm:px-4 md:p-5 border-r border-cyan-500/20 flex items-center justify-start min-h-[58px]">
                        <div className="font-mono text-[11px] text-cyan-300 tracking-wider flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2.5">
                            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(56,189,248,0.15)] whitespace-nowrap">
                                STATUS: ACCEPTING
                            </span>
                            <span className="font-sans font-medium text-white text-[11px] sm:text-xs tracking-wide whitespace-nowrap">
                                ご相談・新規案件 受付中
                            </span>
                        </div>
                    </div>
                    <div className="py-4 px-3.5 sm:py-4.5 sm:px-4 md:p-5 border-r border-cyan-500/20 hidden md:flex items-center">
                        <span className="font-sans text-[11px] text-slate-300 tracking-wider">
                            Web & アプリ開発・UI/UXデザイン
                        </span>
                    </div>
                    <div className="py-4 px-3.5 sm:py-4.5 sm:px-4 md:p-5 border-r border-cyan-500/20 hidden md:flex items-center">
                        <span className="font-sans text-[11px] text-slate-400 tracking-wider">
                            神奈川・湘南 ｜ 2021年設立
                        </span>
                    </div>
                    <div className="py-4 px-3.5 sm:py-4.5 sm:px-4 md:p-5 flex items-center justify-end min-h-[58px]">
                        <span className="font-sans text-[11px] sm:text-xs text-cyan-200/90 tracking-wider flex items-center gap-1.5 font-medium">
                            詳しく見る <span className="text-cyan-400 animate-bounce">↓</span>
                        </span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-grow flex flex-col justify-center py-4 md:py-6"
                >
                    <MusicHero title="THE MOMENT YOUR IDEA STARTS MOVING" />
                </motion.div>
            </div>
        </AuroraBackground>
    );
};

export default Hero;
