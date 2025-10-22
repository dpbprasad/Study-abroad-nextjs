'use client';

import { useEffect } from 'react';

export default function ColorProvider() {
  useEffect(() => {
    const fetchAndApplyColors = async () => {
      try {
        const res = await fetch('/api/colors');
        const colorSettings = await res.json();

        if (colorSettings) {
          // Apply the 2 main colors to CSS custom properties
          const root = document.documentElement;

          // Map Light Green (Primary Brand Color)
          root.style.setProperty('--rr-theme-primary', colorSettings.lightGreen);
          root.style.setProperty('--rr-theme-secondary', colorSettings.lightGreen);

          // Map Dark Green (Headings & Dark Backgrounds)
          root.style.setProperty('--rr-heading-primary', colorSettings.darkGreen);
          root.style.setProperty('--rr-background-dark-green', colorSettings.darkGreen);

          // Keep default values for other colors (not customizable)
          root.style.setProperty('--rr-text-body', '#727272');
          root.style.setProperty('--rr-text-primary', '#000000');
          root.style.setProperty('--rr-background-gray', '#F1F5EB');
          root.style.setProperty('--rr-common-white', '#FFFFFF');
          root.style.setProperty('--rr-common-black', '#000000');
          root.style.setProperty('--rr-body-primary', '#ffffff');
          root.style.setProperty('--rr-border-primary', '1px solid #E3DBD8');
        }
      } catch (error) {
        console.error('Error fetching color settings:', error);
      }
    };

    fetchAndApplyColors();
  }, []);

  return null; // This component doesn't render anything
}
