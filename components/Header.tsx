"use client";

import Link from "next/link";
import { useState } from "react";
import { navegacao } from "@/lib/navegacao";
import { linkWhatsapp } from "@/lib/site";
import { track } from "@/lib/track";
import { Logo } from "./Logo";
import { IconeFechar, IconeMenu, IconeWhatsapp } from "./icones";

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-creme/92 backdrop-blur-[10px]">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3.5 sm:px-6"
      >
        <Link href="/" aria-label="Cria, página inicial" onClick={() => setAberto(false)}>
          <Logo />
        </Link>
        <div className="flex items-center gap-7 text-[15px] font-semibold">
          <ul className="hidden items-center gap-7 md:flex">
            {navegacao.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1.5">
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { local: "navbar" })}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-4 text-creme transition-colors hover:bg-[#2a2820] sm:px-5"
            >
              <IconeWhatsapp className="h-[18px] w-[18px]" />
              <span className="sm:hidden">{navegacao.ctaCurto}</span>
              <span className="hidden sm:inline">{navegacao.cta}</span>
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-black/5 md:hidden"
              aria-expanded={aberto}
              aria-controls="menu-mobile"
              aria-label={aberto ? navegacao.fecharMenu : navegacao.abrirMenu}
              onClick={() => setAberto((a) => !a)}
            >
              {aberto ? <IconeFechar /> : <IconeMenu />}
            </button>
          </div>
        </div>
      </nav>
      {aberto && (
        <div id="menu-mobile" className="border-t border-black/8 px-5 pt-2 pb-5 md:hidden">
          <ul>
            {navegacao.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block border-b border-black/8 py-4 font-display text-2xl font-semibold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
