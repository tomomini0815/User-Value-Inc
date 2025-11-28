import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import { Cpu, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">
      {/* Intro Header */}
      <div className="pt-40 pb-20 px-6 container mx-auto">
         <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-12">
            <div>
                 <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-mono text-xs text-brand-accent mb-6 uppercase tracking-widest"
                 >
                    // About Profile
                 </motion.h1>
                 <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter"
                 >
                    VISIONARY <span className="text-gray-600">&</span> <br/>
                    CRAFTSMANSHIP.
                 </motion.p>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-md mt-8 md:mt-0"
            >
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                    User Value Inc. is an elite digital product studio.
                    Operating as a high-precision specialized unit for your digital strategy.
                </p>
            </motion.div>
         </div>
      </div>

      {/* Hero Image - Minimalist Workspace / Solo Vibe */}
      <div className="w-full h-[50vh] overflow-hidden relative group">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            alt="Minimalist Workspace"
            className="w-full h-full object-cover opacity-60 filter grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* Sticky Sidebar - Representative Info */}
            <div className="lg:w-1/3">
                <div className="sticky top-32">
                    <div className="aspect-[3/4] overflow-hidden mb-6 relative group border border-white/10 rounded-sm">
                         {/* Updated Representative Image: Blue sweater/top, bob hair, professional look */}
                         <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                            alt="Representative Director" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-mono border border-white/10 text-white">
                                CEO / DIRECTOR
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-display font-bold text-2xl mb-1 text-white">{COMPANY_INFO.representative}</p>
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Representative Director</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 lg:pl-10">
                <div className="space-y-24">
                    <section>
                         <span className="font-mono text-brand-accent text-sm tracking-widest block mb-6">// 01 — IDENTITY</span>
                         <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">
                            Elite Digital Product Studio.<br/>
                            <span className="text-gray-500">Precision & Impact.</span>
                         </h3>
                         <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                            User Value Inc.は、単なるシステムの構築者ではありません。<br />
                            ユーザーの本質的な価値（User Value）を見出し、<br />
                            それをデジタルの力で最大化するパートナーです。
                         </p>
                         <p className="text-lg text-gray-400 leading-relaxed font-light mb-8">
                            「規模」を追わず、「質」と「衝撃」を追求するデジタル・ブティックです。
                            <br/><br/>
                            現代のビジネスにおいて必要なのは、巨大な組織図ではなく、鋭利な戦略と実装力を持つプロフェッショナルな「個」の力です。
                            高度なエンジニアリング能力と洗練されたデザイン美学を兼ね備えたデジタル・スタジオとして、
                            クライアントのビジネスに深くコミットし、市場を変えるプロダクトを共創します。
                         </p>
                         
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="p-6 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                <Zap className="w-8 h-8 text-brand-accent mb-4" />
                                <h4 className="font-bold mb-2 text-white">Speed & Precision</h4>
                                <p className="text-sm text-gray-400">意思決定から実装までを最速で。無駄を削ぎ落とした高密度な開発。</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                <Cpu className="w-8 h-8 text-brand-accent mb-4" />
                                <h4 className="font-bold mb-2 text-white">Technical Mastery</h4>
                                <p className="text-sm text-gray-400">モダンな技術スタックを自在に操り、堅牢でスケーラブルな基盤を構築。</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                <Globe className="w-8 h-8 text-brand-accent mb-4" />
                                <h4 className="font-bold mb-2 text-white">Global Standard</h4>
                                <p className="text-sm text-gray-400">世界水準のUI/UXデザインで、国境を越える普遍的な価値を提供。</p>
                            </div>
                         </div>
                    </section>

                    <section>
                        <span className="font-mono text-brand-accent text-sm tracking-widest block mb-6">// 02 — DATA</span>
                         <div className="border-t border-white/20">
                            {[
                                { label: 'Company Name', value: COMPANY_INFO.name + ` (${COMPANY_INFO.nameEn})` },
                                { label: 'Established', value: COMPANY_INFO.establishment },
                                { label: 'Capital', value: COMPANY_INFO.capital },
                                { label: 'Headquarters', value: COMPANY_INFO.location },
                                { label: 'Contact', value: COMPANY_INFO.phone },
                            ].map((row, i) => (
                                <div key={i} className="py-6 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 group hover:bg-white/5 transition-colors px-2 cursor-default">
                                    <dt className="text-gray-500 font-mono text-xs uppercase tracking-wider flex items-center">{row.label}</dt>
                                    <dd className="md:col-span-2 text-lg font-light text-white">{row.value}</dd>
                                </div>
                            ))}
                         </div>
                    </section>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;