import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useIntersectionObserver = (elementRef: React.RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, callback]);
};

const Clientes = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const sliderLeftRef = useRef<HTMLDivElement>(null);
  const sliderRightRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (animationStarted) return;

    const sliderLeft = sliderLeftRef.current;
    const sliderRight = sliderRightRef.current;

    if (!sliderLeft || !sliderRight) return;

    const imagesLeft = Array.from(sliderLeft.children) as HTMLDivElement[];
    const imagesRight = Array.from(sliderRight.children) as HTMLDivElement[];

    gsap.set(imagesLeft, { x: '-650%' });
    gsap.set(imagesRight, { x: '1100%' });

    const tlLeft = gsap.timeline({ onComplete: () => setAnimationStarted(true) });
    tlLeft.to(imagesLeft, {
      x: '0%',
      duration: 6,
      stagger: 0.2,
      delay: 1,
      ease: 'elastic.inOut',
    });

    const tlRight = gsap.timeline({ onComplete: () => setAnimationStarted(true) });
    tlRight.to(imagesRight, {
      x: '0%',
      duration: 6,
      stagger: 0.2,
      delay: 1,
      ease: 'elastic.inOut',
    });

    return () => {
      tlLeft.kill();
      tlRight.kill();
    };
  };

  const fadeInAnimation = () => {
    if (animationStarted) return;

    const h1Element = h1Ref.current;

    if (!h1Element) return;

    gsap.from(h1Element, {
      opacity: 0,
      duration: 3.5,
    });

    setAnimationStarted(true);
  };

  useEffect(() => {
    startAnimation(); // Chame a função startAnimation imediatamente após a montagem do componente
  }, []);

  useIntersectionObserver(sliderLeftRef, startAnimation);
  useIntersectionObserver(sliderRightRef, startAnimation);
  useIntersectionObserver(h1Ref, fadeInAnimation);

  return (
    <>
      <h1 ref={h1Ref} className="text-center font-bold lg:text-4xl text-3xl text-laranja mt-32 mb-24">
        Nossos Clientes
      </h1>
      <div className="container mx-auto flex justify-center items-center py-8">
        <div className="grid grid-cols-1 grid-rows-2 gap-y-24 md:grid-cols-1 gap-x-24 lg:gap-x-36 overflow-hidden">
          <div ref={sliderLeftRef} className="w-full h-64 lg:justify-center lg:items-center lg:flex flex-shrink-0 lg:overflow-hidden">
            <img className="inline-block ml-10" src="/images/queropraxia.png" alt="Queropraxia" />
            <img className="inline-block ml-10" src="/images/arita.png" alt="Arita e Ventaroli Imóveis" />
            <img className="inline-block ml-10" src="/images/sogima.png" alt="Sogima" />
            <img className="inline-block ml-10" src="/images/agrotuba.png" alt="Agrotuba Alimentação Animal e Acessórios Pet" />
            <img className="inline-block ml-10" src="/images/qajuste.png" alt="Q Ajuste" />
            <img className="inline-block ml-6" src="/images/ligia.png" alt="Ligia Aggio" />
          </div>
          <div ref={sliderRightRef} className="w-full h-64 lg:justify-center lg:items-center lg:flex flex-shrink-0 lg:overflow-hidden">
            <img className="inline-block ml-6" src="/images/castelo_esfiha.png" alt="Castelo da Esfiha" />
            <img className="inline-block ml-6" src="/images/draethel.png" alt="Sfeir Odontologia" />
            <img className="inline-block ml-6" src="/images/ellabelle.png" alt="Ella Belle Estética" />
            <img className="inline-block ml-6" src="/images/jackeline.png" alt="Jackeline Santos Fisioterapeuta" />
            <img className="inline-block ml-6" src="/images/hidesushi.png" alt="Hide Sushi Cozinha Oriental" />
            <img className="inline-block ml-6" src="/images/leluhkids.png" alt="Leluh Kids" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;
