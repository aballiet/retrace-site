# Retrace Design System

> The app where you understand yourself.

Retrace reads the conversations you've already had — across WhatsApp, iMessage, ChatGPT, Claude, Messenger, Instagram, Obsidian, Google Calendar — structures them **on your own machine**, and quietly reflects the patterns back: relationships over time, recurring topics, emotional arcs, forgotten threads. It is **local-first and privacy-first**. The deep reflection is done by a frontier model (Claude), but you decide exactly what it's allowed to see.

It is *not* a chat-export viewer and *not* an attention-hungry dashboard. It is a calm space for retrieval and reflection over things you've already said.

This design system captures Retrace's brand, foundations, components, and full product/marketing surfaces so any agent can design on-brand artifacts.

---

## Sources this was built from

- **Brand assets + integration guide** — `uploads/` (logo set + `INTEGRATION.md`), now in `assets/`.
- **GitHub: [`aballiet/retrace-site`](https://github.com/aballiet/retrace-site)** — the marketing site (design tokens in `src/styles/global.css`, platform brand icons, feature explainer mockups, docs MDX). The richest source of truth used here.
- **GitHub: [`aballiet/retrace-releases`](https://github.com/aballiet/retrace-releases)** — public release artifacts (downloads / auto-update).
- The **desktop app source** (`aballiet/retrace`) is a **private** repo and was not accessible. The app UI kit here is reconstructed from the brand, the public tokens, and the site's HTML/CSS product mockups — explore the private repo if you have access to push fidelity further.

Readers with access should explore those repositories to build higher-fidelity Retrace designs.

---

## Content fundamentals

**Voice.** Second person ("you", "your conversations"). Calm, intimate, grounded — a quiet companion, never a coach or a hype-man. Sentences are short and plain. It speaks *about* you to *you*.

**Casing.** Sentence case everywhere. Headlines are sentence case. The wordmark **"retrace" is always lowercase**. Small eyebrow labels may be UPPERCASE with wide tracking, used sparingly. UI verbs that quote the user keep the user's own lowercase, unpunctuated style ("honestly not sure i want to stay another year").

**Tone rules (hard).**
- Privacy: say **"your data is stored locally"** and **"you choose what leaves."** Never "everything stays local" or "no cloud."
- Claude: say it **"sees only what you allow."** Never "full access."
- **No em dashes** anywhere (use a period, comma, or "and"). Spaced hyphens or "and" instead.
- Nothing urgent. No "Don't miss", no countdowns, no exclamation-heavy copy. Insights *wait* for you.

**Example copy (on-brand):**
- Hero: "The app where you understand yourself."
- Reflection card: "Career doubts came up with Hugo three times this spring, each after a Sunday call."
- Rediscovery: "Sara offered you studio space in February. You said 'let's talk in spring' — it's spring."
- Privacy: "Your data is stored locally. Labels and permission rules decide exactly what each tool can see."

**Emoji.** Essentially never in product chrome. A user's own message may contain one (it's their data) — render it, don't add your own. The r-echo lettermark is the only motif that ever evokes the brand, and even that is rare.

**Numbers / metadata** are set in JetBrains Mono (timestamps, counts, dates, stats) — this is the quiet "machine" register that sits behind the human copy.

---

## Visual foundations

**The feeling matters more than the features.** Quiet over loud; calm, minimal, warm; glanceable; trustworthy and grounded.

**Color.** A warm, paper-like light palette. Off-white `#faf9f7` background, white card surfaces, brown `#2d2a26` ink. Two accents only: **terracotta `#c8723a`** (warm, primary) and **teal `#3a8f85`** (cool, secondary). Borders recede (`#e8e5df`). Status/sentiment colors exist (positive = teal, negative = a muted brick `#b9533b`) but appear as small dots/badges, never large fills. Platform brand colors are used only on source glyphs and avatar rings.

**The brand gradient.** Terracotta → teal, angled top-left to bottom (`160deg`). It reads as "capture cooling into reflection." Used for the app-tile lettermark and for the soft `insight` card wash. **Never recolored, stretched, or shadowed.**

**Two registers.** The core visual idea: **raw data** (conversations, messages) and **synthesized insight** (reflections, summaries) must read as distinct. Raw = plain white `surface` card, regular weight. Insight = warm `gradient-brand-soft` wash, medium weight, a ✦ sparkle + terracotta eyebrow. Keep insight surfaces rarer than raw ones — the contrast is the point.

**Type.** Inter for everything UI (400/500/600/700, tight `-0.02em` tracking on headings). JetBrains Mono for metadata. The wordmark is Inter 600, `-0.035em`, lowercase. Reading body is 18px / 1.65; dense UI is 14–16px / 1.5.

**Spacing & layout.** Generous whitespace is a brand value — let surfaces breathe. 4-based scale (4 → 128). Content maxes at 1200px (narrow reading at 800px). The app uses a 264px sidebar.

**Corner radii.** Soft, never sharp. 6 (chips/inputs), 12 (buttons/rows), 20 (cards/panels), 28 (large surfaces), full (pills, avatars). Buttons and chips are fully pill-shaped.

**Cards.** Rounded-20, 1px `#e8e5df` border, very soft low shadow (`shadow-sm/lg`). On hover (if interactive) they lift 2px and the shadow deepens. Insight cards drop the shadow and take the gradient wash + a tinted border.

**Elevation / shadows.** Soft, warm-neutral, low opacity — structure comes mostly from hairline borders, not heavy shadows. Floating glyph circles in diagrams use a tight directional glow (`shadow-glyph`).

**Borders.** Hairline `1px` `#e8e5df` is the default separator. They recede; they never shout.

**Motion.** Calm. Signature ease is `cubic-bezier(0.16, 1, 0.3, 1)` (a gentle settle). Durations 200 / 400 / 800ms. Entrances are soft fades + a small upward translate (`.reveal`). **No bounces, no spin-for-attention, nothing that pulses or loops to grab the eye.** Respect `prefers-reduced-motion`.

**Hover / press.** Hover = a soft surface tint or a 1–2px lift, never a saturated color flash. Primary button darkens slightly (`#2d2a26 → #3d3934`). Press settles back to rest (no shrink). Focus = a soft terracotta ring (`0 0 0 3px rgba(200,114,58,0.22)`).

**Transparency & blur.** Used sparingly: the sticky site nav uses a paper-tinted scrim + `blur(12px)` over scrolling content. Otherwise surfaces are opaque.

**Imagery.** The brand leans on **no photography by default** (privacy-first — avatars are warm initials, not faces). When imagery appears it's warm-toned and quiet. The recurring visual is the **r-echo lettermark** — a warm lowercase `r` with its lighter echo ("you, and your echo") — and **streamgraph/network** data visuals built from the warm palette. No stock photos, no gradients-as-decoration, no glassmorphism.

---

## Iconography

- **System icons:** an **outline / line** style (Heroicons-grade): ~1.5–1.6px stroke, round caps and joins, 24px grid. The site's own explainer mockups use exactly this style. This system ships a curated inline set in `ui_kits/app/icons.jsx` (`window.RetraceIcons`: Search, Home, Messages, People, Waves, Graph, Sparkles, Clock, Calendar, Shield, Settings, Lock, Tag, etc.). **Substitution flag:** for any icon not in that set, use **[Heroicons](https://heroicons.com) (outline)** — the closest match to the brand — or Lucide outline at the same stroke weight; keep round caps.
- **Platform / source icons:** the *real* brand glyphs (WhatsApp, Claude, ChatGPT, Messenger, Instagram, iMessage, Obsidian), each in its own brand color. Shipped as the `PlatformIcon` component (real SVG paths, copied from the source repo). Use these to mark where a conversation came from — never recolor them to the Retrace palette.
- **The mark** is the **r-echo lettermark** (a warm lowercase `r` with its lighter echo), used as logo only (never as a UI glyph). `Logo` renders it two-tone, `cream`, or `mono`. For square contexts (app icon, dock tile, favicon, avatar) the **`AppMark`** renders the lowercase **`r` lettermark with its lighter echo** — never stretch the wordmark or waves mark into a square.
- **Emoji as icons:** no. **Unicode glyphs as icons:** no (the `×` on removable labels is the only exception).

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import` manifest only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css`.
- `assets/` — the logo set: `retrace-mark.svg` (reflection mark, **mono terracotta default**), `retrace-mark-cream.svg` / `retrace-mark-mono.svg` (dark / single-ink), `retrace-mark-gradient.svg` (hero only), `retrace-icon.svg` (terracotta app tile), `retrace-icon-light/-dark/-terracotta.svg` (tile variants), `retrace-favicon.svg`.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**Components** (`window.<Namespace>.<Name>` after loading `_ds_bundle.js`)
- `components/buttons/` — `Button`, `IconButton`
- `components/display/` — `Card`, `Badge`, `Label`, `Avatar`
- `components/forms/` — `Input`, `Toggle`
- `components/navigation/` — `Tabs`, `SegmentedControl`
- `components/brand/` — `Logo`, `AppMark`, `PlatformIcon` (+ `platformColors`)

**UI kits**
- `ui_kits/app/` — the Retrace desktop app (conversations, home/digest, rivers, people, network, privacy)
- `ui_kits/site/` — the retrace.now marketing landing page

**Foundation cards** live in `guidelines/` (Brand, Colors, Type, Spacing) and populate the Design System tab.

---

## Using it

Link the stylesheet, load the bundle, read components off the namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Logo } = window.RetraceDesignSystem; // exact namespace via check_design_system
</script>
```

For static artifacts (slides, mocks), copy the assets you need out of `assets/` and reference the tokens. Keep it quiet.
