# Blog authoring (`content/blog/`)

This folder holds **MDX** posts. Published files must end in `.mdx` and must **not** start with `_` (those are skipped by the build).

## Frontmatter (required)

| Field | Required | Notes |
| --- | --- | --- |
| `title` | ✓ | Title case; used in H1 on the page |
| `description` | ✓ | Meta description; keep under ~155 chars for SERP |
| `date` | ✓ | ISO date, e.g. `2026-05-09` |
| `updated` | optional | Bumps `lastModified` in sitemap |
| `heroImage` | ✓ | Path under `public/`, e.g. `/images/2026-march/...` |
| `heroAlt` | ✓ | Describe the image + location for image SEO |
| `tags` | optional | Shown as chips |
| `draft` | optional | `true` hides post in prod (shown in dev) |
| `pillar` | optional | Editorial SEO pillar `1`–`5` (plan §5); **not rendered** |
| `canonical` | optional | Rare override; default is `/blog/[slug]` |

## FAQ block (`faqs`)

Add **4–6** FAQ objects for FAQ rich-result eligibility (`FAQPage` JSON-LD renders automatically):

```yaml
faqs:
  - question: "Question as a natural sentence?"
    answer: "Plain answer Google can cite. Mention 505 Fremont and phone when relevant."
```

## Editorial checklist (from brand SEO playbook)

Every post should include:

1. **Internal links**: one “money” landing page (/halal-restaurant-las-vegas, /late-night-food-downtown-las-vegas, or /doner-kebab-las-vegas), 2–3 dish pages where relevant, `/menu`, pickup/delivery (Square URL is in CTAs globally).
2. **Positioning line** early in body: Istanbul 2 as full-service **Zabiha Halal** Turkish in **Downtown Las Vegas**, daily **10 AM–2 AM** (5 AM Fri–Sat).
3. **Length targets**: local guides ~1,400–1,800 words; dish education ~900–1,300; brand stories ~700–1,000.
4. **FAQs** at bottom via `faqs` frontmatter (see above).

## URL slug

Filename = slug: `halal-downtown-las-vegas.mdx` → `/blog/halal-downtown-las-vegas`

After a post is indexed, **do not rename** the file without a 301 redirect.
