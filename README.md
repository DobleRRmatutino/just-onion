# Just Onion — Landing Page

Single-page landing site for **Just Onion**, a burger business that sells onion-bun burgers and routes customers to WhatsApp for ordering.

## Tech Stack

- **Vite** (vanilla JS, no framework)
- **HTML / CSS / JS** — mobile-first, no heavy libraries
- **Google Fonts** (Poppins)

## Project Structure

```
web/
├── assets/               # Original source images
├── public/
│   └── assets/           # Static assets served by Vite
│       ├── burger-sola.png
│       ├── combo.png
│       ├── logo-horizontal.png
│       ├── logo-icono.png
│       └── favicon.png
├── src/
│   ├── style.css         # All styles (mobile-first)
│   └── main.js           # WhatsApp flow + interactivity
├── index.html            # Single-page entry point
├── vite.config.js        # Vite configuration
├── package.json
└── README.md
```

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Install dependencies

```bash
npm install
```

### Run locally (dev server)

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Deploy to Netlify

### Option A: Netlify CLI

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

### Option B: Netlify Dashboard (Git deploy)

1. Push repo to GitHub/GitLab
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect the repo
5. Set these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy**

### Option C: Drag & Drop

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder into the browser

## QA Checklist

- [ ] Mobile layout renders correctly (320px–480px)
- [ ] Hamburger menu opens/closes on mobile
- [ ] Nav links scroll smoothly to sections
- [ ] Onion Burger WhatsApp link generates correct message (no sauce)
- [ ] Onion Burger WhatsApp link generates correct message (with sauce)
- [ ] Combo WhatsApp link generates correct message with selected soda
- [ ] Combo defaults to Pepsi when no soda is explicitly changed
- [ ] Extra sauce toggle works on both cards
- [ ] All product images load correctly
- [ ] Logo and favicon display properly
- [ ] Hours and location info are accurate
- [ ] Desktop layout (768px+) shows 2-column grid
- [ ] Buttons have hover/tap feedback
- [ ] Page loads fast (no heavy dependencies)
- [ ] WhatsApp URLs are properly URL-encoded
