import { useEffect, useState } from 'react';
import { preloadImages } from '../utils/imagePreloader';
import { militaryInfo } from '../data/militaryData';

/**
 * Component that preloads all images used in the application
 * This component doesn't render anything visible
 */
const ImagePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Collect all image URLs from the application
    const imagesToPreload = [
      // Social media icons
      '/images/linkedin.svg',
      '/images/github.svg',
      '/images/email.svg',

      // Project images
      '/images/scanner.svg',
      '/images/polytopia.svg',
      '/images/guesthouse.svg',
      '/images/businesscard.svg',

      // Flag images
      '/images/USA_Flag.png',
      '/images/UK_Flag.png',
      '/images/German_Flag.png',

      // Equipment images
      '/images/generator-86.svg',
      '/images/air-conditioner-60.svg',
      '/images/flood-light.svg',
      '/images/mule-heater.svg',
    ];

    // Add military images
    if (militaryInfo) {
      // Add rank image
      if (militaryInfo.overview && militaryInfo.overview.rankImage) {
        imagesToPreload.push(militaryInfo.overview.rankImage);
      }

      // Add AFSC image
      if (militaryInfo.afsc && militaryInfo.afsc.image) {
        imagesToPreload.push(militaryInfo.afsc.image);
      }

      // Add ribbon images
      if (militaryInfo.ribbons && militaryInfo.ribbons.length > 0) {
        militaryInfo.ribbons.forEach(ribbon => {
          if (ribbon.image) {
            imagesToPreload.push(ribbon.image);
          }
        });
      }

      // Add assignment flag images
      if (militaryInfo.assignments && militaryInfo.assignments.length > 0) {
        militaryInfo.assignments.forEach(assignment => {
          if (assignment.flag) {
            imagesToPreload.push(assignment.flag);
          }
        });
      }
    }

    // Preload all images
    preloadImages(imagesToPreload)
      .then((results) => {
        // Count successful loads
        const successCount = results.filter(img => img !== null).length;
        console.log(`Preloaded ${successCount}/${imagesToPreload.length} images successfully`);
        setIsLoading(false);
      })
      .catch(error => {
        console.warn('Error in image preloading process', error);
        setIsLoading(false);
      });
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
