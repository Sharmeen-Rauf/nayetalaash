# FIX ADMIN LOGIN - Copy & Paste This

## The Problem
You're getting "Invalid credentials" because the admin user either:
- Doesn't exist
- Exists but password is wrong/not hashed properly

## SOLUTION: Run This in Browser Console

**Open browser console (F12) on your website and paste this:**

```javascript
(async () => {
  try {
    console.log('🔍 Step 1: Checking if admin exists...');
    const check = await fetch('https://www.nayetalaash.com/api/admin/check');
    const checkData = await check.json();
    console.log('Check result:', checkData);
    
    if (!checkData.exists) {
      console.log('❌ Admin missing. Creating...');
      const init = await fetch('https://www.nayetalaash.com/api/admin/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
      });
      const initData = await init.json();
      console.log('Init result:', initData);
      
      if (initData.message && initData.message.includes('created')) {
        alert('✅ Admin created! Login with:\nUsername: admin\nPassword: nayetalaash2026project');
      } else {
        alert('Error: ' + JSON.stringify(initData));
      }
    } else {
      console.log('✅ Admin exists. Testing login...');
      const login = await fetch('https://www.nayetalaash.com/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'admin', password: 'nayetalaash2026project' })
      });
      const loginData = await login.json();
      console.log('Login test:', loginData);
      
      if (login.ok) {
        alert('✅ Login works! Try on the page now.');
      } else {
        console.log('❌ Login failed. Recreating admin...');
        const recreate = await fetch('https://www.nayetalaash.com/api/admin/init', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            secretKey: 'change-this-secret-in-production',
            force: true 
          })
        });
        const recreateData = await recreate.json();
        console.log('Recreate result:', recreateData);
        alert(recreateData.message || recreateData.error || JSON.stringify(recreateData));
      }
    }
  } catch (err) {
    console.error('Error:', err);
    alert('Error: ' + err.message);
  }
})();
```

## What This Does

1. ✅ Checks if admin exists
2. ✅ Creates admin if missing
3. ✅ Tests login
4. ✅ Recreates admin if login fails (force mode)

## After Running

Go to `/admin` and login with:
- **Username:** `admin`
- **Password:** `nayetalaash2026project`

## If Still Not Working

Check Vercel logs for:
- "Admin user found, checking password..."
- "Password comparison result: false/true"
- Any error messages

