import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Mission: React.FC = () => {
    return (
        <section className="relative bg-[#050505] border-b border-white/10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto border-x border-white/10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">

                    {/* Mission Text Area */}
                    <div className="lg:col-span-8 p-10 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="font-mono text-sm text-brand-accent mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                                // OUR PROMISE <span className="text-brand-accent/60 ml-2 text-xs">私たちの約束</span>
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                                Bringing your ideas to life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">technology that feels human.</span>
                            </h2>
                            <p className="text-white/60 text-sm md:text-base lg:text-lg font-light">
                                あなたのアイデアを、体温のあるテクノロジーで現実に。
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Area */}
                    <div className="lg:col-span-4 group relative overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent transform transition-colors duration-500 ease-in-out"></div>

                        <div className="relative h-full p-10 md:p-16 flex flex-col justify-between items-start transition-colors duration-500 z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-xs text-white/50 group-hover:text-black/60 uppercase tracking-widest transition-colors duration-300">
                                        Let's Talk
                                    </span>
                                    <span className="text-[10px] text-white/30 group-hover:text-black/40 transition-colors duration-300">
                                        お問い合わせ
                                    </span>
                                </div>
                            </motion.div>

                            <div className="mt-8 w-full">
                                <h3 className="font-display font-bold text-3xl md:text-4xl text-white group-hover:text-black mb-2 transition-colors duration-300 leading-tight">
                                    Let's Create<br />Together
                                </h3>
                                <p className="text-sm text-white/60 group-hover:text-black/70 mb-6 transition-colors duration-300">
                                    一緒に未来を創りましょう
                                </p>
                                <div className="flex items-center gap-4 text-brand-accent group-hover:text-black transition-colors duration-300">
                                    <span className="text-sm font-mono border-b border-current pb-0.5">Contact Us</span>
                                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
