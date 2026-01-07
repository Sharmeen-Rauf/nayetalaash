# Diagnose and Fix Admin Login - Complete Solution

## What the Logs Show
- ✅ "MongoDB connected successfully" - Database is working
- ❌ `POST 401` for `/api/admin/login` - Login failing
- This means: Admin user doesn't exist OR password is wrong

## Complete Fix Script

**Open browser console (F12) on your website and run this:**

```javascript
(async function() {
  console.log('🔍 Step 1: Checking if admin exists...');
  
  // Check if admin exists
  const checkResponse = await fetch('https://www.nayetalaash.com/api/admin/check');
  const checkData = await checkResponse.json();
  console.log('📊 Check result:', checkData);
  
  if (!checkData.exists) {
    console.log('❌ Admin does NOT exist. Creating now...');
    
    // Create admin
    const initResponse = await fetch('https://www.nayetalaash.com/api/admin/init', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
    });
    
    const initData = await initResponse.json();
    console.log('📊 Init result:', initData);
    
    if (initData.message && initData.message.includes('created')) {
      alert('✅ SUCCESS!\n\nAdmin user created successfully!\n\nNow try logging in:\nUsername: admin\nPassword: nayetalaash2026project');
    } else if (initData.exists) {
      alert('ℹ️ Admin already exists. Try logging in now.');
    } else {
      alert('❌ Error creating admin:\n' + (initData.error || JSON.stringify(initData)));
    }
  } else {
    console.log('✅ Admin EXISTS. Testing login...');
    
    // Test login
    const loginResponse = await fetch('https://www.nayetalaash.com/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'admin',
        password: 'nayetalaash2026project'
      })
    });
    
    const loginData = await loginResponse.json();
    console.log('📊 Login test result:', loginData);
    
    if (loginResponse.ok) {
      alert('✅ Login test SUCCESSFUL!\n\nThe credentials work. Try logging in on the page now.');
    } else {
      alert('❌ Login test FAILED:\n' + (loginData.error || JSON.stringify(loginData)) + '\n\nCheck Vercel logs for "Password comparison result" to see why.');
    }
  }
})();
```

## Step-by-Step Manual Fix

### Option 1: Check Admin Status
```javascript
fetch('https://www.nayetalaash.com/api/admin/check')
  .then(r => r.json())
  .then(console.log);
```

### Option 2: Initialize Admin
```javascript
fetch('https://www.nayetalaash.com/api/admin/init', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ secretKey: 'change-this-secret-in-production' })
})
.then(r => r.json())
.then(data => {
  console.log(data);
  alert(data.message || data.error);
});
```

### Option 3: Test Login Directly
```javascript
fetch('https://www.nayetalaash.com/api/admin/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'admin',
    password: 'nayetalaash2026project'
  })
})
.then(r => r.json())
.then(data => {
  console.log('Status:', r.status);
  console.log('Response:', data);
});
```

## What to Look For in Vercel Logs

After running the scripts, check Vercel logs for:
- ✅ "Admin user found, checking password..." → Admin exists, checking password
- ✅ "Password comparison result: true" → Password is correct
- ❌ "Admin user not found" → Admin doesn't exist (run init)
- ❌ "Password comparison result: false" → Password is wrong
- ❌ "Password validation failed" → Password doesn't match

## Most Likely Solution

**The admin user doesn't exist.** Run Option 2 above to create it.

## If Admin Exists But Login Still Fails

1. Check the exact password in Vercel logs
2. Make sure you're typing: `nayetalaash2026project` (no spaces, case-sensitive)
3. The password might not have been hashed properly when created
4. Solution: Delete admin and recreate using init endpoint

