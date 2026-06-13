'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Details = () => {
    return (
        <section className="py-12 md:py-24 max-w-6xl mx-auto px-4 md:px-6 h-auto">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    variants={fadeInVariant} 
                    className="space-y-12 md:space-y-16"
                >
                    {/* Header */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-stone-900 uppercase">Details</h2>
                        <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 md:mt-2">When and Where</p>
                    </div>

                    {/* Content Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-stone-600 font-sans text-xs font-medium uppercase tracking-wider">
                        
                        {/* Ceremony Column */}
                        <div className="space-y-3">
                            <div className="text-amber-800 text-lg md:text-xl font-light tracking-wide lowercase italic font-serif">the ceremony</div>
                            <div className="text-stone-900 font-semibold tracking-widest text-sm">3:30 PM — 4:30 PM</div>
                            <div className="text-[10px] md:text-xs text-stone-400 font-normal normal-case italic max-w-xs mx-auto leading-relaxed pt-1">
                                Ermita de San Jacinto <br />
                                <span className="text-stone-400/80 not-italic text-[9px] tracking-wider uppercase font-sans font-medium">beside St. Paul University Philippines, Tuguegarao</span>
                            </div>
                        </div>

                        {/* Reception Column */}
                        <div className="space-y-3">
                            <div className="text-amber-800 text-lg md:text-xl font-light tracking-wide lowercase italic font-serif">the reception</div>
                            <div className="text-stone-900 font-semibold tracking-widest text-sm">6:00 PM — 11:00 PM</div>
                            <div className="text-[10px] md:text-xs text-stone-400 font-normal normal-case italic max-w-xs mx-auto leading-relaxed pt-1">
                                Patio Enrico <br />
                                <span className="text-stone-400/80 not-italic text-[9px] tracking-wider uppercase font-sans font-medium">Caggay</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};