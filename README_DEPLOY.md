# Vercel Deploy Guide

## 1. Create a GitHub repository

1. Open GitHub.
2. Create a new empty repository for the site.
3. Do not add a README, license, or gitignore on GitHub if this project already has them locally.

## 2. Push the project to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Prepare Viktor Amchislavsky site for Vercel"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

If the repository already exists locally, use:

```bash
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

## 3. Import to Vercel

1. Open Vercel.
2. Choose Add New Project.
3. Import the GitHub repository.
4. Vercel should detect Next.js automatically.
5. Keep the default settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: leave empty

## 4. Set environment variables

In Vercel Project Settings, add:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=vicam2001@mail.ru
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN
```

Notes:

- `NEXT_PUBLIC_SITE_URL` should be the final production URL, without a trailing slash.
- `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are reserved for the email provider integration.
- The current contact API accepts requests and logs them. Connect Resend before relying on live email delivery.

## 5. Deploy

1. Click Deploy in Vercel.
2. Wait for the build to finish.
3. Open the production URL.
4. Check these routes:
   - `/`
   - `/tours`
   - `/archive`
   - `/gallery`
   - `/reviews`
   - `/articles`
   - `/about`
   - `/contacts`
   - `/admin`

## 6. After deployment

1. Add the production domain to `NEXT_PUBLIC_SITE_URL`.
2. Redeploy after changing environment variables.
3. If Git-based CMS is connected later, configure the CMS backend and media folder in `public/admin/config.yml`.
