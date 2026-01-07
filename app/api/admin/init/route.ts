import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// This is a one-time initialization endpoint
// Call this once after deployment to create the admin user
// DELETE THIS ROUTE AFTER INITIAL SETUP FOR SECURITY

export async function POST(request: NextRequest) {
  try {
    // Optional: Add a secret key check for security
    const { secretKey, force } = await request.json();
    
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
    
    if (existingAdmin && !force) {
      return NextResponse.json({
        message: 'Admin user already exists',
        exists: true,
        note: 'Use { "secretKey": "...", "force": true } to recreate admin user',
      });
    }

    // Delete existing admin if force is true
    if (existingAdmin && force) {
      await Admin.deleteOne({ username });
      console.log('Deleted existing admin user');
    }

    // Create admin user
    const admin = new Admin({
      username,
      password,
    });

    await admin.save();
    console.log('Admin user created successfully');
    
    return NextResponse.json({
      message: 'Admin user created successfully!',
      username: 'admin',
      password: 'nayetalaash2026project',
      note: 'Please delete this API route after initialization for security',
    });
  } catch (error) {
    console.error('Error initializing admin:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Init error details:', { errorMessage, errorStack });
    return NextResponse.json(
      { error: 'Failed to initialize admin', details: errorMessage },
      { status: 500 }
    );
  }
}

