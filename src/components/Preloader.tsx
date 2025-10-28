'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide body overflow while loading
    document.body.style.overflow = 'hidden';

    // Add loaded class to body to show content
    document.body.classList.add('loaded');

    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsLoading(false);
    document.body.style.overflow = '';
  };

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          width: '40px',
          height: '40px',
          background: '#034833',
          color: '#fff',
          fontSize: '20px',
          lineHeight: '40px',
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          zIndex: 10
        }}
      >
        x
      </div>
      <div style={{ width: '80px', textAlign: 'center' }}>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#034833',
            borderRadius: '100%',
            display: 'inline-block',
            animation: 'sk-bounce 1.4s ease-in-out -0.32s infinite both',
            marginRight: '5px'
          }}
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#034833',
            borderRadius: '100%',
            display: 'inline-block',
            animation: 'sk-bounce 1.4s ease-in-out -0.16s infinite both',
            marginRight: '5px'
          }}
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#034833',
            borderRadius: '100%',
            display: 'inline-block',
            animation: 'sk-bounce 1.4s ease-in-out 0s infinite both'
          }}
        />
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `
      }} />
    </div>
  );
}
