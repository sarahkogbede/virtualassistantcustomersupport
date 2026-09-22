/**
 * Client-side storage utility for portfolio image uploads.
 * Handles compression to keep images within local storage budgets.
 */

export function getStoredImage(key: string): string | null {
  try {
    return localStorage.getItem(`sarah_portfolio_${key}`);
  } catch {
    return null;
  }
}

export function saveStoredImage(key: string, dataUrl: string): boolean {
  try {
    localStorage.setItem(`sarah_portfolio_${key}`, dataUrl);
    window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key } }));
    return true;
  } catch (err) {
    console.error('Failed to save image to localStorage', err);
    return false;
  }
}

export function removeStoredImage(key: string): void {
  try {
    localStorage.removeItem(`sarah_portfolio_${key}`);
    window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key } }));
  } catch (err) {
    console.error('Failed to remove image from localStorage', err);
  }
}

/**
 * Resizes and compresses an uploaded file into a base64 DataURL
 */
export async function processImageUpload(file: File, maxDim = 1280, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
