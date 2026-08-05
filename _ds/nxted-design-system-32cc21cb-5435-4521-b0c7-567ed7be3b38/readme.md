# NxtEd Design System

NxtEd is a K-12 through college-prep tutoring service offering math, science, reading, and test prep. This system is built from brand exploration, production flyers, and component library specifications.

**Source materials:**
- `NxtEd wordmark design NEW/NxtEd Brand Book.dc.html` — brand direction exploration; **"Scholar Warm"** is the shipped direction
- `NxtEd wordmark design NEW/NxtEd Logo Final.dc.html` — finalized logo and lockup
- `NxtEd wordmark design NEW/NxtEd September Flyer.html` — production flyer with exact colors, type sizes, and patterns
- `NxtEd wordmark design NEW/NxtEd Next-Year Flyer.dc.html` — additional production reference

No live codebase or Figma file exists — this system is built from shipped marketing materials.

## Index
- `styles.css` — root stylesheet importing all tokens
- `tokens/` — CSS custom properties for colors, typography, spacing, and fonts
- `components/core/` — Button, Badge, Card, IconTile, ContactCard
- `components/marketing/` — Hero section
- `components/navigation/` — NavBar
- `guidelines/` — foundation specimen cards
- `ui_kits/website/` — marketing homepage UI kit
- `assets/` — logo files

## Content fundamentals
- **Voice:** warm and direct; short declarative sentences. "Learning that clicks." / "Confidence, one session at a time."
- **Perspective:** third-person student focus ("every student", "each learner"), not second-person — reads as a service described to parents
- **Emoji:** none in copy; practical use only (e.g., utility labels in internal tools)
- **Headlines:** 2–5 words, punchy. Subheads explain in one sentence.
- **CTAs:** action-first verbs. "Book a session", "Get started", "Meet the tutors" — never vague.

## Visual foundations
- **Color:** warm neutral base (espresso `#241C15` text, parchment `#F5F1EA` surfaces) + marigold gradient accent (`#FFB03A → #FF7A00`) + teal secondary (`#12A5A0`). Max two accents per surface.
- **Type:** Montserrat 600–800 for structure (headlines, labels, buttons, nav). Source Serif 4 400–600 for body/long-form (underutilized in current flyers; worth bringing into body copy for warmth/contrast on the website).
- **Spacing:** generous — page padding 56–64px, section gaps 22–46px, card padding 26–34px.
- **Corners:** consistently rounded — 18–24px on cards/panels, full pill (999px) on buttons and badges. No sharp corners.
- **Shadows:** soft, warm-tinted (espresso/brown shadows, not neutral gray). Card shadows: `0 18px 40px -32px rgba(90,45,0,.6)`. Elevated: `0 24px 60px -34px rgba(0,0,0,.4–.5)`.
- **Backgrounds:** flat color or marigold gradient only. No photography, full-bleed imagery, textures, patterns, or grain.
- **Borders:** hairline dividers (`#EEE6D8`) in nav/header. Card boundaries shadow-defined, not bordered — except contact tiles (1px tinted border).
- **Animation:** no specs in source material. Recommend subtle fades/hovers for polish; avoid bouncy/playful motion.
- **Hover/press:** one precedent — link hover darkens marigold (`#FF7A00 → #E06A00`). Recommend: solid buttons darken on hover; outline buttons light-tint on hover.
- **Transparency/blur:** tonal washes only (`rgba(18,165,160,.14)` teal, `rgba(255,176,58,.12)` marigold). No blur/glassmorphism.
- **Layout:** single-column, centered, generous whitespace. No fixed/sticky elements in source (print-oriented flyers). Website nav bar is a new addition.

## Iconography
**No icon library exists yet.** Only one repeating "icon" — a gradient rounded-square tile with a bold checkmark (`IconTile` component) — reused across every benefit list.

**Recommendation:** if the website needs varied iconography (subject icons, benefit glyphs), adopt a CDN set with similar bold/rounded weight (e.g., Phosphor "fill" or Heroicons "solid") rather than generating new SVGs. Current single-checkmark design is intentional but limits flexibility.

## Components

### Core (`components/core/`)
- **Button** — pill CTA button; variants: primary (filled marigold), secondary (outlined), on-dark (light outline). JSDoc starting point: `section="Components"`.
- **Badge** — compact label; tones: teal, marigold, inverse (white on dark).
- **Card** — white card with shadow and border-radius. Generic content wrapper.
- **IconTile** — gradient rounded-square with centered icon/glyph. Reusable benefit marker.
- **ContactCard** — styled contact tile with tinted background, border, and large text. Variants: teal, marigold.

### Marketing (`components/marketing/`)
- **Hero** — full-width hero section with headline, subhead, CTA buttons, and optional gradient background.

### Navigation (`components/navigation/`)
- **NavBar** — top navigation bar with logo, links, and CTA button.

**Card HTML:** each directory includes a `.card.html` file tagged with `<!-- @dsCard group="Components" ... -->` for the Design System tab.

## Guidelines
Eight foundation specimen cards in `guidelines/`:
- **Colors:** primary (marigold gradient + teal), neutral (espresso, stone, parchment, sand)
- **Type:** display (Montserrat 800), body (Source Serif 4 400–600)
- **Spacing:** 8–64px scale with examples
- **Radii & Shadows:** standard radius values and shadow tokens
- **Logo:** brand lockup and usage
- **IconTile:** checkmark token and reuse pattern

## UI Kit: Website
`ui_kits/website/index.html` — proposed marketing homepage prototype using the components above. Demonstrates NavBar, Hero, benefit cards with IconTiles, ContactCard footer, and responsive layout.

**Note:** This is a new design, not a recreation of an existing website (none shipped yet).

## Intentional additions
No component library was defined by an attached codebase or Figma — this system authors a standard set sized to a marketing site: Button, Badge, IconTile, Card, ContactCard, NavBar, Hero. All built directly from shipped flyer patterns and brand-book mockups.
