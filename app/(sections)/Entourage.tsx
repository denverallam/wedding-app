'use client'

import { motion } from "framer-motion";
import { fadeInVariant } from "../page";
import { ReactNode } from "react";



const PrimaryText = ({ children }: { children: ReactNode }) => {
    return <h3 className={`text-center text-xl md:text-2xl font-semibold text-amber-700 max-w-md mx-auto uppercase`}>{children}</h3>
}

const SecondaryText = ({ children, className }: { children: ReactNode, className?: string }) => {
    return <strong className={`font-serif text-black block text-sm uppercase tracking-widest font-semibold ${className}`}>{children}</strong>
}

const NameText = ({ children, orientation }: { children: ReactNode, orientation: 'left' | 'right' }) => {
    return <div className={`text-${orientation} text-[10px] md:text-sm`}>{children}</div>
}

const LabelText = ({ children }: { children: ReactNode }) => {
    return <p className="font-sans text-[8px] md:text-xs uppercase tracking-widest text-gray-500 text-center italic">{children}</p>
}

const TwoColumnContainer = ({ children }: { children: ReactNode }) => {
    return <div className="mt-2 grid grid-cols-2 gap-x-8 md:gap-x-10 gap-y-2 text-gray-600 font-sans text-xs font-medium uppercase tracking-wider">{children}</div>
}

export const Entourage = () => {
    return (    
        <section className="py-8 md:py-16 max-w-6xl mx-auto px-4 md:px-6 h-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="space-y-4 md:space-y-8 h-auto"
            >
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-amber-800 uppercase">Entourage</h2>
                </div>

                {/* 1. Principal Sponsors */}
                <div>
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


                    {/* 2. Best Man & Maid of Honor (Updated to match Groomsmen/Bridesmaids layout) */}
                    <TwoColumnContainer>
                        <SecondaryText className="text-right">Best Man</SecondaryText>
                        <SecondaryText className="text-left">Maid of Honor</SecondaryText>
                    </TwoColumnContainer>
                    <TwoColumnContainer>
                        <NameText orientation="right">Mr. Mark John Vicente</NameText>
                        <NameText orientation="left">Ms. Arianne Mae Allam</NameText>
                    </TwoColumnContainer>
                </div>

                {/* 3. Secondary Sponsors */}
                <div>
                    <PrimaryText>Secondary Sponsors</PrimaryText>
                    <div className="flex-col gap-x-8 md:gap-x-10 gap-y-12 max-w-4xl mx-auto text-gray-600 font-sans text-xs">
                        <div className="flex flex-col items-center col-span-2 mx-auto w-full mt-2">
                            <SecondaryText>Candle</SecondaryText>
                            <LabelText>To light our path</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Seann Santos</NameText>
                                <NameText orientation="left">Ms. Britanny Starlings</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center col-span-2 mx-auto w-full mt-2">
                            <SecondaryText>Cord</SecondaryText>
                            <LabelText>To bind us together</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. John Jefferson Sy</NameText>
                                <NameText orientation="left">Ms. Clarissa dela Cruz</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center col-span-2 mx-auto w-full mt-2">
                            <SecondaryText>Veil</SecondaryText>
                            <LabelText>To clothes as one</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Mr. Jaymond Senique</NameText>
                                <NameText orientation="left">Ms. Lady Elaine Senique</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>


                    {/* 4. Groomsmen & Bridesmaids */}
                        <TwoColumnContainer>
                            <SecondaryText className="text-right">Groomsmen</SecondaryText>
                            <SecondaryText className="text-left">Bridesmaids</SecondaryText>
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
                            <NameText orientation="left">Ms. Raquel Antoinette Dalupang</NameText>
                            <NameText orientation="right">Mr. Roseven Tumaliuan</NameText>
                            <NameText orientation="left">Ms. Josephine Lu Ronquillo</NameText>
                            <NameText orientation="right">Mr. Paul John Beldad</NameText>
                            <NameText orientation="left">Ms. Arbie Christine Beldad</NameText>
                            <NameText orientation="right">Mr. Japh Razzer Manansala</NameText>
                            <NameText orientation="left">Ms. Elgierene Maligaya</NameText>
                            <NameText orientation="right">Mr. Roque Raunch Bautista</NameText>
                            <NameText orientation="left">Ms. Zuzhane Angel Espejo</NameText>
                        </TwoColumnContainer>

                    {/* 5. Bearers */}
                    <div className="flex-col gap-x-8 md:gap-x-10 gap-y-12 max-w-4xl mx-auto text-gray-600 font-sans text-xs">
                        <div className="flex flex-col items-center col-span-2 mx-auto w-full mt-2">
                            <SecondaryText>Ring Bearer</SecondaryText>
                            <LabelText>To carry our symbol of love</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Christopher Nicole Verdote</NameText>
                                <NameText orientation="left">Thia Romainne Basada</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center col-span-2 mx-auto w-full mt-2">
                            <SecondaryText>Bible Bearer</SecondaryText>
                            <LabelText>To carry our symbol of faith</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Vincent Fugaban</NameText>
                                <NameText orientation="left">Ma Kristel Fugaban</NameText>
                            </TwoColumnContainer>
                        </div>
                        <div className="flex flex-col items-center col-span-2 mx-auto w-full mt-2">
                            <SecondaryText>Coin Bearer</SecondaryText>
                            <LabelText>To carry our symbol of treasures</LabelText>
                            <TwoColumnContainer>
                                <NameText orientation="right">Manuel Joseph Servando</NameText>
                                <NameText orientation="left">Keisha Yvonne Dy</NameText>
                            </TwoColumnContainer>
                        </div>
                    </div>

                    {/* 6. Flower Girls */}
                    <div>
                        <SecondaryText className="text-center mt-2">Flower Girls</SecondaryText>
                        <LabelText>To shower our aisle with flowers</LabelText>
                        <TwoColumnContainer>
                            <NameText orientation="right">Angelu Bagunu</NameText>
                            <NameText orientation="left">Nathalie Mabbayad</NameText>
                            <NameText orientation="right">Janelle Ashley Dalupang</NameText>
                            <NameText orientation="left">Ava Chelsea Ancheta</NameText>
                            <NameText orientation="right">Pamela Bianca Andres</NameText>
                            <NameText orientation="left">Rochel Belesario</NameText>
                            <NameText orientation="right">Holyanna Acosta</NameText>
                            <NameText orientation="left">Coleen Ann Alcantara</NameText>
                        </TwoColumnContainer>
                    </div>
                </div >

            </motion.div >
        </section >
    );
};