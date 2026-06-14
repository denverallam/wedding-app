'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInVariant } from "../page";

interface RSVPFormProps {
    token: string;
    guestName?: string;
    guestCount?: number;
    initialStatus?: boolean;
    initialNote?: string;
}

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
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden" id="rsvp">
            <div className="absolute inset-4 md:inset-8 border border-army-200/50 pointer-events-none z-10" />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariant} className="text-army-800 space-y-10 md:space-y-12 max-w-md w-full relative z-20 flex flex-col items-center">

                <div className="space-y-3 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.12em] text-army-950 uppercase leading-tight">
                        Kindly <span className="text-army-900 font-serif italic lowercase tracking-normal mx-1">reply</span>
                    </h2>
                    {guestName && <span className="font-sans text-sm text-army-700 block uppercase tracking-[0.35em] font-semibold mb-2">To {guestName},</span>}
                </div>

                <div className="space-y-8 font-sans text-left bg-white/40 backdrop-blur-[2px] p-6 md:p-8 border border-army-200/50 rounded-sm shadow-xs w-full">
                    <AnimatePresence mode="wait">
                        {submitted && !isEditing ? (
                            <motion.div key="confirmed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6 space-y-6">
                                <div className="space-y-3">
                                    <p className="text-sm uppercase tracking-[0.2em] font-semibold text-army-950">
                                        {status ? "We can’t wait to celebrate with you." : "We will miss you dearly."}
                                    </p>
                                    <p className="text-[10px] text-army-400 uppercase tracking-[0.2em]">
                                        {status ? "Thank you for sharing in our joy." : "Thank you for your kind wishes."}
                                    </p>
                                </div>
                                <button onClick={() => setIsEditing(true)} className="w-full sm:w-auto px-8 py-3 border border-army-300 text-army-600 hover:border-army-950 hover:text-army-950 transition-all duration-300 text-[9px] uppercase tracking-[0.2em] font-medium">
                                    Edit your response
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="block text-[9px] uppercase tracking-[0.25em] font-semibold text-army-400">
                                        Seats Reserved
                                    </label>

                                    <div className="py-2 border-b border-army-200/60 text-xs uppercase tracking-[0.15em] text-army-500">
                                        {guestCount} {guestCount === 1 ? 'Seat' : 'Seats'}
                                    </div>

                                    <p className="text-[9px] md:text-[10px] text-army-400/90 tracking-[0.12em] uppercase leading-relaxed pt-1">
                                        Kindly note that attendance is limited to the number of seats reserved in your invitation. We regret that we are unable to accommodate additional guests.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-[9px] uppercase tracking-[0.25em] font-semibold text-army-400">Note <span className="text-army-300 font-normal">(Optional)</span></label>
                                    <textarea value={note} onChange={(e) => setNote(e.target.value)} className="w-full bg-transparent border-b border-army-200/60 text-xs py-2 focus:outline-none placeholder:text-army-300" placeholder="A note for the couple..." rows={2} />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <button disabled={isPending} onClick={() => handleSelection(true)} className="w-full bg-army-950 text-white text-[10px] uppercase tracking-[0.25em] py-4 border border-army-950 transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-army-950">
                                        {isPending ? "Updating..." : "Joyfully Accept"}
                                    </button>
                                    <button disabled={isPending} onClick={() => handleSelection(false)} className="w-full bg-transparent text-army-700 text-[10px] uppercase tracking-[0.25em] py-4 border border-army-200 transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-50/50">
                                        {isPending ? "Updating..." : "Regretfully Decline"}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};