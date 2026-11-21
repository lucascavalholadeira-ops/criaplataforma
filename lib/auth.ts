import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE_ADMIN = "cria_admin";

function senha() {
  return process.env.ADMIN_PASSWORD ?? "";
}

/** Token guardado no cookie: assinatura derivada da senha (trocar a senha desloga todo mundo). */
function token() {
  return createHmac("sha256", senha()).update("cria-admin-v1").digest("hex");
}

function iguais(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function senhaCorreta(tentativa: string) {
  return senha().length > 0 && iguais(tentativa, senha());
}

export async function entrarNoAdmin() {
  (await cookies()).set(COOKIE_ADMIN, token(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function sairDoAdmin() {
  (await cookies()).delete({ name: COOKIE_ADMIN, path: "/admin" });
}

export async function estaLogado() {
  if (!senha()) return false;
  const valor = (await cookies()).get(COOKIE_ADMIN)?.value;
  return !!valor && iguais(valor, token());
}
