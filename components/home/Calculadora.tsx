"use client";

import { useRef, useState } from "react";
import { calculadora as t } from "@/lib/textos";
import { linkWhatsapp } from "@/lib/site";
import { reais } from "@/lib/painel";
import { track } from "@/lib/track";
import { BotaoLink } from "../ui";
import { IconeWhatsapp } from "../icones";

function Campo({
  rotulo,
  valor,
  texto,
  min,
  max,
  step,
  onChange,
}: {
  rotulo: string;
  valor: number;
  texto: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex flex-col gap-2 font-semibold">
      <span className="flex justify-between gap-4">
        {rotulo} <b className="tabular-nums">{texto}</b>
      </span>
      <input type="range" min={min} max={max} step={step} value={valor} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

export default function Calculadora() {
  const [orcamentos, setOrcamentos] = useState(40);
  const [ticket, setTicket] = useState(450);
  const [somem, setSomem] = useState(3);
  const usou = useRef(false);
  const parado = (orcamentos * ticket * somem) / 10;
  const recuperado = parado / 5;

  const mudar = (set: (v: number) => void) => (v: number) => {
    set(v);
    if (!usou.current) {
      usou.current = true;
      track("usou_calculadora");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-12 rounded-5xl border border-black/8 bg-papel p-[clamp(24px,4vw,56px)]">
      <div className="min-w-0 flex-[1_1_380px]">
        <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.05]">{t.titulo}</h2>
        <p className="mt-3 mb-7 text-base text-texto-2">{t.subtitulo}</p>
        <div className="flex flex-col gap-[22px]">
          <Campo rotulo={t.campos.orcamentos} valor={orcamentos} texto={String(orcamentos)} min={5} max={200} step={5} onChange={mudar(setOrcamentos)} />
          <Campo rotulo={t.campos.ticket} valor={ticket} texto={reais(ticket)} min={50} max={3000} step={50} onChange={mudar(setTicket)} />
          <Campo rotulo={t.campos.somem} valor={somem} texto={`${somem} de 10`} min={1} max={9} step={1} onChange={mudar(setSomem)} />
        </div>
      </div>
      <div className="min-w-0 flex-[1_1_300px] rounded-3xl bg-black p-7 text-creme sm:p-9">
        <div className="text-[15px] text-claro-2">{t.resultadoAntes}</div>
        <output
          className="mt-1.5 block font-display text-[clamp(44px,5vw,64px)] font-bold leading-[1.05] tabular-nums"
          aria-live="polite"
        >
          {reais(parado)}
        </output>
        <div className="mt-1 text-[15px] text-claro-2">{t.resultadoDepois}</div>
        <p className="mt-4 mb-7 text-base leading-normal text-claro">{t.recuperar(reais(recuperado), reais(recuperado * 12))}</p>
        <BotaoLink
          href={linkWhatsapp(t.mensagem(orcamentos, reais(ticket), reais(parado)))}
          externo
          variante="creme"
          tamanho="md"
          evento="whatsapp_click"
          params={{ local: "calculadora" }}
          className="w-full sm:w-auto"
        >
          <IconeWhatsapp /> {t.botao}
        </BotaoLink>
        <p className="mt-4 text-xs text-apagado">{t.aviso}</p>
      </div>
    </div>
  );
}
