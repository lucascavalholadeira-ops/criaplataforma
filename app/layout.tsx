import type { Metadata, Viewport } from "next";
import { Figtree, Fredoka } from "next/font/google";
import Surge from "@/components/Surge";
import { site } from "@/lib/site";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const descricao =
  "A Cria monta um painel simples que mostra quem fechou, quem está em dúvida e quem esfriou. E o seu WhatsApp te lembra de chamar de volta na hora certa.";

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: {
    default: "Cria | Painel de Orçamentos e WhatsApp para pequenos negócios",
    template: "%s | Cria",
  },
  description: descricao,
  openGraph: {
    siteName: site.nomeCompleto,
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#F4EDDB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        {/* Liga as animações de entrada só quando há JavaScript */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Surge />
      </body>
    </html>
  );
}
