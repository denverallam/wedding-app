'use client';

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";
import { ReactNode } from "react";

export const PrimaryText = ({ children }: { children: ReactNode }) => {
    return (
        <h3 className="text-center text-[14px] md:text-sm font-bold tracking-[0.15em] uppercase text-black/80 font-sans">
            {children}
        </h3>
    );
};

export const NameText = ({ children, orientation }: { children: ReactNode, orientation: 'left' | 'right' }) => {
    return (
        <div className={`text-${orientation} text-[10px] md:text-[12px] font-medium tracking-[0.08em] uppercase text-black/80 leading-normal`}>
            {children}
        </div>
    );
};

export const LabelText = ({ children }: { children: ReactNode }) => {
    return (
        <p className="font-sans text-[10px] italic uppercase tracking-[0.15em] text-army-500 font-semibold text-center max-w-sm mx-auto leading-normal mt-1">
            {children}
        </p>
    );
};

const TwoColumnContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mt-2 grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-2 text-army-700 font-sans w-full max-w-2xl mx-auto px-4">
            {children}
        </div>
    );
};

export const Entourage = () => {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center bg-white justify-center bg-cover bg-center px-6 md:px-12 py-12 overflow-hidden"
        >
            {/* Elegant Editorial Framed Border Inside the Viewport */}
            <div className="absolute inset-4 md:inset-8 border border-army-200/60 pointer-events-none z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="text-army-800 space-y-2 max-w-3xl relative z-20 flex flex-col items-center w-full"
            >
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-[0.08em] text-army-950 uppercase leading-tight">
                        The <span className="text-army-900 font-serif italic lowercase tracking-normal mx-1">entourage</span>
                    </h2>
                    <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-army-400 font-sans block font-bold">
                        Those standing by our side
                    </span>
                </div>

                {/* Parents of the Couple */}
                <div className="space-y-2 w-full mt-4">
                    <PrimaryText>Parents of the Couple</PrimaryText>
                    <TwoColumnContainer>
                        <strong className="font-sans text-army-900 block text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-extrabold text-right w-full">Parents of the Groom</strong>
                        <strong className="font-sans text-army-900 block text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-extrabold text-left w-full">Parents of the Bride</strong>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Roger Dalupang</NameText>
                        <NameText orientation="left">Mr. Melanio Allam</NameText>
                        <NameText orientation="right">Mrs. Jane Dalupang</NameText>
                        <NameText orientation="left">Mrs. Sarah Allam</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 1. Principal Sponsors */}
                <div className="space-y-2 w-full pt-2">
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
                <div className="space-y-2 w-full pt-2">
                    <TwoColumnContainer>
                        <strong className="font-sans text-army-900 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-right w-full">Best Man</strong>
                        <strong className="font-sans text-army-900 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-left w-full">Maid of Honor</strong>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Mark John Vicente</NameText>
                        <NameText orientation="left">Ms. Arianne Mae Allam</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 3. Secondary Sponsors */}
                <div className="space-y-2 w-full pt-2">
                    <PrimaryText>Secondary Sponsors</PrimaryText>
                    <div className="flex flex-col gap-y-2 max-w-2xl mx-auto w-full">
                        <div className="flex flex-col items-center mx-auto w-full">
                            <strong className="font-sans text-army-950 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-center w-full">Candle</strong>
                            <LabelText>To light our path</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Seann Santos</NameText>
                                <NameText orientation="left">Ms. Brittany Starling</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full pt-2">
                            <strong className="font-sans text-army-950 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-center w-full">Cord</strong>
                            <LabelText>To bind us together</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. John Jefferson Sy</NameText>
                                <NameText orientation="left">Ms. Clarissa dela Cruz</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full pt-2">
                            <strong className="font-sans text-army-950 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-center w-full">Veil</strong>
                            <LabelText>To clothe us as one</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Jaymond Senique</NameText>
                                <NameText orientation="left">Ms. Lady Elaine Senique</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>
                </div>

                {/* 4. Groomsmen & Bridesmaids */}
                <div className="space-y-2 w-full pt-2">
                    <TwoColumnContainer>
                        <strong className="font-sans text-army-900 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-right w-full">Groomsmen</strong>
                        <strong className="font-sans text-army-900 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-left w-full">Bridesmaids</strong>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                                             <NameText orientation="right">Mr. Cenon Ibay Jr.</NameText>
                        <NameText orientation="left">Ms. Carla Eloiza Bagunu</NameText>
                        <NameText orientation="right">Mr. Niko Angelo Tabangin</NameText>
                        <NameText orientation="left">Ms. Marijoyce Zipagan</NameText>
                        <NameText orientation="right">Mr. Hardy Batalla</NameText>
                        <NameText orientation="left">Ms. Joanna Rose Sapnu</NameText>
                        <NameText orientation="right">Mr. Dax Paulo Binag</NameText>
                        <NameText orientation="left">Ms. Pebie Angelica Binag</NameText>
                        <NameText orientation="right">Mr. Marc Edgar Mamauag</NameText>
                        <NameText orientation="left">Ms. Ma Angelica Ignes</NameText>
                        <NameText orientation="right">Mr. Jan Paulo Dalupang</NameText>
                        <NameText orientation="left">Ms. Harvey Allam</NameText>
                        <NameText orientation="right">Mr. Denver Allam</NameText>
                        <NameText orientation="left">Ms. Angelu Bagunu</NameText>
                        <NameText orientation="right">Mr. Roseven Tumaliuan</NameText>
                        <NameText orientation="left">Ms. Josephine Lu Ronquillo</NameText>
                        <NameText orientation="right">Mr. Paul John Beldad</NameText>
                        <NameText orientation="left">Ms. Arbie Christine Beldad</NameText>
                        <NameText orientation="right">Mr. Japh Razzer Manansala</NameText>
                        <NameText orientation="left">Ms. Elgierene Maligaya</NameText>
                        <NameText orientation="right">Mr. Roque Raunch Bautista</NameText>
                        <NameText orientation="left">Ms. Zuzhane Angel Espejo</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 5. Bearers */}
                <div className="space-y-2 w-full pt-2">
                    <div className="flex flex-col gap-y-2 max-w-2xl mx-auto w-full">
                        <div className="flex flex-col items-center mx-auto w-full">
                            <strong className="font-sans text-army-950 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-center w-full">Ring Bearer</strong>
                            <LabelText>To carry our symbol of love</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Christopher Nicole Verdote</NameText>
                                <NameText orientation="left">Thia Romainne Basada</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full pt-2">
                            <strong className="font-sans text-army-950 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-center w-full">Bible Bearer</strong>
                            <LabelText>To carry our symbol of faith</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Vincent Fugaban</NameText>
                                <NameText orientation="left">Ma Kristel Fugaban</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full pt-2">
                            <strong className="font-sans text-army-950 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-center w-full">Coin Bearer</strong>
                            <LabelText>To carry our symbol of treasures</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Manuel Joseph Servando</NameText>
                                <NameText orientation="left">Keisha Yvonne Dy</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>
                </div>

                {/* 6. Flower Girls */}
                <div className="space-y-2 w-full pt-2">
                    <div className="text-center">
                        <strong className="font-sans text-army-900 block text-[11px] md:text-xs uppercase tracking-[0.15em] font-extrabold w-full">Flower Girls</strong>
                        <LabelText>To shower our aisle with flowers</LabelText>
                    </div>
                    <TwoColumnContainer>
                         <NameText orientation="right">Nathalie Mabbayad</NameText>
                        <NameText orientation="left">Janelle Ashley Dalupang</NameText>
                        <NameText orientation="right">Ava Chelsea Ancheta</NameText>
                        <NameText orientation="left">Pamela Bianca Andres</NameText>
                        <NameText orientation="right">Rochel Belesario</NameText>
                        <NameText orientation="left">Holyanna Acosta</NameText>
                        <NameText orientation="right">Coleen Ann Alcantara</NameText>
                        <NameText orientation="left">Raquel Antoinette Dalupang</NameText>
                    </TwoColumnContainer>
                </div>
            </motion.div>
        </section>
    );
};