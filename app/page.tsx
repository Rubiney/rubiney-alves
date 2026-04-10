import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Pilares from "./components/Pilares";
import Experiencia from "./components/Experiencia";
import Formacao from "./components/Formacao";
import Artigos from "./components/Artigos";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Pilares />
        <Experiencia />
        <Formacao />
        <Artigos />
        <Contato />
      </main>
    </>
  );
}
