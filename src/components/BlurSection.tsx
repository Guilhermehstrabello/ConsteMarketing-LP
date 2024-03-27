"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Blur() {

    const orangeBlurRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
  
      const animateBlur = (element: HTMLElement) => {
        gsap.to(element, {
          x: gsap.utils.random(-200, 200),
          y: gsap.utils.random(-100, 100),
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      };
  
      if (orangeBlurRef.current) {
        animateBlur(orangeBlurRef.current);
      }
  
    }, []);

    return(
        <>
            <div ref={orangeBlurRef} className="w-80 h-80 bg-laranja opacity-50 rounded-[100%] absolute blur-3xl mt-14 left-1/2 transform -translate-x-1/2"></div>
        </>
    )
}
