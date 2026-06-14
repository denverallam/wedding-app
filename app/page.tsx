import { InvitationNotFound } from "./(sections)/NotFound";

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

export default async function Page() {

        return <InvitationNotFound />

  
}