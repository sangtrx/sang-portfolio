# SEO, GEO, and AI Discoverability — 2026-08-25

## Goal

Make the portfolio easy to discover, understand, and cite without turning it into search-engine filler.

The strategy is **entity clarity + useful original evidence + clean crawlability + truthful structured metadata**.

## Current principles

### 1. SEO remains the foundation for generative search
Google's 2026 guidance on generative AI features explicitly says normal SEO best practices remain relevant and warns against common “AEO/GEO” myths. There is no magic AI-only markup that replaces useful content, crawlability, internal linking, or technical SEO.

### 2. Non-commodity content matters
The portfolio therefore emphasizes information that is hard to synthesize from generic sources:
- actual system boundaries;
- architecture decisions;
- explicit ownership;
- validation evidence;
- deliberate non-claims;
- trade-offs and failure boundaries.

### 3. Structured data clarifies entities; it does not manufacture authority
JSON-LD is used to make the visible content machine-readable:
- `Person` / `ProfilePage` for Sang;
- `WebSite` for the portfolio;
- `Article` and `BreadcrumbList` for case studies.

Markup must match visible content. No fake ratings, organizations, employers, awards, or usage metrics.

### 4. ChatGPT search discovery requires crawl access
OpenAI's publisher guidance says public content can appear in ChatGPT search and recommends not blocking `OAI-SearchBot` when a publisher wants content included in summaries/snippets. The generated `robots.txt` explicitly allows it.

`GPTBot` is also allowed because the published portfolio is intentionally public. This is a policy choice, not a requirement for ChatGPT search discovery.

### 5. `llms.txt` is optional, not a Google ranking feature
Google clarified in June 2026 that `llms.txt` is not needed for Google Search and does not positively or negatively affect rankings. The site still provides a concise `/llms.txt` because other tools may use the convention and the maintenance cost is tiny.

## Implemented technical surface

- Self-referencing canonical URL on every page.
- Unique titles and descriptions.
- Server-rendered/static primary content.
- Open Graph and Twitter PNG images (1200×630).
- Favicon + Apple touch icon.
- Semantic headings and accessible navigation.
- `/about` profile/entity page.
- `/sitemap.xml` generated from canonical routes.
- `/robots.txt` generated from build-time `site` + `base`.
- `/llms.txt` generated from the same canonical URL configuration.
- Internal links from home → case studies → about/résumé and back.
- `max-image-preview:large`, unlimited snippet/video preview directives for indexable pages.
- Structured data aligned with visible content.

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
- skills and education;
- external identity links.

### Case studies
Each case study should answer:
1. What problem existed?
2. What did Sang own?
3. What architecture was chosen?
4. Why was it chosen?
5. What was actually implemented/validated?
6. What remains pending or deliberately unclaimed?

This format is useful to recruiters, interviewers, search engines, and answer engines without writing separate bot-targeted prose.

## Custom-domain migration checklist

When `sangtruong.me` is attached:

1. Set `SITE_URL=https://sangtruong.me` and `BASE_PATH=/` in the production build. Cloudflare preview URLs can use the injected `CF_PAGES_URL`, but the custom domain should override it once launched.
2. Keep the same route slugs: `/about`, `/resume`, `/work/yhct`, `/work/curren`.
3. Ensure only the custom-domain copy is intended as canonical.
4. Redirect the old preview URLs to their new equivalents if the old host supports it; otherwise remove/de-index the duplicate preview where practical.
5. Verify the domain in Google Search Console.
6. Submit `https://sangtruong.me/sitemap.xml`.
7. Inspect the home page and both case-study URLs.
8. Update GitHub, LinkedIn, résumé, and other profile links to the custom domain.
9. Confirm Cloudflare/bot protection does not return 403 to legitimate crawlers such as Googlebot and OAI-SearchBot.
10. Monitor indexing and referrals after the move.

## Things intentionally not added

- FAQ schema/rich-result optimization: Google retired FAQ rich results in 2026.
- Keyword-stuffed landing pages.
- Generated blog filler.
- Hidden text for crawlers.
- Fake experience metrics or testimonials.
- `llms.txt` claims as an SEO ranking trick.
- Heavy client-side frameworks for static content.

## Primary references

- Google Search Central — generative AI optimization / Search documentation updates (2026)
- Google Search Central — canonicalization and site migration guidance
- Google Search Central — profile page structured data
- OpenAI — Publishers and Developers FAQ / OAI-SearchBot guidance
- Schema.org — Person, ProfilePage, Article, WebSite, BreadcrumbList
