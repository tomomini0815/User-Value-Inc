import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import MusicHero from './ui/scroll-locked-video-hero';

const Hero: React.FC = () => {
    return (
        <AuroraBackground className="!min-h-screen !h-auto !bg-[#03070d] !justify-start pt-20 md:pt-24 border-b border-cyan-500/20">
            <div className="relative z-10 flex-grow flex flex-col w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 min-h-[calc(100vh-6rem)] border-x border-cyan-500/20">
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-cyan-500/20 bg-black/40 backdrop-blur-md">
                    <div className="p-3.5 md:p-5 border-r border-cyan-500/20 flex items-center">
                        <span className="font-mono text-[11px] text-cyan-300 tracking-wider flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                            <span className="font-sans font-medium text-white">ご相談・新規案件 受付中</span>
                        </span>
                    </div>
                    <div className="p-3.5 md:p-5 border-r border-cyan-500/20 hidden md:flex items-center">
                        <span className="font-sans text-[11px] text-slate-300 tracking-wider">
                            Web & アプリ開発・UI/UXデザイン
                        </span>
                    </div>
                    <div className="p-3.5 md:p-5 border-r border-cyan-500/20 hidden md:flex items-center">
                        <span className="font-sans text-[11px] text-slate-400 tracking-wider">
                            神奈川・湘南 ｜ 2021年設立
                        </span>
                    </div>
                    <div className="p-3.5 md:p-5 flex items-center justify-end">
                        <span className="font-sans text-[11px] text-cyan-200/90 tracking-wider flex items-center gap-1.5 font-medium">
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
