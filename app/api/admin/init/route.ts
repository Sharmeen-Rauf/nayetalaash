import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// This is a one-time initialization endpoint
// Call this once after deployment to create the admin user
// DELETE THIS ROUTE AFTER INITIAL SETUP FOR SECURITY

export async function POST(request: NextRequest) {
  try {
    // Optional: Add a secret key check for security
    const { secretKey } = await request.json();
    
    // You can set this in Vercel environment variables
    const INIT_SECRET = process.env.INIT_SECRET || 'change-this-secret-in-production';
    
    if (secretKey !== INIT_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const username = 'admin';
    const password = 'nayetalaash2026project';

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    
    if (existingAdmin) {
      return NextResponse.json({
        message: 'Admin user already exists',
        exists: true,
      });
    }

    // Create admin user
    const admin = new Admin({
      username,
      password,
    });

    await admin.save();
    
    return NextResponse.json({
      message: 'Admin user created successfully!',
      username: 'admin',
      password: 'nayetalaash2026project',
      note: 'Please delete this API route after initialization for security',
    });
  } catch (error: any) {
    console.error('Error initializing admin:', error);
    return NextResponse.json(
      { error: 'Failed to initialize admin', details: error.message },
      { status: 500 }
    );
  }
}

