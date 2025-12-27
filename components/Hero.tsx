import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import { LayeredText } from './ui/layered-text';

const Hero: React.FC = () => {
    return (
        <AuroraBackground className="!h-screen !bg-[#050505] !justify-start pt-24 md:pt-28 border-b border-white/20">
            <div className="relative z-10 flex-grow flex flex-col justify-between container mx-auto h-full border-x border-white/20">

                {/* Top Meta Area */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/20">
                    <div className="p-4 md:p-6 border-r border-white/20 flex items-center">
                        <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                            System Status: <span className="text-green-500 animate-pulse">● Online</span>
                        </span>
                    </div>
                    <div className="p-4 md:p-6 border-r border-white/20 hidden md:flex items-center">
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                            Loc: Kanagawa, JP
                        </span>
                    </div>
                    <div className="p-4 md:p-6 border-r border-white/20 hidden md:flex items-center">
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                            Est. 2021
                        </span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-end">
                        <span className="font-mono text-[10px] text-white uppercase tracking-widest">
                            SCROLL ↓
                        </span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow flex flex-col justify-center px-6 md:px-12 py-8 md:py-12 relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex flex-col items-center md:items-start"
                    >
                        <div className="w-full -ml-1 md:-ml-6 scale-95 md:scale-100 origin-left">
                            <LayeredText
                                lines={[
                                    { top: "USER", bottom: "VALUE" },
                                    { top: "LOGIC", bottom: "ART" },
                                    { top: "FUTURE", bottom: "BUILD" },
                                    { top: "SYSTEM", bottom: "SOUL" }
                                ]}
                                className="!font-display tracking-tighter"
                                fontSize="clamp(48px, 8vw, 96px)"
                                fontSizeMd="48px"
                                lineHeight={90}
                                lineHeightMd={55}
                            />
                        </div>

                        <div className="w-full flex flex-col justify-end border-t border-white/20 pt-6 md:pt-8 mt-8 md:mt-12 text-right">
                            <div className="mix-blend-difference max-w-2xl ml-auto">
                                {/* Clear Value Proposition */}
                                <p className="font-mono text-xs md:text-sm text-brand-accent uppercase tracking-[0.3em] mb-4">
                                    Digital Product Studio
                                </p>
                                <p className="font-sans text-lg md:text-3xl font-bold text-white mb-4 leading-tight">
                                    Webアプリ・モバイルアプリ開発、<br />
                                    UI/UXデザイン、SaaS開発
                                </p>
                                <p className="font-sans text-base md:text-xl text-white/80 mb-6 leading-tight">
                                    あなたのビジョンを、一緒に実現する。
                                </p>
                                <p className="font-mono text-xs md:text-sm text-gray-400 leading-relaxed tracking-wide">
                                    言葉にできないアイデアも、形にしたい想いも。<br />
                                    丁寧なデザインと確かな技術で、<br />
                                    あなたのビジネスを『成長』させる。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuroraBackground>
    );
};

export default Hero;