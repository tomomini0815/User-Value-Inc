import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Terminal, ExternalLink } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, PROJECTS } from '../constants';
import Hero from '../components/Hero';

interface HomeProps {
    onNavigate: (page: PageId) => void;
}

const TextReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
    return (
        <span className={`inline-block overflow-hidden align-bottom ${className}`}>
            <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
                className="block"
            >
                {children}
            </motion.span>
        </span>
    );
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerRef = useRef(null);
  
  // Horizontal Scroll Section setup
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const xTransform = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
  
  return (
    <div ref={containerRef} className="w-full bg-brand-black">
      {/* New Canvas-based Hero */}
      <Hero />

      {/* Narrative Section - Tech/Minimal */}
      <section className="py-32 md:py-48 px-6 bg-brand-black relative z-10 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16"
            >
                <div>
                     <h2 className="font-mono text-brand-accent text-sm mb-6 tracking-widest uppercase">
                        // 01_Philosophy
                     </h2>
                     <p className="font-display text-4xl md:text-6xl font-bold leading-tight text-white mb-8">
                        CODE IS<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">OUR CANVAS.</span>
                     </p>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                        We are a specialized studio of elite engineers and designers. 
                        We focus purely on crafting high-end digital products that define brands and drive growth.
                        <br/><br/>
                        洗練された技術とデザインの融合。
                        私たちは、デジタルの可能性を極限まで引き出し、ビジネスに圧倒的な競争力をもたらします。
                    </p>
                    <button 
                        onClick={() => onNavigate('about')}
                        className="self-start group flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                    >
                        <span>View Studio Identity</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Showcase - Digital Products */}
      <section ref={scrollRef} className="h-[250vh] relative bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <div className="absolute top-10 left-10 font-mono text-xs text-gray-500 z-20">
                SCROLL_X: [PRODUCTS]
            </div>
            <motion.div style={{ x: xTransform }} className="flex gap-16 pl-6 md:pl-20 items-center">
                <div className="shrink-0 w-[30vw] md:w-[25vw] pr-10">
                    <Terminal className="w-12 h-12 text-brand-accent mb-6" />
                    <h2 className="font-display text-5xl md:text-7xl font-bold leading-none mb-6">
                        In-house<br/><span className="text-gray-600">Products</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">
                        Innovative SaaS Solutions provided by User Value.
                    </p>
                </div>
                
                {PROJECTS.map((project, index) => (
                    <a 
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-[85vw] md:w-[50vw] aspect-[16/9] relative group cursor-pointer border border-white/10 bg-black rounded-lg overflow-hidden block"
                    >
                        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                             <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                            />
                             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                             <div className="flex justify-between items-end">
                                <div>
                                    <span className="font-mono text-xs text-brand-accent mb-2 block">PRODUCT_0{index + 1}</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 max-w-lg">{project.description}</p>
                                    <div className="flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-gray-300 bg-black/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/20 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                             </div>
                        </div>
                    </a>
                ))}
                
                <div className="shrink-0 w-[30vw] flex items-center justify-center">
                     <button 
                        onClick={() => onNavigate('services')}
                        className="group relative overflow-hidden rounded-full px-12 py-6 border border-white/20 hover:border-white transition-colors"
                     >
                        <span className="relative z-10 font-bold tracking-widest text-xs uppercase group-hover:text-black transition-colors duration-300">All Services</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* High-End CTA - Digital Aesthetic */}
      <section className="py-40 bg-brand-black relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
               <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
               >
                   <p className="font-mono text-xs text-brand-accent mb-8 uppercase tracking-widest">System Ready</p>
                   <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-12">
                       BUILD THE <br/>
                       <span className="text-white text-stroke text-transparent hover:text-white transition-colors duration-500">FUTURE</span> WITH US.
                   </h2>
                   <button 
                        onClick={() => onNavigate('contact')}
                        className="px-12 py-5 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
                    >
                       Start Project
                   </button>
               </motion.div>
          </div>
      </section>
    </div>
  );
};

export default Home;