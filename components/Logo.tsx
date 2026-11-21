/** Símbolo da Cria (hexágono sorrindo). */
export function Marca({ className = "h-[34px] w-[34px]", traco = 8 }: { className?: string; traco?: number }) {
  const fino = Math.round(traco * 0.75);
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <polygon
        points="50,6 88,28 88,72 50,94 12,72 12,28"
        fill="none"
        stroke="currentColor"
        strokeWidth={traco}
        strokeLinejoin="round"
      />
      <path d="M32 48 Q38 39 44 48 M56 48 Q62 39 68 48" fill="none" stroke="currentColor" strokeWidth={fino} strokeLinecap="round" />
      <path d="M36 60 Q50 73 64 60" fill="none" stroke="currentColor" strokeWidth={fino} strokeLinecap="round" />
    </svg>
  );
}

/** Símbolo + nome "cria". */
export function Logo({ className = "", tamanho = "md" }: { className?: string; tamanho?: "sm" | "md" }) {
  const pequeno = tamanho === "sm";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Marca className={pequeno ? "h-7 w-7" : "h-[34px] w-[34px]"} />
      <span className={`font-display font-bold tracking-[-0.5px] ${pequeno ? "text-[22px]" : "text-[28px]"}`}>cria</span>
    </span>
  );
}
