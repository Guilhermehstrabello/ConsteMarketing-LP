"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function PorqueNos() {

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
                duration: 2.5,
                ease: 'circ.inOut',
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
                <div ref={div1Ref} className="flex mx-128 lg:flex-row flex-col justify-center items-center mt-[550px] mb-24">
                    <div ref={div2Ref} className="lg:w-1/2 lg:ml-32 m-10">
                        <h1 className="lg:text-4xl text-2xl mb-6 text-roxo">Porque escolher a gente?</h1>
                        <h2 className="lg:text-2xl text-lg mb-6 text-laranja">Venha Realizar Seus Objetivos Conosco</h2>
                        <p className="text-base mb-14">Na Conste Marketing entendemos seus <span className="text-laranja"> desejos e aspirações</span>. Com nossas soluções <br /> de marketing especializadas, podemos tornar seus sonhos uma realidade. Dê o <br /> próximo passo em direção ao sucesso escolhendo-nos como seu parceiro confiável.</p>
                        <div className="grid gap-4 justify-center">
                            <div ref={card1Ref} className="flex lg:flex-row flex-col gap-10 items-center">
                                <div className="w-20 h-20 bg-laranja rounded-full flex justify-center items-center">
                                    <img src="/images/qualidade.png" alt="Imagem" className="m-6 p-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Serviços de Marketing de Alta Qualidade</h2>
                                    <p className="text-base mt-4">Nossa expertise traz resultados excepcionais em todas as frentes do marketing digital. Nosso compromisso com a qualidade garante que cada aspecto de sua presença online seja cuidadosamente planejado e executado para alcançar o máximo impacto.</p>
                                </div>
                            </div>
                            <div ref={card2Ref} className="flex lg:flex-row flex-col gap-10 items-center mt-8">
                                <div className="w-20 h-20 bg-laranja rounded-full flex justify-center items-center">
                                    <img src="/images/setores.png" alt="Imagem" className="m-6 p-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Equipe Especializada em Setores Específicos</h2>
                                    <p className="text-base mt-4">Possuímos uma equipe diversificada de especialistas em marketing, cada um com experiência em setores específicos, como performance, tech e design, e social media. Com isso a Conste Marketing oferece estratégias altamente personalizadas e eficazes, adaptadas às necessidades e desafios únicos de cada setor.</p>
                                </div>
                            </div>
                            <div ref={card3Ref} className="flex lg:flex-row flex-col gap-10 items-center mt-8">
                                <div className="w-20 h-20 bg-laranja rounded-full flex justify-center items-center">
                                    <img src="/images/resultados.png" alt="Imagem" className="m-6 p-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Compromisso com Resultados Mensuráveis</h2>
                                    <p className="text-base mt-4">Nós adotamos uma abordagem orientada por resultados, definindo metas claras e mensuráveis para cada projeto. Além disso, nos comprometemos a fornecer relatórios detalhados e transparentes sobre o desempenho dos projetos, garantindo que os clientes possam acompanhar o progresso e avaliar o retorno sobre o investimento de forma tangível.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={card4Ref} className="lg:w-1/2 lg:ml-64 flex items-center w-3/5 h-3/5 my-10 justify-center">
                        <img src="/images/consultor.png" alt="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </>
    )
}