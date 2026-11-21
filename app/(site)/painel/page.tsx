import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { linkWhatsapp } from "@/lib/site";
import { BotaoLink, Container, ItemCheck, TituloSecao } from "@/components/ui";
import Faq from "@/components/home/Faq";
import PainelCelular from "@/components/PainelCelular";

export const metadata: Metadata = {
  title: "Painel de Orçamentos",
  description:
    "Um painel para ver quem fechou, quem está em dúvida e quem esfriou. Montado para o seu negócio, no celular ou no computador.",
  alternates: { canonical: "/painel" },
  openGraph: {
    title: "Painel de Orçamentos | Cria",
    description:
      "Um painel para ver quem fechou, quem está em dúvida e quem esfriou. Montado para o seu negócio, no celular ou no computador.",
    url: "/painel",
  },
};

export default function PaginaPainel() {
  return (
    <>
      <section>
        <Container className="pt-12 pb-16 sm:pt-[72px] sm:pb-24">
          <div className="max-w-[760px]">
            <h1 className="text-[clamp(44px,5.6vw,72px)] leading-none font-bold tracking-[-1.5px]">Todo orçamento à vista. Nenhum esquecido.</h1>
            <p className="mt-6 max-w-[560px] text-lg leading-[1.55] text-texto-2 sm:text-xl">
              Um painel montado para o seu negócio, que mostra quem chamar hoje e quanto vai entrar no mês.
            </p>
            <p className="mt-4 font-display text-xl font-semibold">Valor sob medida, combinado na conversa.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BotaoLink href={linkWhatsapp("Oi! Vi a página do Painel no site e quero conhecer.")} externo evento="quero_ver_painel" params={{ local: "painel_hero" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
                {" Quero ver o Painel"}
              </BotaoLink>
              <BotaoLink href="#recursos" variante="contorno">Ver o que ele faz</BotaoLink>
            </div>
          </div>
          <div className="mt-14 hidden md:block">
            <div role="img" aria-label="Exemplo do Painel no computador: menu lateral, resumo do mês, aviso de 2 orçamentos esfriando e as colunas Fechou, Em dúvida e Recusou." className="flex overflow-hidden rounded-4xl border border-black/10 bg-creme text-left shadow-[0_30px_60px_-30px_rgba(60,45,10,0.35)]">
              <aside className="hidden w-[240px] shrink-0 flex-col gap-7 bg-black px-[18px] py-7 text-creme lg:flex">
                <span className="inline-flex items-center gap-2.5 px-2">
                  <svg viewBox="0 0 100 100" className="h-7 w-7" aria-hidden>
                    <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={8} strokeLinejoin="round" />
                    <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" />
                    <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" />
                  </svg>
                  <span className="font-display font-bold tracking-[-0.5px] text-[22px]">cria</span>
                </span>
                <div className="flex flex-col gap-1 text-[15px] font-semibold">
                  <div key="Orçamentos" className="flex min-h-11 items-center justify-between rounded-xl px-3.5 py-3 bg-creme text-black">
                    Orçamentos
                    <span className="text-[13px] ">6</span>
                  </div>
                  <div key="Esfriando" className="flex min-h-11 items-center justify-between rounded-xl px-3.5 py-3 text-claro">
                    Esfriando
                    <span className="rounded-lg bg-esfriou-borda px-2 py-0.5 text-xs text-white">2</span>
                  </div>
                  <div key="Clientes sumidos" className="flex min-h-11 items-center justify-between rounded-xl px-3.5 py-3 text-claro">
                    Clientes sumidos
                    <span className="text-[13px] text-claro-3">4</span>
                  </div>
                  <div key="Resumo do mês" className="flex min-h-11 items-center justify-between rounded-xl px-3.5 py-3 text-claro">Resumo do mês</div>
                  <div key="Mensagens prontas" className="flex min-h-11 items-center justify-between rounded-xl px-3.5 py-3 text-claro">Mensagens prontas</div>
                </div>
                <div className="mt-auto rounded-2xl bg-noite p-4 text-sm leading-normal text-claro-2">
                  {"Lembrete diário no WhatsApp às "}
                  <b className="text-creme">9:00</b>
                  .
                  <br />
                  <span className="font-bold text-creme underline">Ajustar</span>
                </div>
              </aside>
              <div className="flex min-w-0 flex-1 flex-col gap-6 p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="font-display text-[34px] font-bold leading-tight">Orçamentos</div>
                    <div className="mt-0.5 text-[15px] text-suave">Novembro de 2026</div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="hidden min-h-[46px] items-center gap-2 rounded-full border border-black/12 bg-papel px-4 text-[15px] text-suave md:flex">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-[18px] w-[18px]">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3.5-3.5" />
                      </svg>
                      {" Buscar cliente"}
                    </span>
                    <span className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-black px-[22px] font-bold text-creme">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      {" Novo orçamento"}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3.5 tabular-nums xl:grid-cols-4">
                  <div className="rounded-[20px] bg-black p-5 text-creme">
                    <div className="text-sm text-claro-2">A receber</div>
                    <div className="mt-1 font-display text-[28px] font-bold sm:text-[32px]">R$ 4.420</div>
                  </div>
                  <div key="fechou" className="rounded-[20px] p-5 bg-fechou-bg">
                    <div className="text-sm font-semibold text-fechou">Fecharam</div>
                    <div className="mt-1 font-display text-[28px] font-bold sm:text-[32px] text-fechou-forte">{3}</div>
                  </div>
                  <div key="duvida" className="rounded-[20px] p-5 bg-duvida-bg">
                    <div className="text-sm font-semibold text-duvida">Em dúvida</div>
                    <div className="mt-1 font-display text-[28px] font-bold sm:text-[32px] text-duvida-forte">R$ 2.180</div>
                  </div>
                  <div key="recusou" className="rounded-[20px] p-5 bg-recusou-bg">
                    <div className="text-sm font-semibold text-recusou">Recusaram</div>
                    <div className="mt-1 font-display text-[28px] font-bold sm:text-[32px] text-recusou-forte">R$ 600</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 rounded-[20px] bg-esfriou-bg px-5 py-4">
                  <span className="text-esfriou">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
                      <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1L19.1 4.9" />
                    </svg>
                  </span>
                  <div className="min-w-[220px] flex-1 text-base text-esfriou-forte">
                    <b>2 orçamentos esfriando:</b>
                    {" Elisa (3 dias) e Rafael (5 dias). Somam R$ 2.180."}
                  </div>
                  <span className="inline-flex min-h-11 items-center rounded-full bg-esfriou px-[18px] font-bold text-white">Chamar no WhatsApp</span>
                </div>
                <div className="grid items-start gap-4 md:grid-cols-3">
                  <div key="fechou" className="flex flex-col gap-2.5 rounded-[22px] bg-creme-2 p-3.5">
                    <div className="mx-1.5 my-1 flex justify-between text-base font-bold">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-fechou-ponto" />
                        Fechou
                      </span>
                      <span className="text-suave tabular-nums">
                        {3}
                        {" · R$ 4.420"}
                      </span>
                    </div>
                    <div key="Carla Mendes" className="rounded-2xl bg-papel px-4 py-3.5 border border-black/6">
                      <div className="flex justify-between gap-2 font-bold">
                        <span>Carla Mendes</span>
                        <span className="tabular-nums text-fechou">R$ 2.400</span>
                      </div>
                      <div className="mt-1 text-sm text-suave">Protocolo 3 meses · Instagram</div>
                      <div className="mt-2.5 text-[13px] text-suave">Fechou em 12/11</div>
                    </div>
                    <div key="Bruno Souza" className="rounded-2xl bg-papel px-4 py-3.5 border border-black/6">
                      <div className="flex justify-between gap-2 font-bold">
                        <span>Bruno Souza</span>
                        <span className="tabular-nums text-fechou">R$ 850</span>
                      </div>
                      <div className="mt-1 text-sm text-suave">Clareamento · Google</div>
                      <div className="mt-2.5 text-[13px] text-suave">Fechou em 08/11</div>
                    </div>
                    <div key="Ana Paula" className="rounded-2xl bg-papel px-4 py-3.5 border border-black/6">
                      <div className="flex justify-between gap-2 font-bold">
                        <span>Ana Paula</span>
                        <span className="tabular-nums text-fechou">R$ 1.170</span>
                      </div>
                      <div className="mt-1 text-sm text-suave">Limpeza de pele · Indicação</div>
                      <div className="mt-2.5 text-[13px] text-suave">Fechou em 10/11</div>
                    </div>
                  </div>
                  <div key="duvida" className="flex flex-col gap-2.5 rounded-[22px] bg-creme-2 p-3.5">
                    <div className="mx-1.5 my-1 flex justify-between text-base font-bold">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-duvida-ponto" />
                        Em dúvida
                      </span>
                      <span className="text-suave tabular-nums">
                        {2}
                        {" · R$ 2.180"}
                      </span>
                    </div>
                    <div key="Elisa Torres" className="rounded-2xl bg-papel px-4 py-3.5 border-2 border-esfriou-borda">
                      <div className="flex justify-between gap-2 font-bold">
                        <span>Elisa Torres</span>
                        <span className="tabular-nums ">R$ 980</span>
                      </div>
                      <div className="mt-1 text-sm text-suave">Peeling + 3 sessões · Instagram</div>
                      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-lg bg-esfriou-bg px-2.5 py-1 text-xs font-bold text-esfriou">Esfriou · 3 dias sem resposta</span>
                        <span className="text-sm font-bold underline">Chamar</span>
                      </div>
                    </div>
                    <div key="Rafael Lima" className="rounded-2xl bg-papel px-4 py-3.5 border-2 border-esfriou-borda">
                      <div className="flex justify-between gap-2 font-bold">
                        <span>Rafael Lima</span>
                        <span className="tabular-nums ">R$ 1.200</span>
                      </div>
                      <div className="mt-1 text-sm text-suave">Botox · WhatsApp</div>
                      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-lg bg-esfriou-bg px-2.5 py-1 text-xs font-bold text-esfriou">Esfriou · 5 dias sem resposta</span>
                        <span className="text-sm font-bold underline">Chamar</span>
                      </div>
                    </div>
                  </div>
                  <div key="recusou" className="flex flex-col gap-2.5 rounded-[22px] bg-creme-2 p-3.5">
                    <div className="mx-1.5 my-1 flex justify-between text-base font-bold">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-recusou-ponto" />
                        Recusou
                      </span>
                      <span className="text-suave tabular-nums">
                        {1}
                        {" · R$ 600"}
                      </span>
                    </div>
                    <div key="Diego Rocha" className="rounded-2xl bg-papel px-4 py-3.5 border border-black/6">
                      <div className="flex justify-between gap-2 font-bold">
                        <span>Diego Rocha</span>
                        <span className="tabular-nums text-recusou">R$ 600</span>
                      </div>
                      <div className="mt-1 text-sm text-suave">Consulta · Instagram</div>
                      <div className="mt-2.5 text-[13px] text-suave">Motivo: achou caro</div>
                    </div>
                    <div className="rounded-2xl border-2 border-dashed border-black/20 p-[18px] text-center text-sm text-suave">Arraste um card para cá quando a cliente recusar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 md:hidden">
            <PainelCelular />
          </div>
        </Container>
      </section>
      <section id="recursos" className="bg-creme-2">
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
      <section className="hidden md:block">
        <Container className="flex flex-wrap items-center gap-16 py-[120px]">
          <div className="min-w-0 flex-[0_1_360px]">
            <PainelCelular />
          </div>
          <div className="min-w-0 flex-[1_1_400px]">
            <h2 className="titulo-secao">No celular, do jeito que você já usa.</h2>
            <p className="mt-5 max-w-[520px] text-[19px] leading-[1.55] text-texto-2">
              Abre no navegador, sem instalar nada. O que esfriou aparece primeiro, e cada card tem um botão para chamar a cliente no WhatsApp.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5 text-[17px]">
              <ItemCheck key="Abre no celular e no computador">Abre no celular e no computador</ItemCheck>
              <ItemCheck key="Montado com os nomes do seu negócio">Montado com os nomes do seu negócio</ItemCheck>
              <ItemCheck key="Você continua usando o seu WhatsApp">Você continua usando o seu WhatsApp</ItemCheck>
            </ul>
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
      <section>
        <Container className="py-20 sm:py-[120px]">
          <h2 className="titulo-secao">Feito para quem passa orçamento.</h2>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            <li key="Clínicas de estética" className="rounded-full bg-papel px-5 py-3 text-base font-semibold ring-1 ring-black/10">Clínicas de estética</li>
            <li key="Dentistas" className="rounded-full bg-papel px-5 py-3 text-base font-semibold ring-1 ring-black/10">Dentistas</li>
            <li key="Advogados" className="rounded-full bg-papel px-5 py-3 text-base font-semibold ring-1 ring-black/10">Advogados</li>
            <li key="Restaurantes" className="rounded-full bg-papel px-5 py-3 text-base font-semibold ring-1 ring-black/10">Restaurantes</li>
            <li key="Salões" className="rounded-full bg-papel px-5 py-3 text-base font-semibold ring-1 ring-black/10">Salões</li>
            <li key="Outros negócios locais" className="rounded-full bg-papel px-5 py-3 text-base font-semibold ring-1 ring-black/10">Outros negócios locais</li>
          </ul>
        </Container>
      </section>
      <section>
        <div className="mx-auto max-w-[820px] px-5 pb-20 sm:px-6 sm:pb-[120px]">
          <h2 className="titulo-secao mb-8">Perguntas sobre o Painel</h2>
          <Faq itens={[{ p: "Preciso instalar alguma coisa?", r: "Não. Abre pelo navegador do celular ou do computador. Dá para salvar na tela inicial." }, { p: "Meus dados ficam seguros?", r: "Sim. Só você (e quem você autorizar) acessa o seu Painel." }, { p: "Posso mudar as colunas e os prazos?", r: "Pode. Os nomes, as colunas e o prazo para \"esfriou\" são ajustados para o seu jeito de trabalhar." }, { p: "E se eu já uso planilha?", r: "A gente pode começar a partir dela. Você não perde o que já anotou." }]} />
        </div>
      </section>
      <section id="contato" className="bg-black text-creme">
        <div className="mx-auto flex max-w-[900px] flex-col items-center px-5 py-20 text-center sm:px-6 sm:py-[120px]">
          <svg viewBox="0 0 100 100" className="h-24 w-24" aria-hidden>
            <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="none" stroke="currentColor" strokeWidth={6} strokeLinejoin="round" />
            <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
            <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
          </svg>
          <h2 className="mt-7 font-display text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.05]">Quer ver o Painel com os dados do seu negócio?</h2>
          <p className="mt-4 mb-9 text-lg text-claro-2">
            Me chama no WhatsApp. Eu te mostro funcionando, sem compromisso.
          </p>
          <BotaoLink href={linkWhatsapp("Oi! Vi a página do Painel no site e quero conhecer.")} externo variante="creme" evento="quero_ver_painel" params={{ local: "painel_final" }} className="w-full sm:w-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
            </svg>
            {" Quero ver o Painel"}
          </BotaoLink>
        </div>
      </section>
    </>
  );
}
