"use client"

export default function Rodape() {
    return (
        <>
            <div className="h-[480px] w-full bg-laranja">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <img src="/images/logo.png" alt="Logo Conste Marketing" className="mt-10 ml-24 w-[200px] h-[200px]" />
                        <p className="text-white text-1xl flex flex-col ml-32 hover:scale-110 duration-300"><a href="#">19 97427-4982</a></p>
                        <p className="text-white text-1xl flex flex-col ml-32 mt-3 hover:scale-110 duration-300"><a href="mailto:">support@lift.agency</a></p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white text-2xl ml-32 mt-32 font-bold">Links</p>
                        <p className="text-white text-1xl ml-32 hover:scale-110 duration-300 hover:cursor-pointer ">Clientes</p>
                        <p className="text-white text-1xl ml-32 hover:scale-110 duration-300 hover:cursor-pointer ">Serviços</p>
                        <p className="text-white text-1xl ml-32 hover:scale-110 duration-300 hover:cursor-pointer ">Porque a gente?</p>
                        <p className="text-white text-1xl ml-32 hover:scale-110 duration-300 hover:cursor-pointer ">Depoimentos</p>
                        <p className="text-white text-1xl ml-32 hover:scale-110 duration-300 hover:cursor-pointer ">Contato</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white text-2xl flex flex-col mr-32 mt-32 font-bold">Newsletter</p>
                        <p className="text-white text-1xl flex flex-col mr-32">Se increva na nossa Newsletter e <br /> ganhe um E-book gratuito <br /> e conteúdos semanais sobre Marketing</p>
                        <div className="rounded w-60 flex justify-content align-items mt-6">
                            <input type="email" name="email" placeholder="email@gmail.com" className="rounded rounded-r-none w-48 h-14" />
                            <button type="submit" className="bg-purple-800 hover:bg-black duration-300 rounded-l-none rounded w-14 h-14 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="#ffffff">
                                    <path fill-rule="evenodd" d="M5.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 1 1-.708-.708L11.293 8 5.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[1720px] bg-white h-1 m-auto mt-7"></div>
                <div className="flex justify-between flex-row mt-10">
                    <div className="flex flex-row gap-7 items-center pl-24 ">
                        <a href="https://www.instagram.com/constemarketing/" target="_blank" className="[&>svg]:h-7 [&>svg]:w-7 border-slate-200/15 border-2 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 320 512">
                                <path
                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/constemarketing/" target="_blank" className="[&>svg]:h-7 [&>svg]:w-7 border-slate-200/15 border-2 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 448 512">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/constemarketing/" target="_blank" className="[&>svg]:h-7 [&>svg]:w-7 border-slate-200/15 border-2 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-white pr-24">© 2024 Conste Marketing. Todos Direitos reservados.</p>
                </div>
            </div>
        </>
    )
}