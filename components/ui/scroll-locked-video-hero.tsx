import React, { useRef, useState, useEffect } from 'react';
import { Pause, Play, SkipBack, SkipForward, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Track = {
  id: string;
  step: string;
  title: string;
  category: string;
  color: string;
  headlineEn: string;
  subJa: string;
  desc: string;
};

const tracks: Track[] = [
  {
    id: '01',
    step: 'STEP 01',
    title: '対話と本質',
    category: 'ヒアリング・課題の整理',
    color: '#38bdf8',
    headlineEn: 'DEEPLY UNDERSTANDING\nYOUR VISION.',
    subJa: 'あなたの想いを、いちばん深く理解することから。',
    desc: 'ビジネスの目的や、ユーザーが本当に困っていることをじっくり対話して紐解きます。何をつくるべきか、どこを目指すのか、同じ目線で整理します。',
  },
  {
    id: '02',
    step: 'STEP 02',
    title: '心に届く体験',
    category: 'UI/UX・プロトタイプ設計',
    color: '#818cf8',
    headlineEn: 'DESIGN THAT TOUCHES\nTHE HUMAN HEART.',
    subJa: '使う人の毎日に寄り添う、心地よいデザイン。',
    desc: '見た目の美しさだけでなく、初めて触る人でも迷わず直感的に使える導線と、使うたびに愛着がわく丁寧な体験をデザインします。',
  },
  {
    id: '03',
    step: 'STEP 03',
    title: '動くカタチへ',
    category: 'Web & アプリ開発・実装',
    color: '#2dd4bf',
    headlineEn: 'THE MOMENT YOUR IDEA\nSTARTS MOVING.',
    subJa: '頭の中のアイデアが、実際に動くプロダクトへ。',
    desc: 'Webアプリやモバイルアプリを、最新のモダン技術で堅牢かつ軽快に実装。安心して使い続けられる品質を妥協なく追求します。',
  },
  {
    id: '04',
    step: 'STEP 04',
    title: '共に育てる',
    category: '運用改善・持続的な成長',
    color: '#c084fc',
    headlineEn: 'GROWING TOGETHER,\nSTEP BY STEP.',
    subJa: 'リリースして終わりじゃない。長く愛されるものへ、共に。',
    desc: 'リリースはゴールではなくスタート。実際の利用者の声を聞きながら改善を重ね、あなたの事業の成長に誠実にお供します。',
  },
];

const VIDEO = '/hero-video.mp4';

interface MusicHeroProps { title?: string }

const MusicHero: React.FC<MusicHeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [autoCycle, setAutoCycle] = useState(true);

  // 4ステップの自動送り（6秒周期）
  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tracks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoCycle]);

  const selectTrack = (index: number) => setActive((index + tracks.length) % tracks.length);
  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { void video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
  };
  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${-y * 4}deg) scale(1.006)`;
  };
  const resetTilt = () => { if (cardRef.current) cardRef.current.style.transform = 'perspective(1200px) rotateY(-1.5deg) rotateX(1deg)'; };

  return (
    <section className="relative isolate w-full flex-grow flex flex-col justify-center overflow-hidden bg-[#04080e]/90 p-1 sm:p-2 md:p-3" aria-label="User Value creative process">
      {/* Dynamic ambient backlights matching the glass orb and water ripple */}
      <div className="absolute -top-32 left-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-28 right-1/4 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(56,189,248,.18),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(129,140,248,.14),transparent_50%),linear-gradient(115deg,rgba(4,8,15,.96),rgba(6,16,28,.65),rgba(3,6,12,.97))]" />

      <div className="relative mx-auto grid w-full min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] grid-cols-1 overflow-hidden rounded-[2rem] border border-cyan-500/25 bg-[#06101c]/80 shadow-[0_30px_90px_rgba(0,0,0,.7),inset_0_1px_1px_rgba(255,255,255,.15)] backdrop-blur-md lg:grid-cols-[1.25fr_.75fr]">
        
        {/* Left Side: Immersive Video Screen with Iridescent Glass Framing */}
        <div className="relative min-h-[460px] lg:min-h-full overflow-hidden border-b border-cyan-500/20 lg:border-b-0 lg:border-r">
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-5 md:p-8">
            <span className="font-mono text-xs tracking-widest text-cyan-300/90 font-semibold uppercase">
              // PROCESS ｜ ものづくりの姿勢
            </span>
            <span className="rounded-lg border border-cyan-400/30 bg-cyan-950/70 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-sm">
              STEP {tracks[active].id} / 04
            </span>
          </div>

          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className="absolute inset-3 sm:inset-4 md:inset-6 overflow-hidden rounded-2xl border border-cyan-400/30 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-out"
            style={{ transform: 'perspective(1200px) rotateY(-1.5deg) rotateX(1deg)' }}
          >
            <video
              ref={videoRef}
              src={VIDEO}
              autoPlay
              loop
              muted
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="h-full w-full object-cover opacity-90 transition-opacity duration-700"
            />
            {/* Soft gradient vignettes for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020710]/95 via-[#020710]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,7,16,0.6)_100%)] pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* くりぬき文字による大迫力＆プロ仕様のステップヘッダー */}
                  <div className="flex items-baseline gap-3 sm:gap-4 mb-2">
                    <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-stroke-cyan tracking-tighter leading-none select-none drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                      {tracks[active].id}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase">
                        {tracks[active].step}
                      </span>
                      <span className="text-cyan-500/40 text-xs">/</span>
                      <span className="font-sans text-xs text-slate-300 font-medium">
                        {tracks[active].category}
                      </span>
                    </div>
                  </div>

                  <h1 className="max-w-[44rem] font-display text-2xl font-extrabold leading-[1.04] tracking-[-.035em] text-white sm:text-4xl md:text-[2.6rem] lg:text-[3.1rem] whitespace-pre-line uppercase">
                    {tracks[active].headlineEn}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base md:text-lg font-sans font-medium text-cyan-200/95 tracking-normal">
                    {tracks[active].subJa}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
                    {tracks[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side: Process Track Selector & Audio Controls */}
        <div className="relative flex flex-col justify-between bg-[#050c17]/90 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          <div>
            <div className="mb-6 lg:mb-8 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs tracking-widest text-cyan-400 font-bold uppercase">
                  // 04 STEPS TO REALIZATION
                </p>
                <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  想いをカタチにする4つのステップ
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-md">
                  対話から始まり、長く愛されるプロダクトになるまで、誠実に伴走します。
                </p>
              </div>
              <span className="font-mono text-sm font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-400/30 px-3 py-1.5 rounded-lg shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                {String(active + 1).padStart(2, '0')} / 04
              </span>
            </div>

            <div
              className="relative flex flex-col gap-2.5 lg:gap-3 py-1"
              onWheel={(event) => {
                if (Math.abs(event.deltaY) > 4) {
                  selectTrack(active + (event.deltaY > 0 ? 1 : -1));
                }
              }}
            >
              {tracks.map((track, index) => {
                const selected = index === active;
                return (
                  <button
                    key={track.id}
                    onClick={() => selectTrack(index)}
                    className={`group relative flex w-full flex-col gap-1.5 rounded-xl p-3.5 sm:p-4 text-left transition-all duration-300 border overflow-hidden ${
                      selected
                        ? 'border-cyan-400/60 bg-gradient-to-r from-cyan-950/80 via-slate-900/90 to-indigo-950/50 shadow-[0_0_30px_rgba(56,189,248,0.2)] scale-[1.01]'
                        : 'border-white/10 bg-white/[0.02] opacity-75 hover:opacity-100 hover:border-cyan-400/40 hover:bg-white/[0.05]'
                    }`}
                  >
                    {/* 背景にうっすら浮かぶ巨大なくりぬき数字（ウォーターマーク） */}
                    <span className={`absolute right-3 -bottom-3 font-display text-5xl sm:text-6xl font-black tracking-tighter select-none pointer-events-none transition-all duration-500 ${
                      selected ? 'text-stroke-cyan opacity-25 scale-105' : 'text-stroke-subtle opacity-10 group-hover:opacity-25'
                    }`}>
                      {track.id}
                    </span>

                    <div className="relative z-10 flex items-center gap-3.5">
                      {/* くりぬき文字（アウトラインナンバー） */}
                      <span className={`font-display text-2xl sm:text-3xl font-black tracking-tighter leading-none shrink-0 transition-all duration-300 ${
                        selected 
                          ? 'text-stroke-cyan drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]' 
                          : 'text-stroke-white group-hover:text-stroke-cyan'
                      }`}>
                        {track.id}
                      </span>

                      {/* 繊細な細いバー区切り */}
                      <div className={`w-[1.5px] h-7 rounded-full transition-colors duration-300 ${
                        selected ? 'bg-cyan-400/80 shadow-[0_0_8px_#38bdf8]' : 'bg-white/15 group-hover:bg-cyan-400/40'
                      }`} />

                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-sans text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors truncate">
                            {track.title}
                          </span>
                          <span className="font-mono text-[11px] text-slate-400 shrink-0">
                            {track.category}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-cyan-300/70 block mt-0.5">
                          {track.step}
                        </span>
                      </div>
                    </div>

                    {selected && (
                      <p className="relative z-10 mt-1.5 pl-[3.25rem] text-xs sm:text-sm text-cyan-100/90 font-sans leading-relaxed">
                        {track.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 lg:mt-8 flex items-center justify-between border-t border-cyan-500/20 pt-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => selectTrack(active - 1)}
                aria-label="前のステップへ"
                className="rounded-full border border-cyan-400/25 bg-cyan-950/40 p-2.5 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50 hover:scale-105"
              >
                <SkipBack size={16} />
              </button>
              <button
                onClick={togglePlayback}
                aria-label={playing ? '動画を一時停止' : '動画を再生'}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 p-3 text-black shadow-[0_0_20px_rgba(56,189,248,0.5)] transition hover:scale-110 hover:shadow-[0_0_30px_rgba(56,189,248,0.8)]"
              >
                {playing ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
              </button>
              <button
                onClick={() => selectTrack(active + 1)}
                aria-label="次のステップへ"
                className="rounded-full border border-cyan-400/25 bg-cyan-950/40 p-2.5 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/50 hover:scale-105"
              >
                <SkipForward size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                onClick={() => setAutoCycle(!autoCycle)}
                className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                  autoCycle
                    ? 'border-cyan-400/40 bg-cyan-950/70 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    : 'border-slate-700/60 bg-black/40 text-slate-400 hover:text-slate-200'
                }`}
                title={autoCycle ? "ステップ自動送りを停止" : "ステップ自動送りを開始"}
              >
                <RefreshCw size={12} className={autoCycle ? "animate-spin" : ""} style={{ animationDuration: '7s' }} />
                <span>AUTO {autoCycle ? 'ON' : 'OFF'}</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 font-sans text-xs tracking-wider text-white border border-cyan-400/30 hover:border-cyan-400 px-3 sm:px-3.5 py-1.5 rounded-full bg-cyan-950/50 hover:bg-cyan-900/60 transition-all shadow-[0_0_12px_rgba(56,189,248,0.12)] whitespace-nowrap"
              >
                <span>無料相談</span>
                <ArrowRight size={12} className="text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicHero;
