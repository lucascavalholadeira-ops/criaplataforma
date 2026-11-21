"use client";

import { useState } from "react";
import { quiz } from "@/lib/textos";
import { linkWhatsapp } from "@/lib/site";
import { track } from "@/lib/track";
import { IconeWhatsapp } from "../icones";

export default function Quiz() {
  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const total = quiz.perguntas.length;
  const terminou = passo >= total;
  const feitas = Math.min(passo, total);

  function responder(id: string, opcao: string) {
    setRespostas((r) => ({ ...r, [id]: opcao }));
    if (passo + 1 === total) track("quiz_concluido", { negocio: id === "negocio" ? opcao : respostas.negocio });
    setPasso((p) => p + 1);
  }

  return (
    <div className="w-full max-w-[640px] rounded-4xl bg-noite p-6 text-left sm:p-7">
      <div className="text-[13px] text-claro-3">
        {terminou ? quiz.progresso(total, total) : quiz.progresso(passo + 1, total)}
      </div>
      <div
        className="mt-2.5 mb-5 h-1.5 rounded-md bg-noite-3"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={feitas}
        aria-label="Progresso do quiz"
      >
        <div
          className="h-1.5 rounded-md bg-creme transition-[width] duration-300"
          style={{ width: `${(Math.max(feitas, terminou ? total : passo + 1) / total) * 100}%` }}
        />
      </div>
      <div aria-live="polite">
        {terminou ? (
          <div className="surgir">
            <h3 className="text-2xl font-semibold leading-snug">{quiz.final.titulo}</h3>
            <ul className="mt-4 space-y-1.5 text-[15px]">
              {quiz.perguntas.map((p) => (
                <li key={p.id}>
                  <span className="text-claro-3">{p.pergunta.replace("?", "")}: </span>
                  <strong>{respostas[p.id]}</strong>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={linkWhatsapp(quiz.mensagem(respostas))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { local: "quiz", negocio: respostas.negocio })}
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-creme px-7 text-[17px] font-bold text-black transition-colors hover:bg-white"
              >
                <IconeWhatsapp /> {quiz.final.botao}
              </a>
              <button
                type="button"
                onClick={() => {
                  setRespostas({});
                  setPasso(0);
                }}
                className="min-h-11 text-sm font-bold text-claro-3 underline hover:text-creme"
              >
                {quiz.final.refazer}
              </button>
            </div>
          </div>
        ) : (
          <div key={passo} className="surgir">
            <h3 className="mb-4 text-2xl font-semibold">{quiz.perguntas[passo].pergunta}</h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {quiz.perguntas[passo].opcoes.map((opcao) => {
                const marcada = respostas[quiz.perguntas[passo].id] === opcao;
                return (
                  <button
                    key={opcao}
                    type="button"
                    onClick={() => responder(quiz.perguntas[passo].id, opcao)}
                    className={`min-h-[52px] rounded-[14px] p-4 text-left font-semibold transition-colors ${marcada ? "bg-creme text-black" : "bg-noite-2 hover:bg-[#33302a]"}`}
                  >
                    {opcao}
                  </button>
                );
              })}
            </div>
            {passo > 0 && (
              <button
                type="button"
                onClick={() => setPasso((p) => p - 1)}
                className="mt-5 min-h-11 text-sm font-bold text-claro-3 underline hover:text-creme"
              >
                {quiz.voltar}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
