import { useState, useEffect } from 'react';

/**
 * Hook to create a simple vertical parallax effect based on scroll position.
 * Respects 'prefers-reduced-motion'.
 * 
 * @param speed Factor of scroll speed. Negative = moves up, Positive = moves down relative to scroll.
 * @returns translateY value in pixels
 */
export function useParallax(speed: number = 0.2) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      return; // Do nothing if reduced motion is preferred
    }

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return offset;
}
