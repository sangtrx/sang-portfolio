# SEO, GEO, and AI Discoverability — 2026-08-25

## Goal

Make the portfolio easy to discover, identify, understand, and cite without producing search-engine filler.

The strategy is **one canonical content surface + entity clarity + first-hand evidence + clean crawlability + truthful structured metadata + explicit indexing submission**.

## What matters in 2026

### 1. Generative search still starts with SEO
Google's current guidance says its generative AI features use the core Search index and ranking systems. The durable work is still crawlability, indexing, useful original content, internal linking, page experience, and accurate structured data. Google specifically advises against treating AEO/GEO as a bag of AI-only hacks.

### 2. First-hand, non-commodity content is the strongest asset
The portfolio should emphasize information that cannot be cheaply reproduced from generic sources:
- real system boundaries and architecture decisions;
- what Sang personally owned;
- validation evidence and current status;
- trade-offs, rejected approaches, and failure boundaries;
- deliberate non-claims;
- public source where it is safe to expose.

Do not create thin pages for keyword variants such as “best AI engineer Vietnam”. Authority should come from real work, not doorway pages.

### 3. Entity disambiguation matters for a common name
`Sang Truong` is not globally unique. Canonical pages therefore repeat a small set of truthful corroborating signals where useful:
- name: Sang Truong;
- public handle: `sangtrx`;
- role: Senior AI/LLM Engineer and Technical Lead;
- location: Ho Chi Minh City, Vietnam;
- GitHub, LinkedIn, and Google Scholar links;
- education, current organizations, publications, and selected systems.

The same identity is represented in Schema.org `Person` JSON-LD and visible page content. Structured data clarifies an entity; it does not manufacture authority.

### 4. One indexable representation per page
The canonical HTML pages are the authoritative public content. Earlier Markdown mirrors were removed from the public routing surface because static GitHub Pages cannot reliably attach `X-Robots-Tag` headers to prerendered alternate files. Duplicate machine-readable copies add more indexing ambiguity than value.

AI systems can read the same semantic HTML used by humans, and the pages already contain JSON-LD. `/llms.txt` remains a concise optional discovery map pointing only to canonical HTML URLs.

### 5. ChatGPT Search needs crawl access, not special AI pages
OpenAI's publisher guidance says public sites can appear in ChatGPT Search and recommends allowing `OAI-SearchBot` when content should be discoverable, summarized, cited, and linked. `robots.txt` explicitly allows it.

`GPTBot` is also allowed because the published portfolio is intentionally public. This is separate from ChatGPT Search discovery and can be changed independently later.

### 6. `llms.txt` is supplementary
Google explicitly says unnecessary AI text files such as `llms.txt` are not required for generative Search optimization. The site keeps `/llms.txt` only as a lightweight convention for automated readers. It points to canonical HTML rather than duplicate Markdown pages.

### 7. Discovery and indexing submission are separate from ranking
A technically excellent page cannot rank before search engines discover and index it. The deployment workflow therefore notifies IndexNow after a successful GitHub Pages deploy. This helps Bing and other participating search engines discover changed canonical URLs faster; it does not guarantee crawling, indexing, or ranking.

Google does not use IndexNow. Google indexing should be managed through Search Console and the canonical sitemap.

## Implemented technical surface

- One canonical indexable HTML URL for each public content page.
- Self-referencing canonical URL on every indexable HTML page.
- Unique titles and descriptions centered on the real subject of each page.
- Static-rendered primary content; no client-only content dependency.
- Shared Schema.org identity graph for `Person` and `WebSite` on primary profile surfaces.
- `ProfilePage` entities for About and Résumé; `Article` + `BreadcrumbList` for case studies.
- Visible disambiguation using `Sang Truong`, `sangtrx`, role, location, and corroborating identity links.
- Open Graph and Twitter PNG social cards at 1200×630.
- Semantic headings, keyboard navigation, focus states, reduced-motion support, and responsive layouts.
- Generated `/sitemap.xml` containing only canonical HTML URLs and meaningful `lastmod` values.
- Generated `/robots.txt`, including explicit `OAI-SearchBot` access.
- Generated `/llms.txt` pointing only to canonical HTML pages.
- Internal links from home → case studies → About/Résumé and back.
- `max-image-preview:large`, unlimited snippet/video preview directives for indexable pages.
- `rel="author"` and `rel="me"` identity links where applicable.
- IndexNow ownership key plus post-deploy URL notification for the GitHub Pages host.
- Security/referrer/permissions headers for hosts that support them.

## Canonical page strategy

### Homepage
Immediately establish:
- Sang Truong / `sangtrx`;
- Senior AI/LLM Engineer and Technical Lead;
- Ho Chi Minh City, Vietnam;
- flagship systems and proof;
- professional/research authority.

### About
This is the canonical person/entity page. It should contain identity, positioning, engineering principles, technical focus, education, research, and external corroborating profiles.

### Résumé
Expose enough chronology and skills for recruiters and search systems while linking to deeper case studies. Keep claims aligned with the versioned résumé source.

### Case studies
Each case study should answer:
1. What problem existed?
2. What did Sang own?
3. What architecture was chosen?
4. Why was it chosen?
5. What was actually implemented and validated?
6. What remains pending or deliberately unclaimed?

This is the portfolio's strongest SEO/GEO content because it is first-hand and non-commodity.

## Indexing launch checklist

### Google
1. Prefer the custom domain `sangtruong.me` before building long-term authority.
2. Verify it as a Domain property in Google Search Console.
3. Submit `https://sangtruong.me/sitemap.xml`.
4. Use URL Inspection → Request indexing for `/`, `/about`, `/resume`, `/work/yhct`, and `/work/curren` after launch or material changes.
5. Monitor Page Indexing, Search performance, and Generative AI reporting where available.

### Bing / participating IndexNow engines
1. Verify the site in Bing Webmaster Tools (or import verification from Google Search Console where supported).
2. Submit the sitemap.
3. Confirm IndexNow submissions are received after deploy.
4. Inspect any URLs that remain crawled-but-not-indexed.

## Custom-domain migration checklist

When `sangtruong.me` is attached:
1. Set `SITE_URL=https://sangtruong.me` and `BASE_PATH=/` in the production build.
2. Keep stable route slugs: `/about`, `/resume`, `/work/yhct`, `/work/curren`.
3. Make the custom domain the only intended canonical origin.
4. Redirect old GitHub Pages URLs to the matching custom-domain URLs if the host setup permits it; otherwise avoid promoting the preview once the domain is live.
5. Change the IndexNow workflow `host`, key location, and URL list to `sangtruong.me`.
6. Update GitHub, LinkedIn, résumé, Google Scholar homepage (if editable), and other public profiles to link to the custom domain.
7. Confirm CDN/bot protection does not return 403 to Googlebot, Bingbot, or OAI-SearchBot.

## Authority work outside the repository

On-page optimization cannot create reputation by itself. High-value corroboration includes:
- custom-domain links from GitHub and LinkedIn profiles;
- Google Scholar homepage/profile alignment where available;
- links from public project repositories back to the relevant portfolio case study;
- legitimate employer/project/publication mentions where appropriate;
- original technical write-ups only when there is real first-hand material worth publishing.

Avoid paid link schemes, fake mentions, mass directory submissions, and generated filler content.

## Primary references

- Google Search Central — AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central — AI features and websites: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central — sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central — structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- OpenAI — Publishers and Developers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Bing Webmaster Tools — URL submission / IndexNow: https://www.bing.com/webmasters/help/URL-Submission-62f2860b
- IndexNow protocol: https://www.indexnow.org/documentation
- Schema.org: https://schema.org/
