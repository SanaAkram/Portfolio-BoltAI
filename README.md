# Portfolio-BoltAI

The source of **Sana Akram's AI-engineer portfolio site** — a single-page React app that presents projects, SaaS products, automation workflows, experience, education, skills and testimonials, with a contact form, a live GitHub contribution calendar and a hidden "game mode" (a tiny platformer where a pixel robot collects five "brain cells" on the page itself).

## Sections

The page is composed in `src/App.jsx`, in this order:

| Section | Component | Content |
|---|---|---|
| Header | `Header.jsx` | Sticky nav with icon links (Home, About, Projects, Products, Automations, …) that scroll to each section |
| Hero | `Hero.jsx` | Headline plus an animated particle-network `<canvas>` background |
| About | `About.jsx` | Short bio |
| Projects | `Projects.jsx` | Work projects with description, architecture bullet list, tech tags, links and banner |
| SaaS products | `SaasProducts.jsx` | Product cards — CallWala, Recruit-AI, InboxPilot, MizanKhata, Angrezi Safar, Sana AI, codewithsana — each with tagline, architecture bullets, tags, status and live link |
| Automation workflows | `AutomationWorkflows.jsx` | The four-step recruiting automation pipeline (intake → scoring & routing → interview loop → assessment & final round) with diagrams from `public/workflows/` |
| Experience / Education / Skills | `Experience.jsx`, `Education.jsx`, `Skills.jsx` | Résumé data |
| Testimonials | `Testimonials.jsx` | Carousel (Swiper) |
| Contact | `Contact.jsx` | GitHub contribution calendar (`react-github-calendar`) and a contact form that sends e-mail through EmailJS |
| Game mode | `RobotGame.jsx` + `styles/RobotGame.css` | Canvas platformer overlay toggled by a fixed "game mode" button (← → / A D move, space jumps, collect all 5 brain cells) |

Content lives in plain arrays at the top of each component, so updating the portfolio means editing those arrays and dropping images into `public/images/`.

## Architecture

A static, client-side-only site — there is no backend.

```
index.html ─► src/main.jsx ─► App.jsx ─► section components
                                 │
                                 ├─ Tailwind CSS 3 (+ CSS variables in index.css for the dark theme)
                                 ├─ framer-motion / Swiper for animation and carousels
                                 ├─ react-github-calendar  ── GitHub contributions API
                                 └─ emailjs-com            ── browser ➜ EmailJS ➜ inbox
```

```
public/images/       project & product banners
public/workflows/    automation pipeline diagrams
src/components/      one file per section
src/styles/          RobotGame.css
```

## Stack

React 18 · Vite 5 · Tailwind CSS 3 (PostCSS + Autoprefixer) · framer-motion · Swiper · `react-github-calendar` · EmailJS (`emailjs-com`)

## Run locally

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/SanaAkram/Portfolio-BoltAI.git
cd Portfolio-BoltAI
npm install
npm run dev          # http://localhost:3000  (port set in vite.config.js)
```

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Configure the contact form

`src/components/Contact.jsx` calls `emailjs.send(serviceId, templateId, params, publicKey)`. To send mail to your own inbox:

1. Create an account at [emailjs.com](https://www.emailjs.com/), add an e-mail service and a template that uses the variables `from_name`, `from_email` and `message`.
2. Replace the service id, template id and public key in `Contact.jsx` with yours (EmailJS public keys are meant for browser use, but keep them out of forks you do not control). Optionally move them to `VITE_EMAILJS_*` variables in a `.env` file and read them with `import.meta.env`.

The GitHub calendar reads the username hard-coded in `Contact.jsx` (`GitHubCalendar username=…`); change it to show a different profile.

## Deploy

The `dist/` output is plain static files: deploy it on Vercel, Netlify or GitHub Pages (build command `npm run build`, output directory `dist`).
