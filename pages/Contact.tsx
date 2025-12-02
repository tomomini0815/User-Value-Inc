import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black pt-32 pb-20 px-6 flex flex-col justify-center">
            <div className="container mx-auto max-w-3xl">
                <div className="space-y-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center">
                            <p className="font-serif italic text-xl md:text-2xl text-gray-400 mb-3 md:mb-4">Get in touch</p>
                            <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8">
                                LET'S START A <br />
                                PROJECT.
                            </h1>
                            <div className="space-y-6 md:space-y-8 text-lg">
                                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                                    User Value Inc.は常に新しい挑戦を求めています。
                                    あなたのアイデアをお聞かせください。共に素晴らしいものを創りましょう。
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 p-6 md:p-8 lg:p-12 rounded-xl backdrop-blur-sm border border-white/5"
                    >
                        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                            {/* Inquiry Type - Checkboxes */}
                            <div>
                                <label className="block text-sm font-bold mb-4 text-white">
                                    お問い合わせ種別 <span className="text-brand-accent">*</span>
                                    <span className="ml-4 text-xs font-normal text-gray-500">複数選択可</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        'Web制作・リニューアル',
                                        'アプリケーション開発',
                                        'UI/UXデザイン',
                                        'DXコンサルティング',
                                        'お見積もりについて',
                                        'その他'
                                    ].map((type) => (
                                        <label key={type} className="flex items-center gap-3 p-4 border border-white/20 rounded hover:bg-white/5 cursor-pointer transition-all duration-300 group">
                                            <input
                                                type="checkbox"
                                                name="inquiry_type"
                                                value={type}
                                                className="w-4 h-4 rounded border-gray-500 text-brand-accent focus:ring-brand-accent bg-transparent"
                                            />
                                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Company & Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-white">
                                        会社名 <span className="text-brand-accent">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border border-white/20 rounded p-4 text-base focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all duration-300 placeholder-gray-600"
                                        placeholder="例）株式会社User Value"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-white">
                                        お名前 <span className="text-brand-accent">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border border-white/20 rounded p-4 text-base focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all duration-300 placeholder-gray-600"
                                        placeholder="例）山田 太郎"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-white">
                                        メールアドレス <span className="text-brand-accent">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-transparent border border-white/20 rounded p-4 text-base focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all duration-300 placeholder-gray-600"
                                        placeholder="例）info@uservalue.co.jp"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-white">
                                        電話番号
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border border-white/20 rounded p-4 text-base focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all duration-300 placeholder-gray-600"
                                        placeholder="例）03-1234-5678"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-bold mb-2 text-white">
                                    お問い合わせ内容 <span className="text-brand-accent">*</span>
                                </label>
                                <textarea
                                    rows={6}
                                    required
                                    className="w-full bg-transparent border border-white/20 rounded p-4 text-base focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all duration-300 placeholder-gray-600 resize-none"
                                    placeholder="ご相談内容やご質問などをご記入ください"
                                />
                            </div>

                            {/* Privacy Policy Agreement */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded">
                                <div className="flex items-start gap-4">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        required
                                        className="mt-1 w-5 h-5 rounded border-gray-500 text-brand-accent focus:ring-brand-accent bg-transparent cursor-pointer"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
                                        <a href="/User-Value-Inc/privacy" target="_blank" className="text-white font-bold underline hover:text-brand-accent transition-colors">プライバシーポリシー</a>
                                        に同意の上、送信してください。
                                        <br />
                                        <span className="text-xs text-gray-500 block mt-1">
                                            ※ご入力いただいた個人情報は、お問い合わせへの回答および対応上必要な手続きにのみ利用いたします。
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-white text-black font-bold text-lg hover:bg-brand-accent hover:text-white transition-all duration-300 rounded shadow-lg hover:shadow-brand-accent/20"
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