import React, { useState, useEffect } from 'react';
import { preloadImage, isImageCached } from '../../utils/imagePreloader';

/**
 * A component that preloads images and shows a loading indicator
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - CSS classes for the image
 * @param {Object} props.style - Inline styles for the image
 * @param {Function} props.onLoad - Callback when image is loaded
 * @param {React.ReactNode} props.placeholder - Custom placeholder component
 * @param {Object} props.imgProps - Additional props to pass to the img element
 */
const PreloadedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  onLoad,
  placeholder,
  ...imgProps 
}) => {
  const [isLoaded, setIsLoaded] = useState(isImageCached(src));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;
    
    // Reset states when src changes
    setIsLoaded(isImageCached(src));
    setError(false);
    
    if (!isImageCached(src)) {
      preloadImage(src)
        .then(() => {
          setIsLoaded(true);
          if (onLoad) onLoad();
        })
        .catch(() => {
          setError(true);
        });
    } else if (onLoad) {
      onLoad();
    }
  }, [src, onLoad]);

  // Default placeholder - a gray box with the same dimensions
  const defaultPlaceholder = (
    <div 
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg 
        className="w-8 h-8 text-gray-300 dark:text-gray-600" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" 
        fill="currentColor" 
        viewBox="0 0 640 512"
      >
        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
      </svg>
    </div>
  );

  // Show error state
  if (error) {
    return (
      <div 
        className={`bg-red-100 dark:bg-red-900 ${className}`}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg 
          className="w-8 h-8 text-red-500 dark:text-red-400" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }

  // Show placeholder while loading
  if (!isLoaded) {
    return placeholder || defaultPlaceholder;
  }

  // Show the image once loaded
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...imgProps}
    />
  );
};

export default PreloadedImage;
