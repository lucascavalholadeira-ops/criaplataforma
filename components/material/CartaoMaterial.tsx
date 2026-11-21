import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ResumoMaterial } from "@/lib/materiais";
import { IconeDownload } from "../icones";

const fundos = ["bg-esfriou-bg", "bg-fechou-bg", "bg-duvida-bg"];

export default function CartaoMaterial({ m, botao, indice = 0 }: { m: ResumoMaterial; botao: string; indice?: number }) {
  return (
    <Link
      href={`/material/${m.slug}`}
      data-surge
      style={{ "--atraso": `${indice * 90}ms` } as CSSProperties}
      className="group flex flex-col rounded-[28px] border border-black/8 bg-papel p-3 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-30px_rgba(60,45,10,0.5)]"
    >
      <div className={`relative h-[220px] overflow-hidden rounded-[20px] ${fundos[indice % fundos.length]}`}>
        <div className="absolute inset-x-7 top-7 bottom-0 overflow-hidden rounded-t-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
          <Image
            src={m.capa}
            alt={`Capa do material ${m.titulo}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
            className="object-cover object-top"
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-creme">{m.nicho}</span>
        <span className="absolute top-3 right-3 rounded-full bg-papel/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          {m.totalPaginas} páginas
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <h3 className="text-[24px] leading-[1.1] font-semibold">{m.titulo}</h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-normal text-texto-2">{m.subtitulo}</p>
        <span aria-hidden className="min-h-5 flex-1" />
        <span className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-black px-5 text-[15px] font-bold text-creme transition-colors group-hover:bg-[#2a2820]">
          <IconeDownload className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-y-0.5" />
          {botao}
        </span>
      </div>
    </Link>
  );
}
