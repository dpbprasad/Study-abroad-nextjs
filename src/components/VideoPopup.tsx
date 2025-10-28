'use client';

import { useEffect, useState } from 'react';

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const handleVideoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const videoLink = target.closest('.popup-video') as HTMLAnchorElement;

      if (videoLink) {
        e.preventDefault();
        const url = videoLink.href;

        // Extract YouTube video ID
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
          videoId = url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
          videoId = url.split('youtu.be/')[1].split('?')[0];
        }

        if (videoId) {
          setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('click', handleVideoClick);
    return () => document.removeEventListener('click', handleVideoClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    setVideoUrl('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="video-popup-overlay"
      onClick={closePopup}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <button
        onClick={closePopup}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '40px',
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '1',
          zIndex: 100000,
        }}
      >
        &times;
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          aspectRatio: '16/9',
        }}
      >
        <iframe
          src={videoUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
