# 🔄 Update MongoDB Connection String in Vercel

## New MongoDB Connection String

```
mongodb+srv://nayitalaash_db_user:backendnayetalaash@cluster0.yeyguxy.mongodb.net/?appName=Cluster0
```

## ⚠️ IMPORTANT: Update Vercel Environment Variable

The MongoDB password has been updated. You **MUST** update the `MONGODB_URI` environment variable in Vercel:

### Steps:

1. **Go to Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

2. **Find `MONGODB_URI`** in the list

3. **Click the edit/pencil icon** next to it

4. **Update the value to:**
   ```
   mongodb+srv://nayitalaash_db_user:backendnayetalaash@cluster0.yeyguxy.mongodb.net/?appName=Cluster0
   ```

5. **Click "Save"**

6. **Redeploy your application:**
   - Go to **Deployments** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**
   - Wait for deployment to complete

## ✅ After Updating

1. Test the admin creation:
   - Go to `https://www.nayetalaash.com/admin`
   - Click "Create Admin User"
   - Should work with the new connection string

2. Verify connection:
   - Visit: `https://www.nayetalaash.com/api/admin/diagnose`
   - Should show `database.connected: true`

## Old vs New

- **Old Password:** `twelveseptember2025`
- **New Password:** `backendnayetalaash`

**All documentation files have been updated with the new connection string.**
