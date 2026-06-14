'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const InvitationNotFound = () => {
    // Reusing your elegant sequence configurations for smooth structural flow
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    } as const;

    const itemVariant = {
        hidden: { opacity: 0, y: 12, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 14
            }
        }
    } as const;

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-12 py-12 overflow-hidden"
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-army-200/50 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariant}
                className="text-army-800 space-y-8 md:space-y-10 max-w-xl relative z-20 flex flex-col items-center"
            >
                {/* Header Context Anchor */}
                <div className="space-y-2">
                    <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-army-400 font-sans block font-medium">
                        Jerome & Riva
                    </span>
                </div>

                {/* Main Editorial Status Title */}
                <motion.div 
                    variants={containerVariant}
                    className="space-y-4"
                >
                    <motion.h1 
                        variants={itemVariant}
                        className="text-3xl sm:text-4xl md:text-5xl font-light text-army-950 tracking-[0.1em] uppercase leading-tight"
                    >
                        Invitation <span className="text-army-400 font-serif italic block sm:inline sm:text-[0.95em] sm:lowercase sm:tracking-normal sm:mx-1">not</span> Found
                    </motion.h1>
                </motion.div>

                {/* Gentle, Heartfelt Explanatory Message */}
                <div className="space-y-4 max-w-sm mx-auto">
                    <p className="text-[10px] md:text-xs font-sans font-medium tracking-[0.25em] text-army-400 uppercase leading-relaxed">
                        To keep our celebration intimate, our guest list is limited to a chosen few. If you believe there has been a mistake, please reach out to us directly.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};