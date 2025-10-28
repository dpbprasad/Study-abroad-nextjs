'use client';

import { useEffect, useState } from 'react';

export default function ScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = scrollableHeight > 0 ? Math.round((scrollTop / scrollableHeight) * 100) : 0;

      setScrollPercentage(percentage);

      // Show/hide based on scroll position
      setIsVisible(scrollTop > 300);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="scroll-percentage"
      className={isVisible ? 'active' : ''}
      onClick={scrollToTop}
      style={{
        cursor: 'pointer',
        background: `conic-gradient(var(--rr-theme-primary) ${scrollPercentage}%, var(--rr-common-white) ${scrollPercentage}%)`
      }}
    >
      <span id="scroll-percentage-value">
        {scrollPercentage >= 96 ? (
          <i className="fa-sharp fa-regular fa-arrow-up-long"></i>
        ) : (
          `${scrollPercentage}%`
        )}
      </span>
    </div>
  );
}
