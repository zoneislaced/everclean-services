# EverClean Services — Website

Static site for EverClean Services (residential and commercial cleaning), hosted on Netlify at https://evercleann.netlify.app

## Preview locally
Open `index.html` in a browser, or use VS Code Live Server. (The form only submits on Netlify.)

## Files you must also have in the project
`assets/css/style.css` and `assets/js/main.js` are referenced by every page. If they're missing from the deploy, the site is unstyled.

## Before publishing
1. Add a real email address to the contact section of `index.html` (there's a comment showing where). Don't publish an invented address.
2. Quote form: it uses Netlify Forms. After deploying, check Netlify → Forms for a form named `quote`, and set up email notifications there.
3. Update `data/site_config.json`, `data/towns.json` and `templates/town-page.html` to match EverClean Services before running `scripts/generate_pages.py` (see README-PSEO.md for the domain fix).
4. Generate town pages only for towns you actually serve.
