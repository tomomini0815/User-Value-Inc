import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PROJECTS, AI_SERVICES } from '../constants';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

import { PageId } from '../types';

interface ServicesProps {
    onNavigate?: (page: PageId) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
    const handleServiceClick = (index: number) => {
        if (!onNavigate) return;
        const pageIds: PageId[] = ['service_web', 'service_app', 'service_uiux', 'service_saas'];
        if (pageIds[index]) {
            onNavigate(pageIds[index]);
        }
    };

    const handleAIServiceClick = () => {
        if (!onNavigate) return;
        onNavigate('ai_services');
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
            <div className="container mx-auto border-x border-white/20">

                {/* Header */}
                <div className="px-6 md:px-12 py-16 md:py-20 border-b border-white/20">
                    <h2 className="font-mono text-brand-accent text-xs mb-4 md:mb-6 uppercase tracking-widest">
                        <div className="flex flex-col gap-1">
                            <span>// System Capabilities</span>
                            <span className="text-[10px] opacity-70">// システム機能</span>
                        </div>
                    </h2>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white uppercase">
                        <div className="flex flex-col gap-2">
                            <span>Digital <br /> Solutions</span>
                            <span className="text-2xl md:text-4xl lg:text-6xl opacity-70 normal-case">デジタルソリューション</span>
                        </div>
                    </h1>
                </div>

                {/* Services Grid */}
                <div id="digital-solutions" className="grid grid-cols-1 md:grid-cols-2 border-b border-white/20">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            onClick={() => handleServiceClick(index)}
                            className={`
                        group relative border-b border-white/20 bg-[#050505] p-6 md:p-8 lg:p-12 flex flex-col justify-between min-h-[400px] hover:bg-white/5 transition-colors duration-500 cursor-pointer
                        ${index % 2 === 0 ? 'md:border-r' : ''}
                        last:border-b-0 md:last:border-b-0
                    `}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6 md:mb-8">
                                    <span className="font-mono text-brand-accent text-lg md:text-xl">0{index + 1}</span>
                                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 group-hover:text-brand-accent transition-colors">
                                    <div className="flex flex-col gap-1">
                                        <span>{service.title}</span>
                                        {service.titleJa && (
                                            <span className="text-lg md:text-xl lg:text-2xl opacity-70 font-normal">{service.titleJa}</span>
                                        )}
                                    </div>
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-mono">
                                    {service.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] md:text-xs uppercase border border-white/10 px-2 py-1 text-gray-500 bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 group-hover:translate-x-2">
                                    <div className="flex flex-col items-start">
                                        <span>View Workflow</span>
                                        <span className="text-[9px] normal-case opacity-70">ワークフローを見る</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI Services Header */}
                <div className="px-6 md:px-12 py-16 md:py-20 border-b border-white/20 bg-white/5">
                    <h2 className="font-mono text-brand-accent text-xs mb-4 md:mb-6 uppercase tracking-widest">
                        <div className="flex flex-col gap-1">
                            <span>// Next Gen Development</span>
                            <span className="text-[10px] opacity-70">// 次世代開発</span>
                        </div>
                    </h2>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white uppercase">
                        <div className="flex flex-col gap-2">
                            <span>AI-Driven <br /> Development</span>
                            <span className="text-2xl md:text-4xl lg:text-6xl opacity-70 normal-case tracking-wider">AI駆動型開発</span>
                        </div>
                    </h1>
                </div>

                {/* AI Services Grid */}
                <div id="ai-driven-development" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white/20">
                    {AI_SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            onClick={() => handleAIServiceClick()}
                            className={`
                        group relative border-b border-white/20 bg-[#050505] p-6 md:p-8 flex flex-col justify-between min-h-[350px] hover:bg-white/5 transition-colors duration-500 cursor-pointer
                        ${index !== AI_SERVICES.length - 1 ? 'lg:border-r' : ''}
                        md:border-r
                    `}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-brand-accent text-lg">AI-0{index + 1}</span>
                                    <service.icon className="w-6 h-6 text-gray-600 group-hover:text-brand-accent transition-colors" />
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                                    <div className="flex flex-col gap-1">
                                        <span>{service.title}</span>
                                        {service.titleJa && (
                                            <span className="text-base md:text-lg opacity-70 font-normal">{service.titleJa}</span>
                                        )}
                                    </div>
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
                                    {service.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase border border-white/10 px-2 py-1 text-gray-500 bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 group-hover:translate-x-2">
                                    <div className="flex flex-col items-start">
                                        <span>View Workflow</span>
                                        <span className="text-[9px] normal-case opacity-70">ワークフローを見る</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Products Section - Full Width Cards */}
                <div className="border-b border-white/20">
                    <div className="px-6 md:px-12 py-12 bg-white/5 border-b border-white/20">
                        <h2 className="font-mono text-white text-xs uppercase tracking-widest">
                            <div className="flex flex-col gap-1">
                                <span>// Proprietary Products</span>
                                <span className="text-[10px] opacity-70">// 自社プロダクト</span>
                            </div>
                        </h2>
                    </div>

                    {PROJECTS.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border-b border-white/20 last:border-b-0 relative overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                {/* Info Side */}
                                <div className="p-8 md:p-16 flex flex-col justify-center relative z-10 bg-[#050505] lg:border-r border-white/20 group-hover:bg-[#0a0a0a] transition-colors">
                                    <div className="mb-6">
                                        <span className="font-mono text-xs text-brand-accent border border-brand-accent px-2 py-1 uppercase">
                                            Product_0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-xl text-white mb-6 font-light">{project.description}</p>
                                    <p className="text-gray-500 font-mono text-sm leading-relaxed max-w-md mb-8">
                                        {project.longDescription}
                                    </p>
                                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                                        <div className="flex flex-col">
                                            <span>Launch Project</span>
                                            <span className="text-[9px] normal-case opacity-70">プロジェクトを開く</span>
                                        </div>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="relative h-[300px] lg:h-auto overflow-hidden border-t lg:border-t-0 border-white/20 lg:border-none">
                                    <div className="absolute inset-0 bg-gray-900">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;