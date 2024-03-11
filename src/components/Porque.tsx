"use client"

export function Porque() {
    return(
        <>
            <div className="h-72 mt-64 flex flex-col justify-center items-center">
            <div className="lg:w-96 lg:h-96 md:w-96 md:h-96 bg-purple-800/50 rounded-[100%] absolute blur-3xl translate-y-72 z-0"></div>
                <h1 className="text-laranja text-center font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl">Porque o seu negócio precisa <br /> da Conste Marketing?</h1>
                <h2 className="lg:text-3xl text-center text-roxo md:text-2xl sm:text-1xl mt-14 font-Montserrat font-semibold">Somos especialistas em alavancar <br /> empresas atráves da presença online</h2>
                <div className="text-center mt-12 mb-28">
                    <p className="font-Glacial font-normal text-lg z-20">Nos dias de hoje, o marketing digital é <span className="text-laranja"> indispensável </span> para empresas que almejam se <br /> destacar, pois desempenha um papel fundamental na <span className="text-orange-500"> atração </span> de consumidores e <br /> tem se revelado uma ferramenta poderosa para impulsionar o <span className="text-orange-500"> crescimento financeiro</span>.</p>
                </div>
            </div>

            <div className="flex flex-row gap-10 justify-center mt-16">
                <div className="w-[350px] h-[400px] bg-white rounded-xl border-2 border-purple-800/50 pt-10 px-5 flex flex-col z-10">
                    <h2 className="text-xl text-center font-Glacial">O Google permanece sendo o site mais visitado no mundo</h2>
                    <img src="/images/google.png" alt="Ilustração" className="m-auto w-22 h-22 mt-auto" />
                    <p className="text-center mt-5 text-base mb-10 font-Neue">O imbatível buscador continua crescendo. É o site mais visitado da internet, de acordo com o ranking mundial da Alexa, e a principal referência para usuários, empresas e produtores de conteúdo.</p>
                </div>
                <div className="w-[350px] h-[400px] bg-white rounded-xl border-2 border-purple-800/50 pt-10 px-5 flex flex-col z-10">
                    <h2 className="text-xl text-center font-Glacial">O Facebook ainda é a plataforma social mais utilizada no mundo</h2>
                    <img src="/images/facebook.png" alt="Ilustração" className="m-auto w-22 h-22 mt-auto" />
                    <p className="text-center mt-5 text-base mb-12 font-Neue">Deixando para trás o YouTube, o WhatsApp e até seu app de mensagens, o Messenger, o Facebook continua sendo a plataforma social mais forte do mundo.</p>
                </div>
                <div className="w-[350px] h-[400px] bg-white rounded-xl border-2 border-purple-800/50 pt-10 px-5 flex flex-col z-10">
                    <h2 className="text-xl text-center font-Glacial">97,3% dos respondentes consomem conteúdo online</h2>
                    <img src="/images/www.png" alt="Ilustração" className="m-auto w-22 h-22 mt-auto" />
                    <p className="text-center mt-5 text-base mb-12 font-Neue">Conteúdos online disponíveis em sites, blogs, plataformas e redes sociais são utilizados por praticamente todos os participantes da pesquisa.</p>
                </div>
            </div>
        </>
    )
}