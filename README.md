# Design Log — Mechatronics 2027 Group 3

Markdown-powered design log. Edit a `.md` file, push, done.

## Setup (once)

```bash
git clone https://github.com/Mechatronics-2027-Group-3-Capstone/Mechatronics-2027-Group-3-Capstone.git
cd Mechatronics-2027-Group-3-Capstone
npm install
```

## Add/update an entry

1. Edit `src/content/week1.md` (or add `week4.md`, `week5.md`, ...).
2. Each entry is just `## Date — Name` followed by normal markdown.
3. Preview locally: `npm run dev` → open http://localhost:5173
4. Ship it:
   ```bash
   git add . && git commit -m "week 4 log" && git push
   ```
   GitHub Actions rebuilds and republishes the live site automatically.

## Live URL

```
https://mechatronics-2027-group-3-capstone.github.io
```

## One-time Pages setup

Repo → **Settings → Pages → Build and deployment → Source** → set to
**GitHub Actions** (not "Deploy from a branch"). Then push once. That's it —
every push to `main` deploys automatically from then on.

> If the site ever shows blank/unstyled raw text, this setting got reset to
> "Deploy from a branch" — flip it back to "GitHub Actions" and push again.
