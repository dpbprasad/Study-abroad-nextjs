'use client';

import { useEffect } from 'react';

export default function ColorProvider() {
  useEffect(() => {
    // TEMPORARILY DISABLED: Dynamic color fetching from database
    // This feature will be re-enabled once the database connection is stable on Vercel

    // Set default colors directly
    const root = document.documentElement;

    // Default colors (matching original design)
    root.style.setProperty('--rr-theme-primary', '#86BC42');      // Light Green
    root.style.setProperty('--rr-theme-secondary', '#86BC42');    // Light Green
    root.style.setProperty('--rr-heading-primary', '#044421');    // Dark Green
    root.style.setProperty('--rr-background-dark-green', '#044421'); // Dark Green
    root.style.setProperty('--rr-text-body', '#727272');
    root.style.setProperty('--rr-text-primary', '#000000');
    root.style.setProperty('--rr-background-gray', '#F1F5EB');
    root.style.setProperty('--rr-common-white', '#FFFFFF');
    root.style.setProperty('--rr-common-black', '#000000');
    root.style.setProperty('--rr-body-primary', '#ffffff');
    root.style.setProperty('--rr-border-primary', '1px solid #E3DBD8');

    /* ORIGINAL CODE - DISABLED FOR NOW
    const fetchAndApplyColors = async () => {
      try {
        const res = await fetch('/api/colors');
        const colorSettings = await res.json();

        if (colorSettings) {
          root.style.setProperty('--rr-theme-primary', colorSettings.lightGreen);
          root.style.setProperty('--rr-theme-secondary', colorSettings.lightGreen);
          root.style.setProperty('--rr-heading-primary', colorSettings.darkGreen);
          root.style.setProperty('--rr-background-dark-green', colorSettings.darkGreen);
        }
      } catch (error) {
        console.error('Error fetching color settings:', error);
      }
    };

    fetchAndApplyColors();
    */
  }, []);

  return null; // This component doesn't render anything
}
