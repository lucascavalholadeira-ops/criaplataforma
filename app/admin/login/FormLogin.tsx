"use client";

import { useActionState } from "react";
import { entrar } from "../acoes";

export default function FormLogin() {
  const [estado, acao, enviando] = useActionState(entrar, {});

  return (
    <form action={acao} className="mt-6 flex flex-col">
      <label htmlFor="senha" className="text-sm font-semibold">
        Senha
      </label>
      <input
        id="senha"
        name="senha"
        type="password"
        autoComplete="current-password"
        required
        autoFocus
        className="mt-2 h-14 rounded-xl border border-black/15 bg-white px-4 text-base focus:border-black focus:outline-none"
      />
      {estado.erro && <p className="mt-2 text-sm font-semibold text-recusou">{estado.erro}</p>}
      <button
        type="submit"
        disabled={enviando}
        className="mt-5 min-h-14 rounded-full bg-black px-6 text-[17px] font-bold text-creme hover:bg-[#2a2820] disabled:opacity-60"
      >
        {enviando ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
