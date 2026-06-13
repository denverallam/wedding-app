'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";
import { ReactNode } from "react";

const PrimaryText = ({ children }: { children: ReactNode }) => {
    return <h3 className="text-center text-xl md:text-2xl font-light text-amber-800 max-w-md mx-auto uppercase tracking-wide">{children}</h3>
}

const SecondaryText = ({ children, className }: { children: ReactNode, className?: string }) => {
    return <strong className={`font-sans text-stone-900 block text-xs uppercase tracking-[0.2em] font-semibold ${className}`}>{children}</strong>
}

const NameText = ({ children, orientation }: { children: ReactNode, orientation: 'left' | 'right' }) => {
    return <div className={`text-${orientation} text-[10px] md:text-xs tracking-wider truncate`}>{children}</div>
}

const LabelText = ({ children }: { children: ReactNode }) => {
    return <p className="font-sans text-[9px] md:text-[11px] uppercase tracking-widest text-stone-400 text-center italic mt-0.5">{children}</p>
}

const TwoColumnContainer = ({ children }: { children: ReactNode }) => {
    return <div className="mt-2 grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-2 text-stone-600 font-sans text-xs font-medium uppercase tracking-wider">{children}</div>
}

export const Entourage = () => {
    return (
        <section className="py-12 md:py-24 max-w-6xl mx-auto px-4 md:px-6 h-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="space-y-12 md:space-y-16 h-auto"
            >
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-stone-900 uppercase">The Entourage</h2>
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 md:mt-2">Those standing by our side</p>
                </div>

                {/* 1. Principal Sponsors */}
                <div className="space-y-4">
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

                <hr className="border-amber-100 max-w-xs mx-auto" />

                {/* 2. Best Man & Maid of Honor */}
                <div className="space-y-4">
                    <TwoColumnContainer>
                        <SecondaryText className="text-right">Best Man</SecondaryText>
                        <SecondaryText className="text-left">Maid of Honor</SecondaryText>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Mark John Vicente</NameText>
                        <NameText orientation="left">Ms. Arianne Mae Allam</NameText>
                    </TwoColumnContainer>
                </div>

                <hr className="border-amber-100 max-w-xs mx-auto" />

                {/* 3. Secondary Sponsors */}
                <div className="space-y-6">
                    <PrimaryText>Secondary Sponsors</PrimaryText>
                    <div className="flex flex-col gap-y-6 max-w-4xl mx-auto text-gray-600 font-sans text-xs">
                        <div className="flex flex-col items-center mx-auto w-full">
                            <SecondaryText>Candle</SecondaryText>
                            <LabelText>To light our path</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Seann Santos</NameText>
                                <NameText orientation="left">Ms. Britanny Starlings</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-amber-100/40 pt-4">
                            <SecondaryText>Cord</SecondaryText>
                            <LabelText>To bind us together</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. John Jefferson Sy</NameText>
                                <NameText orientation="left">Ms. Clarissa dela Cruz</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-amber-100/40 pt-4">
                            <SecondaryText>Veil</SecondaryText>
                            <LabelText>To clothe as one</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Jaymond Senique</NameText>
                                <NameText orientation="left">Ms. Lady Elaine Senique</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>
                </div>

                <hr className="border-amber-100 max-w-xs mx-auto" />

                {/* 4. Groomsmen & Bridesmaids */}
                <div className="space-y-4">
                    <TwoColumnContainer>
                        <SecondaryText className="text-right">Groomsmen</SecondaryText>
                        <SecondaryText className="text-left">Bridesmaids</SecondaryText>
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

                <hr className="border-amber-100 max-w-xs mx-auto" />

                {/* 5. Bearers */}
                <div className="space-y-6">
                    <div className="flex flex-col gap-y-6 max-w-4xl mx-auto text-gray-600 font-sans text-xs">
                        <div className="flex flex-col items-center mx-auto w-full">
                            <SecondaryText>Ring Bearer</SecondaryText>
                            <LabelText>To carry our symbol of love</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Christopher Nicole Verdote</NameText>
                                <NameText orientation="left">Thia Romainne Basada</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-amber-100/40 pt-4">
                            <SecondaryText>Bible Bearer</SecondaryText>
                            <LabelText>To carry our symbol of faith</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Vincent Fugaban</NameText>
                                <NameText orientation="left">Ma Kristel Fugaban</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center mx-auto w-full border-t border-amber-100/40 pt-4">
                            <SecondaryText>Coin Bearer</SecondaryText>
                            <LabelText>To carry our symbol of treasures</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Manuel Joseph Servando</NameText>
                                <NameText orientation="left">Keisha Yvonne Dy</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>
                </div>

                <hr className="border-amber-100 max-w-xs mx-auto" />

                {/* 6. Flower Girls */}
                <div className="space-y-4">
                    <div>
                        <SecondaryText className="text-center">Flower Girls</SecondaryText>
                        <LabelText>To shower our aisle with flowers</LabelText>
                    </div>
                    <TwoColumnContainer>
                        <NameText orientation="right">Angelu Bagunu</NameText><NameText orientation="left">Nathalie Mabbayad</NameText>
                        <NameText orientation="right">Janelle Ashley Dalupang</NameText><NameText orientation="left">Ava Chelsea Ancheta</NameText>
                        <NameText orientation="right">Pamela Bianca Andres</NameText><NameText orientation="left">Rochel Belesario</NameText>
                        <NameText orientation="right">Holyanna Acosta</NameText><NameText orientation="left">Coleen Ann Alcantara</NameText>
                    </TwoColumnContainer>
                </div>
            </motion.div >
        </section >
    );
};