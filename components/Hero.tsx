import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    // Particle settings
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    const connectionDistance = 150;
    const mouseDistance = 250;
    
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const mouse = { x: 0, y: 0 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseDistance) {
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (mouseDistance - dist) / mouseDistance;
            const directionX = forceDirectionX * force * 0.5;
            const directionY = forceDirectionY * force * 0.5;
            p.vx += directionX * 0.05;
            p.vy += directionY * 0.05;
        }

        // Friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Draw connections
        for (let j = i; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 100, 255, ${1 - dist / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020205]">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />
      
      {/* Digital Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-black/50 to-brand-black z-0 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl relative"
        >
          {/* Decorative tech elements */}
          <div className="absolute -top-20 -left-10 text-brand-accent/30 hidden md:block">
            <Code2 size={120} strokeWidth={0.5} />
          </div>

          <h1 className="font-mono text-xs md:text-sm text-brand-accent mb-6 tracking-[0.3em] uppercase">
            &lt;System Status: Online /&gt;
          </h1>

          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 text-white mix-blend-screen">
            CREATIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent animate-gradient-x bg-300%">ENGINEERING</span><br />
            STUDIO.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-[1px] bg-brand-accent hidden md:block mb-4"
            />
            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed"
            >
                We architect the invisible. <br/>
                From complex SaaS logic to immersive UI interactions.<br/>
                <span className="text-white text-xs font-mono mt-2 block opacity-70">
                   株式会社ユーザーバリュー | Digital Production
                </span>
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-10 flex flex-col items-end gap-2 text-white/40 font-mono text-xs"
      >
        <span>SCROLL_Y: [MONITORING]</span>
        <div className="h-16 w-[1px] bg-white/20 relative overflow-hidden">
            <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-brand-accent"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;