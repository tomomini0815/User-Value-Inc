import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PROJECTS } from '../constants';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
      <div className="container mx-auto border-x border-white/20">
        
        {/* Header */}
        <div className="px-6 md:px-12 py-20 border-b border-white/20">
             <h2 className="font-mono text-brand-accent text-xs mb-6 uppercase tracking-widest">
                // System Capabilities
             </h2>
            <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase">
                Digital <br/> Solutions
            </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
            {SERVICES.map((service, index) => (
                <div 
                    key={service.id} 
                    className={`
                        group relative border-b border-white/20 bg-[#050505] p-8 md:p-12 flex flex-col justify-between min-h-[400px] hover:bg-white/5 transition-colors duration-500
                        ${index % 2 === 0 ? 'md:border-r' : ''}
                    `}
                >
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-mono text-brand-accent text-xl">0{index + 1}</span>
                            <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-brand-accent transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-mono">
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
                        <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                            View Capability <ArrowUpRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Products Section - Full Width Cards */}
        <div className="border-b border-white/20">
            <div className="px-6 md:px-12 py-12 bg-white/5 border-b border-white/20">
                 <h2 className="font-mono text-white text-xs uppercase tracking-widest">
                    // Proprietary Products
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
                                 Launch Project <ExternalLink className="w-4 h-4" />
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