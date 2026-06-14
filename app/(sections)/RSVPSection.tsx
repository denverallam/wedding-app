import { RSVPForm } from "../(components)/RSVPForm";
import { Guest } from "../utils/sheets";


interface RSVPSectionProps extends Guest { }


export const RSVPSection = async ({ token, name, numOfGuests, isAttending, notes }: RSVPSectionProps) => {
    // 4. Pass properties down to the pristine client form layout


    console.log(numOfGuests)

    return (
        <RSVPForm
            token={token}
            guestName={name}
            guestCount={numOfGuests}
            initialStatus={isAttending}
            initialNote={notes}
        />
    );
};