"use client"

export function Porque() {
    return(
        <>
            <div className="h-72 mt-40 flex flex-col justify-center items-center">
                <h1 className="text-orange-400 text-center font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl">Porque o seu negócio precisa da Conste Marketing?</h1>
                <h2 className="font-bold lg:text-4xl text-purple-800 md:text-2xl sm:text-1xl mt-14">Somos especialistas em alavancar empresas atráves da presença online</h2>
                <div className="text-center mt-8 mb-28">
                    <p>Nos dias de hoje, o marketing digital é <span className="text-orange-500"> indispensável </span> para empresas que almejam se <br /> destacar, pois desempenha um papel fundamental na <span className="text-orange-500"> atração </span> de consumidores e <br /> tem se revelado uma ferramenta poderosa para impulsionar o <span className="text-orange-500"> crescimento financeiro</span>.</p>
                </div>
            </div>

            <div className="flex flex-row gap-5 justify-center">
                <div className="w-[350px] h-[450px] bg-white rounded-xl border-2 pt-10 px-5 flex flex-col ">
                    <h2 className="text-2xl text-center">O Google permanece sendo o site mais visitado no mundo</h2>
                    <img src="/google.png" alt="Ilustração" className="m-auto w-22 h-22 mt-3" />
                    <p className="text-center mt-5 text-base mb-12">O imbatível buscador continua crescendo. É o site mais visitado da internet, de acordo com o ranking mundial da Alexa, e a principal referência para usuários, empresas e produtores de conteúdo.</p>
                </div>
                <div className="w-[350px] h-[450px] bg-white rounded-xl border-2 pt-10 px-5 flex flex-col ">
                    <h2 className="text-2xl text-center">O Facebook ainda é a plataforma social mais utilizada no mundo</h2>
                    <img src="/facebook.png" alt="Ilustração" className="m-auto w-22 h-22 mt-3" />
                    <p className="text-center mt-5 text-base mb-12">O imbatível buscador continua crescendo. É o site mais visitado da internet, de acordo com o ranking mundial da Alexa, e a principal referência para usuários, empresas e produtores de conteúdo.</p>
                </div>
                <div className="w-[350px] h-[450px] bg-white rounded-xl border-2 pt-10 px-5 flex flex-col ">
                    <h2 className="text-2xl text-center">97,3% dos respondentes consomem conteúdo online</h2>
                    <img src="/www.png" alt="Ilustração" className="m-auto w-22 h-22 mt-3" />
                    <p className="text-center mt-5 text-base mb-12">O imbatível buscador continua crescendo. É o site mais visitado da internet, de acordo com o ranking mundial da Alexa, e a principal referência para usuários, empresas e produtores de conteúdo.</p>
                </div>
            </div>
        </>
    )
}