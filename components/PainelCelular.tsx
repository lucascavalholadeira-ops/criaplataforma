"use client";

import { useState } from "react";
import { STATUS, contagem, esfriando, estilos, porStatus, reais, totalStatus, type Status } from "@/lib/painel";
import { Marca } from "./Logo";
import { IconeColunas, IconeGrafico, IconeMais, IconePessoa } from "./icones";

/** Demonstração interativa do Painel dentro de um celular. */
export default function PainelCelular() {
  const [aba, setAba] = useState<Status>("duvida");
  const totalEsfriando = esfriando.reduce((soma, o) => soma + o.valor, 0);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="rounded-celular bg-black p-3.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
        <div className="flex h-[640px] flex-col overflow-hidden rounded-[32px] bg-creme text-left">
          <div className="rounded-b-[28px] bg-black px-5 pt-4 pb-5 text-creme">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Marca className="h-7 w-7" />
                <span className="font-display text-[22px] font-bold">cria</span>
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-creme text-black" aria-hidden>
                <IconeMais className="h-[18px] w-[18px]" />
              </span>
            </div>
            <div className="mt-4 text-sm text-claro-2">A receber em novembro</div>
            <div className="font-display text-[36px] font-bold leading-tight tabular-nums">{reais(totalStatus("fechou"))}</div>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[13px] font-bold">
              {STATUS.map((s) => (
                <span key={s} className={`rounded-lg px-2.5 py-1.5 ${estilos[s].fundo} ${estilos[s].texto}`}>
                  {contagem(s)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pt-4">
            <div className="rounded-[18px] bg-esfriou-bg px-4 py-3.5 text-esfriou-forte">
              <div className="text-[15px] font-bold">{esfriando.length} orçamentos esfriando</div>
              <div className="mt-0.5 text-sm">
                {`Somam ${reais(totalEsfriando)}.`} Chame hoje.
              </div>
            </div>
            <div role="tablist" aria-label="Status dos orçamentos" className="flex gap-1.5 rounded-full bg-creme-2 p-[5px]">
              {STATUS.map((s) => (
                <button
                  key={s}
                  type="button"
                  role="tab"
                  aria-selected={aba === s}
                  onClick={() => setAba(s)}
                  className={`min-h-11 flex-1 rounded-full text-sm transition-colors ${aba === s ? "bg-black font-bold text-creme" : "font-semibold"}`}
                >
                  {estilos[s].label}
                </button>
              ))}
            </div>
            <div role="tabpanel" className="flex flex-col gap-3 overflow-y-auto pb-3">
              {porStatus(aba).map((o) => (
                <div
                  key={o.nome}
                  className={`rounded-[18px] bg-papel p-4 ${o.esfriou ? "border-2 border-esfriou-borda" : "border border-black/6"}`}
                >
                  <div className="flex justify-between text-base font-bold">
                    <span>{o.nome}</span>
                    <span className={`tabular-nums ${aba === "duvida" ? "" : estilos[aba].texto}`}>{reais(o.valor)}</span>
                  </div>
                  <div className="mt-1 text-sm text-suave">{o.servico}</div>
                  {o.esfriou ? (
                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-lg bg-esfriou-bg px-2.5 py-1 text-xs font-bold text-esfriou">
                        Esfriou · {o.esfriou} dias
                      </span>
                      <span className="inline-flex min-h-10 items-center rounded-full bg-black px-4 text-sm font-bold text-creme">
                        Chamar
                      </span>
                    </div>
                  ) : (
                    <div className="mt-2 text-[13px] text-suave">{o.nota}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-around border-t border-black/8 bg-papel pt-2 pb-4 text-xs" aria-hidden>
            <span className="flex min-w-16 flex-col items-center gap-1 font-bold">
              <IconeColunas />
              Orçamentos
            </span>
            <span className="flex min-w-16 flex-col items-center gap-1 text-suave">
              <IconePessoa />
              Sumidos
            </span>
            <span className="flex min-w-16 flex-col items-center gap-1 text-suave">
              <IconeGrafico />
              Resumo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
