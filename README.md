# Mechatronics 2027 — Group 3 Capstone: Design Log

A single, always-up-to-date design log website for the team. Each week is a
plain markdown file — the site turns it into a clean page automatically.

## Adding a new week

1. Add a file to `src/content/` named `week4.md` (then `week5.md`, etc.).
2. Write it like a normal markdown document. Give each entry its own date
   and author, for example:

   ```md
   ## Sept 30, 2026 — Your Name

   What you worked on this week.
   ```

3. Optionally add a front-matter block at the very top for a nicer header
   (title, date range, member pills). This is **entirely optional** — a
   file with no front matter still renders fine:

   ```md
   ---
   title: Week 4 — Integration
   date: Sept 29 – Oct 5, 2026
   members: Ada Lovelace, Grace Hopper
   ---
   ```

4. Commit and push to `main`. GitHub Actions rebuilds and republishes the
   site automatically within a minute or two — nothing else to run.

That's the whole workflow: **write markdown → `git push` → site updates.**

## Local preview

```bash
npm install      # first time only
npm run dev      # http://localhost:5173
```

## Project structure

```
src/content/week1.md   ← one file per week, this is all you edit
src/App.jsx             ← loads every src/content/*.md file automatically
src/index.css           ← styling
.github/workflows/deploy.yml  ← builds and publishes to GitHub Pages on push
```

## Deploying to GitHub Pages (one-time setup)

1. Push this repository to GitHub (already done if you're reading this on
   GitHub).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push any commit to `main` (or re-run the "Deploy design log" workflow
   under the **Actions** tab). The workflow in
   `.github/workflows/deploy.yml` builds the site and publishes it.
5. Your site will be live at:

   ```
   https://mechatronics-2027-group-3-capstone.github.io/Mechatronics-2027-Group-3-Capstone/
   ```

   (Settings → Pages shows the exact URL once the first deploy finishes.)
   Share this single URL with instructors — it always reflects the latest
   `main` branch.

No further setup is needed after step 3 — every future push to `main`
redeploys automatically.
