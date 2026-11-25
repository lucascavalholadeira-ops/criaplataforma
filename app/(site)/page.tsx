import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { linkWhatsapp } from "@/lib/site";
import Image from "next/image";
import { BotaoLink, Container, ItemCheck, TituloSecao } from "@/components/ui";
import { Marca } from "@/components/Logo";
import { IconeWhatsapp } from "@/components/icones";
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

const faq = [
  { p: "Preciso trocar meu número de WhatsApp?", r: "Não. O Painel funciona com o número que você já usa." },
  {
    p: "Meu WhatsApp pode ser bloqueado?",
    r: "O Painel não dispara mensagem em massa. Ele deixa a mensagem pronta e você decide enviar, uma por uma, do jeito que já faz hoje.",
  },
  { p: "Funciona no celular?", r: "Sim. Abre no navegador do celular ou do computador, sem instalar nada." },
  { p: "Em quanto tempo fica pronto?", r: "Em 7 dias depois da nossa primeira conversa." },
  {
    p: "Preciso saber mexer em sistema?",
    r: "Não. Se você usa WhatsApp, usa o Painel. E eu te ensino numa chamada de 30 minutos.",
  },
  {
    p: "O Painel traz clientes novos?",
    r: "Não, e prefiro ser honesto. Ele recupera quem já pediu orçamento e esfriou. Se você precisa de mais gente chegando, a gente conversa sobre isso separado.",
  },
  {
    p: "Os dados dos meus clientes ficam seguros?",
    r: "Cada negócio tem o seu próprio Painel, separado dos outros. Só você vê os seus dados.",
  },
  {
    p: "Serve pro meu negócio?",
    r: "Serve se você passa orçamento pelo WhatsApp e às vezes esquece de chamar de volta. Não serve se você vende só por loja online, sem conversa. Na primeira conversa eu te digo com sinceridade.",
  },
];

const passos = [
  { titulo: "Dia 1, uma conversa de 20 minutos", texto: "Você me conta como passa orçamento hoje e onde se perde." },
  { titulo: "Dias 2 a 5, eu monto", texto: "Com os seus serviços, preços e prazos. Nada de sistema genérico." },
  { titulo: "Dia 6, te mostro em 30 minutos", texto: "Numa chamada você aprende tudo. Se sabe usar WhatsApp, sabe usar o Painel." },
  { titulo: "Dia 7, você vê o número", texto: "Pela primeira vez, quanto dinheiro estava parado. Daí em diante, é só chamar." },
];

export default function Home() {
  return (
    <>
      <section id="topo">
        <Container className="flex flex-wrap items-center gap-14 pt-12 pb-16 sm:pt-[72px] sm:pb-24">
          <div className="min-w-0 flex-[1_1_420px]">
            <p className="mb-5 text-[15px] font-bold tracking-wide text-esfriou uppercase">Para quem passa orçamento pelo WhatsApp</p>
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
            <p className="mt-6 max-w-[540px] text-lg leading-[1.55] text-texto-2 sm:text-xl">
              Todo dia de manhã, o Painel te mostra quem pediu orçamento e esfriou, com a mensagem pronta pra mandar. Você só toca em enviar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BotaoLink href={linkWhatsapp("Oi, Lucas! Vi o site da Cria e quero ver como o Painel funcionaria no meu negócio.")} externo evento="whatsapp_click" params={{ local: "hero" }}>
                <IconeWhatsapp /> Ver o Painel com o meu negócio
              </BotaoLink>
              <BotaoLink href="#calculadora" variante="contorno">Quanto estou perdendo?</BotaoLink>
            </div>
            <p className="mt-3 text-sm text-suave">Uma conversa rápida pelo WhatsApp, sem compromisso.</p>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-semibold text-texto-2">
              <li className="flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 text-fechou"><path d="M5 12l5 5L20 7" /></svg>Usa o seu número de sempre</li>
              <li className="flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 text-fechou"><path d="M5 12l5 5L20 7" /></svg>Funciona no celular</li>
              <li className="flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 text-fechou"><path d="M5 12l5 5L20 7" /></svg>Rodando em 7 dias</li>
            </ul>
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
                  <div className="text-xs text-claro-3">Lembrete do Painel · 8:02</div>
                  <div className="mt-0.5 text-[15px] leading-[1.4]">A Elisa está em dúvida há 3 dias. Quer chamar ela agora?</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-black bg-black text-creme">
        <Container className="flex items-center gap-5 py-6 sm:gap-7 sm:py-7">
          <Image
            src="/home/dentista.webp"
            alt="Dentista segurando o celular no consultório"
            width={160}
            height={160}
            sizes="80px"
            className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
          />
          <p className="font-display text-[20px] leading-snug font-semibold sm:text-[28px]">
            Se o seu cliente pergunta <span className="text-limao">&quot;quanto fica?&quot;</span> no WhatsApp, isso é pra você.
          </p>
        </Container>
      </section>

      <section className="bg-black text-creme">
        <Container className="py-20 sm:py-28">
          <h2 data-surge className="titulo-secao">Você conhece essa conversa.</h2>
          <div className="mt-12 flex flex-wrap items-center gap-16">
            <div className="flex min-w-0 max-w-[440px] flex-[1_1_360px] flex-col gap-2.5 rounded-4xl bg-noite p-6" role="img" aria-label="Conversa de WhatsApp em que a cliente pede o valor, diz que vai pensar e some há 6 dias">
              <div className="border-b border-creme/12 pb-2 text-[13px] text-claro-3">Elisa · cliente</div>
              <div data-surge style={{ "--atraso": "0ms" } as CSSProperties} className="max-w-[80%] self-start rounded-[16px_16px_16px_4px] bg-noite-2 px-3.5 py-2.5 text-[15px]">Oi! Quanto fica o peeling com as 3 sessões?</div>
              <div data-surge style={{ "--atraso": "450ms" } as CSSProperties} className="max-w-[80%] self-end rounded-[16px_16px_4px_16px] bg-creme px-3.5 py-2.5 text-[15px] text-black">Oi, Elisa! Fica R$ 980, dá pra parcelar em 3x 😊</div>
              <div data-surge style={{ "--atraso": "900ms" } as CSSProperties} className="max-w-[80%] self-start rounded-[16px_16px_16px_4px] bg-noite-2 px-3.5 py-2.5 text-[15px]">Vou pensar e te aviso</div>
              <div data-surge style={{ "--atraso": "1600ms" } as CSSProperties} className="mt-2 self-center rounded-full bg-recusou-ponto/15 px-3 py-1 text-[13px] font-semibold text-[#ff8f86]">visto há 6 dias</div>
            </div>
            <div className="min-w-0 flex-[1_1_420px] space-y-5 text-lg leading-[1.6] text-claro sm:text-[20px]">
              <p data-surge className="font-display text-[26px] leading-snug font-semibold text-creme sm:text-[32px]">Ela não disse não. Disse que ia pensar.</p>
              <p data-surge style={{ "--atraso": "150ms" } as CSSProperties}>
                Aí chegaram mais trinta conversas. A agenda apertou. A conversa dela desceu, desceu, e sumiu da tela.
              </p>
              <p data-surge style={{ "--atraso": "300ms" } as CSSProperties}>
                Seis dias depois, a Elisa fechou. <b className="text-creme">Com outra pessoa. Que só lembrou de chamar.</b>
              </p>
            </div>
          </div>
          <div data-surge className="relative mt-16 overflow-hidden rounded-4xl">
            <Image
              src="/home/noite.webp"
              alt="Dona de clínica sozinha na recepção à noite, olhando o celular"
              width={1672}
              height={941}
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="h-[340px] w-full object-cover object-[70%_center] sm:h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
            <p className="absolute inset-y-0 left-0 flex max-w-[620px] items-center p-7 font-display text-[26px] leading-[1.15] font-bold sm:p-12 sm:text-[42px]">
              Ninguém perde cliente por atender mal. Perde por esquecer de chamar de volta.
            </p>
          </div>
        </Container>
      </section>

      <section id="calculadora">
        <Container className="py-20 sm:py-[120px]">
          <Calculadora />
        </Container>
      </section>

      <section className="bg-creme-2">
        <Container className="flex flex-wrap items-center gap-12 py-20 sm:py-[120px]">
          <div className="min-w-0 flex-[1_1_400px]">
            <h2 data-surge className="titulo-secao">O problema não é falta de cliente. É falta de lembrete.</h2>
            <p className="mt-5 max-w-[540px] text-lg leading-[1.55] text-texto-2 sm:text-[19px]">
              Você já tem quem pediu orçamento. Já pagou o anúncio, já respondeu, já explicou o procedimento. O que falta é alguém lembrar, na hora certa, de chamar de volta.
            </p>
            <p className="mt-5 max-w-[540px] border-l-4 border-black pl-5 font-display text-[22px] leading-snug font-semibold sm:text-[26px]">
              O Painel não traz cliente novo. Ele recupera quem já levantou a mão.
            </p>
          </div>
          <div data-surge className="min-w-0 flex-[1_1_440px] overflow-hidden rounded-4xl">
            <Image
              src="/home/manha.webp"
              alt="A mesma dona de clínica de manhã, tomando café e resolvendo os retornos pelo celular"
              width={1672}
              height={941}
              sizes="(max-width: 900px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section id="painel">
        <Container className="py-20 sm:py-[120px]">
          <TituloSecao titulo="Abra o celular e saiba quem chamar hoje." subtitulo="Nome, valor e há quantos dias a pessoa está pensando. Sem planilha, sem caderno." />
          <div className="mt-14">
            <div className="grid gap-5 md:grid-cols-3">
              <div data-surge style={{ "--atraso": "0ms" } as CSSProperties} className="flex flex-wrap items-center gap-8 rounded-3xl border border-black/8 bg-papel p-7 sm:p-8 md:col-span-2 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(60,45,10,0.55)]">
                <div className="min-w-[240px] flex-1">
                  <h3 className="text-[26px] font-semibold leading-tight sm:text-[28px]">Cada orçamento no seu lugar</h3>
                  <p className="mt-3 text-[17px] leading-[1.55] text-texto-2">
                    Quem pediu orçamento fica em três colunas: fechou, em dúvida e recusou, com nome e valor. Quando a pessoa responde, você arrasta o card e o mês se atualiza sozinho.
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
                <h3 className="text-[26px] font-semibold text-esfriou-forte">Ele te avisa quem esfriou</h3>
                <p className="mt-2.5 mb-5 text-base leading-[1.55] text-esfriou-2">
                  Passou o prazo sem resposta, o card fica azul e aparece no topo. Você escolhe quantos dias.
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
                <h3 className="text-[26px] font-semibold">Quem sumiu volta pra sua lista</h3>
                <p className="mt-2.5 mb-5 text-base leading-[1.55] text-texto-2">
                  Cliente que não volta há 60 dias aparece com um botão e a mensagem de retorno já escrita.
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
                  <h3 className="text-[26px] font-semibold">No fim do mês, você sabe a verdade</h3>
                  <p className="mt-2.5 text-base leading-[1.55] text-claro-2">Quanto entrou, quanto está em dúvida e quanto ficou na mesa. Pela primeira vez, sem chute.</p>
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
            <h2 data-surge className="titulo-secao">Seu WhatsApp lembra por você.</h2>
            <p className="mt-5 max-w-[520px] text-lg leading-[1.55] text-texto-2 sm:text-[19px]">
              Às 8h chega uma mensagem no seu celular. Você toca, a conversa abre com a mensagem pronta. Dois minutos e acabou.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5 text-[17px]">
              <ItemCheck>Chega no seu número de sempre</ItemCheck>
              <ItemCheck>Você escolhe depois de quantos dias avisar</ItemCheck>
              <ItemCheck>A mensagem já vem escrita, você só ajusta e envia</ItemCheck>
            </ul>
          </div>
          <div className="relative mx-auto min-w-0 w-full max-w-[460px] flex-[0_1_460px]">
            <div className="relative overflow-hidden rounded-4xl">
              <Image
                src="/home/celular.webp"
                alt=""
                width={1122}
                height={1402}
                sizes="(max-width: 520px) 100vw, 460px"
                className="h-auto w-full"
              />
              <div className="absolute top-[19.6%] left-[33.4%] flex h-[58.8%] w-[34.2%] flex-col items-center rounded-[9%/5%] bg-[#0d1220] pt-[14%] text-gelo" aria-hidden>
                <div className="font-sans text-[clamp(26px,7vw,40px)] leading-none font-semibold tabular-nums">8:00</div>
                <div className="mt-[8%] w-[88%] rounded-[10px] bg-white/15 p-[6%] text-left text-[clamp(8px,2.2vw,11px)] leading-snug">
                  <div className="font-bold">Painel Cria</div>
                  <div className="text-gelo/80">2 orçamentos esfriando hoje</div>
                </div>
              </div>
            </div>
            <div
              data-surge
              role="img"
              aria-label="Lembrete do Painel no WhatsApp: 2 orçamentos esfriando hoje, Elisa e Rafael"
              className="relative -mt-16 ml-4 max-w-[320px] rounded-[20px_20px_20px_6px] bg-black px-4 py-3.5 text-[15px] leading-[1.45] text-creme shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] sm:absolute sm:-bottom-8 sm:-left-10 sm:mt-0 sm:ml-0"
            >
              <div className="mb-1 flex items-center gap-2 text-xs text-claro-3">
                <Marca className="h-4 w-4" /> Painel Cria · 8:00
              </div>
              Bom dia! 2 orçamentos esfriando hoje:
              <br />
              <b>Elisa</b>, R$ 980, há 3 dias.
              <br />
              <b>Rafael</b>, R$ 1.200, há 5 dias.
              <br />
              Quer chamar agora?
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap items-center gap-10 py-20 sm:py-[120px]">
          <span className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-black text-creme sm:h-36 sm:w-36" aria-hidden>
            <Marca className="h-16 w-16 sm:h-20 sm:w-20" />
          </span>
          <div className="min-w-0 flex-[1_1_480px]">
            <h2 data-surge className="titulo-secao">Quem monta o seu Painel sou eu.</h2>
            <p className="mt-5 max-w-[640px] text-lg leading-[1.6] text-texto-2 sm:text-[19px]">
              Oi, eu sou o Lucas, da Cria. Não tem central de atendimento nem robô te respondendo. Sou eu que converso com você, monto o Painel com os seus serviços e preços e fico do seu lado nos primeiros dias.
            </p>
            <BotaoLink href={linkWhatsapp("Oi, Lucas! Vi o site da Cria e quero conversar sobre o Painel.")} externo evento="whatsapp_click" params={{ local: "quem_monta" }} tamanho="md" className="mt-7">
              <IconeWhatsapp /> Falar comigo no WhatsApp
            </BotaoLink>
          </div>
        </Container>
      </section>

      <section id="como" className="bg-creme-2">
        <Container className="py-20 sm:py-[120px]">
          <h2 data-surge className="titulo-secao">Do primeiro papo ao Painel rodando: 7 dias.</h2>
          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((passo, i) => (
              <li key={passo.titulo} data-surge style={{ "--atraso": `${i * 120}ms` } as CSSProperties} className="border-t-2 border-black pt-7 pr-6 pb-8 lg:pb-0">
                <div className="font-display text-[44px] font-bold leading-none">{i + 1}</div>
                <h3 className="mt-3 mb-2 font-sans text-xl font-bold">{passo.titulo}</h3>
                <p className="leading-[1.55] text-texto-2">{passo.texto}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="duvidas">
        <div className="mx-auto max-w-[820px] px-5 py-20 sm:px-6 sm:py-[120px]">
          <h2 data-surge className="titulo-secao mb-8">Dúvidas comuns</h2>
          <Faq itens={faq} />
        </div>
      </section>

      <section id="contato" className="bg-black text-creme">
        <div className="mx-auto flex max-w-[900px] flex-col items-center px-5 py-20 text-center sm:px-6 sm:py-[120px]">
          <Marca className="h-24 w-24" traco={6} />
          <h2 className="mt-7 font-display text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.05]">Vamos ver se o Painel serve pro seu negócio?</h2>
          <p className="mt-4 mb-9 max-w-[640px] text-lg text-claro-2">
            3 perguntas, 20 segundos. A conversa já chega no meu WhatsApp com as suas respostas, e eu te respondo pessoalmente.
          </p>
          <Quiz />
          <p className="mt-12 max-w-[620px] font-display text-[22px] leading-snug font-semibold sm:text-[26px]">
            Amanhã de manhã, alguém vai te pedir um orçamento. O Painel garante que você lembre de chamar de volta.
          </p>
        </div>
      </section>

      <section id="materiais" className="bg-creme-2">
        <Container className="py-20 sm:py-[120px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TituloSecao titulo="Ainda não é a hora? Leve uma estratégia de graça." subtitulo="Cada vídeo da Cria vira um material prático pro seu negócio." />
            <Link href="/material" className="text-base font-bold underline">Ver todos os materiais</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materiais.slice(0, 3).map((m, i) => (
              <CartaoMaterial key={m.slug} m={resumo(m)} botao="Baixar grátis" indice={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
