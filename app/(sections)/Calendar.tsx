'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInVariant } from "../page";

export const SaveTheDate = () => {
    // Target wedding date updated to: August 28, 2026
    const targetDate = new Date("2026-08-28T00:00:00");

    // Dynamic Countdown State
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: false
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();
            if (difference <= 0) {
                setTimeLeft((prev) => ({ ...prev, isCompleted: true }));
                return;
            }
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
                isCompleted: false
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    // Calendar Parameters for August 2026
    // August 1, 2026 is a Saturday. Blank slots ahead: 6 (Sun-Fri)
    const daysInAugust = 31;
    const blankDays = 6; 
    const calendarCells = [...Array(blankDays).fill(null), ...Array.from({ length: daysInAugust }, (_, i) => i + 1)];

    // Event Information
    const eventDetails = {
        title: "The Wedding of Jerome & Riva",
        description: "Join us as we celebrate our love and step into forever at Ermita de San Jacinto.",
        location: "Ermita de San Jacinto, Tuguegarao City, Cagayan",
        start: "20260828T153000", // Aug 28, 2026 @ 3:30 PM
        end: "20260828T230000"   // Up to reception close around 11:00 PM
    };

    // Android/Google Link
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;

    // iOS/Apple (.ics file) Generator
    const handleIcsDownload = () => {
        const icsString = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            `URL:${window.location.href}`,
            `DTSTART:${eventDetails.start}`,
            `DTEND:${eventDetails.end}`,
            `SUMMARY:${eventDetails.title}`,
            `DESCRIPTION:${eventDetails.description}`,
            `LOCATION:${eventDetails.location}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([icsString], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "jerome-and-riva-wedding.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-24 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(250, 249, 246, 0.7), rgba(254, 243, 199, 0.15)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')`
            }}
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-stone-200/50 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-stone-800 space-y-12 md:space-y-16 max-w-4xl relative z-20 flex flex-col items-center w-full"
            >
                {/* Section Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.12em] text-stone-950 uppercase leading-tight">
                        Save <span className="text-army-900 font-serif italic lowercase tracking-normal mx-1">the</span> date
                    </h2>
                    <div className="w-6 h-[1px] bg-army-800/40 mx-auto my-3"></div>
                    <span className="uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-stone-500 font-sans block font-semibold">
                        August 28, 2026 — Friday
                    </span>
                </div>

                {/* Two Column Layout: Calendar visual on left, Countdown & Action on Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-3xl mx-auto">
                    
                    {/* Minimalist Editorial Calendar Grid Visual */}
                    <div className="bg-white/40 backdrop-blur-[2px] p-6 border border-stone-200/50 rounded-sm shadow-xs max-w-sm w-full mx-auto">
                        <div className="text-center font-serif italic text-stone-900 text-lg uppercase tracking-widest mb-4">
                            August 2026
                        </div>
                        
                        {/* Day Labels */}
                        <div className="grid grid-cols-7 gap-y-2 text-center text-[9px] font-sans font-semibold tracking-wider text-stone-400 uppercase mb-2">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>

                        {/* Calendar Grid Cells */}
                        <div className="grid grid-cols-7 gap-y-3 text-center text-xs font-sans font-light text-stone-700">
                            {calendarCells.map((day, idx) => {
                                const isWeddingDay = day === 28;
                                return (
                                    <div key={idx} className="relative flex items-center justify-center aspect-square">
                                        {day && (
                                            <span className={`relative z-10 ${isWeddingDay ? 'text-white font-medium' : ''}`}>
                                                {day}
                                            </span>
                                        )}
                                        {isWeddingDay && (
                                            <motion.div 
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.5, type: "spring" }}
                                                className="absolute w-6 h-6 rounded-full bg-army-900 -z-0 shadow-xs"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Countdown and Add to Calendar Interactions */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-sm w-full mx-auto">
                        <div className="space-y-2 w-full">
                            <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-stone-400 font-sans">
                                Countdown to Forever
                            </h3>
                            
                            {/* Premium Framed Countdown Display */}
                            {!timeLeft.isCompleted ? (
                                <div className="grid grid-cols-4 gap-2 bg-white/20 backdrop-blur-[1px] py-3 px-2 border border-stone-200/50 rounded-sm w-full">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl md:text-2xl font-light text-stone-900">
                                            {String(timeLeft.days).padStart(2, '0')}
                                        </span>
                                        <span className="text-[7px] md:text-[8px] font-sans tracking-[0.18em] text-stone-400 uppercase font-medium">Days</span>
                                    </div>
                                    <div className="flex flex-col items-center border-l border-stone-200/40">
                                        <span className="text-xl md:text-2xl font-light text-stone-900">
                                            {String(timeLeft.hours).padStart(2, '0')}
                                        </span>
                                        <span className="text-[7px] md:text-[8px] font-sans tracking-[0.18em] text-stone-400 uppercase font-medium">Hours</span>
                                    </div>
                                    <div className="flex flex-col items-center border-l border-stone-200/40">
                                        <span className="text-xl md:text-2xl font-light text-stone-900">
                                            {String(timeLeft.minutes).padStart(2, '0')}
                                        </span>
                                        <span className="text-[7px] md:text-[8px] font-sans tracking-[0.18em] text-stone-400 uppercase font-medium">Mins</span>
                                    </div>
                                    <div className="flex flex-col items-center border-l border-stone-200/40">
                                        <span className="text-xl md:text-2xl font-light text-stone-900">
                                            {String(timeLeft.seconds).padStart(2, '0')}
                                        </span>
                                        <span className="text-[7px] md:text-[8px] font-sans tracking-[0.18em] text-stone-400 uppercase font-medium">Secs</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-xs font-sans tracking-[0.25em] text-army-900 uppercase font-semibold bg-white/30 py-3 text-center border border-stone-200/50 rounded-sm w-full">
                                    Today is our Wedding Day!
                                </div>
                            )}
                        </div>

                        {/* Interactive Add to Calendar Group */}
                        <div className="space-y-3 w-full pt-2">
                            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] text-stone-400 uppercase font-medium block">
                                Add to calendar:
                            </span>
                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <a
                                    href={googleCalendarUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-3 border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-white hover:border-stone-950 text-stone-700 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 shadow-xs cursor-pointer"
                                >
                                    Android
                                </a>
                                <button
                                    onClick={handleIcsDownload}
                                    className="flex-1 text-center py-3 border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-white hover:border-stone-950 text-stone-700 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 shadow-xs cursor-pointer"
                                >
                                    iOS
                                </button>
                            </div>
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