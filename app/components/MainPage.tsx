// components/MainPage.tsx
'use client';
import { useEffect, useState } from 'react';
import PictureSlideshow from './PictureSection';
import WordAssociationTest from './WAT';

const MainPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const [words, setWords] = useState<any[]>([]);
    const [showSlideshow, setShowSlideshow] = useState(false);
    const [showWAT, setShowWAT] = useState(false);

    useEffect(() => {
        async function loadData() {
            const imagesData = await fetchImages();
            setImages([...imagesData, '']);
            const wordsData = await fetchWords();
            setWords(wordsData);
        }
        loadData();
    }, []);

    const handleBackToMenu = () => {
        setShowSlideshow(false);
        setShowWAT(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl mb-4">Next.js Pinterest and WAT</h1>
            {!showSlideshow && !showWAT && (
                <div className="flex flex-col items-center">
                    <button
                        onClick={() => setShowSlideshow(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                    >
                        Start Picture Slideshow
                    </button>
                    <button
                        onClick={() => setShowWAT(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Start Word Association Test
                    </button>
                </div>
            )}
            {showSlideshow && <PictureSlideshow images={images} onBackToMenu={handleBackToMenu} />}
            {showWAT && <WordAssociationTest words={words} onBackToMenu={handleBackToMenu} />}
        </div>
    );
};

async function fetchImages(): Promise<string[]> {
    // Add your implementation to fetch images from Pinterest API
    return [];
}

async function fetchWords(): Promise<any[]> {
    const response = await fetch('https://dictionary-api-ftv7.onrender.com/random-30');
    const data = await response.json();
    return data;
}

export default MainPage;
