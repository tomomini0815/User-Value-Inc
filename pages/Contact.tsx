import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormData {
    inquiryTypes: string[];
    company: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    privacyAgreed: boolean;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        inquiryTypes: [],
        company: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        privacyAgreed: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Vercel API endpoint - Vercel Serverless Functionを使用
    const API_ENDPOINT = '/api/contact';

    const handleCheckboxChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            inquiryTypes: prev.inquiryTypes.includes(value)
                ? prev.inquiryTypes.filter(type => type !== value)
                : [...prev.inquiryTypes, value]
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // バリデーション
        if (formData.inquiryTypes.length === 0) {
            setErrorMessage('お問い合わせ種別を少なくとも1つ選択してください。');
            setSubmitStatus('error');
            return;
        }

        if (!formData.privacyAgreed) {
            setErrorMessage('プライバシーポリシーに同意してください。');
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Vercel API Functionへの送信
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inquiryTypes: formData.inquiryTypes.join(', '),
                    company: formData.company,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // フォームをリセット
                setFormData({
                    inquiryTypes: [],
                    company: '',
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    privacyAgreed: false,
                });
            } else {
                throw new Error('送信に失敗しました。');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setErrorMessage('送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        {/* Status Messages */}
                        <AnimatePresence mode="wait">
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 p-6 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-green-400 font-bold text-lg mb-2">送信完了</h3>
                                        <p className="text-green-300/80 text-sm leading-relaxed">
                                            お問い合わせありがとうございます。<br />
                                            内容を確認の上、2営業日以内にご連絡させていただきます。
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 p-6 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-4"
                                >
                                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-red-400 font-bold text-lg mb-2">送信エラー</h3>
                                        <p className="text-red-300/80 text-sm">{errorMessage}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form className="space-y-10" onSubmit={handleSubmit}>
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
                                                checked={formData.inquiryTypes.includes(type)}
                                                onChange={() => handleCheckboxChange(type)}
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
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
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
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
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
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
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
                                        name="privacyAgreed"
                                        checked={formData.privacyAgreed}
                                        onChange={handleInputChange}
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
                                disabled={isSubmitting}
                                className="w-full py-5 bg-white text-black font-bold text-lg hover:bg-brand-accent hover:text-white transition-all duration-300 rounded shadow-lg hover:shadow-brand-accent/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader className="w-5 h-5 animate-spin" />
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        同意して送信する
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;