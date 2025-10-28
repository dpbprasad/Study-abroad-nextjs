'use client';

import { useEffect } from 'react';

export default function VanillaTiltInitializer() {
  useEffect(() => {
    // Load vanilla-tilt script
    const script = document.createElement('script');
    script.src = '/assets/js/vendor/vanilla-tilt.js';
    script.async = true;

    script.onload = () => {
      // Initialize tilt on elements with data-tilt attribute
      const initTilt = () => {
        if (typeof window !== 'undefined' && (window as any).VanillaTilt) {
          const elements = document.querySelectorAll('[data-tilt]');
          elements.forEach((element) => {
            if (element && !(element as any).vanillaTilt) {
              (window as any).VanillaTilt.init(element, {
                max: 15,
                speed: 400,
                glare: false,
                scale: 1.05
              });
            }
          });
        }
      };

      // Initial init
      initTilt();

      // Re-init on route changes (for SPA navigation)
      const observer = new MutationObserver(initTilt);
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
