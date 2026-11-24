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
    slug: "black-friday",
    titulo: "A Black Friday sem Desconto",
    nicho: "Estética",
    subtitulo: "Venda mais na Black Friday sem baixar o preço e sem esvaziar a agenda de dezembro.",
    pasta: "/materiais/estrategia-black-friday",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-black-friday.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Bônus no lugar de desconto", texto: "Dê um bônus que ela já iria querer: a segunda sessão, a manutenção de janeiro ou um cuidado em casa." },
      { titulo: "Mostre a conta", texto: "Quanto vale o bônus em reais, do lado do preço." },
      { titulo: "Vaga real", texto: "Abra só as vagas que cabem na agenda de dezembro." },
      { titulo: "Acesso antecipado", texto: "As pacientes antigas recebem primeiro, um dia antes de todo mundo." },
      { titulo: "Quem esfriou vai para o painel", texto: "Cada interessada entra num painel, com aviso de quem esfriou. Mensagem pronta inclusa." },
      { titulo: "Reserva com sinal", texto: "Só garante a vaga quem paga o sinal e sai com a data marcada." },
      { titulo: "Continuidade", texto: "A paciente da Black Friday sai com o retorno de janeiro agendado." },
    ],
  },
  {
    slug: "botox",
    titulo: "A Estratégia do Botox Sem Promoção",
    nicho: "Harmonização",
    subtitulo: "Como encher a agenda de harmonização sem baixar o preço e sem depender da próxima promoção.",
    pasta: "/materiais/material-botox",
    totalPaginas: 12,
    pdf: "/materiais/material-botox.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-24",
    itens: [
      { titulo: "Vitrine", texto: "O anúncio para de mostrar preço e mostra a avaliação do rosto." },
      { titulo: "Pacote no direct", texto: "Perguntaram o valor? Responda primeiro com o que está incluso: retorno, retoque e foto." },
      { titulo: "Segurança", texto: "Abra o frasco na frente dela e mostre a marca, a validade e o lote." },
      { titulo: "Confiança", texto: "Para quem nunca fez, a primeira aplicação é leve, com retorno de 15 dias já marcado." },
      { titulo: "Calendário", texto: "O efeito dura uns 4 meses. A próxima data já sai marcada, com lembrete no WhatsApp." },
      { titulo: "Quem esfriou vai para o painel", texto: "Quem pediu o valor e sumiu entra num painel, com aviso de quem esfriou. Mensagem pronta inclusa." },
      { titulo: "Transição", texto: "As pacientes da promoção recebem um convite pelo nome, com o preço novo e o motivo." },
    ],
  },
  {
    slug: "implante-whatsapp",
    titulo: "A Estratégia do Implante no WhatsApp",
    nicho: "Odontologia",
    subtitulo: 'Como responder o "quanto custa?" sem perder o paciente para o mais barato da cidade.',
    pasta: "/materiais/material-implante-whatsapp",
    totalPaginas: 12,
    pdf: "/materiais/material-implante-whatsapp.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-24",
    itens: [
      { titulo: "Conversa", texto: "Responda o preço com uma pergunta sobre o caso: há quanto tempo está sem o dente?" },
      { titulo: "Faixa honesta", texto: "Se ele insistir, mande a faixa de valor e o que muda o preço." },
      { titulo: "Áudio de 30 segundos", texto: "Leu e não respondeu? Mande um áudio com a sua voz, chamando pelo nome." },
      { titulo: "Vídeo explicativo", texto: "Tire o medo com um vídeo seu de 1 minuto sobre anestesia e recuperação." },
      { titulo: "Dois horários", texto: "Para marcar, ofereça duas opções concretas. Não pergunte quando ele pode." },
      { titulo: "Quem esfriou vai para o painel", texto: "Quem visualizou e sumiu entra num painel, com aviso de quem está no dia 3." },
      { titulo: "Retorno sem pressão", texto: "No 3º dia, uma última mensagem curta, deixando a porta aberta. Mensagem pronta inclusa." },
    ],
  },
  {
    slug: "pacote",
    titulo: "A Estratégia do Pacote",
    nicho: "Estética",
    subtitulo: "As 5 técnicas para a paciente sair da avaliação com o pacote fechado, com as mensagens prontas para copiar.",
    pasta: "/materiais/material-pacote",
    totalPaginas: 12,
    pdf: "/materiais/material-pacote.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-23",
    itens: [
      { titulo: "Avaliação de verdade", texto: "Diagnóstico com foto, plano escrito com o nome dela e uma dica que ela já usa em casa hoje." },
      { titulo: "Alguém igual", texto: "Mostre o resultado de uma paciente parecida com ela, com autorização por escrito." },
      { titulo: "3 pacotes", texto: "Monte três opções e indique a do meio. Quase todo mundo escolhe a do meio." },
      { titulo: "Parcela primeiro", texto: "Fale 12x de 200 antes de 2.400. O total assusta, a parcela cabe no mês." },
      { titulo: "Mensagem no dia 3", texto: "Quem não fechou recebe uma mensagem pelo nome, sem desconto e sem pressão. Mensagem pronta inclusa." },
      { titulo: "Quem esfriou vai para o painel", texto: "Cada orçamento num painel, com aviso de quem está no 3º dia." },
      { titulo: "Todas as sessões marcadas", texto: "Fechou? Agende o pacote inteiro antes dela sair, com lembrete na véspera." },
    ],
  },
  {
    slug: "equipe",
    titulo: "A Estratégia da Equipe",
    nicho: "Estética",
    subtitulo: 'Como sair do "tudo sozinha" e montar uma equipe que fatura mais, sem perder as suas pacientes.',
    pasta: "/materiais/material-equipe",
    totalPaginas: 12,
    pdf: "/materiais/material-equipe.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-23",
    itens: [
      { titulo: "Padrão da casa", texto: 'Escreva como a sua clínica atende, do primeiro "oi" no WhatsApp ao pós, antes de contratar.' },
      { titulo: "Formação com teste", texto: "Treine e só libere cada procedimento depois de um teste prático." },
      { titulo: "Comissão", texto: "Pague pelo tratamento feito, não pela hora parada. Regras por escrito desde o primeiro dia." },
      { titulo: "Profissional certa", texto: "Cada procedimento com quem faz melhor. A paciente confia mais na especialista." },
      { titulo: "Quem esfriou vai para o painel", texto: "Os orçamentos de toda a equipe numa tela só, com a profissional responsável." },
      { titulo: "Número da sala", texto: "Saiba quanto cada sala fatura por mês: horas ocupadas, faturamento e ticket médio." },
      { titulo: "Seu novo lugar", texto: "Você sai da maca e vai para a avaliação e a venda. A equipe executa o protocolo." },
    ],
  },
  {
    slug: "implante",
    titulo: "A Estratégia do Implante Fechado",
    nicho: "Odontologia",
    subtitulo: "Como fechar mais orçamentos de implante sem baixar o preço e sem correr atrás do paciente.",
    pasta: "/materiais/material-implante",
    totalPaginas: 12,
    pdf: "/materiais/material-implante.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-23",
    itens: [
      { titulo: "Tomografia na tela", texto: "Mostre o problema com o monitor virado para o paciente, antes de falar de preço." },
      { titulo: "3 opções", texto: "Essencial, recomendado e completo. Indique o do meio e diga por quê." },
      { titulo: "Parcela primeiro", texto: "Fale da parcela antes do total e entregue tudo por escrito." },
      { titulo: "Caso parecido no dia 2", texto: "Mesma situação, mesma idade, mesmo medo. Só com autorização do outro paciente." },
      { titulo: "Horário real no dia 5", texto: "Ofereça dois horários concretos. Nada de última vaga inventada. Mensagem pronta inclusa." },
      { titulo: "Quem esfriou vai para o painel", texto: "Todo orçamento num painel, com aviso de quem está no dia 2 e no dia 5." },
      { titulo: "Pós-venda", texto: "Ligue no dia seguinte à cirurgia e peça a indicação na entrega da prótese." },
    ],
  },
  {
    slug: "sem-desconto",
    titulo: "A Estratégia de Não Dar Desconto",
    nicho: "Estética",
    subtitulo: 'O que responder quando a paciente pergunta "tem desconto?", sem perder a paciente e sem baixar o preço.',
    pasta: "/materiais/estrategia-sem-desconto",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-sem-desconto.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Devolva com uma pergunta", texto: "Não responda na hora. Pergunte o que pesou mais: o valor total ou a parcela." },
      { titulo: "Mude a forma de pagar", texto: 'Se o problema é a parcela, ajuste o parcelamento, não o valor. Quase sempre "caro" quer dizer "a parcela não cabe".' },
      { titulo: "Tire do tratamento, não do preço", texto: "Se ainda não cabe, comece pela fase mais importante e deixe o resto para depois." },
      { titulo: "Mostre o que está incluso", texto: "Avaliação, retorno e acompanhamento. Quando ela compara só preço, ninguém mostrou a diferença." },
      { titulo: "Orçamento com prazo", texto: 'Validade de 7 dias, de verdade. Sem prazo, vira "um dia eu faço".' },
      { titulo: "Quem esfriou vai para o painel", texto: "Quem ficou de pensar recebe retorno no dia 2 e aviso antes de o orçamento vencer." },
      { titulo: "O mimo surpresa", texto: "Quem fechou sem desconto ganha um mimo na primeira sessão. Fica na memória." },
    ],
  },
  {
    slug: "lente",
    titulo: "A Estratégia da Lente sem Desconto",
    nicho: "Odontologia",
    subtitulo:
      "Como vender lente de contato dental pelo preço cheio, fazendo o paciente se ver com o sorriso novo antes de pagar.",
    pasta: "/materiais/estrategia-da-lente",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-da-lente.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Simulação no rosto dele", texto: "Simulação digital do sorriso, lado a lado com a foto de antes. Quem vê compara pelo resultado." },
      { titulo: "Ensaio e espelho", texto: "Mock-up com resina na boca e o espelho na mão do paciente." },
      { titulo: "A foto vai para casa", texto: "Ele sai com a foto do ensaio no celular. A decisão costuma ser tomada em casa." },
      { titulo: "A conta por mês", texto: "A parcela ao lado de quantos anos a lente dura." },
      { titulo: "Quem esfriou vai para o painel", texto: "Cada orçamento entra num painel, com retorno no dia 3. Mensagem pronta inclusa." },
      { titulo: "Caso parecido", texto: "No dia 3, ele recebe o caso de um paciente parecido, com autorização por escrito." },
      { titulo: "Indicação na foto do depois", texto: "Quem fechou volta para a foto do depois e indica um amigo." },
    ],
  },
  {
    slug: "whatsapp",
    titulo: "A Estratégia do WhatsApp que Marca",
    nicho: "Estética",
    subtitulo:
      "Pare de perder paciente no WhatsApp: responda na hora e marque mais avaliações com a mesma equipe.",
    pasta: "/materiais/estrategia-do-whatsapp",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-do-whatsapp.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Boas-vindas na hora", texto: "A primeira mensagem sai automática, em segundos, com uma pergunta." },
      { titulo: "Triagem", texto: "3 perguntas que separam quem quer marcar de quem só quer o preço." },
      { titulo: "Áudio antes do preço", texto: "Um áudio curto da especialista aproxima antes de falar em valor." },
      { titulo: "Dois horários", texto: "Na hora de marcar, ofereça só duas opções concretas." },
      { titulo: "Lembrete na véspera", texto: "Com endereço e o nome de quem vai atender." },
      { titulo: "Quem esfriou vai para o painel", texto: "Cada conversa entra num painel, com aviso de quem ficou sem resposta." },
      { titulo: "Retorno no dia 2", texto: "Quem sumiu recebe uma mensagem pelo nome. Mensagem pronta inclusa." },
    ],
  },
  {
    slug: "lista",
    titulo: "A Estratégia da Lista de Pacientes",
    nicho: "Estética",
    subtitulo: "Encha a agenda com quem já foi sua paciente, sem postar e sem gastar com anúncio.",
    pasta: "/materiais/estrategia-da-lista",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-da-lista.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Monte a lista", texto: "Puxe quem não volta há mais de 90 dias, com o último procedimento e a data." },
      { titulo: "Separe em grupos", texto: "Pelo último procedimento, cada um com o seu tempo de manutenção." },
      { titulo: "Mensagem pessoal", texto: "Pelo nome, lembrando o que ela fez." },
      { titulo: "O motivo real", texto: "A manutenção venceu e os horários são poucos." },
      { titulo: "Quem esfriou vai para o painel", texto: "Cada resposta entra num painel, com aviso de quem esfriou." },
      { titulo: "Segunda mensagem no dia 5", texto: "Quem não respondeu recebe um novo contato. Mensagem pronta inclusa." },
      { titulo: "Próxima data marcada", texto: "Quem voltou já sai com o próximo horário na agenda." },
    ],
  },
  {
    slug: "preco-certo",
    titulo: "A Estratégia do Preço Certo",
    nicho: "Estética",
    subtitulo: "Pare de trabalhar muito e ganhar pouco, sem perder as clientes que valem a pena.",
    pasta: "/materiais/estrategia-do-preco",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-do-preco.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Custo da hora", texto: "Some tudo e divida pelas horas que você atende no mês." },
      { titulo: "Corte o que dá prejuízo", texto: "O procedimento que não se paga sai da tabela ou vira parte de um pacote." },
      { titulo: "Transição com aviso", texto: "A cliente antiga recebe o novo preço com 30 dias de antecedência e o motivo." },
      { titulo: "Valor visível", texto: "Mostre o que está incluso do lado do preço." },
      { titulo: "Agenda nobre", texto: "O horário que sobrou vai para as clientes de protocolo." },
      { titulo: "Quem esfriou vai para o painel", texto: "Quem achou caro e sumiu entra num painel. Mensagem pronta inclusa." },
      { titulo: "Confira o lucro", texto: "No fim do mês, olhe o que sobrou, não o que entrou." },
    ],
  },
  {
    slug: "plano-do-ano",
    titulo: "A Estratégia do Plano do Ano",
    nicho: "Harmonização",
    subtitulo: "Saia do botox avulso e tenha pacientes no plano de rejuvenescimento o ano inteiro.",
    pasta: "/materiais/estrategia-plano-do-ano",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-plano-do-ano.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Mapa do rosto", texto: "Fotografe o rosto inteiro, não só a ruga: de frente, de perfil e em 45°." },
      { titulo: "Plano do ano", texto: "Divida o tratamento em fases ao longo do ano." },
      { titulo: "Comparação", texto: "O preço por mês ao lado do botox avulso." },
      { titulo: "Calendário", texto: "A próxima fase já sai marcada, com lembrete no WhatsApp." },
      { titulo: "Quem esfriou vai para o painel", texto: "Quem pediu o valor e sumiu entra num painel. Mensagem pronta inclusa." },
      { titulo: "Prova a cada fase", texto: "A foto no mesmo ângulo vai para ela depois de cada etapa." },
      { titulo: "Renovação", texto: "No fim do ano, ela renova sozinha, porque viu o rosto mudar." },
    ],
  },
  {
    slug: "avaliacao-paga",
    titulo: "A Estratégia da Avaliação Paga",
    nicho: "Odontologia",
    subtitulo: "Pare de fazer avaliação de graça, atenda menos curiosos e feche mais tratamentos.",
    pasta: "/materiais/estrategia-avaliacao-paga",
    totalPaginas: 12,
    pdf: "/materiais/estrategia-avaliacao-paga.pdf",
    reel: "https://www.instagram.com/criadigitals/",
    data: "2026-11-21",
    itens: [
      { titulo: "Valor da consulta", texto: "Antes de cobrar, mostre o que a pessoa recebe na avaliação." },
      { titulo: "Vira crédito", texto: "O valor da avaliação volta como crédito se ela fechar em 7 dias." },
      { titulo: "Triagem", texto: "A secretária faz 3 perguntas no WhatsApp antes de marcar." },
      { titulo: "Escada de opções", texto: "O plano vai em 3 opções, do essencial ao completo." },
      { titulo: "Quem esfriou vai para o painel", texto: "Cada orçamento entra num painel, com aviso de quem esfriou." },
      { titulo: "Prazo real", texto: "No dia 5, ela recebe o lembrete de que o crédito vence. Mensagem pronta inclusa." },
      { titulo: "Pós-venda", texto: "Quem fechou sai com a revisão marcada e um pedido de indicação." },
    ],
  },
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
