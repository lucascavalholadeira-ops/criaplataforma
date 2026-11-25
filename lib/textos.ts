export const calculadora = {
  titulo: "Quanto está parado no seu WhatsApp?",
  subtitulo: "Coloque os seus números. Leva 10 segundos e só você vê.",
  campos: {
    orcamentos: "Orçamentos que você passa por mês",
    ticket: "Valor médio de um orçamento",
    somem: "De cada 10, quantos somem sem resposta?",
  },
  resultadoAntes: "Todo mês, cerca de",
  resultadoDepois: "em orçamentos que não voltam.",
  recuperar: (mes: string, ano: string) => `Se você recuperar só 1 a cada 5, são ${mes} a mais no mês. Em um ano, ${ano}.`,
  botao: "Quero ver quem são essas pessoas",
  aviso: "Estimativa feita só com os números que você colocou. Não é promessa de resultado.",
  mensagem: (orcamentos: number, ticket: string, parado: string) =>
    `Oi, Lucas! Fiz a conta no site: passo ${orcamentos} orçamentos por mês, com valor médio de ${ticket}, e uns ${parado} ficam parados. Quero ver o Painel.`,
};

/** Como cada resposta entra na frase da mensagem do quiz. */
const fraseNegocio: Record<string, string> = {
  "Clínica de estética": "uma clínica de estética",
  Odontologia: "um consultório odontológico",
  "Salão de beleza": "um salão de beleza",
  Advocacia: "um escritório de advocacia",
  Restaurante: "um restaurante",
  Outro: "um negócio",
};

const fraseOnde: Record<string, string> = {
  "Na cabeça": "anoto de cabeça",
  "No caderno": "anoto no caderno",
  "Numa planilha": "anoto numa planilha",
  "Nas etiquetas do WhatsApp": "uso as etiquetas do WhatsApp",
  "Não anoto": "não anoto",
};

export const quiz = {
  titulo: "Vamos ver se o Painel serve pro seu negócio?",
  subtitulo:
    "3 perguntas, 20 segundos. A conversa já chega no meu WhatsApp com as suas respostas, e eu te respondo pessoalmente.",
  progresso: (atual: number, total: number) => `Pergunta ${atual} de ${total}`,
  voltar: "Voltar",
  perguntas: [
    {
      id: "negocio",
      pergunta: "Qual é o seu negócio?",
      opcoes: ["Clínica de estética", "Odontologia", "Salão de beleza", "Advocacia", "Restaurante", "Outro"],
    },
    {
      id: "volume",
      pergunta: "Quantos orçamentos você passa por mês?",
      opcoes: ["Até 10", "10 a 30", "30 a 60", "Mais de 60"],
    },
    {
      id: "onde",
      pergunta: "Onde você anota os orçamentos hoje?",
      opcoes: ["Na cabeça", "No caderno", "Numa planilha", "Nas etiquetas do WhatsApp", "Não anoto"],
    },
  ],
  final: {
    titulo: "Pronto. Toque abaixo e a conversa já vai com as suas respostas.",
    botao: "Enviar no WhatsApp",
    refazer: "Refazer",
  },
  mensagem: (r: Record<string, string>) =>
    `Oi, Lucas! Vim pelo site. Tenho ${fraseNegocio[r.negocio] ?? "um negócio"}, passo ${(r.volume ?? "").toLowerCase()} orçamentos por mês e ${fraseOnde[r.onde] ?? "anoto como dá"}. Quero ver o Painel.`,
};
