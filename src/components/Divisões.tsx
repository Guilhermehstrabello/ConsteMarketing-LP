"use client"

export function Divisoes() {
    return (
        <>
            <div>
            <div className="lg:w-60 lg:h-60 md:w-30 md:h-30 bg-purple-800 rounded-[100%] absolute blur-3xl lg:left-[-6%] top-[100%] md:left-[-10%] sm:left-[-8%]"></div>
                <h1 className="text-orange-400 text-center font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mt-16">
                    Contamos Com Uma Rede de Divisões Estratégicas
                </h1>
                <p className="text-purple-800 text-center font-semibold mt-12 lg:text-lg md:text-md sm:text-sm">Nossa empresa é divida em 3 divisões, visando entregas com maior qualidade do serviço que você está <br /> contratando conosco, e as 3 são essenciais para você criar sua presença online e conquistar mais clientes.</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center mt-14">
                <div className="w-[400px] h-[200px] flex flex-row items-center p-6 bg-white border-orange-500 border-2 rounded-xl">
                    <h2 className="text-orange-500">Conste Performance</h2>
                    <img src="/Ilustração.png" alt="" />
                </div>
                <div className="w-[400px] h-[200px] flex flex-row items-center p-6 bg-white border-orange-500 border-2 rounded-xl">
                    <h2 className="text-orange-500">Conste Tech</h2>
                    <img src="/Ilustração.png" alt="" />
                </div>
                <div className="w-[400px] h-[200px] flex flex-row items-center p-6 bg-white border-orange-500 border-2 rounded-xl">
                    <h2 className="text-orange-500">Conste Creators</h2>
                    <img src="/Ilustração.png" alt="" />
                    
                    <div className="flex flex-col items-stretch">
                        <button >Saiba Mais</button>
                    </div>
                </div>
            </div>
        </>
    )
}