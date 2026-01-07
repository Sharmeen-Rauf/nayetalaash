# Fix "Database connection failed" Error

## The Problem
You're seeing "Database connection failed" when trying to log in. This means MongoDB connection is failing.

## Common Causes & Solutions

### 1. Missing Environment Variable in Vercel

**Check:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Make sure `MONGODB_URI` is set with this value:
   ```
   mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0
   ```

**Fix:**
- If missing, add it
- Make sure it's set for **Production** environment
- **Redeploy** after adding environment variables

### 2. MongoDB Atlas Network Access Restrictions

**Check:**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Select your cluster
3. Go to **Network Access** (left sidebar)
4. Check IP Access List

**Fix:**
- Add `0.0.0.0/0` to allow all IPs (for Vercel)
- OR add Vercel's IP ranges (less secure but more restrictive)
- Click **Add IP Address** → Enter `0.0.0.0/0` → Confirm

### 3. MongoDB Cluster is Paused

**Check:**
1. Go to MongoDB Atlas
2. Check if your cluster shows "Paused" status

**Fix:**
- Click **Resume** to start the cluster
- Wait 1-2 minutes for it to start

### 4. Incorrect Connection String

**Check:**
- Verify the connection string in Vercel matches exactly:
  ```
  mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0
  ```

**Fix:**
- Copy the connection string from MongoDB Atlas
- Go to **Database Access** → Click **Connect** → Choose **Connect your application**
- Copy the connection string
- Update in Vercel environment variables

### 5. Database User Permissions

**Check:**
1. Go to MongoDB Atlas → **Database Access**
2. Find user `nayitalaash_db_user`
3. Check user has **Read and write to any database** permissions

**Fix:**
- Edit user → Set permissions to **Read and write to any database**
- Save changes

## Quick Test

After fixing, test the connection:

1. **Check Vercel Logs:**
   - Vercel Dashboard → Your Project → **Deployments** → Latest → **Functions** → `/api/admin/login` → **Logs**
   - Look for "MongoDB connected successfully" or error messages

2. **Try Initializing Admin:**
   ```javascript
   // Run in browser console
   fetch('https://www.nayetalaash.com/api/admin/init', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
   })
   .then(r => r.json())
   .then(console.log)
   .catch(console.error);
   ```

## Most Common Fix

**90% of the time, it's one of these:**
1. ✅ Add `MONGODB_URI` environment variable in Vercel
2. ✅ Set MongoDB Atlas Network Access to allow `0.0.0.0/0`
3. ✅ Redeploy after making changes

## Still Not Working?

Check Vercel Function Logs for detailed error messages:
- The logs will show the exact MongoDB error
- Common errors:
  - "authentication failed" → Wrong password in connection string
  - "timeout" → Network access issue
  - "ENOTFOUND" → Wrong cluster URL

