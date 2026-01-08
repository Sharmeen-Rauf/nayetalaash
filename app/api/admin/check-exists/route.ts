import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const admin = await Admin.findOne({ username: 'admin' });
    
    return NextResponse.json({
      exists: !!admin,
      username: admin?.username || null,
      createdAt: admin?.createdAt || null,
    });
  } catch (error) {
    console.error('Error checking admin existence:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to check admin existence', 
        details: errorMessage,
        exists: false
      },
      { status: 500 }
    );
  }
}

