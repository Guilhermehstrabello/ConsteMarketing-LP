"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

export function HeroSection() {

    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const orangeBlurRef = useRef<HTMLDivElement>(null);
    const purpleBlurRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Função para animar o blur com fade-in
        const animateBlur = (element: HTMLElement) => {
            gsap.set(element, { opacity: 0 });  // Define a opacidade inicial como 0
            gsap.to(element, {
                opacity: 1,
                x: gsap.utils.random(-50, 50),
                y: gsap.utils.random(-100, 100),
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        };

        // Função para animar o fade-in
        const fadeIn = (elements: HTMLElement[]) => {
            gsap.set(elements, { opacity: 0 });
            gsap.to(elements, {
                opacity: 1,
                duration: 3.5,
                ease: 'back.inOut',
            });
        };

        const div1Element = div1Ref.current;
        const div2Element = div2Ref.current;
        const buttonElement = buttonRef.current;
        const imageElement = imageRef.current;
        const orangeBlurElement = orangeBlurRef.current;
        const purpleBlurElement = purpleBlurRef.current;

        if (!div1Element || !div2Element || !buttonElement || !imageElement || !orangeBlurElement || !purpleBlurElement) return;

        // Animações de blur
        animateBlur(orangeBlurElement);
        animateBlur(purpleBlurElement);

        // Animações de fade-in
        fadeIn([div1Element, div2Element, buttonElement, imageElement]);

    }, []);

    return (
        <>
            <div className="relative">
                <div ref={orangeBlurRef} className="absolute left-0 top-40 transform -translate-y-1/2 w-36 h-36 bg-laranja blur-3xl rounded-full"></div>
                <div ref={purpleBlurRef} className="absolute right-0 top-40 transform -translate-y-1/2 w-36 h-36 bg-roxo blur-3xl rounded-full"></div>
            </div>
            <div className="max-w-screen-lg mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 font-bold">
                <div className="max-h-[400px] md:max-h-[600px] lg:max-h-[800px] flex justify-center items-center mt-20">
                    <div ref={div1Ref} className="text-center">
                        <h1 className="text-laranja xl:text-6xl lg:text-4xl md:text-3xl text-3xl mb-4">
                            Busca Constância Na
                        </h1>
                        <h1 className="text-laranja select-laranja flex flex-col items-center xl:text-6xl lg:text-3xl md:text-3xl text-3xl">
                            Jornada Rumo Ao
                            <span className="text-white xl:text-6xl lg:text-4xl md:text-3xl text-3xl bg-laranja p-2">
                                Topo?
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            <div ref={div2Ref} className="flex justify-center items-center space-y-10 md:space-y-4">
                <h2 className="mt-20 text-roxo text-center lg:text-3xl md:text-2xl text-xl">Conte Conosco para Alcançar Seus Objetivos!</h2>
            </div>
            <div ref={buttonRef} className="flex justify-center items-center space-y-4">
                <button className="md:p-3 lg:p-4 p-2 mt-12 text-base bg-laranja m-10 text-white lg:text-white md:text-white rounded-lg hover:bg-roxo hover:scale-110 duration-300 antialiased"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('divisoes');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                    Conheça nosso trabalho
                </button>
            </div>
            <div ref={imageRef}>
                <img src="/images/Ilustração.png" alt="Ilustração" className="mx-auto w-56 h-56 m-8" />
            </div>
        </>
    )
}