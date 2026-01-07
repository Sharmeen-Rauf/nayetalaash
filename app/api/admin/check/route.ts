import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// Diagnostic endpoint to check if admin exists
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const admin = await Admin.findOne({ username: 'admin' });
    
    if (!admin) {
      return NextResponse.json({
        exists: false,
        message: 'Admin user does not exist. Please initialize it using /api/admin/init'
      });
    }
    
    return NextResponse.json({
      exists: true,
      username: admin.username,
      createdAt: admin.createdAt,
      message: 'Admin user exists in database'
    });
  } catch (error) {
    console.error('Error checking admin:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        exists: false,
        error: 'Failed to check admin user',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

