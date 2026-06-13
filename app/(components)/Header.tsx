
export const Header = () => {
    return <header className="fixed top-0 left-1/2 z-50 -translate-x-1/2 w-[100%] h-[10vh]">
        <nav
            className="flex justify-center md:justify-between px-6 py-4 shadow-md backdrop-blur-md"
        >
            <h1 className="text-lg text-white font-bold hidden md:block">
                Jerome & Riva
            </h1>
            <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-white font-medium hover:text-yellow-300">
                    Home
                </a>
                <a href="#details" className="text-sm text-white font-medium hover:text-yellow-300">
                    Details
                </a>
                <a href="#entourage" className="text-sm text-white font-medium hover:text-yellow-300">
                    Entourage
                </a>
                <a href="#location" className="text-sm text-white font-medium hover:text-yellow-300">
                    Location
                </a>
                <a href="#rsvp" className="text-sm text-white font-medium hover:text-yellow-300">
                    RSVP
                </a>
            </div>

        </nav>
    </header>
}