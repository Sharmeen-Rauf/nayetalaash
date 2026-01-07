# CREATE ADMIN USER - The Logs Show It's Missing!

## What the Logs Show
```
"Admin user not found: admin"
```
This confirms: **The admin user doesn't exist in the database.**

## SOLUTION: Create Admin User Now

**Open browser console (F12) on your website and run this:**

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
    alert('✅ SUCCESS!\n\nAdmin user created!\n\nNow go to /admin and login:\nUsername: admin\nPassword: nayetalaash2026project');
  } else if (data.exists) {
    alert('Admin already exists. If login fails, use force mode (see below)');
  } else {
    alert('Error: ' + (data.error || JSON.stringify(data)));
  }
})
.catch(err => {
  console.error('Error:', err);
  alert('Failed: ' + err.message);
});
```

## If Admin Already Exists But Login Fails

Use force mode to recreate:

```javascript
fetch('https://www.nayetalaash.com/api/admin/init', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    secretKey: 'change-this-secret-in-production',
    force: true 
  })
})
.then(r => r.json())
.then(data => {
  console.log('Response:', data);
  alert(data.message || data.error || JSON.stringify(data));
});
```

## After Creating Admin

1. Go to `https://www.nayetalaash.com/admin`
2. Login with:
   - **Username:** `admin`
   - **Password:** `nayetalaash2026project`

## Verify in Logs

After creating, check Vercel logs again. You should see:
- ✅ "Admin user created successfully" 
- ✅ "Admin user found, checking password..."
- ✅ "Password comparison result: true"

Instead of:
- ❌ "Admin user not found: admin"

