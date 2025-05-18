/**
 * Utility for preloading images to improve performance
 */

// Cache to store preloaded images
const imageCache = new Map();

/**
 * Preload a single image and store it in the cache
 * @param {string} src - Image source URL
 * @returns {Promise} - Promise that resolves when the image is loaded
 */
export const preloadImage = (src) => {
  // Return from cache if already loaded
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src));
  }

  // Create a new promise for loading the image
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      // Store in cache and resolve
      imageCache.set(src, img);
      resolve(img);
    };

    img.onerror = (error) => {
      console.warn(`Failed to preload image: ${src}`, error);
      // Still store in cache to prevent repeated attempts
      imageCache.set(src, null);
      // Resolve with null instead of rejecting to prevent Promise.all from failing
      resolve(null);
    };

    // Start loading the image
    img.src = src;
  });
};

/**
 * Preload multiple images at once
 * @param {Array<string>} sources - Array of image source URLs
 * @returns {Promise} - Promise that resolves when all images are loaded
 */
export const preloadImages = (sources) => {
  return Promise.all(sources.map(src => preloadImage(src)));
};

/**
 * Check if an image is already cached
 * @param {string} src - Image source URL
 * @returns {boolean} - True if the image is cached
 */
export const isImageCached = (src) => {
  return imageCache.has(src);
};

/**
 * Get a cached image
 * @param {string} src - Image source URL
 * @returns {Image|null} - The cached image or null if not cached
 */
export const getCachedImage = (src) => {
  return imageCache.get(src) || null;
};

/**
 * Clear the image cache
 */
export const clearImageCache = () => {
  imageCache.clear();
};
