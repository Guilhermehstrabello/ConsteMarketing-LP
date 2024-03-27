import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useIntersectionObserver = (elementRef: React.RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          } else {
            // Aqui você pode pausar ou reverter a animação se necessário
          }
        });
      },
      {
        threshold: 0.5, // Pode ajustar o valor conforme necessário
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
  const sliderLeftRef = useRef<HTMLDivElement>(null);
  const sliderRightRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    const sliderLeft = sliderLeftRef.current;
    const sliderRight = sliderRightRef.current;

    if (!sliderLeft || !sliderRight) return;

    const imagesLeft = Array.from(sliderLeft.children) as HTMLDivElement[];
    const imagesRight = Array.from(sliderRight.children) as HTMLDivElement[];

    gsap.set(imagesLeft, { x: '-550%' });
    gsap.set(imagesRight, { x: '1100%' });

    const tlLeft = gsap.timeline({ repeat: 0 });
    tlLeft.to(imagesLeft, {
      x: '0%',
      duration: 2,
      stagger: 0.5,
      ease: 'linear',
    });

    const tlRight = gsap.timeline({ repeat: 0 });
    tlRight.to(imagesRight, {
      x: '0%',
      duration: 2,
      stagger: 0.5,
      ease: 'linear',
    });

    return () => {
      tlLeft.kill();
      tlRight.kill();
    };
  };

  useIntersectionObserver(sliderLeftRef, startAnimation);
  useIntersectionObserver(sliderRightRef, startAnimation);

  return (
    <>
      <h1 className="text-center font-bold lg:text-4xl text-3xl text-laranja mt-32 mb-24">
        Nossos Clientes
      </h1>
      <div className="container mx-auto flex justify-center items-center py-8">
        <div className="grid grid-cols-1 grid-rows-2 gap-y-24 md:grid-cols-1 gap-x-24 lg:gap-x-36 overflow-hidden">
          <div ref={sliderLeftRef} className="w-full h-64 flex-shrink-0 lg:overflow-hidden">
            <img className="inline-block ml-10" src="/images/queropraxia.png" alt="Queropraxia" />
            <img className="inline-block ml-10" src="/images/arita.png" alt="Arita e Ventaroli Imóveis" />
            <img className="inline-block ml-10" src="/images/sogima.png" alt="Sogima" />
            <img className="inline-block ml-10" src="/images/agrotuba.png" alt="Agrotuba Alimentação Animal e Acessórios Pet" />
            <img className="inline-block ml-10" src="/images/taket.png" alt="Taket Marketing" />
            <img className="inline-block ml-10" src="/images/qajuste.png" alt="Q Ajuste" />
          </div>
          <div ref={sliderRightRef} className="w-full h-64 flex-shrink-0 lg:overflow-hidden">
            <img className="inline-block ml-6" src="/images/ligia.png" alt="Ligia Aggio" />
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
