'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";
import { PrimaryText, LabelText } from "./Entourage"; // Ensure these imports point to your file

export const GiftGuide = () => {
    return (
        <section className="uppercase relative min-h-[60vh] flex flex-col items-center bg-white justify-center bg-taupe-100 bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden">
            {/* Elegant Editorial Framed Border */}
            <div className="absolute inset-4 md:inset-8 border border-army-200/60 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-army-800 space-y-8 max-w-xl relative z-20 flex flex-col items-center w-full text-center px-4"
            >
                {/* Gift Section */}
                <div className="space-y-4">
                    <strong className="font-sans text-army-950 block text-3xl uppercase tracking-[0.25em] font-extrabold text-center w-full">
                        Gift Guide
                    </strong>
                    <p className="font-sans text-sm md:text-[15px] text-army-800 leading-relaxed italic">
                        Your presence is the best gift! But if you'd still like to show us some love, 
                        <strong> CASH is highly preferred</strong> - mainly because our Manila apartment has a strict 
                        'no more blenders' policy.
                    </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-army-300" />

                {/* Reminder Section */}
                <div className="space-y-3">
                    <strong className="font-sans text-army-950 block text-3xl uppercase tracking-[0.25em] font-extrabold text-center w-full">
                        A Gentle Reminder
                    </strong>
                    <p className="font-sans text-sm md:text-[15px] text-army-800 leading-relaxed italic">
                        With love and appreciation, we kindly encourage guests <strong>not to bring kids </strong> 
                        during the ceremony. This allows our church ceremony to be as peaceful 
                        and solemn as possible. 
                    </p>
                </div>
                <p className="mt-1 font-sans text-sm md:text-[15px] text-army-800 leading-relaxed italic">Thank you for your understanding and support.  </p>
            </motion.div>
        </section>
    );
};