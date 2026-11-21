"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Anima a entrada dos elementos com [data-surge] quando aparecem na tela. */
export default function Surge() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("visivel");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const observarDentro = (raiz: ParentNode) =>
      raiz.querySelectorAll("[data-surge]:not(.visivel)").forEach((el) => io.observe(el));
    observarDentro(document);

    const mo = new MutationObserver((mutacoes) => {
      for (const m of mutacoes) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches("[data-surge]")) io.observe(n);
          else observarDentro(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
