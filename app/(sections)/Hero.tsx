'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Hero = () => {
    const handleScrollToRsvp = () => {
        // Smoothly scrolls down to your RSVP section at the bottom of the page
        const rsvpSection = document.getElementById("rsvp");
        if (rsvpSection) {
            rsvpSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section 
            className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-4" 
            style={{ 
                // A cleaner, luminous overlay to match the minimal all-white theme
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')` 
            }}
        >
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeInVariant} 
                className="text-stone-800 space-y-6 max-w-2xl"
            >
                <div>
                    <span className="uppercase tracking-[0.25em] text-xs md:text-sm text-amber-700 font-sans block mb-2 font-medium">
                        You Are Cordially Invited
                    </span>
                    <p className="font-serif italic text-lg md:text-xl text-stone-500">
                        Welcome to our celebration
                    </p>
                </div>

                <h1 className="text-5xl md:text-7xl font-light tracking-wide text-stone-900 uppercase">
                    Jerome & Riva
                </h1>
                
                <p className="text-xs md:text-sm font-sans font-medium tracking-[0.25em] text-stone-500 uppercase max-w-md mx-auto leading-relaxed">
                    We are getting married & we want you there
                </p>

                <div className="w-12 h-[1px] bg-amber-600/40 mx-auto my-4"></div>
                
                <div className="space-y-1">
                    <p className="text-xl md:text-2xl font-light tracking-widest text-stone-900">AUGUST 28, 2026</p>
                    <p className="text-md md:text-lg italic text-amber-800 font-serif">Ermita de San Jacinto</p>
                </div>

                {/* RSVP Shortcut Button - Styled like a luxury minimal tag */}
                <div className="pt-4">
                    <button
                        onClick={handleScrollToRsvp}
                        className="bg-stone-950 hover:bg-stone-800 text-white font-sans text-xs uppercase tracking-widest px-10 py-4 border border-stone-900 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                    >
                        RSVP
                    </button>
                </div>
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 flex flex-col items-center space-y-1 text-stone-400 text-[10px] font-sans tracking-[0.3em] font-medium">
                <span>SCROLL TO OUR STORY</span>
                <span className="animate-bounce text-xs mt-1 text-stone-500">↓</span>
            </div>
        </section>
    );
};