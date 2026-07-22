import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { DeskBand } from "@/components/illustrations/DeskBand";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <DeskBand />
        <Projects />
        <DeskBand flip />
        <About />
        <DeskBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
