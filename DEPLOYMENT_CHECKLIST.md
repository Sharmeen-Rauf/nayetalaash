# Vercel Deployment Checklist

Follow this checklist to deploy your backend to Vercel successfully.

## Pre-Deployment

- [ ] All code is committed and pushed to Git repository
- [ ] All dependencies are in `package.json`
- [ ] No local `.env.local` file is committed (it's in `.gitignore`)
- [ ] Test the build locally: `npm run build`

## Vercel Setup

- [ ] Create Vercel account or login at https://vercel.com
- [ ] Connect your GitHub/GitLab/Bitbucket repository
- [ ] Create new project in Vercel dashboard

## Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

- [ ] `MONGODB_URI` = `mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0`
- [ ] `JWT_SECRET` = `nayetalaash2026project_secret_key_change_in_production` (or generate a stronger one)
- [ ] `NODE_ENV` = `production`
- [ ] `INIT_SECRET` = (generate a random strong string for admin initialization)

**Important:** Add these for all environments (Production, Preview, Development)

## MongoDB Atlas Configuration

- [ ] MongoDB Atlas cluster is running
- [ ] Network Access allows all IPs (`0.0.0.0/0`) or Vercel IP ranges
- [ ] Database user has read/write permissions
- [ ] Connection string is correct

## Deploy

- [ ] Click "Deploy" in Vercel dashboard
- [ ] Wait for build to complete
- [ ] Check build logs for any errors
- [ ] Note the deployment URL (e.g., `https://your-project.vercel.app`)

## Initialize Admin User

After deployment, choose one method:

### Option 1: Using Init API (Recommended for first time)

- [ ] Call the init endpoint:
  ```bash
  curl -X POST https://www.nayetalaash.com/api/admin/init \
    -H "Content-Type: application/json" \
    -d '{"secretKey": "your-init-secret"}'
  ```
- [ ] Verify admin user was created
- [ ] **DELETE** `app/api/admin/init/route.ts` file after initialization
- [ ] Commit and push the deletion

### Option 2: Direct MongoDB Insert

- [ ] Connect to MongoDB Atlas
- [ ] Use MongoDB Compass or Shell
- [ ] Insert admin user with hashed password
- [ ] Verify user exists

## Custom Domain Setup

- [ ] Go to Vercel Dashboard → Settings → Domains
- [ ] Add domain: `www.nayetalaash.com`
- [ ] Follow DNS configuration instructions
- [ ] Update DNS records at your domain provider
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Verify SSL certificate is active (automatic with Vercel)

## Testing

- [ ] Visit `https://www.nayetalaash.com/admin`
- [ ] Test admin login:
  - Username: `admin`
  - Password: `nayetalaash2026project`
- [ ] Verify dashboard loads correctly
- [ ] Test form submission from customize-a-tour page
- [ ] Verify tour request appears in admin dashboard
- [ ] Test filtering and search functionality
- [ ] Test status updates

## Post-Deployment Security

- [ ] Delete `app/api/admin/init/route.ts` (if used)
- [ ] Change default admin password (recommended)
- [ ] Verify HTTPS is enabled (automatic with Vercel)
- [ ] Review Vercel function logs for any errors
- [ ] Monitor MongoDB Atlas for connection issues

## Monitoring

- [ ] Set up Vercel Analytics (optional)
- [ ] Monitor function execution times
- [ ] Check MongoDB Atlas metrics
- [ ] Set up error alerts (optional)

## Troubleshooting

If something doesn't work:

1. **Check Vercel Deployment Logs**
   - Go to Vercel Dashboard → Deployments → Click on deployment → View Function Logs

2. **Check MongoDB Connection**
   - Verify IP whitelist in MongoDB Atlas
   - Check connection string is correct
   - Verify database user permissions

3. **Check Environment Variables**
   - Verify all variables are set
   - Redeploy after adding variables
   - Check variable names are exact (case-sensitive)

4. **Check Build Errors**
   - Review build logs in Vercel
   - Test build locally: `npm run build`
   - Fix any TypeScript or linting errors

5. **Check API Routes**
   - Verify routes are in `app/api/` directory
   - Check function logs in Vercel dashboard
   - Test endpoints directly

## Quick Commands

```bash
# Test build locally
npm run build

# Deploy to Vercel (if using CLI)
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs
```

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com

