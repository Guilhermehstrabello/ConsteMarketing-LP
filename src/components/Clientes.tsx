"use client"
export function Clientes() {
    return (
        <>
            <h1 className="text-center font-bold text-4xl text-laranja mt-6 mb-6">Nossos Clientes</h1>
                <div className="overflow-hidden">
                    <div className="flex whitespace-nowrap animate-slide p-10 space-x-12">
                        <img src="/images/arita.png" alt="Imagem 1" className="inline-block w-[120px] h-[120px]" />
                        <img src="/images/sogima.png" alt="Imagem 2" className="inline-block w-[120px] h-[120px]" />
                        <img src="/images/agrotuba.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/images/taket.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/images/qajuste.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/images/queropraxia.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/images/ligia.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                    </div>
                </div>
        </>
    );
}