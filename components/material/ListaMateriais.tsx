"use client";

import { useMemo, useState } from "react";
import type { ResumoMaterial } from "@/lib/materiais";
import CartaoMaterial from "./CartaoMaterial";

export default function ListaMateriais({
  materiais,
  todos,
  botao,
}: {
  materiais: ResumoMaterial[];
  todos: string;
  botao: string;
}) {
  const nichos = useMemo(() => Array.from(new Set(materiais.map((m) => m.nicho))).sort(), [materiais]);
  const [filtro, setFiltro] = useState<string | null>(null);
  const visiveis = filtro ? materiais.filter((m) => m.nicho === filtro) : materiais;

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar por nicho"
        className="no-scrollbar -mx-5 mb-8 flex gap-1.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {[null, ...nichos].map((nicho) => {
          const ativo = nicho === filtro;
          return (
            <button
              key={nicho ?? "todos"}
              type="button"
              aria-pressed={ativo}
              onClick={() => setFiltro(nicho)}
              className={`min-h-11 shrink-0 rounded-full px-5 text-[15px] transition-colors ${ativo ? "bg-black font-bold text-creme" : "bg-creme-2 font-semibold hover:bg-creme-3"}`}
            >
              {nicho ?? todos}
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((m, i) => (
          <CartaoMaterial key={m.slug} m={m} botao={botao} indice={i} />
        ))}
      </div>
    </>
  );
}
