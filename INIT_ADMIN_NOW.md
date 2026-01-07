# Initialize Admin User - Quick Fix

## The Issue
You're getting "Invalid credentials" which means:
- ✅ Database connection is working
- ❌ Admin user doesn't exist yet

## Solution: Initialize Admin User

### Step 1: Open Browser Console
1. Go to your website: `https://www.nayetalaash.com` (or any page)
2. Press `F12` to open Developer Tools
3. Click on the "Console" tab

### Step 2: Run This Command
Copy and paste this into the console and press Enter:

```javascript
fetch('https://www.nayetalaash.com/api/admin/init', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
})
.then(r => r.json())
.then(data => {
  console.log('Response:', data);
  if (data.message && data.message.includes('created')) {
    alert('✅ Admin user created successfully! Now try logging in.');
  } else if (data.exists) {
    alert('ℹ️ Admin user already exists. Try logging in.');
  } else {
    alert('❌ Error: ' + (data.error || 'Unknown error'));
  }
})
.catch(err => {
  console.error('Error:', err);
  alert('❌ Failed to initialize. Check console for details.');
});
```

### Step 3: Check the Response
You should see one of these:
- ✅ **Success**: "Admin user created successfully!"
- ℹ️ **Already exists**: "Admin user already exists"
- ❌ **Error**: Check the error message

### Step 4: Try Login Again
After successful initialization, go to `https://www.nayetalaash.com/admin` and login with:
- **Username:** `admin`
- **Password:** `nayetalaash2026project`

## If You Get "Unauthorized" Error

The `INIT_SECRET` might not match. Check:

1. **In Vercel Environment Variables:**
   - Make sure `INIT_SECRET` is set to: `change-this-secret-in-production`
   - If you changed it, use your custom value in the `secretKey` field above

2. **Redeploy after changing environment variables:**
   - Vercel Dashboard → Deployments → Redeploy

## Alternative: Using curl (Terminal)

If browser console doesn't work, use terminal:

```bash
curl -X POST https://www.nayetalaash.com/api/admin/init \
  -H "Content-Type: application/json" \
  -d '{"secretKey": "change-this-secret-in-production"}'
```

## Still Not Working?

Check Vercel Function Logs:
1. Vercel Dashboard → Your Project → Deployments → Latest
2. Functions → `/api/admin/init` → Logs
3. Look for error messages

