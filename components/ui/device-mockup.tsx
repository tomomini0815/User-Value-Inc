import React from 'react';

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
                    className="w-full h-full object-cover scale-115 transition-transform duration-700"
                />
                {/* Bottom-to-top gradient overlay - visible by default, lighter on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-black/5 transition-all duration-700 pointer-events-none" />
            </div>
        );
    }

    return (
        <div className="relative w-full aspect-video flex items-center justify-center p-4 sm:p-8">
            {/* MacBook Pro Mockup */}
            <div className="relative w-[85%] sm:w-[75%] z-10 mr-[10%] sm:mr-[15%]">
                {/* Lid */}
                <div className="relative bg-[#0d0d0d] rounded-t-xl sm:rounded-t-2xl border-[1px] border-[#333] shadow-2xl overflow-hidden aspect-[16/10]">
                    {/* Bezel */}
                    <div className="absolute inset-0 border-[4px] sm:border-[8px] border-[#1a1a1a] rounded-t-lg sm:rounded-t-xl overflow-hidden bg-black">
                        {/* Screen Content */}
                        <img
                            src={desktopImage}
                            alt={`${alt} Desktop`}
                            className="w-full h-full object-cover scale-115"
                        />
                        {/* Bottom-to-top gradient overlay - visible by default, lighter on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-black/5 transition-all duration-700 pointer-events-none" />
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
            </div>

            {/* iPhone Mockup */}
            <div className="absolute bottom-0 right-0 sm:right-8 w-[25%] sm:w-[20%] z-20">
                <div className="relative bg-[#1a1a1a] rounded-[2rem] sm:rounded-[2.5rem] border-[4px] sm:border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden aspect-[9/19.5]">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-black overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                        <img
                            src={mobileImage}
                            alt={`${alt} Mobile`}
                            className="w-full h-full object-cover scale-115"
                        />
                        {/* Bottom-to-top gradient overlay - visible by default, lighter on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-black/5 transition-all duration-700 pointer-events-none" />
                    </div>
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full z-30" />
                    {/* Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
                </div>
            </div>
        </div>
    );
};
