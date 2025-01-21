"use client";
import Navbar from "@/components/navbar";
import ClientLogos from "@/components/clientslogo";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative gap-y-3 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black">
        <p className="text-[#e7e7e7] bg-[#30027667] hover:bg-[#300276b6] p-2 rounded-[6px]">Bem vindo à Conste 👋</p>
        <h1 className="z-10 w-[760px] text-center text-5xl font-bold font-montserrat text-white">
          Transformamos estratégias em crescimento constante para o seu negócio.
        </h1>
        <p className="text-[#9A9A9A] w-[500px] text-center">
          Criamos estratégias inovadoras que unem criatividade, dados e tecnologia para impulsionar marcas.
        </p>
        <button className="z-10 px-6 py-3 my-12 text-white bg-[#310276] hover:bg-[#40009E] rounded-[6px]">
          <a href="#">
            Eleve seus resultados
          </a>
        </button>
      </section>

      <section className="flex flex-col items-center justify-center py-16">
        <h2 className="text-white font-bold text-4xl">Quem Somos</h2>
        <img className="w-auto h-auto" src="/Equipe.png" alt="Imagem da Equipe" />
        <div className="space-y-3 flex flex-col items-center justify-center text-base">
          <p className="text-[#9A9A9A] w-[580px] text-center">
            A Conste atua em soluções digitais, dedicada a impulsionar a captação de clientes para empresas por meio de estratégias de marketing digital.
          </p>
          <p className="text-[#9A9A9A] w-[480px] text-center">
            Somos especialistas em gestão de performance e vendas por meio de estratégias inteligentes, inovadoras e criativas.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-y-11 py-16">
        <h2 className="md:w-[700px] text-center text-white font-bold text-4xl">Alguns números da implementação das nossas <span className="text-[#FF8500]"> estratégias </span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-11">
          <div className="bg-[#310276]/50 p-6 rounded-[12px] flex flex-col items-center justify-center text-white text-center w-64 h-64 px-10 py-7">
            <img className="mb-3" src="/icon1.svg" width={40} height={40} alt="icone de experiência" />
            <h3 className="text-4xl font-bold">+5 Anos</h3>
            <p className="text-[#BABABA]">de Experiência</p>
          </div>
          <div className="bg-[#310276]/50 p-6 rounded-[12px] flex flex-col items-center justify-center text-white text-center w-64 h-64 px-10 py-7">
            <img className="mb-3" src="/icon2.svg" width={40} height={40} alt="icone de experiência" />
            <h3 className="text-4xl font-bold">+110</h3>
            <p className="text-[#BABABA]">Clientes Atendidos</p>
          </div>
          <div className="bg-[#310276]/50 p-6 rounded-[12px] flex flex-col items-center justify-center text-white text-center w-64 h-64 px-10 py-7">
            <img className="mb-3" src="/icon3.svg" width={40} height={40} alt="icone de experiência" />
            <h3 className="text-4xl font-bold">+1.5M</h3>
            <p className="text-[#BABABA]">em Vendas</p>
          </div>
        </div>
        <button className="z-10 px-6 py-3 my-12 text-white bg-[#310276] hover:bg-[#40009E] rounded-[6px]">
          <a href="#">
            Quero Elevar meus resultados
          </a>
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-11 p-10">
        <div className="relative bg-[#310276] md:w-[392px] w-fit text-white rounded-lg p-6 flex flex-col items-start justify-between">
          <h3 className="text-xl font-bold">Performance</h3>
          <p className="text-sm mt-2">
            Tudo que envolve criação e gerenciamento de anúncios nas mídias sociais, performance do seu time de vendas, sites e etc.
          </p>
          <img src="/BarLineChart.png" alt="Gráfico de Performance" className="mt-4 w-auto right-6" />
        </div>
        <div className="relative bg-[#310276] md:w-[392px] w-fit text-white rounded-lg p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold">Social Media</h3>
          <p className="text-sm mt-2">
            Criação de estratégias personalizadas para as suas redes sociais, com base na sua área de atuação.
          </p>
          <img src="/Social media.png" alt="Gráfico Social Media" className="mt-4 w-80" />
        </div>
        <div className="relative bg-[#310276] md:w-[392px] w-fit text-white rounded-lg p-6 flex flex-col items-start justify-between">
          <h3 className="text-xl font-bold">Áudio Visual</h3>
          <p className="text-sm mt-2">
            Captamos e editamos os vídeos para suas redes sociais. Capturamos tanto com câmera profissional, quanto com drone.
          </p>
          <img src="/Audio_Visual.png" alt="Exemplo Áudio Visual" className="mt-4 w-auto" />
        </div>
        <div className="flex items-center flex-row gap-x-24 justify-between w-screen">
          <div className="relative bg-[#310276] md:w-[635px] w-fit text-white rounded-lg p-6 flex flex-col items-start justify-between md:col-span-2">
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-sm mt-2">
              Criação dos designs dos posts, capas de vídeos, design para páginas etc.
            </p>
            <img src="/design-example.png" alt="Design Example" className="mt-4 w-full" />
          </div>
          <div className="relative bg-[#310276] md:w-[635px] w-fit text-white rounded-lg p-6 flex flex-col items-start justify-between md:col-span-1">
            <h3 className="text-xl font-bold">T.I</h3>
            <p className="text-sm mt-2">
              Realizamos desenvolvimento de sites, páginas de captura, páginas de vendas, e-commerce. E claro, tudo otimizado para os celulares.
            </p>
            <img src="/ti-example.png" alt="TI Example" className="mt-4 w-full" />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
        <button className="z-10 px-6 py-3 my-12 text-white bg-[#310276] hover:bg-[#40009E] rounded-[6px]">
          <a href="#">
            Quero Elevar meus resultados
          </a>
        </button>
      </div>

      <ClientLogos />

      <section className="py-16 flex flex-col justify-center items-center">
        <div className="gap-y-3 flex flex-col items-center justify-center text-center">
          <p className="text-[#FF8500]">Desafios Comuns</p>
          <h2 className="font-bold text-white text-4xl md:w-[650px] w-fit text-center">
            Você passa ou já passou por algum desses <span className="text-[#FF8500]">desafios?</span>
          </h2>
        </div>
      </section>
    </>
  );
}