import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { linkWhatsapp } from "@/lib/site";
import { BotaoLink, Container, ItemCheck, TituloSecao } from "@/components/ui";
import Calculadora from "@/components/home/Calculadora";
import Faq from "@/components/home/Faq";
import Quiz from "@/components/home/Quiz";
import CartaoMaterial from "@/components/material/CartaoMaterial";
import { materiais, resumo } from "@/lib/materiais";

const titulo = "Cria | Painel de Orçamentos e WhatsApp para pequenos negócios";
const descricao =
  "A Cria monta um painel simples que mostra quem fechou, quem está em dúvida e quem esfriou. E o seu WhatsApp te lembra de chamar de volta na hora certa.";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { title: titulo, description: descricao, url: "/" },
};

export default function Home() {
  return (
    <>
      <section id="topo">
        <Container className="flex flex-wrap items-center gap-14 pt-12 pb-16 sm:pt-[72px] sm:pb-24">
          <div className="min-w-0 flex-[1_1_420px]">
            <h1 className="text-[clamp(44px,5.6vw,76px)] leading-none font-bold tracking-[-1.5px]">
              {"Nenhum orçamento "}
              <span className="relative inline-block whitespace-nowrap">
                esquecido
                <svg aria-hidden viewBox="0 0 300 24" preserveAspectRatio="none" className="hero-risco absolute -bottom-[0.12em] left-0 h-[0.28em] w-full text-esfriou-borda">
                  <path d="M4 16 C 60 6, 120 4, 180 10 S 270 18, 296 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
              {" no WhatsApp."}
            </h1>
            <p className="mt-6 max-w-[520px] text-lg leading-[1.55] text-texto-2 sm:text-xl">
              Um painel simples que mostra quem fechou, quem está em dúvida e quem esfriou. E te lembra de chamar de volta.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BotaoLink href={linkWhatsapp("Oi! Vi o site da Cria e quero entender como o Painel funciona pro meu negócio.")} externo evento="whatsapp_click" params={{ local: "hero" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
                {" Falar no WhatsApp"}
              </BotaoLink>
              <BotaoLink href="#painel" variante="contorno">Ver o Painel funcionando</BotaoLink>
            </div>
            <div className="mt-8 flex items-center gap-3 text-[15px] text-texto-2">
              <span className="grid shrink-0 place-items-center rounded-full bg-black text-creme h-11 w-11">
                <svg viewBox="0 0 100 100" className="h-[26px] w-[26px]" aria-hidden>
                  <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                  <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                  <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                </svg>
              </span>
              <span>
                Feito sob medida para o seu negócio. Você fala direto com quem monta.
              </span>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_520px] sm:pb-6">
            <div className="hero-painel relative" role="img" aria-label="Exemplo do Painel de Orçamentos: 3 fecharam, 2 em dúvida e 1 recusou. A Elisa está em dúvida há 3 dias.">
              <div className="hidden rounded-3xl border border-black/10 bg-papel p-5 shadow-[0_30px_60px_-30px_rgba(60,45,10,0.35)] sm:block">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="font-display text-lg font-semibold">Orçamentos de novembro</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13px] text-suave">A receber</span>
                    <span className="font-display text-[22px] font-bold tabular-nums">R$ 4.420</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div key="fechou" className="flex flex-col gap-2 rounded-2xl bg-creme p-3">
                    <div className="flex justify-between text-[13px] font-bold">
                      <span className="text-fechou">Fechou</span>
                      <span className="text-suave">{3}</span>
                    </div>
                    <div key="Carla Mendes" className="rounded-xl bg-papel px-3 py-2.5 border border-black/6">
                      <div className="truncate text-sm font-bold">Carla M.</div>
                      <div className="truncate text-xs text-suave">Protocolo 3 meses</div>
                      <div className="mt-1.5 text-sm font-bold tabular-nums text-fechou">R$ 2.400</div>
                    </div>
                    <div key="Bruno Souza" className="rounded-xl bg-papel px-3 py-2.5 border border-black/6">
                      <div className="truncate text-sm font-bold">Bruno S.</div>
                      <div className="truncate text-xs text-suave">Clareamento</div>
                      <div className="mt-1.5 text-sm font-bold tabular-nums text-fechou">R$ 850</div>
                    </div>
                    <div key="Ana Paula" className="rounded-xl bg-papel px-3 py-2.5 border border-black/6">
                      <div className="truncate text-sm font-bold">Ana P.</div>
                      <div className="truncate text-xs text-suave">Limpeza de pele</div>
                      <div className="mt-1.5 text-sm font-bold tabular-nums text-fechou">R$ 1.170</div>
                    </div>
                  </div>
                  <div key="duvida" className="flex flex-col gap-2 rounded-2xl bg-creme p-3">
                    <div className="flex justify-between text-[13px] font-bold">
                      <span className="text-duvida">Em dúvida</span>
                      <span className="text-suave">{2}</span>
                    </div>
                    <div key="Elisa Torres" className="rounded-xl bg-papel px-3 py-2.5 hero-acende border-2 border-esfriou-borda">
                      <div className="truncate text-sm font-bold">Elisa T.</div>
                      <div className="truncate text-xs text-suave">Peeling + 3 sessões</div>
                      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-1">
                        <span className="text-sm font-bold tabular-nums">R$ 980</span>
                        <span className="hero-selo rounded-lg bg-esfriou-bg px-2 py-[3px] text-[11px] font-bold text-esfriou">
                          {"esfriou · "}
                          {3}
                          {" dias"}
                        </span>
                      </div>
                    </div>
                    <div key="Rafael Lima" className="rounded-xl bg-papel px-3 py-2.5 border border-black/6">
                      <div className="truncate text-sm font-bold">Rafa L.</div>
                      <div className="truncate text-xs text-suave">Botox</div>
                      <div className="mt-1.5 text-sm font-bold tabular-nums ">R$ 1.200</div>
                    </div>
                  </div>
                  <div key="recusou" className="flex flex-col gap-2 rounded-2xl bg-creme p-3">
                    <div className="flex justify-between text-[13px] font-bold">
                      <span className="text-recusou">Recusou</span>
                      <span className="text-suave">{1}</span>
                    </div>
                    <div key="Diego Rocha" className="rounded-xl bg-papel px-3 py-2.5 border border-black/6">
                      <div className="truncate text-sm font-bold">Diego R.</div>
                      <div className="truncate text-xs text-suave">Consulta</div>
                      <div className="mt-1.5 text-sm font-bold tabular-nums text-recusou">R$ 600</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-papel shadow-[0_30px_60px_-30px_rgba(60,45,10,0.35)] sm:hidden">
                <div className="rounded-b-3xl bg-black px-5 pt-5 pb-5 text-creme">
                  <div className="text-sm text-claro-2">A receber</div>
                  <div className="font-display text-[34px] font-bold leading-tight tabular-nums">R$ 4.420</div>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[13px] font-bold">
                    <span key="fechou" className="rounded-lg px-2.5 py-1.5 bg-fechou-bg text-fechou">3 fecharam</span>
                    <span key="duvida" className="rounded-lg px-2.5 py-1.5 bg-duvida-bg text-duvida">2 em dúvida</span>
                    <span key="recusou" className="rounded-lg px-2.5 py-1.5 bg-recusou-bg text-recusou">1 recusou</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="hero-acende rounded-2xl border-2 border-esfriou-borda bg-papel p-4">
                    <div className="flex justify-between text-base font-bold">
                      <span>Elisa Torres</span>
                      <span className="tabular-nums">R$ 980</span>
                    </div>
                    <div className="mt-1 text-sm text-suave">Peeling + 3 sessões</div>
                    <span className="hero-selo mt-3 inline-block rounded-lg bg-esfriou-bg px-2.5 py-1 text-xs font-bold text-esfriou">
                      {"esfriou · "}
                      {3}
                      {" dias"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-lembrete relative mt-4 flex max-w-[300px] items-start gap-3 rounded-[20px_20px_20px_6px] bg-black px-4 py-3.5 text-creme shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] sm:absolute sm:-bottom-10 sm:-left-6 sm:mt-0">
                <svg viewBox="0 0 100 100" className="h-[30px] w-[30px] shrink-0" aria-hidden>
                  <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={8} strokeLinejoin="round" />
                  <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" />
                  <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" />
                </svg>
                <div>
                  <div className="text-xs text-claro-3">Lembrete do Painel · 9:02</div>
                  <div className="mt-0.5 text-[15px] leading-[1.4]">A Elisa está em dúvida há 3 dias. Quer chamar ela agora?</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="faixa overflow-hidden border-y border-black bg-black py-4 text-creme" aria-label="Feito para: Clínicas de estética, Dentistas, Harmonização, Advogados, Salões de beleza, Restaurantes, Academias">
        <div className="faixa-rola flex w-max" aria-hidden>
          <ul key="0" className="flex shrink-0 items-center">
            <li key="Clínicas de estética" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Clínicas de estética
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Dentistas" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Dentistas
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Harmonização" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Harmonização
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Advogados" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Advogados
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Salões de beleza" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Salões de beleza
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Restaurantes" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Restaurantes
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Academias" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Academias
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
          </ul>
          <ul key="1" className="flex shrink-0 items-center">
            <li key="Clínicas de estética" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Clínicas de estética
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Dentistas" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Dentistas
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Harmonização" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Harmonização
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Advogados" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Advogados
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Salões de beleza" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Salões de beleza
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Restaurantes" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Restaurantes
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
            <li key="Academias" className="flex items-center gap-6 pr-6 font-display text-xl font-semibold whitespace-nowrap sm:text-2xl">
              Academias
              <svg viewBox="0 0 100 100" className="h-6 w-6 text-claro-3" aria-hidden>
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <section className="bg-black text-creme">
        <Container className="flex flex-wrap items-center gap-16 py-20 sm:py-28">
          <div className="flex min-w-0 max-w-[440px] flex-[1_1_360px] flex-col gap-2.5 rounded-4xl bg-noite p-6" role="img" aria-label="Conversa de WhatsApp em que a cliente pede o valor, diz que vai pensar e some há 6 dias">
            <div className="border-b border-creme/12 pb-2 text-[13px] text-claro-3">Elisa · cliente</div>
            <div key="Oi! Quanto fica o peeling com as 3 sessões?" data-surge style={{ "--atraso": "0ms" } as CSSProperties} className="max-w-[80%] px-3.5 py-2.5 text-[15px] self-start rounded-[16px_16px_16px_4px] bg-noite-2">Oi! Quanto fica o peeling com as 3 sessões?</div>
            <div key="Oi, Elisa! Fica R$ 980, dá pra parcelar em 3x 😊" data-surge style={{ "--atraso": "450ms" } as CSSProperties} className="max-w-[80%] px-3.5 py-2.5 text-[15px] self-end rounded-[16px_16px_4px_16px] bg-creme text-black">Oi, Elisa! Fica R$ 980, dá pra parcelar em 3x 😊</div>
            <div key="Vou pensar e te aviso" data-surge style={{ "--atraso": "900ms" } as CSSProperties} className="max-w-[80%] px-3.5 py-2.5 text-[15px] self-start rounded-[16px_16px_16px_4px] bg-noite-2">Vou pensar e te aviso</div>
            <div data-surge style={{ "--atraso": "1600ms" } as CSSProperties} className="mt-2 self-center rounded-full bg-recusou-ponto/15 px-3 py-1 text-[13px] font-semibold text-[#ff8f86]">visto há 6 dias</div>
          </div>
          <div className="min-w-0 flex-[1_1_420px]">
            <h2 data-surge className="titulo-secao">A cliente pediu o valor. E depois?</h2>
            <ul className="mt-9 flex flex-col gap-4">
              <li key="A conversa some no meio de outras cinquenta." data-surge style={{ "--atraso": "200ms" } as CSSProperties} className="border-l-4 border-creme/25 pl-5 font-display text-[22px] leading-snug font-medium text-claro sm:text-[26px]">A conversa some no meio de outras cinquenta.</li>
              <li key="Ela fecha com quem lembrou de chamar de volta." data-surge style={{ "--atraso": "350ms" } as CSSProperties} className="border-l-4 border-creme/25 pl-5 font-display text-[22px] leading-snug font-medium text-claro sm:text-[26px]">Ela fecha com quem lembrou de chamar de volta.</li>
              <li key="E você nem fica sabendo quanto perdeu." data-surge style={{ "--atraso": "500ms" } as CSSProperties} className="border-l-4 border-creme/25 pl-5 font-display text-[22px] leading-snug font-medium text-claro sm:text-[26px]">E você nem fica sabendo quanto perdeu.</li>
            </ul>
          </div>
        </Container>
      </section>
      <section id="painel">
        <Container className="py-20 sm:py-[120px]">
          <TituloSecao titulo="Abra o celular e saiba quem chamar hoje." subtitulo="Nome, valor e em que pé está. Sem planilha, sem caderno." />
          <div className="mt-14">
            <div className="grid gap-5 md:grid-cols-3">
              <div data-surge style={{ "--atraso": "0ms" } as CSSProperties} className="flex flex-wrap items-center gap-8 rounded-3xl border border-black/8 bg-papel p-7 sm:p-8 md:col-span-2 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(60,45,10,0.55)]">
                <div className="min-w-[240px] flex-1">
                  <h3 className="text-[26px] font-semibold leading-tight sm:text-[28px]">Cada orçamento no seu lugar</h3>
                  <p className="mt-3 text-[17px] leading-[1.55] text-texto-2">
                    Arraste o card quando a cliente responder. O resumo do mês se atualiza sozinho.
                  </p>
                </div>
                <div className="flex min-w-[260px] flex-1 gap-2">
                  <span key="fechou" className="flex-1 rounded-[14px] p-3.5 text-center font-bold bg-fechou-bg text-fechou">
                    Fechou
                    <br />
                    <span className="font-display text-[26px]">{3}</span>
                  </span>
                  <span key="duvida" className="flex-1 rounded-[14px] p-3.5 text-center font-bold bg-duvida-bg text-duvida">
                    Em dúvida
                    <br />
                    <span className="font-display text-[26px]">{2}</span>
                  </span>
                  <span key="recusou" className="flex-1 rounded-[14px] p-3.5 text-center font-bold bg-recusou-bg text-recusou">
                    Recusou
                    <br />
                    <span className="font-display text-[26px]">{1}</span>
                  </span>
                </div>
              </div>
              <div data-surge style={{ "--atraso": "110ms" } as CSSProperties} className="rounded-3xl bg-esfriou-bg p-7 sm:p-8 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(60,45,10,0.55)]">
                <h3 className="text-[26px] font-semibold text-esfriou-forte">Quem esfriou</h3>
                <p className="mt-2.5 mb-5 text-base leading-[1.55] text-esfriou-2">
                  Passou do prazo sem resposta? O card fica azul e você vê na hora.
                </p>
                <div className="flex flex-col gap-2">
                  <div key="Elisa Torres" className="flex justify-between rounded-xl bg-white px-3.5 py-2.5 text-[15px]">
                    <b>Elisa T.</b>
                    <span className="font-bold text-esfriou">
                      {3}
                      {" dias"}
                    </span>
                  </div>
                  <div key="Rafael Lima" className="flex justify-between rounded-xl bg-white px-3.5 py-2.5 text-[15px]">
                    <b>Rafa L.</b>
                    <span className="font-bold text-esfriou">
                      {5}
                      {" dias"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-surge style={{ "--atraso": "220ms" } as CSSProperties} className="rounded-3xl border border-black/8 bg-papel p-7 sm:p-8 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(60,45,10,0.55)]">
                <h3 className="text-[26px] font-semibold">Clientes sumidos</h3>
                <p className="mt-2.5 mb-5 text-base leading-[1.55] text-texto-2">
                  Quem não volta há 60 dias aparece numa lista, com um botão para mandar mensagem.
                </p>
                <div className="flex flex-col gap-2">
                  <div key="Juliana R." className="flex items-center justify-between gap-3 rounded-xl bg-creme px-3.5 py-2.5 text-[15px]">
                    <span>
                      <b>Juliana R.</b>
                      {" "}
                      <span className="text-suave">
                        {"· "}
                        {72}
                        {" dias"}
                      </span>
                    </span>
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-creme">Chamar</span>
                  </div>
                  <div key="Marcos P." className="flex items-center justify-between gap-3 rounded-xl bg-creme px-3.5 py-2.5 text-[15px]">
                    <span>
                      <b>Marcos P.</b>
                      {" "}
                      <span className="text-suave">
                        {"· "}
                        {95}
                        {" dias"}
                      </span>
                    </span>
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-creme">Chamar</span>
                  </div>
                </div>
              </div>
              <div data-surge style={{ "--atraso": "330ms" } as CSSProperties} className="flex flex-wrap items-end justify-between gap-6 rounded-3xl bg-black p-7 text-creme sm:p-8 md:col-span-2 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(60,45,10,0.55)]">
                <div className="min-w-[240px] flex-1">
                  <h3 className="text-[26px] font-semibold">Resumo do mês</h3>
                  <p className="mt-2.5 text-base leading-[1.55] text-claro-2">Quanto entra, quanto fechou e quanto ficou pelo caminho.</p>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 tabular-nums">
                  <div key="A receber">
                    <div className="text-[13px] text-claro-3">A receber</div>
                    <div className="font-display text-[30px] font-bold sm:text-[34px]">R$ 4.420</div>
                  </div>
                  <div key="Em dúvida">
                    <div className="text-[13px] text-claro-3">Em dúvida</div>
                    <div className="font-display text-[30px] font-bold sm:text-[34px]">R$ 2.180</div>
                  </div>
                  <div key="Recusou">
                    <div className="text-[13px] text-claro-3">Recusou</div>
                    <div className="font-display text-[30px] font-bold sm:text-[34px]">R$ 600</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-creme-2">
        <Container className="flex flex-wrap-reverse items-center gap-16 py-20 sm:py-[120px]">
          <div className="min-w-0 flex-[1_1_400px]">
            <h2 data-surge className="titulo-secao">O WhatsApp lembra por você.</h2>
            <p className="mt-5 max-w-[520px] text-lg leading-[1.55] text-texto-2 sm:text-[19px]">
              Todo dia de manhã chega uma mensagem com quem está esfriando. Um toque e a conversa abre.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5 text-[17px]">
              <ItemCheck key="Funciona no seu número de sempre">Funciona no seu número de sempre</ItemCheck>
              <ItemCheck key="Você escolhe depois de quantos dias o orçamento esfria">Você escolhe depois de quantos dias o orçamento esfria</ItemCheck>
              <ItemCheck key="Mensagem de retorno pronta, é só ajustar e enviar">Mensagem de retorno pronta, é só ajustar e enviar</ItemCheck>
            </ul>
          </div>
          <div className="min-w-0 flex-[0_1_360px]">
            <div role="img" aria-label="Exemplo do lembrete do Painel no WhatsApp com os orçamentos que estão esfriando" className="mx-auto w-full max-w-[360px] ">
              <div className="rounded-celular bg-black p-3.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
                <div className="overflow-hidden rounded-[32px] bg-creme">
                  <div className="flex items-center gap-2.5 border-b border-black/8 bg-papel px-[18px] py-3.5">
                    <span className="grid shrink-0 place-items-center rounded-full bg-black text-creme h-[38px] w-[38px]">
                      <svg viewBox="0 0 100 100" className="h-[22px] w-[22px]" aria-hidden>
                        <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
                        <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                        <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={7} strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[15px] font-bold">Painel Cria</div>
                      <div className="text-xs text-suave">lembretes</div>
                    </div>
                  </div>
                  <div className="flex min-h-[380px] flex-col gap-2.5 px-3.5 pt-[18px] pb-[26px] text-sm leading-[1.45]">
                    <div data-surge className="max-w-[88%] self-start rounded-[16px_16px_16px_4px] bg-papel px-3.5 py-3">
                      Bom dia! 2 orçamentos esfriando hoje:
                      <span key="Elisa Torres">
                        <br />
                        <b>Elisa</b>
                        {" · R$ 980 · "}
                        {3}
                        {" dias"}
                      </span>
                      <span key="Rafael Lima">
                        <br />
                        <b>Rafael</b>
                        {" · R$ 1.200 · "}
                        {5}
                        {" dias"}
                      </span>
                      <br />
                      Quer abrir a conversa?
                    </div>
                    <div data-surge style={{ "--atraso": "700ms" } as CSSProperties} className="self-end rounded-[16px_16px_4px_16px] bg-black px-3.5 py-2.5 text-creme">Abre a da Elisa</div>
                    <div data-surge style={{ "--atraso": "1400ms" } as CSSProperties} className="max-w-[88%] self-start rounded-[16px_16px_16px_4px] bg-papel px-3.5 py-3">
                      Sugestão: "Oi, Elisa! Separei um horário na quinta pro seu peeling. Quer que eu reserve?"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="como">
        <Container className="py-20 sm:py-[120px]">
          <h2 data-surge className="titulo-secao">Do primeiro papo ao Painel rodando.</h2>
          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
            <li key="Uma conversa de 20 minutos" data-surge style={{ "--atraso": "0ms" } as CSSProperties} className="border-t-2 border-black pt-7 pr-6 pb-8 lg:pb-0">
              <div className="font-display text-[44px] font-bold leading-none">{1}</div>
              <h3 className="mt-3 mb-2 font-sans text-xl font-bold">Uma conversa de 20 minutos</h3>
              <p className="leading-[1.55] text-texto-2">
                Você me conta como recebe orçamento hoje e onde ele se perde.
              </p>
            </li>
            <li key="Eu monto o seu Painel" data-surge style={{ "--atraso": "120ms" } as CSSProperties} className="border-t-2 border-black pt-7 pr-6 pb-8 lg:pb-0">
              <div className="font-display text-[44px] font-bold leading-none">{2}</div>
              <h3 className="mt-3 mb-2 font-sans text-xl font-bold">Eu monto o seu Painel</h3>
              <p className="leading-[1.55] text-texto-2">
                Com os seus serviços, preços e prazos. Nada de sistema genérico.
              </p>
            </li>
            <li key="Te ensino em uma chamada" data-surge style={{ "--atraso": "240ms" } as CSSProperties} className="border-t-2 border-black pt-7 pr-6 pb-8 lg:pb-0">
              <div className="font-display text-[44px] font-bold leading-none">{3}</div>
              <h3 className="mt-3 mb-2 font-sans text-xl font-bold">Te ensino em uma chamada</h3>
              <p className="leading-[1.55] text-texto-2">Em meia hora você já está arrastando os primeiros cards.</p>
            </li>
            <li key="Acompanho com você" data-surge style={{ "--atraso": "360ms" } as CSSProperties} className="border-t-2 border-black pt-7 pr-6 pb-8 lg:pb-0">
              <div className="font-display text-[44px] font-bold leading-none">{4}</div>
              <h3 className="mt-3 mb-2 font-sans text-xl font-bold">Acompanho com você</h3>
              <p className="leading-[1.55] text-texto-2">Nas primeiras semanas a gente ajusta o que precisar.</p>
            </li>
          </ol>
        </Container>
      </section>
      <section>
        <Container className="pb-20 sm:pb-[120px]">
          <Calculadora />
        </Container>
      </section>
      <section>
        <Container className="flex flex-wrap gap-5 pb-20 sm:pb-[120px]">
          <div data-surge style={{ "--atraso": "120ms" } as CSSProperties} className="flex min-w-0 flex-[1_1_280px] flex-col justify-between gap-6 rounded-3xl bg-black p-7 text-creme sm:p-9">
            <div>
              <h3 className="text-[26px] font-semibold leading-[1.15]">Estamos montando os primeiros cases.</h3>
              <p className="mt-3 leading-[1.55] text-claro-2">Quer que o seu negócio seja um deles?</p>
            </div>
            <BotaoLink href={linkWhatsapp("Oi! Vi no site que vocês estão montando os primeiros cases e quero que o meu negócio seja um deles.")} externo variante="creme" tamanho="sm" evento="whatsapp_click" params={{ local: "primeiros_cases" }} className="self-start">Quero ser um dos primeiros</BotaoLink>
          </div>
        </Container>
      </section>
      <section id="materiais" className="bg-creme-2">
        <Container className="py-20 sm:py-[120px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TituloSecao titulo="Estratégias de graça para o seu negócio." subtitulo="Cada vídeo da Cria vira um material prático. De graça." />
            <Link href="/material" className="text-base font-bold underline">Ver todos os materiais</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materiais.slice(0, 3).map((m, i) => (
                <CartaoMaterial key={m.slug} m={resumo(m)} botao="Baixar grátis" indice={i} />
              ))}
          </div>
        </Container>
      </section>
      <section id="duvidas">
        <div className="mx-auto max-w-[820px] px-5 py-20 sm:px-6 sm:py-[120px]">
          <h2 data-surge className="titulo-secao mb-8">Dúvidas comuns</h2>
          <Faq itens={[{ p: "Preciso trocar de número de WhatsApp?", r: "Não. O Painel funciona com o número que você já usa." }, { p: "Funciona no celular?", r: "Sim. Você abre o Painel no celular ou no computador, sem instalar nada." }, { p: "Em quanto tempo fica pronto?", r: "[prazo real aqui]" }, { p: "Preciso saber mexer em sistema?", r: "Não. Se você usa o WhatsApp, consegue usar o Painel. Eu te ensino em uma chamada." }, { p: "Como é o pagamento?", r: "[forma de pagamento real aqui]" }, { p: "Serve para o meu tipo de negócio?", r: "Serve para quem recebe pedidos de orçamento pelo WhatsApp. Na primeira conversa eu te digo com sinceridade se faz sentido." }]} />
        </div>
      </section>
      <section id="contato" className="bg-black text-creme">
        <div className="mx-auto flex max-w-[900px] flex-col items-center px-5 py-20 text-center sm:px-6 sm:py-[120px]">
          <svg viewBox="0 0 100 100" className="h-24 w-24" aria-hidden>
            <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={6} strokeLinejoin="round" />
            <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
            <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
          </svg>
          <h2 className="mt-7 font-display text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.05]">Vamos ver se o Painel serve pro seu negócio?</h2>
          <p className="mt-4 mb-9 text-lg text-claro-2">
            3 perguntas rápidas e a conversa já chega no WhatsApp com as suas respostas.
          </p>
          <Quiz />
        </div>
      </section>
    </>
  );
}
