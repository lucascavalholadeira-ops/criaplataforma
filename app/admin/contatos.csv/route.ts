import { estaLogado } from "@/lib/auth";
import { listarLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

const campos = ["area", "papel", "volume", "fecham", "vouPensar", "tempoResposta"];

const celula = (v: string) => `"${v.replace(/"/g, '""')}"`;

export async function GET() {
  if (!(await estaLogado())) return new Response("Não autorizado", { status: 401 });

  const leads = await listarLeads();
  const linhas = [
    ["data", "nome", "whatsapp", "material", ...campos].map(celula).join(";"),
    ...leads.map((l) =>
      [l.data, l.nome, l.whatsapp, l.materialTitulo, ...campos.map((c) => l.respostas[c] ?? "")].map(celula).join(";"),
    ),
  ];

  return new Response("﻿" + linhas.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="contatos-cria.csv"',
    },
  });
}
