# Handoff: Retrace Marketing Website

## Overview
This is the complete design for the **Retrace** marketing website — a multi-page
product site for a local-first macOS app that pulls a user's conversations, notes,
and other data from a dozen apps into one private, searchable context layer that
lives entirely on their Mac.

The site is five pages sharing one common chrome (sticky nav + footer):

1. **Landing** — hero, feature showcase grid, MCP/context-layer pitch, download CTA
2. **Features** — deep-dive on each capability (search, social graph, resources, "this time last year", timeline streamgraph, MCP, artifacts)
3. **Sources** — the 10 platforms Retrace reads from, grouped by ingest method
4. **Privacy** — local-first architecture, data-path diagram, scope/permission controls, technical details
5. **Get Started** — 5-minute setup steps, live demo, download CTA

## About the Design Files
The files in `design_files/` are **design references authored in HTML** — working
prototypes that show the intended look, copy, layout, and interactions. **They are
not production code to copy directly.**

They are written in a lightweight in-house component format (`.dc.html`, driven by
`support.js`) used only for prototyping. **Do not ship `.dc.html` or `support.js`.**
Your task is to **recreate these designs in the target codebase's environment**
(e.g. React/Next.js, Astro, Vue, or plain HTML/CSS), using its established patterns,
component library, and conventions. If no codebase exists yet, choose the most
appropriate framework — for a mostly-static marketing site, a static-site generator
(Astro / Next.js static export / 11ty) is a good fit.

### How to read a `.dc.html` file
- Everything between `<x-dc>` and `</x-dc>` is the markup. Treat it as ordinary HTML.
- **Styling is inline** via `style="..."` using CSS custom properties (e.g.
  `var(--color-accent)`). All token definitions live in `design_system/` and are
  also duplicated in a `<style>` block at the top of `Retrace Shell.dc.html` — use
  those as the source of truth for token values.
- `<dc-import name="Retrace Shell" active="...">…</dc-import>` means "render this
  page's content inside the shared Shell (nav + footer), with the named nav item
  active." In your framework this becomes a layout/wrapper component.
- `{{ children }}` in the Shell is where the page content slots in.
- `style-hover="..."` / `style-active="..."` are hover/active style declarations.
  Convert to normal CSS `:hover` / `:active` rules.
- `data-reveal`, `data-card`, `data-stack`, `data-cols`, etc. are hooks for the
  prototype's scroll-reveal and responsive-stacking JS (in `support.js` and each
  file's logic class). See **Interactions & Behavior** below for what they do so you
  can reimplement them.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions
are all settled. Recreate the UI faithfully using the exact token values in
`design_system/`. Match measurements, hex values, type scale, and motion.

---

## Shared Chrome (Retrace Shell)

All pages render inside `Retrace Shell.dc.html`.

### Header / Nav
- Sticky, `top:0`, `z-index:40`, height **70px**, max-width **1180px**, side padding **24px**.
- Starts transparent with a transparent bottom border; on scroll it gains a frosted
  background (`backdrop-filter: saturate(180%) blur(12px)`, scrim `rgba(250,249,247,0.78)`)
  and a `--color-border` bottom border. Driven by a scroll listener.
- Left: logo mark (24×24 SVG, terracotta circle `#c8723a` + three descending rounded
  bars) + wordmark "retrace" (20px, weight 600, letter-spacing −0.035em).
- Nav links (14px, weight 500, `--color-text-muted`, hover → `--color-text`):
  Features, Sources, Privacy, Get Started. Active link uses `--color-text`.
  `margin-left:36px`, gap **26px**.
- Right side: "See it live" ghost link → `Get Started#demo`, and "Download" pill
  button (`--color-accent` bg, `--color-text-on-accent` text) → `Landing#download`.
- **Responsive:** below **720px** the nav-links row is hidden (`display:none`). (A
  production build should add a mobile menu — the prototype simply hides them.)

### Footer
- `--color-bg-alt` background, top border `--color-border`, max-width 1080px.
- 4-column grid `1.6fr 1fr 1fr 1fr` (gap 32px), stacks to 1 column below 760px.
- Col 1: logo + wordmark + tagline "Rediscover your conversations. Your data is
  stored locally, you choose what leaves." (13px, `--color-text-faint`, max-width 250px).
- Cols 2–4: **Product** (Features, Sources, Privacy), **Resources** (Get Started),
  **Project** (placeholder links). Headings 13px/600; links 13.5px `--color-text-muted`.
- Bottom bar: mono 11.5px `--color-text-faint` — "© 2026 retrace · retrace.now".

---

## Screens / Views

### 1. Landing (`Retrace Landing.dc.html`)
**Purpose:** First impression + primary download conversion.

- **Hero** — two-column grid `minmax(0,1fr) minmax(0,460px)`, gap 48px, max-width
  1180px, padding `88px 24px 84px`, vertically centered.
  - Left column:
    - Privacy pill badge: surface bg, 1px `--color-border`, full radius, small lock
      icon (teal stroke) + "your data is stored locally. you choose what leaves." (12.5px).
    - H1: `clamp(2.6rem,5.2vw,4.2rem)`, weight 700, letter-spacing −0.04em,
      line-height 1.0. Reads "Retrace your" + a **rotating word** beneath it rendered
      with the brand gradient as clipped text (`--gradient-brand`,
      `-webkit-background-clip:text`, transparent fill). The rotating word cycles
      through: **conversations. → music. → journal. → growth.** (fade+translate
      transition, `opacity/transform 0.4s var(--ease-out)`).
    - Sub-paragraph (1.125rem, `--color-text-muted`, max-width 480px): "Your chats,
      notes, and music are scattered across a dozen apps. Retrace pulls them into
      **one private context layer**. Searchable, and entirely on your Mac." ("one
      private context layer" in `--color-text`, weight 600.)
    - Buttons row (gap 12px): **Download for Mac** (Apple logo SVG + label; accent
      pill, height 50px, `0 24px` padding, hover translateY(−1px) + `--color-accent-light`)
      and **See it live** (play-triangle icon; surface bg, 1px border, height 50px).
    - Mono caption 11.5px `--color-text-faint`: "free · runs entirely on your Mac · no account".
  - Right column — **hub-and-spoke visual**, square (`aspect-ratio:1/1`, max-width 460px):
    - An SVG (`viewBox 0 0 460 460`) drawing 8 spoke lines from platform nodes
      around the perimeter into the center (drawn/animated by the page's logic class).
    - Center hub: **106×106px solid terracotta circle** (`--color-accent`),
      `border-radius:50%`, centered with `transform:translate(-50%,-50%)`, `z-index:3`,
      containing the **retrace logo mark at 66×66px** in white (`color:#fff`). The
      circle has a gentle pulsing glow (`@keyframes rt-coreglow`, 3.2s ease-in-out
      infinite, expanding box-shadow ring at 5% opacity).
    - Below the hub: a pill label (`translate(-50%,66px)`) — mono 10.5px uppercase,
      letter-spacing 0.12em, surface bg + border — reading "your context layer".
- **Showcase grid** — responsive card grid of feature teasers. Each card
  (`Retrace Features.dc.html#<anchor>` link): surface bg, 1px `--color-border`,
  `--radius-lg`, padding 28px, a small uppercase category chip (teal, on
  `--color-teal-glow`), H3 (1.25rem/650), muted description (0.9rem), and an inline
  mini-visual (search results, a small relationship graph, etc.).
- **Download CTA section** (`#download`) and additional context-layer/MCP pitch.

### 2. Features (`Retrace Features.dc.html`)
**Purpose:** Explain every capability in depth.

- **Header** — centered, max-width 760px, padding `128px 0 48px`. Category eyebrow
  "features" (teal). H1 `clamp(2.2rem,5vw,3.4rem)`/700: "Your personal **context
  layer.**" ("context layer." in `--color-accent`). Large decorative serif glyph
  bleeds off the top-right (Georgia, `clamp(220px,30vw,420px)`, very low opacity).
- **Feature rows** — alternating two-column text/visual rows, each with a category
  chip, H2 `clamp(1.5rem,3vw,2.1rem)`/700, and a description. The seven features:
  1. **Find anything you ever said** — semantic search.
  2. **See your social graph** — relationships sorted by closeness.
  3. **Every link you were ever sent** — resurfacing shared resources.
  4. **This time last year** — then-and-now resurfacing.
  5. **Watch your life flow** — streamgraph of conversations over time.
  6. **Bring your favorite AI to your own data** — MCP exposure (uses the accent
     chip instead of teal to distinguish it).
  7. **Turn it into something you keep** — saved reflection artifacts.
- **CTA section** — `--color-bg-alt` bg, centered, "Ready to explore your
  conversations?" + download/demo buttons.

### 3. Sources (`Retrace Sources.dc.html`)
**Purpose:** Show the 10 platforms Retrace ingests and how.

- **Header** — eyebrow "sources" (accent). H1: "Every platform where you **think and
  talk.**" Sub: reads from 10 sources; import, sync, or connect live; format
  auto-detected.
- **Three grouped sections** by ingest method: **Browser Extension**, **Import**,
  **Live Sync** — each a card grid of platform tiles. Platform brand colors are
  available as tokens (`--platform-whatsapp:#25D366`, `--platform-chatgpt:#10A37F`,
  `--platform-imessage:#4CAF50`, `--platform-obsidian:#7C3AED`, `--platform-spotify:#1DB954`, etc.).
- **Coming soon** — centered closing section on `--color-bg-alt`.

### 4. Privacy (`Retrace Privacy.dc.html`)
**Purpose:** Make the local-first / privacy architecture credible.

- **Header** — eyebrow "privacy by architecture" (accent). H1: "Your data is stored
  locally. **You choose what leaves.**"
- **Three pillars** (3-col grid → stacks): cards with icon + H2 + description —
  "Your data is stored locally" (SQLite in `~/.retrace/`), "You choose the
  intelligence" (MCP / Claude / Codex / local models), "Open source, forever" (MIT).
- **The complete data path** — 4-step horizontal diagram (`--color-bg-alt` band),
  stacks below 820px.
- **When data leaves your machine** — narrative section, max-width 880.
- **You control what providers see** — label-based permission/scope system, max-width 720.
- **Technical details** — two-column spec list (label + value rows, mono), max-width 640.

### 5. Get Started (`Retrace Get Started.dc.html`)
**Purpose:** Convert interest into install.

- **Header** — eyebrow "get started" (teal). H1: "Up and running in **five minutes.**"
- **How it works** — vertical list of setup steps (export → import → explore).
- **Demo** (`#demo`) — `--color-bg-alt` band with a product demo block.
- **CTA** (`#download`) — closing download section.

---

## Interactions & Behavior

These are implemented in `support.js` and each file's logic class. Reimplement with
your framework's equivalents (IntersectionObserver, CSS, a small hook).

- **Scroll reveal** (`data-reveal`): elements start at `opacity:0; translateY(22px)`
  (`.rt-reveal-init`) and animate in via `@keyframes rt-fadeup`
  (`opacity 0→1`, `translateY(10px→0)`) when scrolled into view. Use an
  IntersectionObserver; respect `prefers-reduced-motion`.
- **Sticky nav scroll state**: transparent → frosted background + border once the
  page is scrolled past the top (see Shell). Toggled by a scroll listener.
- **Hero word rotation**: the gradient word cycles conversations → music → journal →
  growth on a timer, with a fade+translate transition (`0.4s var(--ease-out)`).
- **Hub-and-spoke SVG**: spoke lines flow toward the center hub
  (`@keyframes rt-flow` animates `stroke-dashoffset` to −18, dashed strokes); the
  center circle pulses (`@keyframes rt-coreglow`, 3.2s).
- **Responsive stacking** (`data-stack="<px>"`, `data-cols`, `data-cols-mobile`):
  multi-column grids collapse to a single column below the given breakpoint. The
  prototype does this in JS by measuring width; in production prefer CSS media
  queries / container queries matching the same breakpoints (common ones: 760, 820, 640).
- **Hover states** (`style-hover`): buttons lift `translateY(-1px)`; primary button
  shifts to `--color-accent-light`; nav/footer links shift muted → full text color;
  cards raise shadow / shift border to `--color-border-light`.
- **Focus**: `:focus-visible` gets `--ring-focus` (`0 0 0 3px rgba(200,114,58,0.22)`)
  and a `--radius-md` corner.
- **Smooth scroll**: `html { scroll-behavior:smooth }`; in-page anchors (`#download`,
  `#demo`) jump within/across pages.

## State Management
Minimal — this is a marketing site. The only client state:
- Sticky-nav scrolled boolean (scroll position).
- Hero rotating-word index (timer).
- Reveal-on-scroll visibility flags (IntersectionObserver).
No data fetching. The download button would link to a real binary/release URL.

## Design Tokens
Authoritative source: `design_system/.../tokens/*.css` (and mirrored in the
`<style>` block of `Retrace Shell.dc.html`). Key values:

**Brand / accent**
- `--color-accent` (terracotta) `#c8723a` · `--color-accent-light` `#d4884e`
- `--color-teal` `#3a8f85` · `--color-teal-light` `#4da89d`
- `--gradient-brand` `linear-gradient(160deg,#c8723a 0%,#3a8f85 100%)` — **never recolor**
- `--gradient-brand-soft` `linear-gradient(160deg,rgba(200,114,58,0.14),rgba(58,143,133,0.12))`
- `--color-accent-glow` `rgba(200,114,58,0.12)` · `--color-teal-glow` `rgba(58,143,133,0.08)`

**Neutrals / surfaces**
- `--color-bg` `#faf9f7` · `--color-bg-alt` `#f3f1ed`
- `--color-surface` `#ffffff` · `--color-surface-hover` `#f9f8f6`
- `--color-border` `#e8e5df` · `--color-border-light` `#d4d0c8`
- `--color-brown` `#2d2a26` · `--color-off-white` `#faf9f7`

**Text**
- `--color-text` `#2d2a26` · `--color-text-muted` `#6b6560`
- `--color-text-faint` `#9c958e` · `--color-text-on-accent` `#faf9f7`
- `--color-primary` `#2d2a26`

**Status**
- `--color-positive` `#3a8f85` · `--color-neutral` `#9c958e`
- `--color-negative` `#b9533b` · `--color-warning` `#c89a3a`

**Platform brand colors**
- whatsapp `#25D366` · claude `#D97706` · chatgpt `#10A37F` · messenger `#0084FF`
- instagram `#E4405F` · imessage `#4CAF50` · obsidian `#7C3AED` · keep `#FBBC04`
- calendar `#4285F4` · spotify `#1DB954`

**Typography**
- `--font-sans` `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- `--font-mono` `'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, monospace`
- Mono is used for metadata, timestamps, captions, code, and the footer copyright.
- `--tracking-caps` `0.08em` (uppercase eyebrows) · `--tracking-wordmark` `-0.035em`

**Spacing scale**
- `--space-md` 1rem · `--space-lg` 1.5rem · `--space-xl` 2rem · `--space-2xl` 3rem
- `--space-3xl` 4rem · `--space-4xl` 6rem

**Radii**
- `--radius-sm` 6px · `--radius-md` 12px · `--radius-lg` 20px · `--radius-xl` 28px
- `--radius-full` 9999px (pills, badges, buttons)

**Shadows**
- `--shadow-xs` `0 1px 2px rgba(45,42,38,0.04)`
- `--shadow-sm` `0 1px 3px rgba(45,42,38,0.05), 0 1px 2px rgba(45,42,38,0.04)`
- `--shadow-md` `0 4px 16px rgba(45,42,38,0.06)`
- `--shadow-lg` `0 20px 60px rgba(45,42,38,0.10), 0 4px 16px rgba(45,42,38,0.05)`
- `--ring-focus` `0 0 0 3px rgba(200,114,58,0.22)`

**Motion**
- `--ease-out` `cubic-bezier(0.16,1,0.3,1)`
- `--blur-nav` `saturate(180%) blur(12px)` · `--scrim-nav` `rgba(250,249,247,0.78)`

**Layout maxima**: content `1080px`; nav/hero `1180px`; narrow text columns `720–880px`.

## Assets
- **Fonts:** Inter (400/500/600/700) and JetBrains Mono (400/500/600), loaded from
  Google Fonts in the prototype. `design_system/.../tokens/fonts.css` notes that for
  production you can self-host the `.woff2` binaries and swap the `@import` for local
  `@font-face` rules.
- **Logo:** inline SVG (no file) — a terracotta circle `#c8723a` plus three
  descending rounded bars at decreasing opacity. Used at 24px in the nav and 66px
  (white) inside the 106px hero hub. Recreate as an SVG component.
- **Icons:** inline SVGs throughout (Apple logo, play triangle, lock, etc.). No icon
  font. Match stroke-based style (`stroke-width` ~1.6–2, round caps/joins).
- **Platform logos** (Sources page): use official brand marks/colors per the platform
  tokens above. Not bundled here — source from each platform's brand guidelines.
- **Illustrations** (relationship graph, streamgraph, hub-and-spoke) are
  CSS/SVG-drawn in the prototype, not image files.

## Files
In `design_files/`:
- `Retrace Shell.dc.html` — shared nav + footer wrapper (build as a layout component).
- `Retrace Landing.dc.html` — landing page.
- `Retrace Features.dc.html` — features page.
- `Retrace Sources.dc.html` — sources page.
- `Retrace Privacy.dc.html` — privacy page.
- `Retrace Get Started.dc.html` — get-started page.
- `support.js` — prototype runtime (reference only — **do not ship**).

In `design_system/` — the Retrace design system (token CSS is the source of truth):
- `styles.css` — entry manifest that `@import`s the token files.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`,
  `tokens/effects.css`, `tokens/fonts.css`, `tokens/base.css`.
- `readme.md` — design-system notes.
- (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are tooling
  artifacts — ignore for implementation.)

## Suggested implementation approach
1. Stand up the project (static-site generator recommended for a marketing site).
2. Port the token CSS from `design_system/tokens/` into your styling layer (CSS vars,
   Tailwind theme, or your token system) — keep the variable names/values.
3. Build the **Shell** as a layout: sticky nav (with scroll-frost behavior + mobile
   menu) and footer.
4. Build shared primitives: button (primary pill / ghost), category chip, card,
   eyebrow label, spec-row.
5. Build each page section-by-section against the descriptions above, matching
   measurements and copy.
6. Add the behaviors: scroll-reveal (IntersectionObserver), hero word rotation,
   nav frost, hub-and-spoke + glow animations. Gate motion behind
   `prefers-reduced-motion`.
7. Wire real links/release URL for the download CTA.
