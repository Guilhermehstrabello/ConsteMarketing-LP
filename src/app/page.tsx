
import Navbar from "@/components/Navbar";
import { Divisoes } from "@/components/Divisões";
import { HeroSection } from "@/components/HeroSection";
import { Porque } from "@/components/Porque";


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Divisoes />
        <Porque />
      </div>
    </>
  );
}
