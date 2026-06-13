export const Location = () => {
    return < section className="w-full h-[450px] relative bg-gray-100" >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1s0x89c258fec2264315%3A0xf67aa64a796fa3!2sThe%20Plaza!5e0!3m2!1sen!1sus!4v1710000000000!5m2!1sen!1sus"
            className="w-full h-full border-0 grayscale contrast-125 opacity-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded shadow-md font-sans max-w-xs border border-army-100">
            <h4 className="font-serif text-lg text-army-900">Getting There</h4>
            <p className="text-xs text-gray-600 mt-1">Valet parking is available at the main entrance of The Plaza Hotel starting at 5:30 PM.</p>
        </div>
    </section >

}