type Params = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const eventosMeta: Record<string, string> = {
  quiz_download_aberto: "ViewContent",
  whatsapp_informado: "Lead",
  baixar_pdf: "CompleteRegistration",
  quero_ver_painel: "Contact",
  whatsapp_click: "Contact",
};

export function track(evento: string, params: Params = {}) {
  window.gtag?.("event", evento, params);
  const meta = eventosMeta[evento];
  if (meta) window.fbq?.("track", meta, { content_name: evento, ...params });
}
