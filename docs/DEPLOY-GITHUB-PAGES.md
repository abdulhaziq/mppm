# Host this proposal site on GitHub Pages

The app is built as a **static export** (`next build` writes to `out/`). GitHub stores your **code**; **GitHub Pages** serves the built HTML/CSS/JS from Actions.

## 1. Push this repository to GitHub

```bash
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin master   # or main
```

## 2. Turn on GitHub Pages (GitHub Actions)

In the repo: **Settings → Pages → Build and deployment**

- **Source:** GitHub **Actions** (not “Deploy from a branch”).

The workflow **`.github/workflows/deploy-github-pages.yml`** runs on every push to `main` or `master`, uploads `out/`, and deploys.

First deploy may require approving the `github-pages` environment once (workflow permissions).

## 3. Your site URL

- **Project repo** (most cases): `https://<username>.github.io/<repo>/`  
  Example: repo `mppm` → `https://abdulhaziq.github.io/mppm/`

- **Special repo** `<username>.github.io`: site is at `https://<username>.github.io/` with **no** `/repo` prefix (handled automatically in `next.config.ts`).

`next.config.ts` reads `GITHUB_REPOSITORY` during the Actions build so asset paths match GitHub Pages.

### Local build that matches GitHub Pages

Simulate the same base path as CI:

```bash
GITHUB_REPOSITORY="<you>/<repo>" npm run build
npx serve out
```

Open the printed URL (with `/repo/` path).

### Local build at root (custom domain later)

```bash
BASE_PATH= npm run build
```

## 4. Client-friendly URL (masking)

GitHub’s default URL is often **not** what you show clients. Common approach:

1. Register a domain (e.g. `proposal.acme.com`).
2. **DNS:** Add a **CNAME** from `proposal.acme.com` → `<username>.github.io` (see [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
3. Repo **Settings → Pages → Custom domain:** enter `proposal.acme.com`, enable HTTPS when DNS is verified.
4. Add a file **`public/CNAME`** whose **only line** is the hostname:

   ```text
   proposal.acme.com
   ```

   Commit and push so the static export includes it in `out/`.

5. For a site at the **root** of that domain, keep **`BASE_PATH` empty** when building for that deployment. For GitHub Actions with a **project** repo name, you may use a **dedicated repo** named `<org>.github.io` or a workflow input to set `BASE_PATH=` — see “Advanced” below.

**Easiest client-facing setup:** use the **custom domain** on the GitHub Pages site; clients only see your branded hostname.

## 5. What changed vs Vercel

- `output: "export"` produces static files only — no Node server. **`npm run start` is not used** for production; preview locally with `npx serve out`.
- Images use **unoptimized** mode (required for static export with `next/image`).

## Advanced: production build with empty base path on a project repo

If you must serve at the root of a custom domain while the repo is still `user/mppm`, build with:

```bash
BASE_PATH= npm run build
```

Deploy that `out/` folder to hosting that maps your domain to those files (or adjust workflow `env` for a release job). For pure GitHub Pages from the same repo without renaming, the `/mppm/` path is normal unless you use the `.github.io` repo pattern or override `BASE_PATH`.
