'use client'

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
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')` }}
        >
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeInVariant} 
                className="text-white space-y-6 max-w-2xl"
            >
                <div>
                    <span className="uppercase tracking-widest text-xs md:text-sm text-amber-300 font-sans block mb-2">
                        You Are Cordially Invited
                    </span>
                    <p className="font-serif italic text-lg md:text-xl text-amber-100/90">
                        Welcome to our celebration
                    </p>
                </div>

                <h1 className="text-5xl md:text-7xl font-light tracking-wide drop-shadow-sm">
                    Jerome & Riva
                </h1>
                
                <p className="text-base md:text-lg font-sans font-light tracking-[0.2em] text-gray-100 uppercase">
                    We are getting married & we want you there
                </p>

                <div className="w-16 h-[1px] bg-amber-300/60 mx-auto my-4"></div>
                
                <div className="space-y-1">
                    <p className="text-xl md:text-2xl font-light tracking-wide">August 28, 2026</p>
                    <p className="text-md md:text-lg italic text-amber-100/80">Ermita de San Jacinto</p>
                </div>

                {/* RSVP Shortcut Button */}
                <div className="pt-4">
                    <button
                        onClick={handleScrollToRsvp}
                        className="bg-amber-700/80 hover:bg-amber-700 text-white font-sans text-xs md:text-sm uppercase tracking-widest px-8 py-3.5 rounded-full border border-amber-400/30 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        RSVP
                    </button>
                </div>
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 flex flex-col items-center space-y-1 text-white/60 text-[11px] font-sans tracking-[0.25em]">
                <span>SCROLL TO OUR STORY</span>
                <span className="animate-bounce text-xs mt-1">↓</span>
            </div>
        </section>
    );
};