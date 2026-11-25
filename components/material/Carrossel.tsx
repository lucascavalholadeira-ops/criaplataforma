"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconeDownload, IconeSeta } from "../icones";
import { EVENTO_ABRIR } from "./QuizDownload";

const rotulo = (atual: number, total: number) => `Página ${atual} de ${total}`;

/** Quantas páginas aparecem abertas na prévia. As demais ficam borradas até o download. */
export const PAGINAS_LIBERADAS = 2;

export default function Carrossel({
  paginas,
  titulo,
  liberadas = PAGINAS_LIBERADAS,
}: {
  paginas: string[];
  titulo: string;
  liberadas?: number;
}) {
  const trilho = useRef<HTMLDivElement>(null);
  const [atual, setAtual] = useState(0);

  const irPara = useCallback(
    (i: number) => {
      const el = trilho.current;
      if (!el) return;
      const alvo = el.children[Math.max(0, Math.min(i, paginas.length - 1))] as HTMLElement;
      el.scrollTo({ left: alvo.offsetLeft - el.offsetLeft, behavior: "smooth" });
    },
    [paginas.length],
  );

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) setAtual(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { root: el, threshold: 0.6 },
    );
    Array.from(el.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative" aria-roledescription="carrossel" aria-label={`Páginas do material ${titulo}`}>
      <div
        ref={trilho}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            irPara(atual + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            irPara(atual - 1);
          }
        }}
      >
        {paginas.map((src, i) => (
          <div
            key={src}
            data-i={i}
            className="relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl border border-black/10 bg-creme-3 shadow-[0_20px_40px_-28px_rgba(60,45,10,0.5)] sm:w-[42%] lg:w-[31%]"
            aria-label={rotulo(i + 1, paginas.length)}
            role="group"
          >
            {i < liberadas ? (
              <Image
                src={src}
                alt={`${titulo}, ${rotulo(i + 1, paginas.length).toLowerCase()}`}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 360px"
                className="object-cover"
                priority={i === 0}
              />
            ) : (
              <>
                {/* Versão minúscula da página, ampliada e borrada: dá para ver que tem conteúdo, mas não dá para ler. */}
                <Image src={src} alt="" aria-hidden fill sizes="48px" quality={30} className="scale-110 object-cover blur-md" />
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event(EVENTO_ABRIR))}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy/45 p-6 text-center text-gelo"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-limao text-navy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                  </span>
                  <span className="font-display text-[22px] leading-tight font-semibold">Disponível após o download</span>
                  <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-limao px-5 text-[15px] font-bold text-navy">
                    <IconeDownload className="h-[18px] w-[18px]" /> Baixar grátis
                  </span>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5" aria-hidden>
          {paginas.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === atual ? "w-6 bg-black" : "w-1.5 bg-black/20"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => irPara(atual - 1)}
            disabled={atual === 0}
            aria-label="Página anterior"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-black disabled:opacity-30"
          >
            <IconeSeta className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => irPara(atual + 1)}
            disabled={atual === paginas.length - 1}
            aria-label="Próxima página"
            className="grid h-11 w-11 place-items-center rounded-full bg-black text-creme disabled:opacity-30"
          >
            <IconeSeta className="h-5 w-5" />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {rotulo(atual + 1, paginas.length)}
      </p>
    </div>
  );
}
