import Link from "next/link";
import { instagramUrl, linkWhatsapp, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-creme/12 bg-black text-claro-3">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5 py-10 text-sm sm:px-6">
        <span className="font-display text-2xl font-bold text-creme">cria</span>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-claro">
          <li>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
              Instagram
            </a>
          </li>
          <li>
            <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="underline">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
          </li>
          <li>
            <Link href="/privacidade" className="underline">
              Privacidade
            </Link>
          </li>
        </ul>
        <span>© {new Date().getFullYear()} Cria</span>
      </div>
    </footer>
  );
}
