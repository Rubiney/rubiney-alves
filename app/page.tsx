import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Pilares from "./components/Pilares";
import Aplicacao from "./components/Aplicacao";
import Trajetoria from "./components/Trajetoria";
import Experiencia from "./components/Experiencia";
import Fundamento from "./components/Fundamento";
import Referencias from "./components/Referencias";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Pilares />
        <Aplicacao />
        <Trajetoria />
        <Experiencia />
        <Fundamento />
        <Referencias />
        <Contato />
      </main>
    </>
  );
}
