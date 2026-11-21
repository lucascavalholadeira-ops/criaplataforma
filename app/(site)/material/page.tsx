import type { Metadata } from "next";
import { Container } from "@/components/ui";
import ListaMateriais from "@/components/material/ListaMateriais";
import { materiais, resumo } from "@/lib/materiais";

export const metadata: Metadata = {
  title: "Materiais gratuitos",
  description: "Materiais práticos para pequenos negócios: estratégias e mensagens prontas. Baixe grátis.",
  alternates: { canonical: "/material" },
  openGraph: {
    title: "Materiais gratuitos | Cria",
    description: "Materiais práticos para pequenos negócios: estratégias e mensagens prontas. Baixe grátis.",
    url: "/material",
  },
};

export default function Materiais() {
  return (
    <section>
      <Container className="pt-12 pb-20 sm:pt-[72px] sm:pb-[120px]">
        <h1 className="max-w-[760px] text-[clamp(40px,5vw,64px)] leading-[1.02] font-bold tracking-[-1px]">
          Estratégias de graça para o seu negócio.
        </h1>
        <p className="mt-5 mb-10 max-w-[600px] text-lg leading-[1.55] text-texto-2 sm:text-[19px]">
          Tudo de graça. Filtre pelo seu tipo de negócio.
        </p>
        <ListaMateriais materiais={materiais.map(resumo)} todos="Todos" botao="Baixar grátis" />
      </Container>
    </section>
  );
}
