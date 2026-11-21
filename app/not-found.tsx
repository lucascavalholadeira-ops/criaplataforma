import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Marca } from "@/components/Logo";
import { BotaoLink, Container } from "@/components/ui";

export default function NaoEncontrado() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="flex max-w-xl flex-col items-center py-24 text-center sm:py-32">
            <span className="text-esfriou">
              <Marca className="h-28 w-28" traco={6} />
            </span>
            <h1 className="mt-7 text-[clamp(40px,5vw,56px)] leading-none font-bold">Essa página esfriou.</h1>
            <p className="mt-4 text-lg text-texto-2">Não achamos o que você procurou. Que tal voltar para o início?</p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <BotaoLink href="/">Voltar para o início</BotaoLink>
              <BotaoLink href="/material" variante="contorno">
                Ver materiais
              </BotaoLink>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
