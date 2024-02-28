"use client"

export function HeroSection() {
    return (
        <>
            <div className="lg:w-80 lg:h-80 md:w-60 md:h-60 bg-orange-400 rounded-[100%] absolute blur-3xl lg:left-[-6%] lg:top-[10%] md:left-[-20%] md:top-[10%]"></div>
            <div className="lg:w-80 lg:h-80 md:w-60 md:h-60 bg-purple-800 rounded-[100%] absolute blur-3xl left-[90%] top-[10%] md:left-[90%] md:top-[10%]"></div>
                <div className="max-h-96 max-w-[1920px] flex justify-center items-center m-20">
                    <div className="text-center">
                        <h1 className="text-orange-400 font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl mb-4">
                            Busca Constância Na
                        </h1>
                        <h1 className="text-orange-400 flex flex-col items-center font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">
                            Jornada Rumo Ao
                            <span className="text-purple-800 bg-orange-400 p-3">
                                Topo?
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center items-center space-y-4">
                    <h2 className="font-bold lg:text-4xl text-purple-800 md:text-2xl sm:text-1xl">Conte Conosco para Alcançar Seus Objetivos!</h2>
                </div>
                <div className="flex justify-center items-center space-y-4">
                    <button className="lg:p-3 bg-orange-500 m-10 lg:text-white md:text-white font-bold rounded-lg hover:bg-purple-800 duration-300">Conheça nosso trabalho</button>
                </div>
                <div>
                    <img src="/Ilustração.png" alt="Ilustração" className="m-auto w-56 h-56 mt-3" />
                </div>
        </>
    )
}