export const calculadora = {
  titulo: "Quanto está parado no seu WhatsApp?",
  subtitulo: "Coloque os seus números. Só você vê.",
  campos: {
    orcamentos: "Orçamentos por mês",
    ticket: "Valor médio",
    somem: "Quantos somem sem resposta",
  },
  resultadoRotulo: "Ficam parados por mês",
  recuperar: (valor: string) => `Recuperar 1 em cada 5 dessas conversas já seria ${valor} por mês.`,
  botao: "Quero recuperar esses orçamentos",
  aviso: "Estimativa feita só com os números que você colocou.",
  mensagem: (orcamentos: number, ticket: string, somem: number, parado: string) => `Oi! Fiz a conta no site da Cria.

Orçamentos por mês: ${orcamentos}
Valor médio: ${ticket}
Somem sem resposta: ${somem}%
Parado por mês: ${parado}

Quero recuperar esses orçamentos.`,
};

export const quiz = {
  titulo: "Vamos ver se o Painel serve pro seu negócio?",
  subtitulo: "3 perguntas rápidas e a conversa já chega no WhatsApp com as suas respostas.",
  progresso: (atual: number, total: number) => `Pergunta ${atual} de ${total}`,
  voltar: "Voltar",
  perguntas: [
    {
      id: "negocio",
      pergunta: "Qual é o seu tipo de negócio?",
      opcoes: ["Clínica de estética", "Odontologia", "Advocacia", "Salão de beleza", "Restaurante", "Outro"],
    },
    {
      id: "volume",
      pergunta: "Quantos orçamentos você passa por mês?",
      opcoes: ["Até 10", "De 10 a 30", "De 30 a 100", "Mais de 100"],
    },
    {
      id: "onde",
      pergunta: "Onde você anota os orçamentos hoje?",
      opcoes: ["Na cabeça", "Caderno", "Planilha", "Etiquetas do WhatsApp", "Em outro sistema"],
    },
  ],
  final: {
    titulo: "Pronto! Toque abaixo e a conversa já vai com suas respostas.",
    botao: "Enviar no WhatsApp",
    refazer: "Refazer",
  },
  mensagem: (r: Record<string, string>) => `Oi! Vim pelo site da Cria.

Tipo de negócio: ${r.negocio}
Orçamentos por mês: ${r.volume}
Onde anoto hoje: ${r.onde}

Quero ver se o Painel serve pro meu negócio.`,
};
