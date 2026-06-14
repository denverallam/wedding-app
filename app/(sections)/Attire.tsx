'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Attire = () => {
    // Elegant shades of pure white requested to represent the strict "All-White" theme beautifully
    const acceptedColors = [
        { name: "Stark White", hex: "bg-white border-army-300" },
        { name: "Natural White", hex: "bg-zinc-50 border-army-200" },
    ];

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-army-1000 bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden"
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-white pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-army-800 space-y-6 max-w-4xl relative z-20 flex flex-col items-center w-full px-4"
            >
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl tracking-[0.12em] text-white/80 uppercase leading-tight">
                        Wedding <span className="italic lowercase tracking-normal mx-1">attire</span>
                    </h2>

                    <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-army-400 font-sans block font-bold">
                        What to wear on our special day
                    </span>
                </div>

                {/* Content Container */}
                <div className="space-y-2 text-center w-full max-w-2xl mx-auto">

                    {/* Footer Compliance Disclaimer Statement */}
                    <p className="font-sans text-justify text-[10px] uppercase tracking-[0.22em] text-white/80 font-medium text-center max-w-lg mx-auto leading-relaxed border-t border-army-200/60 py-6 px-4">
                        They say rules are meant to be broken, but our wedding dress code isn’t one of them! Strict compliance with the dress code is required to bring our dream aesthetic wedding to life (no exceptions, but plenty of appreciation).
                    </p>

                    {/* Core Requirement Badge */}
                    <div className="border border-army-200/50 bg-white/80 px-6 py-6 max-w-xl mx-auto space-y-3">
                        <p className=" text-army-900 text-lg md:text-xl font-normal font-sans tracking-[0.25em] uppercase font-semibold">
                            ALL-WHITE FORMAL dress code
                        </p>
                        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold max-w-md mx-auto leading-relaxed">
                            To help us create a beautiful, seamless setting, we request an All-White Formal dress code.
                        </p>
                    </div>

                    {/* Balanced Guidelines Breakdown */}
                    <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-army-700 text-[11px] md:text-xs font-normal uppercase tracking-[0.18em] leading-relaxed max-w-xl mx-auto py-4">

                        {/* Gentlemen Guideline */}
                        <div className="space-y-2 text-center md:text-right md:pr-12">
                            <strong className="text-white/100 font-bold block font-bold tracking-[0.2em]">
                                Gentlemen:
                            </strong>
                            <p className="text-white/80 font-medium uppercase">
                                Kindly wear a white polo <br className="hidden md:inline" /> or long-sleeve.
                            </p>
                        </div>
                        {/* Ladies Guideline */}
                        <div className="space-y-2 text-center md:text-left">
                            <strong className="text-white/100 font-bold block font-bold tracking-[0.2em]">
                                Ladies:
                            </strong>
                            <p className="text-white/80 font-medium uppercase">
                                Kindly wear formal white attire, keeping it classic by avoiding any prints.
                            </p>
                        </div>
                    </div>



                    {/* Optimized Mobile-Friendly Sample Palette Component */}
                    <div className="space-y-2 max-w-xl mx-auto pt-2 font-sans">
                        <span className="uppercase tracking-[0.2em] text-[12px] text-white/80 block font-semibold">
                            Acceptable Shades Palette
                        </span>

                        {/* Switched to grid-cols-2 for perfect mobile balance since there are only two tones */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-4 gap-y-4  p-4 rounded-sm max-w-xs mx-auto">
                            {acceptedColors.map((color, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-1.5 min-w-0">
                                    <div
                                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border  shadow-xs transition-transform hover:scale-105 ${color.hex}`}
                                        title={color.name}
                                    />
                                    <span className="text-[9px] tracking-wider text-white/80 uppercase font-medium truncate w-full max-w-[85px] sm:max-w-none text-center">
                                        {color.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Explicit Notice to Avoid Off-Whites / Ivory / Cream */}
                        <p className="text-[10px] uppercase bg-white/80 text-army-900 p-2 tracking-[0.15em] font-bold max-w-md mx-auto leading-relaxed">
                            Kindly avoid shades of Ivory, Cream, or Beige. We strictly request pure, clean whites.
                        </p>
                    </div>


                </div>

            </motion.div>
        </section>
    );
};