import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, HelpCircle, Zap, Sparkles, Rocket, Cpu, Bot } from 'lucide-react';
import { PageId } from '../types';

interface PricingProps {
    onNavigate: (page: PageId) => void;
}

// 通常開発プラン
const STANDARD_PLANS = [
    {
        id: 'light',
        name: 'ライトプラン',
        nameEn: 'LIGHT',
        description: '小規模サイト・LP制作に最適',
        price: '30',
        priceUnit: '万円〜',
        period: '制作期間：約2〜4週間',
        icon: Zap,
        color: 'from-white/20 to-white/10',
        features: [
            { text: 'ページ数：1〜5ページ', included: true },
            { text: 'レスポンシブ対応', included: true },
            { text: 'お問い合わせフォーム', included: true },
            { text: 'SEO基本設定', included: true },
            { text: 'テンプレートデザイン', included: true },
            { text: 'オリジナルデザイン', included: false },
            { text: 'アニメーション実装', included: false },
        ],
        recommended: false,
        note: '名刺代わりのシンプルなサイトに',
    },
    {
        id: 'standard',
        name: 'スタンダードプラン',
        nameEn: 'STANDARD',
        description: '中小企業のコーポレートサイトに',
        price: '80',
        priceUnit: '万円〜',
        period: '制作期間：約1〜2ヶ月',
        icon: Sparkles,
        color: 'from-white/30 to-white/15',
        features: [
            { text: 'ページ数：5〜15ページ', included: true },
            { text: 'レスポンシブ対応', included: true },
            { text: 'お問い合わせフォーム', included: true },
            { text: 'SEO基本設定', included: true },
            { text: 'オリジナルデザイン', included: true },
            { text: 'アニメーション実装', included: true },
            { text: '保守・運用サポート', included: false },
        ],
        recommended: true,
        note: '最も人気のプラン',
    },
    {
        id: 'premium',
        name: 'プレミアムプラン',
        nameEn: 'PREMIUM',
        description: '大規模サイト・Webアプリ開発に',
        price: '200',
        priceUnit: '万円〜',
        period: '制作期間：約2〜6ヶ月',
        icon: Rocket,
        color: 'from-white/25 to-white/10',
        features: [
            { text: 'ページ数：15ページ以上', included: true },
            { text: 'レスポンシブ対応', included: true },
            { text: 'お問い合わせフォーム', included: true },
            { text: 'SEO基本設定', included: true },
            { text: 'オリジナルデザイン', included: true },
            { text: 'アニメーション実装', included: true },
            { text: '保守・運用サポート', included: true },
        ],
        recommended: false,
        note: '複雑な機能やシステム連携が必要な場合',
    },
];

// AI開発プラン
const AI_PLANS = [
    {
        id: 'ai-starter',
        name: 'AI スタータープラン',
        nameEn: 'AI STARTER',
        description: 'AIを活用した高速LP・サイト制作',
        price: '15',
        priceUnit: '万円〜',
        period: '制作期間：約1〜2週間',
        icon: Bot,
        color: 'from-white/20 to-white/10',
        features: [
            { text: 'ページ数：1〜3ページ', included: true },
            { text: 'レスポンシブ対応', included: true },
            { text: 'お問い合わせフォーム', included: true },
            { text: 'SEO基本設定', included: true },
            { text: 'AI生成デザイン', included: true },
            { text: '高速納品（最短1週間）', included: true },
            { text: 'カスタムアニメーション', included: false },
        ],
        recommended: false,
        note: 'スピード重視のプロジェクトに',
    },
    {
        id: 'ai-business',
        name: 'AI ビジネスプラン',
        nameEn: 'AI BUSINESS',
        description: 'AIエージェントによる本格Web開発',
        price: '50',
        priceUnit: '万円〜',
        period: '制作期間：約2〜4週間',
        icon: Cpu,
        color: 'from-white/30 to-white/15',
        features: [
            { text: 'ページ数：5〜10ページ', included: true },
            { text: 'レスポンシブ対応', included: true },
            { text: 'お問い合わせフォーム', included: true },
            { text: 'SEO基本設定', included: true },
            { text: 'オリジナルデザイン', included: true },
            { text: 'カスタムアニメーション', included: true },
            { text: 'エンジニアによる最終チェック', included: true },
        ],
        recommended: true,
        note: 'コスパ最強のAI開発',
    },
    {
        id: 'ai-enterprise',
        name: 'AI エンタープライズ',
        nameEn: 'AI ENTERPRISE',
        description: 'AIによるフルスタック開発',
        price: '100',
        priceUnit: '万円〜',
        period: '制作期間：約1〜2ヶ月',
        icon: Rocket,
        color: 'from-white/25 to-white/10',
        features: [
            { text: 'ページ数：無制限', included: true },
            { text: 'レスポンシブ対応', included: true },
            { text: 'カスタム機能開発', included: true },
            { text: 'SEO最適化', included: true },
            { text: 'オリジナルデザイン', included: true },
            { text: 'カスタムアニメーション', included: true },
            { text: 'エンジニアによる最終チェック', included: true },
            { text: '保守・運用サポート', included: true },
        ],
        recommended: false,
        note: 'Webアプリ・SaaS開発に最適',
    },
];

// オプション料金
const OPTIONS = [
    { name: 'ロゴデザイン', price: '5万円〜' },
    { name: '多言語対応', price: '10万円〜' },
    { name: 'コピーライティング', price: '3万円〜 / ページ' },
    { name: 'EC機能（カート・決済）', price: '30万円〜' },
    { name: '会員機能', price: '20万円〜' },
    { name: '予約システム', price: '15万円〜' },
    { name: 'SEO対策（継続）', price: '5万円〜 / 月' },
    { name: '保守・運用', price: '2万円〜 / 月' },
];

// FAQ
const FAQ = [
    {
        question: '制作費用の支払い方法は？',
        answer: '基本的に、契約時に50%、納品時に残り50%をお支払いいただいております。ご相談に応じて分割払いも承ります。',
    },
    {
        question: '制作期間はどのくらいですか？',
        answer: '通常開発では1〜6ヶ月、AI開発では1週間〜2ヶ月程度が目安です。AI開発は従来の2〜3倍のスピードで納品可能です。',
    },
    {
        question: 'AI開発と通常開発の違いは何ですか？',
        answer: 'AI開発ではAIエージェントがコーディングやテストを自動化するため、開発スピードが大幅に向上しコストも抑えられます。品質は人間がレビュー・監修するため、通常開発と同等以上を保証します。',
    },
    {
        question: '追加の修正は可能ですか？',
        answer: '納品後30日間は軽微な修正を無償で対応いたします。大幅な変更や機能追加は別途お見積りとなります。',
    },
    {
        question: 'サーバー・ドメインの費用は含まれますか？',
        answer: 'サーバー・ドメインの取得代行は行いますが、実費は別途ご負担いただきます。年間1〜2万円程度が目安です。',
    },
];

// プランカードコンポーネント
const PlanCard: React.FC<{ plan: typeof STANDARD_PLANS[0]; index: number }> = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative group rounded-2xl border ${plan.recommended
            ? 'border-brand-accent bg-gradient-to-b from-brand-accent/10 to-transparent'
            : 'border-white/10 bg-white/5'
            } p-6 lg:p-8 hover:border-white/30 transition-all duration-500`}
    >
        {/* Recommended Badge */}
        {plan.recommended && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand-accent text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    おすすめ
                </span>
            </div>
        )}

        {/* Header */}
        <div className="mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                <plan.icon className="w-6 h-6 text-white" />
            </div>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">{plan.nameEn}</p>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-400">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-white/10">
            <div className="flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-lg mb-1">{plan.priceUnit}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{plan.period}</p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-brand-accent/20 text-brand-accent' : 'bg-white/5 text-gray-600'
                        }`}>
                        <Check className="w-3 h-3" />
                    </div>
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}>
                        {feature.text}
                    </span>
                </li>
            ))}
        </ul>

        {/* Note */}
        <p className="text-xs text-gray-500">{plan.note}</p>
    </motion.div>
);

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
    return (
        <div className="bg-[#050505] min-h-screen">
            {/* Header */}
            <div className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 container mx-auto">
                <div className="flex flex-col items-start border-b border-white/10 pb-10 md:pb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-mono text-xs text-brand-accent mb-4 md:mb-6 uppercase tracking-widest"
                    >
                        // Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8 text-white"
                    >
                        Plans & Pricing
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-xl"
                    >
                        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                            プロジェクトの規模や要件に応じて、最適なプランをご提案いたします。<br />
                            下記は目安となります。詳細はお気軽にお問い合わせください。
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* AI Development Plans */}
            <div className="container mx-auto px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="font-mono text-brand-accent text-sm tracking-widest uppercase">// AI-Driven Development</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">AI開発プラン</h2>
                    <p className="text-gray-400 max-w-2xl">
                        AIエージェントを活用した次世代の開発手法。従来の2〜3倍のスピードで高品質なサイト・アプリを納品します。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {AI_PLANS.map((plan, index) => (
                        <PlanCard key={plan.id} plan={plan} index={index} />
                    ))}
                </div>
            </div>

            {/* Standard Development Plans */}
            <div className="container mx-auto px-6 pb-24">
                <div className="border-t border-white/10 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-gray-400" />
                            </div>
                            <span className="font-mono text-brand-accent text-sm tracking-widest uppercase">// Standard Development</span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">通常開発プラン</h2>
                        <p className="text-gray-400 max-w-2xl">
                            丁寧なヒアリングと緻密な設計で、ビジネスに最適化されたWebサイト・アプリケーションを制作します。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {STANDARD_PLANS.map((plan, index) => (
                            <PlanCard key={plan.id} plan={plan} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Options Section */}
            <div className="container mx-auto px-6 pb-24">
                <div className="border-t border-white/10 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="font-mono text-brand-accent text-sm tracking-widest block mb-4">// Options</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">オプション料金</h2>
                        <p className="text-gray-400">ご要望に応じて追加可能なオプションサービスです。</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {OPTIONS.map((option, index) => (
                            <motion.div
                                key={option.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300"
                            >
                                <p className="text-white font-medium mb-2">{option.name}</p>
                                <p className="text-brand-accent font-mono text-lg">{option.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-6 pb-24">
                <div className="border-t border-white/10 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="font-mono text-brand-accent text-sm tracking-widest block mb-4">// FAQ</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">よくあるご質問</h2>
                    </motion.div>

                    <div className="space-y-4 max-w-3xl">
                        {FAQ.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <HelpCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-white font-bold mb-2">{item.question}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-6 pb-32">
                <div className="border-t border-white/10 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                            まずはお気軽に<br />ご相談ください
                        </h2>
                        <p className="text-gray-400 mb-8">
                            ご予算やご要望をお聞かせいただければ、最適なプランをご提案いたします。<br />
                            お見積りは無料です。
                        </p>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors duration-300 group"
                        >
                            無料相談・お見積り
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
