const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

export function Depoimentos() {
    return (
        <>
            <div className="lg:h-[736px] bg-laranja">
                <h1 className="text-white text-center lg:p-16 p-10 lg:text-3xl text-2xl">O que nossos clientes falam sobre nós?</h1>
                <div className="flex lg:flex-row flex-col justify-center items-center mt-20 lg:gap-20 gap-10">
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                        <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Rodrigo Sales</h6>
                        <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                        <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Rosana</h6>
                        <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                    <div className="isolate aspect-video w-96 rounded-xl bg-white/10 shadow-lg p-8 group hover:scale-105 hover:bg-white duration-300">
                        <h6 className="text-white text-2xl group-hover:text-laranja duration-300">Rosana</h6>
                        <p className="text-white text-lg mt-4 group-hover:text-laranja duration-300">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="lg:p-4 p-2 bg-purple-800 mt-16 mb-16 lg:text-white md:text-white text-white font-bold rounded-lg hover:bg-white hover:text-laranja duration-300 w-36 hover:scale-110"onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('form');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                        Contato
                    </button>
                </div>
            </div>
        </>
    )
}