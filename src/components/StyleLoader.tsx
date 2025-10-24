'use client';

import { useEffect } from 'react';

export default function StyleLoader() {
  useEffect(() => {
    // This runs only on the client side after hydration
    const styles = [
      '/assets/css/vendor/animate.min.css',
      '/assets/css/plugins/swiper.min.css',
      '/assets/css/vendor/fontawesome-pro.css',
      '/assets/css/vendor/spacing.css',
      '/assets/css/main.css'
    ];

    // Check if styles are already loaded
    const existingLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map((link: Element) => (link as HTMLLinkElement).href);

    styles.forEach((href) => {
      const fullHref = href.startsWith('http') ? href : window.location.origin + href;

      // Only add if not already present
      if (!existingLinks.some(existing => existing.includes(href))) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // Add Google Font
    const fontHref = 'https://fonts.googleapis.com/css2?family=Sofia&display=swap';
    if (!existingLinks.includes(fontHref)) {
      const preconnect1 = document.createElement('link');
      preconnect1.rel = 'preconnect';
      preconnect1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://fonts.gstatic.com';
      preconnect2.crossOrigin = '';
      document.head.appendChild(preconnect2);

      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = fontHref;
      document.head.appendChild(fontLink);
    }
  }, []);

  return null;
}
