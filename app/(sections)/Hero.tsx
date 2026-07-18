'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";
import { LocationPin } from "../(components)/LocationPin";


interface HeroProps {
    hasRsvp?: boolean;
    guestName?: string
}

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

export const Hero: React.FC<HeroProps> = ({
    hasRsvp = false,
    guestName
}) => {
    const handleScrollToRsvp = () => {
        const rsvpSection = document.getElementById("rsvp");
        if (rsvpSection) {
            rsvpSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Staggered sequence variant configuration tailored for the core names
    const nameContainerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Time delay between each element popping up
                delayChildren: 0.1,
            }
        }
    } as const; // 👈 Add this right here;

    const nameItemVariant = {
        hidden: { opacity: 0, y: 15, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    } as const; // 👈 Add this right here;

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center 
           bg-[url('https://res.cloudinary.com/dvqe9mwrs/image/upload/v1784365673/1000038280_pov4mf.webp')]
            bg-cover bg-center px-12 py-12 overflow-hidden"
        >
            <div className="absolute inset-4 md:inset-8 border border-army-200 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-[#4D6A4A] mix-blend-multiply opacity-90"></div>
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Re-triggers animation smoothly on every section entry
                variants={fadeInVariant}
                className="text-army-800 space-y-6 md:space-y-8 max-w-4xl relative z-20 flex flex-col items-center"
            >
                {/* Invitation Sub-header */}
                <div className="space-y-2">
                    <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-white font-sans block font-medium">
                        The Wedding Celebration of
                    </span>
                </div>

                {/* Main Dynamic Names Container with Pop-up Sequencing */}
                <motion.h1
                    variants={nameContainerVariant}
                    className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-[0.08em] leading-tight lg:whitespace-nowrap flex flex-col sm:flex-row items-center justify-center"
                >
                    <motion.span variants={nameItemVariant} className={`${greatVibes.className} inline-block`}>
                        Jerome
                    </motion.span>

                    <motion.span
                        variants={nameItemVariant}
                        className={`${greatVibes.className} inline-block mx-4`}>
                        &
                    </motion.span>

                    <motion.span variants={nameItemVariant} className={`${greatVibes.className} inline-block`}>
                        Riva
                    </motion.span>
                </motion.h1>

                {/* Shared Invitation Text & Dynamic Guest Greeting */}
                <div className="space-y-4 max-w-md mx-auto">
                    {guestName && (
                        <motion.span
                            variants={nameItemVariant}
                            className="bg-[#2F402E] text-white py-2 font-sans text-sm md:text-base block uppercase tracking-[0.35em] font-semibold mt-4"
                        >
                            Dear {guestName}
                        </motion.span>
                    )}

                    {/* Minimalist Message Text */}
                    <p className="text-[10px] text- md:text-xs font-sans font-medium tracking-[0.3em] text-white uppercase leading-relaxed">
                        We invite you to share in our joy as we step into forever
                    </p>
                </div>

                {/* Date & Location Visual Cluster */}
                <div className="pt-2 space-y-2 w-full">
                    <p className="text-sm tracking-[0.2em] uppercase text-white font-sans font-semibold pt-1">
                        28 August 2026 | 3:00PM
                    </p>
                <div className="flex flex-row justify-center items-center gap-2">
                    {/* I added a class to handle the alignment specifically */}
                    <div className="flex items-center">
                        <LocationPin className="w-[14px] h-[14px]" />
                    </div>
                    <p className="text-sm tracking-[0.2em] uppercase text-white font-sans font-semibold">
                        Ermita de San Jacinto
                    </p>
                </div>
                </div>

                {/* Premium Tailored RSVP Button */}
                {hasRsvp && <div className="pt-4">
                    <button
                        onClick={handleScrollToRsvp}
                        className="bg-[#2F402E] text-white font-sans text-[10px] md:text-xs uppercase tracking-[0.35em] pl-[1.35em] pr-[1em] py-4 border border-army-950 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-sm"
                    >
                        RSVP
                    </button>
                </div>}

                {/* Stacked Scroll Indicator — Uses mt-12 on mobile to guarantee layout separation */}
                <div className="mt-12 md:mt-16 flex flex-col items-center space-y-2 text-white text-[9px] font-sans tracking-[0.35em] font-medium">
                    <span className="opacity-80">SCROLL TO OUR STORY</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
};