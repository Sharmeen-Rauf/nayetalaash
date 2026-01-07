# Quick Vercel Deployment Guide

## Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Deploy on Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

## Step 3: Add Environment Variables

In Vercel Dashboard → **Settings** → **Environment Variables**, add:

```
MONGODB_URI=mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0
JWT_SECRET=nayetalaash2026project_secret_key_change_in_production
NODE_ENV=production
INIT_SECRET=your-random-secret-key-here
```

**Important:** Add for all environments (Production, Preview, Development)

## Step 4: Deploy

Click **"Deploy"** and wait for build to complete.

## Step 5: Initialize Admin User

After deployment, call this endpoint ONCE:

```bash
curl -X POST https://your-deployment-url.vercel.app/api/admin/init \
  -H "Content-Type: application/json" \
  -d '{"secretKey": "your-random-secret-key-here"}'
```

Or use Postman/Insomnia:
- Method: POST
- URL: `https://your-deployment-url.vercel.app/api/admin/init`
- Body (JSON):
```json
{
  "secretKey": "your-random-secret-key-here"
}
```

**Then DELETE** `app/api/admin/init/route.ts` and redeploy for security.

## Step 6: Add Custom Domain

1. Vercel Dashboard → **Settings** → **Domains**
2. Add: `www.nayetalaash.com`
3. Follow DNS instructions
4. Wait for DNS propagation

## Step 7: Test

Visit: `https://www.nayetalaash.com/admin`

Login:
- Username: `admin`
- Password: `nayetalaash2026project`

## That's It! 🎉

Your admin dashboard is now live at `www.nayetalaash.com/admin`

