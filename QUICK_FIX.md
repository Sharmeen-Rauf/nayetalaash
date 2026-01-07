# Quick Fix for Admin Login 500 Error

## The Problem
You're getting a 500 error when trying to log in. This usually means:
1. **Admin user doesn't exist** (most common)
2. **MongoDB connection issue**
3. **Environment variables not set in Vercel**

## Quick Solution

### Step 1: Initialize Admin User

Open your browser console (F12) on any page of your site and run:

```javascript
fetch('https://www.nayetalaash.com/api/admin/init', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
})
.then(r => r.json())
.then(data => {
  console.log('Response:', data);
  if (data.message) {
    alert('Admin created! Try logging in now.');
  } else {
    alert('Error: ' + (data.error || 'Unknown error'));
  }
})
.catch(err => {
  console.error('Error:', err);
  alert('Failed to initialize admin. Check console for details.');
});
```

### Step 2: Verify Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Make sure these are set:
   - `MONGODB_URI` = `mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0`
   - `JWT_SECRET` = `nayetalaash2026project_secret_key_change_in_production`
   - `INIT_SECRET` = `change-this-secret-in-production`
   - `NODE_ENV` = `production`

### Step 3: Try Login Again

After initializing, try logging in with:
- **Username:** `admin`
- **Password:** `nayetalaash2026project`

## If Still Getting 500 Error

Check Vercel Function Logs:
1. Go to Vercel Dashboard → Your Project → **Deployments**
2. Click on the latest deployment
3. Go to **Functions** tab
4. Click on `/api/admin/login`
5. Check the **Logs** tab for detailed error messages

Common issues:
- **MongoDB connection failed**: Check if MongoDB Atlas allows connections from all IPs (0.0.0.0/0)
- **Admin user exists but password wrong**: Delete and recreate the admin user
- **JWT_SECRET missing**: Make sure it's set in Vercel environment variables

