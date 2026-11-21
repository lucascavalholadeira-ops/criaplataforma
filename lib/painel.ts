export type Status = "fechou" | "duvida" | "recusou";

export type Orcamento = {
  nome: string;
  curto: string;
  servico: string;
  origem: string;
  valor: number;
  status: Status;
  nota?: string;
  esfriou?: number;
};

export const orcamentos: Orcamento[] = [
  { nome: "Carla Mendes", curto: "Carla M.", servico: "Protocolo 3 meses", origem: "Instagram", valor: 2400, status: "fechou", nota: "Fechou em 12/11" },
  { nome: "Bruno Souza", curto: "Bruno S.", servico: "Clareamento", origem: "Google", valor: 850, status: "fechou", nota: "Fechou em 08/11" },
  { nome: "Ana Paula", curto: "Ana P.", servico: "Limpeza de pele", origem: "Indicação", valor: 1170, status: "fechou", nota: "Fechou em 10/11" },
  { nome: "Elisa Torres", curto: "Elisa T.", servico: "Peeling + 3 sessões", origem: "Instagram", valor: 980, status: "duvida", esfriou: 3 },
  { nome: "Rafael Lima", curto: "Rafa L.", servico: "Botox", origem: "WhatsApp", valor: 1200, status: "duvida", esfriou: 5 },
  { nome: "Diego Rocha", curto: "Diego R.", servico: "Consulta", origem: "Instagram", valor: 600, status: "recusou", nota: "Motivo: achou caro" },
];

export const STATUS: Status[] = ["fechou", "duvida", "recusou"];

export const estilos: Record<Status, { label: string; plural: string; texto: string; fundo: string; forte: string; ponto: string }> = {
  fechou: { label: "Fechou", plural: "Fecharam", texto: "text-fechou", fundo: "bg-fechou-bg", forte: "text-fechou-forte", ponto: "bg-fechou-ponto" },
  duvida: { label: "Em dúvida", plural: "Em dúvida", texto: "text-duvida", fundo: "bg-duvida-bg", forte: "text-duvida-forte", ponto: "bg-duvida-ponto" },
  recusou: { label: "Recusou", plural: "Recusaram", texto: "text-recusou", fundo: "bg-recusou-bg", forte: "text-recusou-forte", ponto: "bg-recusou-ponto" },
};

export const porStatus = (status: Status) => orcamentos.filter((o) => o.status === status);
export const esfriando = orcamentos.filter((o) => o.esfriou);
export const totalStatus = (status: Status) => porStatus(status).reduce((soma, o) => soma + o.valor, 0);

export function reais(valor: number) {
  return "R$ " + Math.round(valor).toLocaleString("pt-BR");
}

export function contagem(status: Status) {
  const n = porStatus(status).length;
  return `${n} ${(n === 1 ? estilos[status].label : estilos[status].plural).toLowerCase()}`;
}
