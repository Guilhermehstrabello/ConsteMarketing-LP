export function Depoimentos() {
    return (
        <>
            <div className="lg:h-[736px] bg-laranja">
                <h1 className="text-white text-center lg:p-16 p-10 font-bold lg:text-4xl text-3xl">O que nossos clientes falam sobre nós?</h1>
                <div className="flex lg:flex-row flex-col justify-center items-center mt-10 lg:gap-20 gap-10">
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:bg-white duration-300">
                        <h2 className="text-white text-base group-hover:text-laranja duration-300">Rodrigo Sales</h2>
                        <p className="text-white text-base mt-4 group-hover:text-laranja duration-300">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:bg-white duration-300">
                        <h2 className="text-white text-base group-hover:text-laranja duration-300">Rosana</h2>
                        <p className="text-white text-base mt-4 group-hover:text-laranja duration-300">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:bg-white duration-300">
                        <h2 className="text-white text-base group-hover:text-laranja duration-300">Rosana</h2>
                        <p className="text-white text-base mt-4 group-hover:text-laranja duration-300">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-6">
                    <button className="lg:p-4 p-2 bg-purple-800 m-10 lg:text-white md:text-white text-white font-bold rounded-lg hover:bg-white hover:text-laranja duration-300 w-36">Contato</button>
                </div>
            </div>
        </>
    )
}