# Vercel Deployment Guide

This guide will help you deploy the Nayi Talaash backend to Vercel.

## Prerequisites

- Vercel account (sign up at https://vercel.com)
- GitHub repository (or GitLab/Bitbucket)
- MongoDB Atlas connection string

## Deployment Steps

### 1. Push Code to GitHub

Make sure all your code is committed and pushed to your repository:

```bash
git add .
git commit -m "Add backend and admin dashboard"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 3. Configure Environment Variables

In your Vercel project settings, add the following environment variables:

1. Go to your project on Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:

```
MONGODB_URI=mongodb+srv://nayitalaash_db_user:backendnayetalaash@cluster0.yeyguxy.mongodb.net/?appName=Cluster0
JWT_SECRET=nayetalaash2026project_secret_key_change_in_production
NODE_ENV=production
INIT_SECRET=your-secret-key-for-admin-init
```

**Important:** 
- Replace `INIT_SECRET` with a strong random string
- Make sure to add these for **Production**, **Preview**, and **Development** environments
- After adding variables, **redeploy** your application

### 4. Initialize Admin User

After deployment, you need to create the admin user. You have two options:

#### Option A: Using the Init API Route (One-time)

1. After deployment, call this endpoint once:
   ```bash
   curl -X POST https://www.nayetalaash.com/api/admin/init \
     -H "Content-Type: application/json" \
     -d '{"secretKey": "your-secret-key-for-admin-init"}'
   ```

2. **IMPORTANT:** After initialization, delete the `app/api/admin/init/route.ts` file for security

#### Option B: Using MongoDB Atlas

1. Connect to your MongoDB Atlas cluster
2. Use MongoDB Compass or MongoDB Shell
3. Insert the admin user directly:

```javascript
use your-database-name
db.admins.insertOne({
  username: "admin",
  password: "$2a$10$hashedpasswordhere", // Use bcrypt to hash "nayetalaash2026project"
  createdAt: new Date(),
  updatedAt: new Date()
})
```

To hash the password, you can use an online bcrypt tool or run:
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('nayetalaash2026project', 10))"
```

### 5. Configure Custom Domain

1. Go to **Settings** → **Domains** in Vercel
2. Add your domain: `www.nayetalaash.com`
3. Follow Vercel's DNS configuration instructions
4. Update your DNS records as instructed

### 6. Verify Deployment

1. Visit `https://www.nayetalaash.com/admin`
2. Login with:
   - **Username:** `admin`
   - **Password:** `nayetalaash2026project`

## MongoDB Connection for Serverless

The MongoDB connection is optimized for Vercel's serverless environment:
- Connection caching is implemented
- Handles cold starts properly
- Reuses connections across function invocations

## Security Recommendations

1. **Change Default Password:** After first login, change the admin password
2. **Delete Init Route:** Remove `app/api/admin/init/route.ts` after setup
3. **Use Strong JWT Secret:** Generate a strong random string for `JWT_SECRET`
4. **HTTPS Only:** Vercel automatically provides HTTPS
5. **Environment Variables:** Never commit `.env.local` to Git

## Troubleshooting

### MongoDB Connection Issues

- Verify your MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs) or Vercel's IP ranges
- Check that the connection string is correct in environment variables
- Ensure the database user has proper permissions

### Admin Login Not Working

- Verify the admin user exists in the database
- Check that environment variables are set correctly
- Redeploy after adding environment variables

### Build Errors

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### API Routes Not Working

- Check Vercel function logs
- Verify route files are in `app/api/` directory
- Ensure proper HTTP methods are used

## Monitoring

- Check **Vercel Dashboard** → **Functions** for API route performance
- Monitor **MongoDB Atlas** dashboard for database connections
- Use Vercel Analytics for traffic insights

## Support

For issues:
1. Check Vercel deployment logs
2. Check MongoDB Atlas logs
3. Review browser console for frontend errors
4. Check Vercel function logs in dashboard

