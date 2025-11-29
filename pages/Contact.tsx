import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black pt-32 pb-20 px-6 flex flex-col justify-center">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="font-serif italic text-xl md:text-2xl text-gray-400 mb-3 md:mb-4">Get in touch</p>
                            <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-10 md:mb-12">
                                LET'S START A <br />
                                PROJECT.
                            </h1>
                            <div className="space-y-6 md:space-y-8 text-lg">
                                <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
                                    User Value Inc.は常に新しい挑戦を求めています。
                                    あなたのアイデアをお聞かせください。共に素晴らしいものを創りましょう。
                                </p>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">EMAIL</span>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl md:text-2xl text-white hover:text-brand-accent transition-colors font-display break-all">{COMPANY_INFO.email}</a>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">PHONE</span>
                                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl md:text-2xl text-white hover:text-brand-accent transition-colors font-display">{COMPANY_INFO.phone}</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 p-6 md:p-8 lg:p-12 rounded-xl backdrop-blur-sm border border-white/5"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            {[
                                { id: 'Name', label: 'お名前', type: 'text' },
                                { id: 'Email', label: 'メールアドレス', type: 'email' },
                                { id: 'Company', label: '会社名', type: 'text' }
                            ].map((field) => (
                                <div key={field.id} className="group relative">
                                    <input
                                        type={field.type}
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-5 md:py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent min-h-[48px]"
                                        placeholder={field.label}
                                    />
                                    <label className="absolute left-0 top-5 md:top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                            <div className="group relative">
                                <textarea
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-5 md:py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent resize-none min-h-[120px]"
                                    placeholder="お問い合わせ内容"
                                />
                                <label className="absolute left-0 top-5 md:top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                    お問い合わせ内容
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-6 md:py-5 bg-white text-black font-bold uppercase tracking-widest text-sm md:text-base hover:bg-brand-accent hover:text-white transition-all duration-300 min-h-[56px]"
                            >
                                送信する
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;