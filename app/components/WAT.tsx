import React, { useEffect, useState } from 'react';

type Word = {
  word_id: number;
  letter: string;
  word: string;
  meaning: string;
};

type WATProps = {
  words: Word[];
  onBackToMenu: () => void;
};

const WAT: React.FC<WATProps> = ({ words, onBackToMenu }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
          setTimer(15);
        } else {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, currentWordIndex, words]);

  if (!words || words.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mt-2">{`Word: ${currentWordIndex + 1} / ${words.length}`}</p>
      <p className="text-2xl mt-2">{words[currentWordIndex].word}</p>
      <p className="text-xl mt-2">{words[currentWordIndex].meaning}</p>
      <p className="text-xl mt-2">Time left: {timer}s</p>
      <button
        onClick={onBackToMenu}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Back to Menu
      </button>
    </div>
  );
};

export default WAT;

// // components/WAT.tsx
// import React, { useEffect, useState } from 'react';

// type Word = {
//   word_id: number;
//   letter: string;
//   word: string;
//   meaning: string;
// };

// type WATProps = {
//   words: Word[];
//   onBackToMenu: () => void;
// };

// const WAT: React.FC<WATProps> = ({ words, onBackToMenu }) => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [timer, setTimer] = useState(15);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       } else {
//         if (currentWordIndex < words.length - 1) {
//           setCurrentWordIndex(currentWordIndex + 1);
//           setTimer(15);
//         } else {
//           clearInterval(interval);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timer, currentWordIndex]);

//   if (!words || words.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-2xl mt-2">{words[currentWordIndex].word}</p>
//       <p className="text-xl mt-2">{words[currentWordIndex].meaning}</p>
//       <p className="text-xl mt-2">Time left: {timer}s</p>
//       <button
//         onClick={onBackToMenu}
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Back to Menu
//       </button>
//     </div>
//   );
// };

// export default WAT;
