'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const RSVP = () => {
    return (
        <section 
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden"
            id="rsvp"
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-army-200/50 pointer-events-none z-10" />

            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeInVariant} 
                className="text-army-800 space-y-10 md:space-y-12 max-w-md w-full relative z-20 flex flex-col items-center"
            >
                {/* Section Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.12em] text-army-950 uppercase leading-tight">
                        Kindly <span className="text-army-900 font-serif italic lowercase tracking-normal mx-1">reply</span>
                    </h2>
                    
                    <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-army-400 font-sans block font-bold">
                        Please RSVP by August 01, 2026
                    </span>
                </div>

                {/* Editorial Glass Form Wrapper */}
                <form 
                    className="space-y-6 font-sans text-left bg-white/40 backdrop-blur-[2px] p-6 md:p-8 border border-army-200/50 rounded-sm shadow-xs w-full" 
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Attendance Field */}
                    <div className="space-y-2">
                        <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-semibold text-army-400">
                            Attendance
                        </label>
                        <div className="relative">
                            <select className="w-full py-3 px-1 border-b border-army-200/60 bg-transparent text-xs uppercase tracking-[0.15em] text-army-700 focus:outline-none focus:border-army-800 rounded-none transition-colors appearance-none cursor-pointer">
                                <option className="normal-case bg-army-50">Joyfully Accept</option>
                                <option className="normal-case bg-army-50">Regretfully Decline</option>
                            </select>
                            {/* Custom Minimalist Dropdown Arrow Indicator */}
                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-army-400 text-[10px] font-light">
                                ──
                            </div>
                        </div>
                    </div>

                    {/* Number of Guests Field */}
                    <div className="space-y-2">
                        <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-semibold text-army-400">
                            Number of Guests
                        </label>
                        <input 
                            type="number" 
                            min="1" 
                            className="w-full py-3 px-1 border-b border-army-200/60 bg-transparent text-xs uppercase tracking-[0.15em] text-army-700 focus:outline-none focus:border-army-800 rounded-none transition-colors" 
                            placeholder="E.G., 1, 2" 
                        />
                    </div>

                    {/* Premium Tailored Submit Action */}
                    <div className="pt-4 text-center">
                        <button 
                            type="submit" 
                            className="w-full bg-army-950 hover:bg-transparent hover:text-army-950 text-white font-sans text-[10px] md:text-xs uppercase tracking-[0.35em] pl-[1.35em] pr-[1em] py-4 border border-army-950 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-sm"
                        >
                            Submit Response
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};