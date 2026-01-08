# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### 1. MONGODB_URI
**Key:** `MONGODB_URI`  
**Value:** `mongodb+srv://nayitalaash_db_user:backendnayetalaash@cluster0.yeyguxy.mongodb.net/?appName=Cluster0`  
**Environments:** ✅ Production, ✅ Preview, ✅ Development  
**Note:** MongoDB connection string for database access

### 2. JWT_SECRET
**Key:** `JWT_SECRET`  
**Value:** `nayetalaash2026project_secret_key_change_in_production`  
**Environments:** ✅ Production, ✅ Preview, ✅ Development  
**Note:** Secret key for JWT token generation and verification

### 3. INIT_SECRET
**Key:** `INIT_SECRET`  
**Value:** `change-this-secret-in-production`  
**Environments:** ✅ Production, ✅ Preview, ✅ Development  
**Note:** Secret key for admin user initialization endpoint (change this to a strong random string)

### 4. NODE_ENV
**Key:** `NODE_ENV`  
**Value:** `production`  
**Environments:** ✅ Production only  
**Note:** Node.js environment setting

## Step-by-Step Instructions

1. **In the Vercel Environment Variables page:**
   - Make sure "All Environments" is selected (or select Production, Preview, Development separately)

2. **Add each variable:**
   - Click in the "Key" field → Enter the key name (e.g., `MONGODB_URI`)
   - Click in the "Value" field → Enter the value
   - (Optional) Add a note describing what it's for
   - Click "Add Another" to add the next variable

3. **After adding all variables:**
   - Click "Save" button at the bottom right
   - **IMPORTANT:** Redeploy your project for changes to take effect
   - Go to Deployments → Click "..." on latest deployment → "Redeploy"

## Quick Copy-Paste Values

```
MONGODB_URI=mongodb+srv://nayitalaash_db_user:backendnayetalaash@cluster0.yeyguxy.mongodb.net/?appName=Cluster0

JWT_SECRET=nayetalaash2026project_secret_key_change_in_production

INIT_SECRET=change-this-secret-in-production

NODE_ENV=production
```

## After Adding Variables

1. **Redeploy** your project
2. **Initialize admin user** (run in browser console):
   ```javascript
   fetch('https://www.nayetalaash.com/api/admin/init', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
   })
   .then(r => r.json())
   .then(console.log);
   ```
3. **Try logging in** with:
   - Username: `admin`
   - Password: `nayetalaash2026project`

## Security Note

After successful setup:
- Change `INIT_SECRET` to a strong random string
- Consider changing `JWT_SECRET` to a stronger value
- Delete the `/api/admin/init` route after initialization

