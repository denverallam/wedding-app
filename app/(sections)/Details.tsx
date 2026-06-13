'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInVariant } from "../page";
import { LabelText, PrimaryText } from "./Entourage";

export const Details = () => {
    // Independent states to handle visibility toggles for each map
    const [showCeremonyMap, setShowCeremonyMap] = useState(false);
    const [showReceptionMap, setShowReceptionMap] = useState(false);

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden"
        >
            {/* Elegant Editorial Framed Border Inside the Viewport (Matching Hero) */}
            <div className="absolute inset-4 md:inset-8 border border-army-200/50 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-army-800 space-y-8 max-w-4xl relative z-20 flex flex-col items-center w-full"
            >
                {/* Header (Matching Hero Typography Style) */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.1em] text-army-900 uppercase leading-tight">
                        The <span className="text-army-800 font-serif italic lowercase tracking-normal mx-1">details</span>
                    </h2>
                    <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-army-400 font-sans block font-bold">
                        When and Where
                    </span>
                </div>

                {/* Integrated Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-army-600 font-sans w-full max-w-3xl mx-auto">

                    {/* Ceremony Block */}
                    <div className="flex flex-col space-y-5 text-center">
                        <div className="space-y-2">
                            <PrimaryText>
                                The Ceremony
                            </PrimaryText>
                            <LabelText>
                                3:30 PM — 4:30 PM
                            </LabelText>
                            <div className="text-[11px] md:text-[12px] text-army-900 font-light tracking-[0.15em] uppercase leading-relaxed pt-1 min-h-[64px] font-semibold">
                                Ermita de Piedra de San Jacinto <br />
                                <span className="text-taupe-700 font-medium tracking-wider text-[10px] block mt-1">
                                    JP8G+M37, 1 Legazpi St, Tuguegarao City, 3500 Cagayan <br />
                                    beside St. Paul University Philippines
                                </span>
                            </div>
                        </div>

                        <div className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-army-200/40 relative bg-army-50/50 backdrop-blur-[1px] shadow-xs">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.7319599220345!2d121.72238442495286!3d17.615458583311135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338585a86037c7cf%3A0xcb70569d4ad9b386!2sErmita%20de%20Piedra%20de%20San%20Jacinto!5e0!3m2!1sen!2sph!4v1781360884782!5m2!1sen!2sph"
                                className="w-full h-full border-0"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Reception Block */}
                    <div className="flex flex-col space-y-4 text-center">
                        <div className="space-y-2">
                            <PrimaryText>
                                The Reception
                            </PrimaryText>
                            <LabelText>
                                6:00 PM — 11:00 PM
                            </LabelText>
                            <div className="text-[11px] md:text-[12px] text-army-700 font-light tracking-[0.15em] uppercase leading-relaxed pt-1 min-h-[64px] font-semibold">
                                Patio Enrico <br />
                               <span className="text-taupe-700 font-medium tracking-wider text-[10px] block mt-1">
                                    JQP2+FMR, Tuguegarao City, Cagayan <br />
                                    Caggay
                                </span>
                            </div>
                        </div>

                        <div className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-army-200/40 relative bg-army-50/50 backdrop-blur-[1px] shadow-xs">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7604.5719977833205!2d121.73986870705534!3d17.636608385389025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338585000de4a6cd%3A0xa708b43d1cd44f08!2sPatio%20Enrico!5e0!3m2!1sen!2sph!4v1781360826174!5m2!1sen!2sph"
                                className="w-full h-full border-0"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>

            </motion.div>
        </section>
    );
};