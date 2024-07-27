// utils/fetchWords.ts
// utils/wordsApi.ts
type Word = {
  word_id: number;
  letter: string;
  word: string;
  meaning: string;
};

export async function fetchWords(): Promise<Word[]> {
    const response = await fetch('https://dictionary-api-b82u.onrender.com/random-30');
    const data: Word[] = await response.json();
    return data;
}

// export async function fetchWords(): Promise<string[]> {
//     // Mock API call
//     const response = await fetch('https://dictionary-api-b82u.onrender.com/random-30');
//     const data = await response.json();
//     return data.words;
//   }
  