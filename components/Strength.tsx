import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Compass, Code2, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface StrengthProps {
  onNavigate?: (page: PageId) => void;
}

interface StrengthItem {
  number: string;
  quote: string;
  subQuote: string;
  title: string;
  lead: string;
  description: string;
  points: string[];
  icon: React.ElementType;
  badge: string;
}

const strengths: StrengthItem[] = [
  {
    number: '01',
    quote: '「事業の戦略から相談できて、\nデザインまで一貫して任せられる。」',
    subQuote: 'ビジネスの成果を見据えた、ブレない一気通貫体制',
    title: '戦略とデザインの高次元での両立',
    lead: '私たちは「ただ言われた通りに作る」受託開発ではありません。',
    description: 'なぜそのWebサイトやアプリが必要なのか。ビジネスモデルやターゲットの行動心理を徹底的に紐解き、成果に直結する戦略を設計した上で、ブランドの世界観を体現する美しいUI/UXへと昇華させます。',
    points: [
      '事業課題・ユーザー課題の本質を突くヒアリングと要件整理',
      '感性だけでなく、データと導線に基づいた論理的なUI/UXデザイン',
      '戦略から実装までワンチームで完結するため、ブレや手戻りがない'
    ],
    icon: Compass,
    badge: 'STRATEGY & DESIGN'
  },
  {
    number: '02',
    quote: '「抽象的なアイデアの段階から、\n実際に動くプロダクトへ形にしてくれた。」',
    subQuote: '頭の中の構想を、手ざわりのある体験へと昇華する技術力',
    title: 'プロトタイプから実装への圧倒的な具現化力',
    lead: '「まだ企画書も固まっていない」そんな状態からでも歓迎します。',
    description: 'React、Next.js、TypeScript、Flutterなどの最新モダンスタックを熟知。高速に触れるプロトタイプを作り、ユーザーテストや改善を重ねながら、堅牢かつ軽快に動作する本番プロダクトを立ち上げます。',
    points: [
      '初期フェーズの仮説検証を加速する高速プロトタイピング',
      '大規模トラフィックや機能拡張を見据えたクリーンな設計・技術選定',
      '使いやすさとパフォーマンス（表示速度・アニメーション）の徹底追求'
    ],
    icon: Code2,
    badge: 'RAPID CRAFTSMANSHIP'
  },
  {
    number: '03',
    quote: '「リリースして終わりじゃない。\nずっと事業の隣で誠実に伴走してくれる。」',
    subQuote: '納品がスタート。愛され、成長し続けるプロダクトへ',
    title: '事業の成長にコミットする、継続的なパートナーシップ',
    lead: 'プロダクトの本当の勝負は、ユーザーの手元に届いた後から始まります。',
    description: 'リリース後のアクセス解析や利用者のフィードバックをもとに、迅速なUI改善・機能追加を継続。単なる外注先ではなく、ビジネスを共に成長させる社外のプロダクト開発チームとして長く寄り添います。',
    points: [
      'ユーザー行動データに基づいた改善提案と継続的なアップデート',
      '変化する市場ニーズや事業規模の拡大に柔軟に対応する開発体制',
      '気軽に相談でき、迅速・誠実に対応する密なコミュニケーション'
    ],
    icon: Users,
    badge: 'LONG-TERM PARTNER'
  }
];

const Strength: React.FC<StrengthProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#03070d] border-b border-cyan-500/20 overflow-hidden py-24 md:py-32">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1520px]">
        {/* Section Header */}
        <div className="border-b border-cyan-500/20 pb-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-4 font-semibold">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
              // 02 STRENGTH ｜ 選ばれる理由
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              お客さまに、<br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-sky-400">
                よくこう言われます。
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-slate-400 max-w-md leading-relaxed">
            自画自賛の言葉ではなく、実際に一緒にお仕事をしていただいたクライアント様からのリアルな声こそが、私たちの何よりの強みです。
          </p>
        </div>

        {/* Strengths List (Climarks-inspired customer voice quote cards) */}
        <div className="flex flex-col gap-12 md:gap-16">
          {strengths.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative rounded-[2rem] border border-cyan-500/20 bg-[#040913]/85 p-6 sm:p-10 md:p-14 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-cyan-400/40 transition-all duration-500"
              >
                {/* Subtle top iridescent line on hover */}
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Customer Quote Bubble (Human Voice) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-400/30 px-3 py-1 rounded-full font-semibold">
                          {item.badge}
                        </span>
                        <span className="font-mono text-3xl md:text-4xl font-bold text-cyan-400/40">
                          {item.number}
                        </span>
                      </div>

                      <div className="relative rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/40 border border-cyan-400/25 p-6 sm:p-8 shadow-inner">
                        <MessageSquareQuote size={28} className="text-cyan-400 mb-4 opacity-80" />
                        <p className="font-sans text-xl sm:text-2xl font-bold text-white leading-snug whitespace-pre-line tracking-tight">
                          {item.quote}
                        </p>
                        <p className="mt-4 font-sans text-xs sm:text-sm text-cyan-200/80 font-medium">
                          — {item.subQuote}
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-3 mt-8 pt-6 border-t border-cyan-500/20">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                        <IconComponent size={20} />
                      </div>
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        User Value Principle #{item.number}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Detailed Explanation & Proof Points */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-base sm:text-lg font-medium text-cyan-300 mb-4">
                        {item.lead}
                      </p>
                      <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                        {item.description}
                      </p>

                      <div className="rounded-xl bg-black/30 border border-white/10 p-5 sm:p-6 mb-6">
                        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                          具体的にお約束すること:
                        </p>
                        <ul className="flex flex-col gap-3">
                          {item.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {onNavigate && (
                      <div className="pt-2">
                        <button
                          onClick={() => onNavigate('contact')}
                          className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-medium text-cyan-300 hover:text-white transition-colors group/link"
                        >
                          <span>この強みについて相談してみる</span>
                          <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strength;
