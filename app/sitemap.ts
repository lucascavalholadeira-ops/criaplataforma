import type { MetadataRoute } from "next";
import { materiais } from "@/lib/materiais";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.dominio },
    { url: `${site.dominio}/painel` },
    { url: `${site.dominio}/material` },
    { url: `${site.dominio}/privacidade` },
    ...materiais.map((m) => ({ url: `${site.dominio}/material/${m.slug}`, lastModified: m.data })),
  ];
}
