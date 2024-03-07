"use client"

export default function Rodape(){
    return(
        <>
            <div className="h-[412px] w-full bg-orange-500 flex flex-row justify-between">
                <div className="flex flex-col">
                    <img src="" alt="" />
                    <p className="text-white text-1xl flex flex-col ml-32 mt-32">19 97427-4982</p>
                    <p className="text-white text-1xl flex flex-col ml-32 mt-3"> <a href="mailto:">support@lift.agency</a></p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white text-2xl ml-32 mt-32 font-bold">Links</p>
                    <p className="text-white text-1xl ml-32 ">Clientes</p>
                    <p className="text-white text-1xl ml-32 ">Serviços</p>
                    <p className="text-white text-1xl ml-32 ">Porque a gente?</p>
                    <p className="text-white text-1xl ml-32 ">Depoimentos</p>
                    <p className="text-white text-1xl ml-32 ">Contato</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white text-2xl flex flex-col mr-32 mt-32 font-bold">Newsletter</p>
                    <p className="text-white text-1xl flex flex-col mr-32">Se increva na nossa Newsletter e <br /> ganhe um E-book gratuito <br /> e conteúdos semanais sobre Marketing</p>
                    <div className="rounded w-60 flex justify-content align-items mt-6">
                        <input type="email" name="email" placeholder="email@gmail.com" className="rounded rounded-r-none w-48 h-14"  />
                        <button type="submit" className="bg-purple-800 hover:bg-black duration-300 rounded-l-none rounded w-14 h-14 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#ffffff">
                            <path fill-rule="evenodd" d="M5.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 1 1-.708-.708L11.293 8 5.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}