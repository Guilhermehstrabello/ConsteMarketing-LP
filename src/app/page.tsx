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
import Head from "next/head";

export default function Home() {
  return (

    <div>
      <Head>
        <title>Conste Marketing</title>
        <meta name="description" content="Marketing digital de alta qualidade para impulsionar o seu negócio" />
      </Head>
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
    </div>
  );
}
