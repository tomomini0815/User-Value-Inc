import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, PROJECTS } from '../constants';
import { ArrowUpRight, Plus, Minus, Layers, ExternalLink } from 'lucide-react';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(SERVICES[0].id);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-black">
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
             <h2 className="font-mono text-brand-accent text-sm mb-6 uppercase tracking-widest">
                // System Capabilities
             </h2>
            <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-white">
                DIGITAL <br/>
                SOLUTIONS.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
                Engineering that scales. Design that converts. <br/>
                We build the foundation of your digital business.
            </p>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-white/20 mb-32">
            {SERVICES.map((service, index) => (
                <div key={service.id} className="border-b border-white/20">
                    <div 
                        className="py-10 md:py-16 cursor-pointer group"
                        onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-baseline gap-6 md:gap-12">
                                <span className="font-mono text-sm text-brand-accent/50 group-hover:text-brand-accent transition-colors">0{index + 1}</span>
                                <h2 className="font-display text-3xl md:text-6xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h2>
                            </div>
                            <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${activeId === service.id ? 'bg-white text-black rotate-180' : 'group-hover:border-white'}`}>
                                {activeId === service.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {activeId === service.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-4">
                                        <div className="md:pl-[5rem]">
                                            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light border-l-2 border-brand-accent pl-6">
                                                {service.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {service.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-gray-400 uppercase tracking-wide font-mono">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <button className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors uppercase text-sm font-bold tracking-widest">
                                                <span>View Details</span> <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="relative aspect-[16/9] md:aspect-auto h-[350px] overflow-hidden rounded-lg bg-gray-900 border border-white/10">
                                            {/* Abstract tech visualization overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10 pointer-events-none mix-blend-overlay"></div>
                                            <img 
                                                src={service.image} 
                                                alt={service.title} 
                                                className="w-full h-full object-cover filter brightness-90 hover:brightness-110 transition-all duration-700"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            ))}
        </div>

        {/* Our Products Section */}
        <div className="py-12">
            <h2 className="font-mono text-brand-accent text-sm mb-12 uppercase tracking-widest">
                // Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                     <a 
                        key={project.id}
                        href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative block h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-gray-900"
                    >
                        {/* Image */}
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                             <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-brand-accent border border-brand-accent/30 px-2 py-1 rounded">PRODUCT_0{index + 1}</span>
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-display text-4xl md:text-5xl font-bold mb-3">{project.title}</h3>
                                <p className="text-xl text-white font-medium mb-4">{project.description}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                                    {project.longDescription}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                     {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono bg-black/50 border border-white/20 px-2 py-1 rounded text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;