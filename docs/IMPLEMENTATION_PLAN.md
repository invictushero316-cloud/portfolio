# Implementation plan — Matheus Silva portfolio

Phase 00 plan. This document is the build contract for later phases. It does not authorize production code, contact UI, invented contributions, or publication of `reference-only/` files.

Sources read in full before this plan: `docs/PROJECT_BRIEF.md`, `docs/ASSET_CHECKLIST.md`, `.cursor/rules/portfolio.mdc`. Also checked: `docs/CURSOR_PHASE_PROMPTS.md`, `README.md`, `.gitignore`, `reference-only/README.txt`. The workspace has no React app yet. `reference-only/Video_Editing.pdf` is present and stays private. Diego Sevilla screenshots were not in the workspace, so this plan uses the brief's written atmosphere (electric blue and white, layered engineering imagery, original circuit drawing, controlled motion, scroll storytelling) and specifies an original composition.

Internal art direction name: **Signal Atlas**. A typographic, ice-and-navy portfolio whose drawings are original circuit geometry. The page should feel like a precise instrument, with warm editorial type and a lot of quiet space.

## 1. Approved information architecture

One marketing site. The home document is a single scroll. Case studies are separate routes. Locales are route prefixes. There is no contact route, contact section, contact hash, or contact query.

| Order | Region | Section id | Header label (pt-BR / en / es) |
|---|---|---|---|
| 1 | Hero | `#inicio` | Início / Home / Inicio |
| 2 | About | `#sobre` | Sobre / About / Acerca |
| 3 | Experience | `#experiencia` | Experiência / Experience / Experiencia |
| 4 | Skills & Services | `#habilidades` | Habilidades / Skills / Habilidades |
| 5 | Selected Projects | `#projetos` | Projetos / Projects / Proyectos |
| 6 | Creative Lab | `#laboratorio` | Laboratório criativo / Creative Lab / Laboratorio creativo |
| 7 | Certifications | `#certificacoes` | Certificações / Certifications / Certificaciones |
| 8 | Footer | `#rodape` | Not a header item. Name, role, and the same section links. |

Header destinations are only those seven. Certifications is both a section and a nav item, which matches `.cursor/rules/portfolio.mdc`. The brief's shorter label list is the same set, with Certifications included so the section is reachable from the header.

Routes:

- `/` — pt-BR home scroll.
- `/en` and `/es` — the same scroll in that language.
- `/projetos/:slug`, `/en/projects/:slug`, `/es/proyectos/:slug` — case study. Slug is stable across languages.
- Unknown paths render a small recovery view with links back to the seven sections. No search that collects personal data.

Hero actions, pt-BR, locked for Phase 02:

- **Ver projetos** scrolls to `#projetos`.
- **Minha experiência** scrolls to `#experiencia`.

Other allowed actions, always in-page or to a case-study route: "Explorar experiência", "Ver detalhes", "Conhecer o laboratório criativo", "Ler o estudo", "Voltar aos projetos", "Próximo projeto". English and Spanish equivalents stay in the same family. Footer contains the name **Matheus Silva**, the role **Desenvolvedor Full Stack & Engenheiro de IA** (localized), and section links. No copyright line.

Work samples allowed on the site once a milestone reaches them:

1. Aurora Inbox — product reference, contribution unverified.
2. Shibinda — product reference, contribution unverified.
3. RueData AI — product reference, contribution unverified.
4. Restaurant AI ordering chatbot — owner-described product about WhatsApp as technology. No public demo, no outcomes, no messaging link.
5. Pedro Cores Film — owner-described immersive audiovisual project. Personal contribution and tools unconfirmed. The cinematic presentation lives in Creative Lab and may link to one case-study route.

Fresha stays omitted until the owner confirms a specific contribution. Hourly rate and platform rating stay omitted.

## 2. Design tokens and type hierarchy

Initial palette from the Phase 02 brief. Later phases may shift a token only with a written visual reason, recorded in the phase report.

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0C2D59` | Text, primary button fill, circuit strokes |
| `--blue` | `#1D6FF2` | Large accents, focus ring, active filter, rules |
| `--cyan` | `#70B7FF` | Capsule borders, secondary circuit strokes |
| `--ice` | `#E9F4FF` | Page background |
| `--white` | `#FFFFFF` | Panels, button labels on navy |
| `--navy-soft` | `rgb(12 45 89 / 0.12)` | Hairlines, card borders |
| `--shadow` | `0 18px 50px rgb(12 45 89 / 0.08)` | One elevation only |

`--blue` is an accent for large type, lines, and chips. Body copy and button labels sit in `--navy` on `--ice` or `--white` on `--navy`, so small text does not depend on electric blue for contrast. Phase 02 must measure the pairs and darken `--blue` if a large-text accent fails WCAG AA.

Type:

- Display: Fraunces, self-hosted, optical size around 144 for the hero only. Warm editorial serif.
- Interface: Outfit, self-hosted, for navigation, body, buttons, and meta.
- If Fraunces looks costume-like in the real hero, Phase 02 may switch the display face to Newsreader and must say why.
- `font-display: swap`. Preload only the display roman used by the hero. Latin and Latin-ext subsets. No third-party font request.

Two-size rhythm inside each section: one display or section title, then one body size. Meta is allowed as a third, quiet layer.

| Role | Size | Line height | Tracking | Weight |
|---|---|---|---|---|
| Hero display | `clamp(3.25rem, 7vw, 6.25rem)` | 0.96 | -0.03em | 560 |
| Section title | `clamp(2rem, 4vw, 3.25rem)` | 1.05 | -0.03em | 560 |
| Lead | `clamp(1.125rem, 1.4vw, 1.35rem)` | 1.55 | 0 | 400 |
| Body | `1.0625rem` | 1.7 | 0 | 400 |
| UI / button | `0.95rem` | 1.2 | 0.01em | 560 |
| Meta | `0.8125rem` | 1.4 | 0.04em | 500 |

Space scale in px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section padding is 128 desktop, 96 at 1024, 72 at 768, 64 at 390. Content column max width 1120. Hero art may bleed past the column to the viewport edge. Page gutter 24 from 1024 up, 20 at 390.

Radius: 999 for capsules and pills, 20 for cards, 28 for the hero art frame. Header is a 1px `--navy-soft` line on `--white` at 72% opacity, blur at most 12px. If blur muddies the wordmark, drop the blur and keep the solid ice bar.

Breakpoints used for design and QA: 390, 768, 1024, 1440. The hero stacks below 1024. The header becomes a menu below 1024.

Motion tokens, used by the storyboard in section 6: durations 0.35, 0.45, 0.6, 0.7, 0.9 seconds; eases `power2.out`, `power3.out`, `sine.inOut`. One small `back.out(1.2)` on capsules only.

## 3. SVG and illustration direction

All drawings are original and authored in this repo. No stock character, no traced reference artwork, no fake product screenshot, no generated face.

Hero instrument, name **Signal Atlas plate**:

- A soft ice disc, about 70% of the art frame, off-center toward the top right.
- Orthogonal traces and a few arcs, stroke 1.25px, `--navy` and `--cyan`. Junctions are 4px circles.
- One abstract slab suggesting an instrument face: rounded rectangle, hairline grid, three short status ticks. It must not resemble a real IDE, phone chat, or client UI.
- A slow dash offset on two paths only, paused off-screen.
- Skill capsules sit on the boundary between the headline column and the plate: Python, AI, APIs, Automação, React. They name technologies. They are not certified-skill claims and they do not repeat the year ranges.

About and section backgrounds reuse short trace fragments at low opacity so the site feels like one drawing, not a new theme per section.

When no photo is approved, the hero identity is the wordmark plus this plate. A portrait of Matheus is optional and used only after the owner supplies a file and says it may be published.

Portrait rules, if a file arrives before Phase 02 or 03:

- Store a private reference in `reference-only/` until publish permission is explicit.
- Publishable crop goes to `public/assets/hero/` as WebP or AVIF, about 1400px wide, EXIF stripped.
- Place the photo inside an arched or circular mask. Circuit lines stay outside the face.
- Alt text names Matheus Silva and the role. Alt text contains no contact detail.
- Do not retouch the photo into a different person, and do not generate a stand-in face.
- Photos of anyone else wait for a named file plus a statement that publication is allowed. Until then, crop them out or do not use the image.

Creative Lab stills from the PDF are concept art. They are published only as owner-approved exports in `public/assets/media/`, each captioned as visual studies. The PDF itself never moves to `public/` or `dist/`.

Lottie is unused unless the owner supplies an original file they have rights to, under `public/assets/motion/`. No WebGL.

## 4. Desktop and mobile wireframes

### Desktop, 1440 wide, content column 1120

Header, 72px, sticky. Left: wordmark "Matheus Silva". Right: seven text links, then a language control `PT | EN | ES` with the current locale indicated. The bar stays readable on ice. Skip link is the first focusable control and becomes visible on focus.

Hero, first viewport, two columns. Columns 1–7: eyebrow "Desenvolvedor Full Stack & Engenheiro de IA", the locked headline, the locked supporting sentence, then the two hero actions in a row. Columns 8–12: the Signal Atlas plate, vertically centered against the headline, bleeding toward the right gutter. Five capsules overlap the column gutter, stacked loosely, not in a perfect grid. The headline is the largest thing on the page. The plate is secondary. White space under the actions is intentional, at least 48px before the next section.

About. A 5/7 split. Left: section title and two short paragraphs (positioning, lean-architecture philosophy, self-described eight years). Right: a quiet fact stack — Brazil, Portuguese / English / Spanish with the brief's proficiency wording, and the three skill ranges (Python 5–10, CRM 5–10, Machine Learning 3–5). Ranges stay ranges.

Experience. One reading column. A 2px vertical rail. Three entries, newest or oldest in chronological order from 2018 to 2026, top to bottom, oldest first so the story reads forward. Each entry: dates, company, role, one sentence from the brief. No employer logo until the owner supplies an authorized mark.

Skills & Services. Left cluster: the three ranges, drawn as labeled meters whose fills match the range band, not a fake percentage. Right cluster: service cards for the kinds of software in the brief — software de produto, automações, soluções com IA, APIs e integrações. Cards describe the work type. They do not promise savings, speed, or revenue.

Projects. A filter row: Todas, IA, Automação, SaaS/CRM, Comércio, Análise, Criativo. Then equal cards in two columns. Each card shows title, category, a one-line product summary, and a status line that matches verification state. Unverified product references share the same visual weight. Media area uses the abstract trace plate until an approved screenshot exists.

Creative Lab. A short intro, then a row of four concept-art frames with the names Enchanted Sky Forest, Neon After Rain, The Sunken Kingdom, Beyond the Rings, each labeled "Estudos visuais / Arte conceitual". Pedro Cores Film sits as a separate note: owner-described immersive project, contribution open. If no still is approved, the frame is an original blue-violet trace study labeled as a stand-in, not as a capture of the film.

Certifications. Four text badges in one row: Design Patterns 90%, Linux 83%, English 83%, Advanced JavaScript 76%. Text only. No outbound link.

Footer. Name, localized role, seven section links wrapped on one or two lines. Plenty of ice below. No legal claim, no icon row.

### Tablet, 768–1023

Header collapses to wordmark plus a menu button. The menu lists the seven sections and the language control. Hero stacks: type block first, actions, capsules in a wrap, plate below at about 80% of the column width. About and skills become one column. Project cards stay two columns only if both cards remain at least 320px wide; otherwise one column. Certification badges wrap to two by two.

### Mobile, 390 wide

Gutter 20. Hero headline wraps to about four lines at the clamp minimum and remains the first focus. Actions stack full width, at least 48px tall, with 12px between them. The plate sits under the actions and must not overflow the viewport. Capsules wrap under the lead, before the plate, so the identity reads with text alone. Timeline rail stays inside the gutter. Filters are a horizontal scroll region with visible keyboard access, or they wrap; they must not widen the page. Concept frames stack. Footer links wrap. No horizontal overflow at 390, 768, 1024, or 1440.

## 5. Project content schema and verification

One typed record per case study. Missing facts stay empty or null. The UI prints a calm status sentence. It never fills a gap with a guessed stack, metric, logo, or screenshot.

```ts
type ContributionStatus =
  | "omitted"
  | "product-reference-unverified"
  | "owner-described"
  | "confirmed";

type ProjectRecord = {
  slug: string;
  title: string;
  category: "ai" | "automation" | "saas-crm" | "commerce" | "analytics" | "creative";
  summaryKey: string;
  contributionStatus: ContributionStatus;
  ownerRole: string | null;
  verifiedDeliverables: string[];
  technologiesVerified: string[];
  metricsVerified: string[];
  screenshots: { src: string; altKey: string }[];
  screenshotsApproved: boolean;
  publicProductURL: string | null;
  publishPermission: boolean;
  showProductLink: boolean;
};
```

Initial records:

| Slug | Status | Owner role | Verified tech | Metrics | Product URL on site | Screenshots |
|---|---|---|---|---|---|---|
| `aurora-inbox` | product-reference-unverified | null | none | none | off until the owner approves the link | none |
| `shibinda` | product-reference-unverified | null | none | none | off until approved | none |
| `ruedata-ai` | product-reference-unverified | null | none | none | off until approved | none |
| `restaurant-ai-chatbot` | owner-described | null until the owner states a role | Python, Node.js, and AI only as described | none | none | none |
| `pedro-cores-film` | owner-described | null until confirmed | none until confirmed. Unity, animation, video editing, and 360 video stay proposed, not verified | none | none | none |
| Fresha | omitted | — | — | — | never, unless a later written confirmation adds a real record | never |

`showProductLink` can become true only when `publishPermission` is true and the owner has approved that specific URL. The visible label is "Site do projeto" / "Project site" / "Sitio del proyecto". The link is a product reference. Anchor text and surrounding copy must not present it as a personal profile.

Restaurant chatbot copy may say that the assistant was described as using WhatsApp together with Python, Node.js, and AI for menus, order guidance, status, abandoned checkout, promotions, reviews, and handoff. The word WhatsApp is technology. The href must not be a chat, `wa.me`, or `api.whatsapp.com` URL.

Case-study page order: title, status sentence, product summary, then only the verified groups that are non-empty (role, deliverables, technologies, metrics, media). Next and previous links move inside the published set. A back link returns to `#projetos` in the current locale. Draft studies can exist in the data file and still be hidden from the index when `publishPermission` is false. Default for the five allowed samples is `publishPermission: true` for a neutral overview, with unverified fields hidden. That is a product overview, not an authorship claim.

Status sentences:

- product-reference-unverified: "Visão geral do produto. Contribuição pessoal ainda não confirmada."
- owner-described: "Descrição informada pelo autor do portfólio. Resultados e autoria detalhada ainda não confirmados."
- confirmed: no disclaimer. Show only confirmed fields.
- omitted: the record is not rendered.

## 6. GSAP animation storyboard

Stack: `gsap`, `@gsap/react`, `ScrollTrigger`. Register the plugin once. Every `useGSAP` scope reverts on unmount. Triggers are killed on route change. Media query `prefers-reduced-motion: reduce` uses `gsap.matchMedia`.

Reduced motion, all breakpoints:

- Every animated element is written in CSS as fully visible. Motion may enhance. It must not be the thing that sets the final opacity.
- Under reduced motion, timelines are not created. Transforms stay at identity. Stroke animations stay on the fully drawn path. Parallax is off. Capsules do not bob.
- Focus order and hit targets exist on first paint. Tabbing does not wait for a timeline.

Load timeline, hero only, plays once, total about 1.6s, desktop and tablet. Mobile uses the same sequence with capsule stagger removed and plate duration cut to 0.45s.

| Start | Element | From → to | Duration | Ease | Trigger |
|---|---|---|---|---|---|
| 0.00 | Header bar | y 8 → 0, opacity 0 → 1 | 0.40s | power2.out | load |
| 0.12 | Eyebrow | opacity 0 → 1 | 0.35s | power2.out | load |
| 0.22 | Headline lines | mask reveal, y 100% → 0 | 0.70s, stagger 0.08 | power3.out | load |
| 0.55 | Supporting text | opacity 0 → 1, y 8 → 0 | 0.45s | power2.out | load |
| 0.70 | The two actions | opacity 0 → 1, y 12 → 0 | 0.40s, stagger 0.06 | power2.out | load |
| 0.35 | Atlas plate | opacity 0 → 1, scale 0.98 → 1 | 0.90s | power2.out | load |
| 0.85 | Capsules | opacity 0 → 1, y 10 → 0 | 0.45s, stagger 0.07 | back.out(1.2) | load |
| 1.20 | Two circuit paths | dash offset loop | 8s repeat | none (linear) | load, paused when the hero is off-screen |

Scroll, once each, no pin, no scrubbed page lock:

| Element | Start | Duration | Ease | Notes |
|---|---|---|---|---|
| Section titles and the first paragraph | top 85% | 0.60s | power2.out | y 24 → 0, opacity |
| About fact stack | top 80% | 0.45s, stagger 0.06 | power2.out | |
| Timeline entries | top 80% | 0.55s, stagger 0.08 | power2.out | rail draws with scaleY 0 → 1, transform origin top |
| Service cards and project cards | top 88% | 0.50s, stagger 0.05 | power2.out | |
| Concept frames | top 88% | 0.50s, stagger 0.06 | power2.out | |

Hero plate parallax: y 0 → -24 while the hero scrolls, scrub 0.6, transform only. Off below 768 and off under reduced motion.

Capsule idle float, after the load timeline, amplitude 6px, 3s yoyo, `sine.inOut`. Off under reduced motion, off on mobile, paused when `document.hidden` or the hero leaves the viewport.

Hover and focus: buttons and cards change background or border over 0.2s in CSS. No layout shift, no infinite hover loop. Filter changes do not replay the whole page timeline.

Forbidden motion: scroll-jacking, pinned chapters, a long intro gate, bouncing UI, 3D, large blur or filter animations, and any timeline that leaves content at opacity 0 if JavaScript fails. If GSAP throws, content remains in the CSS-visible state.

## 7. Multilingual strategy

Default locale pt-BR at `/`. English at `/en`. Spanish at `/es`. `document.documentElement.lang` is `pt-BR`, `en`, or `es` and updates on navigation. The language control is a list of links, with `aria-current="true"` on the active one and an accessible name "Idioma" / "Language" / "Idioma".

Copy lives in `src/i18n/{pt-BR,en,es}.ts` keyed by namespace: `meta`, `nav`, `hero`, `about`, `experience`, `skills`, `projects`, `lab`, `certifications`, `footer`, `a11y`. Project narratives live next to the record as `{ "pt-BR": "", "en": "", "es": "" }` and may only restate verified or owner-described facts. Company names, product names, scores, and the four concept-art titles stay untranslated. Dates format with `Intl.DateTimeFormat` for the active locale.

Voice: clear, professional, first person in the hero and about, third person avoided. No hype metrics. Phase 08 writes the three full manuscripts. Earlier phases may ship pt-BR plus complete nav, hero, footer, and meta keys in all three languages so the shell is never mixed at random.

SEO, still without contact metadata:

- Unique `<title>` and meta description per locale and per published case study, describing engineering work.
- Canonical URL for each locale home and each published case study.
- `og:title`, `og:description`, `og:image`, `og:locale` and alternate locales. The image is an original graphic in `public/assets/brand/` with the name and role only.
- `hreflang` alternates for pt-BR, en, es, and `x-default` pointing at `/`.
- JSON-LD `ProfilePage` or `WebSite` may include `name`, `jobTitle`, `description`, `knowsLanguage`, and `knowsAbout`. It must not include `email`, `telephone`, `address`, `contactPoint`, `sameAs`, or a URL that leads to a personal profile.
- Sitemap lists only real routes. `robots.txt` does not advertise a contact path.

The strings "Contact", "Hire", "Let's talk", "Contrate", "Hablemos", "Fale comigo", and their navigation twins are not in the dictionaries, including as unused keys.

## 8. Performance and accessibility budget

Performance, production build, mobile 4G as the design target:

- LCP under 2.5s. The LCP element should be the hero headline, which is HTML text.
- CLS under 0.1. The plate has a reserved aspect box. Fonts do not swap the headline into a different width without a metric fallback close to Fraunces.
- INP under 200ms. Scroll triggers do not bind scroll listeners beyond ScrollTrigger's defaults.
- Initial JS gzip under 180 KB. CSS gzip under 30 KB. Hero SVG under 40 KB, inlined.
- Images below the fold: `loading="lazy"` and `decoding="async"`. Project covers, when they exist, are 1600×900 WebP or AVIF.
- Animations use transform and opacity only.
- No analytics in the first ten milestones. A later analytics choice needs its own review so payloads cannot carry contact data.
- `reference-only/` is gitignored except its README and must not be copied into `public/` or `dist/`.

Accessibility, WCAG 2.2 AA:

- One `h1` on each page (the hero, or the case-study title). Each home section has one `h2`.
- Landmarks: `header`, `nav`, `main`, `footer`. Skip link targets `#conteudo`.
- Body text navy on ice, target contrast at least 7:1. UI text at least 4.5:1. Focus ring 2px `--blue` with a 2px ice offset, contrast at least 3:1 against adjacent colors.
- Hit targets at least 44×44 px on touch, including language links and filter chips.
- The menu button exposes `aria-expanded` and `aria-controls`. Escape closes it. Focus moves into the menu and returns to the button.
- Filters are `radiogroup` or toggle buttons with `aria-pressed`. An empty filter state is a sentence, not a blank gap.
- Video, if a real file is supplied later: `controls`, poster, no autoplay, no forced audio, captions if speech exists. Reduced motion does not autoplay it either.
- Concept-art images have alt text that calls them concept studies. Decorative traces are `aria-hidden`.
- Keyboard order matches the visual order. Motion never traps focus.
- Color is not the only signal for the current nav item, the active filter, or verification status.

## 9. Ten implementation milestones

Each milestone is one later phase. Build only that milestone when it is requested. After each one, run the checks in section 11, inspect the browser when the tool is available, and report files, command results, and screenshots that were actually produced. Ask the owner for a portrait or for photos of other people at the milestones marked below, before any likeness is placed.

### Milestone 1 — Scaffold (Phase 01)

Create the Vite + React + TypeScript app, Tailwind, React Router, GSAP packages, and i18n folders. Add `src/components`, `src/sections`, `src/pages`, `src/data`, `src/i18n`, `src/styles`, `src/hooks`, and `public/assets/{hero,motion,projects,media,brand}`. Render the eight regions with original trace placeholders and pt-BR skeleton copy. Header has the seven links. Scripts: lint, typecheck, build.

Visual acceptance: the scroll reads as one ice page with navy type; every region is identifiable; the plate is already the original drawing, even if simple; 390 and 1440 have no horizontal scroll.

Privacy audit checkpoint: search the new source, `index.html`, and `dist` for `mailto:`, `tel:`, `wa.me`, `api.whatsapp`, social hosts, and contact/hire labels. Confirm the route table has no contact path. Confirm fixtures have no empty email, phone, or form fields.

### Milestone 2 — Design system and static layout (Phase 02)

Apply the tokens, type, header, and the fully composed static hero. Lock the pt-BR headline and supporting sentence. Implement only the two hero actions. Compose sections with the spacing in this plan. Motion stays off.

Visual acceptance: at 1440, 768, and 390 the hero looks like a finished editorial layout; the headline dominates; the plate does not collide with the actions; capsules wrap; the page does not look like a generic SaaS template. Screenshot those three widths.

Ask the owner before this milestone if a portrait should appear. If they want their face, or a photo that includes someone else, they supply the file and publish permission. If they do not, ship the abstract plate.

Privacy audit checkpoint: hero actions point at `#projetos` and `#experiencia` only. View source of the built HTML and confirm meta tags have no email, phone, or profile URL.

### Milestone 3 — Hero refinement (Phase 03)

Using the browser, review the real hero at 1440×900 and 390×844. List at least five concrete weaknesses in hierarchy, proportion, image, space, color, balance, or personality, then fix those. Keep the five technology labels as technology labels.

Visual acceptance: the after-state is recognizably this plan's Signal Atlas, with a calmer gutter and a stronger headline. Capture after-state screenshots at both sizes.

Privacy audit checkpoint: re-read the hero and header in the DOM. Every control leads to an on-page section. No new link leaves the site.

### Milestone 4 — Motion (Phase 04)

Implement section 6. Verify refresh, resize, locale route change, mobile, reduced motion, and the production build. No console errors.

Visual acceptance: the load sequence matches the table; scroll reveals run once; reduced motion shows every element at full opacity with no jump. Deliver a table of what was actually implemented against the storyboard.

Privacy audit checkpoint: motion code and analytics hooks introduce no new outbound URL. Reduced-motion DOM still has no contact control.

### Milestone 5 — About, experience, skills, certifications (Phase 05)

Fill these sections from the brief only. Timeline: CODYNECT, March 2018–December 2020; Fábrica de Softwares, May 2021–July 2024; Plego, January 2025–September 2026. Certification badges use the four scores as text.

Visual acceptance: the timeline is readable at 390 without overlap; ranges read as ranges; badges are text, not links; service cards describe work types. Keyboard can reach every card and badge.

Ask the owner only if an employer logo is wanted. Logos need a file and permission. Do not draw a fake mark.

Privacy audit checkpoint: certification markup has no outbound href. Service cards and the footer have no hire or message action. Search the new copy for an email-like pattern.

### Milestone 6 — Projects and case studies (Phase 06)

Implement the schema, equal cards, filters, and detail routes for the five allowed samples. Fresha has no record in the rendered data. Unverified fields stay hidden. Empty filter and deep-link refresh must work.

Visual acceptance: status sentences are visible and typographically quiet; cards align; filter state is obvious without color alone; case-study pages have next, previous, and back only. Test mobile and a hard refresh on a detail URL.

Ask the owner for authorized screenshots and for the exact role, stack, and outcomes they want claimed. If a screenshot shows Matheus or any other person, ask them to confirm that publishing that image is allowed before it is placed in `public/assets/projects/`.

Privacy audit checkpoint: product links, if any were approved in writing, use the product-site label and the approved href only. The chatbot page contains no `wa.me` or chat widget. Detail routes do not add a contact block.

### Milestone 7 — Creative Lab (Phase 07)

Present the four named studies as concept art. Present Pedro Cores Film as owner-described. Use a real video only if the owner supplies an original MP4 or WebM they may publish. Otherwise use approved stills or the abstract stand-in.

Visual acceptance: every frame has the concept-art label; nothing reads as a shipped game; video does not autoplay. Check reduced motion and 390.

Ask the owner for publishable stills or video. The PDF is already in `reference-only/` and stays there. If a still shows a person, ask before publishing it. Do not extract PDF pages into `public/` inside the milestone unless the owner has approved those exports.

Privacy audit checkpoint: media files in `public/assets/media/` have no contact text in the filename, alt text, or visible frame. The PDF is absent from `dist`.

### Milestone 8 — Languages, SEO, privacy pass (Phase 08)

Complete pt-BR, English, and Spanish. Wire titles, descriptions, canonicals, hreflang, OG, and the limited JSON-LD from section 7.

Visual acceptance: no overflow in German-length-safe buttons is not required, but the three real languages must not clip nav, buttons, or badges at 390. Language switch keeps the current section in view when feasible.

Privacy audit checkpoint: source search and a built-`dist` search for mail, telephone, social, Workana, resume, and contact UI strings. Record false positives that are only the chatbot's technology wording. Confirm certifications render as text. This is a full audit, not a sample.

### Milestone 9 — Visual QA and performance (Phase 09)

Review 390, 768, 1024, and 1440 in the browser. Fix contrast, gaps, overflow, card layout, footer, and CLS issues that are actually visible. Add a Playwright smoke test if the toolchain is available: nav, language switch, one project detail, and an assertion that the page has no contact region and no `mailto:` or `tel:` href.

Visual acceptance: the four widths match this plan's spacing; screenshots are files from that session; the change log lists only defects that were fixed.

Privacy audit checkpoint: the automated assertion plus a manual pass of header, footer, case study, and page source. Fail the milestone if any contact control exists.

### Milestone 10 — Deployment preparation (Phase 10)

Prepare the static host. Default is Vercel. AWS only if the owner selects it. Do not claim a deploy succeeded without a live URL checked from this environment.

Visual acceptance: production build matches the QA screenshots closely enough that type, ice background, and hero composition survive minification. No missing asset boxes.

Privacy audit checkpoint: `dist` contains no `reference-only` PDF, no CV, no env secret, and no contact meta. The live HTML, once a URL exists, gets the same search. If there is no live URL, say so and stop before calling the site deployed.

After milestone 10, a later Phase 11 may audit truth and maintenance docs. It is not an eleventh build milestone and it still may not add contact features.

## 10. Publishing-rights workflow

1. The owner drops private references in `reference-only/` (gitignored except the README) and publishable files in the matching `public/assets/` folder.
2. Before any new image is wired up, inventory filename, pixel size, aspect ratio, and whether a person is identifiable.
3. The owner states, in the chat for that phase: what the file depicts, whether Matheus or someone else is shown, and that publication is allowed.
4. Strip EXIF and other metadata. Refuse files whose visible pixels or names contain a phone, email, handle, or QR code that encodes one.
5. Set `screenshotsApproved`, `publishPermission`, and `showProductLink` from that statement. Leave unverified contribution fields null.
6. Product websites become links only after a separate yes for that URL.
7. Concept art exports are labeled visual studies. They are not credited as shipped Unity scenes, and the PDF's tools stay unconfirmed.
8. Fresha stays out of the data that renders.
9. Each milestone's privacy search runs before the phase is called done.

Suggested files when the owner has them: hero visual about 1400px wide; project covers 1600×900; OG image without a portrait until a portrait is approved. Abstract SVG is the default and is not a placeholder for a fake client UI.

## 11. Build and test plan

There is no app in this phase, so lint, typecheck, build, and browser screenshots are not claimed here.

From milestone 1 onward, each phase report includes the real command output for:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Browser, when the Cursor browser tools are available: open the local page, exercise the changed path (scroll, nav, language, filter, or route), and capture the widths that milestone names. A single unopened screenshot file is not a substitute for using the page. If the browser is unavailable, say what was not seen, and use the built `dist` plus any test runner that does exist.

Automated coverage to add by milestone 9, and earlier if the setup is already in place:

- Header links match the seven destinations.
- Language switch changes `lang` and a known string.
- A case-study route renders its status sentence and survives refresh.
- No element whose accessible name matches a contact invitation.
- No `a[href^="mailto:"]`, `a[href^="tel:"]`, or WhatsApp endpoint.

Also check the console for errors, the document for horizontal overflow, and image requests for 404s. Do not mark a check passed without the output.

## 12. Deployment options

Vercel first. Connect the Git repository, framework Vite, output `dist`, and a SPA rewrite of unknown paths to `index.html` so locale and case-study routes resolve. Environment variables stay empty unless a later phase has a real need. Do not put tokens in the repo. `reference-only/` never becomes a public directory. The owner approves the project creation and any custom domain in the host UI. A domain is a hostname, not a contact field. This plan does not deploy.

AWS is the alternate, only if the owner selects it in milestone 10: private S3 origin, CloudFront with origin access control, ACM certificate, CloudFormation, and GitHub OIDC for deploys. No long-lived keys in the repository. Same `dist` privacy checks.

Success means a live URL was requested and the response HTML passed the privacy search. Preparation steps without that response are called preparation.

## 13. Top three visual risks

1. **The hero becomes generic or derivative.** Electric blue, a floating character, and circuit lines are a crowded look. If the plate grows a mascot, or the layout turns into a centered SaaS hero with two equal buttons and a stock dashboard, the page loses Matheus's identity. Hold the type-led left column, the original instrument plate, and the ice field.

2. **The mobile hero collapses into noise.** At 390 the clamped headline, five capsules, two full-width actions, and the plate can stack into a tall unfinished column, or the plate can overflow. The type has to win, the capsules have to wrap, and the plate has to sit in a reserved box with space above it.

3. **Honest case studies look empty, which tempts fake proof.** Equal cards with status lines and abstract art will feel quieter than a portfolio full of metrics and UI shots. Filling that quiet with invented screenshots, logos, or results would look more finished and would be false. Richness has to come from typography, the atlas drawing, and the concept-art lab until real approved media exists.

Phase 00 stops here. No production code was added.
