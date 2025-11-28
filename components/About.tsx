import React from 'react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-black text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute right-[-10%] top-[20%] w-[300px] h-[300px] border border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />

      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Who We Are
            </h2>
            <div className="w-full h-[300px] md:h-[400px] bg-white/5 rounded-lg overflow-hidden relative">
                <img 
                    src="https://picsum.photos/600/800?grayscale" 
                    alt="Office Abstract" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
             <p className="text-xl md:text-2xl leading-relaxed font-light mb-12 text-gray-200">
               私たちは、単なるシステムの構築者ではありません。<br />
               ユーザーの本質的な価値（User Value）を見出し、<br />
               それをデジタルの力で最大化するパートナーです。
             </p>

             <div className="border-t border-white/20">
                <dl>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-white/10 gap-2">
                        <dt className="text-gray-500 text-sm uppercase tracking-wider">Company Name</dt>
                        <dd className="md:col-span-2 text-lg">{COMPANY_INFO.name} <br/><span className="text-sm text-gray-400">({COMPANY_INFO.nameEn})</span></dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-white/10 gap-2">
                        <dt className="text-gray-500 text-sm uppercase tracking-wider">Established</dt>
                        <dd className="md:col-span-2 text-lg">{COMPANY_INFO.establishment}</dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-white/10 gap-2">
                        <dt className="text-gray-500 text-sm uppercase tracking-wider">Representative</dt>
                        <dd className="md:col-span-2 text-lg">{COMPANY_INFO.representative}</dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-white/10 gap-2">
                        <dt className="text-gray-500 text-sm uppercase tracking-wider">Capital</dt>
                        <dd className="md:col-span-2 text-lg">{COMPANY_INFO.capital}</dd>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-white/10 gap-2">
                        <dt className="text-gray-500 text-sm uppercase tracking-wider">Location</dt>
                        <dd className="md:col-span-2 text-lg">{COMPANY_INFO.location}</dd>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-white/10 gap-2">
                        <dt className="text-gray-500 text-sm uppercase tracking-wider">Phone</dt>
                        <dd className="md:col-span-2 text-lg font-mono">{COMPANY_INFO.phone}</dd>
                    </div>
                </dl>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;