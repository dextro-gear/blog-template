# Quiet Blog Template

A minimalistic, typography-led personal blog template built with **Astro**, **Aleo**, and **JetBrains Mono**. Inspired by digital-paper aesthetics, analog thinking tools, and quiet computing.

![Digital-paper Aesthetic](https://via.placeholder.com/900x450/f6f1e6/25201b?text=many+things+one+mind)

## Design Characteristics

- **Warm Ivory Background**: `#f6f1e6` (parchment)
- **Content Surfaces**: `#fbf6ec` (paper cards)
- **Primary Text**: `#25201b` (dark warm brown)
- **Secondary Text**: `#4a4239` (muted warm brown)
- **Accent**: `#8a4423` (burnt terracotta)
- **Borders**: `#d9cfb9` (1px muted beige)
- **Faint / Subtle Text**: `#b8ad9b`
- **Typography**: Aleo (literary serif) & JetBrains Mono (monospace dates, metadata, and tags)
- **Layout**: Generous negative space, restrained rounded corners (4px–8px), subtle paper elevation, no gaudy gradients.

## Features

- ⚡ **Astro 5**: Blazing fast static site generation with zero unnecessary client JavaScript.
- 📁 **Content Collections**: Type-safe blog posts in Markdown with Zod schema validation.
- 📜 **Dual Archive Modes**:
  - **Timeline View**: Chronological progression grouped by year (2025, 2024, 2023) with a vertical spine and terracotta milestone dots.
  - **Cards View**: Wide stacked paper cards with publication dates, tags, read times, and hover arrows.
- 📖 **Literary Essay Reader**: Optimized column width (~680px), generous margins, blockquotes, code blocks, previous/next navigation.
- 💬 **Optional Comments (Giscus)**: Distraction-free reader discussions powered by GitHub Discussions. Disabled by default, configurable in `src/config.ts`.
- ⚙️ **Configurable Template**: Change author name, bios, navigation links, and social URLs in `src/config.ts`.
- 📡 **Built-in RSS Feed**: Available at `/rss.xml`.
- 📱 **Fully Responsive**: Fixed left sidebar on desktop, clean collapsible paper menu on mobile.

## Project Structure

```
.
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── src/
    ├── config.ts            # Site configuration (author, title, bio, nav, socials, giscus)
    ├── content/
    │   ├── config.ts        # Content collection schema
    │   └── blog/            # Markdown essays (*.md)
    ├── components/
    │   ├── Sidebar.astro    # Desktop & mobile navigation
    │   ├── Footer.astro     # Minimalist footer
    │   ├── FeaturedCard.astro
    │   ├── JournalCard.astro
    │   ├── ArchiveCard.astro
    │   ├── ArchiveTimeline.astro
    │   └── GiscusComments.astro # Optional GitHub Discussions comments
    ├── layouts/
    │   └── BaseLayout.astro # Base HTML layout
    ├── pages/
    │   ├── index.astro      # Home page
    │   ├── archive.astro    # Dual-mode archive (Timeline & Cards)
    │   ├── posts/[...slug].astro # Essay reading page
    │   ├── about.astro      # About page
    │   ├── now.astro        # Now page
    │   ├── contact.astro    # Contact page
    │   └── rss.xml.ts       # RSS feed
    ├── styles/
    │   └── global.css       # Design tokens, fonts, paper textures
    └── utils/
        └── date.ts          # YYYY.MM.DD date formatting
```

## Adding New Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Title of the Essay"
description: "A thoughtful summary of the essay."
pubDate: 2025-02-14
readTime: "6 min read"
tag: "DESIGN"
featured: false
comments: true # Optional: set false to disable discussions on this post
---

Essay content goes here...
```

## Comments Setup (Giscus)

The template includes an opt-in comment section powered by [Giscus](https://giscus.app) and GitHub Discussions.

1. Create a public GitHub repository for your blog (or discussions).
2. Enable **Discussions** on that repository (*Settings → General → Features → Discussions*).
3. Install the [Giscus GitHub App](https://github.com/apps/giscus) on that repository.
4. Visit [giscus.app](https://giscus.app) to get your repository parameters:
   - `repo`: e.g. `"your-username/your-repo"`
   - `repoId`: e.g. `"R_kgDO..."`
   - `category`: e.g. `"Announcements"` or `"General"`
   - `categoryId`: e.g. `"DIC_kwDO..."`
5. Open `src/config.ts` and populate `giscus`:

```ts
giscus: {
  enabled: true,
  repo: "your-username/your-repo",
  repoId: "R_...",
  category: "Announcements",
  categoryId: "DIC_...",
  mapping: "pathname",
  reactionsEnabled: true,
  emitMetadata: false,
  inputPosition: "bottom",
  theme: "noborder_light",
  lang: "en",
  loading: "lazy"
}
```

If `enabled` is set to `false`, no comment scripts or elements are loaded.

## Development & Deployment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Deployable immediately to **Cloudflare Pages**, **Vercel**, **Netlify**, or **GitHub Pages**.
