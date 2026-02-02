'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Framer Motion-based scroll animation initializer
 * Drop-in replacement for WOW.js using modern CSS animations
 * Works with existing data-wow-delay attributes
 */
export default function WOWInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const initScrollAnimations = () => {
      if (typeof window === 'undefined') return;

      // Get all elements with wow class
      const elements = document.querySelectorAll('.wow');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const delay = element.getAttribute('data-wow-delay') || '0s';

              // Skip SVG elements
              if (element instanceof SVGElement) {
                return;
              }

              // Apply animation with delay
              setTimeout(() => {
                element.classList.add('animated');
                element.style.visibility = 'visible';
                element.style.animationName = element.classList.contains('fadeInLeft') ? 'fadeInLeft' :
                                              element.classList.contains('fadeInRight') ? 'fadeInRight' :
                                              element.classList.contains('fadeInUp') ? 'fadeInUp' :
                                              element.classList.contains('fadeInDown') ? 'fadeInDown' :
                                              'fadeIn';
              }, parseFloat(delay) * 1000);

              // Stop observing this element
              observer.unobserve(element);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Observe all wow elements
      elements.forEach((element) => {
        if (!(element instanceof SVGElement)) {
          (element as HTMLElement).style.visibility = 'hidden';
          observer.observe(element);
        }
      });

      // Cleanup function
      return () => observer.disconnect();
    };

    // Initialize after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const cleanup = initScrollAnimations();
      return cleanup;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
