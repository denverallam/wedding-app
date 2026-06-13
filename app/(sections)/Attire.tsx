'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Attire = () => {
    // Elegant shades of white, cream, and ivory to represent the "All-White" theme beautifully
    const acceptedColors = [
        { name: "Stark White", hex: "bg-white border-stone-300" },
        { name: "Off-White", hex: "bg-stone-50 border-stone-200" },
        { name: "Alabaster", hex: "bg-slate-50/90 border-stone-200" },
        { name: "Natural White", hex: "bg-zinc-50 border-stone-200" },
        { name: "Ivory", hex: "bg-[#FCF9F2] border-stone-200" },
        { name: "Warm Cream", hex: "bg-[#FAF9F6] border-stone-200" },
        { name: "Soft Pearl", hex: "bg-[#FDFBF7] border-stone-200" },
        { name: "Bone", hex: "bg-[#F5F5F0] border-stone-200" },
    ];

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-24 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba(250, 249, 246, 0.75), rgba(254, 243, 199, 0.2)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')`
            }}
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-stone-200/60 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-stone-800 space-y-12 md:space-y-16 max-w-4xl relative z-20 flex flex-col items-center w-full px-4"
            >
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.12em] text-stone-950 uppercase leading-tight">
                        Wedding <span className="text-amber-900 font-serif italic lowercase tracking-normal mx-1">attire</span>
                    </h2>
                    <div className="w-6 h-[1px] bg-amber-800/40 mx-auto my-3"></div>
                    <span className="uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-stone-500 font-sans block font-semibold">
                        What to wear on our special day
                    </span>
                </div>

                {/* Content Container */}
                <div className="space-y-12 text-center w-full max-w-2xl mx-auto">

                    {/* Core Requirement Badge */}
                    <div className="border border-amber-800/30 bg-white/20 px-6 py-6 max-w-xl mx-auto backdrop-blur-[1px] space-y-3">
                        <p className="text-lg md:text-xl font-normal tracking-[0.25em] text-stone-900 uppercase">
                            ALL-WHITE FORMAL dress code
                        </p>
                        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] text-stone-600 max-w-md mx-auto leading-relaxed font-light">
                            To help us create a beautiful, seamless setting, we request an All-White Formal dress code.
                        </p>
                    </div>

                    {/* Optimized Mobile-Friendly Sample Palette Component */}
                    <div className="space-y-4 max-w-xl mx-auto pt-2">
                        <span className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-stone-400 font-sans block font-semibold">
                            Acceptable Shades Palette
                        </span>

                        {/* Switched to a structured responsive grid to prevent uneven row wraps on mobile layout */}
                        <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center justify-center gap-x-2 gap-y-6 sm:gap-4 bg-white/30 backdrop-blur-[2px] p-4 rounded-sm">
                            {acceptedColors.map((color, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-1.5 min-w-0">
                                    <div
                                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border shadow-xs transition-transform hover:scale-105 ${color.hex}`}
                                        title={color.name}
                                    />
                                    <span className="text-[7px] sm:text-[8px] tracking-wider text-stone-500 uppercase font-sans font-medium truncate w-full max-w-[65px] sm:max-w-none text-center">
                                        {color.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Balanced Guidelines Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-stone-700 font-sans text-[11px] md:text-xs font-normal uppercase tracking-[0.18em] leading-relaxed max-w-xl mx-auto pt-4">

                        {/* Gentlemen Guideline */}
                        <div className="space-y-2 text-center md:text-right border-b md:border-b-0 md:border-r border-stone-200/60 pb-8 md:pb-0 md:pr-12">
                            <strong className="font-sans text-amber-900 block font-bold tracking-[0.2em]">
                                Gentlemen:
                            </strong>
                            <p className="text-stone-600 font-light uppercase">
                                Kindly wear a white polo <br className="hidden md:inline" /> or long-sleeve.
                            </p>
                        </div>

                        {/* Ladies Guideline */}
                        <div className="space-y-2 text-center md:text-left">
                            <strong className="font-sans text-amber-900 block font-bold tracking-[0.2em]">
                                Ladies:
                            </strong>
                            <p className="text-stone-600 font-light uppercase">
                                Kindly wear formal white attire, keeping it classic by avoiding any prints.
                            </p>
                        </div>
                    </div>

                    {/* Footer Compliance Disclaimer Statement */}
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-stone-500 font-medium text-center max-w-lg mx-auto leading-relaxed border-t border-stone-200/60 pt-10 px-4">
                        They say rules are meant to be broken, but our wedding dress code isn’t one of them! Strict compliance with the dress code is required to bring our dream aesthetic to life (no exceptions, but plenty of appreciation).
                    </p>
                </div>

                {/* Bottom Visual Rule Divider */}
                <div className="w-full pt-4">
                    <div className="border-b border-stone-200/60 max-w-xs mx-auto w-full" />
                </div>
            </motion.div>
        </section>
    );
};