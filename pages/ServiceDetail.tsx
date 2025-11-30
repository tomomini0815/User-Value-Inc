import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_DETAILS } from '../constants';
import { PageId } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ServiceDetailProps {
    serviceId: string;
    onNavigate: (page: PageId) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onNavigate }) => {
    const service = SERVICE_DETAILS[serviceId];

    if (!service) {
        return <div>Service not found</div>;
    }

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
                <div className="max-w-4xl mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-brand-accent font-light mb-8"
                    >
                        {service.subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-gray-400 leading-relaxed max-w-2xl"
                    >
                        {service.description}
                    </motion.p>
                </div>

                {/* Workflow Section */}
                <div className="border-t border-white/20 pt-20">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">WORKFLOW</h2>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Standard Process</p>
                    </div>

                    <div className="space-y-0">
                        {service.flow.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group border-b border-white/10 py-12 md:py-16 hover:bg-white/5 transition-colors duration-500"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                    <div className="md:col-span-2">
                                        <span className="font-mono text-brand-accent text-xl md:text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                                            {step.step}
                                        </span>
                                    </div>
                                    <div className="md:col-span-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <div className="md:col-span-6">
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 text-center">
                    <p className="text-gray-400 mb-8">プロジェクトのご相談はこちらから</p>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
