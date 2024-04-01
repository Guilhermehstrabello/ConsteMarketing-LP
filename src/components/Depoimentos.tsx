"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

export function Depoimentos() {

    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Função para animar o fade-in
        const fadeIn = (elements: HTMLElement[]) => {
            gsap.set(elements, { opacity: 0 });
            gsap.to(elements, {
                opacity: 1,
                duration: 4,
                ease: 'power2.inOut',
            });
        };

        const div1Element = div1Ref.current;
        const div2Element = div2Ref.current;
        const card1Element = card1Ref.current;
        const card2Element = card2Ref.current;
        const card3Element = card3Ref.current;
        const card4Element = card4Ref.current;
        const targetElement = targetRef.current;

        if (!div1Element || !div2Element || !targetElement || hasAnimated || !card1Element || !card2Element || !card3Element || !card4Element) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fadeIn([div1Element, div2Element]);
                    setHasAnimated(true);  // Define hasAnimated como true após a animação
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(targetElement);

        // Limpeza
        return () => {
            observer.unobserve(targetElement);
        };
    }, [hasAnimated]);

    return (
        <>
            <div ref={targetRef}>
                <div ref={div1Ref} className="lg:h-[736px] bg-laranja">
                    <h1 className="text-white text-center lg:p-16 p-10 lg:text-3xl text-2xl">O que nossos clientes falam sobre nós?</h1>
                    <div ref={div2Ref} className="flex lg:flex-row flex-col justify-center items-center mt-20 lg:gap-20 gap-10">
                        <div ref={card1Ref} className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                            <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Juliano Pinheiro</h6>
                            <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Já realizamos vários negócios com eles. São honestos e atenciosos,recomendo.</p>
                        </div>
                        <div ref={card2Ref} className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                            <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Alessander Ventaroli</h6>
                            <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Super profissionais, atendimento personalizado, super transparentes com as acções feitas, com relatórios e reuniões assim que solicitados.</p>
                        </div>
                        <div ref={card3Ref} className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                            <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Jackeline Santos</h6>
                            <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Melhor empresa de marketing !! Recomendo.</p>
                        </div>
                        <div ref={card4Ref} className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                            <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Dinda Shinhe</h6>
                            <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Excelente! ficamos surpresos o retorno foi imediato. Muito obrigada!</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="lg:p-4 p-2 bg-purple-800 mt-16 mb-16 lg:text-white md:text-white text-white font-bold rounded-lg hover:bg-white hover:text-laranja duration-300 w-36 hover:scale-110" onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('form');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            Contato
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}