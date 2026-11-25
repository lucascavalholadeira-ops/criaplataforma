import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Cria trata os seus dados.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <>
      <section>
        <Container className="max-w-3xl pt-12 pb-20 sm:pt-[72px] sm:pb-[120px]">
          <h1 className="text-[clamp(40px,5vw,56px)] leading-none font-bold">Política de privacidade</h1>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-texto-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:text-black">
            <p>[Texto provisório para revisão.]</p>
            <h2>Quais dados coletamos</h2>
            <p>
              Para baixar um material gratuito, pedimos o seu nome, o seu WhatsApp e as respostas das perguntas rápidas sobre o seu negócio. Você só envia se marcar a caixa autorizando a Cria a mandar materiais e mensagens no WhatsApp. Se você nos chamar no WhatsApp, recebemos o seu nome, número e as mensagens que você mandar.
            </p>
            <h2>Cookies e medição</h2>
            <p>
              Podemos usar Google Analytics e Meta Pixel para entender quantas pessoas visitam o site e clicam nos botões. Esses serviços usam cookies. Você pode bloquear cookies no seu navegador.
            </p>
            <h2>Como usamos</h2>
            <p>
              Para responder o seu contato e melhorar o site. Não vendemos os seus dados.
            </p>
            <h2>Contato</h2>
            <p>
              {"Para pedir acesso ou exclusão dos seus dados, escreva para "}
              <a className="font-bold text-black underline" href="mailto:contato@cria.com.br">contato@cria.com.br</a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
