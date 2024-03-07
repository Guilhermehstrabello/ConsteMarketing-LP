"use client"
export function Clientes() {
    return (
        <>
            <h1 className="text-center font-bold text-4xl text-orange-500 mt-6 mb-6">Nossos Clientes</h1>
                <div className="overflow-hidden">
                    <div className="flex whitespace-nowrap animate-slide p-10 space-x-12">
                        <img src="/arita.png" alt="Imagem 1" className="inline-block w-[120px] h-[120px]" />
                        <img src="/sogima.png" alt="Imagem 2" className="inline-block w-[120px] h-[120px]" />
                        <img src="/agrotuba.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/taket.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/qajuste.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/queropraxia.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                        <img src="/ligia.png" alt="Imagem 3" className="inline-block w-[120px] h-[120px]" />
                    </div>
                    <div className="flex whitespace-nowrap animate-slide p-10 space-x-12">
                        <img src="/arita.png" alt="Imagem 1" className="inline-block w-auto h-auto" />
                        <img src="/sogima.png" alt="Imagem 2" className="inline-block w-auto h-auto" />
                        <img src="/agrotuba.png" alt="Imagem 3" className="inline-block w-auto h-auto" />
                        <img src="/taket.png" alt="Imagem 3" className="inline-block w-auto h-auto" />
                        <img src="/qajuste.png" alt="Imagem 3" className="inline-block w-auto h-auto" />
                        <img src="/queropraxia.png" alt="Imagem 3" className="inline-block w-auto h-auto" />
                        <img src="/ligia.png" alt="Imagem 3" className="inline-block w-auto h-auto" />
                    </div>
                </div>
        </>
    );
}