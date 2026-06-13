'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";
import { ReactNode } from "react";

const PrimaryText = ({ children }: { children: ReactNode }) => {
    return (
        <h3 className="text-center text-[12px] md:text-xs font-bold tracking-[0.25em] uppercase text-amber-900 font-sans">
            {children}
        </h3>
    );
};

const NameText = ({ children, orientation }: { children: ReactNode, orientation: 'left' | 'right' }) => {
    return (
        <div className={`text-${orientation} text-[11px] md:text-xs font-normal tracking-[0.18em] uppercase text-stone-900 leading-relaxed`}>
            {children}
        </div>
    );
};

const LabelText = ({ children }: { children: ReactNode }) => {
    return (
        <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-stone-500 font-medium text-center max-w-sm mx-auto leading-relaxed mt-1.5">
            {children}
        </p>
    );
};

const TwoColumnContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mt-4 grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 text-stone-700 font-sans w-full max-w-2xl mx-auto px-2">
            {children}
        </div>
    );
};

export const Entourage = () => {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12 py-24 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba(250, 249, 246, 0.75), rgba(254, 243, 199, 0.2)), url('https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=1200')`
            }}
        >
            {/* Elegant Editorial Framed Border Inside the Viewport (Matching Hero) */}
            <div className="absolute inset-4 md:inset-8 border border-stone-200/60 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-stone-800 space-y-16 md:space-y-20 max-w-3xl relative z-20 flex flex-col items-center w-full"
            >
                {/* Header (Matching Hero Typography Style) */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-[0.12em] text-stone-950 uppercase leading-tight">
                        The <span className="text-amber-900 font-serif italic lowercase tracking-normal mx-1">entourage</span>
                    </h2>
                    <div className="w-6 h-[1px] bg-amber-800/40 mx-auto my-3"></div>
                    <span className="uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-stone-500 font-sans block font-semibold">
                        Those standing by our side
                    </span>
                </div>

                {/* Parents of the Couple */}
                <div className="space-y-4 w-full">
                    <PrimaryText>Parents of the Couple</PrimaryText>
                    <TwoColumnContainer>
                        <strong className="font-sans text-stone-500 block text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-right w-full">Parents of the Groom</strong>
                        <strong className="font-sans text-stone-500 block text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-left w-full">Parents of the Bride</strong>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Roger Dalupang</NameText>
                        <NameText orientation="left">Mrs. Jane Dalupang</NameText>
                        <NameText orientation="right">Mr. Melanio Allam</NameText>
                        <NameText orientation="left">Mrs. Sarah Allam</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 1. Principal Sponsors */}
                <div className="space-y-4 w-full border-t border-stone-200/80 pt-12">
                    <PrimaryText>Principal Sponsors</PrimaryText>
                    <LabelText>To stand as witness as we exchange our vows</LabelText>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Jober Malsi</NameText><NameText orientation="left">Mrs. Leah Malsi</NameText>
                        <NameText orientation="right">Mr. Marson Allam</NameText><NameText orientation="left">Mrs. Lani Allam</NameText>
                        <NameText orientation="right">Mr. Manuel Allam</NameText><NameText orientation="left">Mrs. Cecille Bagunu</NameText>
                        <NameText orientation="right">Mr. Errol Flynn Malsi</NameText><NameText orientation="left">Ms. Rosalyn Deray</NameText>
                        <NameText orientation="right">Mr. Ariel Patdu</NameText><NameText orientation="left">Mrs. Sheila Patdu</NameText>
                        <NameText orientation="right">Mr. Celestino dela Cruz</NameText><NameText orientation="left">Mrs. Lourdes dela Cruz</NameText>
                        <NameText orientation="right">Mr. Edgar Mamauag</NameText><NameText orientation="left">Mrs. Maricel Mamauag</NameText>
                        <NameText orientation="right">Mr. Rexandro Silverio</NameText><NameText orientation="left">Mrs. Jaycee Silverio</NameText>
                        <NameText orientation="right">Mr. Josel dela Cruz</NameText><NameText orientation="left">Mrs. Janette dela Cruz</NameText>
                        <NameText orientation="right">Mr. Marion Lloyd Nacionales</NameText><NameText orientation="left">Mrs. Janette Fermin</NameText>
                        <NameText orientation="right">Mr. Rizalino Gatan</NameText><NameText orientation="left">Mrs. Olivia Ramos</NameText>
                        <NameText orientation="right">Mr. Joel Jose Josue</NameText><NameText orientation="left">Mrs. Connie Josue</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 2. Best Man & Maid of Honor */}
                <div className="space-y-4 w-full border-t border-stone-200/80 pt-12">
                    <TwoColumnContainer>
                        <strong className="font-sans text-amber-900 block text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-right w-full">Best Man</strong>
                        <strong className="font-sans text-amber-900 block text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-left w-full">Maid of Honor</strong>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Mark John Vicente</NameText>
                        <NameText orientation="left">Ms. Arianne Mae Allam</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 3. Secondary Sponsors */}
                <div className="space-y-8 w-full border-t border-stone-200/80 pt-12">
                    <PrimaryText>Secondary Sponsors</PrimaryText>
                    <div className="flex flex-col gap-y-12 max-w-2xl mx-auto w-full">
                        <div className="flex flex-col items-center mx-auto w-full">
                            <strong className="font-sans text-stone-950 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-center w-full">Candle</strong>
                            <LabelText>To light our path</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Seann Santos</NameText>
                                <NameText orientation="left">Ms. Britanny Starlings</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-stone-200/60 pt-8">
                            <strong className="font-sans text-stone-950 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-center w-full">Cord</strong>
                            <LabelText>To bind us together</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. John Jefferson Sy</NameText>
                                <NameText orientation="left">Ms. Clarissa dela Cruz</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-stone-200/60 pt-8">
                            <strong className="font-sans text-stone-950 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-center w-full">Veil</strong>
                            <LabelText>To clothe as one</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Jaymond Senique</NameText>
                                <NameText orientation="left">Ms. Lady Elaine Senique</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>
                </div>

                {/* 4. Groomsmen & Bridesmaids */}
                <div className="space-y-4 w-full border-t border-stone-200/80 pt-12">
                    <TwoColumnContainer>
                        <strong className="font-sans text-amber-900 block text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-right w-full">Groomsmen</strong>
                        <strong className="font-sans text-amber-900 block text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-left w-full">Bridesmaids</strong>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Cenon Ibay Jr.</NameText><NameText orientation="left">Ms. Carla Eloiza Bagunu</NameText>
                        <NameText orientation="right">Mr. Niko Angelo Tabangin</NameText><NameText orientation="left">Ms. Marijoyce Zipagan</NameText>
                        <NameText orientation="right">Mr. Hardy Batalla</NameText><NameText orientation="left">Ms. Joanna Rose Sapnu</NameText>
                        <NameText orientation="right">Mr. Dax Paulo Binag</NameText><NameText orientation="left">Ms. Pebie Angelica Binag</NameText>
                        <NameText orientation="right">Mr. Marc Edgar Mamauag</NameText><NameText orientation="left">Ms. Ma Angelica Ignes</NameText>
                        <NameText orientation="right">Mr. Jan Paulo Dalupang</NameText><NameText orientation="left">Ms. Harvey Allam</NameText>
                        <NameText orientation="right">Mr. Denver Allam</NameText><NameText orientation="left">Ms. Raquel Antoinette Dalupang</NameText>
                        <NameText orientation="right">Mr. Roseven Tumaliuan</NameText><NameText orientation="left">Ms. Josephine Lu Ronquillo</NameText>
                        <NameText orientation="right">Mr. Paul John Beldad</NameText><NameText orientation="left">Ms. Arbie Christine Beldad</NameText>
                        <NameText orientation="right">Mr. Japh Razzer Manansala</NameText><NameText orientation="left">Ms. Elgierene Maligaya</NameText>
                        <NameText orientation="right">Mr. Roque Raunch Bautista</NameText><NameText orientation="left">Ms. Zuzhane Angel Espejo</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 5. Bearers */}
                <div className="space-y-8 w-full border-t border-stone-200/80 pt-12">
                    <div className="flex flex-col gap-y-12 max-w-2xl mx-auto w-full">
                        <div className="flex flex-col items-center mx-auto w-full">
                            <strong className="font-sans text-stone-950 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-center w-full">Ring Bearer</strong>
                            <LabelText>To carry our symbol of love</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Christopher Nicole Verdote</NameText>
                                <NameText orientation="left">Thia Romainne Basada</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-stone-200/60 pt-8">
                            <strong className="font-sans text-stone-950 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-center w-full">Bible Bearer</strong>
                            <LabelText>To carry our symbol of faith</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Vincent Fugaban</NameText>
                                <NameText orientation="left">Ma Kristel Fugaban</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-stone-200/60 pt-8">
                            <strong className="font-sans text-stone-950 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-center w-full">Coin Bearer</strong>
                            <LabelText>To carry our symbol of treasures</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Manuel Joseph Servando</NameText>
                                <NameText orientation="left">Keisha Yvonne Dy</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>
                </div>

                {/* 6. Flower Girls */}
                <div className="space-y-4 w-full border-t border-stone-200/80 pt-12">
                    <div className="text-center">
                        <strong className="font-sans text-amber-900 block text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold w-full">Flower Girls</strong>
                        <LabelText>To shower our aisle with flowers</LabelText>
                    </div>
                    <TwoColumnContainer>
                        <NameText orientation="right">Angelu Bagunu</NameText><NameText orientation="left">Nathalie Mabbayad</NameText>
                        <NameText orientation="right">Janelle Ashley Dalupang</NameText><NameText orientation="left">Ava Chelsea Ancheta</NameText>
                        <NameText orientation="right">Pamela Bianca Andres</NameText><NameText orientation="left">Rochel Belesario</NameText>
                        <NameText orientation="right">Holyanna Acosta</NameText><NameText orientation="left">Coleen Ann Alcantara</NameText>
                    </TwoColumnContainer>
                </div>

                {/* Bottom Visual Rule Divider */}
                <div className="w-full pt-4">
                    <div className="border-b border-stone-200/60 max-w-xs mx-auto w-full" />
                </div>
            </motion.div>
        </section>
    );
};