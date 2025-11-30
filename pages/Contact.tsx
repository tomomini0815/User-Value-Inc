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
                            {/* Inquiry Type */}
                            <div className="group relative">
                                <select
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer text-white appearance-none rounded-none"
                                >
                                    <option value="" disabled selected className="bg-brand-black text-gray-500">お問い合わせ種別を選択してください</option>
                                    <option value="web" className="bg-brand-black">Web制作・リニューアル</option>
                                    <option value="app" className="bg-brand-black">アプリケーション開発</option>
                                    <option value="uiux" className="bg-brand-black">UI/UXデザイン</option>
                                    <option value="consulting" className="bg-brand-black">DXコンサルティング</option>
                                    <option value="other" className="bg-brand-black">その他</option>
                                </select>
                                <label className="absolute left-0 -top-6 text-xs text-brand-accent font-mono uppercase tracking-wider">
                                    INQUIRY TYPE *
                                </label>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>

                            {/* Company & Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent"
                                        placeholder="会社名"
                                    />
                                    <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                        COMPANY NAME *
                                    </label>
                                </div>
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent"
                                        placeholder="お名前"
                                    />
                                    <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                        YOUR NAME *
                                    </label>
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative">
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent"
                                        placeholder="メールアドレス"
                                    />
                                    <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                        EMAIL ADDRESS *
                                    </label>
                                </div>
                                <div className="group relative">
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent"
                                        placeholder="電話番号"
                                    />
                                    <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                        PHONE NUMBER
                                    </label>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="group relative">
                                <textarea
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-all duration-300 peer placeholder-transparent resize-none min-h-[120px]"
                                    placeholder="お問い合わせ内容"
                                />
                                <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs cursor-text font-mono uppercase tracking-wider text-xs">
                                    MESSAGE *
                                </label>
                            </div>

                            {/* Privacy Policy Agreement */}
                            <div className="flex items-start gap-3 pt-4">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    required
                                    className="mt-1 w-4 h-4 rounded border-gray-500 text-brand-accent focus:ring-brand-accent bg-transparent"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-400 leading-relaxed">
                                    <a href="/User-Value-Inc/privacy" target="_blank" className="text-white underline hover:text-brand-accent transition-colors">プライバシーポリシー</a>
                                    に同意の上、送信してください。
                                    <br />
                                    <span className="text-xs text-gray-500">ご入力いただいた個人情報は、お問い合わせへの回答のみに利用いたします。</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm md:text-base hover:bg-brand-accent hover:text-white transition-all duration-300 min-h-[56px] mt-4"
                            >
                                同意して送信する
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;