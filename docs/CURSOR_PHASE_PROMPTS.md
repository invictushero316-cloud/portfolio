# Grok 4.7 × Cursor — copy/paste prompts, ONE PHASE AT A TIME

This file supersedes all earlier Claude-focused prompts. Open `Matheus_Portfolio_Cursor_Kit` in Cursor, use Grok 4.7 in Plan mode for Phase 00 then Agent mode for implementation. Choose a stronger reasoning setting if your available Cursor plan supports it. Never paste all phases at once; approve visuals after every phase. Commit working code to Git after each accepted phase.

**PERMANENT USER REQUIREMENT: zero personal contact information and zero contact UI or routes.** No email, phone, WhatsApp contact button, social/profile links, Workana profile, contact/hire CTA, forms or hidden contact metadata. Mentioning WhatsApp as a technology in a chatbot case study is allowed.

**Before each phase:** Tell Grok to read the `docs/` and `.cursor/rules/portfolio.mdc` files; re-check these after it proposes new code. After each phase, require proof of tests and screenshots where browser support exists. Never claim tools or results you did not actually execute.


## Phase 00 — Plan the complete visual product
**Mode:** PLAN  
**Assets to supply:** Diego reference screenshots and brief

```text
You are Grok 4.7 acting as a top-tier creative director, senior frontend architect, accessibility specialist and code reviewer. Read docs/PROJECT_BRIEF.md, docs/ASSET_CHECKLIST.md and .cursor/rules/portfolio.mdc IN FULL before writing anything. Build a plan for Matheus Silva's ORIGINAL, visually extraordinary full-stack + AI developer portfolio inspired by the atmospheric blue-and-white creative engineering feel of https://diegosevilla.dev/ but NOT copying it.
ABSOLUTE PRIVACY: THE WEBSITE HAS ZERO CONTACT INFORMATION AND ZERO CONTACT FEATURES. No emails, phones, WhatsApp contact, personal profiles, social links, Contact/Hire Me CTA, forms, nav items, routes or metadata. WhatsApp may appear ONLY in a project description as technology.
PLAN ONLY. Do not edit production code. Write docs/IMPLEMENTATION_PLAN.md with: approved IA (hero, About, Experience, Skills & Services, Projects, Creative Lab, Certifications, non-contact Footer); design tokens + type hierarchy; SVG/illustration direction; desktop + mobile wireframe descriptions; project content schema including verification status; GSAP animation storyboard with timing/trigger/ease and reduced-motion behavior; multilingual pt-BR/en/es strategy; performance and accessibility budget; 10 implementation milestones with visual acceptance criteria; publishing-rights workflow; build/test plan; deployment options Vercel first, AWS alternate. Include an explicit privacy audit checkpoint in every milestone. Conclude with top three visual risks and STOP.
```


## Phase 01 — Scaffold and project architecture
**Mode:** AGENT  
**Assets to supply:** No images yet

```text
Implement ONLY the foundation from docs/IMPLEMENTATION_PLAN.md. Read the persistent rules first. Scaffold React + TypeScript + Vite, stable compatible Tailwind, React Router, GSAP/@gsap/react/ScrollTrigger and maintainable i18n infrastructure. Retain docs and .cursor/rules. Create reusable src/components, src/sections, src/pages, src/data, src/i18n, src/styles, src/hooks, public/assets. Add the exact approved page skeleton: Hero, About, Experience, Skills & Services, Selected Projects, Creative Lab, Certifications, simple Footer. Header nav must exclude Contact. Placeholders should be beautiful original SVG patterns, not stock art or fabricated products. No social/profile/CV/contact data even in mocks. Add npm scripts for lint, typecheck and build. Run all checks, inspect local page if browser available and STOP; provide list of changed files and issues.
```


## Phase 02 — Design tokens and high-end layout
**Mode:** AGENT  
**Assets to supply:** Optional original hero portrait/illustration

```text
Build ONLY the design system and STATIC desktop/mobile homepage layout. Refer to owner-approved screenshot moodboard, NOT copy/pixel-match. Aim for award-quality editorial composition: #0C2D59 navy, #1D6FF2 blue, #70B7FF cyan, #E9F4FF ice, #FFFFFF white as initial proposals (adjust only with visual justification); strong 2-size type rhythm; generous whitespace; subtle circuit line detail and soft depth, no generic SaaS template. Produce a responsive header and fully composed static hero with original developer illustration or abstract SVG placeholders. Hero PT-BR: 'Engenharia inteligente. Produtos digitais que fazem sentido.' Description: 'Desenvolvo software, automações e soluções com IA para simplificar processos e construir produtos preparados para crescer.' Exactly two CTAs: 'Ver projetos' (scroll to work) and 'Minha experiência' (scroll to experience), never Contact. Establish consistent section/card spacing and responsive artwork composition. Inspect at 1440, 768 and 390 widths, fix visual defects and STOP before motion.
```


## Phase 03 — Refine hero to exceptional quality
**Mode:** AGENT  
**Assets to supply:** Give screenshot of latest local hero and optional portrait

```text
Focus ONLY on hero design refinement, not functionality elsewhere. In Cursor Browser inspect the actual page at desktop 1440x900 and mobile 390x844, then identify at least five concrete weaknesses in visual hierarchy, proportions, image realism, negative space, colour transitions, balance and personality. Fix those weaknesses. Make the hero immediately recognizable as Matheus's professional identity, not a template or a clone of Diego. Keep artwork original. Use floating labels Python, AI, APIs, Automação, React only as technologies (not fake verified expertise details). Every visible CTA should navigate only to an on-page portfolio section. Ensure no contact data or contact CTA exists. Capture after-state screenshots and STOP.
```


## Phase 04 — GSAP animations & interaction choreography
**Mode:** AGENT  
**Assets to supply:** Optional approved SVG or Lottie; no external site graphics

```text
Apply polished GSAP animation ONLY to approved hero and existing sections. Use @gsap/react and ScrollTrigger cleanup. Build an orchestration timeline: nav subtle entrance, hero eyebrow fade, headline mask reveal, supporting text, work-exploration CTA, artwork layered entry, staggered skill capsules. Add very gentle original SVG circuit path animations and parallax based on transforms; scroll-triggered reveals in About and section titles. Avoid scroll-jacking, 3D overload, long intro screens, constant bouncy movement and CPU-heavy paint updates. Support prefers-reduced-motion by showing all content with no hidden opacity. Ensure tab/focus access independent of motion, mobile simplified behavior, and no console errors. Verify route changes, refresh, resize, mobile and production build. STOP with a table of all animations + duration/trigger/fallback.
```


## Phase 05 — About, experience, skills, certifications
**Mode:** AGENT  
**Assets to supply:** Optional approved employer logos; scores are in the brief

```text
Build sophisticated About, Experience, Skills & Services, Certifications sections using facts from docs/PROJECT_BRIEF.md. Create an animated readable timeline with CODYNECT (Mar 2018–Dec 2020), Fábrica de Softwares (May 2021–Jul 2024), Plego (Jan 2025–Sep 2026). Present Python, CRM, machine learning and APIs carefully; no unjustified specialization claims. Certifications as plain text badges: Design Patterns 90%, Linux 83%, English 83%, Advanced JavaScript 76%. Do NOT add external Workana or personal profile links (even certification links). Service items describe the types of software Matheus can build, not marketing promises. Keep clear design hierarchy, calm scroll reveal and strong keyboard/mobile support. No contact/hire links in service cards or footers. Run checks and STOP.
```


## Phase 06 — Project cards and real case-study pages
**Mode:** AGENT  
**Assets to supply:** Supply approved project screenshots and exact contributions now

```text
Implement Selected Projects with impressive, original cards and separate detail routes. Use Aurora Inbox, Shibinda, RueData AI, Restaurant AI WhatsApp Chatbot, Pedro Cores Film. Fresha is omitted pending verified contribution. Project reference websites alone DO NOT prove Matheus's authorship; distinguish product description from owner-confirmed contribution and actual tech/results. Data schema: title, summary, category, contributionStatus, ownerRole, verifiedDeliverables, technologiesVerified, metricsVerified, screenshotsApproved, publicProductURL, publishPermission. If a fact is missing, show tasteful neutral project overview or mark case study draft; never fabricate implementations, results or ownership. External client-product links only if explicitly approved and clearly labelled 'Site do projeto'; they are project references, not personal contact links. Project cards can filter by AI, Automation, SaaS/CRM, Commerce, Analytics and Creative, with accessible buttons, smooth subtle hover and correct keyboard state. Provide next-project and back-to-projects navigation only. Test empty filter, media loading, deep route refresh and mobile. STOP for review.
```


## Phase 07 — Creative Lab, film and concept art
**Mode:** AGENT  
**Assets to supply:** Supply Video_Editing.pdf and approved video/3D exports

```text
Build a premium Creative Lab section around actual provided media. Study reference-only/Video_Editing.pdf if available: page one depicts a luminous blue-violet sci-fi tunnel and interface overlay; exact creation tools are not established. Pages two and three have four generated **concept art** environments named Enchanted Sky Forest, Neon After Rain, The Sunken Kingdom and Beyond the Rings. Label explicitly 'Estudos visuais / Arte conceitual', NOT shipped Unity games. Display Pedro Cores Film as an owner-described immersive project; publish only verified personal contribution. If actual original MP4/WebM supplied, use optimized lazy-loading <video> with controls, poster and no forced autoplay/audio. If no video exists, use approved stills or abstract art. Do not generate fake footage or claim PDF is a playable film. Avoid heavy WebGL until needed and verified. Run mobile and reduced-motion checks. STOP.
```


## Phase 08 — Three languages, SEO and privacy verification
**Mode:** AGENT  
**Assets to supply:** Optional original Open Graph image; NO resume or contact links

```text
Complete PT-BR, English and Spanish editorial copy in a clear professional voice. Ensure html lang, semantic headings, locale switching, document titles, localized meta descriptions, canonical URLs and OG assets reflect project/engineering expertise. The final website has NO contact page, contact nav, Hire/Chat/WhatsApp link, phone, email, social profile, Workana profile, resume/CV download or contact fields — including source comments, SEO, JSON-LD, placeholders and footer. Audit generated output with a source search for email-like strings and contact-related UI; false positives in product descriptions are okay but no personal channels. Certifications appear as text without outgoing personal profile links. Test all language keys, overflow, routing, keyboard operation and build. STOP and report privacy audit.
```


## Phase 09 — Pixel-level visual QA and performance
**Mode:** AGENT  
**Assets to supply:** Supply own local desktop/mobile screenshots or browser access

```text
Open local site (if Cursor Browser available) at 390, 768, 1024 and 1440px. Critique like an art director against approved original moodboard. Fix weak typographic contrast, disproportionate illustrations, awkward gaps, horizontal scroll, excessive animation, footer layout, project-card layout, CLS and missing assets; don't replace original work with screenshot copies. Run lint, typecheck, production build; audit accessible labels, keyboard nav, WCAG contrast, reduce motion, image loading and route refresh. Add Playwright smoke tests if available for nav, language switch, project details and a strict NO CONTACT UI assertion (no contact section, href mailto:/tel:, personal links, messaging endpoints). Provide screenshot filenames and a change log. STOP.
```


## Phase 10 — Secure deployment: Vercel first
**Mode:** AGENT  
**Assets to supply:** Supply hosting choice and optional custom domain (not contact details)

```text
Prepare production Vite app deployment. Default: GitHub -> Vercel static deployment with correct dist output, SPA rewrites and environment settings; alternative secure AWS S3+CloudFront+OAC+ACM+CloudFormation+GitHub OIDC ONLY if selected. Never hardcode tokens, credentials or private screenshots/PDF. Verify build and no private reference-only files in dist. Deployment cannot be claimed successful without live URL/response verification. Production audit must confirm NO personal contact details, no contact UI/routes and no contact metadata. Provide exact steps user must approve or perform in the host interface and STOP.
```


## Phase 11 — Final art-direction and truth audit
**Mode:** AGENT  
**Assets to supply:** Give your approvals for project contribution claims and media rights

```text
Audit the finished portfolio as an exacting prospective product/engineering client. Can someone see Matheus's specializations, professional history, credible work and creative breadth in under ten seconds? Verify all project contribution claims, certificate numbers and images match user source data; PDF concepts are explicitly concepts. Verify navigation only to Home/About/Experience/Skills/Projects/Creative Lab/Certifications, and absolutely NO contact information or fields of any kind. Re-test all locales, mobile, reduced motion, case-study links, visuals and build. Produce maintenance README for updating projects and approved media. Identify top remaining visual improvements, correct confirmed defects and STOP. Do not introduce any contact functionality, even in recommendations.
```


## Universal recovery prompt (use when Grok loses focus)
```text
STOP. Read docs/PROJECT_BRIEF.md, docs/ASSET_CHECKLIST.md and .cursor/rules/portfolio.mdc. You have drifted from the requested phase. List exactly what changed, revert only unwanted changes from THIS phase (do not delete approved prior work), and implement the requested phase with disciplined scope. NEVER introduce any contact fields or contact info. Verify source/build for contact-related routes, mailto:, tel:, social/contact links and metadata. Run checks, inspect actual UI, then STOP.
```

## Universal visual improvement prompt
```text
Inspect the actual current page in Cursor Browser if available at 1440x900 and 390x844. Identify the 5 most visible specific problems in visual quality (layout, typography, illustration scale, contrast, spacing, hover/animation); fix ONLY those problems without redesigning unrelated approved components. Keep original creative look and the absolute no-contact rule. Show screenshots and rerun checks. STOP.
```

## Universal asset integration prompt
```text
I have supplied authorized media under public/assets or private reference media under reference-only/. First inventory filenames, aspect ratios, rights and sizes; do not publish reference-only files. Replace only the relevant placeholder media with approved assets, add accurate alt text, preserve proportions, lazy-load offscreen assets, compress where appropriate, and verify desktop/mobile. Do not infer any unverified project contribution and do not reveal contact information embedded in source/EXIF/PDF metadata. STOP.
```
