"use client";

import { useId, useState } from "react";

export default function Faq({ itens }: { itens: { p: string; r: string }[] }) {
  const [aberto, setAberto] = useState<number | null>(0);
  const id = useId();

  return (
    <div>
      {itens.map((item, i) => {
        const ativo = aberto === i;
        return (
          <div key={item.p} className="border-t border-black/15 last:border-b">
            <h3 className="font-sans">
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={ativo}
                aria-controls={`${id}-a${i}`}
                onClick={() => setAberto(ativo ? null : i)}
                className="flex min-h-11 w-full items-center justify-between gap-4 py-[22px] text-left text-lg font-bold"
              >
                <span>{item.p}</span>
                <span aria-hidden className="font-display text-[26px] leading-none">
                  {ativo ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`${id}-a${i}`}
              role="region"
              aria-labelledby={`${id}-q${i}`}
              className={`grid transition-[grid-template-rows] duration-200 ${ativo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-[22px] text-[17px] leading-relaxed text-texto-2">{item.r}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
