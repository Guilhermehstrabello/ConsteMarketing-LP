import Navbar from "@/components/Navbar";
import { Divisoes } from "@/components/Divisões";
import { HeroSection } from "@/components/HeroSection";
import { Porque } from "@/components/Porque";
import { Blur } from "@/components/BlurSection";
import { PorqueNos } from "@/components/PorqueNós";
import { Depoimentos } from "@/components/Depoimentos";
import Clientes from "@/components/Clientes";
import ProgressBar from "@/components/ProgressBar";
import Rodape from "@/components/Rodape";
import Formulario from "@/components/Formulario";
import Loading from "@/components/animation";

export const metadata = {
  title: 'Conste Marketing | Agência de Marketing Digital',
  description: 'A agência de marketing que vai fazer você manter constante suas vendas e resultados através da Internet',
  url: 'https://constemarketing.com.br',
  siteName: 'Conste Marketing',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  locale: 'pt-BR',
  type: 'website',
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center space-y-10">
        <h1 className="lg:text-6xl text-3xl w-1/2 text-laranja text-center">Estamos Desenvolvendo Uma Nova Versão Incrível para Nosso Site.<span className="text-roxo"> Em breve.</span></h1>
        <Loading />
      </div>
    </>
  );
}
