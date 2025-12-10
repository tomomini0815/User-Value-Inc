import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_DETAILS } from '../constants';
import { PageId } from '../types';
import { ArrowLeft, Zap, Smartphone, Cpu } from 'lucide-react';

interface AIServicesProps {
    onNavigate: (page: PageId) => void;
}

const AI_SERVICE_IDS = ['service_ai_web', 'service_ai_app', 'service_ai_saas'];
const AI_ICONS = [Zap, Smartphone, Cpu];

const AIServices: React.FC<AIServicesProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => onNavigate('services')}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Services</span>
                </button>

                {/* Header */}
                <div className="max-w-4xl mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-mono text-brand-accent text-xs mb-4 uppercase tracking-widest"
                    >
                        // AI-Driven Development
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        AI開発ワークフロー
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 leading-relaxed max-w-2xl text-lg"
                    >
                        AIツールを活用した効率的な開発プロセス。<br />
                        人間のエンジニアが品質を監修しながら、従来より短期間で高品質なプロダクトを提供します。
                    </motion.p>
                </div>

                {/* Services */}
                <div className="space-y-32">
                    {AI_SERVICE_IDS.map((serviceId, serviceIndex) => {
                        const service = SERVICE_DETAILS[serviceId];
                        const Icon = AI_ICONS[serviceIndex];

                        if (!service) return null;

                        return (
                            <motion.section
                                key={serviceId}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="border-t border-white/10 pt-16"
                            >
                                {/* Service Header */}
                                <div className="flex items-start gap-6 mb-12">
                                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-7 h-7 text-brand-accent" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-brand-accent text-xs mb-2 uppercase tracking-widest">
                                            0{serviceIndex + 1}
                                        </p>
                                        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-400 max-w-2xl">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Workflow */}
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                                    {service.flow.map((step, index) => (
                                        <motion.div
                                            key={step.step}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                        >
                                            <span className="font-mono text-brand-accent text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                                                {step.step}
                                            </span>
                                            <h3 className="text-white font-bold mt-2 mb-3 text-sm md:text-base group-hover:text-brand-accent transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AIServices;
