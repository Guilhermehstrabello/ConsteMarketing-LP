'use client'
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
import { Metadata } from "next";

export const metadata : Metadata = {
  description:
  'Testando alteração de Descrição'
}

export default function Home() {
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
