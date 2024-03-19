"use client"
import React from 'react';
import { CSSTransition } from 'react-transition-group';

export function HeroSection() {
    return (
        <>
            <div className="relative">
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={1000}
                    classNames="move-up-down"
                    unmountOnExit
                >
                    <div className="absolute top-36 left-0 w-60 h-60 bg-laranja blur-3xl"></div>
                </CSSTransition>

                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={1000}
                    classNames="move-up-down"
                    unmountOnExit
                >
                    <div className="absolute top-36 right-0 w-60 h-60 bg-roxo blur-3xl"></div>
                </CSSTransition>
            </div>

            <div className="max-h-96 max-w-[1920px] flex justify-center items-center m-20">
                <div className="text-center">
                    <h1 className="text-laranja xl:text-6xl lg:text-3xl md:text-2xl sm:text-xl mb-4 font-Montserrat">
                        Busca Constância Na
                    </h1>
                    <h1 className="text-laranja flex flex-col items-center xl:text-6xl lg:text-3xl md:text-2xl sm:text-xl font-Montserrat">
                        Jornada Rumo Ao
                        <span className="text-white bg-laranja p-3 font-Montserrat">
                            Topo?
                        </span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center space-y-4">
                <h2 className="font-bold text-roxo lg:text-3xl  md:text-2xl sm:text-xl font-Montserrat-Bold">Conte Conosco para Alcançar Seus Objetivos!</h2>
            </div>
            <div className="flex justify-center items-center space-y-4">
                <button className="lg:p-3 bg-laranja m-10 lg:text-white md:text-white font-bold rounded-lg hover:bg-roxo duration-300 font-NeueMontreal-Bold antialiased">Conheça nosso trabalho</button>
            </div>
            <div>
                <img src="/images/Ilustração.png" alt="Ilustração" className="m-auto w-56 h-56 mt-3" />
            </div>
        </>
    )
}