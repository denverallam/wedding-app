'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInVariant } from "../page";

export const Details = () => {
    // Independent states to handle visibility toggles for each map
    const [showCeremonyMap, setShowCeremonyMap] = useState(false);
    const [showReceptionMap, setShowReceptionMap] = useState(false);

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-24 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.82), rgba(250, 249, 246, 0.65), rgba(254, 243, 199, 0.15)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')`
            }}
        >
            {/* Elegant Editorial Framed Border Inside the Viewport (Matching Hero) */}
            <div className="absolute inset-4 md:inset-8 border border-stone-200/50 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-stone-800 space-y-12 md:space-y-16 max-w-4xl relative z-20 flex flex-col items-center w-full"
            >
                {/* Header (Matching Hero Typography Style) */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-stone-900 uppercase leading-tight">
                        The <span className="text-army-800 font-serif italic lowercase tracking-normal mx-1">details</span>
                    </h2>
                    <div className="w-6 h-[1px] bg-army-800/30 mx-auto my-3"></div>
                    <span className="uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-stone-400 font-sans block font-medium">
                        When and Where
                    </span>
                </div>

                {/* Integrated Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-stone-600 font-sans w-full max-w-3xl mx-auto">

                    {/* Ceremony Block */}
                    <div className="flex flex-col space-y-5 text-center">
                        <div className="space-y-2">
                            <h3 className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-army-800 font-sans">
                                The Ceremony
                            </h3>
                            <div className="text-stone-900 font-light tracking-[0.15em] text-[11px] md:text-xs uppercase">
                                3:30 PM — 4:30 PM
                            </div>
                            <div className="text-[10px] md:text-[11px] text-stone-900 font-light tracking-[0.15em] uppercase leading-relaxed pt-1 min-h-[64px]">
                                Ermita de Piedra de San Jacinto <br />
                                <span className="text-stone-400 font-normal tracking-wider text-[9px] block mt-1">
                                    JP8G+M37, 1 Legazpi St, Tuguegarao City, 3500 Cagayan <br />
                                    beside St. Paul University Philippines
                                </span>
                            </div>
                        </div>

                        {/* Ceremony Map Frame & Toggle Overlay Container */}
                        <div className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-stone-200/40 relative bg-stone-50/50 backdrop-blur-[1px] shadow-xs">
                            <AnimatePresence mode="wait">
                                {!showCeremonyMap ? (
                                    <motion.div 
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-stone-50/20 to-stone-100/30"
                                    >
                                        <button
                                            onClick={() => setShowCeremonyMap(true)}
                                            className="px-5 py-3 border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-white hover:border-stone-950 text-stone-700 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] pl-[1.25em] transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-xs"
                                        >
                                            View Map Location
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="map"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="w-full h-full relative"
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.7319599220345!2d121.72238442495286!3d17.615458583311135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338585a86037c7cf%3A0xcb70569d4ad9b386!2sErmita%20de%20Piedra%20de%20San%20Jacinto!5e0!3m2!1sen!2sph!4v1781360884782!5m2!1sen!2sph"
                                            className="w-full h-full border-0"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                        <button 
                                            onClick={() => setShowCeremonyMap(false)}
                                            className="absolute bottom-3 right-3 bg-white/90 hover:bg-stone-950 hover:text-white px-2 py-1 text-[8px] uppercase tracking-widest font-sans border border-stone-200 transition-colors shadow-xs cursor-pointer"
                                        >
                                            Hide
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Reception Block */}
                    <div className="flex flex-col space-y-4 text-center">
                        <div className="space-y-2">
                            <h3 className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-army-800 font-sans">
                                The Reception
                            </h3>
                            <div className="text-stone-900 font-light tracking-[0.15em] text-[11px] md:text-xs uppercase">
                                6:00 PM — 11:00 PM
                            </div>
                            <div className="text-[10px] md:text-[11px] text-stone-900 font-light tracking-[0.15em] uppercase leading-relaxed pt-1 min-h-[64px]">
                                Patio Enrico <br />
                                <span className="text-stone-400 font-normal tracking-wider text-[9px] block mt-1">
                                    JQP2+FMR, Tuguegarao City, Cagayan <br />
                                    Caggay
                                </span>
                            </div>
                        </div>

                        {/* Reception Map Frame & Toggle Overlay Container */}
                        <div className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-stone-200/40 relative bg-stone-50/50 backdrop-blur-[1px] shadow-xs">
                            <AnimatePresence mode="wait">
                                {!showReceptionMap ? (
                                    <motion.div 
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-stone-50/20 to-stone-100/30"
                                    >
                                        <button
                                            onClick={() => setShowReceptionMap(true)}
                                            className="px-5 py-3 border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-white hover:border-stone-950 text-stone-700 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] pl-[1.25em] transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-xs"
                                        >
                                            View Map Location
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="map"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="w-full h-full relative"
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7604.5719977833205!2d121.73986870705534!3d17.636608385389025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338585000de4a6cd%3A0xa708b43d1cd44f08!2sPatio%20Enrico!5e0!3m2!1sen!2sph!4v1781360826174!5m2!1sen!2sph"
                                            className="w-full h-full border-0"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                        <button 
                                            onClick={() => setShowReceptionMap(false)}
                                            className="absolute bottom-3 right-3 bg-white/90 hover:bg-stone-950 hover:text-white px-2 py-1 text-[8px] uppercase tracking-widest font-sans border border-stone-200 transition-colors shadow-xs cursor-pointer"
                                        >
                                            Hide
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

                {/* Bottom Visual Rule Divider */}
                <div className="w-full pt-4">
                    <div className="border-b border-stone-200/60 max-w-xs mx-auto w-full" />
                </div>
            </motion.div>
        </section>
    );
};