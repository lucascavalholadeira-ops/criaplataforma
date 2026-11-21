"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/track";
import { IconeCheck } from "./icones";

const variantes = {
  preto: "bg-black text-creme hover:bg-[#2a2820]",
  contorno: "border-2 border-black text-black hover:bg-black/5",
  creme: "bg-creme text-black hover:bg-white",
  contornoClaro: "border-2 border-creme/80 text-creme hover:bg-creme/10",
};

const tamanhos = {
  sm: "min-h-11 px-5 text-[15px]",
  md: "min-h-[52px] px-6 text-base",
  lg: "min-h-14 px-6 text-[17px]",
};

export function BotaoLink({
  href,
  children,
  evento,
  params,
  variante = "preto",
  tamanho = "lg",
  externo,
  download,
  className = "",
}: {
  href: string;
  children: ReactNode;
  evento?: string;
  params?: Record<string, unknown>;
  variante?: keyof typeof variantes;
  tamanho?: keyof typeof tamanhos;
  externo?: boolean;
  download?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => evento && track(evento, params)}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
      download={download || undefined}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full py-2 text-center font-bold leading-tight transition-colors duration-200 active:scale-[0.98] ${tamanhos[tamanho]} ${variantes[variante]} ${className}`}
    >
      {children}
    </a>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 ${className}`}>{children}</div>;
}

export function Etiqueta({ children, className = "bg-creme-2 text-texto-2" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-[10px] px-3 py-1 text-sm font-semibold ${className}`}>{children}</span>
  );
}

export function ItemCheck({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-black text-creme">
        <IconeCheck />
      </span>
      {children}
    </li>
  );
}

export function TituloSecao({
  titulo,
  subtitulo,
  className = "",
}: {
  titulo: ReactNode;
  subtitulo?: ReactNode;
  className?: string;
}) {
  return (
    <div data-surge className={className}>
      <h2 className="titulo-secao max-w-[720px]">{titulo}</h2>
      {subtitulo && (
        <p className="mt-4 max-w-[600px] text-lg leading-[1.55] text-texto-2 sm:text-[19px]">{subtitulo}</p>
      )}
    </div>
  );
}
