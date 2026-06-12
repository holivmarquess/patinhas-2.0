# 🐾 Abrigo Amigo Bicho

> **Onde o amor encontra um lar. Resgate. Cuide. Transforme.**

Landing page institucional da ONG **Abrigo Amigo Bicho**, dedicada ao resgate, reabilitação e adoção responsável de animais. Construída como uma single-page application moderna, com foco em conversão (adoção, apadrinhamento, doação e voluntariado), performance e identidade visual marcante.

---

## ✨ Visão Geral

Site de página única (SPA) com navegação por âncoras suaves, estética **glassmorphism** sobre uma paleta **emerald/verde-esperança**, tipografia **Urbanist** e imagens geradas por IA retratando pets, voluntários e famílias adotantes.

- **URL de Preview:** [id-preview--f79a5414-dc90-462d-99ca-a0de0277dfa6.lovable.app](https://id-preview--f79a5414-dc90-462d-99ca-a0de0277dfa6.lovable.app)
- **Público-alvo:** potenciais adotantes, doadores, voluntários e parceiros locais.
- **Objetivo de negócio:** capturar leads qualificados via CTA "Agendar Sua Ação".

---

## 🧱 Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | **TanStack Start v1** (React 19 + SSR) |
| Bundler | **Vite 7** |
| Estilização | **Tailwind CSS v4** (via `@theme` em `src/styles.css`) |
| Componentes UI | **shadcn/ui** + Radix primitives |
| Roteamento | **TanStack Router** (file-based) |
| Tipografia | **Urbanist** (Google Fonts) |
| Deploy target | Edge (Cloudflare Workers) |
| Geração de imagens | IA (assets em `src/assets/`) |

---

## 🎨 Sistema de Design

Todas as cores, gradientes, sombras e utilitários são definidos como **tokens semânticos** em `src/styles.css` — nenhum componente usa cores hardcoded.

### Paleta principal (OKLCH)
- `--primary` — Emerald profundo (identidade da marca)
- `--primary-glow` — Verde luminoso (gradientes e brilhos)
- `--accent` — Tom suave para fundos de ícones
- `--background` / `--foreground` — Base neutra com alto contraste
- `--muted-foreground` — Textos secundários

### Utilitários customizados
- `.glass` / `.glass-strong` — Efeito glassmorphism (blur + transparência + borda)
- `.bg-gradient-soft` — Gradiente suave de fundo entre seções
- `.text-gradient` — Texto com gradiente emerald
- `.shadow-elegant` — Sombra colorida de elevação

---

## 📁 Estrutura do Projeto

```text
src/
├── assets/                      # Imagens geradas por IA
│   ├── hero-pets.jpg            # Imagem principal do Hero
│   └── g1.jpg ... g6.jpg        # Galeria de resgates
│
├── components/
│   ├── site/                    # Componentes da landing page
│   │   ├── SiteHeader.tsx       # Header sticky com menu mobile
│   │   ├── Hero.tsx             # Seção de entrada + estatísticas
│   │   ├── ProofStrip.tsx       # Métricas de impacto
│   │   ├── Services.tsx         # Adoção, padrinho, doação, voluntariado
│   │   ├── HowItWorks.tsx       # Passo a passo do processo
│   │   ├── ResultsGallery.tsx   # Galeria masonry "antes/depois"
│   │   ├── Differentials.tsx    # Por que escolher o abrigo
│   │   ├── Testimonials.tsx     # Depoimentos de adotantes
│   │   ├── FAQ.tsx              # Perguntas frequentes (accordion)
│   │   ├── Contact.tsx          # Endereço + Google Maps embed
│   │   └── SiteFooter.tsx       # Rodapé com links e redes sociais
│   └── ui/                      # Primitivos shadcn/ui
│
├── lib/
│   └── site.ts                  # 🧠 ALMA DO SITE — todo o conteúdo
│
├── routes/
│   ├── __root.tsx               # Shell HTML/head/body
│   └── index.tsx                # Home — monta todas as seções + SEO
│
└── styles.css                   # Tokens de design + Tailwind v4 theme
```

---

## 🧩 Seções da Página

| # | Seção | Âncora | Propósito |
|---|---|---|---|
| 1 | **Hero** | `#hero` | Primeira impressão, headline emocional, CTA principal |
| 2 | **ProofStrip** | — | Números de impacto (resgates, adoções, voluntários) |
| 3 | **Services** | `#services` | 4 caminhos de envolvimento (adotar, apadrinhar, doar, voluntariar) |
| 4 | **HowItWorks** | `#how` | Etapas do processo de adoção |
| 5 | **ResultsGallery** | `#gallery` | Histórias visuais de transformação |
| 6 | **Differentials** | `#diferenciais` | Diferenciais técnicos e éticos do abrigo |
| 7 | **Testimonials** | `#testimonials` | Prova social de famílias adotantes |
| 8 | **FAQ** | `#faq` | Resolve objeções comuns à adoção |
| 9 | **Contact** | `#contact` | Endereço, telefone, mapa e CTA final |

---

## ✏️ Como editar o conteúdo

Todo o texto, links de navegação, listas de serviços, depoimentos, perguntas do FAQ e dados de contato vivem **centralizados em um único arquivo**:

```ts
// src/lib/site.ts
export const SITE = {
  brand: "Abrigo Amigo Bicho",
  tagline: "Onde o amor encontra um lar...",
  hero: { ... },
  services: [ ... ],
  faq: [ ... ],
  // ...
};
```

Para alterar qualquer texto da página, edite `src/lib/site.ts` — não é necessário tocar nos componentes.

---

## 🔍 SEO

Configurado em `src/routes/index.tsx` via `head()`:

- `<title>` otimizado com palavra-chave principal (< 60 chars)
- `<meta name="description">` persuasiva (< 160 chars)
- Open Graph (`og:title`, `og:description`, `og:type`)
- Preconnect para Google Fonts (performance)
- Estrutura semântica HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- Alt text em todas as imagens
- Single H1 no Hero

---

## 🚀 Desenvolvimento

```bash
# Instalar dependências
bun install

# Rodar em dev
bun dev

# Build de produção
bun run build
```

---

## 🛣️ Próximos passos sugeridos

- [ ] **Formulário de leads** com seleção de interesse (adotar / doar / voluntariar)
- [ ] Integração com **Lovable Cloud** para persistir leads em banco
- [ ] Página dedicada `/animais` com catálogo dos pets disponíveis
- [ ] Blog de histórias de resgate (`/historias`)
- [ ] Integração com gateway de pagamento para doações recorrentes
- [ ] Painel administrativo para a equipe do abrigo

---

Feito com 💚 para transformar vidas — humanas e de quatro patas.
