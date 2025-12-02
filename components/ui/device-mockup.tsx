import React from 'react';
import { motion } from 'framer-motion';

interface DeviceMockupProps {
    desktopImage?: string;
    mobileImage?: string;
    fallbackImage: string;
    alt: string;
    imageClassName?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
    desktopImage,
    mobileImage,
    fallbackImage,
    alt,
    imageClassName,
}) => {
    // If we don't have separate images, just show the fallback image
    if (!desktopImage || !mobileImage) {
        return (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                    src={fallbackImage}
                    alt={alt}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageClassName || ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        );
    }

    return (
        <div className="relative w-full aspect-video flex items-center justify-center p-4 sm:p-8">
            {/* MacBook Pro Mockup */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[85%] sm:w-[75%] z-10 mr-[10%] sm:mr-[15%]"
            >
                {/* Lid */}
                <div className="relative bg-[#0d0d0d] rounded-t-xl sm:rounded-t-2xl border-[1px] border-[#333] shadow-2xl overflow-hidden aspect-[16/10]">
                    {/* Bezel */}
                    <div className="absolute inset-0 border-[4px] sm:border-[8px] border-[#1a1a1a] rounded-t-lg sm:rounded-t-xl overflow-hidden bg-black">
                        {/* Screen Content */}
                        <img
                            src={desktopImage}
                            alt={`${alt} Desktop`}
                            className="w-full h-full object-cover"
                        />
                        {/* Reflection/Gloss */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </div>
                    {/* Camera Notch (simplified) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-[#1a1a1a] rounded-b-md z-20 hidden sm:block" />
                </div>
                {/* Base */}
                <div className="relative bg-[#1a1a1a] h-3 sm:h-4 w-full rounded-b-lg sm:rounded-b-xl shadow-lg mt-[1px] border-t border-[#333]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2a2a2a] rounded-b-md" />
                </div>
            </motion.div>

            {/* iPhone Mockup */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 right-0 sm:right-8 w-[25%] sm:w-[20%] z-20"
            >
                <div className="relative bg-[#1a1a1a] rounded-[2rem] sm:rounded-[2.5rem] border-[4px] sm:border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden aspect-[9/19.5]">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-black overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                        <img
                            src={mobileImage}
                            alt={`${alt} Mobile`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full z-30" />
                    {/* Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
                </div>
            </motion.div>
        </div>
    );
};
