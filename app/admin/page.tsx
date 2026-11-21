import { redirect } from "next/navigation";
import { Logo } from "@/components/Logo";
import { estaLogado } from "@/lib/auth";
import { bancoConfigurado, listarLeads } from "@/lib/leads";
import { sair } from "./acoes";

export const dynamic = "force-dynamic";

const rotulos: Record<string, string> = {
  area: "Área",
  papel: "Papel",
  volume: "Orçamentos/mês",
  fecham: "Fecham de 10",
  vouPensar: '"Vou pensar"',
  tempoResposta: "Resposta",
};

const dataHora = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Sao_Paulo",
});

function telefone(d: string) {
  if (d.length !== 11) return d;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

export default async function Admin() {
  if (!(await estaLogado())) redirect("/admin/login");

  const configurado = bancoConfigurado();
  const leads = await listarLeads();
  const porMaterial = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.materialTitulo] = (acc[l.materialTitulo] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-2">
          {leads.length > 0 && (
            <a
              href="/admin/contatos.csv"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-black px-5 text-[15px] font-bold hover:bg-black/5"
            >
              Baixar planilha (CSV)
            </a>
          )}
          <form action={sair}>
            <button type="submit" className="inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-bold hover:bg-black/5">
              Sair
            </button>
          </form>
        </div>
      </div>

      <h1 className="mt-10 text-[clamp(32px,4vw,44px)] leading-none font-bold">Painel da Cria</h1>
      <p className="mt-2 text-texto-2">Contatos que baixaram os materiais.</p>

      {!configurado && (
        <div className="mt-8 rounded-3xl bg-duvida-bg p-6 text-duvida-forte">
          <p className="font-bold">Banco de dados não conectado.</p>
          <p className="mt-1 text-[15px]">
            Na Vercel, abra o projeto → Storage → conecte um banco Upstash Redis. Os contatos novos passam a aparecer aqui.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <div className="rounded-3xl bg-black px-6 py-5 text-creme">
          <div className="text-sm text-claro-2">Total de contatos</div>
          <div className="font-display text-[36px] font-bold leading-tight tabular-nums">{leads.length}</div>
        </div>
        {Object.entries(porMaterial).map(([titulo, n]) => (
          <div key={titulo} className="rounded-3xl border border-black/8 bg-papel px-6 py-5">
            <div className="text-sm text-suave">{titulo}</div>
            <div className="font-display text-[36px] font-bold leading-tight tabular-nums">{n}</div>
          </div>
        ))}
      </div>

      {leads.length === 0 ? (
        <p className="mt-10 rounded-3xl border border-black/8 bg-papel p-8 text-center text-texto-2">
          Nenhum contato ainda. Quando alguém baixar um material, aparece aqui.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-3xl border border-black/8 bg-papel">
          <table className="w-full min-w-[900px] text-left text-[15px]">
            <thead className="border-b border-black/8 text-sm text-suave">
              <tr>
                <th className="px-5 py-4 font-semibold">Data</th>
                <th className="px-5 py-4 font-semibold">Nome</th>
                <th className="px-5 py-4 font-semibold">WhatsApp</th>
                <th className="px-5 py-4 font-semibold">Material</th>
                <th className="px-5 py-4 font-semibold">Respostas</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} className="border-b border-black/6 align-top last:border-0">
                  <td className="px-5 py-4 whitespace-nowrap tabular-nums text-texto-2">{dataHora.format(new Date(l.data))}</td>
                  <td className="px-5 py-4 font-bold">{l.nome}</td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <a
                      href={`https://wa.me/55${l.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold tabular-nums underline"
                    >
                      {telefone(l.whatsapp)}
                    </a>
                  </td>
                  <td className="px-5 py-4">{l.materialTitulo}</td>
                  <td className="px-5 py-4 text-sm text-texto-2">
                    {Object.entries(l.respostas).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-suave">{rotulos[k] ?? k}:</span> {v}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
