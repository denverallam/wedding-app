
export const PhotoReveal: React.FC<{
    imageUrl: string;
}> = ({ imageUrl }) => {
    return (
        <section
            className="w-full h-[60vh] bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
    );
}