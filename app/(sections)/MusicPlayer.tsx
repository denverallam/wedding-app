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
        <div className="fixed bottom-4 right-4 z-50">
            <button 
                onClick={togglePlay}
                className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white text-xs uppercase tracking-widest"
            >
                {isPlaying ? "Pause Music" : "Play Music"}
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