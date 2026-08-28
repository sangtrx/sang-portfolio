# Sang Portfolio Design System

## Design read

A developer / AI technical-lead portfolio for recruiters, hiring managers, and technical interviewers. The visual language is **editorial technical, premium, evidence-first**: authored enough to feel distinctive, restrained enough that architecture and proof remain the product.

Design dials:

- **Variance:** 6/10 — asymmetric composition and zig-zag rhythm, without portfolio-art-show chaos.
- **Motion:** 4/10 — one authored entrance moment plus precise interaction feedback; no decorative animation loops.
- **Density:** 4/10 — enough information to establish seniority quickly, with generous reading space around evidence.

## Principles

1. **Artifact over decoration.** System diagrams, evidence, status, research, and real constraints carry more visual weight than abstract effects.
2. **Hierarchy without kickers everywhere.** Headings should usually stand on their own. Use small metadata only when it adds real context such as role, year, stage, or verification status.
3. **One accent family.** True cobalt blue is the portfolio accent. Project-specific visuals may vary in value and intensity but must remain inside the same blue family.
4. **No generic AI glow language.** Avoid purple/periwinkle drift, purple-to-blue mesh backgrounds, halo shadows, gradient text, neon cyber styling, and ornamental glass.
5. **Cards only when hierarchy needs a container.** Prefer editorial rows, rules, whitespace, and asymmetric grids over repeated bordered rounded rectangles.
6. **Truthful visual emphasis.** Do not visually imply production maturity, scale, customer adoption, or performance beyond the written evidence.
7. **Readability wins.** Body copy should remain near 65–75 characters per line; display type stays below roughly 6rem; large type uses restrained negative tracking.

## Typography

Primary typeface: **Geist Variable**, self-hosted through Fontsource.

Use:

- Display headings: 650–760 weight, tight line-height, tracking around `-0.03em` to `-0.04em`.
- Section headings: 620–720 weight.
- Body: 400–520 weight, relaxed line-height.
- Metadata: 520–650 weight, sentence case by default.
- Monospace only for code, system diagrams, identifiers, measurements, or genuinely technical data.
- Use tabular numerals for dates, test counts, percentages, and status metrics.

Avoid:

- Inter/system-default as the portfolio voice.
- ALL CAPS on every section label.
- Decorative mixed-font emphasis.
- Huge billboard typography that pushes evidence below the fold.

## Color

Direction: **midnight navy + true cobalt blue**. The accent must read as blue, never violet/periwinkle.

Light:

- Background: `#f5f8fc`
- Surface: `#ffffff`
- Secondary surface: `#eaf1fb`
- Text: `#0d1726`
- Muted: `#607087`
- Accent: `#1f6feb`
- Accent soft: `#e5efff`

Dark:

- Background: `#07101d`
- Surface: `#0b1626`
- Secondary surface: `#101e31`
- Text: `#f4f8ff`
- Muted: `#94a6bd`
- Accent: `#4c8dff`
- Accent soft: `#0d2a52`

Rules:

- Do not reintroduce violet, purple, lavender, or periwinkle accents.
- Do not add a competing cyan/teal brand family; `--cyan` aliases the cobalt accent.
- Primary CTA, focus state, selection, active navigation, evidence markers, and technical hot nodes share the same cobalt family.
- Dark technical panels use navy-black rather than neutral/purple black.
- Use tinted neutrals consistently. Do not mix warm and cool gray systems on the same surface.

## Shape and depth

- Main surfaces: around 16px radius.
- Small controls: around 8–11px radius.
- Pills are reserved for genuinely compact status/control semantics, not every tag or CTA.
- Prefer border **or** shadow. Do not stack a soft shadow under every bordered card.
- Shadows, when used, are subtle and tinted to the page environment.

## Layout

- Main content max width: roughly 1220px.
- Homepage hero is intentionally asymmetric: large proposition left, concise operating statement right.
- Project cases alternate visual/copy orientation to create authored rhythm.
- Credibility information is an editorial rail, not a dashboard metric strip.
- Ownership, skills, and capability groups use rules + whitespace instead of equal-height cards where possible.
- Mobile collapses to one clear reading order; reversed desktop project cards reset to source order.

## Motion and interaction

- One authored initial hero entrance is enough for the page shell.
- Buttons and links use short, ease-out hover/active feedback.
- Avoid bounce/elastic easing and continuous ambient movement.
- Motion must respect `prefers-reduced-motion`.
- Hover cannot be the only way to discover meaning.

## Browser surfaces

Theme these intentionally:

- selection;
- focus rings;
- scrollbar thumb;
- underline offset on text links;
- tabular numerals for evidence/data.

## Portfolio-specific anti-patterns

Do not add:

- three equal feature cards with icons;
- fake testimonials, logos, usage metrics, or hiring claims;
- decorative section numbering where the sequence has no meaning;
- repeated `eyebrow → heading → paragraph` scaffolds on every section;
- rocket/shield/spark cliche iconography;
- generic terminal screens that do not demonstrate a real system;
- stock team photos or synthetic product screenshots presented as evidence;
- extra animation libraries unless a specific interaction requires them.

## Evidence surfaces

YHCT and Curren visuals should prefer:

1. sanitized real screenshots when available;
2. accurate architecture diagrams tied to the written system;
3. real public API / CLI / MCP output;
4. explicit status/evidence labels.

Never fabricate a screenshot to make the portfolio look more complete.

## References used for this design pass

- `pbakaus/impeccable` — critique/polish/craft-floor guidance.
- `Leonxlnx/taste-skill` — redesign-existing-projects and anti-slop portfolio guidance.

These are design heuristics, not dependencies or runtime requirements. The project keeps its Astro + plain-CSS architecture.
