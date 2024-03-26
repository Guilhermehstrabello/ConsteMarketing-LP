"use client"

export function Porque() {
    return(
        <>
            <div className="h-72 mt-64 flex flex-col justify-center items-center">
            <div className="lg:w-96 lg:h-96 md:w-80 md:h-80 mt-40 bg-purple-800/50 rounded-[100%] absolute blur-3xl translate-y-72"></div>
                <h1 className="text-laranja text-center xl:text-4xl lg:text-3xl text-2xl">Porque o seu negócio precisa <br /> da Conste Marketing?</h1>
                <h2 className="text-center text-roxo lg:text-2xl md:text-2xl text-xl mt-14 ">Somos especialistas em alavancar <br /> empresas atráves da presença online</h2>
                <div className="lg:text-center text-start mt-12 mb-28">
                    <p className="lg:text-xl md:text-lg text-base text-center">Nos dias de hoje, o marketing digital é <span className="text-laranja"> indispensável </span> para empresas que almejam se <br /> destacar, pois desempenha um papel fundamental na <span className="text-orange-500"> atração </span> de consumidores e <br /> tem se revelado uma ferramenta poderosa para impulsionar o <span className="text-orange-500"> crescimento financeiro</span>.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col items-center gap-10 justify-center mt-16">
                <div className="w-[350px] h-[400px] bg-white rounded-xl border-2 border-purple-800/50 pt-10 px-5 flex flex-col z-10 group hover:scale-105 hover:bg-roxo duration-300">
                    <h5 className="text-xl text-center group-hover:text-white">O Google permanece sendo o site mais visitado no mundo</h5>
                    <img src="/images/google.png" alt="Ilustração" className="m-auto w-22 h-22 mt-auto" />
                    <p className="text-center text-cinza mt-5 text-base mb-10 group-hover:text-white">O imbatível buscador continua crescendo. É o site mais visitado da internet, de acordo com o ranking mundial da Alexa, e a principal referência para usuários, empresas e produtores de conteúdo.</p>
                </div>
                <div className="w-[350px] h-[400px] bg-white rounded-xl border-2 border-purple-800/50 pt-10 px-5 flex flex-col z-10 group hover:scale-105 hover:bg-roxo duration-300">
                    <h5 className="text-xl text-center group-hover:text-white">O Facebook ainda é a plataforma social mais utilizada no mundo</h5>
                    <img src="/images/facebook.png" alt="Ilustração" className="m-auto w-22 h-22 mt-auto" />
                    <p className="text-center text-cinza mt-5 text-base mb-14 group-hover:text-white">Deixando para trás o YouTube, o WhatsApp e até seu app de mensagens, o Messenger, o Facebook continua sendo a plataforma social mais forte do mundo.</p>
                </div>
                <div className="w-[350px] h-[400px] bg-white rounded-xl border-2 border-purple-800/50 pt-10 px-5 flex flex-col z-10 group hover:scale-105 hover:bg-roxo duration-300">
                    <h5 className="text-xl text-center group-hover:text-white">97,3% dos respondentes consomem conteúdo online</h5>
                    <img src="/images/www.png" alt="Ilustração" className="m-auto w-22 h-22 mt-auto" />
                    <p className="text-center text-cinza mt-5 text-base mb-14 group-hover:text-white">Conteúdos online disponíveis em sites, blogs, plataformas e redes sociais são utilizados por praticamente todos os participantes da pesquisa.</p>
                </div>
            </div>
        </>
    )
}