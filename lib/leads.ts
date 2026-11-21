import "server-only";
import { Redis } from "@upstash/redis";

export type Lead = {
  id: string;
  data: string;
  nome: string;
  whatsapp: string;
  material: string;
  materialTitulo: string;
  respostas: Record<string, string>;
};

const CHAVE = "cria:leads";

/** Aceita as variáveis da integração Upstash da Vercel (KV_*) ou as do Upstash direto (UPSTASH_*). */
function conectar() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export const bancoConfigurado = () => conectar() !== null;

export async function salvarLead(lead: Omit<Lead, "id" | "data">) {
  const redis = conectar();
  if (!redis) throw new Error("Banco de dados não configurado");
  const completo: Lead = { id: crypto.randomUUID(), data: new Date().toISOString(), ...lead };
  await redis.lpush(CHAVE, JSON.stringify(completo));
  return completo;
}

export async function listarLeads(): Promise<Lead[]> {
  const redis = conectar();
  if (!redis) return [];
  const itens = await redis.lrange<Lead | string>(CHAVE, 0, -1);
  return itens.map((i) => (typeof i === "string" ? (JSON.parse(i) as Lead) : i));
}
