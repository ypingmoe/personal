# Personal Website

Personal website built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Includes:

- Branded header and footer
- Skill stack section with symbol images
- Social icons with links in footer
- Hover and floating icon animations (no gradient effects)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Heroku

This project includes a `Procfile` (`web: npm run start`).

### 1) Create app and set buildpack

```bash
heroku create your-app-name
heroku buildpacks:set heroku/nodejs
```

### 2) Set Node version (optional but recommended)

Add this to `package.json` if needed:

```json
"engines": {
  "node": "20.x"
}
```

### 3) Deploy

```bash
git add .
git commit -m "Initial personal website"
git push heroku main
```

### 4) Open app

```bash
heroku open
```
