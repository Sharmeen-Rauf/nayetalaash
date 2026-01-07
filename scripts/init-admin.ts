import connectDB from '../lib/mongodb';
import Admin from '../models/Admin';

async function initAdmin() {
  try {
    await connectDB();
    
    const username = 'admin';
    const password = 'nayetalaash2026project';

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const admin = new Admin({
      username,
      password,
    });

    await admin.save();
    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Password: nayetalaash2026project');
    
    process.exit(0);
  } catch (error) {
    console.error('Error initializing admin:', error);
    process.exit(1);
  }
}

initAdmin();

