'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInVariant } from "../page";
import { Great_Vibes } from "next/font/google";

interface RSVPFormProps {
    token: string;
    guestName?: string;
    guestCount?: number;
    initialStatus?: boolean;
    initialNote?: string;
}

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

export const RSVPForm: React.FC<RSVPFormProps> = ({
    token,
    guestName,
    guestCount = 1,
    initialStatus,
    initialNote = ""
}) => {
    const [status, setStatus] = useState<boolean | undefined>(initialStatus);
    const [note, setNote] = useState(initialNote);
    const [isPending, setIsPending] = useState(false);
    const [submitted, setSubmitted] = useState(initialStatus !== undefined);
    const [isEditing, setIsEditing] = useState(false);

    const handleSelection = async (isAttending: boolean) => {
        setIsPending(true);
        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, isAttending, note }),
            });

            if (!response.ok) throw new Error();

            setStatus(isAttending);
            setSubmitted(true);
            setIsEditing(false);
        } catch (error) {
            alert("We encountered a small hiccup. Please try again.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start bg-[url('https://res.cloudinary.com/dvqe9mwrs/image/upload/f_auto,q_auto,w_1920/v1781449753/photo6_zzxsxw.webp')] bg-cover bg-center px-12 py-12 overflow-hidden" id="rsvp">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none z-10" />

            {/* Main Content Wrapper: Added min-h-[calc(100vh-96px)] and justify-between */}
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeInVariant} 
                className="text-white max-w-md w-full relative z-20 flex flex-col items-center min-h-[calc(100vh-96px)] justify-between"
            >
                {/* Header and Form Container */}
                <div className="w-full flex flex-col items-center pt-8">
                    <div className="space-y-4 text-center mb-10">
                        <h2 className="text-2xl font-light tracking-[0.12em] uppercase leading-tight">
                         We hope you can join us
                        </h2>
                        {guestName && (
                            <p className={`${greatVibes.className} text-3xl tracking-[0.05em] font-bold`}>
                                {guestName}
                            </p>
                        )}
                    </div>

                    <div className="space-y-8 font-sans text-left bg-army-900 p-6 md:p-8 border border-white/20 rounded-sm shadow-2xl w-full">
                        <AnimatePresence mode="wait">
                            {submitted && !isEditing ? (
                                <motion.div key="confirmed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6 space-y-6">
                                    <div className="space-y-3">
                                        <p className="text-sm uppercase tracking-[0.2em] font-semibold text-white/90">
                                            {status ? "We can’t wait to celebrate with you." : "We will miss you dearly."}
                                        </p>
                                    </div>
                                    <button onClick={() => setIsEditing(true)} className="w-full sm:w-auto px-8 py-3 border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 text-[9px] uppercase tracking-[0.2em] font-medium text-white">
                                        Edit your response
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                    {/* Form Fields... */}
                                    <div className="space-y-2">
                                        <label className="block text-[12px] uppercase tracking-[0.25em] font-semibold text-white/80">Seats Reserved</label>
                                        <div className="py-2 border-b border-white/20 text-xs uppercase tracking-[0.15em] text-white/90">
                                            {guestCount} {guestCount === 1 ? 'Seat' : 'Seats'}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[12px] uppercase tracking-[0.25em] font-semibold text-white/80">Note</label>
                                        <textarea value={note} onChange={(e) => setNote(e.target.value)} className="w-full bg-transparent border-b border-white/20 text-xs py-2 focus:outline-none placeholder:text-white/50 text-white/90" rows={2} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <button disabled={isPending} onClick={() => handleSelection(true)} className="w-full px-8 py-3 border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 text-[9px] uppercase tracking-[0.2em] font-bold text-white">Joyfully Accept</button>
                                        <button disabled={isPending} onClick={() => handleSelection(false)} className="w-full px-8 py-3 border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 text-[9px] uppercase tracking-[0.2em] font-bold text-white">Regretfully Decline</button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer Paragraph - Pushed to bottom by justify-between */}
                {guestName && (
                    <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm mx-auto text-center mt-12 pb-4">
                        We have reserved {guestCount > 1 ? `${guestCount} seats` : "one seat"} in your honor. 
                        We kindly ask that no additional guests be brought, as we are 
                        unable to accommodate those not listed in your invitation.
                    </p>
                )}
            </motion.div>
        </section>
    );
};