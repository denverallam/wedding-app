import { Attire } from "./(sections)/Attire";
import { SaveTheDate } from "./(sections)/Calendar";
import { Details } from "./(sections)/Details";
import { Entourage } from "./(sections)/Entourage";
import { Hero } from "./(sections)/Hero";
import { RSVP } from "./(sections)/RSVP";

export const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" // or whatever your easing string is
    }
  }
} as const; // 👈 Add this right here

export default function WeddingWebsite() {


  return (
    <div className="bg-[#FAF9F6] text-[#333333] font-serif antialiased selection:bg-amber-100">
      <Hero />
      <SaveTheDate />
      <Entourage />
      <Details />
      <Attire />
      <RSVP />
      <footer className="py-6 px-4 bg-[#333333] text-white/60 text-center font-sans text-xs tracking-wider">
        Thank you for being part of our story. #JEROMEboundtofoRIVA
      </footer>
    </div>
  );
}