import { Attire } from "../(sections)/Attire";
import { SaveTheDate } from "../(sections)/Calendar";
import { Details } from "../(sections)/Details";
import { Entourage } from "../(sections)/Entourage";
import { Hero } from "../(sections)/Hero";
import { InvitationNotFound } from "../(sections)/NotFound";
import { RSVPSection } from "../(sections)/RSVPSection";
import { getGuest } from "../utils/sheets";

export default async function Page({
    params,
}: {
    params: Promise<{ token: string }>;
}) {

    const { token } = await params

    const guest = await getGuest(token);

    if (!guest) {
        return <InvitationNotFound />
    }

    const { name } = guest

    return (
        <div className="bg-[#FAF9F6] text-[#333333] font-serif antialiased">
            <Hero hasRsvp={!!guest} guestName={name} />
            <SaveTheDate />
            <Entourage />
            {/* TODO: slideshow here */}
            <Details />
            <Attire />
            <RSVPSection {...guest} />
            <footer className="py-6 px-4 bg-army-1000 text-white/80 text-center font-sans text-[10px] md:text-xs tracking-[0.25em]">
                Thank you for being part of our story. <span className="font-bold">#JEROMEboundtofoRIVA</span>
            </footer>
        </div >
    );
}