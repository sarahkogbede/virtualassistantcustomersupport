import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { getStoredImage } from '../utils/imageStorage';

interface ImageUploadAreaProps {
  storageKey: string;
  buttonLabel?: string;
  compact?: boolean;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto' | 'large' | 'wide';
  className?: string;
  placeholderContent?: React.ReactNode;
  hintText?: string;
  objectFit?: 'cover' | 'contain';
  allowEnlarge?: boolean;
  onImageChanged?: (dataUrl: string | null) => void;
}

/**
 * Static Portfolio Image Component
 * Fully locked for visitors: renders only existing uploaded portfolio assets
 * with high-resolution lightbox viewing. Absolutely no upload, replace, or delete controls.
 */
export const ImageUploadArea: React.FC<ImageUploadAreaProps> = ({
  storageKey,
  compact = false,
  aspectRatio = 'video',
  className = '',
  objectFit = 'contain',
  allowEnlarge = true
}) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const loadImg = () => {
      const img = getStoredImage(storageKey);
      setCurrentImage(img);
    };
    loadImg();

    const handleCustomUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string }>;
      if (!customEvent.detail || customEvent.detail.key === storageKey) {
        loadImg();
      }
    };

    window.addEventListener('portfolio_image_updated', handleCustomUpdate);
    return () => {
      window.removeEventListener('portfolio_image_updated', handleCustomUpdate);
    };
  }, [storageKey]);

  // If used in compact mode (e.g. avatar or thumbnail badge)
  if (compact) {
    if (!currentImage) return null;
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <img
          src={currentImage}
          alt="Portfolio Asset"
          className="w-10 h-10 rounded-full object-cover border border-slate-200"
        />
      </div>
    );
  }

  // If no image has been uploaded for this asset, do not display placeholder boxes or mockups
  if (!currentImage) {
    return null;
  }

  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-[16/10]',
    portrait: 'aspect-[3/4]',
    auto: 'min-h-[220px]',
    large: 'min-h-[360px] md:min-h-[440px] aspect-[16/10]',
    wide: 'min-h-[280px] sm:min-h-[340px] aspect-[16/9]'
  }[aspectRatio];

  return (
    <>
      <div 
        className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-slate-50 border border-slate-200/90 group ${allowEnlarge ? 'cursor-zoom-in' : ''} ${className}`}
        onClick={() => {
          if (allowEnlarge) {
            setIsLightboxOpen(true);
            setIsZoomed(false);
          }
        }}
        title={allowEnlarge ? 'Click to view full size' : undefined}
      >
        <img
          src={currentImage}
          alt="Portfolio Asset"
          className={`w-full h-full ${
            objectFit === 'cover' ? 'object-cover' : 'object-contain'
          } bg-white transition duration-300 group-hover:scale-[1.01]`}
        />

        {allowEnlarge && (
          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-sm">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to Enlarge</span>
          </div>
        )}
      </div>

      {/* High-Resolution Static Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[95vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Toolbar */}
            <div className="w-full flex items-center justify-between pb-3 text-white px-2">
              <span className="text-xs font-semibold text-slate-300">
                Full-Resolution Portfolio Screenshot
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  <span>{isZoomed ? 'Fit to Screen' : 'Zoom In'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div className={`w-full overflow-auto rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center ${isZoomed ? 'max-h-[85vh] cursor-zoom-out' : 'max-h-[85vh] cursor-zoom-in'}`}>
              <img
                src={currentImage}
                alt="Full Resolution View"
                onClick={() => setIsZoomed(!isZoomed)}
                className={`transition-all duration-200 ${
                  isZoomed 
                    ? 'w-auto max-w-none scale-125 my-8' 
                    : 'max-w-full max-h-[82vh] object-contain'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
