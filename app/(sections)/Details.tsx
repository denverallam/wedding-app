'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const Details = () => {
    return (
        <section className="py-24 bg-[#F4F1EA]">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariant} className="space-y-12">
                    <div>
                                          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-amber-800 uppercase">Details</h2>
                        <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mt-2">When and Where</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                        <div className="bg-white p-8 rounded-lg shadow-sm space-y-4 border border-amber-100">
                            <span className="text-3xl">⛪</span>
                            <h3 className="font-serif text-2xl text-amber-900">The Ceremony</h3>
                            <p className="text-gray-600">3:30 PM — 4:30 PM</p>
                            <p className="text-sm text-gray-500 font-serif italic">Ermita de San Jacinto<br />beside St. Paul University Philippines, Tuguegarao</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm space-y-4 border border-amber-100">
                            <span className="text-3xl">🥂</span>
                            <h3 className="font-serif text-2xl text-amber-900">The Reception</h3>
                            <p className="text-gray-600">6:00 PM — 11:00 PM</p>
                            <p className="text-sm text-gray-500 font-serif italic">Patio Enrico Caggay</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};