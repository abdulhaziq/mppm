This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## GitHub + GitHub Pages (hosting)

Push this repo to GitHub. The site is a **static export** published with **GitHub Actions → GitHub Pages** (no separate host required).

Full setup (Pages settings, URLs, custom domain / “friendly” URL): **[`docs/DEPLOY-GITHUB-PAGES.md`](docs/DEPLOY-GITHUB-PAGES.md)**.

Preview the built files locally:

```bash
npm run build
npx serve out
```

(`npm run start` is for non-static Next servers only; this project exports static HTML.)

## Client proposal template

To reuse this codebase for another client, see [`templates/client-proposal/README.md`](templates/client-proposal/README.md) and the copy brief [`templates/client-proposal/CONTENT-CHECKLIST.md`](templates/client-proposal/CONTENT-CHECKLIST.md).
