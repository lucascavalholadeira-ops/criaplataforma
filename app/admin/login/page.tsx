import { redirect } from "next/navigation";
import { Logo } from "@/components/Logo";
import { estaLogado } from "@/lib/auth";
import FormLogin from "./FormLogin";

export const dynamic = "force-dynamic";

export default async function Login() {
  if (await estaLogado()) redirect("/admin");

  return (
    <main className="flex min-h-[100dvh] items-center justify-center px-5">
      <div className="w-full max-w-sm rounded-4xl border border-black/8 bg-papel p-8 shadow-[0_30px_60px_-30px_rgba(60,45,10,0.35)]">
        <Logo />
        <h1 className="mt-6 text-[28px] font-bold">Painel da Cria</h1>
        <p className="mt-1 text-texto-2">Contatos que baixaram os materiais.</p>
        <FormLogin />
      </div>
    </main>
  );
}
