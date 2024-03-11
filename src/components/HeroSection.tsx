"use client"

export function HeroSection() {
    return (
        <>
            <div className="lg:w-80 lg:h-80 md:w-60 md:h-60 bg-laranja rounded-[100%] absolute blur-3xl lg:left-[-6%] lg:top-[10%] md:left-[-20%] md:top-[10%]"></div>
            <div className="lg:w-80 lg:h-80 md:w-60 md:h-60 bg-roxo rounded-[100%] absolute blur-3xl lg:left-[90%] lg:top-[10%] md:left-[90%] md:top-[10%]"></div>
                <div className="max-h-96 max-w-[1920px] flex justify-center items-center m-20">
                    <div className="text-center">
                        <h1 className="text-laranja xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl mb-4 font-Montserrat">
                            Busca Constância Na
                        </h1>
                        <h1 className="text-laranja flex flex-col items-center xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-Montserrat">
                            Jornada Rumo Ao
                            <span className="text-roxo bg-laranja p-3 font-Montserrat">
                                Topo?
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center items-center space-y-4">
                    <h2 className="font-bold lg:text-4xl text-roxo md:text-2xl sm:text-1xl font-Montserrat-Bold">Conte Conosco para Alcançar Seus Objetivos!</h2>
                </div>
                <div className="flex justify-center items-center space-y-4">
                    <button className="lg:p-3 bg-laranja m-10 lg:text-white md:text-white font-bold rounded-lg hover:bg-roxo duration-300 font-NeueMontreal-Bold antialiased">Conheça nosso trabalho</button>
                </div>
                <div>
                    <img src="/Ilustração.png" alt="Ilustração" className="m-auto w-56 h-56 mt-3" />
                </div>
        </>
    )
}