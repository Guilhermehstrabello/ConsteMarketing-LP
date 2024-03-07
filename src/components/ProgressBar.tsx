"use client"
// components/ProgressBar.tsx
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollPosition > 0); // Define isVisible como verdadeiro se houver rolagem
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-1 z-20 bg-white ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="h-full bg-orange-500" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
};

export default ProgressBar;
