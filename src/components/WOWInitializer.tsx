'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function WOWInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    // Dynamically import WOW.js only on client side
    const initWOW = async () => {
      if (typeof window !== 'undefined') {
        try {
          // Remove wow classes from SVG elements and their children to prevent errors
          const svgElements = document.querySelectorAll('svg.wow, svg .wow, svg *, svg');
          svgElements.forEach((el) => {
            if (el.tagName === 'svg' || el.tagName === 'SVG' || el instanceof SVGElement) {
              el.classList.remove('wow', 'animated', 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'fadeInDown', 'fadeIn');
            }
          });

          const WOW = (await import('wow.js')).default;

          // Initialize WOW.js with custom filter to exclude SVG elements
          const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null,
            resetAnimation: true,
            callback: function(box: any) {
              // Skip SVG elements
              if (box instanceof SVGElement) {
                return;
              }
            }
          });

          wow.init();
        } catch (error) {
          console.error('WOW.js initialization error:', error);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initWOW();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
