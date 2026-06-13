'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const RSVP = () => {
    return (
        <section className="py-12 md:py-24 max-w-6xl mx-auto px-4 md:px-6 h-auto text-center" id='rsvp'>
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInVariant} 
                className="max-w-md mx-auto space-y-8 md:space-y-12"
            >
                {/* Header */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-stone-900 uppercase">Kindly Reply</h2>
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 md:mt-2">Please RSVP by August 1, 2026</p>
                </div>

                {/* Minimal Form Elements */}
                <form className="space-y-6 font-sans text-left px-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">Attendance</label>
                        <select className="w-full p-3 border-b border-stone-200 bg-transparent text-xs uppercase tracking-wider text-stone-700 focus:outline-none focus:border-amber-600 rounded-none transition-colors appearance-none cursor-pointer">
                            <option className="normal-case">Joyfully Accept</option>
                            <option className="normal-case">Regretfully Decline</option>
                        </select>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">Number of Guests</label>
                        <input 
                            type="number" 
                            min="1" 
                            className="w-full p-3 border-b border-stone-200 bg-transparent text-xs uppercase tracking-wider text-stone-700 focus:outline-none focus:border-amber-600 rounded-none transition-colors" 
                            placeholder="E.G., 1, 2" 
                        />
                    </div>

                    {/* Premium Minimal Submit Action */}
                    <div className="pt-4">
                        <button 
                            type="submit" 
                            className="w-full bg-stone-950 hover:bg-stone-800 text-white font-sans text-xs uppercase tracking-widest py-4 border border-stone-900 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                        >
                            Submit Response
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};