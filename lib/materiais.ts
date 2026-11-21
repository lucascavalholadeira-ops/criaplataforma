export type Material = {
  slug: string;
  titulo: string;
  nicho: string;
  subtitulo: string;
  /** Pasta em /public/materiais com as páginas 01.jpg, 02.jpg... */
  pasta: string;
  totalPaginas: number;
  pdf: string;
  reel: string;
  /** Data de publicação (usada no sitemap) */
  data: string;
  itens: { titulo: string; texto: string }[];
};

export const materiais: Material[] = [
  {
    slug: "clube",
    titulo: "A Estratégia do Clube de Pacientes",
    nicho: "Estética",
    subtitulo: "Comece o mês com a agenda prevista e uma parte do faturamento já paga.",
    pasta: "/materiais/estrategia-do-clube",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-do-clube.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-19",
    itens: [
      {
        titulo: "Um objetivo por clube",
        texto: "Pele sem manchas, rejuvenescimento ou sorriso branco. Clube para todo mundo não é para ninguém.",
      },
      {
        titulo: "Acompanhamento, não desconto",
        texto: "Sessão com horário fixo, manutenção no tempo certo e avaliação com fotos a cada 3 meses.",
      },
      {
        titulo: "Mostre a conta",
        texto: "O avulso do ano ao lado do clube. Preço sozinho assusta, preço comparado convence.",
      },
      {
        titulo: "Mensalidade no cartão",
        texto: "Cobrança recorrente, permanência mínima de 3 meses e lembrete 2 dias antes.",
      },
      {
        titulo: "A foto do mês",
        texto: "Mesmo ângulo, mesma luz. A foto responde antes de ela pensar em cancelar.",
      },
      {
        titulo: "Quem esfriou vai para o painel",
        texto: "Quem perguntou e não entrou recebe retorno no dia 2, 5 e 15. Mensagem pronta inclusa.",
      },
      {
        titulo: "Indicação no dia da foto",
        texto: "A amiga ganha o primeiro mês. Peça quando a paciente está mais feliz com o resultado.",
      },
    ],
  },
  {
    slug: "video16",
    titulo: "A Estratégia do Protocolo",
    nicho: "Estética",
    subtitulo:
      "Saia do atendimento avulso e monte um protocolo que a cliente fecha, entende e não abandona no meio.",
    pasta: "/materiais/estrategia-do-protocolo",
    totalPaginas: 11,
    pdf: "/materiais/estrategia-do-protocolo.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-18",
    itens: [
      {
        titulo: "Faça o mapa da pele",
        texto: "Foto padronizada e lupa na tela. A cliente precisa ver o problema antes de ouvir o preço.",
      },
      {
        titulo: "Desenhe o caminho de 3 meses",
        texto: "Preparar, tratar e manter. Ela não compra sessões, compra um caminho com começo, meio e fim.",
      },
      {
        titulo: "Coloque o preço lado a lado",
        texto: 'Sessão avulsa ao lado da sessão no protocolo. A pergunta deixa de ser "é caro?".',
      },
      {
        titulo: "A mesma foto a cada 30 dias",
        texto: "Mesmo ângulo e mesma luz. Quem vê a evolução não abandona no meio.",
      },
      {
        titulo: "Ela sai com o próximo horário marcado",
        texto: "Agende antes dela levantar da maca e lembre no WhatsApp 1 dia antes. Mensagem pronta inclusa.",
      },
      {
        titulo: "Saiba quem esfriou",
        texto: "Todo orçamento em Fechou, Em dúvida ou Recusou. Passou 3 dias sem resposta, você chama de novo.",
      },
      {
        titulo: 'Peça indicação na foto do "depois"',
        texto: "O melhor momento é quando ela vê o resultado final. Mensagem pronta inclusa.",
      },
    ],
  },
];

export const capa = (m: Material) => `${m.pasta}/01.jpg`;

export const paginas = (m: Material) =>
  Array.from({ length: m.totalPaginas }, (_, i) => `${m.pasta}/${String(i + 1).padStart(2, "0")}.jpg`);

export const buscarMaterial = (slug: string) => materiais.find((m) => m.slug === slug);

/** Dados enxutos enviados para os componentes de cliente (lista e cartões). */
export const resumo = (m: Material) => ({
  slug: m.slug,
  titulo: m.titulo,
  nicho: m.nicho,
  subtitulo: m.subtitulo,
  capa: capa(m),
  totalPaginas: m.totalPaginas,
});

export type ResumoMaterial = ReturnType<typeof resumo>;
