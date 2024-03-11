export function Depoimentos() {
    return (
        <>
            <div className="h-[736px] bg-laranja">
                <h1 className="text-white text-center p-24 font-bold text-4xl">O que nossos clientes falam sobre nós?</h1>
                <div className="flex flex-row justify-around items-center mt-20">
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8">
                        <h2 className="text-white text-base">Rodrigo Sales</h2>
                        <p className="text-white text-base mt-4">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8">
                        <h2 className="text-white text-base">Rosana</h2>
                        <p className="text-white text-base mt-4">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8">
                        <h2 className="text-white text-base">Rosana</h2>
                        <p className="text-white text-base mt-4">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center m-14">
                    <button className="lg:p-3 bg-purple-800 m-10 lg:text-white md:text-white font-bold rounded-lg hover:bg-white hover:text-laranja duration-300 w-32">Contato</button>
                </div>
            </div>
        </>
    )
}