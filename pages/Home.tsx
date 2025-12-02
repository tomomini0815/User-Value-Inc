import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { PROJECTS } from '../constants';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import { DeviceMockup } from '../components/ui/device-mockup';

interface HomeProps {
    onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollRef });
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <div className="w-full bg-[#050505]">
            <Hero />

            {/* Philosophy Section - Grid Layout */}
            <section className="border-b border-white/20 bg-[#050505]">
                <div className="container mx-auto border-x border-white/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Block: Title */}
                        <div className="p-6 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between lg:min-h-[60vh] overflow-hidden">
                            <div className="w-full">
                                <h2 className="font-mono text-brand-accent text-xs mb-4 md:mb-6 tracking-[0.2em] uppercase">
                            // 01 Philosophy
                                </h2>

                                <h3 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-none">
                                    LOGIC <br />
                                    <span className="text-transparent text-stroke">&</span> EMOTION
                                </h3>
                            </div>
                            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-4 md:mt-6 lg:mt-8">
                                User Value Inc. <br /> Corporate Manifesto
                            </p>
                        </div>

                        {/* Right Block: Content */}
                        <div className="grid grid-rows-2">
                            <div className="p-6 md:p-12 border-b border-white/20 flex flex-col justify-center">
                                <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                                    美しいデザインは、<br />人の心を動かす。
                                </h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-mono">
                                    私たちが大切にしているのは、ただ「きれい」なだけのデザインではありません。<br />
                                    あなたのビジョンに共感し、ユーザーの心に響く体験を一緒に創ること。<br />
                                    データと戦略で確かな土台を築きながら、感性豊かなデザインで想いを形にする。<br />
                                    テクノロジーは手段。本当に届けたいのは、人の心に残る「あの瞬間」です。
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col gap-6 hover:bg-white/5 transition-all duration-500 group cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-brand-accent text-2xl md:text-3xl font-bold">01</span>
                                        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-accent group-hover:rotate-45 transition-all duration-500">
                                            <svg className="w-6 h-6 text-white group-hover:text-brand-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-display text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tight group-hover:text-brand-accent transition-colors duration-300">Design</h5>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            権威あるビジュアル言語と、<br className="hidden md:block" />
                                            直感的な導線の設計。
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-10 lg:p-12 flex flex-col gap-6 hover:bg-white/5 transition-all duration-500 group cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-brand-accent text-2xl md:text-3xl font-bold">02</span>
                                        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-accent group-hover:rotate-45 transition-all duration-500">
                                            <svg className="w-6 h-6 text-white group-hover:text-brand-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-display text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tight group-hover:text-brand-accent transition-colors duration-300">Experience</h5>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            データを読み解き、<br className="hidden md:block" />
                                            ユーザーの無意識に訴えかける体験設計。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works Section - Structural Horizontal Scroll */}
            <section ref={scrollRef} className="h-auto md:h-[300vh] relative bg-[#050505] border-b border-white/20">
                <div className="relative md:sticky md:top-0 h-auto md:h-screen overflow-hidden flex flex-col">

                    {/* Header for Works */}
                    <div className="border-b border-white/20 bg-[#050505] z-20">
                        <div className="container mx-auto border-x border-white/20 px-6 py-6 flex justify-between items-end">
                            <h2 className="font-display text-4xl font-bold text-white">OUR SERVICES</h2>
                            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">User Value運営サービス</p>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col md:flex-row items-stretch md:items-center relative">
                        {/* Structural Grid Background in Scroll Area */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #555 1px, transparent 1px), linear-gradient(to bottom, #555 1px, transparent 1px)',
                                backgroundSize: '100px 100px'
                            }}
                        />

                        {/* Mobile Layout (Vertical Stack) */}
                        <div className="flex flex-col md:hidden w-full">
                            {PROJECTS.map((project, index) => (
                                <a
                                    key={project.id}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full aspect-[4/5] border-b border-white/20 bg-[#050505] relative group flex flex-col overflow-hidden"
                                >
                                    {/* Background Image / Device Mockup */}
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505]">
                                        <DeviceMockup
                                            desktopImage={project.desktopImage}
                                            mobileImage={project.mobileImage}
                                            fallbackImage={project.image}
                                            alt={project.title}
                                            imageClassName={project.imageClassName}
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent"></div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                                        <div className="flex justify-between items-start mb-auto">
                                            <span className="font-mono text-brand-accent text-sm">0{index + 1}</span>
                                            <div className="flex gap-2">
                                                {project.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase border border-white/20 bg-black/30 backdrop-blur-sm px-2 py-1 text-gray-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="font-display text-4xl font-bold uppercase mb-2 text-white">{project.title}</h3>
                                        <p className="font-mono text-xs uppercase tracking-wider text-brand-accent mb-3">{project.description}</p>
                                        <p className="font-sans text-sm leading-relaxed text-gray-300 line-clamp-3">
                                            {project.longDescription}
                                        </p>
                                    </div>
                                </a>
                            ))}
                            {/* View All Mobile */}
                            <div
                                onClick={() => onNavigate('services')}
                                className="w-full py-12 border-b border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4 group">
                                    <span className="font-display text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">VIEW ALL SERVICES</span>
                                    <ArrowRight className="text-white group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout (Horizontal Scroll) */}
                        <motion.div style={{ x: xTransform }} className="hidden md:flex h-full items-center pl-12 gap-0">
                            {PROJECTS.map((project, index) => (
                                <a
                                    key={project.id}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 w-[45vw] h-full border-r border-white/20 bg-[#050505] relative group flex flex-col"
                                >
                                    {/* Top Info */}
                                    <div className="p-6 border-b border-white/20 flex justify-between items-start bg-[#050505] z-10">
                                        <span className="font-mono text-brand-accent text-sm">0{index + 1}</span>
                                        <div className="flex gap-2">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] uppercase border border-white/20 px-2 py-1 text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image Area with Overlay Description */}
                                    <div className="flex-grow relative overflow-hidden">
                                        {/* Background Image / Device Mockup */}
                                        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505] p-8">
                                            <DeviceMockup
                                                desktopImage={project.desktopImage}
                                                mobileImage={project.mobileImage}
                                                fallbackImage={project.image}
                                                alt={project.title}
                                                imageClassName={project.imageClassName}
                                            />
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/10 to-transparent"></div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <h3 className="font-display text-5xl md:text-6xl font-bold uppercase mb-3 text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                                            <p className="font-mono text-xs uppercase tracking-wider text-brand-accent mb-4">{project.description}</p>
                                            <p className="font-sans text-sm md:text-base leading-relaxed text-gray-300 max-w-lg">
                                                {project.longDescription}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}

                            {/* View All Desktop */}
                            <div
                                onClick={() => onNavigate('services')}
                                className="shrink-0 w-[20vw] h-full border-r border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <div className="rotate-90">
                                    <span className="font-mono text-sm uppercase tracking-[0.5em] text-white">View All Services →</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Mission />

            {/* CTA Section - Minimal & Bold */}
            <section className="py-40 border-t border-white/20 bg-[#050505]">
                <div className="container mx-auto px-6 text-center border-x border-white/20 py-20">
                    <h2 className="font-display text-[12vw] md:text-[8vw] leading-none font-bold text-white mb-6 md:mb-8">
                        BUILD NEXT.
                    </h2>
                    <p className="font-mono text-base md:text-lg text-gray-400 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
                        まだ見ぬ景色を、共に。準備はできています。
                    </p>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="inline-block border-2 border-white text-white px-10 md:px-12 py-5 md:py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base min-h-[56px]"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;