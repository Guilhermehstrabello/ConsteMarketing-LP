"use client"
import React from 'react';

export function HeroSection() {
    return (
        <>
            <div className="relative">
                <div className="absolute left-0 top-40 transform -translate-y- 1/2 w-36 h-36 bg-laranja blur-3xl rounded-full"></div>
                <div className="absolute right-0 top-40 transform -translate-y-1/2 w-36 h-36 bg-roxo blur-3xl rounded-full"></div>
            </div>
            <div className="max-w-screen-lg mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                <div className="max-h-[400px] md:max-h-[600px] lg:max-h-[800px] flex justify-center items-center mt-20">
                    <div className="text-center">
                        <h1 className="text-laranja xl:text-6xl lg:text-4xl md:text-3xl text-3xl mb-4 font-Montserrat">
                            Busca Constância Na
                        </h1>
                        <h1 className="text-laranja select-laranja flex flex-col items-center xl:text-6xl lg:text-3xl md:text-3xl text-3xl font-Montserrat">
                            Jornada Rumo Ao
                            <span className="text-white xl:text-6xl lg:text-4xl md:text-3xl text-3xl bg-laranja p-2 font-Montserrat">
                                Topo?
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center space-y-10 md:space-y-4">
                <h2 className="font-bold mt-20 text-roxo text-center lg:text-3xl md:text-2xl text-xl font-Montserrat-Bold">Conte Conosco para Alcançar Seus Objetivos!</h2>
            </div>
            <div className="flex justify-center items-center space-y-4">
                <button className="md:p-3 lg:p-4 p-2 mt-12 text-base bg-laranja m-10 text-white lg:text-white md:text-white font-bold rounded-lg hover:bg-roxo duration-300 font-NeueMontreal-Bold antialiased">Conheça nosso trabalho</button>
            </div>
            <div>
                <img src="/images/Ilustração.png" alt="Ilustração" className="mx-auto w-56 h-56 m-14" />
            </div>
        </>
    )
}