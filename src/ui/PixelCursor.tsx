import React, { useEffect } from 'react';

const PixelCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('pixel-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default PixelCursor;
