import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Rodape() {

    const logoRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const socialMediaRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const copyrightRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (logoRef.current) {
            gsap.from(logoRef.current.children, {
                opacity: 0, // Opacidade inicial para 0
                y: 1,
                duration: 2,
                stagger: 0.2,
                onComplete: () => {
                    gsap.to(logoRef.current!.children, {
                        opacity: 1, // Restaura a opacidade para 1 após a animação
                        duration: 1.5,
                    });
                },
            });
        }

        if (linksRef.current) {
            gsap.from(linksRef.current.children, {
                opacity: 0, // Opacidade inicial para 0
                y: 1,
                duration: 2.5,
                stagger: 0.2,
                onComplete: () => {
                    gsap.to(linksRef.current!.children, {
                        opacity: 1, // Restaura a opacidade para 1 após a animação
                        duration: 1.5,
                    });
                },
            });
        }

        if (socialMediaRef.current) {
            gsap.from(socialMediaRef.current.children, {
                opacity: 0, // Opacidade inicial para 0
                y: 1,
                duration: 4,
                stagger: 0.2,
                onComplete: () => {
                    gsap.to(socialMediaRef.current!.children, {
                        opacity: 1, // Restaura a opacidade para 1 após a animação
                        duration: 1.5,
                    });
                },
            });
        }

        if (barRef.current) {
            gsap.from(barRef.current, {
                opacity: 0, // Opacidade inicial para 0
                y: 1,
                duration: 4.5,
                stagger: 0.2,
                onComplete: () => {
                    gsap.to(barRef.current!, {
                        opacity: 1,
                        duration: 1.5,
                    });
                },
            });
        }

        if (copyrightRef.current) {
            gsap.from(copyrightRef.current, {
                opacity: 0, // Opacidade inicial para 0
                y: 1,
                duration: 5,
                stagger: 0.2,
                onComplete: () => {
                    gsap.to(copyrightRef.current!, {
                        opacity: 1,
                        duration: 1.5,
                    });
                },
            });
        }

    }, []);

    return (
        <>
            <div className="lg:h-[480px] w-full bg-laranja">
                <div className="flex lg:flex-row flex-col justify-center lg:gap-96 mx-48">
                    <div ref={logoRef} className="flex flex-col items-center text-lg text-center justify-center">
                        <img src="/images/logo.png" alt="Logo Conste Marketing" className="mt-10 lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] w-full h-full" />
                        <p className="text-white text-base flex flex-col w-[200px] hover:underline duration-300"><a href="#">19 97427-4982</a></p>
                        <p className="text-white text-base flex flex-col mt-3 hover:underline duration-500"><a href="mailto:eduardo@constemarketing.com.br">support@lift.agency</a></p>
                    </div>
                    <div ref={linksRef} className="flex flex-col text-lg text-center items-center justify-center gap-4">
                        <p className="text-white text-2xl mt-20 font-bold">Links</p>
                        <p className="text-white text-1xl hover:underline duration-300 hover:cursor-pointer">Clientes</p>
                        <p className="text-white text-1xl hover:underline duration-300 hover:cursor-pointer">Serviços</p>
                        <p className="text-white text-1xl hover:underline duration-300 hover:cursor-pointer">Porque a gente?</p>
                        <p className="text-white text-1xl hover:underline duration-300 hover:cursor-pointer">Depoimentos</p>
                        <p className="text-white text-1xl hover:underline duration-300 hover:cursor-pointer">Contato</p>
                    </div>
                    <div ref={socialMediaRef} className="flex flex-col items-center justify-center gap-3">
                        <p className="text-white text-2xl text-center flex flex-col mt-16 font-bold">Redes Sociais</p>
                        <div className="flex flex-row gap-10 items-center mt-10">
                            <a href="https://www.instagram.com/constemarketing/" target="_blank" className="[&>svg]:h-7 [&>svg]:w-7 border-slate-200/15 border-2 p-2 rounded-full hover:scale-110 duration-300 hover:bg-cinza">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/constemarketing/" target="_blank" className="[&>svg]:h-7 [&>svg]:w-7 border-slate-200/15 border-2 p-2 rounded-full hover:scale-110 duration-300 hover:bg-cinza">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/constemarketing/" target="_blank" className="[&>svg]:h-7 [&>svg]:w-7 border-slate-200/15 border-2 p-2 rounded-full hover:scale-110 duration-300 hover:bg-cinza">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={barRef} className="lg:w-[1720px] w-[200px] bg-white h-1 m-auto mt-7"></div>
                <div className="flex justify-center items-center flex-row mt-10">
                    <p ref={copyrightRef} className="text-white">© 2024 Conste Marketing. Todos Direitos reservados.</p>
                </div>
            </div>
        </>
    );
}
