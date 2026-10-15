# dev-study

My daily study repository for front-end / full stack interview preparation (React, Next.js, TypeScript, testing, front-end system design).

Every study session ends with something produced: code, a short write-up, or Anki cards. Studying without producing anything doesn't count as a completed session.

## How it works

Daily block: **08:30–10:00, Monday to Friday**. One topic per day, one deliverable per session. Friday is for review and a mock interview.

| Minutes | Stage | What I do |
|---------|-------|-----------|
| 0–5 | Goal | Write the question of the day |
| 5–20 | Active study | Read the docs, note only the doubts |
| 20–65 | Practice | Reproduce the concept in code (no copy-paste). Break it on purpose, then fix it |
| 65–80 | Recall | Explain it from memory, out loud, in English, recording audio |
| 80–90 | Log | 2–3 Anki cards and a commit with a short README |

Fridays: 45 min reviewing cards and the week, 45 min of mock interview in English.

## Repository structure

This is a pnpm workspace. Each study day is its own package, grouped by week inside `packages/`.

```
dev-study/
├── README.md
├── package.json
├── pnpm-workspace.yaml
├── .gitignore                    # node_modules, dist, audio/
├── docs/
│   ├── study-plan.md             # the full study plan
│   ├── weekly-reviews/           # Sunday reviews: week-01.md, week-02.md...
│   └── interview-notes/          # questions I got wrong in mocks
└── packages/
    ├── week-01-react/
    │   ├── README.md             # week summary (not a package)
    │   ├── 01-rendering/         # package: package.json, rsbuild.config.ts, src/
    │   ├── 02-hooks/
    │   ├── 03-state-and-data/
    │   └── 04-performance/
    ├── week-02-nextjs-js-ts/
    ├── week-03-ts-testing-web/
    └── week-04-architecture/
```

Only the day folders are packages. Each one has its own `README.md` with the question of the day, what I built, measurements, what I learned, and a 30-second interview answer.

For days with a before/after comparison (e.g. rendering), both versions live in the same package under `src/before` and `src/after`, selected with a query string (`?v=before` or `?v=after`).

## Setup

Requirements: Node.js 20.19+ and pnpm.

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*/*"
```

```bash
pnpm install
```

### Create a new study package

React-only projects use [Rsbuild](https://rsbuild.rs). Choose **React** and **TypeScript** in the prompt.

```bash
cd packages/week-01-react
pnpm create rsbuild@latest 01-rendering
cd ../..
pnpm install   # run again from the root whenever a package is added
```

### Run a package

```bash
pnpm -C packages/week-01-react/01-rendering dev
pnpm -C packages/week-01-react/01-rendering build
pnpm -C packages/week-01-react/01-rendering preview
```

Build everything: `pnpm -r build`.

### Profiling build

React's Profiler is disabled in normal production builds, so measurements use a profiling build. Add this to each package's `rsbuild.config.ts`:

```ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: process.env.PROFILE
      ? { 'react-dom/client': 'react-dom/profiling' }
      : {},
  },
  output: {
    // keeps component names readable in the flame graph
    minify: !process.env.PROFILE,
  },
});
```

And this script in the package's `package.json` (on Windows use `cross-env PROFILE=1 rsbuild build`):

```json
"build:profile": "PROFILE=1 rsbuild build"
```

Then:

```bash
pnpm -C packages/week-01-react/01-rendering build:profile
pnpm -C packages/week-01-react/01-rendering preview
```

## Roadmap

### Week 1 — React in depth
- [ ] Mon — Rendering and reconciliation
- [ ] Tue — Advanced hooks
- [ ] Wed — State and data
- [ ] Thu — Performance
- [ ] Fri — Review and mock

### Week 2 — Next.js and JS/TS fundamentals
- [ ] Mon — App Router and Server Components
- [ ] Tue — Rendering and caching in Next.js
- [ ] Wed — JavaScript fundamentals
- [ ] Thu — TypeScript I
- [ ] Fri — Review and mock

### Week 3 — Advanced TypeScript, testing and web
- [ ] Mon — Advanced TypeScript
- [ ] Tue — TypeScript with React
- [ ] Wed — Testing
- [ ] Thu — Accessibility and Web Vitals
- [ ] Fri — Review and mock

### Week 4 — Front-end architecture and system design
- [ ] Mon — Microfrontends and shared modules
- [ ] Tue — Authentication and permissions
- [ ] Wed — Feature design
- [ ] Thu — Design system and component architecture
- [ ] Fri — Full mock and retrospective

> Weeks are ordered by the self-assessment I do for each topic. If a topic is already at 4–5 out of 5, its week becomes interview practice instead.

## Weekly targets

| Metric | Target |
|--------|--------|
| Completed sessions | 4–5 out of 5 |
| New Anki cards | 10–15 |
| Study commits | 5 |
| Mock interview (Friday) | 1, in English |

Progress is measured by deliverables, not hours. A 15-minute review every Sunday covers what was closed, what fell behind, and what to adjust next week.

## Conventions

- Explanations, commits and READMEs in English.
- Commit prefixes: `feat:` for exercises, `docs:` for READMEs and write-ups, `chore:` for config.
- Performance measurements use the profiling build (`build:profile` + `preview`), never plain production or dev mode.
- Audio recordings stay local and are git-ignored.

## Where I study

Official docs first, since they also train the technical vocabulary used in interviews.

- [React](https://react.dev) — hooks, rendering, Server Components
- [Next.js](https://nextjs.org/docs) — App Router, caching, rendering strategies
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — utility types and more
- [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com) — component testing
- [JavaScript.info](https://javascript.info) — event loop, closures, promises
- [web.dev](https://web.dev) — Core Web Vitals and accessibility
- [Patterns.dev](https://www.patterns.dev) — React patterns and performance
- [GreatFrontEnd](https://www.greatfrontend.com) — front-end questions and system design
- [Anki](https://apps.ankiweb.net) — spaced repetition for all the cards

## End of the 4 weeks

- 4 published mini projects, each with an English README
- A recorded full mock interview
- A plan for the next 4 weeks
