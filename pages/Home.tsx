import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { PROJECTS, SERVICES } from '../constants';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import { DeviceMockup } from '../components/ui/device-mockup';

interface HomeProps {
    onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollRef });
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <div className="w-full bg-[#03070d]">
            <Hero />

            {/* Philosophy Section - Grid Layout */}
            <section className="border-b border-cyan-500/20 bg-[#03070d]">
                <div className="container mx-auto border-x border-cyan-500/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Block: Title */}
                        <div className="p-6 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-cyan-500/20 flex flex-col justify-between lg:min-h-[60vh] overflow-hidden relative">
                            <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="w-full relative z-10">
                                <h2 className="font-mono text-cyan-400 text-xs mb-4 md:mb-6 tracking-[0.25em] uppercase flex items-center gap-2 font-semibold">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                                    // 01 Philosophy
                                </h2>

                                <h3 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-none">
                                    LOGIC <br />
                                    <span className="text-transparent text-stroke">&</span> EMOTION
                                </h3>
                            </div>
                            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-4 md:mt-6 lg:mt-8 relative z-10">
                                User Value Inc. <br /> Corporate Manifesto
                            </p>
                        </div>

                        {/* Right Block: Content */}
                        <div className="grid grid-rows-2">
                            <div className="p-6 md:p-12 border-b border-cyan-500/20 flex flex-col justify-center bg-black/20">
                                <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                                    直感的な操作性と機能美が、<br />意思決定を加速させる。
                                </h4>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                                    私たちが追求しているのは、単なる見た目の装飾ではありません。<br />
                                    膨大なデータや複雑な業務フローを、迷いなく直感的に扱える明快な体験へ。<br />
                                    堅牢なアーキテクチャと論理的な導線設計を土台に、思考を妨げない洗練されたUIを構築する。<br />
                                    テクノロジーと機能美の融合で、日々の業務効率と事業の成長を力強く牽引します。
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-cyan-500/20 flex flex-col gap-6 hover:bg-cyan-950/20 transition-all duration-500 group cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-cyan-400 text-2xl md:text-3xl font-bold">01</span>
                                        <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:rotate-45 transition-all duration-500 bg-cyan-950/30">
                                            <svg className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-display text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tight group-hover:text-cyan-300 transition-colors duration-300">Design</h5>
                                        <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-cyan-100 transition-colors">
                                            複雑な情報を明快に整理し、<br className="hidden md:block" />
                                            直感的に把握できるダッシュボードUI設計。
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-10 lg:p-12 flex flex-col gap-6 hover:bg-cyan-950/20 transition-all duration-500 group cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-cyan-400 text-2xl md:text-3xl font-bold">02</span>
                                        <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:rotate-45 transition-all duration-500 bg-cyan-950/30">
                                            <svg className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-display text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tight group-hover:text-cyan-300 transition-colors duration-300">Experience</h5>
                                        <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-cyan-100 transition-colors">
                                            実際の利用シーンを徹底的に想像し、<br className="hidden md:block" />
                                            使うたびに心地よさを感じる体験設計。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Climarks-inspired 4 core service capabilities */}
            <section className="border-b border-cyan-500/20 bg-[#03070d] py-24 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1520px]">
                    <div className="border-b border-cyan-500/20 pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-4 font-semibold">
                                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                                // 02 SERVICES ｜ サービス案内
                            </div>
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                                戦略から運用まで、<br className="hidden sm:inline" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-sky-400">
                                    一貫して伴走する4つの領域。
                                </span>
                            </h2>
                        </div>
                        <p className="font-sans text-sm md:text-base text-slate-400 max-w-md leading-relaxed">
                            単なる画面制作にとどまらず、ビジネスモデルの理解からユーザー体験の具現化、リリース後の成長まで幅広くサポートします。
                        </p>
                    </div>

                    {/* Service Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {SERVICES.map((service, idx) => {
                            const IconComp = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    onClick={() => onNavigate('services')}
                                    className="group relative rounded-3xl border border-cyan-500/20 bg-[#040913]/80 p-8 sm:p-10 backdrop-blur-md hover:border-cyan-400/50 hover:bg-[#050e1f]/80 transition-all duration-500 flex flex-col justify-between cursor-pointer"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
                                                <IconComp size={26} />
                                            </div>
                                            <span className="font-mono text-2xl font-bold text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                                                0{idx + 1}
                                            </span>
                                        </div>

                                        <div className="mb-4">
                                            <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                                                {service.title}
                                            </span>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-cyan-200 transition-colors">
                                                {service.titleJa}
                                            </h3>
                                        </div>

                                        <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.tags.map(t => (
                                                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-200/80">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between text-cyan-300 font-sans text-sm font-semibold group-hover:text-cyan-200">
                                            <span>詳細を見る</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={() => onNavigate('services')}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-400/40 bg-cyan-950/30 hover:bg-cyan-400 hover:text-black text-cyan-300 font-sans text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                        >
                            <span>すべてのサービス・提供フローを見る</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Works Section - Structural Horizontal Scroll */}
            <section ref={scrollRef} className="h-auto md:h-[400vh] relative bg-[#03070d] border-b border-cyan-500/20">
                <div className="relative md:sticky md:top-0 h-auto md:h-screen overflow-hidden flex flex-col">

                    {/* Header for Works */}
                    <div className="border-b border-cyan-500/20 bg-[#03070d]/90 backdrop-blur-md z-20">
                        <div className="container mx-auto border-x border-cyan-500/20 px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
                            <div>
                                <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-1 font-semibold">
                                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                                    // 03 WORKS ｜ 制作・運営実績
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                                    OUR CRAFT & PROJECTS
                                </h2>
                            </div>
                            <p className="font-mono text-xs text-cyan-300/70 uppercase tracking-widest">User Value 自社プロダクト・プロジェクト</p>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col md:flex-row items-stretch md:items-center relative">
                        {/* Structural Grid Background in Scroll Area */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
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
                                    className="w-full aspect-[4/5] border-b border-cyan-500/20 bg-[#040913] relative group flex flex-col overflow-hidden"
                                >
                                    {/* Background Image / Device Mockup */}
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#040913]">
                                        <DeviceMockup
                                            desktopImage={project.desktopImage}
                                            mobileImage={project.mobileImage}
                                            fallbackImage={project.image}
                                            alt={project.title}
                                            imageClassName={project.imageClassName}
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#03070d]/95 via-[#03070d]/30 to-transparent"></div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                                        <div className="flex justify-between items-start mb-auto">
                                            <span className="font-mono text-cyan-400 text-sm font-bold">0{index + 1}</span>
                                            <div className="flex gap-2">
                                                {project.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase border border-cyan-400/20 bg-cyan-950/40 backdrop-blur-sm px-2 py-1 text-cyan-200">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="font-display text-4xl font-bold uppercase mb-2 text-white">{project.title}</h3>
                                        <p className="font-mono text-xs uppercase tracking-wider text-cyan-300 mb-3">{project.description}</p>
                                        <p className="font-sans text-sm leading-relaxed text-slate-300 line-clamp-3">
                                            {project.longDescription}
                                        </p>
                                    </div>
                                </a>
                            ))}
                            {/* View All Mobile */}
                            <div
                                onClick={() => onNavigate('services')}
                                className="w-full py-12 border-b border-cyan-500/20 flex items-center justify-center cursor-pointer hover:bg-cyan-950/20 transition-colors"
                            >
                                <div className="flex items-center gap-4 group">
                                    <span className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">VIEW ALL SERVICES</span>
                                    <ArrowRight className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
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
                                    className="shrink-0 w-[45vw] h-full border-r border-cyan-500/20 bg-[#040913] relative group flex flex-col"
                                >
                                    {/* Top Info */}
                                    <div className="p-6 border-b border-cyan-500/20 flex justify-between items-start bg-[#03070d]/80 backdrop-blur-sm z-10">
                                        <span className="font-mono text-cyan-400 font-bold text-sm">0{index + 1}</span>
                                        <div className="flex gap-2">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] uppercase border border-cyan-400/20 bg-cyan-950/30 px-2 py-1 text-cyan-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image Area with Overlay Description */}
                                    <div className="flex-grow relative overflow-hidden">
                                        {/* Background Image / Device Mockup */}
                                        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#040913] p-8">
                                            <DeviceMockup
                                                desktopImage={project.desktopImage}
                                                mobileImage={project.mobileImage}
                                                fallbackImage={project.image}
                                                alt={project.title}
                                                imageClassName={project.imageClassName}
                                            />
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#03070d]/95 via-[#03070d]/20 to-transparent"></div>

                                        {/* Content Overlay - Positioned slightly above bottom */}
                                        <div className="absolute inset-0 p-8 flex flex-col items-start justify-end pb-16">
                                            <h3 className="font-display text-5xl md:text-6xl font-bold uppercase mb-3 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                                            <p className="font-mono text-xs uppercase tracking-wider text-cyan-300 mb-4">{project.description}</p>
                                            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300 max-w-lg">
                                                {project.longDescription}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}

                            {/* View All Desktop */}
                            <div
                                onClick={() => onNavigate('services')}
                                className="shrink-0 w-[20vw] h-full border-r border-cyan-500/20 flex items-center justify-center cursor-pointer hover:bg-cyan-950/30 transition-colors"
                            >
                                <div className="rotate-90 flex items-center gap-2">
                                    <span className="font-mono text-base uppercase tracking-[0.5em] text-white hover:text-cyan-300 transition-colors">View All Services →</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Mission onNavigate={onNavigate} />

            {/* CTA Section - Minimal & Bold */}
            <section className="py-40 border-t border-cyan-500/20 bg-[#03070d] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-6 text-center border-x border-cyan-500/20 py-20 relative z-10">
                    <h2 className="font-display text-[12vw] md:text-[8vw] leading-none font-bold text-white mb-6 md:mb-8">
                        BUILD NEXT.
                    </h2>
                    <p className="font-mono text-base md:text-lg text-slate-300 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
                        まだ見ぬ景色を、共に。準備はできています。
                    </p>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="inline-block border border-cyan-400 bg-gradient-to-r from-cyan-400 to-sky-400 text-black px-10 md:px-12 py-5 md:py-4 font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-105 transition-all duration-300 text-sm md:text-base min-h-[56px] rounded-full"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
