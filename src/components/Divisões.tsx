"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function Divisoes() {

    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Função para animar o fade-in
        const fadeIn = (elements: HTMLElement[]) => {
            gsap.set(elements, { opacity: 0 });
            gsap.to(elements, {
                opacity: 1,
                duration: 3,
                ease: 'back.inOut',
            });
        };

        const div1Element = div1Ref.current;
        const div2Element = div2Ref.current;
        const targetElement = targetRef.current;

        if (!div1Element || !div2Element || !targetElement || hasAnimated) return;

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
    }, [hasAnimated]);  // Adicionado hasAnimated como dependência

    return (
        <>
            <div ref={targetRef}>
                <div ref={div1Ref}>
                    <h1 className="text-laranja text-center xl:text-3xl md:text-3xl text-2xl mt-16 ">
                        Contamos Com Uma Rede de Divisões Estratégicas
                    </h1>
                    <h3 className="text-roxo text-center mt-12 lg:text-base text-base antialiased">Nossa empresa é divida em 3 divisões, visando entregas com maior qualidade do serviço que você está <br /> contratando conosco, e as 3 são essenciais para você criar sua presença online e conquistar mais clientes.</h3>
                </div>
                <div ref={div2Ref} className="flex lg:flex-row md:flex-col flex-col gap-8 items-center justify-center mt-14 ">
                    <div className="w-[380px] h-[330px] flex flex-col items-center p-6 justify-between bg-white border-indigo-600 border-2 rounded-xl group hover:scale-105 hover:bg-indigo-600 duration-300">
                        <h4 className="text-indigo-600 text-2xl duration-300 group-hover:text-white">Conste Performance</h4>
                        <p className="text-indigo-600 text-center mt-4 duration-300 group-hover:text-white">Conste Performance é responsável por trazer a você aumento nas vendas e conversões do seu site.</p>
                        <p className="text-indigo-600 text-center text-lg mt-4 duration-300 group-hover:text-white">(Em Breve)</p>
                        {/*<button className="mt-4 w-72 h-14 p-2 text-white font-bold font-NeueMontreal-Bold text-base rounded-md group-hover:text-green-500 group-hover:bg-white bg-green-500 hover:scale-110 duration-300">Quero aumentar minhas vendas</button>*/}
                    </div>
                    <div className="w-[380px] h-[330px] flex flex-col items-center p-6 justify-between bg-white border-blue-500 border-2 rounded-xl group hover:scale-105 hover:bg-blue-500 duration-300">
                        <h4 className="text-blue-500 text-2xl group-hover:text-white">Conste Tech</h4>
                        <p className="text-blue-500 text-center mt-4 group-hover:text-white">Conste Tech é responsável por trazer a você um site de alta conversão e fazer com que você venda pela internet.</p>
                        <p className="text-blue-500 text-center text-lg mt-4 group-hover:text-white">(Em Breve)</p>
                        {/*<button className="mt-4 w-72 h-14 p-2 text-white font-bold font-NeueMontreal-Bold text-base rounded-md bg-blue-500 group-hover:text-blue-500 group-hover:bg-white hover:scale-110 duration-300">Quero ter meu próprio site</button>*/}
                    </div>
                    <div className="w-[380px] h-[330px] flex flex-col items-center p-6 justify-between bg-white border-teal-500 border-2 rounded-xl group hover:scale-105 hover:bg-teal-500 duration-300">
                        <h4 className="text-teal-500 font-bold text-2xl group-hover:text-white">Conste Creators</h4>
                        <p className="text-teal-500 text-center mt-4 group-hover:text-white">Conste Creators é responsável por fazer com que você tenha presença online atráves das redes sociais.</p>
                        <p className="text-teal-500 text-center text-lg mt-4 group-hover:text-white">(Em Breve)</p>
                        {/*<button className="mt-4 w-72 h-14 p-2 text-white font-bold font-NeueMontreal-Bold text-base rounded-md bg-teal-500 group-hover:text-teal-500 group-hover:bg-white hover:scale-110 duration-300">Quero ter uma presença online</button>*/}
                    </div>
                </div>
            </div>
        </>
    )
}