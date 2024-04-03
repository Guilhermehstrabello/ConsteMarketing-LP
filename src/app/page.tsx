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
      <ProgressBar />
      <Navbar />
      <HeroSection />
      <div id="divisoes">
        <Divisoes />
      </div>
      <Porque />
      <Blur />
      <div id="porque">
        <PorqueNos />
      </div>
      <div id="depoimentos">
        <Depoimentos />
      </div>
      <div id="clientes">
        <Clientes />
      </div>
      <div id="form">
        <Formulario />
      </div>
      <Rodape />
    </>
  );
}
