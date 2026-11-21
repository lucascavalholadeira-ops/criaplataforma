import { NextResponse } from "next/server";
import { salvarLead } from "@/lib/leads";
import { buscarMaterial } from "@/lib/materiais";

const texto = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let corpo: Record<string, unknown>;
  try {
    corpo = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "JSON inválido" }, { status: 400 });
  }

  // Campo invisível preenchido = robô. Responde ok e não salva.
  if (texto(corpo.empresa, 200)) return NextResponse.json({ ok: true });

  const nome = texto(corpo.nome, 100);
  const whatsapp = texto(corpo.whatsapp, 20).replace(/\D/g, "");
  const material = buscarMaterial(texto(corpo.material, 60));

  if (nome.length < 2 || whatsapp.length < 10 || whatsapp.length > 13 || !material) {
    return NextResponse.json({ ok: false, erro: "Dados inválidos" }, { status: 400 });
  }

  const respostas: Record<string, string> = {};
  if (corpo.respostas && typeof corpo.respostas === "object") {
    for (const [k, v] of Object.entries(corpo.respostas as Record<string, unknown>).slice(0, 20)) {
      const valor = texto(v, 120);
      if (valor) respostas[k.slice(0, 40)] = valor;
    }
  }

  try {
    await salvarLead({ nome, whatsapp, material: material.slug, materialTitulo: material.titulo, respostas });
  } catch (e) {
    console.error("Falha ao salvar lead", e);
    return NextResponse.json({ ok: false, erro: "Não foi possível salvar" }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
