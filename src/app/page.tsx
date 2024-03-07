"use client"
import Navbar from "@/components/Navbar";
import { Divisoes } from "@/components/Divisões";
import { HeroSection } from "@/components/HeroSection";
import { Porque } from "@/components/Porque";
import { Blur } from "@/components/BlurSection";
import { PorqueNos } from "@/components/PorqueNós";
import { Depoimentos } from "@/components/Depoimentos";
import { Clientes } from "@/components/Clientes";
import ProgressBar from "@/components/ProgressBar";
import Formulario from "@/components/Formulario";
import Rodape from "@/components/Rodape";


export default function Home() {
  return (
    <>
      <div>
        <ProgressBar />
        <Navbar />
        <HeroSection />
        <Divisoes />
        <Porque />
        <Blur />
        <PorqueNos />
        <Depoimentos />
        <Clientes />
        <Formulario />
        <Rodape />
      </div>
    </>
  );
}
