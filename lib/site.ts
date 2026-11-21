export const site = {
  nome: "Cria",
  nomeCompleto: "Cria | Sites e Sistemas",
  /** Endereço público do site (usado em links canônicos, sitemap e imagens de compartilhamento). */
  dominio: process.env.NEXT_PUBLIC_SITE_URL ?? "https://criaplataforma.vercel.app",
  whatsapp: "55XXXXXXXXXXX",
  whatsappMensagem: "Oi! Vim pelo site da Cria e quero saber mais.",
  instagram: "criadigitals",
  email: "contato@cria.com.br",
  ga4Id: "",
  metaPixelId: "",
  precoPainel: "",
};

export const instagramUrl = `https://instagram.com/${site.instagram}`;

export function linkWhatsapp(mensagem: string = site.whatsappMensagem) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
