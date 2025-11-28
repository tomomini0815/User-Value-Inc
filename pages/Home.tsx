import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { PROJECTS } from '../constants';
import Hero from '../components/Hero';

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
                <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between min-h-[60vh] overflow-hidden">
                     <div className="w-full">
                        <h2 className="font-mono text-brand-accent text-xs mb-8 tracking-[0.2em] uppercase">
                            // 01 Philosophy
                        </h2>
                        
                        <h3 className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                            LOGIC <br/>
                            <span className="text-transparent text-stroke">&</span> EMOTION
                        </h3>
                     </div>
                     <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-8">
                        User Value Inc. <br/> Corporate Manifesto
                     </p>
                </div>

                {/* Right Block: Content */}
                <div className="grid grid-rows-2">
                    <div className="p-12 border-b border-white/20 flex flex-col justify-center">
                        <h4 className="font-display text-2xl font-bold text-white mb-6">
                            美学は、<br/>最強の機能である。
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono text-justify">
                            User Value Inc.が創るのは、単なるインターフェースではありません。
                            それはブランドとユーザーを繋ぐ「感情の架け橋」です。
                            緻密な戦略（Logic）で土台を築き、卓越した意匠（Emotion）で心を鷲掴みにする。
                            テクノロジーはあくまで手段。ここに提供するのは、心に刻まれる体験そのものです。
                        </p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="p-8 border-r border-white/20 flex flex-col justify-between hover:bg-white/5 transition-colors">
                            <span className="font-mono text-brand-accent text-xl">01</span>
                            <div>
                                <h5 className="text-white font-bold mb-2 uppercase tracking-wider">Design</h5>
                                <p className="text-xs text-gray-500">権威あるビジュアル言語と、直感的な導線の設計。</p>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col justify-between hover:bg-white/5 transition-colors">
                            <span className="font-mono text-brand-accent text-xl">02</span>
                             <div>
                                <h5 className="text-white font-bold mb-2 uppercase tracking-wider">Experience</h5>
                                <p className="text-xs text-gray-500">データを読み解き、ユーザーの無意識に訴えかける体験設計。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Works Section - Structural Horizontal Scroll */}
      <section ref={scrollRef} className="h-[300vh] relative bg-[#050505] border-b border-white/20">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
            
            {/* Header for Works */}
            <div className="border-b border-white/20 bg-[#050505] z-20">
                <div className="container mx-auto border-x border-white/20 px-6 py-6 flex justify-between items-end">
                    <h2 className="font-display text-4xl font-bold text-white">SELECTED WORKS</h2>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Case Studies & Products</p>
                </div>
            </div>

            <div className="flex-grow flex items-center relative">
                 {/* Structural Grid Background in Scroll Area */}
                <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #555 1px, transparent 1px), linear-gradient(to bottom, #555 1px, transparent 1px)',
                        backgroundSize: '100px 100px'
                    }}
                />

                <motion.div style={{ x: xTransform }} className="flex h-full items-center pl-12 gap-0">
                    {PROJECTS.map((project, index) => (
                        <a 
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-[60vw] md:w-[40vw] h-full border-r border-white/20 bg-[#050505] relative group flex flex-col"
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

                            {/* Image Area */}
                            <div className="flex-grow relative overflow-hidden">
                                <div className="absolute inset-0 bg-gray-900">
                                    <motion.img 
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Bottom Title */}
                            <div className="p-8 border-t border-white/20 bg-[#050505] z-10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <h3 className="font-display text-4xl font-bold uppercase mb-2">{project.title}</h3>
                                <p className="font-mono text-xs uppercase tracking-wider opacity-70">{project.description}</p>
                            </div>
                        </a>
                    ))}
                    
                    {/* View All */}
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

      {/* CTA Section - Minimal & Bold */}
      <section className="py-40 border-t border-white/20 bg-[#050505]">
          <div className="container mx-auto px-6 text-center border-x border-white/20 py-20">
               <h2 className="font-display text-[8vw] leading-none font-bold text-white mb-8">
                   BUILD NEXT.
               </h2>
               <p className="font-mono text-sm md:text-base text-gray-400 mb-12 max-w-xl mx-auto">
                   まだ見ぬ景色を、共に。準備はできています。
               </p>
               <button 
                    onClick={() => onNavigate('contact')}
                    className="inline-block border border-white text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                   Contact Us
               </button>
          </div>
      </section>
    </div>
  );
};

export default Home;