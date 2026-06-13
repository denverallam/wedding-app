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

                    {/* Integrated Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 text-stone-600 font-sans text-xs font-medium uppercase tracking-wider">
                        
                        {/* Ceremony Block (Text + Map on Mobile) */}
                        <div className="flex flex-col space-y-6">
                            <div className="space-y-3">
                                <div className="text-amber-800 text-lg md:text-xl font-light tracking-wide lowercase italic font-serif">the ceremony</div>
                                <div className="text-stone-900 font-semibold tracking-widest text-sm">3:30 PM — 4:30 PM</div>
                                <div className="text-[10px] md:text-xs text-stone-400 font-normal normal-case italic max-w-xs mx-auto leading-relaxed pt-1">
                                    Ermita de Piedra de San Jacinto <br />
                                    <span className="text-stone-400/80 not-italic text-[9px] tracking-wider uppercase font-sans font-medium">beside St. Paul University Philippines, Tuguegarao</span>
                                </div>
                            </div>
                            
                            {/* Ceremony Map */}
                            <div className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-stone-100">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.7319599220345!2d121.72238442495286!3d17.615458583311135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338585a86037c7cf%3A0xcb70569d4ad9b386!2sErmita%20de%20Piedra%20de%20San%20Jacinto!5e0!3m2!1sen!2sph!4v1781360884782!5m2!1sen!2sph" 
                                    className="w-full h-full border-0"
                                    allowFullScreen={true} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Reception Block (Text + Map on Mobile) */}
                        <div className="flex flex-col space-y-6">
                            <div className="space-y-3">
                                <div className="text-amber-800 text-lg md:text-xl font-light tracking-wide lowercase italic font-serif">the reception</div>
                                <div className="text-stone-900 font-semibold tracking-widest text-sm">6:00 PM — 11:00 PM</div>
                                <div className="text-[10px] md:text-xs text-stone-400 font-normal normal-case italic max-w-xs mx-auto leading-relaxed pt-1">
                                    Patio Enrico <br />
                                    <span className="text-stone-400/80 not-italic text-[9px] tracking-wider uppercase font-sans font-medium">Caggay</span>
                                </div>
                            </div>

                            {/* Reception Map */}
                            <div className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-stone-100">
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
            </div>
        </section>
    );
};