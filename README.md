# MY-PORTFOLIO

Personal portfolio site — **Tôn Quỳnh Long** · Fullstack Developer

**Live:** https://tonquynhlong.vercel.app *(update after deploy)*

Built with Next.js 15, Tailwind CSS, Framer Motion.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Fonts:** Syne (display) + DM Sans (body)
- **Deploy:** Vercel

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata
│   ├── page.tsx          # Page assembly
│   └── globals.css       # CSS variables, base styles
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Projects, Stack, Contact
│   └── ui/               # SectionLabel, mock UI components
├── hooks/                # useScrolled
└── lib/
    ├── utils.ts           # cn()
    └── data/projects.ts   # Project data
```

## Customize

All project data lives in `src/lib/data/projects.ts` — edit there to update the Projects section.
