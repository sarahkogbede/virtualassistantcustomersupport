/**
 * Client-side storage utility for portfolio image uploads.
 * Handles compression to keep images within local storage budgets.
 */

// Static assets mapped directly from /public/images/
export const STATIC_IMAGE_MAP: Record<string, string> = {
  headshot_primary: '/images/headshot.jpg',
  project_hubspot_crm: '/images/hubspot-crm.jpg',
  project_google_calendar: '/images/google-calendar.jpg',
  project_email_management: '/images/email-management.jpg',
  project_trello: '/images/trello-management.jpg',
  project_sheets_tracker: '/images/sheets-tracker.jpg',
  project_forms_sheets: '/images/forms-sheets.jpg',
  project_data_research: '/images/data-research.jpg',
  project_travel_planning: '/images/travel-planning.jpg',
  project_canva_gallery: '/images/canva-presentation.jpg',
};

export function getStoredImage(key: string): string | null {
  try {
    const local = localStorage.getItem(`sarah_portfolio_${key}`);
    if (local) return local;
  } catch {
    // ignore local storage read errors
  }
  return STATIC_IMAGE_MAP[key] || null;
}

export function saveStoredImage(key: string, dataUrl: string): boolean {
  try {
    localStorage.setItem(`sarah_portfolio_${key}`, dataUrl);
    window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key } }));
    // Asynchronously save to server /public/images/
    syncImageToServer(key, dataUrl).catch(() => {});
    return true;
  } catch (err) {
    console.error('Failed to save image to localStorage', err);
    return false;
  }
}

export async function syncImageToServer(key: string, dataUrl: string): Promise<boolean> {
  try {
    const res = await fetch('/api/save-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, dataUrl }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function syncAllLocalStorageImagesToServer(): Promise<number> {
  let count = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const storageKey = localStorage.key(i);
      if (storageKey && storageKey.startsWith('sarah_portfolio_')) {
        const key = storageKey.replace('sarah_portfolio_', '');
        const dataUrl = localStorage.getItem(storageKey);
        if (dataUrl && dataUrl.startsWith('data:image')) {
          const success = await syncImageToServer(key, dataUrl);
          if (success) count++;
        }
      }
    }
  } catch (err) {
    console.error('Failed to sync images to server', err);
  }
  return count;
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
