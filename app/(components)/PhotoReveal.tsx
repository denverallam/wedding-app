'use client';

interface ParallaxDividerProps {
    image: string;
    height?: string;
}

export function ParallaxDivider({
    image,
}: ParallaxDividerProps) {
    return (
        <div className="relative h-screen">
            <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
    );
}