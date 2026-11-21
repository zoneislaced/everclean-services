# EverClean Services — town-page generator

## What it does
`python scripts/generate_pages.py` (run from the project folder) builds one page per town in `data/towns.json` (84 now), then rewrites the town links and town dropdown in `index.html`, plus `sitemap.xml` and `robots.txt`.

- `data/site_config.json`: domain, phone, WhatsApp, email. Add a real email here and it appears on every page (it's hidden while empty).
- `data/towns.json`: the text for each town.
- `templates/town-page.html`: the shared page design.

The generator stops with a clear message if the domain is malformed, a placeholder is left unfilled, or two towns share a slug. It escapes `&` and apostrophes safely.

## Add or remove a town
Edit `data/towns.json` (one object per town), save, run the generator. To take a town offline, remove it from the file AND delete its `cleaning-services-<slug>/` folder, then re-run.

## Before you rely on these pages
- Every town page says the business can serve that town. Only keep towns you can actually reach, and edit the text in `towns.json` (for example "Yes. We cover…" in the FAQs and "Our teams…" in the local text) so it is true.
- Each page has only about 150 to 210 words of town-specific text, written to a pattern. Google may treat that as thin content. Add real local detail where you can, and consider launching only your core towns first.
- The quote form uses Netlify Forms (`quote` on the homepage, `quote-town` on town pages). Set up email notifications in Netlify → Forms.
