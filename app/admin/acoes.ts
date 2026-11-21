"use server";

import { redirect } from "next/navigation";
import { entrarNoAdmin, sairDoAdmin, senhaCorreta } from "@/lib/auth";

export async function entrar(_estado: { erro?: string }, dados: FormData): Promise<{ erro?: string }> {
  if (!process.env.ADMIN_PASSWORD) return { erro: "Senha do painel não configurada (ADMIN_PASSWORD)." };
  if (!senhaCorreta(String(dados.get("senha") ?? ""))) return { erro: "Senha incorreta." };
  await entrarNoAdmin();
  redirect("/admin");
}

export async function sair() {
  await sairDoAdmin();
  redirect("/admin/login");
}
