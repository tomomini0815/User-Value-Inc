import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import { Cpu, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* Intro Header */}
            <div className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-10 md:pb-12">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-mono text-xs text-brand-accent mb-4 md:mb-6 uppercase tracking-widest"
                        >
                    // About Profile
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter"
                        >
                            VISIONARY <span className="text-gray-600">&</span> <br />
                            CRAFTSMANSHIP.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-md mt-6 md:mt-0"
                    >
                        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
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

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
                <div className="flex flex-row gap-4 md:gap-10 lg:gap-20 items-start">
                    {/* Sticky Sidebar - Representative Info */}
                    <div className="w-[35%] md:w-1/3 lg:w-1/3 flex-shrink-0">
                        <div className="sticky top-24 md:top-32 w-full">
                            <div className="aspect-[3/4] overflow-hidden mb-3 md:mb-6 relative group border border-white/10 rounded-sm">
                                {/* Representative Profile Photo */}
                                <img
                                    src="/User-Value-Inc/images/profile.jpg"
                                    alt="Representative Director - Tomomi Era"
                                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                                    style={{ objectPosition: 'center 20%' }}
                                />

                                {/* Badge */}
                                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
                                    <div className="bg-black/50 backdrop-blur-md px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-xs font-mono border border-white/10 text-white whitespace-nowrap">
                                        CEO / DIRECTOR / DESIGNER
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-display font-bold text-sm md:text-2xl mb-1 text-white">{COMPANY_INFO.representative}</p>
                                <p className="font-mono text-[8px] md:text-xs text-gray-500 uppercase tracking-widest">Representative Director</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-[65%] md:w-2/3 lg:w-2/3 lg:pl-10">
                        <div className="space-y-24">
                            <section>
                                <span className="font-mono text-brand-accent text-sm tracking-widest block mb-6">// 01 — IDENTITY</span>
                                <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold mb-6 md:mb-8 text-white">
                                    デジタルで、<br />
                                    <span className="text-gray-500">想いを形に。</span>
                                </h3>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6 md:mb-8">
                                    User Value Inc.は、あなたのビジョンを実現するデジタルパートナーです。<br />
                                    「こんなサービスがあったらいいな」という想いを、<br />
                                    使いやすく、美しいプロダクトに変えていきます。
                                </p>
                                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light mb-6 md:mb-8">
                                    大切にしているのは、お客様との対話と、丁寧なものづくり。
                                    <br /><br />
                                    最新の技術と、心を動かすデザインを組み合わせて、
                                    あなたのビジネスに本当に必要なものを一緒に考え、作り上げていきます。
                                    小さなアイデアから、大きな変化まで。私たちは、あなたの成功を全力でサポートします。
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                    <div className="p-6 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                        <Zap className="w-8 h-8 text-brand-accent mb-4" />
                                        <h4 className="font-bold mb-2 text-white">スピーディーな対応</h4>
                                        <p className="text-sm text-gray-400">ご相談から開発まで、スムーズに進めます。無駄な時間をかけず、必要なものを素早くお届けします。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                        <Cpu className="w-8 h-8 text-brand-accent mb-4" />
                                        <h4 className="font-bold mb-2 text-white">柔軟な技術選定</h4>
                                        <p className="text-sm text-gray-400">新しい技術も、使い慣れた技術も。あなたのプロジェクトに合わせて、一緒に最適な方法を見つけていきます。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                        <Globe className="w-8 h-8 text-brand-accent mb-4" />
                                        <h4 className="font-bold mb-2 text-white">使いやすいデザイン</h4>
                                        <p className="text-sm text-gray-400">誰でも直感的に使える、美しいデザインを心がけています。お客様の声を大切に、使いやすさを追求します。</p>
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
                                        { label: 'Email', value: COMPANY_INFO.email },
                                        { label: 'Phone', value: COMPANY_INFO.phone },
                                    ].map((row, i) => (
                                        <div key={i} className="py-6 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 group hover:bg-white/5 transition-colors px-2 cursor-default">
                                            <dt className="text-gray-500 font-mono text-xs uppercase tracking-wider flex items-center">{row.label}</dt>
                                            <dd className="md:col-span-2 text-lg font-light text-white break-all">{row.value}</dd>
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