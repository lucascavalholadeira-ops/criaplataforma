"use client";

import type { ReactNode } from "react";
import { EVENTO_ABRIR } from "./QuizDownload";

/** Abre o quiz de download do material. */
export default function BotaoBaixar({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(EVENTO_ABRIR))}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full py-2 text-center font-bold leading-tight transition-colors duration-200 active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
}
