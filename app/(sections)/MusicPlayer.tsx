'use client';

import { useRef, useState } from 'react';

export const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Playback failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        // The "sticky" behavior is driven by fixed + bottom/right positioning
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-4 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/20 shadow-xl pointer-events-auto">
            {/* Song Info */}
            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold">I Do</span>
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/60">Marie Digby</span>
            </div>

            {/* Play/Pause Button */}
            <button 
                onClick={togglePlay}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 active:scale-95"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <div className="text-[10px] uppercase font-bold text-white leading-none">
                    {isPlaying ? "❚❚" : "▶"}
                </div>
            </button>
            
            <audio ref={audioRef} loop playsInline>
                <source 
                    src="https://res.cloudinary.com/dvqe9mwrs/video/upload/v1784366582/bg-music_rb2wmo.mp3" 
                    type="audio/mpeg" 
                />
            </audio>
        </div>
    );
};