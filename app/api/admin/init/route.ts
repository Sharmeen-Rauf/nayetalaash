import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// This is a one-time initialization endpoint
// Call this once after deployment to create the admin user
// DELETE THIS ROUTE AFTER INITIAL SETUP FOR SECURITY

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request body', details: parseError instanceof Error ? parseError.message : 'Unknown error' },
        { status: 400 }
      );
    }

    const { secretKey, force } = body || {};
    
    // You can set this in Vercel environment variables
    const INIT_SECRET = process.env.INIT_SECRET || 'change-this-secret-in-production';
    
    if (secretKey !== INIT_SECRET) {
      console.warn('Unauthorized init attempt - secret key mismatch');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Connect to database
    try {
      await connectDB();
      console.log('Database connected successfully for admin init');
    } catch (dbError) {
      console.error('Database connection error in init:', dbError);
      const dbErrorMessage = dbError instanceof Error ? dbError.message : 'Unknown database error';
      return NextResponse.json(
        { 
          error: 'Database connection failed', 
          details: dbErrorMessage,
          hint: 'Please check: 1) MONGODB_URI is set in Vercel, 2) MongoDB Atlas network access allows all IPs (0.0.0.0/0), 3) MongoDB cluster is running'
        },
        { status: 500 }
      );
    }
    
    const username = 'admin';
    const password = 'nayetalaash2026project';

    // Check if admin already exists
    let existingAdmin;
    try {
      existingAdmin = await Admin.findOne({ username });
      console.log(`Admin lookup result: ${existingAdmin ? 'found' : 'not found'}`);
    } catch (findError) {
      console.error('Error finding admin:', findError);
      return NextResponse.json(
        { 
          error: 'Error checking for existing admin', 
          details: findError instanceof Error ? findError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
    
    if (existingAdmin && !force) {
      return NextResponse.json({
        message: 'Admin user already exists',
        exists: true,
        note: 'Use { "secretKey": "...", "force": true } to recreate admin user',
      });
    }

    // Delete existing admin if force is true
    if (existingAdmin && force) {
      try {
        await Admin.deleteOne({ username });
        console.log('Deleted existing admin user');
      } catch (deleteError) {
        console.error('Error deleting existing admin:', deleteError);
        return NextResponse.json(
          { 
            error: 'Error deleting existing admin', 
            details: deleteError instanceof Error ? deleteError.message : 'Unknown error'
          },
          { status: 500 }
        );
      }
    }

    // Create admin user
    try {
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
    } catch (saveError) {
      console.error('Error saving admin user:', saveError);
      const saveErrorMessage = saveError instanceof Error ? saveError.message : 'Unknown error';
      
      // Check for duplicate key error
      if (saveErrorMessage.includes('duplicate key') || saveErrorMessage.includes('E11000')) {
        return NextResponse.json(
          { 
            error: 'Admin user already exists (duplicate key error)', 
            details: 'Try using force: true to recreate',
            hint: 'The admin user may have been created between the check and save operations'
          },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to save admin user', 
          details: saveErrorMessage
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error in admin init:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : undefined;
    console.error('Init error details:', { errorMessage, errorStack, errorName });
    return NextResponse.json(
      { 
        error: 'Failed to initialize admin', 
        details: errorMessage,
        type: errorName
      },
      { status: 500 }
    );
  }
}

