# Gurbani Viewer

A **Gurbani viewer / presenter** web app built with **Next.js**, created by [Gurkirat Singh](https://github.com/codingmastergurkirat). The project is designed to display and present Gurbani (Sikh scripture / hymns) through a web interface — the kind of tool that's useful for showing shabads on a screen or projector, similar in spirit to other Gurbani-presentation software used in Gurudwaras and at home.

> **Repository:** [codingmastergurkirat/Gurbani-viewer](https://github.com/codingmastergurkirat/Gurbani-viewer)
> **Live Demo:** https://gurbani-viewer-i7ohy1j9u-gurkirat-singhs-projects-4f653e06.vercel.app/

---

## 🔎 About

Gurbani Viewer is a work-in-progress application intended to let users view/present Gurbani in a clean, distraction-free interface. The app includes a **login/authentication flow**, suggesting it's built to support user accounts (e.g., saved preferences, personalized sessions, or restricted access) rather than being a fully public/anonymous viewer.

> **Note:** The project's public GitHub README is currently just the default Next.js (`create-next-app`) boilerplate, so detailed feature documentation isn't published in the repo itself. This README has been written by inspecting the codebase and live deployment to summarize what's known; specific features (search, navigation, display modes, etc.) may expand as the project develops.

## ✨ Live Demo

You can try the live deployment here:

👉 **[gurbani-viewer-i7ohy1j9u-gurkirat-singhs-projects-4f653e06.vercel.app](https://gurbani-viewer-i7ohy1j9u-gurkirat-singhs-projects-4f653e06.vercel.app/)**

⚠️ **Heads-up:** This particular link is a Vercel *preview deployment* URL, which may be protected by Vercel's deployment authentication — meaning visitors might be asked to sign in with a Vercel account to view it, depending on the project's protection settings. If you hit a Vercel login wall, that's Vercel's access control, not the app's own sign-in.

There is also a production-style alias for the project at `gurbani-viewer.vercel.app`, which serves the app's own **Login** page directly.

## 🛠️ Tech Stack

Based on the repository's `package.json`:

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Linting | ESLint (`eslint-config-next`) |
| Hosting | [Vercel](https://vercel.com) |
| Other | `cookie` package (likely used for session/auth handling) |

## 📁 Project Structure

```
Gurbani-viewer/
├── app/                # Next.js App Router — pages, layouts, routes (includes auth/login)
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── eslint.config.mjs   # ESLint configuration
├── postcss.config.mjs  # PostCSS / Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies & scripts
└── README.md
```

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/codingmastergurkirat/Gurbani-viewer.git
cd Gurbani-viewer
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running locally. The app auto-updates as you edit files inside `app/`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the built production app |
| `npm run lint` | Runs ESLint checks |

## ☁️ Deployment

The project is deployed on **[Vercel](https://vercel.com)**, the platform built by the creators of Next.js. Every push (or preview branch) can generate its own deployment URL, which explains the long, unique demo link shared above. For your own deployment, follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/codingmastergurkirat/Gurbani-viewer/issues) or open a pull request.

## 📄 License

No license file is currently published in the repository. Please check with the repo owner ([@codingmastergurkirat](https://github.com/codingmastergurkirat)) before reusing or redistributing the code.

## 🙏 Acknowledgements

- Built with [Next.js](https://nextjs.org)
- Font optimization via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) and [Geist](https://vercel.com/font)
- Inspired by the broader ecosystem of open-source Gurbani tools (e.g., BaniDB, SikhiToTheMax) that make Gurbani more accessible digitally
