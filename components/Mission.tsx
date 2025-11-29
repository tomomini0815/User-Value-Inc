import React from 'react';

const Mission: React.FC = () => {
    return (
        <section className="bg-[#050505] border-b border-white/20">
            <div className="container mx-auto border-x border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 md:p-12 border-r border-white/20">
                        <p className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-4">// Mission</p>
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                            Design the invisible infrastructure for the digital age.
                        </p>
                    </div>
                    <div className="p-8 md:p-12 flex items-center justify-between group cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                        <span className="font-display font-bold text-2xl md:text-3xl uppercase">Start Project</span>
                        <span className="font-mono text-2xl md:text-3xl">→</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
