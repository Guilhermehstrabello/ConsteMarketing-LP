"use client"
export function Divisoes() {
    return (
        <>
            <div>
            <div className="lg:w-60 lg:h-60 md:w-30 md:h-30 bg-purple-800 rounded-[100%] absolute blur-3xl lg:left-[-6%] top-[100%] md:left-[-10%] sm:left-[-8%]"></div>
                <h1 className="text-laranja text-center font-bold font-Montserrat xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mt-16 ">
                    Contamos Com Uma Rede de Divisões Estratégicas
                </h1>
                <p className="text-roxo text-center font-bold mt-12 lg:text-lg md:text-md sm:text-sm font-Glacial">Nossa empresa é divida em 3 divisões, visando entregas com maior qualidade do serviço que você está <br /> contratando conosco, e as 3 são essenciais para você criar sua presença online e conquistar mais clientes.</p>
            </div>
            <div className="flex flex-row gap-8 items-center justify-center mt-14 ">
                <div className="w-[380px] h-[330px] flex flex-col items-center p-6 justify-between bg-white border-green-500 border-2 rounded-xl">
                    <h2 className="text-green-500 font-bold text-2xl font-Neue">Conste Performance</h2>
                    <p className="text-green-500 text-center mt-4 font-Glacial">Conste Performance é responsável por trazer a você aumento nas vendas e conversões do seu site.</p>
                    <button className="mt-4 w-72 h-14 p-2 text-white font-bold font-Neue text-base rounded-md bg-green-500 hover:scale-110 duration-300 ">Quero aumentar minhas vendas</button>
                </div>
                <div className="w-[380px] h-[330px] flex flex-col items-center p-6 justify-between bg-white border-blue-500 border-2 rounded-xl">
                    <h2 className="text-blue-500 font-bold text-2xl font-Neue">Conste Tech</h2>
                    <p className="text-blue-500 text-center mt-4 font-Glacial">Conste Tech é responsável por trazer a você um site de alta conversão e fazer com que você venda pela internet.</p>
                    <button className="mt-4 w-72 h-14 p-2 text-white font-bold font-Neue text-base rounded-md bg-blue-500 hover:scale-110 duration-300">Quero ter meu próprio site</button>
                </div>
                <div className="w-[380px] h-[330px] flex flex-col items-center p-6 justify-between bg-white border-teal-500 border-2 rounded-xl">
                    <h2 className="text-teal-500 font-bold text-2xl font-Neue">Conste Creators</h2>
                    <p className="text-teal-500 text-center mt-4 font-Glacial">Conste Creators é responsável por fazer com que você tenha presença online atráves das redes sociais.</p>
                    <div className="flex flex-col items-stretch">
                        <button className="mt-4 w-72 h-14 p-2 text-white font-bold font-Neue text-base rounded-md bg-teal-500 hover:scale-110 duration-300">Quero ter uma presença online</button>
                    </div>
                </div>
            </div>
        </>
    )
}