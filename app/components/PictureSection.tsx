// components/PictureSection.tsx
import React, { useEffect, useState } from 'react';

type PictureSectionProps = {
    images: string[];
    onBackToMenu: () => void;
};

const PictureSection: React.FC<PictureSectionProps> = ({ images, onBackToMenu }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayTimer, setDisplayTimer] = useState(30);
    const [writingTimer, setWritingTimer] = useState(270); // 4 minutes 30 seconds
    const [isDisplayTime, setIsDisplayTime] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDisplayTime) {
                if (displayTimer > 0) {
                    setDisplayTimer(displayTimer - 1);
                } else {
                    setIsDisplayTime(false);
                    setDisplayTimer(30);
                }
            } else {
                if (writingTimer > 0) {
                    setWritingTimer(writingTimer - 1);
                } else {
                    if (currentIndex < images.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                        setIsDisplayTime(true);
                        setWritingTimer(270);
                    } else {
                        clearInterval(interval);
                    }
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [displayTimer, writingTimer, isDisplayTime, currentIndex]);

    return (
        <div className="flex flex-col items-center">
            {isDisplayTime ? (
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto" />
            ) : (
                <div className="w-full h-auto flex items-center justify-center">
                    <p className="text-2xl">Time to write...</p>
                </div>
            )}
            <p className="text-xl mt-2">Time left: {isDisplayTime ? displayTimer : writingTimer}s</p>
            <button
                onClick={onBackToMenu}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Back to Menu
            </button>
        </div>
    );
};

export default PictureSection;
