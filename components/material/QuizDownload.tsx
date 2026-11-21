"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { instagramUrl, site } from "@/lib/site";
import { track } from "@/lib/track";
import { Marca } from "../Logo";
import { IconeDownload, IconeFechar, IconeInstagram, IconeSeta } from "../icones";

export const EVENTO_ABRIR = "cria:baixar-material";

const perguntas = [
  { id: "area", pergunta: "Qual é a sua área?", opcoes: ["Estética", "Odontologia", "Harmonização", "Outra"] },
  {
    id: "papel",
    pergunta: "Você é:",
    opcoes: ["Dona(o) da clínica", "Profissional que atende", "Recepção/secretária", "Estudante"],
  },
  {
    id: "volume",
    pergunta: "Quantas avaliações ou orçamentos a clínica faz por mês?",
    opcoes: ["Até 10", "10 a 30", "30 a 60", "Mais de 60"],
  },
  { id: "fecham", pergunta: "De cada 10 orçamentos, quantos fecham?", opcoes: ["1 a 2", "3 a 4", "5 ou mais", "Não sei"] },
  {
    id: "vouPensar",
    pergunta: 'Quando a paciente diz "vou pensar", o que acontece?',
    opcoes: ["Chamamos de volta em até 2 dias", "Às vezes alguém lembra", "Ninguém chama", "Não temos controle"],
  },
  {
    id: "tempoResposta",
    pergunta: "Quanto tempo vocês levam para responder no WhatsApp?",
    opcoes: ["Minutos", "Até 1 hora", "No mesmo dia", "No dia seguinte"],
  },
];

const t = {
  formTitulo: "Seu resultado está pronto! ✅",
  formTexto: "Informe seu WhatsApp para ver o resultado e liberar o download do material.",
  nome: "Nome",
  nomePlaceholder: "Seu nome",
  whatsapp: "WhatsApp com DDD",
  whatsappPlaceholder: "(11) 9 9999-9999",
  aceite: "Aceito receber materiais e mensagens da Cria no WhatsApp.",
  enviar: "Ver resultado e baixar",
  enviando: "Liberando...",
  semSpam: "Sem spam. Só materiais para a sua clínica.",
  erroNome: "Escreva seu nome.",
  erroWhatsapp: "Confere o número? Ele precisa ter DDD + 9 dígitos.",
  erroAceite: "Marque a caixa para liberar o download.",
  pronto: (nome: string) => `Pronto, ${nome}!`,
  diagnostico: "Seu mini diagnóstico",
  aviso: "Estimativa feita só com as suas respostas.",
  baixar: "Baixar o PDF",
  material: (titulo: string) => `Material: ${titulo}`,
  siga: (insta: string) => `Siga @${insta} para receber os próximos materiais`,
  seguir: "Seguir no Instagram",
};

/** DDDs válidos no Brasil. */
const DDDS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92,
  93, 94, 95, 96, 97, 98, 99,
]);

/** Só dígitos, sem o 55 do país, no máximo 11. */
function soDigitos(valor: string) {
  let d = valor.replace(/\D/g, "");
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  return d.slice(0, 11);
}

/** Sequências tipo 123456 ou 987654. */
function sequencial(d: string) {
  let sobe = true;
  let desce = true;
  for (let i = 1; i < d.length; i++) {
    const passo = (Number(d[i]) - Number(d[i - 1]) + 10) % 10;
    if (passo !== 1) sobe = false;
    if (passo !== 9) desce = false;
  }
  return sobe || desce;
}

function whatsappValido(valor: string) {
  const d = soDigitos(valor);
  if (
    d.length !== 11 ||
    !DDDS.has(Number(d.slice(0, 2))) ||
    d[2] !== "9" ||
    /^(\d)\1+$/.test(d) ||
    /^(\d)\1+$/.test(d.slice(3)) ||
    sequencial(d) ||
    sequencial(d.slice(2))
  )
    return false;
  const proprio = site.whatsapp.replace(/\D/g, "").replace(/^55/, "");
  return proprio.length !== 11 || d !== proprio;
}

function formatar(valor: string) {
  const d = soDigitos(valor);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 3) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

const VOLUME: Record<string, number> = { "Até 10": 8, "10 a 30": 20, "30 a 60": 45, "Mais de 60": 70 };
const PERDA: Record<string, number> = { "1 a 2": 0.85, "3 a 4": 0.65, "5 ou mais": 0.45, "Não sei": 0.7 };
const DOR: Record<string, string> = {
  "Chamamos de volta em até 2 dias": "já chama de volta quem disse 'vou pensar'",
  "Às vezes alguém lembra": "nem sempre alguém chama de volta quem disse 'vou pensar'",
  "Ninguém chama": "ninguém chama de volta quem disse 'vou pensar'",
  "Não temos controle": "não sabe quem disse 'vou pensar'",
};

function diagnostico(r: Record<string, string>) {
  const volume = (r.volume ?? "10 a 30").replace(/^./, (c) => c.toLowerCase());
  const pacientes = Math.max(1, Math.round((VOLUME[r.volume ?? ""] ?? 20) * (PERDA[r.fecham ?? ""] ?? 0.7) * 0.5));
  const jaChama = r.vouPensar === "Chamamos de volta em até 2 dias";
  return {
    volume,
    dor: DOR[r.vouPensar ?? ""] ?? DOR["Não temos controle"],
    pacientes,
    fechamento: jaChama
      ? "Dá para ir além: no material você vê os próximos passos."
      : "No material, você vê como recuperar essas pacientes.",
  };
}

const CHAVE = "cria-quiz-download-v1";
const TOTAL_PASSOS = perguntas.length + 1;
const PASSO_FORM = perguntas.length;
const PASSO_FIM = perguntas.length + 1;

type Estado = {
  passo: number;
  respostas: Record<string, string>;
  nome: string;
  whatsapp: string;
  aceite: boolean;
  liberado: boolean;
  registrados: string[];
};

const inicial: Estado = {
  passo: 0,
  respostas: {},
  nome: "",
  whatsapp: "",
  aceite: false,
  liberado: false,
  registrados: [],
};

function salvar(e: Estado) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(e));
  } catch {}
}

function carregar(): Estado {
  try {
    const s = localStorage.getItem(CHAVE);
    return s ? { ...inicial, ...JSON.parse(s) } : inicial;
  } catch {
    return inicial;
  }
}

async function enviarLead(dados: Record<string, unknown>) {
  try {
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
      keepalive: true,
    });
  } catch {}
}

export type MaterialQuiz = { slug: string; titulo: string; pdf: string };

export default function QuizDownload({ material }: { material: MaterialQuiz }) {
  const [aberto, setAberto] = useState(false);
  const [estado, setEstado] = useState<Estado>(inicial);
  const [erros, setErros] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState(false);
  const [escolhida, setEscolhida] = useState<string | null>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const titulo = useRef<HTMLHeadingElement>(null);

  const atualizar = useCallback((parcial: Partial<Estado>) => {
    setEstado((atual) => {
      const novo = { ...atual, ...parcial };
      salvar(novo);
      return novo;
    });
  }, []);

  useEffect(() => {
    const abrir = () => {
      const salvo = carregar();
      if (salvo.liberado) {
        // Quem já se cadastrou vai direto para o download (e o lead deste material é registrado).
        const novo = { ...salvo, passo: PASSO_FIM };
        if (!salvo.registrados.includes(material.slug)) {
          novo.registrados = [...salvo.registrados, material.slug];
          enviarLead({
            nome: salvo.nome,
            whatsapp: salvo.whatsapp,
            material: material.slug,
            materialTitulo: material.titulo,
            respostas: salvo.respostas,
          });
        }
        salvar(novo);
        setEstado(novo);
      } else {
        setEstado(salvo);
      }
      setErros({});
      setAberto(true);
      track("quiz_download_aberto", { material: material.slug });
    };
    window.addEventListener(EVENTO_ABRIR, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, [material.slug, material.titulo]);

  useEffect(() => {
    if (!aberto) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", esc);
    };
  }, [aberto]);

  useEffect(() => {
    if (aberto) titulo.current?.focus();
  }, [aberto, estado.passo]);

  if (!aberto) return null;

  const passo = Math.min(estado.passo, PASSO_FIM);
  const progresso = passo >= PASSO_FIM ? 100 : ((passo + 1) / TOTAL_PASSOS) * 100;

  async function enviar(e: FormEvent) {
    e.preventDefault();
    const novosErros: Record<string, string> = {};
    if (estado.nome.trim().length < 2) novosErros.nome = t.erroNome;
    if (!whatsappValido(estado.whatsapp)) novosErros.whatsapp = t.erroWhatsapp;
    if (!estado.aceite) novosErros.aceite = t.erroAceite;
    setErros(novosErros);
    if (Object.keys(novosErros).length) return;

    setEnviando(true);
    await enviarLead({
      nome: estado.nome.trim(),
      whatsapp: soDigitos(estado.whatsapp),
      material: material.slug,
      materialTitulo: material.titulo,
      respostas: estado.respostas,
      empresa: honeypot.current?.value,
    });
    setEnviando(false);
    track("whatsapp_informado", { material: material.slug, area: estado.respostas.area ?? "" });
    atualizar({
      passo: PASSO_FIM,
      liberado: true,
      registrados: Array.from(new Set([...estado.registrados, material.slug])),
    });
  }

  const resultado = diagnostico(estado.respostas);
  const pergunta = perguntas[passo];

  return (
    <div
      className="fixed inset-0 z-[70] flex bg-black/70 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && setAberto(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-download-titulo"
        className="surgir relative flex h-[100dvh] w-full flex-col overflow-y-auto bg-navy text-gelo sm:h-auto sm:max-h-[92vh] sm:max-w-[420px] sm:rounded-[28px] sm:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center justify-between px-4 pt-4">
          {passo > 0 && passo < PASSO_FIM ? (
            <button
              type="button"
              onClick={() => atualizar({ passo: passo - 1 })}
              aria-label="Voltar para a pergunta anterior"
              className="grid h-11 w-11 place-items-center rounded-full text-nevoa hover:bg-white/10 hover:text-gelo"
            >
              <IconeSeta className="h-5 w-5 rotate-180" />
            </button>
          ) : (
            <span className="h-11 w-11" />
          )}
          <span className="flex items-center gap-2">
            <Marca className="h-7 w-7 text-limao" />
            <span className="font-display text-[22px] font-bold">cria</span>
          </span>
          <button
            type="button"
            onClick={() => setAberto(false)}
            aria-label="Fechar"
            className="grid h-11 w-11 place-items-center rounded-full text-nevoa hover:bg-white/10 hover:text-gelo"
          >
            <IconeFechar className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 pt-3">
          <div className="flex justify-between text-[13px] font-semibold text-nevoa">
            <span>{passo >= PASSO_FIM ? "Pronto!" : `Passo ${passo + 1} de ${TOTAL_PASSOS}`}</span>
          </div>
          <div
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progresso)}
            aria-label="Progresso"
          >
            <div className="h-full rounded-full bg-limao transition-[width] duration-300" style={{ width: `${progresso}%` }} />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 pt-7 pb-8" aria-live="polite">
          {pergunta && (
            <div key={passo} className="surgir">
              <h2
                id="quiz-download-titulo"
                ref={titulo}
                tabIndex={-1}
                className="text-[26px] leading-[1.15] font-semibold outline-none"
              >
                {pergunta.pergunta}
              </h2>
              <div className="mt-6 flex flex-col gap-2.5">
                {pergunta.opcoes.map((opcao) => {
                  const marcada = escolhida === opcao || (!escolhida && estado.respostas[pergunta.id] === opcao);
                  return (
                    <button
                      key={opcao}
                      type="button"
                      disabled={escolhida !== null}
                      onClick={() => {
                        setEscolhida(opcao);
                        window.setTimeout(() => {
                          setEscolhida(null);
                          atualizar({ respostas: { ...estado.respostas, [pergunta.id]: opcao }, passo: passo + 1 });
                        }, 220);
                      }}
                      className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-5 py-3 text-left text-[16px] font-semibold transition-colors ${marcada ? "border-limao bg-limao text-navy" : "border-white/12 bg-navy-3 hover:border-limao/70"}`}
                    >
                      {opcao}
                      <IconeSeta className={`h-4 w-4 shrink-0 ${marcada ? "text-navy" : "text-nevoa"}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {passo === PASSO_FORM && (
            <form key="whatsapp" onSubmit={enviar} noValidate className="surgir flex flex-col">
              <h2
                id="quiz-download-titulo"
                ref={titulo}
                tabIndex={-1}
                className="text-[26px] leading-[1.15] font-semibold outline-none"
              >
                {t.formTitulo}
              </h2>
              <p className="mt-3 text-[15px] leading-normal text-nevoa">{t.formTexto}</p>

              <label className="mt-6 text-sm font-semibold" htmlFor="quiz-nome">
                {t.nome}
              </label>
              <input
                id="quiz-nome"
                type="text"
                autoComplete="given-name"
                value={estado.nome}
                onChange={(e) => atualizar({ nome: e.target.value })}
                placeholder={t.nomePlaceholder}
                aria-invalid={!!erros.nome}
                aria-describedby={erros.nome ? "quiz-nome-erro" : undefined}
                className="mt-2 h-14 rounded-xl border border-white/15 bg-navy-2 px-4 text-base text-gelo placeholder:text-nevoa/70 focus:border-limao focus:outline-none"
              />
              {erros.nome && (
                <p id="quiz-nome-erro" className="mt-1.5 text-sm text-[#ff8fb8]">
                  {erros.nome}
                </p>
              )}

              <label className="mt-4 text-sm font-semibold" htmlFor="quiz-whatsapp">
                {t.whatsapp}
              </label>
              <input
                id="quiz-whatsapp"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={formatar(estado.whatsapp)}
                onChange={(e) => atualizar({ whatsapp: soDigitos(e.target.value) })}
                placeholder={t.whatsappPlaceholder}
                aria-invalid={!!erros.whatsapp}
                aria-describedby={erros.whatsapp ? "quiz-whatsapp-erro" : undefined}
                className="mt-2 h-14 rounded-xl border border-white/15 bg-navy-2 px-4 text-base tracking-wide text-gelo tabular-nums placeholder:text-nevoa/70 focus:border-limao focus:outline-none"
              />
              {erros.whatsapp && (
                <p id="quiz-whatsapp-erro" className="mt-1.5 text-sm text-[#ff8fb8]">
                  {erros.whatsapp}
                </p>
              )}

              {/* Campo invisível contra robôs: pessoas não preenchem. */}
              <input
                ref={honeypot}
                type="text"
                name="empresa"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-[14px] leading-snug">
                <input
                  type="checkbox"
                  checked={estado.aceite}
                  onChange={(e) => atualizar({ aceite: e.target.checked })}
                  aria-invalid={!!erros.aceite}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-limao"
                />
                <span>{t.aceite}</span>
              </label>
              {erros.aceite && <p className="mt-1.5 text-sm text-[#ff8fb8]">{erros.aceite}</p>}

              <button
                type="submit"
                disabled={enviando}
                className="mt-6 min-h-14 rounded-full bg-limao px-6 text-[17px] font-bold text-navy transition-colors hover:bg-[#d6ff70] disabled:opacity-70"
              >
                {enviando ? t.enviando : t.enviar}
              </button>
              <p className="mt-3 text-center text-[13px] text-nevoa">{t.semSpam}</p>
            </form>
          )}

          {passo === PASSO_FIM && (
            <div key="resultado" className="surgir flex flex-col">
              <h2
                id="quiz-download-titulo"
                ref={titulo}
                tabIndex={-1}
                className="text-[28px] leading-[1.1] font-semibold outline-none"
              >
                {t.pronto(estado.nome.trim().split(/\s+/)[0] || "")}
              </h2>
              <div className="mt-5 rounded-2xl border border-limao/25 bg-navy-3 p-5">
                <p className="text-[13px] font-semibold tracking-wide text-limao">{t.diagnostico}</p>
                <p className="mt-2 text-[16px] leading-relaxed">
                  Sua clínica faz <b className="text-limao">{resultado.volume}</b> orçamentos por mês e{" "}
                  <b className="text-limao">{resultado.dor}</b>. Isso pode ser{" "}
                  <b className="text-limao">{resultado.pacientes} pacientes por mês</b> que não voltam. {resultado.fechamento}
                </p>
                <p className="mt-3 text-xs text-nevoa">{t.aviso}</p>
              </div>
              <a
                href={material.pdf}
                download
                onClick={() => track("baixar_pdf", { material: material.slug })}
                className="mt-6 inline-flex min-h-[60px] items-center justify-center gap-2.5 rounded-full bg-limao px-6 text-[18px] font-bold text-navy transition-colors hover:bg-[#d6ff70]"
              >
                <IconeDownload /> {t.baixar}
              </a>
              <p className="mt-2 text-center text-[13px] text-nevoa">{t.material(material.titulo)}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[15px] font-semibold">{t.siga(site.instagram)}</p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-[15px] font-bold hover:bg-white/10"
                >
                  <IconeInstagram className="h-[18px] w-[18px]" /> {t.seguir}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
