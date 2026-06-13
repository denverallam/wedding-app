'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Hero = () => {
    const handleScrollToRsvp = () => {
        const rsvpSection = document.getElementById("rsvp");
        if (rsvpSection) {
            rsvpSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section 
            className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden" 
            style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.82), rgba(250, 249, 246, 0.65), rgba(254, 243, 199, 0.15)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')` 
            }}
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-stone-200/50 pointer-events-none z-10" />

            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeInVariant} 
                className="text-stone-800 space-y-6 md:space-y-8 max-w-3xl relative z-20 flex flex-col items-center"
            >
                {/* Invitation Sub-header */}
                <div className="space-y-2">
                    <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-stone-400 font-sans block font-medium">
                        The Wedding Celebration of
                    </span>
                    <div className="w-6 h-[1px] bg-amber-800/30 mx-auto my-3"></div>
                </div>

                {/* Main Dynamic Names */}
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[0.08em] text-stone-900 uppercase leading-none">
                    Jerome <span className="text-amber-800 font-serif italic block md:inline md:text-[0.9em] md:lowercase md:tracking-normal md:mx-2">&</span> Riva
                </h1>
                
                {/* Minimalist Message Text */}
                <p className="text-[10px] md:text-xs font-sans font-medium tracking-[0.3em] text-stone-400 uppercase max-w-sm mx-auto leading-relaxed">
                    We invite you to share in our joy as we step into forever
                </p>

                {/* Date & Location Visual Cluster */}
                <div className="pt-2 space-y-2 w-full">
                    <p className="text-xl md:text-2xl font-light tracking-[0.35em] text-stone-900 border-y border-stone-200/60 py-3 max-w-xs mx-auto pl-[0.35em]">
                        08 28 2026
                    </p>
                    <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-amber-800 font-sans font-semibold pt-1">
                        Ermita de San Jacinto
                    </p>
                </div>

                {/* Premium Tailored RSVP Button */}
                <div className="pt-4">
                    <button
                        onClick={handleScrollToRsvp}
                        className="bg-stone-950 hover:bg-transparent hover:text-stone-950 text-white font-sans text-[10px] md:text-xs uppercase tracking-[0.35em] pl-[1.35em] pr-[1em] py-4 border border-stone-950 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-sm"
                    >
                        Request Response
                    </button>
                </div>

                {/* Stacked Scroll Indicator — Uses mt-12 on mobile to guarantee layout separation */}
                <div className="mt-12 md:mt-16 flex flex-col items-center space-y-2 text-stone-400 text-[9px] font-sans tracking-[0.35em] font-medium">
                    <span className="opacity-80">SCROLL TO OUR STORY</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-stone-400 to-transparent animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
};