"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { flutuante } from "@/lib/navegacao";
import { linkWhatsapp } from "@/lib/site";
import { track } from "@/lib/track";
import { IconeWhatsapp } from "./icones";

/** Botão fixo do WhatsApp. Some quando a seção de contato ou o rodapé aparecem. */
export default function WhatsappFlutuante() {
  const [escondido, setEscondido] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const alvos = [document.getElementById("contato"), document.querySelector("footer")].filter(
      Boolean,
    ) as Element[];
    const visiveis = new Set<Element>();
    const observer = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) visiveis.add(e.target);
        else visiveis.delete(e.target);
      }
      setEscondido(visiveis.size > 0);
    });
    alvos.forEach((a) => observer.observe(a));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={flutuante.label}
      aria-hidden={escondido || undefined}
      tabIndex={escondido ? -1 : undefined}
      onClick={() => track("whatsapp_click", { local: "flutuante" })}
      className={`fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-black text-creme shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)] transition-all duration-200 hover:scale-105 sm:right-6 sm:bottom-6 sm:h-16 sm:w-16 ${escondido ? "pointer-events-none translate-y-4 opacity-0" : ""}`}
    >
      <IconeWhatsapp className="h-7 w-7" />
    </a>
  );
}
