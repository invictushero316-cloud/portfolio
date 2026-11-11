# Matheus Silva — Grok 4.7 Cursor portfolio starter kit

Read `docs/PROJECT_BRIEF.md` and `docs/ASSET_CHECKLIST.md`, then open `docs/CURSOR_PHASE_PROMPTS.md`. In Cursor choose Grok 4.7; paste **only Phase 00**, review the plan, then proceed incrementally. `.cursor/rules/portfolio.mdc` applies persistent rules.

**Privacy requirement:** The site must have ZERO contact details, contact fields, contact pages, personal profile links or contact CTAs. Do not place any private media or source PDFs into `public/`.

The application now lives in `src/`. Original PDF `Video_Editing.pdf` stays under `reference-only/`, which is excluded from Git.

# Maintaining this portfolio

Matheus Silva’s site is a static React + TypeScript + Vite app. Portuguese is the default. English lives at `/en` and Spanish at `/es`. The facts come from `docs/PROJECT_BRIEF.md`. Do not add a claim that the brief does not support.

## Privacy

Publish no phone number, email address, messaging handle, social or Workana profile, scheduling link, résumé, contact form, or contact page. The navigation is only Home, About, Experience, Skills, Projects, Creative Lab, and Certifications. The footer is the name, the role, and those section links.

A project may name a technology such as WhatsApp. It must not link to a personal chat. `wa.me` and `api.whatsapp.com` are rejected if a product URL is ever added.

## Update a project

Edit `src/data/projects.ts` and the matching `projects.items` entry in `src/i18n/pt-BR.ts`, `src/i18n/en.ts`, and `src/i18n/es.ts`. Keep the same keys in all three files. Product names, certificate names, and the four concept-art titles stay untranslated.

Each record uses this shape:

| Field | Rule |
| --- | --- |
| `title`, `summary` | Product description, or the owner’s own description |
| `category` | One of `ai`, `automation`, `saas-crm`, `commerce`, `analytics`, `creative` |
| `contributionStatus` | `product-reference-unverified` or `owner-described` |
| `ownerRole` | Confirmed role, or `null` |
| `verifiedDeliverables` | Confirmed deliverables only |
| `technologiesVerified` | Confirmed technologies only |
| `metricsVerified` | Confirmed outcomes only |
| `screenshots`, `screenshotsApproved` | Approved image files only |
| `publicProductURL`, `showProductLink` | Both required before a link appears |
| `publishPermission` | `false` hides the record |

Leave a field empty when the fact is missing. The page then shows a product overview or a case-study draft. Fresha stays out until a specific contribution is confirmed. Do not add Aurora Inbox, Shibinda, or RueData URLs until that exact link is approved. An approved link is labeled “Site do projeto”, “Project site”, or “Sitio del proyecto”.

The card and the study page both show `summary`. `description` is the short document summary.

## Approved media

Put publishable files in:

- `public/assets/projects/` for study stills
- `public/assets/media/` for concept-art stills or an original film file
- `public/assets/hero/` for an approved portrait
- `public/assets/brand/` for the Open Graph graphic
- `public/assets/motion/` for an original Lottie file

Before wiring a file, record what it shows, whether a person is visible, and that publication is allowed. Strip embedded metadata. Refuse a file whose pixels or name contain a phone number, email address, handle, or a code that encodes one.

Set `screenshotsApproved` to `true` only after that approval. Until then the frame stays an original trace. A film file may be shown only as an original MP4 or WebM with controls, a poster, and no forced playback or sound.

`reference-only/Video_Editing.pdf` stays private. The four environments are concept art, labeled “Estudos visuais / Arte conceitual”, and are not shipped Unity games. Do not copy the PDF into `public/` or `dist/`.

## Checks

From the project root:

```
npm run lint
npm run typecheck
npm run build
```

The build writes `dist` and clears it first. `reference-only/` must not appear there. Deployment is not complete until a live URL is opened and the HTML is checked for contact details.
