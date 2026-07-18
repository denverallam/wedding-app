'use client';

import { useRef, useEffect } from 'react';

export const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            // Attempt to play immediately
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Autoplay started!
                    console.log("Music started playing automatically.");
                }).catch(error => {
                    // Autoplay was prevented.
                    console.log("Autoplay was blocked by the browser. Interaction required.");
                });
            }
        }
    }, []);

    return (
        <audio ref={audioRef} loop autoPlay playsInline>
            <source 
                src="https://res.cloudinary.com/dvqe9mwrs/video/upload/v1784366582/bg-music_rb2wmo.mp3" 
                type="audio/mpeg" 
            />
        </audio>
    );
};