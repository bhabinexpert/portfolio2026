# Bhabin Dulal — Portfolio 2026

> A modern, animated developer portfolio built with React 18, Three.js, and Framer Motion.  
> Live at **[bhabindulal.com.np](https://www.bhabindulal.com.np/)**

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r168-000000?style=flat-square&logo=three.js)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055ff?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment & Configuration](#environment--configuration)
- [Sections](#sections)
- [Performance Notes](#performance-notes)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This portfolio is a full-featured personal website designed to showcase projects, skills, and professional background. It goes beyond a standard static page — featuring an interactive 3D scene, physics-based animations, a dark/light theme toggle, and a custom cursor — all while maintaining fast load times via Vite's code-splitting and lazy loading.

The design philosophy is intentional minimalism: clean typography, purposeful motion, and a refined **indigo + teal** colour palette that feels crafted rather than generated.

---

## Live Demo

🌐 **[https://www.bhabindulal.com.np/](https://www.bhabindulal.com.np/)**

---

## Features

### Visual & Interaction
- **3D Hero Scene** — Interactive Three.js canvas with a distorted glow sphere, wireframe icosahedron, dual orbital tori, orbiting dots, and 2 200+ star particle field
- **Meteor Shower** — Fixed-position CSS meteor streaks and falling stars distributed across the full viewport, always visible as you scroll
- **Custom Cursor** — Smooth magnetic cursor with a follower ring; reacts to hover states
- **Framer Motion Animations** — Entry animations, scroll-triggered reveals, spring transitions, and a layout-ID pill in the navbar
- **Typewriter Effect** — Role cycling via `react-type-animation`

### Theme
- **Dark / Light Toggle** — One-click theme switch with smooth CSS-variable transitions; preference persisted to `localStorage`
- **Indigo + Teal Palette** — Replaces the common AI-generated violet/cyan look with a more refined, human-designed colour system
- **Light Mode** — Clean slate-white background with proper contrast and accessible colours

### Sections
- **Hero** — Name, animated role typewriter, CTA buttons (View Work · Download CV · Let's Talk via WhatsApp · Hire Me), social links
- **About** — Bio, contact info, education timeline, animated counters (projects, technologies, commits, ☕ cups of coffee), soft skills
- **Skills** — Category-filtered skill cards (Frontend · Backend · Data · Design · AI · Tools) with animated progress bars
- **Projects** — 7 projects with live browser/terminal/dashboard preview mockups, 3D tilt effect, featured grid
- **Certifications** — 4 professional certifications with issuer details and accent colour cards
- **Googly Contact** — Interactive section with pupil-tracking googly eyes; click the email to copy it and watch letters tumble off the screen with physics-based rotation, then spring back
- **Contact Form** — Working contact form with validation and loading state
- **Footer** — Social links, quick navigation

### Technical
- **Code Splitting** — Three.js scene lazy-loaded via `React.lazy` / `Suspense`; only loads when the Hero section mounts
- **CV Download** — Direct PDF download of `Bhabin Dulal CV.pdf` from the public folder
- **WhatsApp Integration** — "Let's Talk" opens a pre-filled WhatsApp chat
- **Clipboard API** — Email copy with textarea fallback for unsupported browsers

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| 3D | Three.js r168, @react-three/fiber, @react-three/drei |
| Animation | Framer Motion 11 |
| Styling | Tailwind CSS v3 (class-based dark mode), custom CSS |
| Typewriter | react-type-animation |
| Icons | lucide-react |
| Build | Vite (ESM, HMR, Rollup bundler) |
| Deployment | Netlify (static) |

---

## Project Structure

```
Portfolio 2026/
├── public/
│   └── Bhabin Dulal CV.pdf       # Downloadable CV
├── src/
│   ├── components/
│   │   ├── three/
│   │   │   ├── Scene3D.jsx        # Canvas setup, camera, controls
│   │   │   ├── FloatingGeometry.jsx  # Sphere, tori, orbit dots
│   │   │   └── ParticleField.jsx  # 2200-point star field
│   │   ├── Hero.jsx               # Full-screen hero section
│   │   ├── Navbar.jsx             # Sticky nav, active-section tracking, theme toggle
│   │   ├── About.jsx              # Bio, education, counters, soft skills
│   │   ├── Skills.jsx             # Category-filtered skill cards
│   │   ├── Projects.jsx           # Project cards with tilt and preview mockups
│   │   ├── Certifications.jsx     # Certification cards
│   │   ├── GooglyContact.jsx      # Pupil-tracking eyes + falling-letter email
│   │   ├── Contact.jsx            # Contact form
│   │   ├── Footer.jsx             # Footer with links
│   │   ├── MeteorShower.jsx       # Fixed-position CSS meteor/star layer
│   │   └── CustomCursor.jsx       # Cursor + follower ring
│   ├── context/
│   │   └── ThemeContext.jsx       # Dark/light theme provider + localStorage
│   ├── data/
│   │   └── portfolio.js           # All content: personal info, projects, skills, etc.
│   ├── App.jsx                    # Root layout
│   ├── index.css                  # Global styles, CSS variables, theme overrides
│   └── main.jsx                   # React DOM entry
├── tailwind.config.js             # Custom colour palette (indigo + teal)
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bhabinexpert/Portfolio-2026.git
cd Portfolio-2026

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

> **Note:** The Three.js chunk (`Scene3D`) is ~837 KB raw / ~225 KB gzipped. This is expected for a 3D scene. The chunk is lazy-loaded and only parsed after the initial page renders.

---

## Environment & Configuration

No environment variables are required. All personal data (name, email, projects, skills) lives in a single file:

```
src/data/portfolio.js
```

To personalise this portfolio for your own use, edit the exports in that file:

| Export | Description |
|---|---|
| `personal` | Name, email, phone, location, tagline, bio, CV path |
| `socials` | GitHub, LinkedIn, Instagram, WhatsApp, portfolio URL |
| `skills` | Skill name, proficiency level (0–100), category, emoji |
| `projects` | Title, description, tech stack, GitHub/live links, preview data |
| `stats` | Animated counter values shown in the About section |
| `education` | Degree, institution, year, description |
| `certifications` | Title, issuer, date, description, accent colour |
| `softSkills` | Label + emoji pairs |
| `roles` | Typewriter role strings in the Hero |

### CV File

Place your CV at:

```
public/Bhabin Dulal CV.pdf
```

Or update the `cv` field in `personal` to point to a different path.

---

## Sections

### Hero
Full-screen section with the Three.js canvas in the background. Contains the availability badge, animated name, typewriter, tagline, CTA buttons, social links, floating info cards, and the animated Hire Me button with a spinning conic-gradient ring.

### About
Two-column layout with bio and contact details on the left; animated counters, education timeline, currently-learning tags, and soft skills grid on the right.

### Skills
Six category tabs (Frontend · Backend · Data · Design · AI · Tools). Each card has an animated progress bar that triggers on scroll, coloured per category. Default view shows Frontend skills.

### Projects
Three featured projects in a 3-column grid, four others in a 4-column grid below. Each card has a `ProjectPreview` component at the top (browser chrome mockup, terminal prompt, or dashboard UI) rendered from `preview.type` in the data file.

### Certifications
Four cards in a responsive grid, each with a top accent bar in the certification's accent colour, issuer badge, and date.

### Googly Contact
The most interactive section. Two googly eyes track your cursor in real time via `requestAnimationFrame`. Clicking the email address:
1. Copies it to the clipboard (Clipboard API with textarea fallback)
2. Launches a tumbling letter animation — each character falls with randomised rotation (200–420°) and scale, slow-motion gravity, then springs back in from above

### Contact Form
Standard contact form with name, email, and message fields. Includes basic validation and a spinner during submission.

---

## Performance Notes

| Metric | Value |
|---|---|
| JS bundle (main) | ~335 KB raw / ~105 KB gzip |
| JS bundle (Three.js scene) | ~837 KB raw / ~225 KB gzip (lazy) |
| CSS | ~35 KB raw / ~8 KB gzip |
| Three.js particle count | 2 200 stars |
| Meteor + star streaks | 18 CSS elements (8 meteors + 10 stars) |

The Three.js scene is wrapped in `React.lazy` + `Suspense`, so it does not block the initial paint. The particle field uses a single `points` mesh with buffer geometry for minimal draw calls.

---

## Contributing

This is a personal portfolio repository. If you find a bug or want to suggest an improvement, feel free to open an issue. Pull requests for genuine improvements are welcome.

```bash
# Fork → create feature branch
git checkout -b fix/your-bug-description

# Commit your changes
git commit -m "fix: description of fix"

# Push and open a PR
git push origin fix/your-bug-description
```

---

## License

This project is open-source under the [MIT License](LICENSE).  
Feel free to use the structure and code as a reference or starting point for your own portfolio — just swap out the personal data.

---

## Contact

**Bhabin Dulal**  
BSc (Hons) Computing — Itahari International College / London Metropolitan University  
Damak-2, Jhapa, Nepal

| | |
|---|---|
| Email | bhabindulal35@gmail.com |
| GitHub | [@bhabinexpert](https://github.com/bhabinexpert) |
| LinkedIn | [bhabindulal](https://www.linkedin.com/in/bhabindulal/) |
| WhatsApp | [+977 9824009974](https://wa.me/9779824009974) |
| Portfolio | [bhabindulal.com.np](https://www.bhabindulal.com.np/) |

---

<p align="center">Built with ☕ and React by <a href="https://www.bhabindulal.com.np/">Bhabin Dulal</a></p>
