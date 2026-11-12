# Sip Happens Café — Feedback Widget

A small React + TypeScript app where visitors rate a café as **Good**,
**Neutral** or **Bad** and instantly see the feedback statistics.

**Live demo:** _coming soon on Vercel_

## Features

- Vote with one of three buttons: Good, Neutral, Bad
- Live statistics: votes per category, total votes and positive rate
- "No feedback yet" message until the first vote
- Reset button that appears only when there is at least one vote

## Tech stack

- [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) with React Compiler
- CSS Modules and [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- ESLint, Prettier, Husky and lint-staged
- [Vercel](https://vercel.com/) for deployment

## Project structure

```
src/
  components/
    App/            # owns the votes state and computes the statistics
    CafeInfo/       # café title and description
    VoteOptions/    # vote and reset buttons
    VoteStats/      # statistics block
    Notification/   # "No feedback yet" message
  types/
    votes.ts        # shared Votes and VoteType types
  index.css         # global styles
  main.tsx          # entry point
```

## Getting started

Requirements: Node.js 24+ and npm.

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173/.

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the dev server                 |
| `npm run build`        | Type-check and build for production  |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Run ESLint and fix problems          |
| `npm run format`       | Format all files with Prettier       |
| `npm run format:check` | Check formatting with Prettier       |

A pre-commit hook runs ESLint and Prettier on staged files.

## Deployment

The app is deployed on Vercel. Every push to `main` triggers a new
production build and deploy.
