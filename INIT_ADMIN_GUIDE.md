# Admin User Initialization Guide

## Issue
If you're seeing a 500 error when trying to log in, the admin user likely doesn't exist in the database yet.

## Solution: Initialize Admin User

### Step 1: Set Environment Variables in Vercel

Make sure these are set in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `MONGODB_URI`: `mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0`
   - `JWT_SECRET`: `nayetalaash2026project_secret_key_change_in_production`
   - `INIT_SECRET`: `change-this-secret-in-production` (or any secret you want)
   - `NODE_ENV`: `production`

### Step 2: Initialize Admin User

After setting environment variables, call the initialization endpoint:

**Option A: Using curl (from terminal)**
```bash
curl -X POST https://www.nayetalaash.com/api/admin/init \
  -H "Content-Type: application/json" \
  -d '{"secretKey": "change-this-secret-in-production"}'
```

**Option B: Using browser console**
Open browser console on any page and run:
```javascript
fetch('https://www.nayetalaash.com/api/admin/init', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

**Option C: Using Postman or similar tool**
- Method: POST
- URL: `https://www.nayetalaash.com/api/admin/init`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "secretKey": "change-this-secret-in-production"
}
```

### Step 3: Verify Admin User Created

You should receive a response like:
```json
{
  "message": "Admin user created successfully!",
  "username": "admin",
  "password": "nayetalaash2026project"
}
```

### Step 4: Login

Now try logging in at `https://www.nayetalaash.com/admin` with:
- **Username:** `admin`
- **Password:** `nayetalaash2026project`

### Step 5: Security (IMPORTANT)

After successful initialization, **delete the init route** for security:
- Delete the file: `app/api/admin/init/route.ts`
- Commit and redeploy

## Troubleshooting

### Still getting 500 error?
1. Check Vercel function logs for detailed error messages
2. Verify MongoDB connection string is correct
3. Ensure MongoDB Atlas allows connections from all IPs (0.0.0.0/0) or Vercel's IP ranges
4. Check that environment variables are set correctly in Vercel

### Getting 401 Unauthorized on init?
- Make sure the `secretKey` in your request matches the `INIT_SECRET` environment variable

### MongoDB Connection Issues?
- Verify your MongoDB Atlas cluster is running
- Check network access settings in MongoDB Atlas
- Ensure the connection string is correct

