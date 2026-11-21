# Cria — site (criaplataforma)

Site da Cria: Painel de Orçamentos e WhatsApp para pequenos negócios.
Reconstrução fiel do site original (sitecria.vercel.app), agora com o código-fonte versionado.

## Páginas

- `/` — home (calculadora, quiz que monta a mensagem do WhatsApp, materiais, dúvidas)
- `/painel` — apresentação do Painel de Orçamentos (com demonstração interativa no celular)
- `/material` — lista de materiais gratuitos com filtro por nicho
- `/material/[slug]` — página de cada material (carrossel das páginas + quiz de 6 perguntas que libera o PDF)
- `/privacidade` — política de privacidade
- `/admin` — painel com os contatos que baixaram materiais (protegido por senha)

## Tecnologias

Next.js (App Router) + TypeScript + Tailwind CSS v4. Contatos salvos no Upstash Redis.

## Rodar no computador

```bash
npm install
cp .env.example .env.local   # preencha ADMIN_PASSWORD (e o Redis, se quiser testar o /admin)
npm run dev
```

## Onde mudar as coisas

| O quê | Arquivo |
| --- | --- |
| WhatsApp, Instagram, e-mail, IDs do Google Analytics / Meta Pixel | `lib/site.ts` |
| Materiais (título, páginas, PDF, tópicos) | `lib/materiais.ts` + arquivos em `public/materiais/` |
| Textos da calculadora e do quiz da home | `lib/textos.ts` |
| Dados de exemplo do painel | `lib/painel.ts` |
| Cores e fontes | `app/globals.css` (`@theme`) e `app/layout.tsx` |

### Adicionar um material novo

1. Coloque as imagens das páginas em `public/materiais/<pasta>/01.jpg, 02.jpg...` e o PDF em `public/materiais/<pasta>.pdf`.
2. Coloque a imagem de compartilhamento (1200×630) em `public/og/<slug>.png`.
3. Adicione um item em `lib/materiais.ts`. A página, a lista, a home e o sitemap se atualizam sozinhos.

## Variáveis de ambiente (Vercel)

| Variável | Para quê |
| --- | --- |
| `ADMIN_PASSWORD` | Senha do `/admin` |
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | Banco Upstash Redis (criadas automaticamente ao conectar o Upstash em Storage) |
| `NEXT_PUBLIC_SITE_URL` | Opcional. Endereço público (padrão `https://criaplataforma.vercel.app`) |

O `/admin` também permite baixar os contatos em planilha (CSV).
