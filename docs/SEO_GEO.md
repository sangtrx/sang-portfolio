# SEO, GEO, and AI Discoverability — 2026-08-25

## Goal

Make the portfolio easy to discover, understand, and cite without turning it into search-engine filler.

The strategy is **entity clarity + useful original evidence + clean crawlability + truthful structured metadata**.

## Current principles

### 1. SEO remains the foundation for generative search
Google's 2026 guidance on generative AI features explicitly says normal SEO best practices remain relevant and warns against common “AEO/GEO” myths. There is no magic AI-only markup that replaces useful content, crawlability, internal linking, or technical SEO.

### 2. Non-commodity content matters
The portfolio emphasizes information that is difficult to synthesize from generic sources:
- actual system boundaries;
- architecture decisions;
- explicit ownership;
- validation evidence;
- deliberate non-claims;
- trade-offs and failure boundaries.

### 3. Structured data clarifies entities; it does not manufacture authority
JSON-LD makes visible page meaning machine-readable:
- `Person` / `ProfilePage` for Sang;
- `WebSite` for the portfolio;
- `Article` and `BreadcrumbList` for technical case studies.

Markup must match visible content. No fake ratings, organizations, employers, testimonials, or usage metrics.

### 4. ChatGPT search discovery requires crawl access
OpenAI's publisher guidance says public content can appear in ChatGPT search and recommends not blocking `OAI-SearchBot` when a publisher wants content included in summaries and snippets. The generated `robots.txt` explicitly allows it.

`GPTBot` is also allowed because the published portfolio is intentionally public. This is a policy choice, not a requirement for ChatGPT search discovery; OpenAI documents `OAI-SearchBot` separately from training controls.

### 5. `llms.txt` is supplementary, not a Google ranking feature
Google clarified in June 2026 that Google Search does not use `llms.txt` as a special optimization and that it does not positively or negatively affect Search visibility or ranking. The site still supports the community llms.txt v2 proposal because some agents and documentation tools use it; this is supplementary to normal crawlable HTML, not a substitute for SEO.

The v2 proposal adds standard discovery links, so indexable HTML pages expose:
- `rel="describedby"` → the covering `/llms.txt`;
- `rel="alternate" type="text/markdown"` → a clean Markdown representation of the page.

## Implemented technical surface

- Self-referencing canonical URL on every indexable HTML page.
- Unique page titles and descriptions.
- Static-rendered primary content; no client-only content dependency.
- Open Graph and Twitter PNG social cards at 1200×630.
- SVG favicon.
- Semantic headings, keyboard navigation, focus states, reduced-motion support, and responsive layouts.
- Stable `/about` entity/profile page.
- Generated `/sitemap.xml` from canonical routes.
- Generated `/robots.txt` from build-time `site` + `base`, including explicit OAI-SearchBot access.
- Generated `/llms.txt` from the same canonical URL configuration.
- Markdown alternatives for the home, about, résumé, and both case studies.
- `rel="alternate" type="text/markdown"` from HTML pages to Markdown alternatives.
- `rel="describedby"` from indexable HTML pages to `/llms.txt`.
- Internal links from home → case studies → about/résumé and back.
- `max-image-preview:large`, unlimited snippet/video preview directives for indexable pages.
- JSON-LD aligned with visible content and current project truth.
- Security/referrer/permissions headers for hosts that support `_headers`, with equivalent Caddy headers for BigLinux.

## Content strategy

### Homepage
Answer immediately:
- Who is Sang?
- What does he build?
- What are the two strongest systems?
- What proof exists?

### About
Create a stable entity page that explains:
- technical positioning;
- engineering philosophy;
- technical skills;
- education and achievements;
- research and external identity links.

### Résumé
Keep chronology and skills aligned with the versioned `Sang_Resume` source while exposing more detail than the homepage. Do not duplicate every case-study detail into the résumé.

### Case studies
Each case study should answer:
1. What problem existed?
2. What did Sang own?
3. What architecture was chosen?
4. Why was it chosen?
5. What was actually implemented and validated?
6. What remains pending or deliberately unclaimed?

This format is useful to recruiters, interviewers, search engines, and answer engines without writing separate keyword-stuffed bot prose.

## Custom-domain migration checklist

When `sangtruong.me` is attached:

1. Set `SITE_URL=https://sangtruong.me` and `BASE_PATH=/` in the production build. Cloudflare preview URLs can use the injected `CF_PAGES_URL`, but the custom domain should override it once launched.
2. Keep stable route slugs: `/about`, `/resume`, `/work/yhct`, `/work/curren` and their Markdown alternatives.
3. Ensure only the custom-domain copy is intended as canonical.
4. Redirect old preview URLs to their new equivalents if the old host supports it; otherwise remove or de-index duplicate previews where practical.
5. Verify the domain in Google Search Console.
6. Submit `https://sangtruong.me/sitemap.xml`.
7. Inspect the home page and both case-study URLs.
8. Update GitHub, LinkedIn, résumé, and other profile links to the custom domain.
9. Confirm CDN/bot protection does not return 403 to legitimate crawlers such as Googlebot and OAI-SearchBot.
10. Monitor Search Console indexing/generative-AI reporting where available and referral traffic from ChatGPT/search surfaces.

## Things intentionally not added

- Keyword-stuffed landing pages.
- Generated blog filler.
- Hidden text for crawlers.
- Fake experience metrics or testimonials.
- FAQ schema merely to chase a rich result: the portfolio is not an FAQ and structured data must match visible content.
- `llms.txt` claims as an SEO ranking trick.
- AI-specific meta tags with no recognized standard or documented consumer.
- Heavy client-side frameworks for static content.

## Primary references

- Google Search Central — AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central — AI features and websites: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central — Search documentation updates: https://developers.google.com/search/updates
- Google Search Central — structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- OpenAI — Publishers and Developers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- llms.txt v2 proposal: https://llmstxt.org/
- Schema.org — Person, ProfilePage, Article, WebSite, BreadcrumbList: https://schema.org/
