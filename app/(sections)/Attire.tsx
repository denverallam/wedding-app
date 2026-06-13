'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Attire = () => {
    return (
        <section className="py-12 md:py-24 max-w-6xl mx-auto px-4 md:px-6 h-auto">
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeInVariant} 
                className="space-y-6 max-w-2xl mx-auto text-center"
            >
                {/* Section Header */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-stone-900 uppercase">Wedding Attire</h2>
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 md:mt-2">What to wear on our special day</p>
                </div>

                {/* Content Box */}
                <div className="text-stone-600 font-sans text-xs font-medium uppercase tracking-wider space-y-4 px-4 leading-relaxed pt-4">
                    <p className="text-amber-800 font-semibold">
                        To help us create a beautiful, seamless setting, we request an All-White Formal dress code.
                    </p>
                    
                    <div className="space-y-1">
                        <p>
                            <span className="text-stone-900 font-semibold">Gentlemen:</span> Kindly wear a white polo or long-sleeve.
                        </p>
                        <p>
                            <span className="text-stone-900 font-semibold">Ladies:</span> Kindly wear formal white attire, keeping it classic by avoiding any prints.
                        </p>
                    </div>

                    <p className="text-[10px] tracking-widest text-stone-400 normal-case italic pt-4 max-w-lg mx-auto">
                        They say rules are meant to be broken, but our wedding dress code isn’t one of them! Strict compliance with the dress code is required to bring our dream aesthetic to life (no exceptions, but plenty of appreciation).
                    </p>
                </div>
            </motion.div>
        </section>
    );
};