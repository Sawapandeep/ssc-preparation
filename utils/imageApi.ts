// utils/fetchImages.ts
export async function fetchImages(): Promise<string[]> {
    // Mock API call
    const response = await fetch('https://mockapi.com/pinterest/images');
    const data = await response.json();
    return data.images;
  }
  