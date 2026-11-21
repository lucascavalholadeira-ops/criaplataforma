import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BotaoLink, Container, Etiqueta } from "@/components/ui";
import { IconeDownload, IconeInstagram, IconeWhatsapp } from "@/components/icones";
import { Marca } from "@/components/Logo";
import BotaoBaixar from "@/components/material/BotaoBaixar";
import Carrossel from "@/components/material/Carrossel";
import CartaoMaterial from "@/components/material/CartaoMaterial";
import QuizDownload from "@/components/material/QuizDownload";
import { buscarMaterial, capa, materiais, paginas, resumo } from "@/lib/materiais";
import { instagramUrl, linkWhatsapp, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return materiais.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = buscarMaterial(slug);
  if (!m) return {};
  const titulo = `${m.titulo} | Material gratuito da Cria`;
  return {
    title: { absolute: titulo },
    description: m.subtitulo,
    alternates: { canonical: `/material/${m.slug}` },
    openGraph: {
      title: titulo,
      description: m.subtitulo,
      url: `/material/${m.slug}`,
      type: "article",
      images: [{ url: `/og/${m.slug}.png`, width: 1200, height: 630, alt: "Material gratuito da Cria", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: m.subtitulo,
      images: [{ url: `/og/${m.slug}.png`, width: 1200, height: 630, alt: "Material gratuito da Cria", type: "image/png" }],
    },
  };
}

export default async function PaginaMaterial({ params }: Props) {
  const { slug } = await params;
  const m = buscarMaterial(slug);
  if (!m) notFound();
  const outros = materiais.filter((o) => o.slug !== m.slug).slice(0, 3);

  return (
    <>
      <section>
        <Container className="grid items-center gap-12 pt-10 pb-14 sm:pt-[72px] sm:pb-20 md:grid-cols-[1.25fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Etiqueta className="bg-black text-creme">Material gratuito</Etiqueta>
              <Etiqueta>{m.nicho}</Etiqueta>
            </div>
            <h1 className="mt-5 text-[clamp(40px,5vw,68px)] leading-none font-bold tracking-[-1px]">{m.titulo}</h1>
            <p className="mt-5 max-w-xl text-lg leading-[1.55] text-texto-2 sm:text-xl">{m.subtitulo}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <BotaoBaixar className="min-h-14 w-full bg-black px-6 text-[17px] text-creme hover:bg-[#2a2820] sm:w-auto">
                <IconeDownload /> Baixar material
              </BotaoBaixar>
              <p className="text-sm text-suave">
                Grátis. Responda 6 perguntas rápidas e baixe.
                {" · "}
                {m.totalPaginas} páginas
              </p>
            </div>
            <p className="mt-6 text-[15px] font-semibold text-texto-2">Veio do Reel? Este é o material que você pediu.</p>
          </div>
          <div className="hidden md:block">
            <Image
              src={capa(m)}
              alt={`Capa do material ${m.titulo}`}
              width={1013}
              height={1267}
              priority
              sizes="(max-width: 1200px) 40vw, 440px"
              className="mx-auto w-full max-w-[400px] rounded-3xl border border-black/10 shadow-[0_30px_60px_-30px_rgba(60,45,10,0.45)]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-creme-2">
        <Container className="py-16 sm:py-24">
          <h2 className="mb-8 font-display text-[clamp(28px,3vw,40px)] font-bold leading-[1.05]">Dá uma olhada antes</h2>
          <Carrossel paginas={paginas(m)} titulo={m.titulo} />
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <h2 className="titulo-secao">O que tem no material</h2>
          <ol className="mt-12 grid gap-x-10 md:grid-cols-2">
            {m.itens.map((item, i) => (
              <li key={item.titulo} className="flex gap-5 border-t-2 border-black py-6">
                <span className="w-9 shrink-0 font-display text-[36px] font-bold leading-none">{i + 1}</span>
                <div>
                  <h3 className="font-sans text-xl font-bold">{item.titulo}</h3>
                  <p className="mt-1.5 leading-[1.55] text-texto-2">{item.texto}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <BotaoBaixar className="min-h-[52px] border-2 border-black px-6 text-base hover:bg-black/5">
              <IconeDownload /> Baixar material
            </BotaoBaixar>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-16 sm:pb-24">
          <a
            href={m.reel}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-3xl border border-black/8 bg-papel p-6 transition-colors hover:border-black/25 sm:p-7"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-black text-creme">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-7 w-7">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-sm text-suave">Veio do vídeo</p>
              <p className="mt-0.5 text-[17px] font-bold">
                Esse material saiu de um Reel da Cria. Assista de novo ou mande para alguém.
              </p>
              <p className="mt-2 text-[15px] font-bold underline">Ver o Reel no Instagram</p>
            </div>
          </a>
        </Container>
      </section>

      <section className="bg-black text-creme">
        <Container className="flex flex-wrap items-center gap-10 py-20 sm:py-28">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col items-start">
            <Marca className="h-20 w-20" traco={6} />
            <h2 className="mt-6 titulo-secao">Quer isso funcionando na sua empresa sem depender de memória?</h2>
          </div>
          <div className="min-w-0 flex-[1_1_360px]">
            <p className="text-lg leading-[1.55] text-claro sm:text-[19px]">
              O Painel da Cria faz o trabalho chato por você: lembra o retorno de cada cliente no WhatsApp e avisa quem
              esfriou, para você chamar no dia certo.
            </p>
            <BotaoLink
              href={linkWhatsapp(`Oi! Baixei o material ${m.titulo} e quero conhecer o Painel`)}
              externo
              variante="creme"
              evento="quero_ver_painel"
              params={{ material: m.slug }}
              className="mt-8 w-full sm:w-auto"
            >
              <IconeWhatsapp /> Quero ver o Painel
            </BotaoLink>
          </div>
        </Container>
      </section>

      <section className="bg-creme-2">
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <div>
            <h2 className="font-display text-[clamp(26px,3vw,36px)] font-bold leading-[1.1]">
              Siga @{site.instagram} para receber os próximos materiais
            </h2>
            <p className="mt-2 text-texto-2">Toda semana tem estratégia, mensagem pronta e ideia para o seu negócio.</p>
          </div>
          <BotaoLink href={instagramUrl} externo variante="contorno" tamanho="md" className="shrink-0">
            <IconeInstagram /> Seguir no Instagram
          </BotaoLink>
        </Container>
      </section>

      {outros.length > 0 && (
        <section>
          <Container className="py-16 sm:py-24">
            <h2 className="titulo-secao mb-10">Outros materiais</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {outros.map((o, i) => (
                <CartaoMaterial key={o.slug} m={resumo(o)} botao="Baixar grátis" indice={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <QuizDownload material={{ slug: m.slug, titulo: m.titulo, pdf: m.pdf }} />
    </>
  );
}
